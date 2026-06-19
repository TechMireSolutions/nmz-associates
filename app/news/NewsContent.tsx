"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

type Article = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
};

const categories = ["All", "Sustainability", "Quality Control", "Sourcing", "Ethics", "Technology"];

function formatDate(dateStr: string, opts: Intl.DateTimeFormatOptions) {
  return new Date(dateStr).toLocaleDateString("en-GB", opts);
}

export default function NewsContent({ articles }: { articles: Article[] }) {
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? articles : articles.filter((a) => a.category === active);
  const featured = filtered[0] ?? null;
  const rest = filtered.slice(1);

  return (
    <>
      {/* Category filter */}
      <section className="py-10 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div role="group" aria-label="Filter articles by category" className="flex flex-wrap gap-3 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                aria-pressed={active === cat}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                  active === cat
                    ? "bg-[#384E8E] text-white shadow-sm"
                    : "bg-[#EBEBEB] text-[#464646] hover:bg-[#B1DAEB] hover:text-[#384E8E]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* No results */}
      {filtered.length === 0 && (
        <section className="py-24 bg-white text-center">
          <p className="text-gray-500 text-lg">No articles in this category yet.</p>
        </section>
      )}

      {/* Featured article */}
      {featured && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-[#EBEBEB] rounded-2xl overflow-hidden flex flex-col lg:flex-row">
              <div className="relative lg:w-1/2 min-h-64 bg-gray-200 overflow-hidden">
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
              <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-[#EF773A] text-white text-xs font-semibold px-3 py-1 rounded-full">
                    Featured
                  </span>
                  <span className="bg-white text-[#384E8E] text-xs font-semibold px-3 py-1 rounded-full border border-[#B1DAEB]">
                    {featured.category}
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#464646] mb-4">{featured.title}</h2>
                <p className="text-gray-600 leading-relaxed mb-6">{featured.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">
                    {formatDate(featured.date, { day: "numeric", month: "long", year: "numeric" })}
                  </span>
                  <Link
                    href={`/news/${featured.slug}`}
                    className="bg-[#384E8E] text-white px-6 py-3 rounded font-semibold text-sm hover:bg-[#2d3f72] transition-colors"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Article grid */}
      {rest.length > 0 && (
        <section className="py-10 pb-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {rest.map((a) => (
                <article
                  key={a.slug}
                  className="border border-gray-100 rounded-xl overflow-hidden hover:shadow-lg transition-shadow group"
                >
                  <div className="relative h-48 bg-gray-100 overflow-hidden">
                    <Image
                      src={a.image}
                      alt={a.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs font-semibold text-[#EF773A] bg-orange-50 px-3 py-1 rounded-full">
                        {a.category}
                      </span>
                      <span className="text-xs text-gray-400">
                        {formatDate(a.date, { day: "numeric", month: "short", year: "numeric" })}
                      </span>
                    </div>
                    <h3 className="font-bold text-[#464646] mb-2 group-hover:text-[#384E8E] transition-colors leading-snug">
                      {a.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed mb-4 line-clamp-3">{a.excerpt}</p>
                    <Link
                      href={`/news/${a.slug}`}
                      className="text-[#384E8E] font-semibold text-sm hover:text-[#EF773A] transition-colors inline-flex items-center gap-1"
                    >
                      Read More
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
