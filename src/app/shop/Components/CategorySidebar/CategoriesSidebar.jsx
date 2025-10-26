"use client";

import ProductCard from "@/app/Components/Products/CategoryProductCard/CategoryProductCard";
import NotProductsFound from "@/app/Error/NotProductsFound/NotProductsFound";
import { getAllProducts } from "@/app/Services/ProductsService/productService";
import { useEffect, useState } from "react";
import CategorySideNavbar from "../CategorySideNav/CategorySideNav";
import FilterSidebar from "../FilterSidebar/FilterSidebar";

export default function CategoryProducts() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState("");
  const [visibleCount, setVisibleCount] = useState(10);

  useEffect(() => {
    async function fetchData() {
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
    }

    fetchData();
  }, []);

  // Filter products for the active category or show all if ""
  const filteredProducts =
    activeCategory === ""
      ? products
      : products.filter(
          (p) =>
            p.category &&
            p.category.toLowerCase() === activeCategory.toLowerCase()
        );

  // Products to show based on visibleCount
  const displayedProducts = filteredProducts.slice(0, visibleCount);

  // Handle View More click
  const handleViewMore = () => {
    setVisibleCount((prev) => prev + 10);
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
        <FilterSidebar></FilterSidebar>
      </div>

      <div className="container mx-auto px-4">
        <div className="">
          <h2 className="text-2xl font-bold mb-6">
            {activeCategory
              ? activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1)
              : "All Products"}
          </h2>

          {filteredProducts.length === 0 ? (
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
    </div>
  );
}
