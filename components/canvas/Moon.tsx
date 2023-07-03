"use client";

import { useGLTF } from "@react-three/drei";
import { useFrame, useLoader } from "@react-three/fiber";
import * as THREE from "three";
import { useEffect, useRef } from "react";

export const Moon = ({ route = "/bloc", ...props }) => {
  const radius = 30;
  const detail = 60;
  const mesh = useRef<any>(null);
  //Rotation initiale
  useEffect(() => {
    if (mesh.current != undefined) mesh.current.rotation.y = 5;
  }, []);

  const [moonTexture, moonBump] = useLoader(THREE.TextureLoader, [
    "/textures/moon/moon_map-min.jpg",
    "/textures/moon/moon_displacement-min.jpg",
  ]);

  // useFrame((state, delta) => {
  //   if (mesh.current) mesh.current.rotation.y += delta / 20;
  // });

  return (
    <mesh name="moon" ref={mesh}>
      <sphereGeometry args={[radius, detail, detail]} />
      <meshPhysicalMaterial
        map={moonTexture}
        bumpMap={moonBump}
        bumpScale={0.8}
      />
    </mesh>
  );
};
