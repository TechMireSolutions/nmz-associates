import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import AboutSection from "@/components/home/AboutSection";
import StatsSection from "@/components/home/StatsSection";
import KeyFactors from "@/components/home/KeyFactors";
import ProcessSection from "@/components/home/ProcessSection";
import LocationsSection from "@/components/home/LocationsSection";
import ShowroomCTA from "@/components/home/ShowroomCTA";
import ClientsSection from "@/components/home/ClientsSection";
import EthicsTeaser from "@/components/home/EthicsTeaser";
import NewsSection from "@/components/home/NewsSection";

export const metadata: Metadata = {
  title: "NMZ Associates – One Door Solution for Apparel & Textile",
  alternates: { canonical: "/" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "NMZ Associates",
  url: "https://nmzassociates.com",
  logo: "https://nmzassociates.com/images/nmz-logo.webp",
  description:
    "Global apparel and textile sourcing company with 35+ years of experience. Quality control, garment sourcing, and supply chain management worldwide.",
  email: "info@appareltextileservices.com",
  sameAs: [
    "https://www.instagram.com/nmzassociates",
    "https://www.facebook.com/nmzassociates",
  ],
  areaServed: ["Spain", "Pakistan", "India", "China", "USA", "Canada"],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <AboutSection />
      <StatsSection />
      <KeyFactors />
      <ProcessSection />
      <LocationsSection />
      <ShowroomCTA />
      <ClientsSection />
      <EthicsTeaser />
      <NewsSection />
    </>
  );
}
