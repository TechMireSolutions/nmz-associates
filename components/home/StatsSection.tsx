"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { label: "Years In Business", value: 35, suffix: "+" },
  { label: "Countries Worldwide", value: 14, suffix: "+" },
  { label: "Key Offices Worldwide", value: 6, suffix: "" },
  { label: "Staff Worldwide", value: 50, suffix: "+" },
  { label: "Valued Customers", value: 200, suffix: "+" },
];

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    let start = 0;
    const duration = 2000;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [started, target]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}
      {suffix}
    </span>
  );
}

export default function StatsSection() {
  return (
    <section className="py-16 bg-[#384E8E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-[#B1DAEB] text-sm font-semibold tracking-widest uppercase mb-2">
            Our Impact
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Why Global Brands Trust Us
          </h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-white mb-2">
                <CountUp target={stat.value} suffix={stat.suffix} />
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
