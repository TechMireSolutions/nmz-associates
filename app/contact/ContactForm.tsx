"use client";

import { useActionState } from "react";
import { submitContact, type FormState } from "@/app/actions/contact";

const initialState: FormState = { status: "idle", message: "" };

const subjects = [
  "General Enquiry",
  "Sourcing Partnership",
  "Quality Control & Inspection",
  "Standalone Inspection",
  "Showroom Visit",
  "Sustainability",
  "Other",
];

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState(submitContact, initialState);
  const f = state.fields ?? {};

  if (state.status === "success") {
    return (
      <div className="text-center py-16 bg-[#EBEBEB] rounded-2xl px-8">
        <div className="text-6xl mb-4" aria-hidden>✅</div>
        <h3 className="text-xl font-bold text-[#384E8E] mb-2">Message Sent!</h3>
        <p className="text-gray-600">{state.message}</p>
      </div>
    );
  }

  return (
    <form action={formAction} noValidate aria-label="Contact form" className="space-y-5">
      {state.status === "error" && (
        <div role="alert" className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded text-sm">
          {state.message}
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-[#464646] mb-1">
            Full Name <span aria-hidden="true" className="text-red-500">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            defaultValue={f.name}
            placeholder="Your full name"
            className="w-full px-4 py-3 rounded border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#B1DAEB] text-sm"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-[#464646] mb-1">
            Email Address <span aria-hidden="true" className="text-red-500">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            defaultValue={f.email}
            placeholder="your@email.com"
            className="w-full px-4 py-3 rounded border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#B1DAEB] text-sm"
          />
        </div>
      </div>

      <div>
        <label htmlFor="company" className="block text-sm font-semibold text-[#464646] mb-1">
          Company
        </label>
        <input
          id="company"
          name="company"
          type="text"
          autoComplete="organization"
          defaultValue={f.company}
          placeholder="Your company name"
          className="w-full px-4 py-3 rounded border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#B1DAEB] text-sm"
        />
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-semibold text-[#464646] mb-1">
          Subject <span aria-hidden="true" className="text-red-500">*</span>
        </label>
        <select
          id="subject"
          name="subject"
          required
          defaultValue={f.subject ?? ""}
          className="w-full px-4 py-3 rounded border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#B1DAEB] text-sm"
        >
          <option value="" disabled>Select a topic…</option>
          {subjects.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-[#464646] mb-1">
          Message <span aria-hidden="true" className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          defaultValue={f.message}
          placeholder="Tell us how we can help…"
          className="w-full px-4 py-3 rounded border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#B1DAEB] text-sm resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={isPending}
        aria-busy={isPending}
        className="w-full bg-[#384E8E] text-white py-4 rounded font-semibold hover:bg-[#2d3f72] disabled:opacity-60 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2"
      >
        {isPending && (
          <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
        )}
        {isPending ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
