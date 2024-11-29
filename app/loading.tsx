import React from "react";
import Spinner from "./_components/ui/Spinner";

const LoadingPage = () => {
  return (
    <div className="flex min-h-full items-center justify-center text-primary-700 dark:text-white">
      <div className="overflow-hidden rounded-lg bg-white p-8 pt-10 text-center shadow-sm dark:bg-primary-900">
        <div className="text-center">
          <Spinner />
          <h1 className="mt-6 font-sans text-xl font-bold text-gray-800 dark:text-gray-100">
            Limitless Mode{" "}
            <span className="text-primary-500 dark:text-primary-400">
              Activated
            </span>
          </h1>
          <p className="text-gray-500 dark:text-gray-400">
            Loading cursed energy...
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoadingPage;
