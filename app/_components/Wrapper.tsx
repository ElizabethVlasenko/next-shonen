import React from "react";

export default function Wrapper({
  children,
  className,
}: Readonly<{ children: React.ReactNode; className?: string }>) {
  return (
    <div className={`mx-8 h-auto w-full max-w-5xl ${className}`}>
      {children}
    </div>
  );
}
