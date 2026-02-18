import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i1.sndcdn.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "i2.sndcdn.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "i.sndcdn.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
