import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-[#EBEBEB] px-4">
      <div className="text-center max-w-lg">
        <div className="text-8xl font-extrabold text-[#384E8E] mb-2">404</div>
        <div className="h-1 w-16 bg-[#EF773A] rounded mx-auto mb-6" />
        <h1 className="text-2xl font-bold text-[#464646] mb-3">Page Not Found</h1>
        <p className="text-gray-600 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="bg-[#384E8E] text-white px-8 py-3 rounded font-semibold hover:bg-[#2d3f72] transition-colors"
          >
            Back to Home
          </Link>
          <Link
            href="/contact"
            className="border-2 border-[#384E8E] text-[#384E8E] px-8 py-3 rounded font-semibold hover:bg-[#384E8E] hover:text-white transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
