import Link from 'next/link'
import Navbar from '../../components/Navbar'
import { getBlogPosts } from '../../lib/blog'

export default function BlogPage() {
  const posts = getBlogPosts()

  return (
    <main className="min-h-screen text-white">
      <Navbar />
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10 lg:py-28">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-accent/60">Writing</p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">博客</h1>
            <p className="mt-4 max-w-xl text-[15px] text-gray-400">技术笔记与随笔（示例列表）。</p>
          </div>
          <Link href="/" className="text-sm text-gray-500 transition hover:text-white">
            ← 首页
          </Link>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 md:gap-8">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group border border-white/[0.08] bg-white/[0.03] p-8 transition hover:border-white/[0.14] hover:bg-white/[0.05] md:p-10"
            >
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[11px] font-medium uppercase tracking-[0.18em] text-gray-500">
                {post.date ? <span>{post.date}</span> : null}
                {post.tags?.length ? (
                  <span className="text-accent/70">
                    {post.tags.slice(0, 3).join(' · ')}
                    {post.tags.length > 3 ? ' · ...' : ''}
                  </span>
                ) : null}
              </div>
              <h2 className="mt-4 text-xl font-medium tracking-tight text-white group-hover:text-accent md:text-2xl">{post.title}</h2>
              {post.description ? <p className="mt-4 text-[15px] leading-relaxed text-gray-400">{post.description}</p> : null}
              <span className="mt-8 inline-flex text-sm font-medium text-accent">
                阅读
                <span className="ml-1 transition group-hover:translate-x-0.5">→</span>
              </span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
