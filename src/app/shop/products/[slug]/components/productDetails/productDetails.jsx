"use client";

import { useState, useEffect } from "react";
import { FiHeart, FiRepeat } from "react-icons/fi";
import { PiShoppingCartLight } from "react-icons/pi";
import ReactStars from "react-stars";

export default function ProductDetails({ product }) {
  // Ensure variants always exists and has at least one element
  const variants = product?.variants || [];

  // Set initial variant safely
  const [selectedVariant, setSelectedVariant] = useState(
    variants.length > 0 ? variants[0] : null
  );
  const [quantity, setQuantity] = useState(1);

  const { availability = {}, pricing = {}, description = {} } = product || {};

  // Update selectedVariant if product data changes
  useEffect(() => {
    if (variants.length > 0 && !selectedVariant) {
      setSelectedVariant(variants[0]);
    }
  }, [variants, selectedVariant]);

  if (!product) {
    return <p className="text-gray-500">Product data not found.</p>;
  }

  return (
    <div className="w-full lg:w-[600px] p-4">
      {/* Category */}
      <p className="text-sm text-gray-500">
        {product.category || "Uncategorized"}
      </p>

      {/* Title */}
      <h1 className="text-2xl md:text-3xl font-semibold mt-1 mb-2">
        {product.title || "Untitled Product"}
      </h1>

      {/* Rating */}
      <div className="flex items-center gap-2">
        <ReactStars
          count={5}
          value={product.rating || 0}
          size={22}
          half={true}
          edit={false}
          color1="#ccc"
          color2="#FFD700"
        />
        <p className="text-sm text-gray-600">
          ({product.reviewsCount || 0} customer reviews)
        </p>
      </div>

      {/* Availability */}
      <div className="mt-2">
        {availability.inStock ? (
          <p className="text-sm text-gray-600">
            Availability:{" "}
            <span className="text-green-600 font-semibold">
              {availability.stockCount || "Few"} in stock
            </span>
          </p>
        ) : (
          <p className="text-red-600 font-medium">Out of Stock</p>
        )}
      </div>

      {/* Wishlist & Compare */}
      <div className="flex items-center gap-6 text-gray-600 mt-3 text-sm">
        <button className="flex items-center gap-1 hover:text-yellow-500 transition-colors">
          <FiHeart /> Wishlist
        </button>
        <button className="flex items-center gap-1 hover:text-yellow-500 transition-colors">
          <FiRepeat /> Compare
        </button>
      </div>

      {/* Features */}
      {description?.long?.length > 0 && (
        <ul className="list-disc ml-5 mt-5 space-y-1 text-gray-700 text-sm">
          {description.long.map((item, idx) => (
            <li key={idx}>{item.content}</li>
          ))}
        </ul>
      )}

      {/* Dummy text */}
      <p className="text-sm text-gray-600 mt-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt.
      </p>

      {/* SKU */}
      {selectedVariant && (
        <p className="text-sm text-gray-500 mt-3">
          <span className="font-semibold">SKU:</span> {selectedVariant.sku}
        </p>
      )}

      {/* Price */}
      <div className="flex items-end gap-3 mt-4">
        <p className="text-4xl text-gray-900">
          {pricing.currency || "$"}{" "}
          {pricing.discountedPrice?.toLocaleString() || "0.00"}
        </p>
        {pricing.originalPrice && (
          <p className="text-lg text-gray-400 line-through">
            {pricing.currency || "$"} {pricing.originalPrice.toLocaleString()}
          </p>
        )}
      </div>

      <hr className="my-4 text-gray-200" />

      {/* Variant Selector */}
      {variants.length > 0 && (
        <div className="flex gap-5 items-center mb-4">
          <label className="text-sm text-gray-600 font-light">Color</label>
          <select
            value={selectedVariant?.color || ""}
            onChange={(e) =>
              setSelectedVariant(
                variants.find((v) => v.color === e.target.value)
              )
            }
            className="border border-gray-300 rounded-full py-2 px-2 w-50  text-sm focus:ring-2 focus:ring-yellow-400"
          >
            {variants.map((v) => (
              <option key={v.color} value={v.color}>
                {v.color}
              </option>
            ))}
          </select>
        </div>
      )}

      <hr className="my-4 text-gray-200" />

      {/* Quantity + Add to Cart */}

      <label className="text-sm text-gray-600 ">Quantity</label>
      <div className="flex items-center gap-4">
        <div className="flex items-center border border-gray-300 mt-2 rounded-full">
          <span className="pr-20 pl-5 py-1">{quantity}</span>
          <button
            className=" py-1 text-lg"
            onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
          >
            -
          </button>
          <button
            className="px-3 py-1 text-lg"
            onClick={() => setQuantity(quantity + 1)}
          >
            +
          </button>
        </div>

        <button className="bg-yellow-300 hover:bg-yellow-500 cursor-pointer transition-colors px-6 py-2 rounded-full text-white font-medium flex items-center gap-2">
          <PiShoppingCartLight size={24} className="font-semibold" /> Add to Cart
        </button>
      </div>
    </div>
  );
}
