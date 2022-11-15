/** @type {import('next').NextConfig} */

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    // If you use remark-gfm, you'll need to use next.config.mjs
    // as the package is ESM only
    // https://github.com/remarkjs/remark-gfm#install
    remarkPlugins: [],
    rehypePlugins: []
    // If you use `MDXProvider`, uncomment the following line.
    // providerImportSource: "@mdx-js/react",
  }
})

const nextConfig = withMDX({
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.unsplash.com', 'img.icons8.com']
  },
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx']
  // async rewrites() {
  //   return {
  //     beforeFiles: [
  //       {
  //         source: '/about',
  //         destination: '/hakkimizda'
  //       },
  //       {
  //         source: '/services',
  //         destination: '/hizmetlerimiz'
  //       },
  //       {
  //         source: '/gallery',
  //         destination: '/galeri'
  //       },
  //       {
  //         source: '/contact',
  //         destination: '/iletisim'
  //       }
  //     ],
  //     fallback: [
  //       // These rewrites are checked after both pages/public files
  //       // and dynamic routes are checked
  //       {
  //         source: '/:path*',
  //         destination: `https://maiorganizasyon.com/:path*`
  //       }
  //     ]
  //   }
  // }
})

module.exports = nextConfig
