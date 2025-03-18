import Link from "next/link";
import React from "react";

type NavigationLinkType = {
  href: string;
  children: string;
  props?: React.HTMLProps<HTMLAnchorElement>;
};

export default function NavigationLink({
  href,
  children,
  ...props
}: NavigationLinkType) {
  return (
    <li>
      <Link
        href={href}
        className="flex h-full items-center px-4 pb-1 font-serif text-base font-medium duration-150 hover:bg-primary-600 hover:text-slate-100"
        {...props}
      >
        {children}
      </Link>
    </li>
  );
}
