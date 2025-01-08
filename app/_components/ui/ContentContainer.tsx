import React from "react";

type ContentContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export default function ContentContainer({
  children,
  className,
}: ContentContainerProps) {
  return (
    <div
      className={
        `h-max flex-grow rounded-lg bg-white p-8 pt-5 text-primary-700 shadow-md lg:row-span-2 dark:bg-primary-900 dark:text-primary-50 ` +
        className
      }
    >
      {children}
    </div>
  );
}
