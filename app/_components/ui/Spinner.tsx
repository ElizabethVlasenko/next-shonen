import React from "react";

export default function Spinner() {
  return (
    <div className="relative mx-auto h-20 w-20 animate-spin rounded-full border-l-4 border-t-4 border-primary-500">
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-accent-400 via-primary-500 to-primary-300 opacity-50 blur-lg"></div>
    </div>
  );
}
