"use client";

import Image from "next/image";
import { clientLogoNums, imgSrc } from "@/lib/images";

export default function ClientLogoGrid() {
  return (
    <div className="relative w-full bg-gray-50/70 border border-gray-100 py-6 sm:py-8 rounded-2xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
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
  );
}
