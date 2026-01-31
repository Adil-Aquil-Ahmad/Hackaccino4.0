import React, { useEffect, useRef, useState } from "react";

export const SparklesCore = (props) => {
  const {
    id,
    className,
    background,
    minSize,
    maxSize,
    particleDensity,
    particleColor,
    speed = 1,
  } = props;
  
  const canvasRef = useRef(null);
  const [context, setContext] = useState(null);
  const [particles, setParticles] = useState([]);
  const animationRef = useRef(null);

  useEffect(() => {
    if (canvasRef.current) {
      setContext(canvasRef.current.getContext("2d"));
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current && canvasRef.current.parentElement) {
        canvasRef.current.width = canvasRef.current.parentElement.clientWidth;
        canvasRef.current.height = canvasRef.current.parentElement.clientHeight;
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial sizing

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (context && canvasRef.current) {
      const canvas = canvasRef.current;
      const { width, height } = canvas;
      const newParticles = [];
      const count = particleDensity || 100;

      for (let i = 0; i < count; i++) {
        newParticles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          size: Math.random() * ((maxSize || 1) - (minSize || 0.1)) + (minSize || 0.1),
          speedX: (Math.random() - 0.5) * (speed || 1),
          speedY: (Math.random() - 0.5) * (speed || 1),
          opacity: Math.random(),
        });
      }
      setParticles(newParticles);
    }
  }, [context, minSize, maxSize, particleDensity, speed]);

  useEffect(() => {
    if (context && particles.length > 0) {
      const canvas = canvasRef.current;
      
      const render = () => {
        if (!canvas) return;
        context.clearRect(0, 0, canvas.width, canvas.height);
        
        if (background && background !== 'transparent') {
          context.fillStyle = background;
          context.fillRect(0, 0, canvas.width, canvas.height);
        }

        particles.forEach((p) => {
          p.x += p.speedX;
          p.y += p.speedY;

          if (p.x < 0) p.x = canvas.width;
          if (p.x > canvas.width) p.x = 0;
          if (p.y < 0) p.y = canvas.height;
          if (p.y > canvas.height) p.y = 0;

          // Optional: twinkle effect
          p.opacity += (Math.random() - 0.5) * 0.1;
          if (p.opacity < 0) p.opacity = 0;
          if (p.opacity > 1) p.opacity = 1;

          context.globalAlpha = p.opacity;
          context.fillStyle = particleColor || "#FFFFFF";
          context.beginPath();
          context.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          context.fill();
        });
        context.globalAlpha = 1; // Reset alpha

        animationRef.current = requestAnimationFrame(render);
      };
      
      render();
    }
    
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [particles, context, background, particleColor]);

  return (
    <canvas
      ref={canvasRef}
      id={id}
      className={className}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        background: background === 'transparent' ? 'transparent' : background,
      }}
    />
  );
};
