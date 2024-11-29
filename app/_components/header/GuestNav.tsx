import React from "react";
import NavigationLink from "../ui/NavigationLink";

export default function GuestNav() {
  return (
    <nav className="h-full">
      <ul className="flex h-full flex-row justify-center">
        <NavigationLink href="/search/anime">Search</NavigationLink>
        {/* social is the same as home but without anime/manga in progress */}
        <NavigationLink href="/social">Social</NavigationLink>
        <NavigationLink href="/forum/overview">Forum</NavigationLink>
      </ul>
    </nav>
  );
}
