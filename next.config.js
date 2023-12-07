const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    providerImportSource: '@mdx-js/react',
  },
})

const IMAGE_HOST_DOMAINS = [`res.cloudinary.com`]

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  eslint: {ignoreDuringBuilds: true},
  experimental: {scrollRestoration: true, mdxRs: true},
  productionBrowserSourceMaps: true,
  reactStrictMode: true,
  images: {
    remotePatterns: IMAGE_HOST_DOMAINS.map((domain) => ({
      protocol: 'https',
      hostname: domain,
    })),
  },
  async redirects() {
    return []
  },
}

const configWithPlugins = withMDX(nextConfig)

module.exports = configWithPlugins
