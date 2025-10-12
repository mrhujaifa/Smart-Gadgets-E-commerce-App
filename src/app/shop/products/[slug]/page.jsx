import { getSingleProduct } from "@/app/Services/ProductsService/productService";
import ProductImages from "./components/ProductImages/ProductImages";
import ProductDetails from "./components/productDetails/productDetails";
import ProductTabs from "./components/ProductTaps/ProductTaps";
import TrendingProductsRoot from "@/app/Features/Home/TrendingProducts/TrendingProductsRoot";
import RelatedProductRoot from "./components/RelatedProducts/RelatedProductsRoot/RelatedProductRoot";

export default async function ProductDetailsPage({ params }) {
  const product = await getSingleProduct(params.slug);

  if (!product)
    return (
      <div className="text-center mt-20 text-red-500">Product not found!</div>
    );

  return (
    <div className="container mx-auto">
      <div className="flex flex-col lg:flex-row gap-5">
        <div>
          <ProductImages product={product} />
        </div>
        <div className="flex flex-col">
          <ProductDetails product={product} />
        </div>
      </div>
      <div>
        <ProductTabs product={product} />
      </div>
      <div>
        <RelatedProductRoot
          category={product.category}
          excludeId={product._id}
        />
      </div>
    </div>
  );
}
