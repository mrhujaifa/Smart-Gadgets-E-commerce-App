import React from "react";
import TrendingProductsLargeDevice from "./TrendingProductsLargeDevice";
import TrendingProductSmallDevice from "./TrendingProductSmallDevice";

export default function TrendingProductsRoot() {
  return (
    <>
      {/* sm device */}
      <div className="lg:hidden">
        <TrendingProductSmallDevice></TrendingProductSmallDevice>
      </div>
      {/* large device */}
      <div className="hidden lg:block">
        <TrendingProductsLargeDevice></TrendingProductsLargeDevice>
      </div>
    </>
  );
}
