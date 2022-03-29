import { Html, Loader } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { forwardRef, Suspense, useEffect, useImperativeHandle, useState } from 'react'
import AnimationManager from './animation-manager'
import LoadingScreen from './loading-screen/loading-screen.module'
//import Moon from './moon'
//import Text from './text'
const Moon = React.lazy(()=> import('./moon'));
const Text = React.lazy(()=> import('./text'));
import { Page } from './types/types'

type Props = {
    "config": any,
    "cameraPositions": any,
    "animationCallback": Function,
    "displayContentCallback": Function
}

const Scene = forwardRef(({config, cameraPositions, animationCallback, displayContentCallback}: Props, ref) => {

    let [runningAnimation, setRunningAnimation] = useState({});

    console.log("scene render");
  
    //Allow the parent trigger the animation
    //User by the navigation buttons
    useImperativeHandle(ref, () => ({
        triggerAnimation(targetPage: Page){

        //Get appropriate camera configuration based on device
        let targetPosition
        if(config.isMobile){
          targetPosition = targetPage.cameraPositions.mobile;
        }else{
            targetPosition = targetPage.cameraPositions.desktop;
        }

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

    //Get appropriate camera configuration based on device
    let _cameraPosition;
    if(config.isMobile){
        _cameraPosition =  cameraPositions.mobile;
    }else{
        _cameraPosition =  cameraPositions.desktop;
    }

    return (
        <>
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
                    position: [_cameraPosition.x, _cameraPosition.y, _cameraPosition.z],
            }}>
                    <AnimationManager
                        runningAnimation={runningAnimation}
                        callback={_animationCallback}
                        displayContentCallback={displayContentCallback}/>
                    <directionalLight position={[40, 0, 20]} color="white" intensity={1.1} />
                <Suspense fallback={<Html fullscreen><LoadingScreen /></Html>}>
                    <Text color='#FF0502' bold={true} fontSize='1.7' position={[6.2,1,40]} letterSpacing={-0.01}>{config.name}</Text>
                    <Text color='#FFF' fontSize='0.95' position={[6.3,-0.2,40]} letterSpacing={-0.04}>{config.jobTitle}</Text>
                    <Moon />
                </Suspense>
            </Canvas>
        </>
    )

});

export default Scene