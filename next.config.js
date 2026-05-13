/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',       // 必须加！静态导出
  trailingSlash: true,    // 必须加！GitHub Pages 路径兼容
  images: {
    unoptimized: true,   // 必须加！GitHub 不支持图片优化
  },
}

module.exports = nextConfig