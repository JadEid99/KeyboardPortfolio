"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/core";

import "@splidejs/react-splide/css";

const PROJECTS = [
  {
    id: 1,
    name: "Evolve Consulting",
    description: `A technical consulting company for startups and growing businesses.
    We provide end-to-end support to help you navigate the complexities of technology, offering
    services from initial technical consultations and project planning to the full development
    and deployment of your digital products.`,
    link: "https://www.evo-devs.com",
    images: [
      "/assets/projects-screenshots/evolve/evolve.png"
    ],
  },
  {
    id: 2,
    name: "Open Telekom Cloud",
    description: `Enterprise cloud architecture project where I architected and deployed Open Telekom Cloud (OTC) 
internal cloud platform for major customers including DHL. Led comprehensive lift-and-shift migrations, 
reducing operational costs while enhancing infrastructure scalability.`,
    link: "https://open-telekom-cloud.com",
    images: [
      "/assets/projects-screenshots/OTC/otc1.jpeg",
      "/assets/projects-screenshots/OTC/otc2.jpg",
    ],
  },
  {
    id: 3,
    name: "sewts.VELUM",
    description: `Revolutionary industrial automation system that transforms textile handling with AI-driven robotic precision. 
As a Software Engineer at sewts, I contributed to bringing this system from development to production, achieving a 40% increase 
in system output while working across robotics, computer vision, and hardware integration.`,
    link: "https://www.sewts.com/automation-solutions/sewts-velum",
    images: [
      "/assets/projects-screenshots/sewts/sewts_velum.jpg",
      "/assets/projects-screenshots/sewts/sewts_velum2.webp",
    ],
  },
  {
    id: 4,
    name: "SortBot - BMW",
    description: `Breakthrough robotics automation system deployed across BMW manufacturing plants in Germany. 
     SortBot automates KLT (small load carrier) handling for vehicle parts, integrating UR10 robots with 
     computer vision to revolutionize automotive production workflows.`,
    link: "https://www.bmw.com",
    images: ["/assets/projects-screenshots/BMW/bmw_sortbot1.jpg"],
  },
];
function Page() {
  return (
    <>
      <div className="container mx-auto md:px-[50px] xl:px-[150px] text-zinc-300 h-full">
        <h1 className="text-4xl mt-[100px] mb-[50px]">Projects</h1>
        <ul className="grid  md:grid-cols-2 lg:grid-cols-3 gap-10 place-content-around ">
          {PROJECTS.map((project) => (
            <li
              className="w-[300px] h-[400px] border-[.5px] rounded-md border-zinc-600"
              key={project.id}
              style={{ backdropFilter: "blur(2px)" }}
            >
              <div className="h-[200px]">
                <Splide
                  options={{
                    type: "loop",
                    interval: 3000,
                    autoplay: true,
                    speed: 2000,
                    perMove: 1,
                    rewind: true,
                    easing: "cubic-bezier(0.25, 1, 0.5, 1)",
                    arrows: false,
                  }}
                  aria-label="My Favorite Images"
                >
                  {project.images.map((image) => (
                    <SplideSlide key={image}>
                      <Image
                        src={image}
                        alt={`screenshot of "${project.name}`}
                        className="w-[300px] h-[200px] rounded-md bg-zinc-900 "
                        width={300}
                        height={400}
                        style={{ height: "200px" }}
                      />
                    </SplideSlide>
                  ))}
                </Splide>
              </div>
              <div className="p-4 text-zinc-300">
                <h2 className="text-xl">{project.name}</h2>
                <p className="mt-2 text-xs text-zinc-500">
                  {project.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Page;
