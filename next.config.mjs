import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Pin the tracing root to this project. Without it Next.js walks up the
  // directory tree, finds unrelated lockfiles (e.g. ~/yarn.lock) and warns
  // that it guessed the wrong workspace root.
  outputFileTracingRoot: projectRoot,
};

export default nextConfig;
