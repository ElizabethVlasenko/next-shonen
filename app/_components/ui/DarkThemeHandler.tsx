"use client";

import {
  ComputerDesktopIcon,
  MoonIcon,
  SunIcon,
} from "@heroicons/react/16/solid";
import { useDarkMode } from "../../_lib/Context/DarkModeContext";

type DarkThemeHandlerProps = {
  type: "toggle" | "buttons";
};

export default function DarkThemeHandler({ type }: DarkThemeHandlerProps) {
  const { isDarkMode, toggleDarkMode, setDarkMode } = useDarkMode();

  if (type === "toggle") {
    return (
      <div className="h-6 w-6">
        {isDarkMode ? (
          <button onClick={toggleDarkMode}>
            <SunIcon className="h-6 w-6 text-primary-50 transition-colors hover:text-accent-200" />
          </button>
        ) : (
          <button onClick={toggleDarkMode}>
            <MoonIcon className="h-6 w-6 text-primary-50 transition-colors hover:text-accent-200" />
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
          <ThemeButton label="Dark Theme" changeTheme={() => setDarkMode(true)}>
            <MoonIcon className="h-6 w-6 text-primary-50 transition-colors group-hover:text-accent-200" />
          </ThemeButton>

          <ThemeButton
            label="Light Theme"
            changeTheme={() => setDarkMode(false)}
          >
            <SunIcon className="h-6 w-6 text-primary-50 transition-colors group-hover:text-accent-200" />
          </ThemeButton>

          <ThemeButton
            label="System Theme"
            changeTheme={() =>
              setDarkMode(
                window.matchMedia("(prefers-color-scheme: dark").matches,
              )
            }
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
