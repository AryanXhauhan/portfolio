import React, { Suspense, memo, useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, Center } from "@react-three/drei";
import * as THREE from "three";

import CanvasLoader from "../Loader";

const Earth = () => {
  const earth = useGLTF("./planet/scene.gltf");

  // Dynamically calculate the scale factor so that any planet model fits perfectly in the scene.
  const scale = useMemo(() => {
    if (!earth || !earth.scene) return 2.5;

    // Compute the bounding box of the loaded scene
    const box = new THREE.Box3().setFromObject(earth.scene);
    const size = new THREE.Vector3();
    box.getSize(size);

    // Find the maximum dimension of the model
    const maxDim = Math.max(size.x, size.y, size.z);

    // Target a normalized size of ~2.5 units to fit perfectly in the viewport
    const targetSize = 2.5;
    const computedScale = targetSize / (maxDim || 1);

    return computedScale;
  }, [earth]);

  return (
    <Center>
      <primitive
        object={earth.scene}
        scale={scale}
        position={[0, 0, 0]}
        rotation={[0, 0, 0]}
      />
    </Center>
  );
};

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop='always'
      dpr={[1, 2]}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
      className="w-full h-full"
    >
      {/* Studio lighting system for realistic 3D appearance */}
      <ambientLight intensity={1.5} />
      
      {/* Primary key light (simulates sun) */}
      <directionalLight
        intensity={2.5}
        position={[6, 6, 6]}
        castShadow
        shadow-mapSize={1024}
      />

      {/* Rim light with a premium warm glow matching the portfolio accent theme */}
      <directionalLight
        intensity={1.8}
        position={[-6, -6, -6]}
        color="#facc15"
      />

      {/* Subtle fill light from below to soften shadows */}
      <pointLight intensity={1.2} position={[0, -10, 0]} />

      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          autoRotateSpeed={0.8}
          enableZoom={true}
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 3}
        />
        <Earth />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default memo(EarthCanvas);

