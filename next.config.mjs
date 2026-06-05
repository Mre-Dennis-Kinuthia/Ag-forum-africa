/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      { source: "/events", destination: "/forums", permanent: true },
      { source: "/events/:id", destination: "/forums/:id", permanent: true },
    ]
  },
}

export default nextConfig
