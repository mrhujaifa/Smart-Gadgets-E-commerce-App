"use client";
import React from "react";
import { FiHeart, FiRepeat } from "react-icons/fi";

export default function CategoryProductCard({ product }) {
  const firstImage = product.variants[0].images[0];

  return (
    <div className="relative w-full hover:shadow-lg transition flex flex-col justify-between p-4 group h-full">
      {/* Right side border (80% height) */}
      <div className="absolute top-[10%] right-0 h-[80%] w-[1px] bg-gray-200"></div>

      {/* Brand */}
      <p className="text-gray-500 text-xs mb-1">{product.brand}</p>

      {/* Title */}
      <h5 className="text-[#0062bd] font-semibold text-sm mb-2 line-clamp-2 cursor-pointer">
        {product.title}
      </h5>

      {/* Image */}
      <div className="flex items-center justify-center h-[150px] mb-4">
        <img
          src={firstImage}
          alt={product.title}
          className="max-h-full max-w-full object-contain"
        />
      </div>

      {/* Price + Cart */}
      <div className="flex items-center justify-between mb-3">
        <div>
          {product.pricing.originalPrice > product.pricing.discountedPrice && (
            <p className="text-gray-400 text-sm line-through mb-1">
              ${product.pricing.originalPrice.toFixed(2)}
            </p>
          )}
          <p
            className={`font-semibold text-lg ${
              product.pricing.originalPrice > product.pricing.discountedPrice
                ? "text-red-600"
                : "text-gray-500"
            }`}
          >
            ${product.pricing.discountedPrice.toFixed(2)}
          </p>
        </div>
        <button
          className="bg-[#fed700] hover:bg-yellow-500 cursor-pointer text-white w-10 h-10 flex items-center justify-center rounded-full transition"
          title="Add to Cart"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
            />
          </svg>
        </button>
      </div>

      {/* Compare & Wishlist */}
      <div className="flex justify-between gap-4 text-gray-600 text-sm opacity-0 group-hover:opacity-100 transition">
        <button className="flex items-center gap-1 hover:underline">
          <FiRepeat /> Compare
        </button>
        <button className="flex items-center gap-1 hover:underline">
          <FiHeart /> Add to Wishlist
        </button>
      </div>
    </div>
  );
}
