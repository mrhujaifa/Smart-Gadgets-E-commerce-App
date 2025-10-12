"use client";
import { useState, useEffect, useRef } from "react";
import { IoIosArrowDown } from "react-icons/io";
import SecAllDepartmentMegaMenu from "../SecAllDepartmentMegaMenu/SecAllDepartmentMegaMenu";

export default function SeconderyCategoryNavbar() {
  const [open, setOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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
    <nav className="w-full relative">
      <div className="container mx-auto hidden md:hidden lg:flex items-center justify-between">
        {/* Left Section */}
        <div className="flex items-center gap-5">
          {/* All Departments Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-2 cursor-pointer text-black font-semibold px-4 text-sm   rounded-t-lg"
          >
            Shop By All Department <IoIosArrowDown />
          </button>

          {/* All Departments Mega Menue */}
          <SecAllDepartmentMegaMenu isOpen={isOpen} ></SecAllDepartmentMegaMenu>

          {/* Nav Links */}
          <div
            className="flex items-center gap-5 text-sm font-semibold relative"
            ref={dropdownRef}
          ></div>
        </div>
      </div>
    </nav>
  );
}
