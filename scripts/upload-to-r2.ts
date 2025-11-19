#!/usr/bin/env tsx
/**
 * Upload public assets to R2 bucket
 * Run with: npx tsx scripts/upload-to-r2.ts
 */

import { readdir, readFile } from 'fs/promises';
import { join } from 'path';
import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';

const BUCKET_NAME = 'my-bucket';
const PUBLIC_DIR = join(process.cwd(), 'public');

// R2 configuration - update with your account ID
const ACCOUNT_ID = process.env.CLOUDFLARE_ACCOUNT_ID || '';
const ACCESS_KEY_ID = process.env.R2_ACCESS_KEY_ID || '';
const SECRET_ACCESS_KEY = process.env.R2_SECRET_ACCESS_KEY || '';

if (!ACCOUNT_ID || !ACCESS_KEY_ID || !SECRET_ACCESS_KEY) {
  console.error('Error: Missing required environment variables:');
  console.error('  CLOUDFLARE_ACCOUNT_ID');
  console.error('  R2_ACCESS_KEY_ID');
  console.error('  R2_SECRET_ACCESS_KEY');
  process.exit(1);
}

const s3Client = new S3Client({
  region: 'auto',
  endpoint: `https://${ACCOUNT_ID}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId: ACCESS_KEY_ID,
    secretAccessKey: SECRET_ACCESS_KEY,
  },
});

const getContentType = (filename: string): string => {
  if (filename.endsWith('.mp4')) return 'video/mp4';
  if (filename.endsWith('.pdf')) return 'application/pdf';
  if (filename.endsWith('.jpg') || filename.endsWith('.jpeg')) return 'image/jpeg';
  if (filename.endsWith('.png')) return 'image/png';
  if (filename.endsWith('.gif')) return 'image/gif';
  if (filename.endsWith('.svg')) return 'image/svg+xml';
  if (filename.endsWith('.webp')) return 'image/webp';
  return 'application/octet-stream';
};

async function uploadFile(filePath: string, key: string) {
  try {
    const fileContent = await readFile(filePath);
    const contentType = getContentType(key);

    await s3Client.send(
      new PutObjectCommand({
        Bucket: BUCKET_NAME,
        Key: key,
        Body: fileContent,
        ContentType: contentType,
      })
    );

    console.log(`✓ Uploaded: ${key} (${contentType})`);
  } catch (error) {
    console.error(`✗ Failed to upload ${key}:`, error);
    throw error;
  }
}

async function uploadDirectory(dirPath: string, prefix = '') {
  const entries = await readdir(dirPath, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = join(dirPath, entry.name);
    const key = prefix ? `${prefix}/${entry.name}` : entry.name;

    if (entry.isDirectory()) {
      await uploadDirectory(fullPath, key);
    } else if (entry.isFile() && entry.name !== '.gitkeep') {
      await uploadFile(fullPath, key);
    }
  }
}

async function main() {
  console.log('Starting upload to R2...');
  console.log(`Bucket: ${BUCKET_NAME}`);
  console.log(`Source: ${PUBLIC_DIR}\n`);

  try {
    await uploadDirectory(PUBLIC_DIR);
    console.log('\n✓ All files uploaded successfully!');
  } catch (error) {
    console.error('\n✗ Upload failed:', error);
    process.exit(1);
  }
}

main();
