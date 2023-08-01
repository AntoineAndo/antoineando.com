import { AppProps } from "next/app";
import { useEffect, useState } from "react";
import Menu from "@/components/Menu";
import { BrowserRouter as Router } from "react-router-dom";
import { AppStateProvider } from "@/providers/AppStateProvider";
import Scene from "@/components/canvas/Scene";
import localFont from "next/font/local";
import { sanityClient } from "@/utils/sanity";

const SpaceFont = localFont({ src: "../public/fonts/SpaceMono-Regular.ttf" });

function App({ Component, pageProps }: AppProps) {
  const [isServer, setIsServer] = useState(true);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const client = sanityClient;
    setIsServer(false);
  }, []);

  // This will run one time after the component mounts
  useEffect(() => {
    // callback function to call when event triggers
    const onPageLoad = () => {
      console.log("loaded");
      setLoaded(true);
    };

    // Check if the page has already loaded
    if (document.readyState === "complete") {
      onPageLoad();
    } else {
      window.addEventListener("load", onPageLoad, false);
      // Remove the event listener when component unmounts
      return () => window.removeEventListener("load", onPageLoad);
    }
  }, []);

  if (isServer) return null;

  return (
    <AppStateProvider>
      <Router>
        <div
          suppressHydrationWarning
          style={{
            backgroundColor: "black",
            height: "100vh",
            width: "100vw",
            padding: 1,
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
          }}
          className={SpaceFont.className}
        >
          {loaded && <Scene />}
          {typeof window === "undefined" ? null : <Component {...pageProps} />}
          {loaded && <Menu />}
        </div>
      </Router>
    </AppStateProvider>
  );
}
export default App;
