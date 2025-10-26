import React from "react";
import Link from "next/link";
import { AiOutlineShopping } from "react-icons/ai";
import { RxHome } from "react-icons/rx";
import CategoriesSidebar from "./Components/CategorySidebar/CategoriesSidebar";
import FiltersSidebar from "./Components/FilterSidebar/FilterSidebar";

export default function ShopLayout() {
  return (
    <div className="container mx-auto">
      {/* ---------- Breadcrumb Section ---------- */}
      <nav className="flex items-center flex-wrap gap-2 text-sm mt-4 mb-6 text-gray-600">
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
      </nav>

      <CategoriesSidebar></CategoriesSidebar>
    </div>
  );

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
}
