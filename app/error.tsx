"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log to an error reporting service in production (e.g. Sentry)
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-[#EBEBEB] px-4">
      <div className="text-center max-w-lg">
        <div className="text-8xl font-extrabold text-[#EF773A] mb-2">!</div>
        <div className="h-1 w-16 bg-[#384E8E] rounded mx-auto mb-6" />
        <h1 className="text-2xl font-bold text-[#464646] mb-3">Something Went Wrong</h1>
        <p className="text-gray-600 mb-8">
          An unexpected error occurred. Please try again, or contact us if the problem persists.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={reset}
            className="bg-[#384E8E] text-white px-8 py-3 rounded font-semibold hover:bg-[#2d3f72] transition-colors"
          >
            Try Again
          </button>
          <a
            href="/"
            className="border-2 border-[#384E8E] text-[#384E8E] px-8 py-3 rounded font-semibold hover:bg-[#384E8E] hover:text-white transition-colors"
          >
            Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}
