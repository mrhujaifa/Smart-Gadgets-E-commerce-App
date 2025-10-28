"use client";

import ProductCard from "@/app/Components/Products/CategoryProductCard/CategoryProductCard";
import NotProductsFound from "@/app/Error/NotProductsFound/NotProductsFound";
import { getAllProducts } from "@/app/Services/ProductsService/productService";
import { useEffect, useState } from "react";
import { GoFilter } from "react-icons/go";
import CategorySideNavbar from "../CategorySideNav/CategorySideNav";
import FilterSidebar from "../FilterSidebar/FilterSidebar";
import { motion, AnimatePresence } from "framer-motion";

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
  // ✅ For mobile sidebar toggle
  const [isFilterOpen, setIsFilterOpen] = useState(false);

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
      <div className="hidden lg:flex flex-col gap-10">
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
        <nav className="hidden lg:block">
          <ProductTopNav />
        </nav>
        {/* ✅ Mobile Filter Button */}
        <div className="lg:hidden w-full bg-gray-100 py-3 rounded-md px-4">
          <div className="flex justify-between">
            <button
              onClick={() => setIsFilterOpen(true)}
              className=" flex items-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
                />
              </svg>{" "}
              Filters
            </button>

            <div className="relative inline-block">
              <select className="appearance-none  pr-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400 ">
                <div className="">
                  <option>Default sorting</option>
                  <option>Newest</option>
                  <option>Oldest</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                </div>
              </select>

              {/* Custom Icon */}
              <div className="pointer-events-none absolute inset-y-0 right-2 flex items-center text-gray-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* ✅ Mobile Drawer (Sidebar) */}
        <AnimatePresence>
          {isFilterOpen && (
            <>
              {/* Overlay (fades in/out) */}
              <motion.div
                key="overlay"
                onClick={() => setIsFilterOpen(false)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 bg-black z-40 "
              ></motion.div>

              {/* Drawer Content (slides in/out smoothly) */}
              <motion.div
                key="drawer"
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="fixed top-0 left-0 bottom-0 w-4/5 max-w-sm  z-50 p-5 overflow-y-auto bg-white shadow-lg"
              >
                <div className="flex justify-between items-center mb-4 border-b pb-2">
                  <h2 className="text-lg font-semibold">
                    Filters & Categories
                  </h2>
                  <button
                    onClick={() => setIsFilterOpen(false)}
                    className="text-gray-600 text-2xl font-bold"
                  >
                    ×
                  </button>
                </div>

                <CategorySideNavbar
                  categories={categories}
                  activeCategory={activeCategory}
                  allProducts={products}
                  onSelect={(category) => {
                    setActiveCategory(category);
                    setVisibleCount(10);
                    setIsFilterOpen(false);
                  }}
                />

                <div className="mt-10">
                  <FilterSidebar />
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

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
