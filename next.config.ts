import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/compare-bookmakers/:region/:country",
        destination: "/bookmaker-reviews/country/:country",
        permanent: true,
      },
      {
        source: "/compare-bookmakers/:region",
        destination: "/bookmaker-reviews/region/:region",
        permanent: true,
      },
      {
        source: "/compare-bookmakers",
        destination: "/bookmaker-reviews",
        permanent: true,
      }
    ];
  },
};

export default nextConfig;