import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with NMZ Associates. We're ready to help with sourcing, quality control, inspection, and any other apparel or textile enquiries.",
};

const offices = [
  { country: "Spain",    flag: "🇪🇸", address: "Barcelona, Spain",   email: "spain@appareltextileservices.com" },
  { country: "Pakistan", flag: "🇵🇰", address: "Lahore, Pakistan",    email: "info@appareltextileservices.com" },
  { country: "India",    flag: "🇮🇳", address: "New Delhi, India",    email: "india@appareltextileservices.com" },
  { country: "China",    flag: "🇨🇳", address: "Shanghai, China",     email: "china@appareltextileservices.com" },
  { country: "USA",      flag: "🇺🇸", address: "New York, USA",       email: "usa@appareltextileservices.com" },
  { country: "Canada",   flag: "🇨🇦", address: "Toronto, Canada",     email: "canada@appareltextileservices.com" },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact Us"
        subtitle="We'd love to hear from you. Reach out to discuss your sourcing needs or simply get to know us better."
        bgImage="/images/6.webp"
        breadcrumb="Get in Touch"
      />

      {/* Contact form + info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">

            {/* Info */}
            <div>
              <p className="text-[#EF773A] font-semibold tracking-widest text-sm uppercase mb-2">Get in Touch</p>
              <h2 className="text-3xl font-bold text-[#464646] mb-5">We Are Here to Help</h2>
              <div className="h-1 w-16 bg-[#B1DAEB] rounded mb-6" />
              <p className="text-gray-600 leading-relaxed mb-8">
                Whether you're looking for a full-service sourcing partner or need standalone inspection
                support, our team is ready to help. A member of our team will respond within one business day.
              </p>

              <address className="not-italic space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#384E8E] flex items-center justify-center shrink-0" aria-hidden="true">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-[#464646]">Email</div>
                    <a href="mailto:info@appareltextileservices.com" className="text-[#384E8E] hover:text-[#EF773A] transition-colors">
                      info@appareltextileservices.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#384E8E] flex items-center justify-center shrink-0" aria-hidden="true">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-[#464646]">Follow Us</div>
                    <a href="https://instagram.com/nmzassociates" target="_blank" rel="noopener noreferrer" className="text-[#384E8E] hover:text-[#EF773A] transition-colors block">
                      @nmzassociates on Instagram
                    </a>
                    <a href="https://facebook.com/nmzassociates" target="_blank" rel="noopener noreferrer" className="text-[#384E8E] hover:text-[#EF773A] transition-colors block">
                      @nmzassociates on Facebook
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#384E8E] flex items-center justify-center shrink-0" aria-hidden="true">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-[#464646]">Response Time</div>
                    <div className="text-gray-600 text-sm">Within 1 business day</div>
                  </div>
                </div>
              </address>
            </div>

            {/* Form */}
            <div className="bg-[#EBEBEB] rounded-2xl p-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Global offices */}
      <section className="py-20 bg-[#EBEBEB]" aria-labelledby="offices-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[#EF773A] font-semibold tracking-widest text-sm uppercase mb-2">Our Presence</p>
            <h2 id="offices-heading" className="text-3xl font-bold text-[#464646] mb-5">Global Offices</h2>
            <div className="flex justify-center">
              <div className="h-1 w-16 bg-[#B1DAEB] rounded" />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {offices.map((o) => (
              <div key={o.country} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl" aria-hidden="true">{o.flag}</span>
                  <h3 className="font-bold text-[#384E8E] text-lg">{o.country}</h3>
                </div>
                <address className="not-italic space-y-2 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-[#EF773A] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {o.address}
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-[#EF773A] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <a href={`mailto:${o.email}`} className="hover:text-[#384E8E] transition-colors">{o.email}</a>
                  </div>
                </address>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
