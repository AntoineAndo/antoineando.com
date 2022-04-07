import { Canvas } from '@react-three/fiber'
import React, { forwardRef, useImperativeHandle, useState } from 'react'
import AnimationManager from './animation-manager'
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
    let textConfiguration;
    if(config.isMobile){
        _cameraPosition =  cameraPositions.mobile;
        textConfiguration = {
            'name': {
                'value': config.name,
                'positions': config.nameConfiguration.mobilePositions,
                'fontSize': config.nameConfiguration.mobilePositions.fontSize
            },
            'title': {
                'value': config.jobTitle,
                'positions': config.titleConfiguration.mobilePositions,
                'fontSize': config.titleConfiguration.mobilePositions.fontSize
            },
        }
    }else{
        _cameraPosition =  cameraPositions.desktop;
        textConfiguration = {
            'name': {
                'value': config.name,
                'positions': config.nameConfiguration.desktopPositions,
                'fontSize': config.nameConfiguration.desktopPositions.fontSize
            },
            'title': {
                'value': config.title,
                'positions': config.titleConfiguration.desktopPositions,
                'fontSize': config.titleConfiguration.desktopPositions.fontSize
            },
        }
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
                    <Text color='#FF0502' 
                        bold={true} 
                        fontSize={textConfiguration.name.fontSize} 
                        position={[
                            textConfiguration.name.positions.x,
                            textConfiguration.name.positions.y,
                            textConfiguration.name.positions.z]}
                        letterSpacing={-0.01} >
                            {config.name}
                    </Text>
                    <Text color='#FFF'
                        fontSize={textConfiguration.title.fontSize}
                        position={[
                            textConfiguration.title.positions.x,
                            textConfiguration.title.positions.y,
                            textConfiguration.title.positions.z]}
                        letterSpacing={-0.04}>
                            {config.jobTitle}
                    </Text>
                    <Moon />
            </Canvas>
        </>
    )

});

export default Scene