import Image from "next/image";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  breadcrumb?: string;
  bgImage?: string;
}

export default function PageHeader({ title, subtitle, breadcrumb, bgImage }: PageHeaderProps) {
  return (
    <div className="relative overflow-hidden text-white py-20 sm:py-28">
      {/* Background image */}
      {bgImage && (
        <div className="absolute inset-0">
          <Image
            src={bgImage}
            alt=""
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
      )}

      {/* Overlay — darker when image present, plain gradient when not */}
      <div
        className={
          bgImage
            ? "absolute inset-0 bg-gradient-to-b from-[#1a2a5e]/80 via-[#384E8E]/70 to-[#1a2a5e]/85"
            : "absolute inset-0 bg-gradient-to-r from-[#384E8E] to-[#2d3f72]"
        }
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {breadcrumb && (
          <p className="text-[#B1DAEB] text-sm mb-3 uppercase tracking-widest font-medium">
            {breadcrumb}
          </p>
        )}
        <h1 className="text-3xl sm:text-5xl font-bold mb-4 drop-shadow">{title}</h1>
        <div className="flex justify-center mb-4">
          <div className="h-1 w-16 bg-[#EF773A] rounded" />
        </div>
        {subtitle && (
          <p className="text-white/80 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
