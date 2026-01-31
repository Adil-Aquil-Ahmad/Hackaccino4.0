import React from "react";
import { cn } from "../../lib/utils";

export const NoiseBackground = ({
  children,
  containerClassName,
  className,
  gradientColors = ["rgb(255, 51, 0)", "rgb(255, 153, 26)", "rgb(255, 87, 34)"],
}) => {
  return (
    <div className={cn("relative flex items-center justify-center", containerClassName)}>
      <div
        className={cn(
          "absolute inset-0 overflow-hidden rounded-full",
          className
        )}
      >
        <div
          className="absolute inset-0 opacity-100"
          style={{
            background: `linear-gradient(45deg, ${gradientColors.join(", ")})`,
            backgroundSize: "200% 200%",
            animation: "gradient-animation 5s ease infinite",
          }}
        />
        <div className="absolute inset-0 opacity-[0.15] mix-blend-overlay">
          <svg
            className="h-full w-full"
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
          >
            <filter id="noise">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.85"
                numOctaves="4"
                stitchTiles="stitch"
              />
            </filter>
            <rect width="100%" height="100%" filter="url(#noise)" />
          </svg>
        </div>
      </div>
      <div className="relative z-10">{children}</div>
      <style jsx>{`
        @keyframes gradient-animation {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </div>
  );
};
