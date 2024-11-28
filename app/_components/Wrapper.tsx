import React from "react";

export default function Wrapper({
  children,
  className,
}: Readonly<{ children: React.ReactNode; className?: string }>) {
  return (
    <div className={`max-w-5xl w-full mx-8 h-auto ${className}`}>
      {children}
    </div>
  );
}
