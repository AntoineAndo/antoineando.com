import { useFrame } from '@react-three/fiber';
import React, { useEffect, useState } from 'react'
import { lerp, ease } from '../utils/utils'

type Props = {}

let t: number;
function AnimationManager({runningAnimation, callback, displayContentCallback}: any) {

    useEffect(()=>{
        t = 0;
    }, [runningAnimation])

    const dt = 0.0007;    
    const tickNb = 300;
    const animationDuration = tickNb * dt;

    const tickNbCallback = 200;
    const callbackDuration = parseFloat((tickNbCallback * dt).toFixed(3));


    
    useFrame((state)=>{

        //Moon rotation
        let moon = state.scene.getObjectByName('moon');
        if(moon == undefined) return;
        moon.rotation.y += 0.00013;

        if(runningAnimation.targetPosition != undefined){

            var a = {
                x: state.camera.position.x,
                y: state.camera.position.y,
                z: state.camera.position.z,
            }

            var b = {
                x: runningAnimation.targetPosition.x,
                y: runningAnimation.targetPosition.y,
                z: runningAnimation.targetPosition.z
            }


            //Plot the next position
            var newX = lerp(a.x, b.x, ease(t));
            var newY = lerp(a.y, b.y, ease(t));
            var newZ = lerp(a.z, b.z, ease(t));

            //Move the camera to the next position while still looking at the moon
            state.camera.position.set(newX, newY, newZ);
            state.camera.lookAt(moon.position)

            //Time increment
            t += dt;

            //Allows the content to be displayed before the end of the animation
            //Only once
            if(parseFloat(t.toFixed(3)) == callbackDuration){
                displayContentCallback();
            }

            //If the animation is finished OR if the target position is already reached
            if (t >= animationDuration || (newX == b.x && newY == b.y && newZ == b.z)){
                t=0;

                //Notify the parent that the animation is complete
                callback();
            }
        }
        return null;
    })

    return (
        <></>
    )
}

export default AnimationManager