"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useEffect, useState } from "react";
import { getAllProducts } from "@/app/Services/ProductsService/productService";
import CategoryProductCard from "@/app/Components/Products/TrendingProducts/TrendingProducts";
import NotProductsFound from "@/app/Error/NotProductsFound/NotProductsFound";

// Helper to chunk arrays for Swiper slides
function chunkArray(array, size) {
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
}

export default function RelatedProductsLargeDevice({ category, excludeId }) {
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchRelatedProducts() {
      try {
        const allProducts = await getAllProducts();

        // Filter only the products from same category
        const related = allProducts.filter(
          (p) => p.category === category && p._id !== excludeId
        );

        setRelatedProducts(related);
      } catch (err) {
        console.error("Error fetching related products:", err);
      } finally {
        setLoading(false);
      }
    }

    if (category) {
      fetchRelatedProducts();
    }
  }, [category, excludeId]);

  // Divide into slides (7 per slide)
  const productChunks = chunkArray(relatedProducts.slice(0, 21), 7);

  return (
    <div className="container mx-auto w-full my-20">
      {/* Section Header */}
      <div className="w-full border-b border-gray-200 relative">
        <p className=" lg:text-2xl font-medium inline-block relative pb-4">
          Related Products
          <span className="absolute left-0 bottom-0 w-[159px] h-[2px] bg-yellow-400"></span>
        </p>
      </div>

      <div className="w-full mt-8">
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="w-12 h-12 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : relatedProducts.length === 0 ? (
          <div className="text-center text-gray-500 py-10">
            <NotProductsFound />
          </div>
        ) : (
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true, el: ".my-swiper-pagination" }}
            autoplay={{ delay: 8000, disableOnInteraction: false }}
            loop={true}
          >
            {productChunks.map((chunk, idx) => (
              <SwiperSlide key={idx}>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-2">
                  {chunk.map((product) => (
                    <CategoryProductCard key={product._id} product={product} />
                  ))}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>

      {/* Pagination Dots */}
      <div className="my-swiper-pagination mt-6 text-center"></div>
    </div>
  );
}
