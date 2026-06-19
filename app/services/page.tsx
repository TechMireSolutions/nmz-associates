import PageHeader from "@/components/PageHeader";
import Link from "next/link";

export const metadata = {
  title: "Services – NMZ Associates",
  description: "Comprehensive apparel and textile sourcing services including quality control, production management, logistics, and customized solutions.",
};

const services = [
  {
    icon: "🔍",
    title: "Quality Control & Inspection",
    desc: "Our expert inspectors conduct rigorous quality checks at every stage — pre-production, during production, and pre-shipment — to ensure your products meet the highest standards.",
    points: ["Pre-production inspection", "In-line production monitoring", "Lab testing & certification", "Final pre-shipment inspection"],
  },
  {
    icon: "🧵",
    title: "Textile & Fabric Sourcing",
    desc: "We source the finest fabrics and materials from our vetted network of mills and suppliers across Asia and Europe, matching your specifications precisely.",
    points: ["Woven & knitted fabrics", "Technical & performance textiles", "Sustainable & eco materials", "Sample development"],
  },
  {
    icon: "👗",
    title: "Garment Sourcing & Production",
    desc: "End-to-end garment production management, from tech pack development to bulk production, with continuous monitoring at certified factories.",
    points: ["Tech pack development", "Vendor selection & vetting", "Production planning", "Compliance audits"],
  },
  {
    icon: "🚢",
    title: "Logistics & Supply Chain",
    desc: "Seamless coordination of shipping, customs clearance, and last-mile delivery to ensure your products arrive on time, wherever they need to go.",
    points: ["Export documentation", "Freight coordination", "Customs clearance", "Delivery tracking"],
  },
  {
    icon: "🎨",
    title: "Product Development",
    desc: "From concept to sample, our design and development team helps bring your ideas to life with expert guidance on materials, construction, and costing.",
    points: ["Trend research & moodboards", "Sample development", "Costing & negotiation", "Fit testing & approval"],
  },
  {
    icon: "🌱",
    title: "Sustainable Sourcing",
    desc: "We help brands meet their sustainability targets by sourcing from certified ethical factories using eco-friendly materials and responsible practices.",
    points: ["Certified sustainable materials", "Carbon footprint assessment", "Ethical factory audits", "Sustainability reporting"],
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Our Services"
        subtitle="Comprehensive solutions for your apparel and textile sourcing needs — from raw materials to finished goods and everything in between."
        bgImage="/images/8.webp"
        breadcrumb="What We Offer"
      />

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="border border-gray-100 rounded-xl p-8 hover:shadow-lg hover:border-[#B1DAEB] transition-all duration-300 group"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-[#384E8E] mb-3 group-hover:text-[#EF773A] transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-5">{service.desc}</p>
                <ul className="space-y-1.5">
                  {service.points.map((p) => (
                    <li key={p} className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#EF773A] shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-[#EBEBEB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#EF773A] font-semibold tracking-widest text-sm uppercase mb-2">Our Approach</p>
          <h2 className="text-3xl font-bold text-[#464646] mb-5">Simple, Transparent Process</h2>
          <div className="flex justify-center mb-10">
            <div className="h-1 w-16 bg-[#B1DAEB] rounded" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Consultation", desc: "Tell us your requirements and we'll design a custom solution." },
              { step: "02", title: "Sourcing", desc: "We identify the best suppliers and negotiate optimal terms." },
              { step: "03", title: "Production", desc: "We manage manufacturing with quality checks at every stage." },
              { step: "04", title: "Delivery", desc: "We handle logistics and deliver to your specified location." },
            ].map((s) => (
              <div key={s.step} className="bg-white rounded-xl p-6 text-center shadow-sm">
                <div className="text-3xl font-extrabold text-[#B1DAEB] mb-2">{s.step}</div>
                <h3 className="font-semibold text-[#384E8E] mb-2">{s.title}</h3>
                <p className="text-sm text-gray-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#384E8E] text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-[#B1DAEB] mb-8">
            Contact our team today to discuss how we can support your sourcing needs.
          </p>
          <Link
            href="/contact"
            className="bg-[#EF773A] text-white px-10 py-4 rounded font-semibold hover:bg-[#d4692d] transition-colors"
          >
            Request a Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
