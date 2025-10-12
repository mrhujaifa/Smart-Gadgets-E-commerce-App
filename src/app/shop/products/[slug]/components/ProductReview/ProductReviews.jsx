"use client";
import { useState } from "react";
import ReactStars from "react-rating-stars-component";
import { addProductReview } from "@/app/Services/ProductsService/productService";

export default function ProductReviews({ product }) {
  // Local state for reviews to update dynamically
  const [reviews, setReviews] = useState(product?.reviews || []);

  // Average rating
  const avgRating =
    reviews.length > 0
      ? (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1)
      : 0;

  // Rating breakdown
  const ratingBreakdown = [5, 4, 3, 2, 1].map((star) => ({
    star,
    count: reviews.filter((r) => r.rating === star).length,
  }));

  const [formData, setFormData] = useState({
    rating: 0,
    comment: "",
    name: "",
    email: "",
  });

  // Handle review submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const reviewData = {
      name: formData.name,
      email: formData.email,
      rating: formData.rating,
      comment: formData.comment,
    };

    const newReview = await addProductReview(product.slug, reviewData);

    if (newReview) {
      alert("✅ Review submitted successfully!");
      setReviews([newReview, ...reviews]); // add new review to top
      setFormData({ rating: 0, comment: "", name: "", email: "" });
    } else {
      alert("❌ Failed to submit review");
    }
  };

  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-sm mt-10 p-6">
      <h2 className="text-xl font-semibold mb-6 text-gray-800">Reviews</h2>

      {/* Ratings Summary & Review Form */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Side - Rating Summary */}
        <div>
          <p className="text-gray-600 mb-3">
            Based on {reviews.length} review{reviews.length !== 1 && "s"}
          </p>

          <div className="flex items-center gap-2 mb-4">
            <span className="text-4xl font-semibold text-gray-800">{avgRating}</span>
            <span className="text-gray-500">overall</span>
          </div>

          {ratingBreakdown.map((item) => (
            <div
              key={item.star}
              className="flex items-center gap-2 text-sm mb-1 text-gray-700"
            >
              <ReactStars
                count={5}
                value={item.star}
                edit={false}
                size={16}
                activeColor="#facc15"
              />
              <div className="flex-1 h-2 bg-gray-200 rounded-full">
                <div
                  className="h-2 bg-yellow-400 rounded-full"
                  style={{ width: `${(item.count / (reviews.length || 1)) * 100}%` }}
                ></div>
              </div>
              <span className="w-6 text-right text-gray-500">{item.count}</span>
            </div>
          ))}
        </div>

        {/* Right Side - Add Review Form */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-gray-800">Add a review</h3>
          <form onSubmit={handleSubmit} className="space-y-3">
            <ReactStars
              count={5}
              size={28}
              value={formData.rating}
              activeColor="#facc15"
              onChange={(newRating) => setFormData({ ...formData, rating: newRating })}
            />

            <textarea
              placeholder="Your Review"
              value={formData.comment}
              onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
              className="w-full border border-gray-300 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
              rows={4}
              required
            />

            <input
              type="text"
              placeholder="Name *"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full border border-gray-300 rounded-lg p-2 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            />

            <input
              type="email"
              placeholder="Email *"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full border border-gray-300 rounded-lg p-2 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            />

            <button
              type="submit"
              className="bg-yellow-400 text-white font-medium px-5 py-2 rounded-full hover:bg-yellow-500 transition-all"
            >
              Add Review
            </button>
          </form>
        </div>
      </div>

      {/* Reviews List */}
      <div className="mt-10 border-t border-gray-200 pt-6">
        {reviews.length === 0 ? (
          <p className="text-gray-500 text-sm">No reviews yet.</p>
        ) : (
          reviews.map((r) => (
            <div key={r._id} className="mb-6">
              <ReactStars
                count={5}
                value={r.rating}
                edit={false}
                size={18}
                activeColor="#facc15"
              />
              <p className="text-gray-700 text-sm mb-2">{r.comment}</p>
              <p className="font-medium text-gray-900">
                {r.name}
                <span className="text-gray-500 text-sm ml-1">
                  {new Date(r.date).toLocaleDateString()}
                </span>
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
