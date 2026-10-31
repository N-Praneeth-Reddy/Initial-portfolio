"use client";
import { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

const PARTICLE_COUNT = 65;
const CONNECTION_DIST = 4.8;

function NetworkMesh() {
  const groupRef = useRef<THREE.Group>(null);
  const { mouse } = useThree();

  const particlePositions = useMemo(() => {
    const arr = new Float32Array(PARTICLE_COUNT * 3);
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 28;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 16;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 5;
    }
    return arr;
  }, []);

  const linePositions = useMemo(() => {
    const lines: number[] = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      for (let j = i + 1; j < PARTICLE_COUNT; j++) {
        const dx = particlePositions[i * 3] - particlePositions[j * 3];
        const dy = particlePositions[i * 3 + 1] - particlePositions[j * 3 + 1];
        const dz = particlePositions[i * 3 + 2] - particlePositions[j * 3 + 2];
        if (Math.sqrt(dx * dx + dy * dy + dz * dz) < CONNECTION_DIST) {
          lines.push(
            particlePositions[i * 3], particlePositions[i * 3 + 1], particlePositions[i * 3 + 2],
            particlePositions[j * 3], particlePositions[j * 3 + 1], particlePositions[j * 3 + 2]
          );
        }
      }
    }
    return new Float32Array(lines);
  }, [particlePositions]);

  const pointsGeo = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(particlePositions, 3));
    return geo;
  }, [particlePositions]);

  const linesGeo = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(linePositions, 3));
    return geo;
  }, [linePositions]);

  useFrame((state, delta) => {
    if (!groupRef.current) return;
    const t = state.clock.elapsedTime;
    const targetY = t * 0.012 + mouse.x * 0.04;
    const targetX = t * 0.006 + mouse.y * 0.025;
    groupRef.current.rotation.y = THREE.MathUtils.damp(
      groupRef.current.rotation.y,
      targetY,
      1.5,
      delta
    );
    groupRef.current.rotation.x = THREE.MathUtils.damp(
      groupRef.current.rotation.x,
      targetX,
      1.5,
      delta
    );
  });

  return (
    <group ref={groupRef}>
      <points geometry={pointsGeo}>
        <pointsMaterial size={0.1} color="#6c63ff" transparent opacity={0.9} sizeAttenuation />
      </points>
      <lineSegments geometry={linesGeo}>
        <lineBasicMaterial color="#6c63ff" transparent opacity={0.08} />
      </lineSegments>
    </group>
  );
}

export function NeuralBackground() {
  return (
    <Canvas
      camera={{ position: [0, 0, 14], fov: 65 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      dpr={[1, 1.5]}
      style={{ position: "absolute", inset: 0, zIndex: 1 }}
    >
      <NetworkMesh />
    </Canvas>
  );
}
