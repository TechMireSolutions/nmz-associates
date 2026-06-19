import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="relative min-h-[85vh] flex items-center justify-center bg-[#EBEBEB] overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#B1DAEB]/40 via-[#EBEBEB] to-[#C6EBFB]/30" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#B1DAEB]/20" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        {/* Main brand name */}
        <div className="mb-4">
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-[0.3em] text-[#384E8E] uppercase mb-2">
            N M Z
          </h1>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[0.15em] text-[#464646] uppercase">
            ASSOCIATES
          </h2>
          <p className="text-sm sm:text-base text-gray-500 tracking-widest mt-1 uppercase">
            Group Of Companies
          </p>
        </div>

        {/* Divider */}
        <div className="flex items-center justify-center gap-4 my-8">
          <div className="h-px w-24 bg-[#EF773A]" />
          <div className="w-2 h-2 rounded-full bg-[#EF773A]" />
          <div className="h-px w-24 bg-[#EF773A]" />
        </div>

        {/* Tagline */}
        <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-[#464646] max-w-3xl mx-auto leading-snug">
          One Door Solution for your{" "}
          <span className="text-[#384E8E]">Apparel and Textile</span> Businesses
        </h3>

        <p className="mt-5 text-gray-600 max-w-2xl mx-auto text-base sm:text-lg">
          Connecting global fashion brands with quality sourcing, expert quality control,
          and end-to-end supply chain management.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
          <Link
            href="/services"
            className="bg-[#384E8E] text-white px-8 py-4 rounded font-semibold hover:bg-[#2d3f72] transition-colors text-base shadow-lg"
          >
            Our Services
          </Link>
          <Link
            href="/contact"
            className="bg-[#EF773A] text-white px-8 py-4 rounded font-semibold hover:bg-[#d4692d] transition-colors text-base shadow-lg"
          >
            Get In Touch
          </Link>
        </div>

        {/* Global offices indicator */}
        <div className="mt-12 flex flex-wrap justify-center gap-3 text-sm text-gray-500">
          {["🇪🇸 Spain", "🇵🇰 Pakistan", "🇮🇳 India", "🇨🇳 China", "🇺🇸 USA", "🇨🇦 Canada"].map((loc) => (
            <span
              key={loc}
              className="bg-white/70 px-3 py-1 rounded-full border border-gray-200 backdrop-blur"
            >
              {loc}
            </span>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
