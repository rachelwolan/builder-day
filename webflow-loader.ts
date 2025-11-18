import { ImageLoaderProps } from 'next/image';

export default function webflowLoader({ src, width, quality }: ImageLoaderProps) {
  // For Webflow Cloud deployment, images are served from the asset prefix
  // This loader just returns the src as-is since Webflow handles optimization
  return src;
}
