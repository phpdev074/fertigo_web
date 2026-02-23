"use client";
import React from "react";

interface LoaderProps {
  fullScreen?: boolean;
}

const Loader: React.FC<LoaderProps> = ({ fullScreen = false }) => {
  return (
    <div
      className={`flex items-center justify-center ${
        fullScreen ? "fixed inset-0 bg-black/70 z-50" : "py-10"
      }`}
    >
      <div className="w-10 h-10 border-4 border-black/20 border-t-white rounded-full animate-spin"></div>
    </div>
  );
};

export default Loader;
