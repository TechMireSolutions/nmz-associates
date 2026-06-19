import Link from "next/link";

export default function ShowroomCTA() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#B1DAEB] to-[#C6EBFB] rounded-2xl p-10 sm:p-16 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="text-center lg:text-left">
            <p className="text-[#384E8E] font-semibold tracking-widest text-sm uppercase mb-2">
              Showroom
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#464646] mb-4">
              WELCOME TO OUR SHOWROOM
            </h2>
            <p className="text-[#464646] max-w-xl leading-relaxed">
              Kindly look into our showroom to see our latest product developments.
              Browse our extensive catalogue covering fabrics, garments, and accessories
              across all categories.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <Link
              href="/showroom"
              className="bg-[#384E8E] text-white px-8 py-4 rounded font-semibold hover:bg-[#2d3f72] transition-colors text-center whitespace-nowrap"
            >
              Visit Showroom
            </Link>
            <a
              href="/product-catalog.pdf"
              className="bg-[#EF773A] text-white px-8 py-4 rounded font-semibold hover:bg-[#d4692d] transition-colors text-center whitespace-nowrap"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Catalogue
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
