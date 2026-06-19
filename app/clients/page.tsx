import PageHeader from "@/components/PageHeader";
import ClientLogoGrid from "@/components/ClientLogoGrid";
import Link from "next/link";

export const metadata = {
  title: "Our Clients – NMZ Associates",
  description: "NMZ Associates proudly serves leading apparel and textile brands from across Europe, North America, and Asia.",
};

const regions = [
  { name: "Europe", flag: "🇪🇺", desc: "Major retailers and brands across Spain, UK, Germany, France, and the wider EU." },
  { name: "North America", flag: "🇺🇸", desc: "Fashion labels and mass-market retailers throughout the USA and Canada." },
  { name: "Asia Pacific", flag: "🌏", desc: "Emerging and established brands across China, India, South Korea, and beyond." },
  { name: "Middle East", flag: "🌍", desc: "Luxury and mid-market brands across Gulf Cooperation Council countries." },
];

export default function ClientsPage() {
  return (
    <>
      <PageHeader
        title="Our Clients"
        subtitle="We proudly partner with leading brands and retailers from all around the world."
        bgImage="/images/7.jpeg"
        breadcrumb="Partners"
      />

      {/* Stats */}
      <section className="relative py-20 overflow-hidden bg-[#060e24]">
        <div className="stats-orb-1 absolute -top-16 -left-16 w-72 h-72 rounded-full opacity-30"
             style={{ background: "radial-gradient(circle, #384E8E 0%, transparent 70%)" }} />
        <div className="stats-orb-2 absolute -bottom-20 -right-20 w-96 h-96 rounded-full opacity-25"
             style={{ background: "radial-gradient(circle, #EF773A 0%, transparent 70%)" }} />
        <div className="absolute inset-0 opacity-[0.04]"
             style={{
               backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
               backgroundSize: "40px 40px",
             }} />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#EF773A] to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#384E8E] to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
            {[
              { n: "200+", label: "Valued Clients" },
              { n: "14+",  label: "Countries Served" },
              { n: "35+",  label: "Years of Trust" },
              { n: "98%",  label: "Client Retention" },
            ].map((s) => (
              <div key={s.label} className="group">
                <div className="inline-block mb-3 px-4 py-3 rounded-xl bg-white/5 border border-white/10 group-hover:border-[#EF773A]/40 transition-colors duration-300">
                  <div className="text-4xl font-extrabold text-white">{s.n}</div>
                </div>
                <div className="text-[#B1DAEB] text-sm font-medium uppercase tracking-wider">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global reach */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[#EF773A] font-semibold tracking-widest text-sm uppercase mb-2">Where We Serve</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#464646]">
              OUR CLIENTS COME FROM ALL AROUND THE WORLD
            </h2>
            <div className="flex justify-center mt-4 mb-6">
              <div className="h-1 w-16 bg-[#B1DAEB] rounded" />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {regions.map((r) => (
              <div key={r.name} className="text-center border border-gray-100 rounded-xl p-6 hover:shadow-md transition-shadow">
                <div className="text-4xl mb-3">{r.flag}</div>
                <h3 className="font-semibold text-[#384E8E] mb-2">{r.name}</h3>
                <p className="text-sm text-gray-600">{r.desc}</p>
              </div>
            ))}
          </div>

          {/* Client logo grid */}
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-[#464646] mb-3">Our Client Portfolio</h3>
            <p className="text-gray-600 max-w-xl mx-auto text-sm">
              We are proud to work with a diverse range of clients from boutique labels to multinational retailers.
            </p>
          </div>
          <ClientLogoGrid />
        </div>
      </section>

      {/* Compliance */}
      <section className="py-20 bg-[#EBEBEB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#EF773A] font-semibold tracking-widest text-sm uppercase mb-2">Standards</p>
          <h2 className="text-3xl font-bold text-[#464646] mb-5">
            OUR FACTORIES ARE COMPLIANCE WITH VARIOUS INTERNATIONAL STANDARDS
          </h2>
          <div className="flex justify-center mb-6">
            <div className="h-1 w-16 bg-[#B1DAEB] rounded" />
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed mb-10">
            All manufacturing partners in our network are audited and certified against major international
            compliance standards, including social accountability, environmental management, and quality management systems.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {["ISO 9001", "ISO 14001", "GOTS", "OEKO-TEX", "BSCI", "SA8000", "WRAP", "Sedex"].map((cert) => (
              <span key={cert} className="bg-white border border-[#B1DAEB] text-[#384E8E] px-5 py-2 rounded-full font-semibold text-sm shadow-sm">
                {cert}
              </span>
            ))}
          </div>

          <div className="mt-12">
            <Link
              href="/contact"
              className="bg-[#384E8E] text-white px-10 py-4 rounded font-semibold hover:bg-[#2d3f72] transition-colors"
            >
              Become a Client
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
