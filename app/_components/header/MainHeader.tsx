"use client";

import Wrapper from "../Wrapper";
import Logo from "./Logo";
import MainNav from "./MainNav";
import useHeaderScroll from "../../_lib/hooks/useHeaderScroll";
import DarkThemeHandler from "../ui/DarkThemeHandler";

export default function MainHeader() {
  const isVisible = useHeaderScroll();

  return (
    <header
      className={`fixed z-10 flex h-20 w-full justify-center bg-primary-500 transition-transform duration-300 dark:bg-primary-800 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <Wrapper className="flex items-center justify-between">
        <Logo />
        <MainNav />
        <div className="flex h-full flex-row items-center justify-center gap-4">
          <DarkThemeHandler type="toggle" />
          <p>pfp / profile name</p>
        </div>
      </Wrapper>
    </header>
  );
}
