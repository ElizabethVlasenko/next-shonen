"use client";

import Wrapper from "../Wrapper";
import Logo from "./Logo";
import MainNav from "./MainNav";
import useHeaderScroll from "../../_hooks/useHeaderScroll";

export default function MainHeader() {
  const isVisible = useHeaderScroll();

  return (
    <header
      className={`fixed flex h-20 w-full justify-center bg-primary-500 transition-transform duration-300 dark:bg-primary-800 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <Wrapper className="flex items-center justify-between">
        <Logo />
        <MainNav />
        <p>Profile</p>
      </Wrapper>
    </header>
  );
}
