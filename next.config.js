/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  styledComponents: true,
  images: {
    domains: ['loremflickr.com']
  }
}

module.exports = nextConfig
