// components/Footer.tsx
import React from "react";

const FooterNav = () => {
  return (
    <footer className="bg-[#fed700] py-6 px-4 md:px-8 text-black">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Left Side */}
        <div className="flex flex-col md:flex-row items-center text-center md:text-left gap-2 md:gap-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-7 transform rotate-45 text-black"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
            />
          </svg>
          <div>
            <p className="font-semibold text-sm md:text-lg">
              Sign up to Newsletter
            </p>
            <p className="hidden md:block text-sm">
              ...and receive $20 coupon for first shopping.
            </p>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex flex-col sm:flex-row w-full md:w-auto">
          <input
            type="email"
            placeholder="Email address"
            className="w-full sm:w-72 px-4 py-2 rounded-full sm:rounded-l-full sm:rounded-r-none focus:outline-none bg-white"
          />
          <button className="mt-2 sm:mt-0 bg-gray-800 text-white px-6 py-2 rounded-full sm:rounded-r-full sm:rounded-l-none font-semibold hover:bg-gray-700 transition">
            Sign Up
          </button>
        </div>
      </div>
    </footer>
  );
};

export default FooterNav;
