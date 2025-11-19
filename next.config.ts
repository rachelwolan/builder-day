import type { NextConfig } from "next";
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";

initOpenNextCloudflareForDev();

const nextConfig: NextConfig = {
  basePath: '/builder-day',
  assetPrefix: '/builder-day',
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/builder-day',
        permanent: true,
        basePath: false,
      },
    ]
  },
};

export default nextConfig;
