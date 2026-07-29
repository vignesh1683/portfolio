"use client";

import { useRef, useState, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

function Starfield() {
  const pointsRef = useRef<THREE.Points>(null!);
  const { mouse } = useThree();

  const positions = useMemo(() => {
    const arr = new Float32Array(4000 * 3);
    for (let i = 0; i < 4000 * 3; i++) {
      arr[i] = (Math.random() - 0.5) * 5;
    }
    return arr;
  }, []);

  useFrame((state, delta) => {
    if (pointsRef.current) {
      // Base rotation
      pointsRef.current.rotation.x -= delta / 18;
      pointsRef.current.rotation.y -= delta / 25;
      // Subtle mouse parallax
      pointsRef.current.rotation.x += mouse.y * 0.0003;
      pointsRef.current.rotation.y += mouse.x * 0.0003;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={pointsRef} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#00d9ff"
          size={0.012}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
          opacity={0.7}
        />
      </Points>
    </group>
  );
}

function NebulaDust() {
  const pointsRef = useRef<THREE.Points>(null!);

  const positions = useMemo(() => {
    const arr = new Float32Array(1500 * 3);
    for (let i = 0; i < 1500 * 3; i++) {
      arr[i] = (Math.random() - 0.5) * 8;
    }
    return arr;
  }, []);

  useFrame((state, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.x += delta / 40;
      pointsRef.current.rotation.z -= delta / 35;
    }
  });

  return (
    <Points ref={pointsRef} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#a855f7"
        size={0.008}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        opacity={0.4}
      />
    </Points>
  );
}

export default function ParticleBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 1], fov: 60 }} dpr={[1, 1.5]}>
        <Starfield />
        <NebulaDust />
      </Canvas>
    </div>
  );
}
