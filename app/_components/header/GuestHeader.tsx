"use client";

import Wrapper from "../Wrapper";
import Logo from "./Logo";
import MainNav from "./MainNav";
import useHeaderScroll from "../../_hooks/useHeaderScroll";

export default function GuestHeader() {
  const isVisible = useHeaderScroll();

  return (
    <header
      className={`w-full fixed flex justify-center h-20 bg-primary-500 dark:bg-primary-800 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <Wrapper className="flex justify-between items-center">
        <Logo />
        <MainNav />
        <p>Profile</p>
      </Wrapper>
    </header>
  );
}
