import { NextRequest } from 'next/server';
import { getCloudflareContext } from '@opennextjs/cloudflare';

/**
 * API route to serve assets from R2 bucket
 * Example: /api/assets/building-collaborative-builder-culture.mp4
 */
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ path: string[] }> }
) {
  try {
    const { env } = await getCloudflareContext();
    const { path } = await params;
    const key = path.join('/');

    // Get object from R2
    const object = await env.R2.get(key);

    if (!object) {
      return new Response('File not found', { status: 404 });
    }

    // Stream the file back with appropriate headers
    const headers = new Headers();
    object.writeHttpMetadata(headers);
    headers.set('etag', object.httpEtag);
    headers.set('cache-control', 'public, max-age=31536000, immutable');

    // Enable CORS if needed
    headers.set('access-control-allow-origin', '*');

    return new Response(object.body, { headers });
  } catch (error) {
    console.error('Error fetching from R2:', error);
    return new Response('Internal Server Error', { status: 500 });
  }
}

export const runtime = 'edge';
