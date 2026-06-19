interface PageHeaderProps {
  title: string;
  subtitle?: string;
  breadcrumb?: string;
}

export default function PageHeader({ title, subtitle, breadcrumb }: PageHeaderProps) {
  return (
    <div className="bg-gradient-to-r from-[#384E8E] to-[#2d3f72] text-white py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {breadcrumb && (
          <p className="text-[#B1DAEB] text-sm mb-3 uppercase tracking-widest font-medium">
            {breadcrumb}
          </p>
        )}
        <h1 className="text-3xl sm:text-5xl font-bold mb-4">{title}</h1>
        <div className="flex justify-center mb-4">
          <div className="h-1 w-16 bg-[#EF773A] rounded" />
        </div>
        {subtitle && (
          <p className="text-[#B1DAEB] max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
