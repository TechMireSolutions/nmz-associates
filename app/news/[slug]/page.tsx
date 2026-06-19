import PageHeader from "@/components/PageHeader";
import Link from "next/link";
import { notFound } from "next/navigation";

const articles: Record<string, {
  title: string;
  category: string;
  date: string;
  image: string;
  content: string;
}> = {
  "sustainable-sourcing-2025": {
    title: "The Rise of Sustainable Sourcing in Apparel: What Brands Need to Know",
    category: "Sustainability",
    date: "2025-11-20",
    image: "/images/t-1.webp",
    content: `As consumer demand for eco-conscious fashion continues to grow, brands face increasing pressure to verify and communicate the sustainability credentials of their supply chains.

At NMZ Associates, we have spent over 35 years building supply chain expertise, and the last decade has seen sustainability move from a niche concern to a core business requirement.

**Why Sustainability Cannot Be an Afterthought**

The days of treating sustainability as a PR exercise are over. Legislation like the EU Corporate Sustainability Due Diligence Directive and the UK Modern Slavery Act are creating real legal obligations for brands to know their supply chains. Meanwhile, consumers are increasingly able to identify greenwashing and will not hesitate to call it out publicly.

**The Spectrum of Sustainable Sourcing**

Sustainable sourcing does not look the same for every brand. For some, it means switching to certified organic cotton. For others, it is eliminating hazardous chemicals from dyeing processes, or ensuring living wages in the supply chain. The first step is defining what sustainable means for your brand and your customer.

**Where to Start**

Our recommendation is to begin with supply chain mapping. You cannot improve what you cannot measure, and most brands are surprised to discover how little visibility they have beyond their direct Tier 1 suppliers. Understanding where your fabrics come from and how they are processed is fundamental.

**The Business Case**

Sustainable sourcing is not just the right thing to do — it is increasingly the smart business move. Brands with credible sustainability credentials command price premiums in key markets, face fewer regulatory risks, and build deeper loyalty with ethically-minded consumers.

If you are ready to start your sustainable sourcing journey, our team is here to help.`,
  },
  "quality-control-guide": {
    title: "A Brand's Guide to Effective Quality Control in Garment Manufacturing",
    category: "Quality Control",
    date: "2025-10-14",
    image: "/images/mt-sample-background.jpg",
    content: `Quality control in garment manufacturing is the difference between a product that delights customers and one that generates costly returns. Yet many brands rely on inadequate QC processes, often because they do not know what good looks like.

**Pre-Production Inspection**

Before a single item is manufactured, raw materials and accessories should be verified. This includes checking fabric weight, colour accuracy against the approved lab dip, and confirming that trims, buttons, and labels match the tech pack specifications.

**In-Line Inspection**

During production, our inspectors visit the factory floor to monitor workmanship in real time. By checking items as they come off the production line, issues can be identified and corrected before they affect the entire order quantity.

**Final Random Inspection**

The pre-shipment inspection is the last line of defence before goods leave the factory. We follow AQL sampling standards to check measurement conformity, finish quality, labelling accuracy, and packaging integrity.

**Laboratory Testing**

Beyond visual inspection, laboratory testing is essential for certain product categories. Durability testing, colour fastness, shrinkage after washing, and chemical safety testing should all form part of a comprehensive QC strategy.

Contact our team to learn how our integrated inspection services can protect your brand.`,
  },
  "sourcing-from-pakistan": {
    title: "Pakistan as a Sourcing Destination: Opportunities and Considerations",
    category: "Sourcing",
    date: "2025-09-05",
    image: "/images/4.webp",
    content: `Pakistan is the world's fourth largest producer of cotton and has a well-developed textile manufacturing sector that makes it a significant sourcing destination for global apparel brands.

**The Case For Pakistan**

Pakistan's textile industry is vertically integrated — from raw cotton to finished garments — which gives it a cost and speed advantage for products that rely heavily on cotton-based fabrics. Labour costs remain competitive versus China and Bangladesh, making Pakistan attractive for mid-volume orders.

**Key Product Categories**

Pakistan excels in denim, knitwear, sportswear, workwear, and home textiles. Lahore, Karachi, and Faisalabad are the major manufacturing hubs, each with somewhat different specialisations.

**Our Support**

Our team operates in Pakistan and can provide ground-level support — from factory identification and qualification to ongoing quality oversight. With the right factory partners and a diligent QC process in place, Pakistan can be a highly effective part of your sourcing mix.

Get in touch to discuss how we can support your Pakistan sourcing strategy.`,
  },
  "ethics-in-supply-chains": {
    title: "Beyond Compliance: Building Genuinely Ethical Supply Chains",
    category: "Ethics",
    date: "2025-08-19",
    image: "/images/2.webp",
    content: `The compliance audit has long been the fashion industry's go-to tool for addressing ethical concerns in the supply chain. But as scandals continue to emerge at audited factories, it is becoming clear that compliance is necessary but not sufficient.

**The Limits of Auditing**

Social audits, when well conducted, can identify obvious violations: excessive working hours, missing fire exits, unpaid wages. But they are limited. A one-day snapshot audit can miss systemic issues. Factories learn to prepare for audits. And many ethical failures are difficult to detect without worker interviews conducted in confidence.

**Long-Term Relationships Matter**

Some of the most meaningful progress we have seen on factory conditions has come not from audits, but from long-term commercial relationships. When a factory knows it has ongoing business from a brand, it has both the financial security and the incentive to invest in improving conditions.

**Worker Voice**

The most underutilised tool in ethical supply chain management is listening to workers directly. Anonymous grievance mechanisms, third-party worker surveys, and genuine investment in worker wellbeing programs go far beyond what any audit can achieve.

At NMZ Associates, we build long-term partnerships with our factory network. We believe that ethical sourcing is a journey, not a destination, and we walk that journey alongside our clients and factory partners.`,
  },
  "ai-in-sourcing": {
    title: "How AI is Transforming Textile Sourcing and Quality Inspection",
    category: "Technology",
    date: "2025-07-08",
    image: "/images/3.webp",
    content: `Artificial intelligence is making inroads into virtually every industry, and apparel sourcing and textile quality inspection are no exception. While the technology is still maturing, early applications are showing real promise.

**AI-Powered Defect Detection**

Computer vision systems trained on thousands of defect images can now detect many common fabric and garment defects faster and more consistently than human inspectors. These systems do not get tired, do not have off days, and can process far more items per hour than a human team.

**Predictive Supplier Analytics**

AI tools that aggregate and analyse supplier performance data can help sourcing teams make better decisions about where to place orders. Predictive models can flag suppliers showing early signs of quality decline before it becomes a shipment problem.

**The Human Element Remains**

Despite the exciting developments, we believe the most effective approach is augmented intelligence — technology that enhances human expertise rather than replacing it. Our inspectors bring contextual knowledge, communication skills, and judgment that AI systems cannot replicate.

We are actively exploring how to integrate these tools into our inspection workflows. If you would like to discuss how technology is shaping our QC approach, we would love to talk.`,
  },
  "circular-fashion-supply-chain": {
    title: "Circular Fashion: Rethinking the Entire Supply Chain",
    category: "Sustainability",
    date: "2025-06-22",
    image: "/images/5.webp",
    content: `The fashion industry's linear model — extract, make, use, dispose — is under growing pressure from regulators, investors, and consumers. The circular economy offers an alternative, but transitioning requires rethinking the supply chain from the very beginning.

**What Does Circular Mean in Fashion?**

Circular fashion encompasses a range of approaches: designing for durability and repairability, using recycled or bio-based materials, implementing take-back schemes, and ultimately creating closed loops where garments are recycled into new fibres at end of life.

**The Role of Sourcing Partners**

As a sourcing partner, NMZ Associates is in a unique position to support brands on their circular journey. We can identify and qualify suppliers of certified recycled materials, connect brands with manufacturers who have closed-loop dyeing systems, and verify sustainability claims through documentation and third-party testing.

**Deadstock and Pre-Consumer Recycled Fabrics**

One of the most accessible entry points into circular sourcing is deadstock fabric — surplus material from mills and manufacturers that would otherwise go to landfill. We have access to deadstock inventories across our supplier network.

**Starting Points**

You do not need to overhaul your entire range at once. Starting with one sustainable collection, one material switch, or one supplier transition is a legitimate first step. Our sustainability team would be delighted to help you identify where circular principles can be integrated into your sourcing strategy.`,
  },
};

export function generateStaticParams() {
  return Object.keys(articles).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles[slug];
  if (!article) return {};
  return {
    title: `${article.title} – NMZ Associates`,
    description: article.title,
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles[slug];
  if (!article) notFound();

  const paragraphs = article.content.split("\n\n");

  return (
    <>
      <PageHeader title={article.category} subtitle={article.title} bgImage={article.image} />

      <article className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-4 mb-8">
            <span className="bg-[#EF773A] text-white text-xs font-semibold px-3 py-1 rounded-full">
              {article.category}
            </span>
            <span className="text-sm text-gray-400">
              {new Date(article.date).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </span>
          </div>

          <div className="rounded-xl overflow-hidden mb-10 h-72 bg-gray-100">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-5 text-gray-700 leading-relaxed">
            {paragraphs.map((p, i) => {
              if (p.startsWith("**") && p.endsWith("**")) {
                return (
                  <h2 key={i} className="text-xl font-bold text-[#384E8E] mt-8 mb-2">
                    {p.replace(/\*\*/g, "")}
                  </h2>
                );
              }
              return <p key={i}>{p}</p>;
            })}
          </div>

          <div className="mt-14 pt-8 border-t border-gray-100">
            <Link
              href="/news"
              className="inline-flex items-center gap-2 text-[#384E8E] font-semibold hover:text-[#EF773A] transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to News
            </Link>
          </div>
        </div>
      </article>

      <section className="py-16 bg-[#384E8E] text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-3">Ready to Work Together?</h2>
          <p className="text-[#B1DAEB] mb-8 text-sm">Contact our team to discuss your sourcing needs.</p>
          <Link
            href="/contact"
            className="bg-[#EF773A] text-white px-8 py-4 rounded font-semibold hover:bg-[#d4692d] transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
