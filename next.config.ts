import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
