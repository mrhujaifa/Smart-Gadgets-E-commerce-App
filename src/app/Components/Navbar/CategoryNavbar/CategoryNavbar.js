"use client";

export default function CategoryNavbar({ categories, activeCategory, onSelect }) {
  return (
    <div className="w-full border-b border-gray-200">
      <div
        className="
          flex items-center 
          lg:justify-center  
          overflow-x-auto lg:overflow-visible
          scrollbar-hide snap-x
        "
      >
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => onSelect(cat)}
            className={`
              relative text-sm whitespace-nowrap lg:font-medium px-4 py-3 transition-colors duration-200 snap-center
              ${
                activeCategory === cat
                  ? "text-black font-semibold after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:mx-auto after:w-16 after:h-[3px] after:bg-yellow-400 after:rounded-full"
                  : "text-gray-600 hover:text-black"
              }
            `}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
}
