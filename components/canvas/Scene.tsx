import React, { Suspense } from "react";
import { Moon } from "./Moon";
import AnimationManager from "./AnimationManager";
import { Canvas } from "@react-three/fiber";
import { useLocation } from "react-router-dom";
import { useAppState } from "@/providers/AppStateProvider";
import Text from "./Text";
import Loader from "../Loader";

type Props = {};

function Scene({}: Props) {
  const location = useLocation();
  const { state } = useAppState();

  //Get the camera position for the current route
  const initialCameraPosition = state.routes.find(
    (route) => route.path == location.pathname
  )?.cameraTargetPosition ?? {
    //Fallback
    x: 0,
    y: 0,
    z: 50,
  };

  return (
    <Canvas
      id="canvas"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
      }}
      //   dpr={config.devicePixelRatio}
      gl={{
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
      }}
      camera={{
        //Initial camera configuration
        fov: 75,
        near: 0.1,
        far: 1000,

        //Initialize the camera with this route's camera settings
        position: [
          initialCameraPosition.x,
          initialCameraPosition.y,
          initialCameraPosition.z,
        ],
      }}
    >
      <directionalLight position={[40, 0, 20]} color="white" intensity={1.1} />
      {/* <Loader /> */}
      <Suspense fallback={<Loader />}>
        <Moon />
      </Suspense>
      <Text
        color="#FF0502"
        bold={true}
        fontSize={4}
        position={[10, 1, 32]}
        letterSpacing={-0.01}
      >
        Antoine ANDO
      </Text>
      <Text
        color="white"
        bold={false}
        fontSize={1.8}
        position={[9.9, -1.4, 32]}
        letterSpacing={-0.06}
      >
        Frontend Javascript Developer
      </Text>
      <AnimationManager />
    </Canvas>
  );
}

export default Scene;
