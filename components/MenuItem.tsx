import { AppState, useAppState } from "@/providers/AppStateProvider";
import { Route } from "@/types/Types";
import React, { useState } from "react";
import { Link } from "react-router-dom";

type Props = {
  route: Route;
  onClick: Function;
};

function MenuItem({ route, onClick }: Props) {
  const [hover, setHover] = useState(false);
  const [clicked, setClicked] = useState(false);

  const click = (route: Route) => {
    //Animation
    setClicked(true);
    setTimeout(() => {
      setClicked(false);
    }, 200);

    onClick(route);
  };

  return (
    <Link
      to={route.path}
      style={{
        color: "white",
        textDecoration: "none",
      }}
      onClick={() => click(route)}
    >
      <div
        style={{
          borderWidth: 1,
          borderColor: "white",
          borderStyle: "solid",
          minWidth: 60,
          padding: "5px 20px",
          transition: "all 0.1s",
          boxShadow: hover
            ? "inset 1px 1px white,inset -1px -1px white"
            : "inset 0px 0px white,inset 0px 0px white",
          display: "flex",
          justifyContent: "center",
        }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        [
        <span
          style={{
            width: clicked ? "0%" : "100%",
            display: "flex",
            justifyContent: "center",
            overflow: "hidden",
            transition: "all 0.2s ease-out",
          }}
          dangerouslySetInnerHTML={{
            __html: route.name.replace(" ", "&nbsp;"),
          }}
        ></span>
        ]
      </div>
    </Link>
  );
}

export default MenuItem;
