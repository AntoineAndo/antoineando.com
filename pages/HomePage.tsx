import { AppState, useAppState } from "@/providers/AppStateProvider";
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

type Props = {};

function HomePage({}: Props) {
  const { state, setState } = useAppState();
  const location = useLocation();

  useEffect(() => {
    const route = state.routes.find((r) => r.path == location.pathname);

    let newState: AppState = {
      ...state,
      runningAnimation: route?.cameraTargetPosition,
      showContent: false,
    };

    setState(newState);
  }, []);

  return <div style={{ color: "white" }}></div>;
}

export default HomePage;
