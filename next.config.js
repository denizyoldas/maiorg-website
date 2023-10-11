/** @type {import('next').NextConfig} */

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: []
  }
})

const nextConfig = withMDX({
  // reactStrictMode: true,
  // swcMinify: true,
  images: {
    domains: ['images.unsplash.com', 'img.icons8.com', 'i.pravatar.cc']
  },
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx']
})

module.exports = nextConfig
