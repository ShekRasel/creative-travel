"use client";

import { articles } from "@/data/travelArticle";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const TravelArticles = ({ header }: { header: string }) => {
  const currentPath = usePathname();
  const matched = currentPath == "/articles";
  const displayArticles = matched ? articles : articles.slice(0, 6);
  return (
    <div className="container py-8 bg-stone-100 relative z-20 pt-10">
      <div className="mx-auto bg-stone-100 relative z-20 md:max-w-4xl border-black">
        <h1 className="text-4xl font-semibold text-gray-800 mb-8 text-center z-50">
          {header}
        </h1>

        {/* article list */}
        <div className="grid grid-cols-2 gap-6">
          {displayArticles.map((article) => (
            <div
              key={article.id}
              className="bg-white overflow-hidden duration-300 cursor-pointer border p-6 hover:scale-105 ease-in-out transition-all"
            >
              {/* Image */}
              <div className="relative h-48 w-full rounded-2xl overflow-hidden  border-red-500">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-4 bg-white pt-10">
                <h2 className="text-base text-gray-500 text-center">
                  {article.date}
                </h2>
                <h2 className="text-lg font-semibold text-gray-600 line-clamp-2 hover:text-blue-600 transition-colors mt-2 text-center">
                  {article.title}
                </h2>
              </div>
            </div>
          ))}
        </div>

        {!matched && (
          <div className="mt-10 flex items-center justify-center">
            <Link href={"/articles"} className=" underline text-black">
              View All Articles
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default TravelArticles;
