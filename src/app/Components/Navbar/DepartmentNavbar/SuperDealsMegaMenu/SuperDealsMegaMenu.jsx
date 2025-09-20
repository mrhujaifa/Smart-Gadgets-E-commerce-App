import React from "react";

export default function SuperDealsMegaMenu({ open }) {
  return (
    <div>
      {/* Dropdown Menu */}
      {open && (
        <div className="absolute left-0 top-full mt-3.5 w-full  lg:w-[1208]  max-w-[1208px] shadow-lg border-t border-[#fed700] z-50">
          {/* Responsive Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 p-8 text-sm ">
            {/* Column 1 */}
            <div>
              <h4 className="font-semibold mb-2 text-gray-900">
                Home & Static Pages
              </h4>
              <ul className="space-y-1">
                <li>Home v1</li>
                <li>Home v2</li>
                <li>Home v3</li>
                <li>Home v3.1</li>
                <li>Home v4</li>
                <li>Home v5</li>
                <li>Home v6</li>
                <li>Home v7</li>
                <li>About</li>
                <li>Contact v1</li>
                <li>Contact v2</li>
                <li>FAQ</li>
                <li>Store Directory</li>
                <li>Terms and Conditions</li>
                <li>404</li>
              </ul>
            </div>

            {/* Column 2 */}
            <div>
              <h4 className="font-semibold mb-2 text-gray-900">Shop Pages</h4>
              <ul className="space-y-1">
                <li>Shop Grid</li>
                <li>Shop Grid Extended</li>
                <li>Shop List View</li>
                <li>Shop List View Small</li>
                <li>Shop Left Sidebar</li>
                <li>Shop Full Width</li>
                <li>Shop Right Sidebar</li>
              </ul>
              <h4 className="font-semibold mt-4 mb-2 text-gray-900">
                Product Categories
              </h4>
              <ul className="space-y-1">
                <li>4 Column Sidebar</li>
                <li>5 Column Sidebar</li>
                <li>6 Column Full width</li>
                <li>7 Column Full width</li>
              </ul>
            </div>

            {/* Column 3 */}
            <div>
              <h4 className="font-semibold mb-2 text-gray-900">
                Single Product Pages
              </h4>
              <ul className="space-y-1">
                <li>Single Product Extended</li>
                <li>Single Product Fullwidth</li>
                <li>Single Product Sidebar</li>
              </ul>
              <h4 className="font-semibold mt-4 mb-2 text-gray-900">
                Ecommerce Pages
              </h4>
              <ul className="space-y-1">
                <li>Shop</li>
                <li>Cart</li>
                <li>Checkout</li>
                <li>My Account</li>
                <li>Track your Order</li>
                <li>Compare</li>
              </ul>
            </div>

            {/* Column 4 */}
            <div>
              <h4 className="font-semibold mb-2 text-gray-900">Blog Pages</h4>
              <ul className="space-y-1">
                <li>Blog v1</li>
                <li>Blog v2</li>
                <li>Blog v3</li>
                <li>Blog Full Width</li>
                <li>Single Blog Post</li>
              </ul>
            </div>

            {/* Column 5 */}
            <div>
              <h4 className="font-semibold mb-2 text-gray-900">Shop Columns</h4>
              <ul className="space-y-1">
                <li>7 Column Full width</li>
                <li>6 Column Full width</li>
                <li>5 Column Sidebar</li>
                <li>4 Column Sidebar</li>
                <li>3 Column Sidebar</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
