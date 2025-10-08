import Header from "@/app/Components/Navbar/MainNavbar/Header";
import SocialNavbar from "@/app/Components/Navbar/SocialNavbar/SocialNav";

export default function ProductDetailsLayout({ children }) {
  return (
    <div className="container mx-auto p-6">
        <nav>
            <SocialNavbar></SocialNavbar>
        </nav>
        <Header></Header>
      {/* Optional Breadcrumbs */}
      <nav className="text-gray-500 text-sm mb-4">
        <span>Home</span> &gt; <span>Products</span> &gt; <span>Product Details</span>
      </nav>

      {/* The actual product content */}
      {children}
    </div>
  );
}
