"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const bgImages = [
  { src: "/images/8.webp",               alt: "Garments on rack" },
  { src: "/images/4.webp",               alt: "Denim production" },
  { src: "/images/6.webp",               alt: "Global shipping" },
  { src: "/images/2.webp",               alt: "Garment manufacturing" },
  { src: "/images/mt-sample-background.jpg", alt: "Textile samples" },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % bgImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">

      {/* Background images */}
      {bgImages.map((img, i) => (
        <div
          key={img.src}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{ opacity: i === current ? 1 : 0 }}
        >
          <Image
            src={img.src}
            alt={img.alt}
            fill
            className="object-cover"
            priority={i === 0}
            sizes="100vw"
          />
        </div>
      ))}

      {/* Dark navy overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a2a5e]/85 via-[#384E8E]/75 to-[#1a2a5e]/90" />

      {/* Decorative side accents */}
      <div className="absolute left-0 top-0 h-full w-1 bg-[#EF773A]" />
      <div className="absolute right-0 top-0 h-full w-1 bg-[#EF773A]" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">

        {/* Brand name */}
        <div className="mb-6">
          <h1 className="text-6xl sm:text-8xl lg:text-9xl font-extrabold tracking-[0.3em] text-white uppercase drop-shadow-lg mb-3">
            N M Z
          </h1>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[0.2em] text-[#B1DAEB] uppercase">
            ASSOCIATES
          </h2>
          <p className="text-sm sm:text-base text-white/60 tracking-[0.4em] mt-2 uppercase">
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
        <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-white max-w-3xl mx-auto leading-snug">
          One Door Solution for your{" "}
          <span className="text-[#B1DAEB]">Apparel and Textile</span> Businesses
        </h3>

        <p className="mt-5 text-white/70 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
          Connecting global fashion brands with quality sourcing, expert quality control,
          and end-to-end supply chain management.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
          <Link
            href="/services"
            className="bg-[#384E8E] text-white px-10 py-4 rounded font-semibold hover:bg-[#2d3f72] transition-colors text-base shadow-xl border border-white/20"
          >
            Our Services
          </Link>
          <Link
            href="/contact"
            className="bg-[#EF773A] text-white px-10 py-4 rounded font-semibold hover:bg-[#d4692d] transition-colors text-base shadow-xl"
          >
            Get In Touch
          </Link>
        </div>

        {/* Country chips */}
        <div className="mt-12 flex flex-wrap justify-center gap-3 text-sm">
          {[
            { flag: "🇪🇸", label: "Spain" },
            { flag: "🇵🇰", label: "Pakistan" },
            { flag: "🇮🇳", label: "India" },
            { flag: "🇨🇳", label: "China" },
            { flag: "🇺🇸", label: "USA" },
            { flag: "🇨🇦", label: "Canada" },
          ].map(({ flag, label }) => (
            <span
              key={label}
              className="bg-white/10 text-white border border-white/20 backdrop-blur px-4 py-1.5 rounded-full flex items-center gap-1.5"
            >
              {flag} {label}
            </span>
          ))}
        </div>

        {/* Slide indicators */}
        <div className="mt-10 flex justify-center gap-2" aria-hidden="true">
          {bgImages.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === current ? "w-8 bg-[#EF773A]" : "w-2 bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
