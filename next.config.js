const withPlugins = require('next-compose-plugins')
const withMDX = require('@next/mdx')()

module.exports = {
  reactStrictMode: true,
}

const IMAGE_HOST_DOMAINS = []

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: IMAGE_HOST_DOMAINS,
  },
  async redirects() {
    return []
  },
}

module.exports = withPlugins(
  [
    withMDX({
      options: {
        providerImportSource: '@mdx-js/react',
      },
      pageExtensions: ['ts', 'tsx', 'mdx'],
    }),
  ],
  nextConfig,
)
