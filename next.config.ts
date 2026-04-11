import type { NextConfig } from "next";

/** Optional CDN origin for Next static chunks (no trailing slash). Only set if you host `/_next/static` on a separate domain. */
const assetPrefix =
  process.env.NEXT_PUBLIC_ASSET_PREFIX?.replace(/\/$/, "") || undefined;

const nextConfig: NextConfig = {
  ...(assetPrefix ? { assetPrefix } : {}),
  compiler: {
    removeConsole:
      process.env.NODE_ENV === "production"
        ? { exclude: ["error", "warn"] }
        : false,
  },
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  },
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    minimumCacheTTL: 31536000,
    // Next.js 16: only listed qualities are allowed on <Image quality={…} />
    qualities: [72, 75],
  },
  async headers() {
    return [
      {
        source: "/_next/static/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/images/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/pdfs/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/:all*(svg|jpg|jpeg|png|webp|avif|woff2|woff|ttf)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
  experimental: {
    staleTimes: {
      dynamic: 0,
      static: 30,
    },
    optimizeCss: true,
  },
  expireTime: 0,
};

export default nextConfig;
