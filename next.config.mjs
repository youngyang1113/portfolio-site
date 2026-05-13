const repoBasePath = '/personal-profile'

const nextConfig = {
  output: 'export',
  basePath: repoBasePath,
  assetPrefix: repoBasePath,
  trailingSlash: true,
  reactStrictMode: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com'
      }
    ]
  }
}

export default nextConfig
