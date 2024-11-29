import Link from "next/link";
import React from "react";

type NavigationLinkType = {
  href: string;
  children: string;
};

export default function NavigationLink({ href, children }: NavigationLinkType) {
  return (
    <li>
      <Link href={href} className="hover:text-accent-400 transition-colors">
        {children}
      </Link>
    </li>
  );
}
