import Image from "next/image";
import React from "react";

export default function ProductionBanner() {
  return (
    <div className="container mx-auto flex items-center justify-between gap-4 my-20">
      <div className="w-full h-40 relative">
        <Image
          src="/Banner/BannerOne.jpg"
          alt="Product Banner"
          fill
        />
      </div>
      <div className="w-full h-40 relative">
        <Image
          src="/Banner/BannerTwo.jpg"
          alt="Product Banner"
          fill
        />
      </div>
    </div>
  );
}
