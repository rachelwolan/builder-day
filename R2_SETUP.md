# R2 Object Storage Setup

This project is configured to serve public assets (videos, images, etc.) from Cloudflare R2 object storage when deployed to Webflow Cloud.

## Configuration Files

### `wrangler.json`
Contains R2 bucket binding configuration:
```json
{
  "r2_buckets": [
    {
      "binding": "R2",
      "bucket_name": "my-bucket",
      "bucket_id": "123456789"
    }
  ]
}
```

### `cloudflare-env.d.ts`
TypeScript definitions for R2 bucket binding:
```typescript
interface CloudflareEnv {
  R2: R2Bucket;
}
```

## Asset Serving

### API Route
Assets are served via `/api/assets/[...path]/route.ts` which:
- Fetches files from R2 using the `R2` binding
- Streams them back with appropriate headers
- Includes caching headers for performance
- Runs on edge runtime for low latency

### Usage in Components
Video files and other assets are referenced using the API route:
```tsx
<source src="/builder-day/api/assets/video-name.mp4" type="video/mp4" />
```

## Uploading Assets to R2

### Prerequisites
Create a `.env` file with your R2 credentials (see `.env.example`):
```bash
CLOUDFLARE_ACCOUNT_ID=your-account-id
R2_ACCESS_KEY_ID=your-access-key-id
R2_SECRET_ACCESS_KEY=your-secret-access-key
```

### Upload Script
Upload all files from `public/` directory to R2:
```bash
npm run upload-r2
```

The script:
- Reads all files from the `public/` directory
- Uploads them to your R2 bucket with proper content-types
- Maintains directory structure
- Skips `.gitkeep` files

### Getting R2 Credentials
1. Go to Cloudflare Dashboard
2. Navigate to R2 Object Storage
3. Create an API token with R2 read/write permissions
4. Note your Account ID, Access Key ID, and Secret Access Key

## Current Assets

The following video files are configured to be served from R2:
- `building-collaborative-builder-culture.mp4` (30.5 MB)
- `building-collaborative-builder-culture-part1.mp4` (7.2 MB)
- `building-collaborative-builder-culture-part2.mp4` (7.2 MB)
- `Thoughts on Prototyping with AI Tools.mp4` (114.2 MB)

## Deployment

When deployed to Webflow Cloud, the app will automatically:
1. Use R2 bindings from `wrangler.json`
2. Serve assets through the `/api/assets/*` route
3. Cache assets with long cache headers for optimal performance

No additional configuration needed beyond uploading the assets to R2.

## Local Development

During local development with `npm run dev`:
- The app expects R2 to be available via Cloudflare bindings
- You may need to use `wrangler dev` for full R2 functionality locally
- Alternatively, temporarily point video sources back to `/video-name.mp4` for local testing

## Notes

- R2 bindings are only available in the Cloudflare/Webflow Cloud runtime
- The upload script uses AWS S3 SDK for compatibility with R2's S3-compatible API
- All assets are served with CORS headers enabled for cross-origin requests
