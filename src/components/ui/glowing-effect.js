import React, { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "../../lib/utils";

export const GlowingEffect = ({
  spread = 40,
  glow = true,
  disabled = false,
  proximity = 64,
  inactiveZone = 0.01,
  className,
  variant = "default",
  borderWidth = 0.5,
}) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);
  const ref = useRef(null);

  const handleMouseMove = useCallback(
    (e) => {
      if (!ref.current || disabled) return;

      const rect = ref.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      setPosition({ x, y });

      if (glow) {
        const center = { x: rect.width / 2, y: rect.height / 2 };
        const distanceFromCenter = Math.hypot(x - center.x, y - center.y);
        // Simple proximity logic: always show when inside, maybe fade edges
        setOpacity(1); 
      }
    },
    [disabled, glow]
  );

  const handleMouseLeave = useCallback(() => {
    setOpacity(0);
  }, []);

  useEffect(() => {
    const element = ref.current?.parentElement;
    if (!element) return;

    element.addEventListener("mousemove", handleMouseMove);
    element.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      element.removeEventListener("mousemove", handleMouseMove);
      element.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [handleMouseMove, handleMouseLeave]);

  return (
    <div
      ref={ref}
      className={cn(
        "pointer-events-none absolute -inset-px rounded-xl opacity-0 transition-opacity duration-300",
        className
      )}
      style={{
        opacity,
        background: `radial-gradient(${spread * 5}px circle at ${position.x}px ${position.y}px, var(--glow-color, #FF3300), transparent 100%)`,
        maskImage: "linear-gradient(black, black), linear-gradient(black, black)",
        maskClip: "content-box, border-box",
        maskComposite: "exclude",
        WebkitMaskComposite: "xor",
        padding: `${borderWidth}px`,
      }}
    />
  );
};
