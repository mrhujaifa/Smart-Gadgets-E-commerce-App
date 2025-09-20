"use client";
import React, { useState, useEffect } from "react";
import { getAllProducts } from "@/app/Services/ProductService/productService";
import ProductCard from "../../../Components/FeaturedProductsTabs/ProductCard/ProductCard";

export default function ProductTabs() {
  const [products, setProducts] = useState([]);
  const [activeTab, setActiveTab] = useState("featured");

  useEffect(() => {
    async function fetchProducts() {
      try {
        const data = await getAllProducts();
        setProducts(data);
      } catch (err) {
        console.error(err);
      }
    }
    fetchProducts();
  }, []);

  const filteredProducts = products.filter((product) => {
    if (activeTab === "featured") {
      const sevenDaysAgo = new Date();
      sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
      return new Date(product.createdAt) >= sevenDaysAgo;
    }
    if (activeTab === "onsale") return product.pricing.discountPercent > 0;
    if (activeTab === "toprated") return product.rating >= 4.5;
    return true;
  });

  const displayedProducts = filteredProducts.slice(0, 6); // Show 8 like the image

  return (
    <div className="container mx-auto">
      {/* Tabs Navigation */}
      <div className="flex space-x-6 mb-6 justify-center border-b border-gray-200">
        {["featured", "onsale", "toprated"].map((tab) => (
          <button
            key={tab}
            className={`font-medium text-lg pb-2 transition-all ${
              activeTab === tab
                ? "border-b-2 border-yellow-400 text-black"
                : "text-gray-500 hover:text-black"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab === "featured"
              ? "Featured"
              : tab === "onsale"
              ? "On Sale"
              : "Top Rated"}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {displayedProducts.length > 0 ? (
          displayedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p className="text-gray-500 col-span-full text-center">No products available.</p>
        )}
      </div>
    </div>
  );
}
