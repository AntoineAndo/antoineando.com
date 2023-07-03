import { useAppState } from "@/providers/AppStateProvider";
import React from "react";

type Props = {};

function AboutPage({}: Props) {
  const { state } = useAppState();
  return (
    <div
      style={{
        opacity: state.showContent ? 1 : 0,
        transition: "opacity 0.5s ease-in-out",
        height: "100%",
        width: "43%",
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        overflowY: "auto",
        padding: 10,
      }}
    >
      <h2>Hi</h2>
      <p>
        I am a Fullstack Javascript Developer with 6+ years of professional
        experience
      </p>

      <p>Favourite tech:</p>
      <p>ThreeJS, NextJS, React and ExpressJS</p>

      <p>Currently working with:</p>
      <p>ThreeJS, Angular, RxJS, Kotlin and MongoDB</p>

      <p>Currently learning: </p>
      <p>UX and Svelte</p>
    </div>
  );
}

export default AboutPage;
