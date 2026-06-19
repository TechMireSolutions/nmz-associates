"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

type NavChild = { label: string; href: string };
type NavLink  = { label: string; href: string; children?: NavChild[] };

const navLinks: NavLink[] = [
  { label: "Home",       href: "/" },
  { label: "About Us",   href: "/about-us" },
  { label: "Services",   href: "/services" },
  { label: "ShowRoom",   href: "/showroom" },
  { label: "Clients",    href: "/clients" },
  { label: "Ethics",     href: "/ethics" },
  { label: "News",       href: "/news" },
  {
    label: "Inspection",
    href: "/inspection",
    children: [
      { label: "Inspection Services",   href: "/inspection" },
      { label: "Standalone Inspection", href: "/standalone-inspection" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen]   = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close mobile menu on navigation
  useEffect(() => {
    setMobileOpen(false);
    setDropdownOpen(false);
  }, [pathname]);

  // Close dropdown on outside click
  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  // Close dropdown on Escape
  const handleDropdownKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === "Escape") setDropdownOpen(false);
  }, []);

  function isActive(href: string) {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  }

  return (
    <header className="bg-white shadow-md sticky top-0 z-50" role="banner">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group" aria-label="NMZ Associates – Home">
            <Image
              src="/images/nmz-logo.webp"
              alt="NMZ Associates Logo"
              width={60}
              height={60}
              className="object-contain"
              priority
            />
            <div className="hidden sm:block">
              <div className="font-bold text-lg leading-tight text-[#384E8E] group-hover:text-[#2d3f72] transition-colors">
                NMZ Associates
              </div>
              <div className="text-xs text-gray-500">Group of Companies</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav aria-label="Main navigation" className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.children ? (
                <div
                  key={link.label}
                  className="relative"
                  ref={dropdownRef}
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                  onKeyDown={handleDropdownKeyDown}
                >
                  <button
                    className={`px-3 py-2 text-sm font-medium transition-colors flex items-center gap-1 rounded ${
                      isActive(link.href)
                        ? "text-[#384E8E] font-semibold"
                        : "text-gray-700 hover:text-[#384E8E]"
                    }`}
                    aria-haspopup="menu"
                    aria-expanded={dropdownOpen}
                    onClick={() => setDropdownOpen((o) => !o)}
                  >
                    {link.label}
                    <svg
                      className={`w-3 h-3 transition-transform ${dropdownOpen ? "rotate-180" : ""}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {dropdownOpen && (
                    <div
                      role="menu"
                      className="absolute top-full left-0 bg-white shadow-lg border border-gray-100 rounded-md min-w-[200px] py-1 z-50"
                    >
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          role="menuitem"
                          className={`block px-4 py-2 text-sm transition-colors ${
                            pathname === child.href
                              ? "bg-[#B1DAEB] text-[#384E8E] font-semibold"
                              : "text-gray-700 hover:bg-[#B1DAEB] hover:text-[#384E8E]"
                          }`}
                          aria-current={pathname === child.href ? "page" : undefined}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={isActive(link.href) ? "page" : undefined}
                  className={`px-3 py-2 text-sm font-medium transition-colors whitespace-nowrap rounded relative ${
                    isActive(link.href)
                      ? "text-[#384E8E] font-semibold after:absolute after:bottom-0 after:left-2 after:right-2 after:h-0.5 after:bg-[#EF773A] after:rounded"
                      : "text-gray-700 hover:text-[#384E8E]"
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          id="mobile-menu"
          className={`lg:hidden border-t border-gray-100 overflow-hidden transition-all duration-200 ${
            mobileOpen ? "max-h-screen py-2 pb-4" : "max-h-0"
          }`}
          aria-hidden={!mobileOpen}
        >
          <nav aria-label="Mobile navigation">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.label}>
                  <div className="px-4 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                    {link.label}
                  </div>
                  {link.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      aria-current={pathname === child.href ? "page" : undefined}
                      className={`block px-8 py-2 text-sm transition-colors ${
                        pathname === child.href
                          ? "text-[#384E8E] font-semibold bg-[#B1DAEB]/20"
                          : "text-gray-700 hover:text-[#384E8E] hover:bg-[#B1DAEB]/10"
                      }`}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={isActive(link.href) ? "page" : undefined}
                  className={`block px-4 py-2 text-sm transition-colors ${
                    isActive(link.href)
                      ? "text-[#384E8E] font-semibold bg-[#B1DAEB]/20"
                      : "text-gray-700 hover:text-[#384E8E] hover:bg-[#B1DAEB]/10"
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}
