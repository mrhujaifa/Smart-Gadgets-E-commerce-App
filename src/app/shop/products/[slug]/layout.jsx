// app/shop/products/[slug]/layout.jsx
import Link from "next/link";
import SocialNavbar from "@/app/Components/Navbar/SocialNavbar/SocialNav";
import SecondaryNavbar from "@/app/Components/Navbar/SecondaryItemNavbar/SecondaryItemNavbar";
import SecondaryMainNavbar from "@/app/Components/Navbar/SecondaryMainNavbar/SecondaryMainNavbar";
import { getSingleProduct } from "@/app/Services/ProductsService/productService";
import { AiOutlineShopping } from "react-icons/ai";
import { BiCategory } from "react-icons/bi";
import { RxHome } from "react-icons/rx";
import FooterNav from "@/app/Components/Footer/FooterNav/FooterNav";
import Footer from "@/app/Components/Footer/MainFooter/MainFooter";

export default async function ProductDetailsLayout({ children, params }) {
  const { slug } = params;

  let product = null;

  try {
    // ✅ Fetch product details using slug
    product = await getSingleProduct(slug);
  } catch (error) {
    console.error("❌ Failed to load product:", error);
  }

  // ✅ Fallbacks for safety
  const categoryName = product?.category || "Uncategorized";
  const productName = product?.title || slug;

  return (
    <div className=" flex flex-col bg-white">
      {/* ---------- Top Navigation ---------- */}
      <header>
        <SocialNavbar />
        <SecondaryNavbar />
        <SecondaryMainNavbar />
      </header>

      {/* ---------- Breadcrumb Section ---------- */}
      <nav className="container mx-auto flex items-center flex-wrap gap-2 text-sm mt-4 mb-6 text-gray-600 px-4">
        {/* Home */}
        <Link
          href="/"
          className="flex items-center gap-1 hover:text-yellow-500 transition-colors duration-200"
        >
          <RxHome size={16} />
          <span>Home</span>
        </Link>

        {/* Arrow */}
        <SeparatorIcon />

        {/* Shop */}
        <Link
          href="/shop"
          className="flex items-center gap-1 hover:text-yellow-500 transition-colors duration-200 capitalize"
        >
          <AiOutlineShopping size={16} />
          Shop
        </Link>

        {/* Arrow */}
        <SeparatorIcon />

        {/* Category */}
        <Link
          href={`/shop/category/${categoryName?.toLowerCase()}`}
          className="flex items-center gap-1  font-medium capitalize hover:text-yellow-500 transition-colors duration-200"
        >
          <BiCategory size={16} />
          {categoryName}
        </Link>

        {/* Arrow */}
        <SeparatorIcon />

        {/* Product Name */}
        <span className="font-semibold text-gray-900 capitalize truncate max-w-[180px] sm:max-w-none">
          {productName}
        </span>
      </nav>

      {/* ---------- Product Details Content ---------- */}
      <main className="flex-1">{children}</main>

      {/* ---------- Footer ---------- */}
      <Footer></Footer>
    </div>
  );
}

/* ---------- Reusable Arrow Icon ---------- */
function SeparatorIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-4 w-4 text-gray-400"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  );
}
