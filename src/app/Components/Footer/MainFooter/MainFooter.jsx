"use client";
import { FaFacebookF, FaGoogle, FaTwitter, FaGithub } from "react-icons/fa";
import FooterNav from "../FooterNav/FooterNav";
import { BiSupport } from "react-icons/bi";

export default function Footer() {
  return (
    <div>
      <footer className="mt-10">
        <FooterNav />

        {/* Footer Main */}
        <div className="container mx-auto py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 px-4">
          {/* Logo & Contact */}
          <div className="col-span-1 md:col-span-2 space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">
              Smart Gadgets<span className="text-yellow-400">.</span>
            </h2>

            <div className="flex items-start sm:items-center gap-4">
              <BiSupport className="text-[#fed700] min-w-[50px]" size={50} />
              <div>
                <p className="text-gray-600 text-sm">
                  Got questions? Call us 24/7!
                </p>
                <p className="font-medium text-gray-800">
                  (800) 8001-8588, (0600) 874 548
                </p>
              </div>
            </div>

            <div>
              <h5 className="font-semibold">Contact information</h5>
              <p className="text-gray-600 text-sm">
                17 Princess Road, London, Greater London NW1 8JR, UK
              </p>
            </div>

            {/* Socials */}
            <div className="flex space-x-4 text-gray-600 text-xl">
              <FaFacebookF className="cursor-pointer hover:text-gray-800 transition" />
              <FaGoogle className="cursor-pointer hover:text-gray-800 transition" />
              <FaTwitter className="cursor-pointer hover:text-gray-800 transition" />
              <FaGithub className="cursor-pointer hover:text-gray-800 transition" />
            </div>
          </div>

          {/* Find it Fast */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-3">Find it Fast</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Laptops & Computers</li>
              <li>Cameras & Photography</li>
              <li>Smart Phones & Tablets</li>
              <li>Video Games & Consoles</li>
              <li>TV & Audio</li>
              <li>Gadgets</li>
              <li>Car Electronic & GPS</li>
            </ul>
          </div>

          {/* Extra Links */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-3">More</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Printers & Ink</li>
              <li>Software</li>
              <li>Office Supplies</li>
              <li>Computer Components</li>
              <li>Accessories</li>
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h3 className="font-semibold mb-3">Customer Care</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>My Account</li>
              <li>Order Tracking</li>
              <li>Wish List</li>
              <li>Customer Service</li>
              <li>Returns / Exchange</li>
              <li>FAQs</li>
              <li>Product Support</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="bg-gray-100">
          <div className="container mx-auto py-4 px-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600 gap-3">
            <p className="text-center md:text-left">
              © <span className="font-bold text-gray-800">Smart Gadgets</span> - All
              rights Reserved
            </p>

            <div className="flex gap-3 flex-wrap justify-center md:justify-end">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg"
                alt="Visa"
                className="h-6"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/0/0e/Mastercard-logo.png"
                alt="Mastercard"
                className="h-6"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/5a/Discover_Card_logo.svg"
                alt="Discover"
                className="h-6"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/4/40/Skrill_logo.svg"
                alt="Skrill"
                className="h-6"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
                alt="PayPal"
                className="h-6"
              />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
