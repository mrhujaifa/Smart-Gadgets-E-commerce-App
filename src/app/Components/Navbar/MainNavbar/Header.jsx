// components/Navbar.jsx
"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { FaBars, FaTimes, FaSearch } from "react-icons/fa";
import Image from "next/image";
import { AiOutlineUser } from "react-icons/ai";
import { IoIosSearch } from "react-icons/io";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const searchRef = useRef(null);

  // Click outside handler
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsSearchVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleSearch = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  return (
    <>
      {/* Navbar */}
      <div className="container mx-auto w-full">
        <div className="py-6 lg:py-6 flex items-center mx-4 lg:mx-0 justify-between">
          {/* Left - Logo + Menu Icon */}
          <div className="flex items-center gap-4">
            {/* Mobile Menu Icon */}
            <button
              onClick={() => setIsOpen(true)}
              className="lg:hidden text-3xl"
            >
              <FaBars />
            </button>
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center mx-2 h-1 lg:mx-0 text-xl font-bold"
            >
              <Image
                src="/logos/smart-gadgets.png"
                height={120}
                width={120}
                alt="smart gadgets"
              ></Image>
            </Link>
          </div>

          {/* Middle - Search */}
          <div className="hidden md:flex flex-1 justify-center px-4">
            <div className="flex w-[250px] md:w-[400px] lg:w-[920px] items-center rounded-full border-2 border-[#fed700] overflow-hidden shadow-sm">
              {/* Input Box */}
              <input
                type="text"
                placeholder="Search for Products..."
                className="flex-1 py-2 px-4 focus:outline-none text-sm"
              />

              {/* Category Dropdown */}
              <div className="relative hidden sm:block">
                <select className="appearance-none text-sm px-3 py-2 pr-8 border-l border-gray-200 focus:outline-none cursor-pointer">
                  <option>All Categories</option>
                  <option>Mobiles</option>
                  <option>Computers</option>
                  <option>Accessories</option>
                  <option>Smart Gadgets</option>
                </select>
                <div className="absolute inset-y-0 right-2 flex items-center pointer-events-none">
                  <svg
                    className="w-3 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>

              {/* Search Button */}
              <button className="bg-[#fed700] px-4 py-2 flex items-center justify-center hover:bg-yellow-400 transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.2}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Right - Icons */}
          <div className="flex items-center gap-4 lg:gap-7 text-gray-700">
            {/* sign icone */}
            <Link href="/login" className="font-medium">
              <div className="flex items-center gap-2">
                <AiOutlineUser className="w-7 h-7 lg:w-6 lg:h-6" />
                <span className="pt-0.5 hidden lg:block">Sign In</span>
              </div>
            </Link>

            <Link href={"/"} className="hidden lg:block">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
                />
              </svg>
            </Link>

            {/* search icone */}
            <button onClick={toggleSearch} className="lg:hidden">
              <IoIosSearch size={30} />
            </button>

            {/* wishlist icone */}
            <Link href="/wishlist" className="hidden lg:block relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                />
              </svg>
            </Link>
            <Link href="/cart" className="relative">
              {/* Cart Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-7 h-7 lg:w-6 lg:h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 
         1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 
         1.125 0 0 1-1.12-1.243l1.264-12A1.125 
         1.125 0 0 1 5.513 7.5h12.974c.576 
         0 1.059.435 1.119 1.007ZM8.625 
         10.5a.375.375 0 1 1-.75 0 
         .375.375 0 0 1 .75 0Zm7.5 
         0a.375.375 0 1 1-.75 0 
         .375.375 0 0 1 .75 0Z"
                />
              </svg>

              {/* Badge */}
              <span className="absolute -top-2 -right-2 bg-[#fed700] text-gray-900 text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full shadow-md">
                3
              </span>
            </Link>

            <span className="font-bold hidden lg:block">$203.00</span>
          </div>
        </div>
      </div>

      {/* Mobile Search Input*/}
      {isSearchVisible && (
        <div ref={searchRef} className="lg:hidden bg-white border-b border-gray-200 p-4 shadow-md">
          <div className="container mx-auto">
            <div className="flex items-center rounded-full border-2 border-[#fed700] overflow-hidden">
              <input
                type="text"
                placeholder="Search for Products..."
                className="flex-1 py-2 px-4 focus:outline-none text-sm"
                autoFocus
              />
              <button className="bg-[#fed700] px-4 py-2 flex items-center justify-center hover:bg-yellow-400 transition-colors">
                <FaSearch className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Sidebar (Mobile) */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-40 z-40 transition-transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="bg-white w-64 h-full p-6 shadow-lg">
          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="text-2xl text-gray-700 mb-6"
          >
            <FaTimes />
          </button>

          {/* Sidebar Menu */}
          <nav className="flex flex-col gap-4 text-lg font-medium">
            <Link href="/" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <Link href="/shop" onClick={() => setIsOpen(false)}>
              Shop
            </Link>
            <Link href="/about" onClick={() => setIsOpen(false)}>
              About Us
            </Link>
            <Link href="/contact" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
            <Link href="/login" onClick={() => setIsOpen(false)}>
              Login/Register
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
}