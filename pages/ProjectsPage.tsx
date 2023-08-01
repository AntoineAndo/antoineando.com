import React from "react";
import { useMediaQuery } from "usehooks-ts";

type Props = {};

export default function ProjectsPage(props: any) {
  // const { state } = useAppState();

  console.log(props);

  const sm = useMediaQuery("(max-width: 768px)");

  return (
    <div
      style={{
        // opacity: state.showContent ? 1 : 0,
        transition: "opacity 0.5s ease-in-out",
        height: "100%",
        color: "white",
        display: "flex",
        flexDirection: "column",
        padding: 10,
        fontSize: "1.1em",
      }}
    >
      <h1>Projects</h1>
    </div>
  );
}

// This gets called on every request
export async function getStaticProps() {
  console.log("test");
  return {
    props: {
      A: "B",
    },
  };
}
