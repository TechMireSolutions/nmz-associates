import Link from "next/link";

const pillars = [
  {
    icon: "🌱",
    title: "Environmental Impact",
    desc: "Reducing our ecological footprint through eco-friendly materials and sustainable production methods.",
  },
  {
    icon: "⚖️",
    title: "Social Responsibility",
    desc: "Upholding fair labor practices and workers' rights throughout our entire supply chain.",
  },
  {
    icon: "♻️",
    title: "Circular Economy",
    desc: "Promoting reuse, recycling, and resource efficiency at every stage of the product lifecycle.",
  },
  {
    icon: "🔍",
    title: "Traceability & Transparency",
    desc: "Full visibility into sourcing and production, so you can trust every claim we make.",
  },
];

export default function EthicsTeaser() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <p className="text-[#EF773A] font-semibold tracking-widest text-sm uppercase mb-2">
              Ethics & Sustainability
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#464646] mb-5">
              Moral Philosophy Guides Everything We Do
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Moral philosophy plays an important role in guiding the decisions and actions of
              apparel and textile businesses. At NMZ Associates, ethical sourcing isn&apos;t an
              add-on — it&apos;s at the heart of every decision we make.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              We work exclusively with factories that meet rigorous social and environmental
              standards, ensuring that the products we source are not only of the highest quality
              but also ethically produced.
            </p>
            <Link
              href="/ethics"
              className="inline-block bg-[#384E8E] text-white px-8 py-3 rounded font-semibold hover:bg-[#2d3f72] transition-colors"
            >
              Our Ethics Policy
            </Link>
          </div>

          {/* Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {pillars.map((p) => (
              <div
                key={p.title}
                className="p-5 rounded-xl border border-[#B1DAEB] hover:bg-[#B1DAEB]/10 transition-colors"
              >
                <div className="text-3xl mb-2">{p.icon}</div>
                <h3 className="font-semibold text-[#384E8E] mb-2">{p.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
