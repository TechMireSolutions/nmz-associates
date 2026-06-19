import Link from "next/link";

const articles = [
  {
    title: "Bangladesh's Textile Exports Are Increasing While Pakistan's Decreasing",
    excerpt:
      "An in-depth look at RMG sector trends as Bangladesh consolidates its position while Pakistan faces headwinds in the global garment export market.",
    category: "Industry Trends",
    date: "2024",
    slug: "bangladesh-textile-exports",
  },
  {
    title: "Digital Gains: Revolutionizing the Textile Industry with the Mobile Phone",
    excerpt:
      "How digital transformation and mobile technology are reshaping manufacturing operations, quality monitoring, and supply chain visibility in textiles.",
    category: "Technology",
    date: "2024",
    slug: "digital-transformation-textiles",
  },
  {
    title: "The Apparel Industry Must Find Common Ground on Three Crucial Issues in 2024",
    excerpt:
      "Sustainability collaboration, wage equity, and raw material transparency are the three pillars the industry must address collectively in the coming year.",
    category: "Sustainability",
    date: "2024",
    slug: "apparel-industry-common-ground",
  },
  {
    title: "Sustainable Water Management in Pakistan's Textile Industry",
    excerpt:
      "Regulatory monitoring and innovative practices are helping Pakistan's textile sector reduce water consumption and improve wastewater treatment.",
    category: "Environment",
    date: "2024",
    slug: "water-management-pakistan-textiles",
  },
];

const categoryColors: Record<string, string> = {
  "Industry Trends": "bg-[#B1DAEB] text-[#384E8E]",
  Technology: "bg-[#D4D941]/30 text-[#464646]",
  Sustainability: "bg-green-100 text-green-800",
  Environment: "bg-blue-100 text-blue-800",
};

export default function NewsSection() {
  return (
    <section className="py-20 bg-[#EBEBEB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-[#EF773A] font-semibold tracking-widest text-sm uppercase mb-2">
            Industry Insights
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#464646]">
            Latest News & Articles
          </h2>
          <div className="flex justify-center mt-4 mb-6">
            <div className="h-1 w-16 bg-[#EF773A] rounded" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {articles.map((article) => (
            <article
              key={article.slug}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow group"
            >
              {/* Category banner */}
              <div className="h-1.5 bg-[#384E8E]" />
              <div className="p-5">
                <span
                  className={`inline-block text-xs font-semibold px-2 py-0.5 rounded mb-3 ${categoryColors[article.category] || "bg-gray-100 text-gray-600"}`}
                >
                  {article.category}
                </span>
                <h3 className="font-bold text-[#464646] mb-3 leading-snug group-hover:text-[#384E8E] transition-colors text-sm">
                  {article.title}
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed mb-4">{article.excerpt}</p>
                <Link
                  href={`/news/${article.slug}`}
                  className="text-xs font-semibold text-[#384E8E] hover:text-[#EF773A] transition-colors flex items-center gap-1"
                >
                  Read More
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/news"
            className="inline-block border-2 border-[#384E8E] text-[#384E8E] px-8 py-3 rounded font-semibold hover:bg-[#384E8E] hover:text-white transition-colors"
          >
            View All Articles
          </Link>
        </div>
      </div>
    </section>
  );
}
