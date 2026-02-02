import React, { useRef, useEffect } from "react";

const THEMES = [
  { name: "Emerald", primary: "rgba(80,200,120,0.35)", dot: "rgba(110,231,183,0.8)" },
  { name: "Midnight", primary: "rgba(56,189,248,0.35)", dot: "rgba(125,211,252,0.8)" },
  { name: "Nebula", primary: "rgba(192,132,252,0.35)", dot: "rgba(216,180,254,0.8)" },
  { name: "Amber", primary: "rgba(251,191,36,0.35)", dot: "rgba(252,211,77,0.8)" },
];

const CobwebBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const themeIndexRef = useRef(0);
  const mouseRef = useRef({ x: -1000, y: -1000 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const setCanvasSize = () => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.offsetWidth;
        canvas.height = parent.offsetHeight;
      }
    };
    setCanvasSize();

    // Constellation clustering logic
    const clusters = 6;
    const pointsPerCluster = 15;
    const points: any[] = [];

    const initPoints = () => {
      points.length = 0;
      for (let c = 0; c < clusters; c++) {
        const centerX = Math.random() * canvas.width;
        const centerY = Math.random() * canvas.height;
        const clusterVelX = (Math.random() - 0.5) * 0.2;
        const clusterVelY = (Math.random() - 0.5) * 0.2;

        for (let p = 0; p < pointsPerCluster; p++) {
          points.push({
            x: centerX + (Math.random() - 0.5) * 200,
            y: centerY + (Math.random() - 0.5) * 200,
            vx: clusterVelX + (Math.random() - 0.5) * 0.3,
            vy: clusterVelY + (Math.random() - 0.5) * 0.3,
          });
        }
      }
    };
    initPoints();

    const draw = () => {
      const theme = THEMES[themeIndexRef.current];
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      points.forEach(p => {
        // Drifting clustering
        p.x += p.vx;
        p.y += p.vy;

        // Mouse interaction (gentle repulsion)
        const mdx = p.x - mouseRef.current.x;
        const mdy = p.y - mouseRef.current.y;
        const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
        if (mdist < 150) {
          const force = (150 - mdist) / 1500;
          p.vx += mdx * force;
          p.vy += mdy * force;
        }

        // Keep in bounds
        if (p.x < 0) p.vx = Math.abs(p.vx);
        if (p.x > canvas.width) p.vx = -Math.abs(p.vx);
        if (p.y < 0) p.vy = Math.abs(p.vy);
        if (p.y > canvas.height) p.vy = -Math.abs(p.vy);

        // Friction to prevent runaway speed
        p.vx *= 0.99;
        p.vy *= 0.99;
      });

      // Draw connections
      for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
          const dx = points[i].x - points[j].x;
          const dy = points[i].y - points[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            const opacity = (1 - dist / 120) * 0.4;
            ctx.strokeStyle = theme.primary.replace("0.35", opacity.toString());
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(points[i].x, points[i].y);
            ctx.lineTo(points[j].x, points[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw points
      points.forEach(p => {
        ctx.fillStyle = theme.dot;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.2, 0, Math.PI * 2);
        ctx.fill();
      });
    };

    let animationId: number;
    const animate = () => {
      draw();
      animationId = requestAnimationFrame(animate);
    };
    animate();

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    const handleClick = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const mx = e.clientX - rect.left;
      const my = e.clientY - rect.top;

      // Burst Effect
      points.forEach(p => {
        const dx = p.x - mx;
        const dy = p.y - my;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 300) {
          const force = (300 - dist) / 20;
          p.vx += (dx / Math.max(1, dist)) * force;
          p.vy += (dy / Math.max(1, dist)) * force;
        }
      });

      // Cycle Theme
      themeIndexRef.current = (themeIndexRef.current + 1) % THEMES.length;
    };

    const handleResize = () => {
      setCanvasSize();
      initPoints();
    };

    const parent = canvas.parentElement;
    if (parent) {
      parent.addEventListener("mousemove", handleMouseMove);
      parent.addEventListener("click", handleClick);
    }
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      if (parent) {
        parent.removeEventListener("mousemove", handleMouseMove);
        parent.removeEventListener("click", handleClick);
      }
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: -1,
        pointerEvents: "none",
        width: "100%",
        height: "100%",
        backgroundColor: "transparent",
      }}
    />
  );
};

export default CobwebBackground;
