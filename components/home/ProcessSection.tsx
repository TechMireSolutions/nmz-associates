const steps = [
  {
    icon: "💡",
    title: "Concept or Theme",
    desc: "A central idea or inspiration that guides the design — from macro trends like minimalism to micro-cultural influences.",
  },
  {
    icon: "🔬",
    title: "Research & Analysis",
    desc: "Understanding market demands, competitor positioning, and consumer trends to build a strong sourcing strategy.",
  },
  {
    icon: "✏️",
    title: "Design & Sketching",
    desc: "Original designs come to life through fabric selection, color palettes, and precise specification development.",
  },
  {
    icon: "🏭",
    title: "Sourcing & Production",
    desc: "Strategic procurement of materials and coordination of manufacturing with vetted, quality-certified factories.",
  },
  {
    icon: "🚢",
    title: "Shipping & Logistics",
    desc: "Coordinating export documentation, customs clearance, and last-mile delivery across the global supply chain.",
  },
  {
    icon: "📊",
    title: "Budgeting & Financial Planning",
    desc: "Resource and cost management to ensure maximum value while maintaining uncompromising quality standards.",
  },
];

export default function ProcessSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-[#EF773A] font-semibold tracking-widest text-sm uppercase mb-2">
            How We Work
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#464646]">
            Fashion Industry Key Process
          </h2>
          <div className="flex justify-center mt-4 mb-6">
            <div className="h-1 w-16 bg-[#B1DAEB] rounded" />
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our proven six-stage process ensures every garment meets your exact specifications,
            from initial concept to final delivery at your door.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <div key={step.title} className="relative">
              {/* Step number */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#384E8E] text-white flex items-center justify-center font-bold text-lg">
                  {idx + 1}
                </div>
                <div>
                  <div className="text-2xl mb-1">{step.icon}</div>
                  <h3 className="font-semibold text-[#384E8E] mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{step.desc}</p>
                </div>
              </div>
              {/* Connector line */}
              {idx < steps.length - 1 && idx % 3 !== 2 && (
                <div className="hidden lg:block absolute top-6 left-full w-full h-px bg-[#B1DAEB] -z-10 ml-4" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
