
import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

function Node({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame(({ mouse, viewport }) => {
    if (!meshRef.current) return;
    const x = (mouse.x * viewport.width) / 2;
    const y = (mouse.y * viewport.height) / 2;
    meshRef.current.rotation.x = y * 0.1;
    meshRef.current.rotation.y = x * 0.1;
  });

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[0.1, 16, 16]} />
      <meshStandardMaterial color={"#ffd700"} />
    </mesh>
  );
}

function Lines({ points }: { points: [number, number, number][] }) {
  const lineGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry();
    
    const vertices: number[] = points.reduce((acc: number[], point, i) => {
      if (i === points.length - 1) return acc;
      const next = points[i + 1];
      return [...acc, ...point, ...next];
    }, []);
    
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
    return geometry;
  }, [points]);

  return (
    <lineSegments>
      <bufferGeometry attach="geometry" {...lineGeometry} />
      <lineBasicMaterial attach="material" color="#ffd700" opacity={0.3} transparent />
    </lineSegments>
  );
}

function NeuralNetworkScene() {
  const points = useMemo(() => {
    const pts: [number, number, number][] = [];
    for (let i = 0; i < 50; i++) {
      pts.push([
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10
      ] as [number, number, number]);
    }
    return pts;
  }, []);

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      {points.map((position, idx) => (
        <Node key={idx} position={position} />
      ))}
      <Lines points={points} />
      <OrbitControls enableZoom={false} enablePan={false} />
    </>
  );
}

export default function NeuralNetwork() {
  return (
    <div className="fixed inset-0 -z-10 opacity-60">
      <Canvas camera={{ position: [0, 0, 15], fov: 75 }}>
        <NeuralNetworkScene />
      </Canvas>
    </div>
  );
}
