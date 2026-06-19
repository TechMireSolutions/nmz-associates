import PageHeader from "@/components/PageHeader";
import Link from "next/link";

const values = [
  { title: "Fashion Expertise", icon: "👗", desc: "20+ years of deep fashion industry knowledge across all apparel categories." },
  { title: "Global Network", icon: "🌐", desc: "Strategic partnerships with certified manufacturers across Asia, Europe, and the Americas." },
  { title: "Quality Assurance", icon: "🏆", desc: "Rigorous quality control processes from raw materials to finished goods." },
  { title: "Ethical Sourcing", icon: "⚖️", desc: "100% commitment to fair labor practices and environmental responsibility." },
  { title: "Customized Approach", icon: "🎯", desc: "Every client gets a tailored solution built around their unique needs and brand values." },
  { title: "Transparent Communication", icon: "💬", desc: "Real-time updates and open communication at every stage of your order." },
];

export const metadata = {
  title: "About Us – NMZ Associates",
  description: "Learn about NMZ Associates, our history, values, and global team dedicated to serving the apparel and textile industry.",
};

export default function AboutUsPage() {
  return (
    <>
      <PageHeader
        title="About Us"
        subtitle="We are a global sourcing partner for the apparel and textile industry, built on expertise, ethics, and excellence."
        breadcrumb="NMZ Associates"
      />

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#EF773A] font-semibold tracking-widest text-sm uppercase mb-2">Our Story</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#464646] mb-6">
                A Trusted Partner for Global Fashion Brands
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                NMZ Associates was founded with a clear mission: to be the bridge between global
                fashion brands and quality manufacturing. Over the decades, we have grown from a
                single-office operation into a multi-country network spanning Spain, Pakistan,
                India, China, USA, and Canada.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Our team brings together seasoned professionals from every corner of the fashion
                supply chain — designers, production managers, quality controllers, logistics
                experts, and financial planners — all working in harmony to deliver exceptional
                results for our clients.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Today, NMZ Associates is a name synonymous with reliability, quality, and ethical
                business practice. Whether you are a boutique label or a major retailer, we have
                the experience and resources to meet your needs.
              </p>
              <blockquote className="border-l-4 border-[#B1DAEB] pl-4 italic text-gray-500">
                "The essence of good textile sourcing is balancing cost, quality, and ethics. At
                NMZ Associates, we deliver all three."
              </blockquote>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "35+", sub: "Years of Experience" },
                { label: "14+", sub: "Countries Served" },
                { label: "200+", sub: "Valued Clients" },
                { label: "6", sub: "Global Offices" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="bg-[#EBEBEB] rounded-xl p-8 text-center"
                >
                  <div className="text-4xl font-extrabold text-[#384E8E] mb-1">{s.label}</div>
                  <div className="text-sm text-gray-500 font-medium">{s.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-[#EBEBEB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[#EF773A] font-semibold tracking-widest text-sm uppercase mb-2">What We Stand For</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#464646]">Our Core Values</h2>
            <div className="flex justify-center mt-4 mb-6">
              <div className="h-1 w-16 bg-[#B1DAEB] rounded" />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-3xl mb-3">{v.icon}</div>
                <h3 className="font-semibold text-[#384E8E] mb-2">{v.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#EF773A] font-semibold tracking-widest text-sm uppercase mb-2">Worldwide</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#464646] mb-5">Our Global Presence</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-12">
            With offices across four continents, we provide local expertise backed by a truly global perspective.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { flag: "🇪🇸", name: "Spain" },
              { flag: "🇵🇰", name: "Pakistan" },
              { flag: "🇮🇳", name: "India" },
              { flag: "🇨🇳", name: "China" },
              { flag: "🇺🇸", name: "U.S.A." },
              { flag: "🇨🇦", name: "Canada" },
            ].map((c) => (
              <div key={c.name} className="flex items-center gap-2 bg-[#EBEBEB] px-6 py-3 rounded-full">
                <span className="text-2xl">{c.flag}</span>
                <span className="font-semibold text-[#384E8E]">{c.name}</span>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <Link
              href="/contact"
              className="bg-[#384E8E] text-white px-10 py-4 rounded font-semibold hover:bg-[#2d3f72] transition-colors"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
