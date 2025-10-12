"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useEffect, useState } from "react";
import { getAllProducts } from "@/app/Services/ProductsService/productService";
import CategoryProductCard from "@/app/Components/Products/TrendingProducts/TrendingProducts";

// Helper: chunk array for Swiper slides
function chunkArray(array, size) {
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
}

export default function RelatedProductSmallDevice({ category, excludeId }) {
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchRelatedProducts() {
      try {
        const allProducts = await getAllProducts();

        if (category) {
          // Filter same-category products but exclude current product
          const related = allProducts.filter(
            (p) => p.category === category && p._id !== excludeId
          );
          setRelatedProducts(related);
        } else {
          setRelatedProducts([]);
        }
      } catch (err) {
        console.error("Error fetching related products:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchRelatedProducts();
  }, [category, excludeId]);

  const productChunks = chunkArray(relatedProducts.slice(0, 16), 2);

  return (
    <div className="container mx-auto w-full my-20">
      {/* Section Header */}
      <div className="w-full px-2 border-b border-gray-200 relative">
        <p className="text-xl font-semibold inline-block relative pb-4">
          Related Products
          <span className="absolute left-0 bottom-0 w-[55px] h-[2px] bg-yellow-400"></span>
        </p>
      </div>

      <div className="w-full mt-8">
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="w-12 h-12 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : relatedProducts.length === 0 ? (
          <div className="text-center text-gray-500 py-10">
            No related products found.
          </div>
        ) : (
          <>
            <Swiper
              modules={[Pagination, Autoplay]}
              pagination={{ clickable: true, el: ".my-swiper-pagination" }}
              autoplay={{ delay: 8000, disableOnInteraction: false }}
              loop={true}
            >
              {productChunks.map((chunk, idx) => (
                <SwiperSlide key={idx}>
                  <div className="grid grid-cols-2 gap-2">
                    {chunk.map((product) => (
                      <CategoryProductCard key={product._id} product={product} />
                    ))}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="my-swiper-pagination mt-6 text-center"></div>
          </>
        )}
      </div>
    </div>
  );
}
