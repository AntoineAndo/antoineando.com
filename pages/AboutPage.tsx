import { useAppState } from "@/providers/AppStateProvider";
import React from "react";
import { useMediaQuery } from "usehooks-ts";

type Props = {};

function AboutPage({}: Props) {
  const { state } = useAppState();

  const sm = useMediaQuery("(max-width: 768px)");

  return (
    <div
      style={{
        opacity: state.showContent ? 1 : 0,
        transition: "opacity 0.5s ease-in-out",
        height: "100%",
        color: "white",
        display: "flex",
        flexDirection: "column",
        padding: 10,
        fontSize: "1.2em",
      }}
    >
      <section
        style={{
          marginLeft: "5%",
          marginRight: "5%",
          marginTop: sm ? 30 : 100,
          width: sm ? "auto" : "43%",
          transition: "all 0.5s",
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
                  height: 50,
                  width: 50,
                  borderColor: "white",
                  borderStyle: "solid",
                  borderWidth: 1,
                }}
              ></div>
              <div
                style={{
                  height: 50,
                  width: 50,
                  borderColor: "white",
                  borderStyle: "solid",
                  borderWidth: 1,
                }}
              ></div>
              <div
                style={{
                  height: 50,
                  width: 50,
                  borderColor: "white",
                  borderStyle: "solid",
                  borderWidth: 1,
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
