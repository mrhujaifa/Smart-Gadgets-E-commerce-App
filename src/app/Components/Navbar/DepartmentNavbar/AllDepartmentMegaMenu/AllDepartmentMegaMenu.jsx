"use client";
import { useState } from "react";
import { FaBars, FaChevronRight } from "react-icons/fa";

export default function AllDepartmentMegaMenu({ isOpen }) {
  const menuItems = [
    "Value of the Day",
    "Top 100 Offers",
    "New Arrivals",
    "Computers & Accessories",
    "Cameras, Audio & Video",
    "Mobiles & Tablets",
    "Movies, Music & Video Game",
    "TV & Audio",
    "Watches & Eyewear",
    "Car, Motorbike & Industrial",
    "Accessories",
  ];

  return (
    <div className="relative">
      {/* Mega Menu */}
      <div
        className={`absolute -left-74 top-6 w-69 bg-white shadow-lg border border-t-0 border-[#fed700] rounded-b-md z-50 overflow-hidden transition-all duration-600 ease-in-out
        ${isOpen ? "max-h-[1000px]" : "max-h-0"}`}
      >
        <ul className="flex flex-col divide-y divide-gray-100">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="flex justify-between items-center px-5 py-2 hover:bg-gray-100 cursor-pointer transition"
            >
              <span className="text-sm text-gray-700 font-sm">{item}</span>
              <FaChevronRight className="text-xs text-gray-400" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
