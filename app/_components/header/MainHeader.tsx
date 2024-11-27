"use client";

import React, { useCallback, useEffect, useState } from "react";
import Wrapper from "../Wrapper";
import Logo from "./Logo";

export default function MainHeader() {
  const [isVisible, setIsVisible] = useState<boolean>(true);

  const handleScroll = useCallback(() => {
    const scroll = window.scrollY;

    const shouldBeVisible = scroll <= 40;
    if (shouldBeVisible === isVisible) return;
    setIsVisible(shouldBeVisible);
  }, [isVisible]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <header
      className={`w-full fixed flex justify-center h-20 bg-primary-500 dark:bg-primary-800 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <Wrapper className="flex justify-between items-center">
        <Logo /> <nav></nav> Profile
      </Wrapper>
    </header>
  );
}
