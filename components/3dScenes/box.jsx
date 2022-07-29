/* eslint-disable no-unused-vars */
/* eslint-disable no-return-assign */
/* eslint-disable arrow-body-style */
import { Canvas, MeshProps, useFrame } from '@react-three/fiber';
import { MathUtils } from 'three';
import React, { useRef } from 'react';
import { Points, Point, PointMaterial } from '@react-three/drei';

const BoxModel = (props) => {
  const BoxRef = useRef();
  useFrame(
    () =>
      BoxRef.current &&
      ((BoxRef.current.rotation.x += 0.01),
      (BoxRef.current.rotation.y += 0.01)),
  );

  return (
    <mesh ref={BoxRef} {...props}>
      <boxGeometry attach="geometry" args={[0.7, 0.7, 0.7]} />
      <meshStandardMaterial metalness={0.1} attach="material" color="#fff" />
    </mesh>
  );
};

const PointsModel = () => {
  const PointRef = useRef();

  useFrame(
    () =>
      PointRef.current &&
      ((PointRef.current.position.x += 0.01),
      (PointRef.current.position.y += 0.01)),
  );

  const positions = Array.from({ length: 1000 }, () => [
    MathUtils.randFloatSpread(10),
    MathUtils.randFloatSpread(10),
    MathUtils.randFloatSpread(10),
  ]);

  return (
    <Points limit={positions.length} range={1000}>
      <PointMaterial
        transparent
        vertexColors
        size={15}
        sizeAttenuation={false}
        depthWrite={false}
      />
      {positions.map((position, i) => (
        <Point ref={PointRef} key={i} position={position} />
      ))}
    </Points>
  );
};

const ThreeDBoxScene = () => {
  return (
    <Canvas
      raycaster={{ params: { Points: { threshold: 0.175 } } }}
      dpr={[1, 2]}
      camera={{ zoom: 3, near: 1 }}
    >
      <ambientLight intensity={1} />
      <spotLight position={[10, 10, 10]} angle={0.15} />
      <BoxModel position={[0, 0, 0]} />
      {/* <PointsModel /> */}
      {/* <Stars /> */}
    </Canvas>
  );
};

export default ThreeDBoxScene;
