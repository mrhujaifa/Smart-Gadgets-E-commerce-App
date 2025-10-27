"use client";

import ProductCard from "@/app/Components/Products/CategoryProductCard/CategoryProductCard";
import NotProductsFound from "@/app/Error/NotProductsFound/NotProductsFound";
import { getAllProducts } from "@/app/Services/ProductsService/productService";
import { useEffect, useState } from "react";
import CategorySideNavbar from "../CategorySideNav/CategorySideNav";
import FilterSidebar from "../FilterSidebar/FilterSidebar";

// ✅ Import MUI Skeleton
import Skeleton from "@mui/material/Skeleton";
import Box from "@mui/material/Box";
import ProductTopNav from "../ShopNav/ShopNav";

export default function CategoryProducts() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState("");
  const [visibleCount, setVisibleCount] = useState(10);
  const [loading, setLoading] = useState(true);

  // Data fetching
  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true); // start loading
        const data = await getAllProducts();
        setProducts(data);

        // Make categories unique and lowercase
        const uniqueCategories = [
          ...new Set(data.map((p) => p.category && p.category.toLowerCase())),
        ].filter(Boolean);
        setCategories(uniqueCategories);

        if (uniqueCategories.length > 0) {
          setActiveCategory(uniqueCategories[0]);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false); // stop loading after fetch
      }
    }

    fetchData();
  }, []);

  // Filter products for the active category
  const filteredProducts =
    activeCategory === ""
      ? products
      : products.filter(
          (p) =>
            p.category &&
            p.category.toLowerCase() === activeCategory.toLowerCase()
        );

  const displayedProducts = filteredProducts.slice(0, visibleCount);

  const handleViewMore = () => {
    setVisibleCount((prev) => prev + 10);
  };

  // ✅ Skeleton UI for loading
  const renderSkeletonCards = () => {
    return Array.from({ length: 10 }).map((_, index) => (
      <Box
        key={index}
        className="p-3 rounded-xl  bg-white flex flex-col justify-between"
        sx={{ borderRadius: 3 }}
      >
        {/* 🔹 Product Title */}
        <Skeleton variant="text" width={60} sx={{ fontSize: "1rem" }} />
        <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
        {/* 🔹 Product Image Skeleton */}
        <Skeleton
          variant="rectangular"
          height={180}
          animation="wave"
          sx={{ borderRadius: 2, mt: "2px" }}
        />

        {/* 🔹 Old Price */}
        <Skeleton variant="text" width="40%" />

        {/* 🔹 New Price */}
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Skeleton variant="text" width="70%" />
          {/* 🔹 Rounded Cart Button Skeleton */}
          <Skeleton
            variant="circular"
            width={40}
            height={40}
            sx={{ bgcolor: "#f2f2f2" }}
          />
        </Box>
      </Box>
    ));
  };

  return (
    <div className="flex gap-3">
      <div className="flex flex-col gap-10">
        <CategorySideNavbar
          categories={categories}
          activeCategory={activeCategory}
          allProducts={products}
          onSelect={(category) => {
            setActiveCategory(category);
            setVisibleCount(10);
          }}
        />
        <FilterSidebar />
      </div>

      <div className="container mx-auto px-4">
        <ProductTopNav />

        {/* ✅ Show Skeletons while loading */}
        {loading ? (
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
            {renderSkeletonCards()}
          </div>
        ) : filteredProducts.length === 0 ? (
          <NotProductsFound />
        ) : (
          <>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
              {displayedProducts.map((product) => (
                <ProductCard
                  key={product._id || product.id}
                  product={product}
                />
              ))}
            </div>

            {/* View More button */}
            {visibleCount < filteredProducts.length && (
              <div className="flex justify-center mt-6">
                <button
                  onClick={handleViewMore}
                  className="px-6 py-2 bg-yellow-300 text-black rounded hover:bg-yellow-600 transition"
                >
                  View More
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
