import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
  preload: true,
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://nmzassociates.com";

export const viewport: Viewport = {
  themeColor: "#384E8E",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "NMZ Associates – One Door Solution for Apparel & Textile",
    template: "%s | NMZ Associates",
  },
  description:
    "NMZ Associates is a global apparel and textile sourcing company with 35+ years of experience offering quality control, garment sourcing, and end-to-end supply chain management across Spain, Pakistan, India, China, USA and Canada.",
  keywords: [
    "apparel sourcing",
    "textile sourcing",
    "quality control",
    "garment inspection",
    "fashion supply chain",
    "NMZ Associates",
    "Pakistan textile",
    "sustainable sourcing",
    "pre-shipment inspection",
  ],
  authors: [{ name: "NMZ Associates", url: siteUrl }],
  creator: "NMZ Associates",
  publisher: "NMZ Associates",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "NMZ Associates",
    title: "NMZ Associates – One Door Solution for Apparel & Textile",
    description:
      "Global apparel and textile sourcing company with 35+ years of experience. Quality control, garment sourcing, and supply chain management worldwide.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "NMZ Associates – Apparel & Textile Sourcing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NMZ Associates – One Door Solution for Apparel & Textile",
    description:
      "Global apparel and textile sourcing company with 35+ years of experience.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: [
      { url: "/images/nmz-logo.webp", type: "image/webp" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: { url: "/images/nmz-logo.webp", type: "image/webp" },
    shortcut: "/images/nmz-logo.webp",
  },
  category: "business",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} scroll-smooth`}>
      <body className="min-h-screen flex flex-col font-[var(--font-poppins)] antialiased">
        {/* Skip to main content – keyboard accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-[#384E8E] focus:text-white focus:px-4 focus:py-2 focus:rounded focus:font-semibold focus:shadow-lg"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="flex-1" tabIndex={-1}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
