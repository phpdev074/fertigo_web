"use client";
import React from "react";

const CardLoader: React.FC = () => {
  return (
    <div className="p-4 space-y-4">
      {/* Simulate tabs */}
      <div className="flex gap-2">
        <div className="h-8 w-24 bg-gray-200 rounded animate-pulse"></div>
        <div className="h-8 w-24 bg-gray-200 rounded animate-pulse"></div>
      </div>

      {/* Simulate filters */}
      <div className="flex gap-2 flex-wrap">
        <div className="h-6 w-20 bg-gray-200 rounded-full animate-pulse"></div>
        <div className="h-6 w-32 bg-gray-200 rounded-full animate-pulse"></div>
      </div>

      {/* Table header */}
      <div className="grid grid-cols-6 gap-4 py-2">
        {Array(6).fill(0).map((_, i) => (
          <div key={i} className="h-4 bg-gray-200 rounded animate-pulse"></div>
        ))}
      </div>

      {/* Table rows */}
      {Array(5).fill(0).map((_, rowIndex) => (
        <div key={rowIndex} className="grid grid-cols-6 gap-4 py-3">
          {Array(6).fill(0).map((_, colIndex) => (
            <div key={colIndex} className="h-4 bg-gray-200 rounded animate-pulse"></div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default CardLoader;