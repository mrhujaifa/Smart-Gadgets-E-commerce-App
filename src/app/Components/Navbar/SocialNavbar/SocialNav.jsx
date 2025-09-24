"use client";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

export default function SocialNavbar() {
  return (
    <div className="w-full py-1  border-b border-gray-200">
      <div className="container mx-auto hidden md:hidden  lg:flex justify-between items-center text-sm">
        {/* Left links */}
        <div className="text-gray-400 text-xs">
          <p>Welcome to Worldwide Smart Gadgets Store</p>
        </div>

        {/* Right links */}
        <div className="flex items-center">
          <a
            href="/wishlist"
            className="hover:text-blue-600 border-r border-gray-300 px-2"
          >
            CONTACT US
          </a>

          <a
            href="/track-order"
            className="hover:text-blue-600 border-r border-gray-300 px-2"
          >
            PRIVACY POLICY
          </a>

          {/* Social Icons */}
          <div className="flex space-x-3 ml-4">
            <a href="https://facebook.com" className="hover:text-blue-600">
              <FaFacebookF />
            </a>
            <a href="https://instagram.com" className="hover:text-pink-500">
              <FaInstagram />
            </a>
            <a href="https://twitter.com" className="hover:text-blue-400">
              <FaTwitter />
            </a>
            <a href="https://linkedin.com" className="hover:text-blue-700">
              <FaLinkedinIn />
            </a>
            <a href="https://youtube.com" className="hover:text-red-600">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
