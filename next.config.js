/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true // this experimental feature is for "use server" directives
  },
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
