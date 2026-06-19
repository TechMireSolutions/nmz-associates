import PageHeader from "@/components/PageHeader";
import Link from "next/link";

export const metadata = {
  title: "Inspection Services – NMZ Associates",
  description: "Expert quality control and inspection services for textile and garment manufacturing. Pre-production, in-line, lab testing, and pre-shipment inspections.",
};

const inspectionTypes = [
  {
    icon: "🔬",
    title: "Pre-Production Inspection",
    desc: "Before a single stitch is sewn, our inspectors verify raw materials and accessories. We check fabric quality, color accuracy, and specification compliance to prevent costly mistakes before manufacturing begins.",
    details: ["Fabric quality verification", "Color accuracy checks", "Trim & accessory audit", "Specification compliance"],
  },
  {
    icon: "⚙️",
    title: "During Production Inspection",
    desc: "Throughout the manufacturing process, our team monitors operations to ensure adherence to agreed-upon standards. Real-time sampling and immediate deviation detection keep production on track.",
    details: ["Production line monitoring", "Workmanship sampling", "Process compliance checks", "Real-time issue resolution"],
  },
  {
    icon: "🧪",
    title: "Laboratory Testing",
    desc: "We partner with accredited testing facilities to conduct comprehensive performance testing, verifying fabric strength, color fastness, shrinkage, and chemical composition.",
    details: ["Fabric strength testing", "Color fastness evaluation", "Shrinkage testing", "Chemical safety compliance"],
  },
  {
    icon: "📦",
    title: "Pre-Shipment Inspection",
    desc: "Our final comprehensive check before products ship covers size measurement, color conformity, labeling accuracy, and packaging integrity — giving you confidence in every shipment.",
    details: ["Size & measurement audit", "Color & finish review", "Labeling & hang tag check", "Packaging verification"],
  },
];

export default function InspectionPage() {
  return (
    <>
      <PageHeader
        title="Inspection Services"
        subtitle="Quality assurance is not an afterthought — it's built into every stage of our sourcing process."
        bgImage="/images/mt-sample-background.jpg"
        breadcrumb="Quality Control"
      />

      {/* Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-[#EF773A] font-semibold tracking-widest text-sm uppercase mb-2">
              Integrated Quality Assurance
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#464646] mb-5">
              A Cornerstone of Our Sourcing Package
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Our integrated inspection services provide seamless quality assurance from the initial
              stages of production to the final product, ensuring your brand standards are met at
              every step of the manufacturing journey.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {inspectionTypes.map((type) => (
              <div
                key={type.title}
                className="bg-[#EBEBEB] rounded-xl p-8 hover:shadow-md transition-shadow"
              >
                <div className="text-4xl mb-4">{type.icon}</div>
                <h3 className="text-xl font-bold text-[#384E8E] mb-3">{type.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-5">{type.desc}</p>
                <ul className="space-y-2">
                  {type.details.map((d) => (
                    <li key={d} className="flex items-center gap-2 text-sm text-gray-600">
                      <svg className="w-4 h-4 text-[#EF773A] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Reports */}
      <section className="py-16 bg-[#384E8E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Sample Inspection Reports</h2>
          <p className="text-[#B1DAEB] max-w-2xl mx-auto mb-8">
            Review our sample inspection reports to understand the detail and transparency we bring to every assignment.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#" className="bg-white text-[#384E8E] px-6 py-3 rounded font-semibold hover:bg-[#B1DAEB] transition-colors text-sm">
              📄 Final Inspection Report Sample
            </a>
            <a href="#" className="bg-white text-[#384E8E] px-6 py-3 rounded font-semibold hover:bg-[#B1DAEB] transition-colors text-sm">
              📄 Lab Testing Report Sample
            </a>
          </div>
        </div>
      </section>

      {/* Standalone CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#B1DAEB] to-[#C6EBFB] rounded-2xl p-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#464646] mb-3">
                Need Inspection Only?
              </h2>
              <p className="text-gray-600 max-w-xl">
                If you manage your own sourcing but need expert quality control, our Standalone
                Inspection service gives you the same rigorous standards without the full sourcing package.
              </p>
            </div>
            <div className="shrink-0 flex gap-4">
              <Link
                href="/standalone-inspection"
                className="bg-[#384E8E] text-white px-8 py-4 rounded font-semibold hover:bg-[#2d3f72] transition-colors whitespace-nowrap"
              >
                Standalone Inspection
              </Link>
              <Link
                href="/contact"
                className="bg-[#EF773A] text-white px-8 py-4 rounded font-semibold hover:bg-[#d4692d] transition-colors whitespace-nowrap"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
