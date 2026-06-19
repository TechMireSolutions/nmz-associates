import PageHeader from "@/components/PageHeader";
import Link from "next/link";

export const metadata = {
  title: "Standalone Inspection – NMZ Associates",
  description: "Flexible standalone inspection services for brands that manage their own sourcing. Expert QC without the full sourcing package.",
};

const services = [
  {
    icon: "🔬",
    title: "Pre-Production Inspection",
    desc: "Detailed checks of raw materials and components to ensure they meet your quality standards before production begins.",
  },
  {
    icon: "⚙️",
    title: "During Production Inspection",
    desc: "Real-time monitoring of production with sampling and factory collaboration to identify and address issues promptly.",
  },
  {
    icon: "📦",
    title: "Pre-Shipment Inspection",
    desc: "Final verification of finished products to confirm they meet all client specifications and are ready for shipment.",
  },
  {
    icon: "💯",
    title: "100% Inspection",
    desc: "Complete examination of every single item — ideal for high-value or critical orders that require maximum quality assurance.",
  },
  {
    icon: "🧪",
    title: "Laboratory Testing",
    desc: "Independent fabric testing in accredited facilities covering durability, color fastness, shrinkage, and chemical safety.",
  },
  {
    icon: "📋",
    title: "Compliance Audits",
    desc: "Verification that your factory partners meet international standards and regulations relevant to your target markets.",
  },
  {
    icon: "🌱",
    title: "Sustainability Audits",
    desc: "Assessments to ensure your supply chain adheres to recognized sustainability standards and ethical labor practices.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Planning",
    desc: "We work with you to understand your product specifications, quality standards, and inspection requirements — then create a customized inspection protocol.",
  },
  {
    step: "02",
    title: "Execution",
    desc: "Our experienced inspectors conduct thorough checks at the factory using industry-standard methodologies and your specific acceptance criteria.",
  },
  {
    step: "03",
    title: "Reporting",
    desc: "Detailed inspection reports are delivered within 24 hours, including photos, measurements, defect classifications, and a clear pass/fail verdict.",
  },
  {
    step: "04",
    title: "Follow-Up",
    desc: "We provide actionable recommendations and, where needed, coordinate with the factory on corrective actions before goods are released.",
  },
];

const benefits = [
  "35+ years of textile industry expertise",
  "Operations in 14+ countries worldwide",
  "Reports delivered within 24 hours",
  "Internationally accredited lab partnerships",
  "Multilingual inspection teams",
  "Fully customizable inspection protocols",
  "Real-time communication with factory",
  "Strong ethical & sustainability commitment",
];

export default function StandaloneInspectionPage() {
  return (
    <>
      <PageHeader
        title="Standalone Inspection"
        subtitle="Expert quality control for brands that manage their own sourcing — the same rigorous standards, on your terms."
        breadcrumb="Quality Control"
      />

      {/* Intro */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <p className="text-[#EF773A] font-semibold tracking-widest text-sm uppercase mb-2">
              Flexible Quality Control
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#464646] mb-5">
              Your Sourcing, Our Expertise
            </h2>
            <p className="text-gray-600 leading-relaxed">
              For clients who manage their own sourcing relationships but need an independent eye
              on quality, our standalone inspection service delivers the same rigorous standards
              as our integrated package — without the full sourcing commitment.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div key={s.title} className="border border-gray-100 rounded-xl p-6 hover:shadow-md hover:border-[#B1DAEB] transition-all">
                <div className="text-3xl mb-3">{s.icon}</div>
                <h3 className="font-semibold text-[#384E8E] mb-2">{s.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-[#EBEBEB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[#EF773A] font-semibold tracking-widest text-sm uppercase mb-2">How It Works</p>
            <h2 className="text-3xl font-bold text-[#464646] mb-5">Our Inspection Process</h2>
            <div className="flex justify-center mb-6">
              <div className="h-1 w-16 bg-[#B1DAEB] rounded" />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((s) => (
              <div key={s.step} className="bg-white rounded-xl p-6 text-center shadow-sm">
                <div className="w-12 h-12 rounded-full bg-[#384E8E] text-white font-bold text-lg flex items-center justify-center mx-auto mb-4">
                  {s.step}
                </div>
                <h3 className="font-semibold text-[#384E8E] mb-2">{s.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-[#384E8E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#B1DAEB] font-semibold tracking-widest text-sm uppercase mb-2">
                Why Choose Us
              </p>
              <h2 className="text-3xl font-bold text-white mb-4">
                Inspection You Can Trust
              </h2>
              <p className="text-[#B1DAEB] leading-relaxed mb-6">
                With over 35 years of experience in the textile and apparel industry, our inspection
                teams are experts in detecting defects, verifying specifications, and ensuring
                compliance — so you never have to wonder about the quality of what you're receiving.
              </p>
              <Link
                href="/contact"
                className="bg-[#EF773A] text-white px-8 py-4 rounded font-semibold hover:bg-[#d4692d] transition-colors inline-block"
              >
                Request an Inspection
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {benefits.map((b) => (
                <div key={b} className="flex items-start gap-3 bg-white/10 rounded-lg p-4">
                  <svg className="w-5 h-5 text-[#EF773A] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white text-sm">{b}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
