import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

const ShaderPlane = ({ vertexShader, fragmentShader, uniforms }) => {
  const meshRef = useRef(null);
  const { size } = useThree();

  useFrame((state) => {
    if (meshRef.current) {
      const material = meshRef.current.material;
      material.uniforms.u_time.value = state.clock.elapsedTime;
      // Ensure resolution is updated on resize
      material.uniforms.u_resolution.value.set(size.width, size.height, 1.0);
    }
  });

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        side={THREE.DoubleSide}
        depthWrite={false}
      />
    </mesh>
  );
};

const Animation = ({
  intensity = 1.0,
  className = "absolute top-0 left-0 w-full h-screen -z-[1] pointer-events-none",
}) => {
  const vertexShader = `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = vec4(position, 1.0);
    }
  `;

  const fragmentShader = `
    precision highp float;
    varying vec2 vUv;
    uniform float u_time;
    uniform float u_intensity;
    uniform vec3 u_resolution;

    void main() {
        // --- CENTER THE COORDINATES ---
        // Using vUv (0 to 1) is more reliable for centering across different screen sizes
        vec2 uv = vUv * 2.0 - 1.0;
        
        // Adjust for aspect ratio so the circles remain circles
        float aspect = u_resolution.x / u_resolution.y;
        uv.x *= aspect;

        // --- POLAR COORDINATES (Tunnel Logic) ---
        float r = length(uv);
        float a = atan(uv.y, uv.x);

        // Warp space to create the infinite tunnel effect
        // 1.0/r creates the depth. u_time moves it forward.
        // Reduced the multiplier for 1.0/r to make the tunnel appear "wider" and bigger
        vec2 warp = vec2(0.5 / r + u_time * 0.2, a / 3.14159);

        // --- GRID / WIREFRAME PATTERN ---
        // Create the "digital" grid lines
        float rings = step(0.97, fract(warp.x * 8.0));        // Fewer, thicker rings for "bigger" look
        float spokes = step(0.97, fract(warp.y * 10.0));      // Fewer spokes
        float grid = max(rings, spokes);

        // Add a "shimmer" to the grid lines so they aren't static
        float shimmer = sin(warp.x * 15.0 + u_time * 4.0) * 0.5 + 0.5;
        grid *= shimmer;

        // --- COLOR PALETTE ---
        vec3 spaceBlack  = vec3(0.01, 0.0, 0.02);  // Deepest space
        vec3 spacePurple = vec3(0.1, 0.02, 0.2);   // Deep space purple
        vec3 neonRed     = vec3(0.9, 0.1, 0.2);    // Hackaccino Red
        vec3 hotPink     = vec3(1.0, 0.2, 0.8);    // Highlights
        vec3 white       = vec3(1.0, 1.0, 1.0);

        // --- COMPOSITION ---
        // Create a deep space purple gradient background
        vec3 color = mix(spacePurple, spaceBlack, r * 0.5);
        
        // Color the grid lines
        vec3 gridColor = mix(neonRed, hotPink, sin(warp.y * 3.0) * 0.5 + 0.5);
        color = mix(color, gridColor, grid);

        // --- FOG & DEPTH ---
        // Smooth out the center fade
        float fog = smoothstep(0.0, 0.5, r);
        color *= fog;

        // --- GLOW PULSE ---
        float pulse = exp(-15.0 * fract(warp.x * 0.5 + u_time * 0.4));
        color += white * pulse * fog * 0.4;

        // --- VIGNETTE ---
        // Use the deep space purple for the vignette/outer edges
        float vignette = smoothstep(2.2, 0.8, r);
        color = mix(spaceBlack, color, vignette);

        gl_FragColor = vec4(color * u_intensity, 1.0);
    }
  `;

  const shaderUniforms = useMemo(
    () => ({
      u_time: { value: 0 },
      u_resolution: { value: new THREE.Vector3(1, 1, 1) },
      u_intensity: { value: intensity },
    }),
    [intensity]
  );

  return (
    <div className={className}>
      <Canvas 
        className="w-full h-full" 
        dpr={[1, 2]} 
        gl={{ antialias: true, powerPreference: "high-performance" }}
      >
        <ShaderPlane
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
          uniforms={shaderUniforms}
        />
      </Canvas>
    </div>
  );
};

export default Animation;