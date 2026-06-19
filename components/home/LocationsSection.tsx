const offices = [
  { country: "Spain", flag: "🇪🇸", role: "European Headquarters", desc: "Managing European client relationships and market development." },
  { country: "Pakistan", flag: "🇵🇰", role: "South Asia Hub", desc: "Primary manufacturing coordination and quality control center." },
  { country: "India", flag: "🇮🇳", role: "Regional Office", desc: "Textile sourcing and supplier network management." },
  { country: "China", flag: "🇨🇳", role: "East Asia Hub", desc: "Factory liaison, production monitoring, and logistics coordination." },
  { country: "U.S.A.", flag: "🇺🇸", role: "North America Office", desc: "Client services and market representation for North America." },
  { country: "Canada", flag: "🇨🇦", role: "North America Office", desc: "Supporting Canadian market and regional brand partnerships." },
];

export default function LocationsSection() {
  return (
    <section className="py-20 bg-[#384E8E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-[#B1DAEB] font-semibold tracking-widest text-sm uppercase mb-2">
            Global Presence
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Our Offices Worldwide
          </h2>
          <div className="flex justify-center mt-4 mb-6">
            <div className="h-1 w-16 bg-[#EF773A] rounded" />
          </div>
          <p className="text-[#B1DAEB] max-w-2xl mx-auto">
            With strategically located offices across four continents, we provide truly local
            expertise with a genuinely global reach.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {offices.map((office) => (
            <div
              key={office.country}
              className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-colors"
            >
              <div className="text-4xl mb-3">{office.flag}</div>
              <h3 className="text-xl font-bold text-white mb-1">{office.country}</h3>
              <p className="text-[#EF773A] text-sm font-semibold mb-2">{office.role}</p>
              <p className="text-[#B1DAEB] text-sm leading-relaxed">{office.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
