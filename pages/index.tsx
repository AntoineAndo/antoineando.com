import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import HomePage from "./HomePage";
import AboutPage from "./About/AboutPage.module";
import ProjectsPage from "./Projects/ProjectsPage.module";
import { AppState, useAppState } from "@/providers/AppStateProvider";

export default function App({}: any) {
  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        flexGrow: 1,
        overflowY: "auto",
      }}
    >
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-me" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/:projectId" element={<ProjectsPage />} />
      </Routes>
    </div>
  );
}
