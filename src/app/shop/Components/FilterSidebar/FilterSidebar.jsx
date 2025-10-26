"use client";
import React from "react";
import { FiChevronDown } from "react-icons/fi";

export default function FilterSidebar() {
  return (
    <div className="w-full lg:w-80 bg-white rounded-md">
      {/* Header */}
      <h2 className="text-gray-800 text-lg font-medium mb-1">Filters</h2>
      <div className="h-[3px] bg-yellow-300 w-17 mb-3"></div>

      {/* Brands */}
      <div className="mb-6">
        <h3 className="text-gray-900 font-semibold mb-3 text-sm uppercase">Brands</h3>
        <ul className="space-y-2 text-sm text-gray-700">
          {["Adidas", "New Balance", "Nike", "Fred Perry", "The North Face"].map(
            (brand) => (
              <li key={brand} className="flex items-center">
                <input type="checkbox" className="mr-2 accent-yellow-400" />
                <span>{brand}</span>
              </li>
            )
          )}
        </ul>
        <button className="text-sm text-gray-600 mt-3 flex items-center hover:text-yellow-500">
          + Show less
          
        </button>
      </div>

      <hr className="border-gray-200 mb-6" />

      {/* Color */}
      <div className="mb-6">
        <h3 className="text-gray-900 font-semibold mb-3 text-sm uppercase">Color</h3>
        <ul className="space-y-2 text-sm text-gray-700">
          {[
            "Black",
            "Black Leather",
            "Black with Red",
            "Gold",
            "Spacegrey",
          ].map((color) => (
            <li key={color} className="flex items-center">
              <input type="checkbox" className="mr-2 accent-yellow-400" />
              <span>{color}</span>
            </li>
          ))}
        </ul>
        <button className="text-sm text-gray-600 mt-3 flex items-center hover:text-yellow-500">
          + Show less
        </button>
      </div>

      <hr className="border-gray-200 mb-6" />

      {/* Price */}
      <div>
        <h3 className="text-gray-900 font-semibold mb-3 text-sm uppercase">Price</h3>

        {/* Range Bar */}
        <div className="relative mb-2">
          <input
            type="range"
            min="0"
            max="3456"
            className="w-full accent-yellow-300"
          />
        </div>
        <p className="text-gray-600 text-sm">Price: $0 — $3456</p>

        <button className="mt-5 w-full bg-yellow-300 text-gray-900 font-semibold py-2 rounded-md hover:bg-yellow-500 transition">
          Filter
        </button>
      </div>
    </div>
  );
}
