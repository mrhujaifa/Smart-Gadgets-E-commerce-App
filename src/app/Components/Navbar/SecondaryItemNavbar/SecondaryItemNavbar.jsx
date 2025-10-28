import Image from "next/image";
import React from "react";
import Link from "next/link";
import { BiSupport } from "react-icons/bi";

export default function SecondaryItemNavbar() {
  const navItems = [
    { name: "Home", href: "/", hasDropdown: true },
    { name: "About Us", href: "/about" },
    { name: "Blogs", href: "/blogs" },
    { name: "FAQs", href: "/faqs" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <div className=" hidden lg:block container mx-auto">
      <div className="flex items-center justify-between py-6">
        {/* Logo */}
        <div>
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center mx-2 h-1 lg:mx-0 text-xl font-bold"
          >
            <Image
              src="/logos/smart-gadgets.png"
              height={120}
              width={110}
              alt="smart gadgets"
            ></Image>
          </Link>
        </div>

        {/* Navigation */}
        <div className="flex items-center">
          <ul className="flex items-center gap-8">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href}
                  className="flex items-center gap-1 hover:text-yellow-400 font-medium text-[16px] transition"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Support Info */}
        <div className="flex items-center gap-4">
          <BiSupport className="text-yellow-400" size={37} />
          <div className="text-sm">
            <span className="block font-semibold">
              Support (+880) 01608215377
            </span>
            <span className="block">E-mail: info@smartgadgetsbd.com</span>
          </div>
        </div>
      </div>
    </div>
  );
}
