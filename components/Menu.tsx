import React from "react";
import { AppState, useAppState } from "@/providers/AppStateProvider";
import MenuItem from "./MenuItem";
import { Route } from "@/types/Types";
import { useLocation } from "react-router-dom";

type Props = {};

function Menu({}: Props) {
  const { state, setState } = useAppState();
  const location = useLocation();

  const onClick = (route: Route) => {
    //Nothing happens if we are already on the target route
    if (location.pathname == route.path) {
      return;
    }

    let newState: AppState = {
      ...state,
      runningAnimation: route.cameraTargetPosition,
      showContent: false,
    };

    setState(newState);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        position: "fixed",
        bottom: 12,
        width: "100%",
        gap: 20,
      }}
    >
      {state.routes.map((route) => {
        return <MenuItem route={route} onClick={onClick} key={route.path} />;
      })}
      {/* <div>
        <NextLink href="/settings">Settings (SSR)</NextLink>
      </div> */}
    </div>
  );
}

export default Menu;
