const factors = [
  {
    num: "01",
    title: "Fashion Trends & Consumer Preferences",
    desc: "Deep understanding of global fashion trends and what consumers want in each target market.",
  },
  {
    num: "02",
    title: "Production Processes & Textile Technology",
    desc: "In-depth knowledge of manufacturing processes and the latest textile innovations.",
  },
  {
    num: "03",
    title: "Supply Chain Management & Coordination",
    desc: "End-to-end coordination from raw material sourcing to final product delivery.",
  },
  {
    num: "04",
    title: "Networking & Communication Skills",
    desc: "Strong relationships with manufacturers, suppliers, and logistics partners across the globe.",
  },
  {
    num: "05",
    title: "Creative Problem Solving",
    desc: "Proactive decision-making to resolve challenges before they impact your business.",
  },
  {
    num: "06",
    title: "Client & Supplier Relationship Building",
    desc: "Long-term partnerships built on trust, transparency, and mutual success.",
  },
  {
    num: "07",
    title: "Branding & Marketing Strategy Knowledge",
    desc: "Understanding how sourcing decisions align with and strengthen brand identity.",
  },
  {
    num: "08",
    title: "Financial Management & Budgeting",
    desc: "Optimizing costs without compromising on quality or ethical standards.",
  },
];

export default function KeyFactors() {
  return (
    <section className="py-20 bg-[#EBEBEB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-[#EF773A] font-semibold tracking-widest text-sm uppercase mb-2">
            Our Expertise
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#464646]">
            Eight Key Competencies for Global Fashion
          </h2>
          <div className="flex justify-center mt-4 mb-6">
            <div className="h-1 w-16 bg-[#EF773A] rounded" />
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our expertise across eight critical domains enables us to work seamlessly with
            global fashion companies of all sizes and categories.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {factors.map((f) => (
            <div
              key={f.num}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 border-t-4 border-[#B1DAEB]"
            >
              <div className="text-4xl font-extrabold text-[#B1DAEB] mb-3">{f.num}</div>
              <h3 className="font-semibold text-[#384E8E] mb-2 leading-snug">{f.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
