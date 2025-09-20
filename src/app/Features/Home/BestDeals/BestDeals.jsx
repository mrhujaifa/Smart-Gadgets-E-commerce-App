"use client";

import Image from "next/image";

const bestDealsData = [
  {
    id: 1,
    title: "CATCH BIG DEALS ON THE CAMERAS",
    image: "/BestDeals/camera.png",
  },
  {
    id: 2,
    title: "CATCH BIG DEALS ON THE PCS",
    image: "/BestDeals/pc.jpg",
  },
  {
    id: 3,
    title: "CATCH BIG DEALS ON THE I PHONE",
    image: "/BestDeals/iphone.png",
  },
  {
    id: 4,
    title: "CATCH BIG DEALS ON THE COMPUTERS",
    image: "/BestDeals/computer.jpg",
  },
];

export default function BestDeals() {
  return (
    <section className="w-full py-10">
      <div className="container mx-auto px-4 flex flex-wrap gap-4">
        {bestDealsData.map((deal) => (
          <div
            key={deal.id}
            className="flex w-full sm:w-[48%] md:w-[23.5%] bg-[#f5f5f5] rounded-sm overflow-hidden hover:shadow-md transition duration-300"
          >
            {/* Left - Image */}
            <div className="w-1/2 flex items-center justify-center p-2">
              <Image
                src={deal.image}
                alt={deal.title}
                width={130}
                height={130}
                className="object-contain"
              />
            </div>

            {/* Right - Text */}
            <div className="w-1/2 flex flex-col justify-center p-3">
              <p className="text-lg font-light leading-tight">
                CATCH BIG <br />
                <span className="font-semibold text-black">DEALS</span> ON THE{" "}
                <br />
                {deal.title.split(" ").pop()}
              </p>
              <button className="mt-3 text-sm font-semibold flex items-center gap-2 group">
                Shop now
                <span className="rounded-full bg-[#fed700] text-white border border-[#fed700] transition-transform group-hover:translate-x-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="size-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m8.25 4.5 7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
