"use client";

import React, { useRef, useEffect, useState, useCallback } from "react";
import { useMousePosition } from "@/utils/mouse";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useTheme } from "next-themes";

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
  type: 'comet' | 'blackhole' | 'beachball' | 'cloud' | 'seagull';
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
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  // Initialize elements based on theme
  useEffect(() => {
    if (!containerRef.current || !mounted) return;

    const rect = containerRef.current.getBoundingClientRect();
    setCanvasSize({ w: rect.width, h: rect.height });

    const newComets: Comet[] = [];
    
    // Use resolvedTheme for more reliable theme detection
    const currentTheme = resolvedTheme || theme;
    
    if (currentTheme === 'dark') {
      // Dark mode: comets and black holes
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
    } else {
      // Light mode: beach balls, clouds, and seagulls
      // Add 5 beach balls
      for (let i = 0; i < 5; i++) {
        newComets.push({
          id: i,
          x: Math.random() * rect.width,
          y: Math.random() * rect.height,
          vx: (Math.random() - 0.5) * speed * 1.5,
          vy: (Math.random() - 0.5) * speed * 1.5,
          size: size + Math.random() * 15,
          opacity: 0.7 + Math.random() * 0.3,
          rotation: Math.random() * 360,
          rotationSpeed: (Math.random() - 0.5) * 2,
          type: 'beachball',
        });
      }
      
      // Add 6-7 clouds (horizontal movement only)
      for (let i = 0; i < 6 + Math.floor(Math.random() * 2); i++) {
        newComets.push({
          id: 5 + i,
          x: Math.random() * rect.width,
          y: Math.random() * rect.height * 0.6, // Keep clouds in upper portion
          vx: (Math.random() - 0.5) * speed * 0.8, // Horizontal movement only
          vy: 0, // No vertical movement for clouds
          size: (size * 3) + Math.random() * 60, // 3x bigger clouds
          opacity: 0.6 + Math.random() * 0.4,
          rotation: 0, // Clouds don't rotate
          rotationSpeed: 0,
          type: 'cloud',
        });
      }
      
      // Add 3 seagulls
      for (let i = 0; i < 3; i++) {
        newComets.push({
          id: 11 + i,
          x: Math.random() * rect.width,
          y: Math.random() * rect.height,
          vx: (Math.random() - 0.5) * speed * 1.2,
          vy: (Math.random() - 0.5) * speed * 1.2,
          size: size * 0.8 + Math.random() * 8,
          opacity: 0.8 + Math.random() * 0.2,
          rotation: 0, // Seagulls maintain orientation
          rotationSpeed: 0,
          type: 'seagull',
        });
      }
    }
    
    setComets(newComets);
  }, [quantity, speed, size, theme, resolvedTheme, mounted]);

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
        let newVx = comet.vx + (dx * attraction * 0.0003);
        let newVy = comet.vy + (dy * attraction * 0.0003);
        
        // Apply movement restrictions based on type
        if (comet.type === 'cloud') {
          // Clouds only move horizontally
          newVy = 0;
        }
        
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

  // Don't render until mounted to prevent hydration mismatch
  if (!mounted) {
    return (
      <div
        className={cn(
          className,
          "pointer-events-none"
        )}
        ref={containerRef}
        aria-hidden="true"
      />
    );
  }

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
          {/* Optimized images with performance optimizations */}
          <Image
            src={
              comet.type === 'blackhole' ? "/assets/images/transparent_blackhole.gif" :
              comet.type === 'comet' ? "/assets/images/blue_comet.gif" :
              comet.type === 'beachball' ? "/assets/images/beach_ball.png" :
              comet.type === 'cloud' ? "/assets/images/cloud.png" :
              "/assets/images/seagull.gif"
            }
            alt={
              comet.type === 'blackhole' ? "Black Hole" :
              comet.type === 'comet' ? "Comet" :
              comet.type === 'beachball' ? "Beach Ball" :
              comet.type === 'cloud' ? "Cloud" :
              "Seagull"
            }
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
                : comet.type === 'comet'
                ? `brightness(${0.9 + Math.sin(comet.id) * 0.2})`
                : comet.type === 'beachball'
                ? `brightness(${1.0 + Math.sin(comet.id) * 0.1}) saturate(1.1)`
                : comet.type === 'cloud'
                ? `brightness(${0.9 + Math.sin(comet.id) * 0.1})`
                : `brightness(${1.0 + Math.sin(comet.id) * 0.1})`,
            }}
            priority={comet.id < 3} // Prioritize first 3 elements
            unoptimized={comet.type === 'comet' || comet.type === 'blackhole' || comet.type === 'seagull'} // GIFs need unoptimized
          />
        </div>
      ))}
    </div>
  );
}
