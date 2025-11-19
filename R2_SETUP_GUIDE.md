# R2 Object Storage Setup Guide for Webflow Cloud

This guide explains how your R2 object storage is configured and how to use it in your Webflow Cloud app.

## Current Configuration

### 1. Wrangler Configuration (`wrangler.json`)
```json
{
  "name": "builder-day-showcase",
  "compatibility_date": "2025-11-19",
  "main": ".open-next/worker.js",
  "r2_buckets": [
    {
      "binding": "WEBFLOW_CLOUD_MEDIA",
      "bucket_name": "my-bucket"
    }
  ]
}
```

### 2. TypeScript Types (`cloudflare-env.d.ts`)
The types have been generated and include:
```typescript
interface CloudflareEnv {
  WEBFLOW_CLOUD_MEDIA: R2Bucket;
}
```

### 3. Next.js Configuration (`next.config.ts`)
```typescript
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";

initOpenNextCloudflareForDev();
```

This initialization enables R2 access during local development.

## Accessing R2 in Your App

### In API Routes or Server Components

```typescript
import { getCloudflareContext } from '@opennextjs/cloudflare';

export async function GET(request: NextRequest) {
  const { env } = await getCloudflareContext();

  // Access your R2 bucket
  const object = await env.WEBFLOW_CLOUD_MEDIA.get('path/to/file.jpg');

  if (!object) {
    return new Response('Not found', { status: 404 });
  }

  return new Response(object.body);
}
```

### Common R2 Operations

#### Upload a File
```typescript
const { env } = await getCloudflareContext();

await env.WEBFLOW_CLOUD_MEDIA.put('path/to/file.jpg', fileData, {
  httpMetadata: {
    contentType: 'image/jpeg',
  },
});
```

#### List Files
```typescript
const { env } = await getCloudflareContext();

const list = await env.WEBFLOW_CLOUD_MEDIA.list({
  prefix: 'images/',
  limit: 100,
});

list.objects.forEach(object => {
  console.log(object.key);
});
```

#### Delete a File
```typescript
const { env } = await getCloudflareContext();

await env.WEBFLOW_CLOUD_MEDIA.delete('path/to/file.jpg');
```

#### Check if File Exists
```typescript
const { env } = await getCloudflareContext();

const object = await env.WEBFLOW_CLOUD_MEDIA.head('path/to/file.jpg');

if (object) {
  console.log('File exists');
  console.log('Size:', object.size);
  console.log('Uploaded:', object.uploaded);
}
```

## Example: Serving Files from R2

Your app already has an example implementation at `/app/api/assets/[...path]/route.ts`:

```typescript
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ path: string[] }> }
) {
  const { env } = await getCloudflareContext();
  const { path } = await params;
  const key = path.join('/');

  const object = await env.WEBFLOW_CLOUD_MEDIA.get(key);

  if (!object) {
    return new Response('File not found', { status: 404 });
  }

  const headers = new Headers();
  object.writeHttpMetadata(headers);
  headers.set('etag', object.httpEtag);
  headers.set('cache-control', 'public, max-age=31536000, immutable');

  return new Response(object.body, { headers });
}
```

This allows you to access files via: `/builder-day/api/assets/path/to/file.jpg`

## Updating the Bucket Name

To use your actual Webflow Cloud bucket:

1. Find your bucket name in the Webflow Cloud dashboard
2. Update `wrangler.json`:
   ```json
   {
     "r2_buckets": [
       {
         "binding": "WEBFLOW_CLOUD_MEDIA",
         "bucket_name": "your-actual-bucket-name"
       }
     ]
   }
   ```

## Regenerating Types

If you modify `wrangler.json`, regenerate the TypeScript types:

```bash
npx wrangler types --env-interface CloudflareEnv cloudflare-env.d.ts
```

## Local Development

With `initOpenNextCloudflareForDev()` in your `next.config.ts`, you can:
- Test R2 operations locally
- The binding will be available during `npm run dev`
- Note: You'll need valid Cloudflare credentials for actual R2 access

## Deployment

When deploying to Webflow Cloud:

```bash
npm run opennextjs-cloudflare
npx wrangler deploy
```

The R2 bucket binding will be automatically available in production.

## Best Practices

1. **Use environment-specific buckets**: Consider different buckets for dev/staging/production
2. **Set appropriate cache headers**: Use cache-control headers for static assets
3. **Implement error handling**: Always handle cases where files don't exist
4. **Use signed URLs for private content**: For sensitive files, generate time-limited signed URLs
5. **Organize with prefixes**: Use folder-like paths (e.g., `images/`, `videos/`)

## Current State

- ✅ R2 binding configured in `wrangler.json`
- ✅ TypeScript types generated
- ✅ Next.js dev environment initialized
- ✅ Example API route created
- ⚠️ Bucket name is set to "my-bucket" - update to your actual bucket name
- ⚠️ Videos currently served from `/public` directory - can be moved to R2

## Next Steps

1. Update `bucket_name` in `wrangler.json` to your actual Webflow Cloud bucket
2. Upload your media files to R2 (videos, images, etc.)
3. Update references in your app to use the `/api/assets/` route
4. Deploy to Webflow Cloud
