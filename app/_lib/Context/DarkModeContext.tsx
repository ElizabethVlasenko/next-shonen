"use client";

import { createContext, ReactNode, useContext, useEffect } from "react";
import { useLocalStorageState } from "../hooks/useLocalStorageState";

type DarkModeContextProps = {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  setDarkMode: (value: boolean) => void;
};

const DarkModeContext = createContext<DarkModeContextProps | null>(null);

type DarkModeContextProviderProps = {
  children: ReactNode;
};

function DarkModeProvider({ children }: DarkModeContextProviderProps) {
  let systemTheme = false;
  if (typeof window !== "undefined") {
    systemTheme = window.matchMedia("(prefers-color-scheme: dark").matches;
  }

  const [isDarkMode, setIsDarkMode] = useLocalStorageState(
    systemTheme,
    "isDarkMode",
  );

  useEffect(
    function () {
      if (isDarkMode) {
        document.body.classList.add("dark");
      } else {
        document.body.classList.remove("dark");
      }
    },
    [isDarkMode],
  );

  function toggleDarkMode() {
    setIsDarkMode((isDark) => !isDark);
  }

  function setDarkMode(value: boolean) {
    setIsDarkMode(value);
  }

  return (
    <DarkModeContext.Provider
      value={{ isDarkMode, toggleDarkMode, setDarkMode }}
    >
      {children}
    </DarkModeContext.Provider>
  );
}

function useDarkMode() {
  const DarkModeCtx = useContext(DarkModeContext);

  if (DarkModeCtx === null) {
    throw new Error(
      "useTimersContext must be used within a TimersContextProvider",
    );
  }

  return DarkModeCtx;
}

export { DarkModeProvider, useDarkMode };
