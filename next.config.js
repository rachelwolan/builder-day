/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable React strict mode
  reactStrictMode: true,
  // Webflow Cloud configuration
  // The basePath will be set automatically by Webflow Cloud when deployed
  // For local development, leave it empty
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  // Ensure assets are served correctly on Webflow Cloud
  assetPrefix: process.env.NEXT_PUBLIC_ASSET_PREFIX || '',
  // Output configuration for Webflow Cloud
  output: 'standalone',
}

module.exports = nextConfig

