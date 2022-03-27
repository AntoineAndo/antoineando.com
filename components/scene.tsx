import { Canvas } from '@react-three/fiber'
import React, { forwardRef, Suspense, useEffect, useImperativeHandle, useState } from 'react'
import AnimationManager from './animation-manager'
import Moon from './moon'
import Text from './text'

type Props = {
    "config": any,
    "cameraPosition": any,
    "animationCallback": Function,
    "displayContentCallback": Function
}

const Scene = forwardRef(({config, cameraPosition, animationCallback, displayContentCallback}: Props, ref) => {

    let [runningAnimation, setRunningAnimation] = useState({});
  
    //Allow the parent trigger the animation
    //User by the navigation buttons
    useImperativeHandle(ref, () => ({
        triggerAnimation(targetPage: any){

        //TODO
        //Implement mobile check
        let targetPosition = targetPage.desktopCameraPosition;

        setRunningAnimation({
            targetPosition,
        });
        }
    }));

    function _animationCallback(){
        //Set the internal 'runningAnimation' state to empty so that the animation manager stops processing
        setRunningAnimation({})
        animationCallback();
    }

    return (
        <Canvas 
            id="canvas" 
            className="bg-black w-full h-full"
            dpr={ config.devicePixelRatio }
            gl={{
                antialias: true,
                alpha: true,
                powerPreference: "high-performance" }}
            camera={{ //Initial camera configuration
                fov: 75,
                near: 0.1,
                far: 1000,
                position: [cameraPosition.x, cameraPosition.y, cameraPosition.z],
        }}>
            <Suspense fallback={null}>
                <AnimationManager
                    runningAnimation={runningAnimation}
                    callback={_animationCallback}
                    displayContentCallback={displayContentCallback}/>
                <directionalLight position={[40, 0, 20]} color="white" intensity={1.1} />
                <Text color='#FF0502' bold={true} fontSize='1.7' position={[6.2,1,40]} letterSpacing={-0.01}>{config.name}</Text>
                <Text color='#FFF' fontSize='0.95' position={[6.3,-0.2,40]} letterSpacing={-0.04}>{config.jobTitle}</Text>
                <Moon />
            </Suspense>
        </Canvas>
    )

});

export default Scene