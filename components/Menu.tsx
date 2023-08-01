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
    if (location.pathname == route.path) {
      return;
    }
    setState({
      ...state,
      showContent: false,
    });
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        marginBottom: 20,
        width: "100%",
        gap: 20,
        zIndex: 999,
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
