import Image from "next/image";
import React from "react";

export default function NotProductsFound() {
  return (
    <div>
      <Image
        src={"https://i.postimg.cc/DfQ7Dt7G/no-product-found.png"}
        height={299}
        width={299}
        alt="product not found"
        className="mx-auto animate-slideDown"
      />
    </div>
  );
}
