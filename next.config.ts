import type { NextConfig } from "next";
import userConfig from './clouduser.next.config';

const webflowOverrides: NextConfig = {
  basePath: '/builder-day',
  assetPrefix: 'https://89ef38eb-ca18-4dbd-a6d5-6c4d53ce5076.wf-app-prod.cosmic.webflow.services/builder-day',
  images: {
    ...userConfig.images,
    // TODO: determine whether any of the non-custom loader options (imgix, cloudinary, akamai) work
    // and if so allow them to be used here
    loader: 'custom',
    loaderFile: userConfig.images?.loaderFile || './webflow-loader.ts',
  },
};

const nextConfig: NextConfig = {
  ...userConfig,
  ...webflowOverrides,
};

export default nextConfig;

import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
initOpenNextCloudflareForDev();
