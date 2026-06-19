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

        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-7 gap-4">
          {clientLogoNums.map((n) => (
            <div
              key={n}
              className="relative bg-white rounded-lg aspect-square shadow-sm hover:shadow-md transition-shadow overflow-hidden"
            >
              <Image
                src={imgSrc(n)}
                alt={`Client logo ${n}`}
                fill
                sizes="(max-width: 640px) 25vw, (max-width: 768px) 16.6vw, 14vw"
                className="object-contain p-3"
              />
            </div>
          ))}
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
