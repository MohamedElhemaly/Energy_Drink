/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: false,
  },
  swcMinify: true,
}
module.exports = {
  eslint: {
    ignoreDuringBuilds: true,
  },
}
module.exports = nextConfig
