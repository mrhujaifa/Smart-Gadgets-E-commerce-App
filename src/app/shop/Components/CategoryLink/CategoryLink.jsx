"use client";

import Link from "next/link";
import { BiCategory } from "react-icons/bi";
import { usePathname } from "next/navigation";

export default function CategoryLink({ categoryName }) {
  const pathname = usePathname(); // current route

  // Hide only if current route is exactly /shop
  if (pathname === "/shop") return null;

  return (
    <Link
      href={`/shop/category/${categoryName?.toLowerCase()}`}
      className="flex items-center gap-1 font-medium capitalize hover:text-yellow-500 transition-colors duration-200"
    >
      <BiCategory size={16} />
      {categoryName}
    </Link>
  );
}
