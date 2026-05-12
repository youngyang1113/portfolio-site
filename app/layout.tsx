import type { Metadata } from 'next'
import '../styles/globals.css'
import DreamVignette from '../components/DreamVignette'

export const metadata: Metadata = {
  title: 'Rye Young | 前端开发与开源实践',
  description:
    'Rye Young — 专注于前端开发与开源项目实践，Official Live Page、Easy Lab 作者。简洁、高效、易用的产品级前端方案。',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body className="relative">
        <DreamVignette />
        <div className="relative z-10 min-h-screen">{children}</div>
      </body>
    </html>
  )
}
