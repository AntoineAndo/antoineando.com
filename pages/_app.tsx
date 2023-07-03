import { AppProps } from "next/app";
import { useEffect, useState } from "react";
import Menu from "@/components/Menu";
import { BrowserRouter as Router } from "react-router-dom";
import { AppStateProvider } from "@/providers/AppStateProvider";
import Scene from "@/components/canvas/Scene";
import localFont from "next/font/local";

const SpaceFont = localFont({ src: "../public/fonts/SpaceMono-Regular.ttf" });

function App({ Component, pageProps }: AppProps) {
  const [isServer, setIsServer] = useState(true);
  const [test, setTest] = useState(0);

  useEffect(() => {
    setIsServer(false);
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
          }}
          className={SpaceFont.className}
        >
          <Scene />
          {typeof window === "undefined" ? null : <Component {...pageProps} />}
          <Menu />
        </div>
      </Router>
    </AppStateProvider>
  );
}
export default App;
