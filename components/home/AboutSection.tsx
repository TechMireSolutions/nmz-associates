import Link from "next/link";

const features = [
  {
    icon: "📦",
    title: "Wide Range of Products",
    desc: "From fabrics to finished garments, we cover the full spectrum of textile and apparel categories.",
  },
  {
    icon: "✅",
    title: "Quality Control",
    desc: "Rigorous inspection protocols at every stage ensure your products meet the highest standards.",
  },
  {
    icon: "💰",
    title: "Competitive Pricing",
    desc: "Our global network and negotiation expertise deliver the best value for your investment.",
  },
  {
    icon: "🎯",
    title: "Customized Solutions",
    desc: "We tailor every aspect of our service to your brand's specific requirements and vision.",
  },
  {
    icon: "🚚",
    title: "Timely Delivery",
    desc: "Reliable supply chain coordination ensures your products arrive on schedule, every time.",
  },
  {
    icon: "🤝",
    title: "Excellent Customer Service",
    desc: "Dedicated account management and transparent communication throughout your journey.",
  },
];

export default function AboutSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-[#EF773A] font-semibold tracking-widest text-sm uppercase mb-2">
            Who We Are
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#464646]">
            Welcome to <span className="text-[#384E8E]">NMZ Associates</span>
          </h2>
          <div className="flex justify-center mt-4 mb-6">
            <div className="h-1 w-16 bg-[#B1DAEB] rounded" />
          </div>
          <p className="text-gray-600 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed">
            We are a comprehensive sourcing partner for clothing and textile businesses worldwide.
            With offices spanning six countries and decades of industry expertise, we bridge the gap
            between global fashion brands and quality manufacturing.
          </p>
          <blockquote className="mt-6 italic text-gray-500 text-sm sm:text-base border-l-4 border-[#B1DAEB] pl-4 text-left max-w-2xl mx-auto">
            "The essence of good textile sourcing is balancing cost, quality, and ethics — and at
            NMZ Associates, we deliver all three."
          </blockquote>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="group p-6 border border-gray-100 rounded-xl hover:shadow-lg hover:border-[#B1DAEB] transition-all duration-300"
            >
              <div className="text-3xl mb-3">{f.icon}</div>
              <h3 className="font-semibold text-[#384E8E] mb-2">{f.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/about-us"
            className="inline-block border-2 border-[#384E8E] text-[#384E8E] px-8 py-3 rounded font-semibold hover:bg-[#384E8E] hover:text-white transition-colors"
          >
            Learn More About Us
          </Link>
        </div>
      </div>
    </section>
  );
}
