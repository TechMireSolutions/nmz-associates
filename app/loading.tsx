export default function Loading() {
  return (
    <div className="min-h-[50vh] flex items-center justify-center" aria-label="Loading page content">
      <div className="flex flex-col items-center gap-4">
        {/* Branded spinner */}
        <div className="relative w-14 h-14">
          <div className="absolute inset-0 rounded-full border-4 border-[#EBEBEB]" />
          <div className="absolute inset-0 rounded-full border-4 border-t-[#384E8E] border-r-transparent border-b-transparent border-l-transparent animate-spin" />
        </div>
        <span className="text-sm font-medium text-gray-500 tracking-wider uppercase">
          Loading…
        </span>
      </div>
    </div>
  );
}
