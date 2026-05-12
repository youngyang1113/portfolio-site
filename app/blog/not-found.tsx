import Link from 'next/link'
import Navbar from '../../components/Navbar'

export default function BlogNotFound() {
  return (
    <main className="min-h-screen text-white">
      <Navbar />
      <section className="mx-auto max-w-3xl px-6 py-20 lg:px-10 lg:py-28">
        <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-accent/60">Blog</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">文章不存在</h1>
        <p className="mt-8 text-[15px] leading-relaxed text-gray-400 md:text-lg">你访问的文章链接可能已被删除或尚未发布。</p>
        <div className="mt-14 flex flex-wrap gap-6 text-sm">
          <Link href="/blog" className="text-gray-500 transition hover:text-white">
            ← 返回博客列表
          </Link>
          <Link href="/" className="text-gray-500 transition hover:text-white">
            首页
          </Link>
        </div>
      </section>
    </main>
  )
}
