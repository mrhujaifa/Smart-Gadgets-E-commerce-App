"use client";

export default function CategoryNavbar({ categories, activeCategory, onSelect }) {
  return (
    <div className="flex flex-wrap items-center justify-center pt-5 border-b border-gray-200  ">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onSelect(cat)}
          className={`relative text-sm font-medium px-3 py-3 transition-colors duration-200 ${
            activeCategory === cat
              ? "text-black font-semibold after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:mx-auto after:w-22 after:h-[3px]  after:bg-yellow-400 after:rounded-full"
              : "text-gray-600 hover:text-black"
          }`}
        >
          {cat.charAt(0).toUpperCase() + cat.slice(1)}
        </button>
      ))}
    </div>
  );
}
