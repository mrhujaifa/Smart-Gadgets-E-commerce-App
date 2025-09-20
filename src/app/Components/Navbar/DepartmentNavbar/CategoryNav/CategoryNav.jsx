"use client";
import { useState, useEffect, useRef } from "react";
import { FaBars } from "react-icons/fa";
import SuperDealsMegaMenu from "../SuperDealsMegaMenu/SuperDealsMegaMenu";
import AllDepartmentMegaMenu from "../AllDepartmentMegaMenu/AllDepartmentMegaMenu";
import { TfiMenuAlt } from "react-icons/tfi";

export default function CategoryNavbar() {
  const [open, setOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(true);

  const dropdownRef = useRef(null);
  // Close menu if click outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="w-full shadow-sm relative">
      <div className="container mx-auto flex items-center justify-between">
        {/* Left Section */}
        <div className="flex items-center gap-5">
          {/* All Departments Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-2 min-w-69 min-h-12 bg-[#fed700] cursor-pointer text-black font-medium px-4  rounded-t-lg"
          >
            <TfiMenuAlt />
            <span className="font-semibold text-sm">All Departments</span>
          </button>

          {/* All Departments Mega Menue */}
          <AllDepartmentMegaMenu isOpen={isOpen}></AllDepartmentMegaMenu>

          {/* Nav Links */}
          <div
            className="flex items-center gap-5 text-sm font-semibold relative"
            ref={dropdownRef}
          >
            {/* Super Deals Dropdown */}
            <div
              className="flex items-center gap-1 text-red-600 cursor-pointer"
              onClick={() => setOpen(!open)}
            >
              <p>Super Deals</p>
              <div className="pt-0.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={5}
                  stroke="currentColor"
                  className="size-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </div>
            </div>
            {/* super deals mega menue dropdown */}
            <SuperDealsMegaMenu open={open}></SuperDealsMegaMenu>

            <a href="#" className="text-gray-800 hover:text-black">
              Featured Brands
            </a>
            <a href="#" className="text-gray-800 hover:text-black">
              Trending Styles
            </a>
            <a href="#" className="text-gray-800 hover:text-black">
              Gift Cards
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="hidden md:block">
          <span className="text-gray-600 text-sm">
            Free Shipping on Orders $50+
          </span>
        </div>
      </div>
    </nav>
  );
}
