"use client";

import Wrapper from "../Wrapper";
import Logo from "./Logo";
import useHeaderScroll from "../../_lib/hooks/useHeaderScroll";
import GuestNav from "./GuestNav";
import DarkThemeHandler from "../ui/DarkThemeHandler";
import Button from "../ui/Button";

export default function GuestHeader() {
  const isVisible = useHeaderScroll();

  return (
    <header
      className={`fixed z-10 flex h-20 w-full justify-center bg-primary-500 transition-transform duration-300 dark:bg-primary-800 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <Wrapper className="flex items-center justify-between">
        <Logo />
        <GuestNav />
        <div className="flex h-full flex-row items-center justify-center gap-2">
          <DarkThemeHandler type="toggle" className="mr-2" />
          <Button context="header" href="/login" variant="link">
            Login
          </Button>
          <Button context="header" href="/signup">
            Sign up
          </Button>
        </div>
      </Wrapper>
    </header>
  );
}
