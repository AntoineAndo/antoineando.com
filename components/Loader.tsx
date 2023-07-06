import { useProgress } from "@react-three/drei";
import Text from "./canvas/Text";

function Loader() {
  const { progress } = useProgress();
  console.log(progress);

  return (
    <group>
      <mesh name="moon">
        <sphereGeometry args={[30, 30, 30]} />
        <meshStandardMaterial
          color={"#555555"}
          wireframe={true}
          emissive={"#555555"}
          emissiveIntensity={1}
        />
      </mesh>
      <Text color="white" position={[0, -10, 0]} fontSize={2} bold={true}>
        Loading...
      </Text>
    </group>
  );
}

export default Loader;
