"use client";

import { articles } from "@/data/travelArticle";
import Image from "next/image";
import Link from "next/link";

const FeaturedArticles = () => {
  // Get first 3 articles as featured
  const featured = articles.slice(0, 3);

  return (
    <div className="bg-white py-8 px-4 md:px-8 border border-stone-200 rounded-lg shadow-sm">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <span className="text-xs uppercase tracking-[0.15em] text-amber-600 font-medium">
              Editor Pick
            </span>
            <h2 className="text-2xl md:text-3xl font-light text-stone-800 mt-1">
              Featured Stories
            </h2>
          </div>
          <Link
            href="/articles"
            className="text-sm text-stone-400 hover:text-stone-600 transition-colors"
          >
            View all →
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featured.map((article, index) => (
            <Link
              key={article.id}
              href={`/articles/${article.id}`}
              className="group"
            >
              <div className="bg-stone-50 overflow-hidden rounded-lg hover:shadow-md transition-shadow duration-300">
                <div className="relative h-40 w-full overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-2 left-2 bg-amber-500 text-stone-900 text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-full">
                    #{index + 1}
                  </span>
                </div>
                <div className="p-4">
                  <p className="text-xs text-stone-400">{article.date}</p>
                  <h3 className="text-sm font-medium text-stone-700 group-hover:text-amber-600 transition-colors mt-1 line-clamp-2">
                    {article.title}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedArticles;
