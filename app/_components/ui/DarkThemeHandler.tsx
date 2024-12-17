"use client";

import {
  ComputerDesktopIcon,
  MoonIcon,
  SunIcon,
} from "@heroicons/react/16/solid";
import { Theme, useDarkMode } from "../../_lib/Context/DarkModeContext";
import { useEffect, useState } from "react";

type DarkThemeHandlerProps = {
  type: "toggle" | "buttons";
  className?: string;
};

export default function DarkThemeHandler({
  type,
  className,
}: DarkThemeHandlerProps) {
  const { theme, toggleDarkMode, setDarkMode } = useDarkMode();
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  let systemTheme = "light" as Theme;
  if (typeof window !== "undefined") {
    systemTheme =
      window.matchMedia("(prefers-color-scheme: dark").matches === true
        ? "dark"
        : "light";
  }

  if (type === "toggle") {
    return (
      <div className="h-6 w-6">
        {theme && domLoaded ? (
          <button onClick={toggleDarkMode}>
            <SunIcon
              className={`h-6 w-6 text-primary-50 transition-colors hover:text-accent-200 ${className}`}
            />
          </button>
        ) : (
          <button onClick={toggleDarkMode}>
            <MoonIcon
              className={`h-6 w-6 text-primary-50 transition-colors hover:text-accent-200 ${className}`}
            />
          </button>
        )}
      </div>
    );
  }

  if (type === "buttons")
    return (
      <div>
        <h3 className="mb-3 font-serif text-primary-50">Site Theme</h3>

        <div className="flex space-x-4">
          <ThemeButton
            label="Dark Theme"
            changeTheme={() => setDarkMode("dark")}
          >
            <MoonIcon className="h-6 w-6 text-primary-50 transition-colors group-hover:text-accent-200" />
          </ThemeButton>

          <ThemeButton
            label="Light Theme"
            changeTheme={() => setDarkMode("light")}
          >
            <SunIcon className="h-6 w-6 text-primary-50 transition-colors group-hover:text-accent-200" />
          </ThemeButton>

          <ThemeButton
            label="System Theme"
            changeTheme={() => setDarkMode(systemTheme)}
          >
            <ComputerDesktopIcon className="h-6 w-6 text-primary-50 transition-colors group-hover:text-accent-200" />
          </ThemeButton>
        </div>
      </div>
    );
}

type ThemeButtonProps = {
  children: React.ReactNode;
  label: string;
  changeTheme: () => void;
};

function ThemeButton({ children, label, changeTheme }: ThemeButtonProps) {
  return (
    <div className="group relative">
      <button onClick={changeTheme}>{children}</button>
      <span className="absolute bottom-8 left-1/2 hidden w-max -translate-x-1/2 rounded bg-primary-50 px-2 py-1 text-sm font-bold text-primary-800 transition-opacity group-hover:block dark:bg-primary-900 dark:text-primary-50">
        {label}
      </span>
    </div>
  );
}
