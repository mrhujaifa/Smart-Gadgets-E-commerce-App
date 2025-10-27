"use client";
import { useState } from "react";
import { Grid, List, ListOrdered } from "lucide-react";

export default function ProductTopNav() {
  const [view, setView] = useState("grid");

  return (
    <div className="w-full bg-gray-50 flex items-center justify-between px-4 py-2 rounded-md border border-gray-100">
      {/* Left side icons */}
      <div className="flex items-center space-x-2">
        <button
          className={`p-2 rounded-sm ${
            view === "grid" ? "text-gray-900" : "text-gray-300"
          }`}
          onClick={() => setView("grid")}
        >
          <Grid size={18} />
        </button>
        <button
          className={`p-2 rounded-sm ${
            view === "list" ? "text-gray-900" : "text-gray-300"
          }`}
          onClick={() => setView("list")}
        >
          <List size={18} />
        </button>
        <button
          className={`p-2 rounded-sm ${
            view === "list2" ? "text-gray-900" : "text-gray-300"
          }`}
          onClick={() => setView("list2")}
        >
          <ListOrdered size={18} />
        </button>
      </div>

      {/* Middle dropdowns */}
      <div className="flex items-center space-x-3">
        <select className="rounded-full border border-gray-200 bg-white text-sm text-gray-700 px-4 py-1.5 focus:outline-none">
          <option>Default sorting</option>
          <option>Newest</option>
          <option>Oldest</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
        </select>

        <select className="rounded-full border border-gray-200 bg-white text-sm text-gray-700 px-4 py-1.5 focus:outline-none">
          <option>Show 20</option>
          <option>Show 40</option>
          <option>Show 60</option>
        </select>
      </div>

      {/* Right pagination */}
      <div className="flex items-center space-x-1 text-gray-700 text-sm">
        <div className="px-3 py-1 border border-gray-200 rounded-full bg-white">1</div>
        <span>of 3</span>
        <button className="ml-1 text-gray-500 hover:text-gray-800">→</button>
      </div>
    </div>
  );
}
