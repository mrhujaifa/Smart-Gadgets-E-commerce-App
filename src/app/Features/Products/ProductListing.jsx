// "use client";

// import ProductCard from "@/app/Components/ProductCard/ProductCard";
// import { getAllProducts } from "@/app/Services/ProductService/productService";
// import React, { useEffect, useState } from "react";

// export default function ProductList() {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     async function fetchProducts() {
//       try {
//         const data = await getAllProducts();
//         // If API returns { products: [...] }
//         setProducts(Array.isArray(data) ? data : data.products || []);
//       } catch (err) {
//         setError("Failed to load products.");
//       } finally {
//         setLoading(false);
//       }
//     }
//     fetchProducts();
//   }, []);

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>{error}</div>;
//   if (!products.length) return <div>No products found.</div>;

//   return (
//     <div>
//       <h2>Product List</h2>
//       <ul>
//         {products
//           .filter((product) => product && product._id)
//           .map((product) => (
//             <ProductCard key={product._id} product={product} />
//           ))}
//       </ul>
//     </div>
//   );
// }