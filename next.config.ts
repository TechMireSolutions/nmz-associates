import type { NextConfig } from "next";

const securityHeaders = [
  // Stop browsers from guessing MIME types
  { key: "X-Content-Type-Options", value: "nosniff" },
  // Prevent clickjacking
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  // Enable XSS filter in older browsers
  { key: "X-XSS-Protection", value: "1; mode=block" },
  // Control referrer info sent with requests
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  // Restrict browser features
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
  // Force HTTPS for 2 years (only effective in production over HTTPS)
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  // Enable DNS prefetching
  { key: "X-DNS-Prefetch-Control", value: "on" },
];

const nextConfig: NextConfig = {
  output: "export",
  // Remove the X-Powered-By header
  poweredByHeader: false,
  // Enable gzip/brotli compression
  compress: true,
  // Strict mode for React 19
  reactStrictMode: true,
  images: {
    // Prefer AVIF then WebP for automatic format negotiation
    formats: ["image/avif", "image/webp"],
    // Cache optimised images for 1 year
    minimumCacheTTL: 31536000,
    // Responsive breakpoints
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
      // Long-lived cache for static assets
      {
        source: "/images/(.*)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
    ];
  },
  // Redirect trailing slashes for canonical URLs
  trailingSlash: false,
};

export default nextConfig;
