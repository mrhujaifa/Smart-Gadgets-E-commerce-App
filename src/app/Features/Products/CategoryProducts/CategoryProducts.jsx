"use client";

import CategoryNavbar from "@/app/Components/Navbar/CategoryNavbar/CategoryNavbar";
import ProductCard from "@/app/Components/Products/CategoryProductCard/CategoryProductCard";
import { getAllProducts } from "@/app/Services/ProductService/productService";
import { useEffect, useState } from "react";

export default function CategoryProducts() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState("");
  const [visibleCount, setVisibleCount] = useState(8); // Initially show 8 products

  useEffect(() => {
    async function fetchData() {
      const data = await getAllProducts();
      setProducts(data);

      // Make categories unique and lowercase
      const uniqueCategories = [
        ...new Set(data.map((p) => p.category && p.category.toLowerCase())),
      ];
      setCategories(uniqueCategories);

      if (uniqueCategories.length > 0) {
        setActiveCategory(uniqueCategories[0]);
      }
    }

    fetchData();
  }, []);

  // Filter products for the active category
  const filteredProducts = products.filter(
    (p) => p.category && p.category.toLowerCase() === activeCategory.toLowerCase()
  );

  // Products to show based on visibleCount
  const displayedProducts = filteredProducts.slice(0, visibleCount);

  // Handle View More click
  const handleViewMore = () => {
    setVisibleCount((prev) => prev + 8);
  };
  

  return (
    <div className="container mx-auto mt-10 px-4">
      <CategoryNavbar
        categories={categories}
        activeCategory={activeCategory}
        onSelect={(category) => {
          setActiveCategory(category);
          setVisibleCount(8); // Reset visible count on category change
        }}
      />

      <div className="py-6">
        <h2 className="text-2xl font-bold mb-6">
          {activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1)}
        </h2>

        {filteredProducts.length === 0 ? (
          <p className="text-gray-500">No products available.</p>
        ) : (
          <>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {displayedProducts.map((product) => (
                <ProductCard key={product._id || product.id} product={product} />
              ))}
            </div>

            {/* View More button */}
            {visibleCount < filteredProducts.length && (
              <div className="flex justify-center mt-6">
                <button
                  onClick={handleViewMore}
                  className="px-6 py-2 bg-[#fed700] text-black rounded hover:bg-yellow-600 transition"
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
