"use client";

import Image from "next/image";
import { clientLogoNums, imgSrc } from "@/lib/images";

export default function ClientLogoGrid() {
  return (
    <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-3">
      {clientLogoNums.map((n) => (
        <div
          key={n}
          className="relative bg-gray-50 border border-gray-100 rounded-lg aspect-square hover:shadow-md transition-shadow overflow-hidden"
        >
          <Image
            src={imgSrc(n)}
            alt={`Client logo ${n}`}
            fill
            sizes="(max-width: 640px) 25vw, (max-width: 768px) 16.6vw, (max-width: 1024px) 12.5vw, 10vw"
            className="object-contain p-2"
          />
        </div>
      ))}
    </div>
  );
}
