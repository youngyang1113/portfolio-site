import Link from 'next/link'
import Navbar from '../../../components/Navbar'
import { getBlogPost, getBlogSlugs } from '../../../lib/blog'
import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import type { Metadata } from 'next'
import type { AnchorHTMLAttributes, HTMLAttributes } from 'react'

interface BlogPageProps {
  params: { slug: string }
}

export function generateStaticParams() {
  return getBlogSlugs().map((slug) => ({ slug }))
}

export function generateMetadata({ params }: BlogPageProps): Metadata {
  const post = getBlogPost(params.slug)
  if (!post) {
    return { title: '文章不存在' }
  }

  return {
    title: post.meta.title,
    description: post.meta.description,
  }
}

const mdxComponents = {
  h2: (props: HTMLAttributes<HTMLHeadingElement>) => (
    <h2 {...props} className="mt-12 text-2xl font-semibold tracking-tight text-white md:text-3xl" />
  ),
  h3: (props: HTMLAttributes<HTMLHeadingElement>) => (
    <h3 {...props} className="mt-10 text-xl font-semibold tracking-tight text-white md:text-2xl" />
  ),
  p: (props: HTMLAttributes<HTMLParagraphElement>) => (
    <p {...props} className="mt-6 text-[15px] leading-relaxed text-gray-300 md:text-lg" />
  ),
  a: (props: AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a
      {...props}
      className="text-accent underline underline-offset-4 transition hover:text-glow"
      target={props.target ?? '_blank'}
      rel={props.rel ?? 'noreferrer'}
    />
  ),
  ul: (props: HTMLAttributes<HTMLUListElement>) => <ul {...props} className="mt-6 list-disc space-y-3 pl-6 text-gray-300" />,
  ol: (props: HTMLAttributes<HTMLOListElement>) => <ol {...props} className="mt-6 list-decimal space-y-3 pl-6 text-gray-300" />,
  li: (props: HTMLAttributes<HTMLLIElement>) => <li {...props} className="text-[15px] leading-relaxed md:text-lg" />,
  pre: (props: HTMLAttributes<HTMLPreElement>) => (
    <pre
      {...props}
      className="mt-6 overflow-x-auto rounded-2xl border border-white/[0.08] bg-black/40 p-5 text-[13px] leading-relaxed text-gray-200"
    />
  ),
  code: (props: HTMLAttributes<HTMLElement>) => (
    <code {...props} className="rounded-md bg-white/[0.06] px-2 py-0.5 text-[13px] text-gray-100" />
  ),
}

export default function BlogPostPage({ params }: BlogPageProps) {
  const post = getBlogPost(params.slug)
  if (!post) {
    notFound()
  }

  return (
    <main className="min-h-screen text-white">
      <Navbar />
      <article className="mx-auto max-w-3xl px-6 py-20 lg:px-10 lg:py-28">
        <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-accent/60">Blog</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">{post.meta.title}</h1>

        <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-[12px] text-gray-500">
          {post.meta.date ? <span>{post.meta.date}</span> : null}
          {post.meta.tags?.length ? (
            <span className="text-accent/70">{post.meta.tags.join(' · ')}</span>
          ) : null}
        </div>

        {post.meta.description ? <p className="mt-8 text-[15px] leading-relaxed text-gray-400 md:text-lg">{post.meta.description}</p> : null}

        <div className="mt-10 border-t border-white/[0.06] pt-10">
          <MDXRemote source={post.content} components={mdxComponents} />
        </div>

        <div className="mt-14 flex flex-wrap gap-6 text-sm">
          <Link href="/blog" className="text-gray-500 transition hover:text-white">
            ← 博客列表
          </Link>
          <Link href="/" className="text-gray-500 transition hover:text-white">
            首页
          </Link>
        </div>
      </article>
    </main>
  )
}
