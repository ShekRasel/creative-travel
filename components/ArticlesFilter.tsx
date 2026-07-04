"use client";

import { useState } from "react";

const ArticlesFilter = () => {
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState("newest");

  const categories = [
    "All",
    "Adventure",
    "Culture",
    "Food",
    "Nature",
    "Travel Tips",
  ];

  return (
    <div className="bg-white border border-stone-200 rounded-lg p-4 md:p-6 shadow-sm">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        {/* Categories */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat.toLowerCase())}
              className={`px-4 py-1.5 text-sm font-medium rounded-full transition-all duration-200 ${
                category === cat.toLowerCase()
                  ? "bg-stone-800 text-white"
                  : "bg-stone-100 text-stone-600 hover:bg-stone-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Sort */}
        <div className="flex items-center gap-3">
          <span className="text-xs uppercase tracking-wider text-stone-400 font-medium">
            Sort by
          </span>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="bg-stone-50 border border-stone-200 rounded-md px-3 py-1.5 text-sm text-stone-700 focus:outline-none focus:ring-1 focus:ring-stone-400"
          >
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
            <option value="popular">Most Popular</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default ArticlesFilter;
