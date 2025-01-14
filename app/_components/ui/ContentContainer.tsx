import React from "react";

type ContentContainerProps = {
  children: React.ReactNode;
  className?: string;
  ref?: React.RefObject<HTMLDivElement>;
};

export default function ContentContainer({
  children,
  className,
  ref,
}: ContentContainerProps) {
  return (
    <div
      ref={ref}
      className={
        `relative h-max flex-grow rounded-lg bg-white p-8 pt-5 text-primary-700 shadow-md lg:row-span-2 dark:bg-primary-900 dark:text-primary-50 ` +
        className
      }
    >
      {children}
    </div>
  );
}
