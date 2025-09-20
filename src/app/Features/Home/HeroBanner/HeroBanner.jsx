"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import "./HeroBanner.module.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], // pick what you need
  variable: "--font-poppins",
});

export default function HeroBanner() {
  const slides = [
    {
      id: 1,
      header: "THE NEW STANDARD",
      title: "UNDER FAVORABLE SMARTWATCHES",
      price: "100",
      btnText: "Start Buying",
      img: "/images/headphone.png",
    },
    {
      id: 2,
      header: "THE NEW STANDARD",
      title: "UNDER FAVORABLE SMART PHONE",
      price: "2000",
      btnText: "Start Buying",
      img: "/images/iphon.png",
    },
    {
      id: 3,
      header: "THE NEW STANDARD",
      title: "UNDER FAVORABLE SMART GAMEPAD",
      price: "200",
      btnText: "Start Buying",
      img: "/images/game.png",
    },
    {
      id: 4,
      header: "THE NEW STANDARD",
      title: "UNDER FAVORABLE SMART TV",
      price: "400",
      btnText: "Start Buying",
      img: "/images/tv.png",
    },
  ];

  return (
    <div
      className={`w-full ${poppins.className} h-[420px] bg-cover flex items-center justify-center text-white`}
      style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
    >
      <div className="w-full ">
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 10000, disableOnInteraction: false }}
          loop={true}
          className="w-full container mx-auto"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="= flex items-center justify-around mx-40 gap-6 pl-40">
                {/* Left Content */}
                <div className="">
                  <h1 className="text-[#2f3a47] font-[200] w-[400px] text-[60px] leading-[1] tracking-tight">
                    <span className="inline tracking-wide">THE NEW </span>
                    <span className="inline text-[54px]">STANDARD</span>
                  </h1>

                  <h2 className="text-black my-3">{slide.title}</h2>
                  <p className="text-sm text-gray-800">FROM</p>
                  <div className="flex text-black">
                    <p className="font-semibold text-3xl">$</p>
                    <p className="text-6xl font-semibold">{slide.price}</p>
                  </div>
                  <button className="px-16 py-2.5 mt-4 bg-[#fed700] text-black rounded-lg hover:bg-yellow-500 transition">
                    {slide.btnText}
                  </button>
                  {/* Swiper Pagination Bullets will auto render here */}
                  <div className="swiper-pagination"></div>
                </div>

                {/* Right Image */}
                <div className="flex justify-center">
                  <Image
                    src={slide.img}
                    alt={slide.title}
                    width={400}
                    height={400}
                    className="object-contain"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
