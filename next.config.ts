import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
