"use client";

import { useEffect, useRef } from "react";

export function FluidClouds() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Particle system for fluid clouds
    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      life: number;
      maxLife: number;
      size: number;
    }

    const particles: Particle[] = [];
    let time = 0;

    const createCloudParticles = (fromLeft: boolean) => {
      const startX = fromLeft ? -20 : canvas.offsetWidth + 20;
      const startY = canvas.offsetHeight * 0.6 + Math.random() * 100;
      const count = 8 + Math.floor(Math.random() * 6);

      for (let i = 0; i < count; i++) {
        const angle = (Math.PI / 4) * (0.5 + Math.random());
        const speed = 0.5 + Math.random() * 1.5;
        const vx = fromLeft ? Math.cos(angle) * speed : -Math.cos(angle) * speed;
        const vy = -Math.sin(angle) * speed - Math.random() * 0.5;

        particles.push({
          x: startX + (Math.random() - 0.5) * 40,
          y: startY + (Math.random() - 0.5) * 40,
          vx: vx + (Math.random() - 0.5) * 0.3,
          vy: vy + (Math.random() - 0.5) * 0.3,
          life: 0,
          maxLife: 180 + Math.random() * 120,
          size: 30 + Math.random() * 60,
        });
      }
    };

    let lastCloudTime = 0;
    const cloudInterval = 1500;

    const animate = () => {
      time++;

      // Create clouds alternating left/right
      if (time - lastCloudTime > cloudInterval) {
        const fromLeft = Math.floor(time / cloudInterval) % 2 === 0;
        createCloudParticles(fromLeft);
        lastCloudTime = time;
      }

      // Clear canvas with semi-transparent background for motion blur
      ctx.fillStyle = "rgba(11, 20, 11, 0.15)";
      ctx.fillRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);

      // Update and draw particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.life++;

        // Apply simple fluid dynamics
        p.vy += 0.02; // Gravity
        p.vx *= 0.98; // Drag
        p.vy *= 0.98;

        // Perlin-like noise effect for turbulence
        const noiseX = Math.sin(p.x * 0.01 + time * 0.02) * 0.3;
        const noiseY = Math.cos(p.y * 0.01 + time * 0.02) * 0.3;
        p.vx += noiseX * 0.05;
        p.vy += noiseY * 0.05;

        p.x += p.vx;
        p.y += p.vy;

        // Lifespan fade
        const lifeRatio = p.life / p.maxLife;
        let alpha = 0;
        if (lifeRatio < 0.2) {
          alpha = lifeRatio / 0.2; // Fade in
        } else if (lifeRatio > 0.8) {
          alpha = (1 - lifeRatio) / 0.2; // Fade out
        } else {
          alpha = 1;
        }

        // Draw particle as soft cloud
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size);
        gradient.addColorStop(0, `rgba(255, 255, 255, ${alpha * 0.6})`);
        gradient.addColorStop(0.5, `rgba(255, 255, 255, ${alpha * 0.2})`);
        gradient.addColorStop(1, `rgba(255, 255, 255, 0)`);

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        // Remove dead particles
        if (p.life > p.maxLife) {
          particles.splice(i, 1);
        }
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ filter: "blur(1px)" }}
    />
  );
}
