const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  env: {
    API_ENDPOINT: process.env.NEXT_PUBLIC_API_ENDPOINT,
  },
}

module.exports = nextConfig
