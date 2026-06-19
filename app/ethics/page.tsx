import PageHeader from "@/components/PageHeader";
import Link from "next/link";

export const metadata = {
  title: "Ethics & Sustainability – NMZ Associates",
  description: "NMZ Associates is committed to ethical sourcing, environmental responsibility, and sustainable supply chains in the apparel and textile industry.",
};

const pillars = [
  {
    icon: "🌱",
    title: "Environmental Responsibility",
    desc: "We work exclusively with factories that demonstrate responsible environmental management. This includes water and energy efficiency, waste reduction, and minimizing the carbon footprint of manufacturing.",
    points: [
      "Preference for factories with ISO 14001 certification",
      "Tracking and reducing chemical usage in textile production",
      "Encouraging adoption of renewable energy sources",
      "Supporting water recycling and treatment programs",
    ],
  },
  {
    icon: "🤝",
    title: "Social Responsibility",
    desc: "Our commitment to workers' rights is non-negotiable. Every factory in our network is audited to ensure fair wages, safe working conditions, no child labour, and the right to freedom of association.",
    points: [
      "Regular social audits (BSCI, SA8000, Sedex SMETA)",
      "Strict no child labour policy",
      "Living wage advocacy in all production countries",
      "Safe and hygienic working conditions",
    ],
  },
  {
    icon: "♻️",
    title: "Circular Economy",
    desc: "We believe in designing waste out of the supply chain. We actively support brands transitioning to circular business models — from deadstock fabrics to end-of-life take-back schemes.",
    points: [
      "Deadstock and surplus fabric sourcing",
      "Support for product take-back and recycling programs",
      "Closed-loop manufacturing partnerships",
      "Extended producer responsibility guidance",
    ],
  },
  {
    icon: "🔍",
    title: "Traceability & Transparency",
    desc: "True sustainability requires transparency. We provide full supply chain mapping so our clients know exactly where their products come from, right down to the raw material.",
    points: [
      "Tier 1, 2 & 3 supplier mapping",
      "Fibre and material traceability documentation",
      "Country-of-origin verification",
      "Transparent audit report sharing",
    ],
  },
];

const certs = [
  { name: "GOTS", desc: "Global Organic Textile Standard" },
  { name: "OEKO-TEX", desc: "Harmful substance testing" },
  { name: "GRS", desc: "Global Recycled Standard" },
  { name: "Fair Trade", desc: "Fair trade certified" },
  { name: "BCI", desc: "Better Cotton Initiative" },
  { name: "Bluesign", desc: "Responsible chemistry" },
];

export default function EthicsPage() {
  return (
    <>
      <PageHeader
        title="Ethics & Sustainability"
        subtitle="We believe that responsible business is good business. Our ethical commitments are woven into every decision we make."
        breadcrumb="Our Values"
      />

      {/* Mission statement */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <p className="text-[#EF773A] font-semibold tracking-widest text-sm uppercase mb-2">Our Commitment</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#464646] mb-6">
                DOING BUSINESS THE RIGHT WAY
              </h2>
              <div className="h-1 w-16 bg-[#B1DAEB] rounded mb-6" />
              <p className="text-gray-600 leading-relaxed mb-4">
                For over 35 years, NMZ Associates has built its reputation on trust, transparency, and ethical conduct.
                As the apparel industry faces increasing scrutiny over its environmental and social impact, we have
                made it our mission to be part of the solution.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Our ethical framework guides how we select factory partners, negotiate contracts, and manage every
                aspect of the supply chain. We don't treat sustainability as a box to tick — it's a lens through
                which we view every business decision.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We hold ourselves and our partners to the highest standards, and we welcome the accountability
                that comes with transparency.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { n: "100%", label: "Audited Factories" },
                { n: "35+", label: "Years of Ethics" },
                { n: "14+", label: "Countries of Operation" },
                { n: "8+", label: "Certifications Accepted" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="bg-[#EBEBEB] rounded-xl p-6 text-center"
                >
                  <div className="text-3xl font-bold text-[#384E8E] mb-1">{s.n}</div>
                  <div className="text-sm text-gray-600">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4 pillars */}
      <section className="py-20 bg-[#EBEBEB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[#EF773A] font-semibold tracking-widest text-sm uppercase mb-2">Framework</p>
            <h2 className="text-3xl font-bold text-[#464646] mb-5">Our Four Ethical Pillars</h2>
            <div className="flex justify-center">
              <div className="h-1 w-16 bg-[#B1DAEB] rounded" />
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {pillars.map((p) => (
              <div key={p.title} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-4xl mb-4">{p.icon}</div>
                <h3 className="text-xl font-bold text-[#384E8E] mb-3">{p.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-5">{p.desc}</p>
                <ul className="space-y-2">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-2 text-sm text-gray-600">
                      <svg className="w-4 h-4 text-[#EF773A] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-[#384E8E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#B1DAEB] font-semibold tracking-widest text-sm uppercase mb-2">Standards</p>
          <h2 className="text-3xl font-bold text-white mb-5">Certifications We Recognise</h2>
          <div className="flex justify-center mb-10">
            <div className="h-1 w-16 bg-[#B1DAEB] rounded" />
          </div>
          <p className="text-[#B1DAEB] max-w-2xl mx-auto mb-10">
            We source from factories holding international certifications that verify ethical labour practices,
            environmental management, and product safety. Below are the standards we prioritise.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {certs.map((c) => (
              <div key={c.name} className="bg-white/10 rounded-xl p-5 text-center hover:bg-white/20 transition-colors">
                <div className="text-white font-bold text-lg mb-1">{c.name}</div>
                <div className="text-[#B1DAEB] text-xs">{c.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Factory code of conduct */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <p className="text-[#EF773A] font-semibold tracking-widest text-sm uppercase mb-2">Compliance</p>
            <h2 className="text-3xl font-bold text-[#464646] mb-5">Factory Code of Conduct</h2>
            <div className="flex justify-center mb-6">
              <div className="h-1 w-16 bg-[#B1DAEB] rounded" />
            </div>
            <p className="text-gray-600 leading-relaxed">
              Every factory partner in the NMZ network must agree to and uphold our Factory Code of Conduct
              as a condition of doing business with us.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              "No child or forced labour",
              "Freedom of association & collective bargaining",
              "Safe & healthy working conditions",
              "Fair wages and working hours",
              "No discrimination or harassment",
              "Environmental compliance",
              "Anti-bribery & corruption policy",
              "Transparent sub-contracting disclosure",
              "Continuous improvement commitment",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 p-4 bg-[#EBEBEB] rounded-lg">
                <div className="w-6 h-6 rounded-full bg-[#384E8E] flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-sm text-gray-700 font-medium">{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/contact"
              className="bg-[#384E8E] text-white px-10 py-4 rounded font-semibold hover:bg-[#2d3f72] transition-colors"
            >
              Learn More About Our Standards
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
