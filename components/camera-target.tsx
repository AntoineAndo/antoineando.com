import React, { useEffect } from 'react'

type Props = {
    lookAtMoon: any
}

function CameraTarget({lookAtMoon}: Props) {
    let initialTargetPosition;
    

        if(lookAtMoon){
            initialTargetPosition = [0,0,0]
        }else {
            initialTargetPosition = [30,0,0]
        }

    return (
        <mesh
            name="camera-target"
            position={[
                0,0,0
            ]}>
        </mesh>
    )
}
export default CameraTarget