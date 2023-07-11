import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";

export const Box = () => {
  return (
    <div className="background-three">
      <Canvas>
        <Stars />
      </Canvas>
    </div>
  );
};
