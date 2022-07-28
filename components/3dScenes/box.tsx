/* eslint-disable no-return-assign */
/* eslint-disable arrow-body-style */
import { Canvas, MeshProps, useFrame } from '@react-three/fiber';
import React, { useRef } from 'react';

const BoxModel = () => {
  const Box = useRef<MeshProps>();
  useFrame(
    () =>
      Box.current &&
      ((Box.current.rotation.x += 0.01), (Box.current.rotation.y += 0.01)),
  );

  return (
    <mesh ref={Box}>
      <boxGeometry attach="geometry" args={[0.01, 0.01, 0.01]} />
      <meshStandardMaterial attach="material" color={0x0ff000} />
    </mesh>
  );
};

const ThreeDBoxScene = () => {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <BoxModel />
    </Canvas>
  );
};

export default ThreeDBoxScene;
