/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: 'dist',
  basePath: "",
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
