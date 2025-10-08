import { getSingleProduct } from "@/app/Services/ProductsService/productService";
import Image from "next/image";

export default async function ProductDetailsPage({ params }) {
  const product = await getSingleProduct(params.slug);

  if (!product) return <div className="text-center mt-20 text-red-500">Product not found!</div>;

  // Pick main image (first image of first variant)
  const mainImage =
    product.variants?.[0]?.images?.[0] || "/placeholder.png";

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left: Product Image */}
        <div className="flex-1">
          <img
            src={mainImage}
            alt={product.title}
            className="w-full rounded-lg shadow-lg"
          />
          {/* Variant Thumbnails */}
          <div className="flex gap-4 mt-4">
            {product.variants.map((v, idx) =>
              v.images.map((img, i) => (
                <img
                  key={`${idx}-${i}`}
                  src={img}
                  alt={`${product.title} variant`}
                  className="w-16 h-16 object-cover rounded border cursor-pointer"
                />
              ))
            )}
          </div>
        </div>

        {/* Right: Product Info */}
        <div className="flex-1">
          <h1 className="text-4xl font-bold">{product.title}</h1>
          <p className="text-gray-600 mt-2">{product.description.short}</p>

          <div className="mt-4">
            <span className="text-2xl font-semibold text-green-600">
              ${product.pricing.discountedPrice} {product.pricing.currency}
            </span>
            {product.pricing.discountPercent > 0 && (
              <span className="text-gray-500 line-through ml-2">
                ${product.pricing.originalPrice}
              </span>
            )}
          </div>

          <div className="mt-4">
            <span className="font-semibold">Rating:</span> {product.rating} ⭐ ({product.reviewsCount} reviews)
          </div>

          <div className="mt-2">
            <span className="font-semibold">Availability:</span>{" "}
            {product.availability.inStock ? "In Stock" : "Out of Stock"}
          </div>
        </div>
      </div>

      
    </div>
  );
}
