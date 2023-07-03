import { Text as TextDrei } from "@react-three/drei";
import { MeshBasicMaterial } from "three";

function Text({
  color,
  fontSize,
  position,
  children,
  bold,
  letterSpacing,
  strokeColor,
  strokeWidth,
}: any) {
  const textMaterial = new MeshBasicMaterial({
    color: color,
  });

  let fontPath = "/fonts/SpaceMono-Regular.ttf";
  if (bold) {
    fontPath = "/fonts/SpaceMono-Bold.ttf";
  }

  return (
    <TextDrei
      material={textMaterial}
      castShadow={true}
      fontSize={fontSize}
      position={position}
      font={fontPath}
      letterSpacing={letterSpacing}
      strokeColor={strokeColor}
      strokeWidth={strokeWidth}
    >
      {children}
    </TextDrei>
  );
}

export default Text;
