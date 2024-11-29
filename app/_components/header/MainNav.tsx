import React from "react";
import NavigationLink from "../ui/NavigationLink";

export default function MainNav() {
  return (
    <nav className="h-full">
      <ul className="flex h-full flex-row justify-center">
        <NavigationLink href="/home">Home</NavigationLink>
        <NavigationLink href="/user/userId">Profile</NavigationLink>
        <NavigationLink href="/user/userId/animelist">
          Anime List
        </NavigationLink>
        <NavigationLink href="/user/userId/mangalist">
          Manga list
        </NavigationLink>
        <NavigationLink href="/search/anime">Browse</NavigationLink>
        <NavigationLink href="/forum/overview">Forum</NavigationLink>
      </ul>
    </nav>
  );
}
