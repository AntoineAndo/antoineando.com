
import { Text } from "@react-three/drei";
import { MeshBasicMaterial } from "three"; 


function Test({color, fontSize, position, outlineColor, outlineWidth, children, bold, letterSpacing}: any) {

    const textMaterial = new MeshBasicMaterial({
        color: color,
    })

    let fontPath = "../fonts/Space_Mono/SpaceMono-Regular.ttf";
    if(bold){
        fontPath = "../fonts/Space_Mono/SpaceMono-Bold.ttf"
    }

    return (
        <Text
        material={textMaterial}
        castShadow={true}
        fontSize={fontSize}
        position={position}
        font={fontPath}
        letterSpacing={letterSpacing}>
            {children}
        </Text>
    )
}

export default Test