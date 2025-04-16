
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

function ConnectionLines({ points }: { points: [number, number, number][] }) {
  const connections: [number, number][] = useMemo(() => {
    const result: [number, number][] = [];
    // Create random connections between nodes
    for (let i = 0; i < points.length; i++) {
      // Connect each node to 2-3 random other nodes
      const numConnections = 2 + Math.floor(Math.random() * 2);
      for (let j = 0; j < numConnections; j++) {
        const target = Math.floor(Math.random() * points.length);
        if (target !== i) {
          result.push([i, target]);
        }
      }
    }
    return result;
  }, [points]);

  return (
    <group>
      {connections.map((connection, idx) => {
        const start = points[connection[0]];
        const end = points[connection[1]];
        
        return (
          <LineSegment 
            key={idx}
            start={start}
            end={end}
          />
        );
      })}
    </group>
  );
}

function LineSegment({ start, end }: { start: [number, number, number], end: [number, number, number] }) {
  const ref = useRef<THREE.LineSegments>(null);
  
  const geometry = useMemo(() => {
    const lineGeometry = new THREE.BufferGeometry();
    lineGeometry.setAttribute(
      'position',
      new THREE.Float32BufferAttribute([...start, ...end], 3)
    );
    return lineGeometry;
  }, [start, end]);

  // Subtle animation
  useFrame(() => {
    if (ref.current && ref.current.material) {
      // Type assertion to access opacity property safely
      const material = ref.current.material as THREE.Material & { opacity: number };
      material.opacity = 0.1 + 0.2 * Math.sin(Date.now() * 0.001);
    }
  });

  return (
    <lineSegments ref={ref}>
      <bufferGeometry attach="geometry" {...geometry} />
      <lineBasicMaterial
        attach="material"
        color="#ffd700"
        transparent
        opacity={0.3}
      />
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
      <ConnectionLines points={points} />
      <OrbitControls enableZoom={false} enablePan={false} />
    </>
  );
}

export default function NeuralNetwork() {
  return (
    <div className="fixed inset-0 -z-10 opacity-60">
      <Canvas 
        camera={{ position: [0, 0, 15], fov: 75 }}
        dpr={[1, 2]} // Performance optimization
      >
        <NeuralNetworkScene />
      </Canvas>
    </div>
  );
}
