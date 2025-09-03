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
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    // Generate particles for lava/ash effect
    const newParticles: Particle[] = [];
    for (let i = 0; i < 20; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: 100,
        size: Math.random() * 8 + 4,
        opacity: Math.random() * 0.8 + 0.2,
        velocity: Math.random() * 2 + 1,
        delay: Math.random() * 3
      });
    }
    setParticles(newParticles);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Volcano silhouette */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
        <svg
          width="300"
          height="200"
          viewBox="0 0 300 200"
          className="opacity-20"
        >
          {/* Mountain base */}
          <path
            d="M 50 200 L 150 50 L 250 200 Z"
            fill="hsl(var(--muted))"
            className="animate-pulse"
          />
          {/* Crater */}
          <ellipse
            cx="150"
            cy="50"
            rx="20"
            ry="8"
            fill="hsl(var(--primary))"
            className="animate-pulse"
            style={{
              filter: 'drop-shadow(0 0 20px hsl(var(--primary) / 0.6))'
            }}
          />
        </svg>
      </div>

      {/* Animated particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute w-2 h-2 bg-primary rounded-full animate-bounce"
          style={{
            left: `${particle.x}%`,
            bottom: `${particle.y - 100}px`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            opacity: particle.opacity,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${2 + particle.velocity}s`,
            filter: `drop-shadow(0 0 ${particle.size}px hsl(var(--primary) / 0.8))`
          }}
        />
      ))}

      {/* Floating ash particles */}
      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <div
            key={`ash-${i}`}
            className="absolute w-1 h-1 bg-muted-foreground rounded-full opacity-30 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 50}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
    </div>
  );
}