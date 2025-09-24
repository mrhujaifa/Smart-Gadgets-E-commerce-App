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

export default function TrendingProducts() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function fetchProducts() {
      try {
        const data = await getAllProducts();
        setProducts(data);
      } catch (err) {}
    }
    fetchProducts();
  }, []);

  // সর্বোচ্চ ২১টি প্রোডাক্ট, ৭টি করে ভাগ, ৩টি স্লাইড
  const productChunks = chunkArray(products.slice(0, 21), 7);

  return (
    <div>
      <div className="container mx-auto w-full my-20 ">
        <div className="w-full border-b border-gray-200 relative">
          <p className="text-xl font-semibold inline-block relative pb-4">
            Laptops & Computers
            <span className="absolute left-0 bottom-0 w-55 h-[2px] bg-yellow-400"></span>
          </p>
        </div>

        <div className="w-full mt-8">
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true, el: ".my-swiper-pagination" }}
            autoplay={{ delay: 20000, disableOnInteraction: false }}
            loop={true}
            className=" "
          >
            {productChunks.slice(0, 3).map((chunk, idx) => (
              <SwiperSlide key={idx}>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7">
                  {chunk.map((product) => (
                    <CategoryProductCard
                      key={product._id || product.id}
                      product={product}
                    />
                  ))}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="mx-170">
            <div className="my-swiper-pagination" />
          </div>
        </div>
      </div>
    </div>
  );
}
