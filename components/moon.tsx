import React, { useEffect, useRef } from 'react'

//import moonTexture from '../assets/textures/moon/moon_map-min.jpg';
//import moonBump from '../assets/textures/moon/moon_displacement.jpg'
import { useFrame, useLoader, useThree } from '@react-three/fiber';
import { TextureLoader } from 'three';

type Props = {}

function Moon({}: Props) {

    const ref: any = useRef();

    //Rotation initiale
    useEffect(()=>{
        if(ref.current != undefined)
            ref.current.rotation.y = 80 * (Math.PI/180);
    }, [])

    const [moonTexture, moonBump] = useLoader(TextureLoader, ['../assets/textures/moon/moon_map-min.jpg', '../assets/textures/moon/moon_displacement.jpg']);
    const radius = 30;
    const detail = 20;	

    return (
        <mesh 
            ref={ref}
            name="moon">
                <icosahedronBufferGeometry args={[radius, detail]}/>
                <meshPhysicalMaterial map={moonTexture} bumpMap={moonBump} bumpScale={0.8}/>
        </mesh>
    )
}
export default Moon