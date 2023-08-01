import React from "react";

export class AppState {
  isLoading: boolean = true;
  showContent: boolean = true;
  runningAnimation: any = undefined;
  routes: {
    name: string;
    path: string;
    cameraTargetPosition: any;
  }[] = [
    {
      name: "Home",
      path: "/",
      cameraTargetPosition: {
        x: 0,
        y: 0,
        z: 50,
      },
    },
    {
      name: "About me",
      path: "/about-me",
      cameraTargetPosition: {
        x: -10,
        y: -10,
        z: 42,
      },
    },
    {
      name: "Projects",
      path: "/projects",
      cameraTargetPosition: {
        x: 0,
        y: 0,
        z: 100,
      },
    },
  ];
}

//Creation of the Context
const AppStateContext = React.createContext<
  | {
      state: AppState;
      setState: Function;
      patchState: Function;
    }
  | undefined
>(undefined);

function AppStateProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = React.useState<AppState>(new AppState());

  const patchState = (key: string, value: any) => {
    //Enforce validation

    setState({
      ...state,
      [key]: value,
    });
  };

  //@@ NOTE: you *might* need to memoize this value
  //@@ Learn more in http://kcd.im/optimize-context
  return (
    <AppStateContext.Provider
      value={{
        state,
        setState,
        patchState,
      }}
    >
      {children}
    </AppStateContext.Provider>
  );
}

function useAppState(): {
  state: AppState;
  setState: Function;
  patchState: Function;
} {
  const context = React.useContext(AppStateContext);

  if (context == undefined) {
    throw new Error("useApPState must be used within AppStateProvider");
  }
  return context;
}

export { AppStateProvider, useAppState };
