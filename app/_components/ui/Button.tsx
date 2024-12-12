"use client";

import Link from "next/link";
import { ComponentPropsWithoutRef } from "react";

type BaseProps = {
  children: React.ReactNode;
  variant?:
    | "primary"
    | "secondary"
    | "danger"
    | "link"
    | "primaryReverse"
    | "linkReverse";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  context?: "default" | "header";
};

type LinkProps = ComponentPropsWithoutRef<typeof Link> &
  BaseProps & {
    href: string;
  };

type ButtonProps = ComponentPropsWithoutRef<"button"> &
  BaseProps & {
    href?: never;
  };

function isLinkProps(props: ButtonProps | LinkProps): props is LinkProps {
  return typeof (props as LinkProps).href === "string";
}

export default function Button(props: ButtonProps | LinkProps) {
  const {
    children,
    variant = "primary",
    size = "md",
    disabled = false,
    ...otherProps
  } = props;

  const baseStyles =
    "font-bold inline-flex items-center justify-center  rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variantStyles = {
    primary:
      "bg-primary-500 dark:bg-primary-700 text-white dark:hover:bg-primary-600 hover:bg-primary-700 focus:ring-primary-500",
    primaryReverse:
      "bg-primary-100 dark:bg-primary-200 text-primary-800 dark:text-primary-900 dark:hover:bg-primary-300 hover:bg-primary-200 focus:ring-primary-300",
    secondary:
      "bg-gray-300  text-gray-800 hover:bg-gray-400 focus:ring-gray-400",
    danger: "bg-red-600  text-white hover:bg-red-700 focus:ring-red-500",
    link: "dark:text-primary-100 text-primary-500 dark:hover:text-primary-200 hover:text-primary-700",
    linkReverse: "text-primary-50 hover:text-primary-200",
  };

  const sizeStyles = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  const disabledStyles = "opacity-50 cursor-not-allowed";

  const buttonClasses = `
  ${baseStyles} 
  ${variantStyles[variant]} 
  ${sizeStyles[size]} 
  ${disabled ? disabledStyles : ""}
  `;

  if (isLinkProps(props)) {
    return (
      <Link {...(otherProps as LinkProps)} className={buttonClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button
      className={buttonClasses}
      {...(otherProps as ButtonProps)}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
