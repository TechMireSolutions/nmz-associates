import PageHeader from "@/components/PageHeader";
import { galleryNums, imgSrc } from "@/lib/images";

export const metadata = {
  title: "ShowRoom – NMZ Associates",
  description: "Explore our showroom featuring our latest product development across fabrics, garments, and accessories.",
};

const categories = [
  { name: "Woven Fabrics", icon: "🧵", desc: "High-quality woven textiles for all garment categories." },
  { name: "Knitted Fabrics", icon: "🎽", desc: "Stretch and comfort-focused knit materials." },
  { name: "Outerwear", icon: "🧥", desc: "Jackets, coats, and technical outerwear." },
  { name: "Sportswear", icon: "⚽", desc: "Performance activewear and sports apparel." },
  { name: "Casual Wear", icon: "👕", desc: "Everyday basics and lifestyle collections." },
  { name: "Formal Wear", icon: "👔", desc: "Tailored suiting and occasion wear." },
  { name: "Children's Wear", icon: "🧒", desc: "Safe and comfortable kids' apparel." },
  { name: "Accessories", icon: "👜", desc: "Bags, hats, scarves, and more." },
];

export default function ShowroomPage() {
  return (
    <>
      <PageHeader
        title="Our Showroom"
        subtitle="Explore our latest product developments across the full spectrum of apparel and textile categories."
        breadcrumb="Showroom"
      />

      {/* Welcome */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#EF773A] font-semibold tracking-widest text-sm uppercase mb-2">Welcome</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#464646] mb-5">
            WELCOME TO OUR SHOWROOM
          </h2>
          <div className="flex justify-center mb-6">
            <div className="h-1 w-16 bg-[#B1DAEB] rounded" />
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed mb-8">
            Kindly look into our showroom to see our latest product developments. Our carefully curated
            catalogue represents the breadth of our sourcing capabilities — from premium fabrics to
            finished garments ready for your label.
          </p>
          <a
            href="/product-catalog.pdf"
            className="inline-flex items-center gap-2 bg-[#384E8E] text-white px-8 py-4 rounded font-semibold hover:bg-[#2d3f72] transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download Product Catalogue
          </a>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20 bg-[#EBEBEB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-[#464646] mb-5">Product Categories</h2>
            <div className="flex justify-center mb-6">
              <div className="h-1 w-16 bg-[#EF773A] rounded" />
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {categories.map((cat) => (
              <div
                key={cat.name}
                className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md hover:border-[#B1DAEB] border border-transparent transition-all"
              >
                <div className="text-4xl mb-3">{cat.icon}</div>
                <h3 className="font-semibold text-[#384E8E] mb-1 text-sm">{cat.name}</h3>
                <p className="text-xs text-gray-500">{cat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image gallery placeholder */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#464646] mb-5">Recent Development Samples</h2>
            <div className="flex justify-center mb-6">
              <div className="h-1 w-16 bg-[#B1DAEB] rounded" />
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryNums.map((n) => (
              <div key={n} className="aspect-square rounded-lg overflow-hidden bg-gray-100 shadow-sm">
                <img
                  src={imgSrc(n)}
                  alt={`Product ${n}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-[#384E8E] text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-4">Interested in a Custom Development?</h2>
          <p className="text-[#B1DAEB] mb-8">
            Contact us to discuss your product requirements and we'll develop custom samples to your exact specifications.
          </p>
          <a
            href="/contact"
            className="bg-[#EF773A] text-white px-10 py-4 rounded font-semibold hover:bg-[#d4692d] transition-colors inline-block"
          >
            Request Development
          </a>
        </div>
      </section>
    </>
  );
}
