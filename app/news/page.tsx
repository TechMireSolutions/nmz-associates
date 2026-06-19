import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import NewsContent from "./NewsContent";

export const metadata: Metadata = {
  title: "News & Insights",
  description:
    "Latest news, industry insights, and updates from NMZ Associates — your apparel and textile sourcing partner.",
};

const articles = [
  {
    slug: "sustainable-sourcing-2025",
    title: "The Rise of Sustainable Sourcing in Apparel: What Brands Need to Know",
    excerpt:
      "As consumer demand for eco-conscious fashion grows, we explore how brands can navigate the shift to sustainable sourcing without sacrificing cost or quality.",
    date: "2025-11-20",
    category: "Sustainability",
    image: "/images/t-1.webp",
  },
  {
    slug: "quality-control-guide",
    title: "A Brand's Guide to Effective Quality Control in Garment Manufacturing",
    excerpt:
      "Poor quality control at the factory level leads to costly returns and brand damage. Here's our comprehensive guide to building a robust QC framework.",
    date: "2025-10-14",
    category: "Quality Control",
    image: "/images/mt-sample-background.jpg",
  },
  {
    slug: "sourcing-from-pakistan",
    title: "Pakistan as a Sourcing Destination: Opportunities and Considerations",
    excerpt:
      "Pakistan's textile sector is one of the most significant in Asia. We break down what makes it an attractive sourcing hub and what to watch out for.",
    date: "2025-09-05",
    category: "Sourcing",
    image: "/images/2.webp",
  },
  {
    slug: "ethics-in-supply-chains",
    title: "Beyond Compliance: Building Genuinely Ethical Supply Chains",
    excerpt:
      "Compliance audits are the floor, not the ceiling. We discuss what truly ethical supply chain management looks like — and why it pays off long-term.",
    date: "2025-08-19",
    category: "Ethics",
    image: "/images/3.webp",
  },
  {
    slug: "ai-in-sourcing",
    title: "How AI is Transforming Textile Sourcing and Quality Inspection",
    excerpt:
      "From automated defect detection to predictive supplier performance, artificial intelligence is reshaping how the industry approaches quality and sourcing.",
    date: "2025-07-08",
    category: "Technology",
    image: "/images/4.webp",
  },
  {
    slug: "circular-fashion-supply-chain",
    title: "Circular Fashion: Rethinking the Entire Supply Chain",
    excerpt:
      "The linear take-make-dispose model is under pressure. We explore how brands can start integrating circular design principles at the sourcing stage.",
    date: "2025-06-22",
    category: "Sustainability",
    image: "/images/5.webp",
  },
];

export default function NewsPage() {
  return (
    <>
      <PageHeader
        title="News & Insights"
        subtitle="Stay up to date with industry trends, sourcing insights, and company updates from NMZ Associates."
        bgImage="/images/t-1.webp"
        breadcrumb="Blog"
      />

      <NewsContent articles={articles} />

      {/* Newsletter CTA */}
      <section className="py-16 bg-[#384E8E] text-center">
        <div className="max-w-xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-3">Stay in the Loop</h2>
          <p className="text-[#B1DAEB] mb-8 text-sm">
            Get the latest industry insights, company updates, and sourcing tips delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <label htmlFor="newsletter-email" className="sr-only">Email address</label>
            <input
              id="newsletter-email"
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded text-gray-700 outline-none focus:ring-2 focus:ring-[#EF773A]"
            />
            <button className="bg-[#EF773A] text-white px-6 py-3 rounded font-semibold hover:bg-[#d4692d] transition-colors whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
