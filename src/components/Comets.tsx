"use client";

import React, { useRef, useEffect, useState, useCallback } from "react";
import { useMousePosition } from "@/utils/mouse";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface CometProps {
  className?: string;
  quantity?: number;
  speed?: number;
  size?: number;
}

interface Comet {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  rotation: number;
  rotationSpeed: number;
  type: 'comet' | 'blackhole';
}

export default function Comets({
  className = "",
  quantity = 8, // Optimized quantity
  speed = 0.5,
  size = 40,
}: CometProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();
  const lastFrameTime = useRef<number>(0);
  const [comets, setComets] = useState<Comet[]>([]);
  const { x: mouseX, y: mouseY } = useMousePosition();
  const [canvasSize, setCanvasSize] = useState({ w: 0, h: 0 });

  // Initialize comets and black holes
  useEffect(() => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    setCanvasSize({ w: rect.width, h: rect.height });

    const newComets: Comet[] = [];
    
    // Add regular comets
    for (let i = 0; i < quantity; i++) {
      newComets.push({
        id: i,
        x: Math.random() * rect.width,
        y: Math.random() * rect.height,
        vx: (Math.random() - 0.5) * speed * 2,
        vy: (Math.random() - 0.5) * speed * 2,
        size: size + Math.random() * 10,
        opacity: 0.5 + Math.random() * 0.5,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 1,
        type: 'comet',
      });
    }
    
    // Add 2 black holes with different properties
    for (let i = 0; i < 2; i++) {
      newComets.push({
        id: quantity + i,
        x: Math.random() * rect.width,
        y: Math.random() * rect.height,
        vx: (Math.random() - 0.5) * speed * 0.5, // Slower movement
        vy: (Math.random() - 0.5) * speed * 0.5,
        size: (size * 5) + Math.random() * 24, // 20% larger (1.5 * 1.2 = 1.8)
        opacity: 0.6 + Math.random() * 0.4,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 0.5, // Slower rotation
        type: 'blackhole',
      });
    }
    
    setComets(newComets);
  }, [quantity, speed, size]);

  // Update canvas size on resize
  useEffect(() => {
    const handleResize = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setCanvasSize({ w: rect.width, h: rect.height });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Optimized animation loop with throttling and GPU acceleration
  const animate = useCallback((currentTime: number) => {
    // Throttle to ~30fps for better performance
    if (currentTime - lastFrameTime.current < 33) {
      animationRef.current = requestAnimationFrame(animate);
      return;
    }
    lastFrameTime.current = currentTime;

    setComets((prevComets) =>
      prevComets.map((comet) => {
        // Mouse interaction - comets are attracted to mouse (reduced range for performance)
        const dx = mouseX - comet.x;
        const dy = mouseY - comet.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const attraction = distance < 120 ? (120 - distance) / 120 : 0;
        
        // Update velocity with mouse attraction (reduced strength)
        const newVx = comet.vx + (dx * attraction * 0.0003);
        const newVy = comet.vy + (dy * attraction * 0.0003);
        
        // Add minimal randomness to movement
        const newX = comet.x + newVx + (Math.random() - 0.5) * 0.1;
        const newY = comet.y + newVy + (Math.random() - 0.5) * 0.1;

        // Wrap around screen
        const wrappedX = newX < -comet.size ? canvasSize.w + comet.size : 
                        newX > canvasSize.w + comet.size ? -comet.size : newX;
        const wrappedY = newY < -comet.size ? canvasSize.h + comet.size : 
                        newY > canvasSize.h + comet.size ? -comet.size : newY;

        return {
          ...comet,
          x: wrappedX,
          y: wrappedY,
          vx: newVx * 0.998, // Slight friction
          vy: newVy * 0.998,
          rotation: comet.rotation + comet.rotationSpeed,
        };
      })
    );
    
    animationRef.current = requestAnimationFrame(animate);
  }, [mouseX, mouseY, canvasSize]);

  useEffect(() => {
    if (comets.length === 0) return;
    
    animationRef.current = requestAnimationFrame(animate);
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [comets.length, animate]);

  return (
    <div
      className={cn(
        className,
        "pointer-events-none"
      )}
      ref={containerRef}
      aria-hidden="true"
    >
      {comets.map((comet) => (
        <div
          key={comet.id}
          className="absolute will-change-transform"
          style={{
            transform: `translate3d(${comet.x}px, ${comet.y}px, 0) rotate(${comet.rotation}deg)`,
            opacity: comet.opacity,
            // GPU acceleration hints
            backfaceVisibility: 'hidden',
            perspective: '1000px',
          }}
        >
          {/* Optimized GIF with performance optimizations */}
          <Image
            src={comet.type === 'blackhole' ? "/assets/images/transparent_blackhole.gif" : "/assets/images/blue_comet.gif"}
            alt={comet.type === 'blackhole' ? "Black Hole" : "Comet"}
            width={comet.size}
            height={comet.size}
            className="drop-shadow-lg"
            style={{
              // Performance optimizations
              imageRendering: 'auto',
              willChange: 'transform',
              // Different effects for different types
              filter: comet.type === 'blackhole' 
                ? `brightness(${0.8 + Math.sin(comet.id) * 0.3}) contrast(1.1)` 
                : `brightness(${0.9 + Math.sin(comet.id) * 0.2})`,
            }}
            priority={comet.id < 3} // Prioritize first 3 elements
            unoptimized={false} // Let Next.js optimize the GIF
          />
        </div>
      ))}
    </div>
  );
}
