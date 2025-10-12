"use client";
import { useState } from "react";

export default function ProductImages({ product }) {
  const variants = product.variants || [];

  // Pick the first valid image as main
  const firstImage =
    variants.flatMap((v) => v.images || []).find((img) => img) ||
    "https://i.ibb.co.com/Y7GKgVhr/image.png";

  const placeholder = "/images/placeholderImg.png";

  const [mainImage, setMainImage] = useState(firstImage);
  const [activeImage, setActiveImage] = useState(firstImage);

  return (
    <div className="flex flex-col  p-4">
      {/* Main Image */}
      <div className="w-full lg:w-130 h-auto">
        <img
          src={mainImage || placeholder}
          alt={product.title}
          className=""
        />
      </div>

      {/* Thumbnails */}
      <div className="flex gap-3 mt-10">
        {variants.map((variant) =>
          (variant.images || "https://i.ibb.co.com/Y7GKgVhr/image.png")
            .filter(Boolean)
            .map((img) => (
              <img
                key={img}
                src={img || placeholder}
                alt={`${product.title} ${variant.color}`}
                className={`w-20 h-20 p-1 rounded-md border-1 cursor-pointer object-cover transition-transform hover:scale-105 ${
                  img === activeImage ? "border-yellow-500 " : "border-gray-300"
                }`}
                onClick={() => {
                  setMainImage(img);
                  setActiveImage(img);
                }}
              />
            ))
        )}
      </div>
    </div>
  );
}
