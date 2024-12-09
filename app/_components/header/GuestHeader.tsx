"use client";

import Wrapper from "../Wrapper";
import Logo from "./Logo";
import useHeaderScroll from "../../_hooks/useHeaderScroll";
import GuestNav from "./GuestNav";

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
        <p>login / sign in</p>
      </Wrapper>
    </header>
  );
}
