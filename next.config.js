const withPlugins = require('next-compose-plugins')

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

module.exports = withPlugins([], nextConfig)
