import type { NextConfig } from "next";

/** Optional CDN origin for Next static chunks (no trailing slash). Only set if you host `/_next/static` on a separate domain. */
const assetPrefix =
  process.env.NEXT_PUBLIC_ASSET_PREFIX?.replace(/\/$/, "") || undefined;

const nextConfig: NextConfig = {
  ...(assetPrefix ? { assetPrefix } : {}),
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  },
  experimental: {
    staleTimes: {
      dynamic: 0,
      static: 30,
    },
    optimizePackageImports: ["react-pdf"],
  },
  expireTime: 0,
};

export default nextConfig;
