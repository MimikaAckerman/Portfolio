import React, { Suspense } from "react";
import { Canvas } from "react-three-fiber";
import { OrbitControls } from "@react-three/drei";
import House from "../Animation/House";
import { GlobalDiv } from "../../assets/AllStyles/animationStyled";

const Animation = () => {
  return (
    <>
      <GlobalDiv>
        <Canvas camera={{ zoom: 2, position: [16, 20, 15] }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[35, 35, 0]} intensity={0.4} />
          <pointLight position={[-35, 35, 0]} intensity={0.4} />
          <Suspense fallback={null}>
            <House />
          </Suspense>
          <OrbitControls />
        </Canvas>
      </GlobalDiv>
    </>
  );
};

export default Animation;
