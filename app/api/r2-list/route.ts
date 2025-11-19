import { NextRequest } from 'next/server';
import { getCloudflareContext } from '@opennextjs/cloudflare';

/**
 * API route to list objects in R2 bucket
 */
export async function GET(request: NextRequest) {
  try {
    const { env } = await getCloudflareContext();

    // Get query parameters
    const { searchParams } = new URL(request.url);
    const prefix = searchParams.get('prefix') || '';
    const limit = parseInt(searchParams.get('limit') || '100');

    // List objects from R2
    const listed = await env.WEBFLOW_CLOUD_MEDIA.list({
      prefix,
      limit,
    });

    const objects = listed.objects.map(obj => ({
      key: obj.key,
      size: obj.size,
      uploaded: obj.uploaded,
      httpEtag: obj.httpEtag,
    }));

    return Response.json({
      success: true,
      count: objects.length,
      truncated: listed.truncated,
      objects,
    });
  } catch (error) {
    console.error('Error listing R2 objects:', error);
    return Response.json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    }, { status: 500 });
  }
}
