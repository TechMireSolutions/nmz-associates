"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { label: "Years In Business",     value: 35,  suffix: "+" },
  { label: "Countries Worldwide",   value: 14,  suffix: "+" },
  { label: "Key Offices Worldwide", value: 6,   suffix: ""  },
  { label: "Staff Worldwide",       value: 50,  suffix: "+" },
  { label: "Valued Customers",      value: 200, suffix: "+" },
];

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount]     = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !started) setStarted(true); },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    let current = 0;
    const step = target / (2000 / 16);
    const timer = setInterval(() => {
      current += step;
      if (current >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(current));
    }, 16);
    return () => clearInterval(timer);
  }, [started, target]);

  return <span ref={ref} className="tabular-nums">{count}{suffix}</span>;
}

export default function StatsSection() {
  return (
    <section className="relative py-20 overflow-hidden bg-[#060e24]">

      {/* Animated glowing orbs */}
      <div className="stats-orb-1 absolute -top-16 -left-16 w-72 h-72 rounded-full opacity-30"
           style={{ background: "radial-gradient(circle, #384E8E 0%, transparent 70%)" }} />
      <div className="stats-orb-2 absolute -bottom-20 -right-20 w-96 h-96 rounded-full opacity-25"
           style={{ background: "radial-gradient(circle, #EF773A 0%, transparent 70%)" }} />
      <div className="stats-orb-3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-10"
           style={{ background: "radial-gradient(circle, #B1DAEB 0%, transparent 70%)" }} />

      {/* Subtle grid overlay */}
      <div className="absolute inset-0 opacity-[0.04]"
           style={{
             backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
             backgroundSize: "40px 40px",
           }} />

      {/* Top border accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#EF773A] to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#384E8E] to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-[#EF773A] text-sm font-semibold tracking-[0.3em] uppercase mb-2">
            Our Impact
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Why Global Brands Trust Us
          </h2>
          <div className="flex justify-center mt-4">
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-[#B1DAEB] to-transparent" />
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center group">
              <div className="inline-block mb-3 px-4 py-3 rounded-xl bg-white/5 border border-white/10 group-hover:border-[#EF773A]/40 transition-colors duration-300">
                <div className="text-4xl sm:text-5xl font-extrabold text-white">
                  <CountUp target={stat.value} suffix={stat.suffix} />
                </div>
              </div>
              <div className="text-[#B1DAEB] text-xs sm:text-sm font-medium uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
