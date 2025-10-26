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

export default async function Layout({ children, params }) {
  return (
    <div className=" flex flex-col bg-white">
      {/* ---------- Top Navigation ---------- */}
      <header>
        <SocialNavbar />
        <SecondaryNavbar />
        <SecondaryMainNavbar />
      </header>

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
