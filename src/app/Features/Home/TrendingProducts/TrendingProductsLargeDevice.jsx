"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useEffect, useState } from "react";
import { getAllProducts } from "@/app/Services/ProductService/productService";
import CategoryProductCard from "@/app/Components/Products/TrendingProducts/TrendingProducts";

function chunkArray(array, size) {
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
}

export default function TrendingProductsLargeDevice() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const data = await getAllProducts();
        setProducts(data);
      } catch (err) {
        console.error("Error fetching products:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  const productChunks = chunkArray(products.slice(0, 21), 7);

  return (
    <div>
      <div className="container mx-auto w-full my-20">
        {/* Section Header */}
        <div className="w-full border-b border-gray-200 relative">
          <p className="text-xl font-semibold inline-block relative pb-4">
            Trending Products
            <span className="absolute left-0 bottom-0 w-[55px] h-[2px] bg-yellow-400"></span>
          </p>
        </div>

        <div className="w-full mt-8">
          {loading ? (
            <div className="flex justify-center items-center py-20">
              <div className="w-12 h-12 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin"></div>
            </div>
          ) : (
            <Swiper
              modules={[Pagination, Autoplay]}
              pagination={{
                clickable: true,
                el: ".my-swiper-pagination", 
              }}
              autoplay={{ delay: 20000, disableOnInteraction: false }}
              loop={true}
            >
              {productChunks.slice(0, 3).map((chunk, idx) => (
                <SwiperSlide key={idx}>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4">
                    {chunk.map((product) => (
                      <CategoryProductCard
                        key={product._id}
                        product={product}
                      />
                    ))}
                  </div>
                </SwiperSlide>
              ))}

              {/* ✅ Custom pagination container inside Swiper */}
              <div className="my-swiper-pagination mt-6 flex justify-center" />
            </Swiper>
          )}
        </div>
      </div>
    </div>
  );
}
