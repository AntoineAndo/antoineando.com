import { Html, useProgress } from "@react-three/drei";

function Loader() {
  const { progress } = useProgress();
  console.log(progress);

  return (
    <mesh name="moon">
      <sphereGeometry args={[30, 60, 60]} />
      <meshBasicMaterial color="red" />
    </mesh>
  );
}

export default Loader;
