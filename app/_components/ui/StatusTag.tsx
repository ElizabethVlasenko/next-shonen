import React from "react";
import { type MediaStatus } from "../../_lib/graphql/types/anime";

type StatusTagProps = {
  status: MediaStatus;
  type?: "tag" | "dot";
} & React.HTMLAttributes<HTMLDivElement>;

export default function StatusTag({
  status,
  type = "dot",
  ...props
}: StatusTagProps) {
  const statusColors = {
    FINISHED: {
      dot: "bg-green-500 dark:bg-green-400 shadow-green-500 dark:shadow-green-400",
      tag: "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300",
    },
    RELEASING: {
      dot: "bg-blue-500 dark:bg-blue-400 shadow-blue-500 dark:shadow-blue-400",
      tag: "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300",
    },
    NOT_YET_RELEASED: {
      dot: "bg-yellow-500 dark:bg-yellow-400 shadow-yellow-500 dark:shadow-yellow-400",
      tag: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300",
    },
    CANCELLED: {
      dot: "bg-red-500 dark:bg-red-400 shadow-red-500 dark:shadow-red-400",
      tag: "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300",
    },
    HIATUS: {
      dot: "bg-purple-500 shadow-purple-500 dark:bg-purple-400 dark:shadow-purple-400",
      tag: "bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300",
    },
  };

  const { dot, tag } = statusColors[status] || {};

  return (
    <div className="flex" {...props}>
      {type === "dot" && (
        <span
          className={`block h-[0.8rem] w-[0.8rem] rounded-full shadow-md ${dot}`}
        />
      )}
      {type === "tag" && (
        <span
          className={`select-none rounded-md px-2 py-1 text-sm font-semibold ${tag}`}
        >
          {status.replaceAll("_", " ")}
        </span>
      )}
    </div>
  );
}
