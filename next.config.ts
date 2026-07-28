import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/gift-shop-landing-page",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
