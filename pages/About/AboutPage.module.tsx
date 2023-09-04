import { AppState, useAppState } from "@/providers/AppStateProvider";
import React, { useEffect } from "react";
import { useMediaQuery } from "usehooks-ts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import styles from "./AboutPage.module.scss";

type Props = {};

function AboutPage({}: Props) {
  const { state, setState } = useAppState();

  useEffect(() => {
    const route = state.routes.find((r) => r.path == location.pathname);

    console.log(route);

    // if (route && location.pathname == route.path) {
    //   return;
    // }

    let newState: AppState = {
      ...state,
      runningAnimation: route?.cameraTargetPosition,
      showContent: false,
    };

    setState(newState);
  }, []);

  const sm = useMediaQuery("(max-width: 768px)");

  return (
    <div
      className={styles.page}
      style={{
        opacity: state.showContent ? 1 : 0,
      }}
    >
      <section
        className={styles.section}
        style={{
          marginTop: sm ? 30 : 50,
          width: sm ? "auto" : "60%",
        }}
      >
        <h1 style={{ fontSize: 44, marginTop: 0 }}>Hi,</h1>
        <p>
          I am a Fullstack Javascript Developer with 6+ years of professional
          experience
        </p>
        <ul
          style={{
            listStyleType: "circle",
            paddingLeft: 0,
          }}
        >
          <li>
            <p>
              Favourite tech:
              <br />
              ThreeJS, NextJS, React and ExpressJS
            </p>
          </li>
          <li>
            <p>
              Currently working with:
              <br />
              ThreeJS, Angular, RxJS, Kotlin and MongoDB
            </p>
          </li>
          <li>
            <p>
              Currently learning:
              <br />
              UX and Svelte
            </p>
          </li>
        </ul>
        <div
          style={{
            width: "100%",
            textAlign: "center",
            marginBottom: 20,
          }}
        >
          <div>
            <p style={{ textDecoration: "underline" }}>
              Let&apos;s work together:
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  height: 30,
                  width: 30,
                }}
              >
                <a href="mailto:antoine.ando@gmail.com">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    style={{ color: "#ffffff" }}
                  />
                </a>
              </div>
              <div
                style={{
                  height: 30,
                  width: 30,
                }}
              >
                {/* <FontAwesomeIcon icon={["fab fa-github"]} /> */}
              </div>
              <div
                style={{
                  height: 30,
                  width: 30,
                }}
              ></div>
              {/* <a href="mailto:antoine.ando@gmail.com">
                <i className="fas fa-envelope" aria-hidden="true"></i>
              </a>
              <a href="https://www.linkedin.com/in/antoine-ando-0a2061101/">
                <i className="fab fa-linkedin" aria-hidden="true"></i>
              </a>
              <a href="https://www.github.com/antoineando/">
                <i className="fab fa-github" aria-hidden="true"></i>
              </a> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;
