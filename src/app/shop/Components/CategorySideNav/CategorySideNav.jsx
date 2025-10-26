"use client";

import { ChevronRight } from "lucide-react";

export default function CategorySideNavbar({
  categories,
  activeCategory,
  onSelect,
}) {
  return (
    <div className="w-full lg:w-80 bg-white border border-gray-200 rounded-md h-130">
      {/* Header */}
      <div className="border-b border-gray-200 p-3">
        <h2 className="text-gray-700 font-semibold text-base">
          Browse Categories
        </h2>
      </div>
      {/* "All Products" button */}
      <button
        onClick={() => onSelect("")} // Pass empty string for all products
        className={`flex items-center justify-between w-full text-left px-4 py-2.5 transition-all duration-150
            ${
              activeCategory === ""
                ? "bg-gray-50 text-blue-600 font-semibold"
                : "text-gray-700 hover:bg-gray-50"
            }`}
      >
        <div className="flex items-center space-x-2">
          <ChevronRight
            size={16}
            className={`transition-transform ${
              activeCategory === ""
                ? "rotate-90 text-blue-500"
                : "text-gray-400"
            }`}
          />
          <span className="text-sm">All Products</span>
        </div>
      </button>
      {/* Categories List */}
      <div className="divide-y divide-gray-100">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => onSelect(cat)}
            className={`flex items-center justify-between w-full text-left px-4 py-2.5 transition-all duration-150
              ${
                activeCategory === cat
                  ? "bg-gray-50 text-blue-600 font-semibold"
                  : "text-gray-700 hover:bg-gray-50"
              }`}
          >
            {/* Left side (Chevron + Name) */}
            <div className="flex items-center space-x-2">
              <ChevronRight
                size={16}
                className={`transition-transform ${
                  activeCategory === cat
                    ? "rotate-90 text-blue-500"
                    : "text-gray-400"
                }`}
              />
              <span className="text-sm">
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}