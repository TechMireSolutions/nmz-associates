"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex items-center justify-center bg-gray-50 px-4" style={{ fontFamily: "system-ui, sans-serif" }}>
        <div className="text-center max-w-lg">
          <div className="text-6xl font-extrabold text-red-500 mb-4">!</div>
          <h1 className="text-2xl font-bold text-gray-800 mb-3">Critical Error</h1>
          <p className="text-gray-600 mb-8">
            A critical error occurred. Please refresh the page or contact us at{" "}
            <a href="mailto:info@appareltextileservices.com" className="text-blue-600 underline">
              info@appareltextileservices.com
            </a>
          </p>
          <button
            onClick={reset}
            style={{ background: "#384E8E", color: "#fff", padding: "12px 32px", borderRadius: "4px", fontWeight: 600, border: "none", cursor: "pointer" }}
          >
            Try Again
          </button>
        </div>
      </body>
    </html>
  );
}
