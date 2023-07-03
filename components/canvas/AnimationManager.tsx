import { useFrame } from "@react-three/fiber";
import React, { useEffect } from "react";
import { lerp, ease } from "@/utils/utils";
import { useAppState } from "@/providers/AppStateProvider";

type Props = {};

let t: number;
function AnimationManager() {
  const { state: appState, patchState } = useAppState();
  useEffect(() => {
    t = 0;
  }, [appState.runningAnimation]);

  const dt = 0.0007;
  const tickNb = 500;
  const animationDuration = tickNb * dt;

  const tickNbCallback = 160;
  const callbackDuration = parseFloat((tickNbCallback * dt).toFixed(3));

  useFrame((sceneState) => {
    //Moon rotation
    let moon = sceneState.scene.getObjectByName("moon");
    if (moon == undefined) return;
    moon.rotation.y += 0.0003;

    if (appState.runningAnimation != undefined) {
      const anim = appState.runningAnimation;
      var a = {
        x: sceneState.camera.position.x,
        y: sceneState.camera.position.y,
        z: sceneState.camera.position.z,
      };

      var b = {
        x: anim.x,
        y: anim.y,
        z: anim.z,
      };

      //Plot the next position
      var newX = lerp(a.x, b.x, ease(t));
      var newY = lerp(a.y, b.y, ease(t));
      var newZ = lerp(a.z, b.z, ease(t));

      //Move the camera to the next position while still looking at the moon
      sceneState.camera.position.set(newX, newY, newZ);
      sceneState.camera.lookAt(moon.position);

      //Time increment
      t += dt;

      //Allows the content to be displayed before the end of the animation
      //Only once
      if (parseFloat(t.toFixed(3)) == callbackDuration) {
        patchState("showContent", true);
      }

      //If the animation is finished OR if the target position is already reached
      if (
        t >= animationDuration ||
        (newX == b.x && newY == b.y && newZ == b.z)
      ) {
        //Reset the timer
        t = 0;

        //Notify the parent that the animation is complete
        // callback();
        patchState("runningAnimation", undefined);
      }
    }
    return null;
  });

  return <></>;
}

export default AnimationManager;
