import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'standalone',
  images: { formats: ['image/avif', 'image/webp'] },
  async redirects() {
    return [
      { source: '/services', destination: '/hizmetler', permanent: true },
      { source: '/gallery', destination: '/galeri', permanent: true }
    ]
  }
}

export default nextConfig
