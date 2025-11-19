import type { NextConfig } from "next";
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";

initOpenNextCloudflareForDev();

const nextConfig: NextConfig = {
  basePath: '/builder-day',
  assetPrefix: '/builder-day',
  reactStrictMode: true,
};

export default nextConfig;
