import React from "react";
import RelatedProductSmallDevice from "../RelatedProductSmallDevice/RelatedProductSmallDevice";
import RelatedProductsLargeDevice from "../RelatedProductLargeDevice/RelatedProductLargeDevice";

export default function RelatedProductRoot({ category, excludeId }) {
  return (
    <>
      {/* sm device */}
      <div className="lg:hidden">
        <RelatedProductSmallDevice category={category} excludeId={excludeId} />
      </div>
      {/* large device */}
      <div className="hidden lg:block">
        <RelatedProductsLargeDevice category={category} excludeId={excludeId} />
      </div>
    </>
  );
}
