import { useEffect, useState } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  velocity: number;
  delay: number;
}

export function VolcanoAnimation() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Empty animation component - shapes removed */}
    </div>
  );
}