"use client";

import React from "react";

export default function ProductDescription({ product }) {
  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="p-15 bg-white rounded-lg shadow-sm">
      {/* Short Description */}
      <p className="mb-10 text-2xl text-gray-600">{product.description.short}</p>

      {/* Long Description Sections */}
      <div>
        {product.description.long.map((section, idx) => (
          <div key={idx} className="mb-20">
            <h3 className="font-normal text-xl pb-2 ">{section.title}</h3>
            <p className="text-sm text-gray-500">{section.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
