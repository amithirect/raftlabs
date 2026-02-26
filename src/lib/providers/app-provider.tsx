import { createContext } from "react";
import useAppState from "../hooks/app-state";

interface ComponentProps {
  children?: React.ReactNode;
  className?: string;
}

const AppContext = createContext<AppState | null>(null);

const AppContextProvider = ({ children }: ComponentProps) => {
  return (
    <AppContext.Provider value={useAppState()}>{children}</AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };
