import { useEffect, useState } from "react";
import useStorage from "./storage";
import { EMPTY_APP_STATE } from "@/constants";

const useAppState = (): AppState => {
  const APP_STORAGE_KEY = "app";
  const [appState, setAppState] = useState<AppInfo>(EMPTY_APP_STATE);
  const { getValue, setValue } = useStorage<AppInfo>();

  useEffect(() => {
    const savedAppState = getValue(APP_STORAGE_KEY);
    if (savedAppState) {
      setAppState(savedAppState);
    }
  }, []);

  const updateAppState = (state: AppInfo) => {
    setValue(APP_STORAGE_KEY, state);
    setAppState(state);
  };

  return {
    appState,
    updateAppState,
  };
};

export default useAppState;
