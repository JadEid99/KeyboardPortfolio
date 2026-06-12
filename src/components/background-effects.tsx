"use client";

import dynamic from "next/dynamic";

// Decorative only — loaded after hydration so they never compete with
// the hero content or the Spline scene for bandwidth.
const Particles = dynamic(() => import("@/components/Particles"), {
  ssr: false,
});
const Comets = dynamic(() => import("@/components/Comets"), { ssr: false });

export default function BackgroundEffects() {
  return (
    <>
      <Particles
        className="fixed inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
      <Comets
        className="fixed inset-0 -z-5 animate-fade-in"
        quantity={8}
        speed={0.6}
        size={45}
      />
    </>
  );
}
