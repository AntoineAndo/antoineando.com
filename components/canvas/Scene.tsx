import React, { Suspense, useEffect } from "react";
import { Moon } from "./Moon";
import AnimationManager from "./AnimationManager";
import { Canvas } from "@react-three/fiber";
import { useLocation } from "react-router-dom";
import { useAppState } from "@/providers/AppStateProvider";
import Text from "./Text";
import Loader from "../Loader";
import { useMediaQuery } from "usehooks-ts";
import { useThree } from "@react-three/fiber";

type Props = {};

function Scene({}: Props) {
  const location = useLocation();
  const { state } = useAppState();
  const sm = useMediaQuery("(max-width: 768px)");

  const scene = {
    sm: {
      camera: [0, 0, 50],
      light: [40, 0, 20],
      title: {
        bold: true,
        fontSize: 1.7,
        position: [0, 1, 31],
        letterSpacing: -0.01,
      },
      subtitle: {
        bold: false,
        fontSize: 0.76,
        position: [0, -0.2, 31],
        letterSpacing: -0.06,
      },
    },
    default: {
      camera: [0, 0, 50],
      light: [40, 0, 20],
      title: {
        bold: true,
        fontSize: 4,
        position: sm ? [0, 1, 31] : [10.5, 1, 31],
        letterSpacing: -0.01,
      },
      subtitle: {
        bold: false,
        fontSize: 1.8,
        position: [10.4, -1.4, 31],
        letterSpacing: -0.06,
      },
    },
  };

  const config = sm ? scene.sm : scene.default;

  //Get the camera position for the current route
  const initialCameraPosition = state.routes.find(
    (route) => route.path == location.pathname
  )?.cameraTargetPosition ?? {
    //Fallback
    ...config.camera,
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
      <directionalLight
        position={[
          scene.default.light[0],
          scene.default.light[1],
          scene.default.light[2],
        ]}
        color="white"
        intensity={1.1}
      />
      {/* <Loader /> */}
      <Suspense fallback={<Loader />}>
        <Moon />
      </Suspense>
      <Text
        color="#FF0502"
        bold={config.title.bold}
        fontSize={config.title.fontSize}
        position={config.title.position}
        letterSpacing={config.title.letterSpacing}
      >
        Antoine ANDO
      </Text>
      <Text
        color="white"
        bold={config.subtitle.bold}
        fontSize={config.subtitle.fontSize}
        position={config.subtitle.position}
        letterSpacing={config.subtitle.letterSpacing}
      >
        Frontend Javascript Developer
      </Text>
      <AnimationManager />
    </Canvas>
  );
}

export default Scene;
