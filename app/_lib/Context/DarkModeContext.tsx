"use client";

import { createContext, ReactNode, useContext, useEffect } from "react";
import useLocalStorageState from "../hooks/useLocalStorageState";

export type Theme = "light" | "dark";

type DarkModeContextProps = {
  theme: Theme;
  toggleDarkMode: () => void;
  setDarkMode: (value: Theme) => void;
};

const DarkModeContext = createContext<DarkModeContextProps | null>(null);

type DarkModeContextProviderProps = {
  children: ReactNode;
};

function DarkModeProvider({ children }: DarkModeContextProviderProps) {
  let systemTheme = "light" as Theme;

  async function handleCookieThemeSwitch(newTheme: Theme) {
    try {
      const response = await fetch("/api/set-theme", {
        // Await the fetch call
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ theme: newTheme }),
      });

      if (response.ok) {
        setTheme(newTheme);
      } else {
        console.error("Failed to update theme:", response.status);
      }
    } catch (error) {
      console.error("Error updating theme:", error);
    }
  }

  if (typeof window !== "undefined") {
    systemTheme = window.matchMedia("(prefers-color-scheme: dark").matches
      ? "dark"
      : "light";
  }

  const [theme, setTheme] = useLocalStorageState("theme", systemTheme);

  useEffect(
    function () {
      if (theme === "dark") {
        document.body.classList.add("dark");
      } else {
        document.body.classList.remove("dark");
      }
    },
    [theme],
  );

  function toggleDarkMode() {
    const newTheme = theme === "light" ? "dark" : "light";
    handleCookieThemeSwitch(newTheme);
  }

  function setDarkMode(value: Theme) {
    handleCookieThemeSwitch(value);
  }

  return (
    <DarkModeContext.Provider value={{ theme, toggleDarkMode, setDarkMode }}>
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
