"use client";

import { useState } from "react";
import ProductDescription from "../productDescription/productDescription";
import Specification from "../specification/specification";
import ProductReviews from "../ProductReview/ProductReviews";

export default function ProductTabs({ product }) {
  const [activeTab, setActiveTab] = useState("Description");

  const tabs = ["Description", "Specification", "Reviews"];

  return (
    <div className="w-full container mx-auto mt-8">
      {/* Tabs */}
      <div className="flex border-b justify-center border-gray-300">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2 text-lg font-medium ${
              activeTab === tab
                ? "text-yellow-300 border-b-2 border-yellow-500"
                : "text-gray-500 hover:text-yellow-500"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div>
        {activeTab === "Reviews" && (
          <div className="">
            <ProductReviews product={product}></ProductReviews>
          </div>
        )}
        {activeTab === "Description" && (
          <div>
            <ProductDescription product={product} />
          </div>
        )}
        {activeTab === "Specification" && (
          <div>
            <Specification product={product}></Specification>
          </div>
        )}
      </div>
    </div>
  );
}
