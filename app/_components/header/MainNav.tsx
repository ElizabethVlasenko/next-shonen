import React from "react";
import NavigationLink from "../ui/NavigationLink";

export default function MainNav() {
  return (
    <nav className="flex">
      <ul>
        <NavigationLink href="/home">Home</NavigationLink>
        <NavigationLink href="/user/userId">Profile</NavigationLink>
        <NavigationLink href="/">Anime List</NavigationLink>
        <NavigationLink href="/">Manga list</NavigationLink>
        <NavigationLink href="/">Browse</NavigationLink>
        <NavigationLink href="/">Forum</NavigationLink>
      </ul>
    </nav>
  );
}
