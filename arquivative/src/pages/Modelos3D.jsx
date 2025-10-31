import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, useGLTF } from "@react-three/drei";

function Modelo() {
  const { scene } = useGLTF("/models/InteriorTest.glb");
  return (
    <group position={[0, -1, 0]}>
      <primitive object={scene} scale={0.01} />
    </group>
  );
}

export default function Modelos3D() {
  return (
    <div className="relative h-screen w-full bg-neutral-900 text-white">
      {/* 🏷️ Título superpuesto */}
      <div className="absolute top-20 left-1/2 transform -translate-x-1/2 z-10 text-center">
        <h1 className="text-4xl font-light tracking-widest uppercase">
          Living Room
        </h1>
        <div className="w-24 h-[1px] bg-white/40 mx-auto mt-2"></div>
      </div>

      {/* 🪄 Canvas 3D */}
      <Canvas camera={{ position: [0, 2, 15], fov: 45 }}>
        <ambientLight intensity={1} />
        <directionalLight position={[10, 10, 10]} intensity={1.5} />
        <Modelo />
        <Environment preset="city" />
        <OrbitControls />
      </Canvas>
    </div>
  );
}
