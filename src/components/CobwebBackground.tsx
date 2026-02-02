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
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        canvas.width = parent.offsetWidth * dpr;
        canvas.height = parent.offsetHeight * dpr;
        ctx.scale(dpr, dpr);
      }
    };
    setCanvasSize();

    // Constellation clustering logic - scaled for mobile
    const isMobile = window.innerWidth < 768;
    const clusters = isMobile ? 4 : 6;
    const pointsPerCluster = isMobile ? 10 : 15;
    const points: any[] = [];
    const connectionThreshold = 100; // Reduced from 120

    const initPoints = () => {
      points.length = 0;
      const w = canvas.width / (window.devicePixelRatio || 1);
      const h = canvas.height / (window.devicePixelRatio || 1);

      for (let c = 0; c < clusters; c++) {
        const centerX = Math.random() * w;
        const centerY = Math.random() * h;
        const clusterVelX = (Math.random() - 0.5) * 0.15;
        const clusterVelY = (Math.random() - 0.5) * 0.15;

        for (let p = 0; p < pointsPerCluster; p++) {
          points.push({
            x: centerX + (Math.random() - 0.5) * 200,
            y: centerY + (Math.random() - 0.5) * 200,
            vx: clusterVelX + (Math.random() - 0.5) * 0.2,
            vy: clusterVelY + (Math.random() - 0.5) * 0.2,
          });
        }
      }
    };
    initPoints();

    const draw = () => {
      const theme = THEMES[themeIndexRef.current];
      const w = canvas.width / (window.devicePixelRatio || 1);
      const h = canvas.height / (window.devicePixelRatio || 1);
      ctx.clearRect(0, 0, w, h);

      points.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;

        const mdx = p.x - mouseRef.current.x;
        const mdy = p.y - mouseRef.current.y;
        const mdistSq = mdx * mdx + mdy * mdy;
        if (mdistSq < 22500) { // 150*150
          const mdist = Math.sqrt(mdistSq);
          const force = (150 - mdist) / 1500;
          p.vx += mdx * force;
          p.vy += mdy * force;
        }

        if (p.x < 0) p.vx = Math.abs(p.vx);
        if (p.x > w) p.vx = -Math.abs(p.vx);
        if (p.y < 0) p.vy = Math.abs(p.vy);
        if (p.y > h) p.vy = -Math.abs(p.vy);

        p.vx *= 0.99;
        p.vy *= 0.99;
      });

      // Optimized Draw connections
      ctx.lineWidth = 0.5;
      const len = points.length;
      for (let i = 0; i < len; i++) {
        const p1 = points[i];
        for (let j = i + 1; j < len; j++) {
          const p2 = points[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distSq = dx * dx + dy * dy;
          if (distSq < 10000) { // connectionThreshold^2
            const dist = Math.sqrt(distSq);
            const opacity = (1 - dist / connectionThreshold) * 0.3;
            ctx.strokeStyle = theme.primary.replace("0.35", opacity.toString());
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      points.forEach(p => {
        ctx.fillStyle = theme.dot;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1, 0, Math.PI * 2);
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
