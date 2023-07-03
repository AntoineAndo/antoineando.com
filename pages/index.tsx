import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";

export default function App({ test, setTest }: any) {
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        position: "relative",
      }}
    >
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-me" element={<AboutPage />} />
      </Routes>
    </div>
  );
}
