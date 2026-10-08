import Image from "next/image";
import Link from "next/link";
import { clientLogoNums, imgSrc } from "@/lib/images";

export default function ClientsSection() {
  return (
    <section className="py-20 bg-[#EBEBEB]" aria-labelledby="clients-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-[#EF773A] font-semibold tracking-widest text-sm uppercase mb-2">
            Our Partners
          </p>
          <h2 id="clients-heading" className="text-3xl sm:text-4xl font-bold text-[#464646]">
            Our Clients Come From All Around The World
          </h2>
          <div className="flex justify-center mt-4 mb-6">
            <div className="h-1 w-16 bg-[#B1DAEB] rounded" />
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We are proud to partner with leading brands and retailers across Europe, North America,
            and Asia, delivering consistent quality and reliability.
          </p>
        </div>

        {/* Infinite Loop Slider - Single Consistent White Strip */}
        <div className="relative w-full bg-white py-6 sm:py-8 rounded-2xl shadow-sm border border-gray-100 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <div className="flex items-center gap-12 sm:gap-16 animate-marquee">
            {[...clientLogoNums, ...clientLogoNums].map((n, idx) => (
              <div
                key={`${n}-${idx}`}
                className="w-32 h-16 sm:w-40 sm:h-20 flex-shrink-0 relative flex items-center justify-center transition-transform duration-300 hover:scale-105"
              >
                <Image
                  src={imgSrc(n)}
                  alt={`Client logo ${n}`}
                  fill
                  sizes="(max-width: 640px) 128px, 160px"
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-xl font-bold text-[#464646] mb-3">
            OUR FACTORIES ARE COMPLIANCE WITH VARIOUS INTERNATIONAL STANDARDS
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm">
            All our manufacturing partners are certified against major international compliance
            standards including social, environmental, and quality benchmarks.
          </p>
        </div>

        <div className="text-center mt-8">
          <Link
            href="/clients"
            className="inline-block border-2 border-[#384E8E] text-[#384E8E] px-8 py-3 rounded font-semibold hover:bg-[#384E8E] hover:text-white transition-colors"
          >
            See All Clients
          </Link>
        </div>
      </div>
    </section>
  );
}
