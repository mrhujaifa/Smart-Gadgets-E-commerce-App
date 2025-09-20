"use client";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";

import { AiOutlineMail } from "react-icons/ai";

export default function SocialNavbar() {
  return (
    <div className="w-full py-1  border-b border-gray-200">
      <div className="container mx-auto  flex justify-between items-center text-sm">
        {/* Left links */}
        <div className="flex gap-1">
          <div className="flex items-center gap-2 border-r border-r-gray-300 px-2">
            <IoCallOutline size={17} />
            <span>+8801608283433</span>
          </div>

          <div className="flex items-center gap-1">
            <AiOutlineMail size={17}/>
            <span>info@smartgadgetsbd.com</span>
          </div>
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
