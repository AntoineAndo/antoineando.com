import { Text as TextDrei } from "@react-three/drei";
import { MeshBasicMaterial, Vector3 } from "three";

type props = {
  color: string;
  fontSize: number;
  position: any;
  children: string;
  bold?: boolean;
  letterSpacing?: number;
  strokeColor?: string;
  strokeWidth?: number;
};

function Text({
  color,
  fontSize,
  position,
  children,
  bold = false,
  letterSpacing = 0,
  strokeColor,
  strokeWidth = 0,
}: props) {
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
