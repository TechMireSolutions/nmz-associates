import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#464646] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/images/nmz-logo.webp"
                alt="NMZ Associates"
                width={50}
                height={50}
                className="object-contain"
              />
              <div>
                <div className="font-bold text-lg text-[#B1DAEB]">NMZ Associates</div>
                <div className="text-xs text-gray-400">Group of Companies</div>
              </div>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">
              One door solution for your apparel and textile businesses. Serving clients globally
              from Spain, Pakistan, India, China, USA and Canada.
            </p>
            <div className="flex gap-4 mt-5">
              <a
                href="https://facebook.com/nmzassociates"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#B1DAEB] transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
              <a
                href="https://instagram.com/nmzassociates"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#B1DAEB] transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" strokeWidth="2" />
                  <circle cx="12" cy="12" r="4" strokeWidth="2" />
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-[#B1DAEB] mb-4 uppercase text-sm tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {[
                { label: "About Us", href: "/about-us" },
                { label: "Services", href: "/services" },
                { label: "Clients", href: "/clients" },
                { label: "Ethics", href: "/ethics" },
                { label: "Inspection", href: "/inspection" },
                { label: "News", href: "/news" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-300 hover:text-[#B1DAEB] transition-colors flex items-center gap-2"
                  >
                    <span className="text-[#EF773A]">›</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-[#B1DAEB] mb-4 uppercase text-sm tracking-wider">
              Contact
            </h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 mt-0.5 text-[#EF773A] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:info@nmzassociates.com" className="hover:text-[#B1DAEB] transition-colors">
                  info@nmzassociates.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 mt-0.5 text-[#EF773A] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Spain · Pakistan · India · China · USA · Canada</span>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="inline-block mt-2 bg-[#EF773A] text-white px-5 py-2 rounded text-sm font-medium hover:bg-[#d4692d] transition-colors"
                >
                  Get In Touch
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-gray-400">
          <p>© 2025 NMZ Associates – All Rights Reserved.</p>
          <p>Design &amp; Developed by TechmireSolutions</p>
        </div>
      </div>
    </footer>
  );
}
