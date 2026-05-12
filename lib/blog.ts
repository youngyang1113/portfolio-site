import fs from 'node:fs'
import path from 'node:path'

export type BlogPostMeta = {
  slug: string
  title: string
  date?: string
  description?: string
  tags?: string[]
}

export type BlogPost = {
  meta: BlogPostMeta
  content: string
}

const BLOG_DIR = path.join(process.cwd(), 'content', 'blog')

function normalizeSlug(fileName: string) {
  return fileName.replace(/\.(md|mdx)$/, '')
}

function parseFrontmatter(raw: string): { meta: Record<string, unknown>; content: string } {
  if (!raw.startsWith('---')) {
    return { meta: {}, content: raw }
  }

  const endIndex = raw.indexOf('\n---', 3)
  if (endIndex === -1) {
    return { meta: {}, content: raw }
  }

  const frontmatterBlock = raw.slice(3, endIndex).trim()
  const content = raw.slice(endIndex + '\n---'.length).replace(/^\s+/, '')

  const meta: Record<string, unknown> = {}
  for (const line of frontmatterBlock.split('\n')) {
    const trimmed = line.trim()
    if (!trimmed) continue
    const separatorIndex = trimmed.indexOf(':')
    if (separatorIndex === -1) continue
    const key = trimmed.slice(0, separatorIndex).trim()
    const value = trimmed.slice(separatorIndex + 1).trim()

    if (key === 'tags') {
      meta[key] = value
        .split(',')
        .map((item) => item.trim())
        .filter(Boolean)
      continue
    }

    meta[key] = value
  }

  return { meta, content }
}

function getBlogFilePath(slug: string) {
  const mdxPath = path.join(BLOG_DIR, `${slug}.mdx`)
  if (fs.existsSync(mdxPath)) return mdxPath
  const mdPath = path.join(BLOG_DIR, `${slug}.md`)
  if (fs.existsSync(mdPath)) return mdPath
  return null
}

export function getBlogPosts(): BlogPostMeta[] {
  if (!fs.existsSync(BLOG_DIR)) {
    return []
  }

  const files = fs.readdirSync(BLOG_DIR).filter((fileName) => /\.(md|mdx)$/.test(fileName))
  const posts = files.map((fileName) => {
    const slug = normalizeSlug(fileName)
    const raw = fs.readFileSync(path.join(BLOG_DIR, fileName), 'utf8')
    const { meta } = parseFrontmatter(raw)
    const title = typeof meta.title === 'string' && meta.title.trim() ? meta.title : slug.replace(/-/g, ' ')

    const postMeta: BlogPostMeta = {
      slug,
      title,
      date: typeof meta.date === 'string' ? meta.date : undefined,
      description: typeof meta.description === 'string' ? meta.description : undefined,
      tags: Array.isArray(meta.tags) ? (meta.tags as string[]) : undefined,
    }

    return postMeta
  })

  return posts.sort((a, b) => {
    const aDate = a.date ? Date.parse(a.date) : 0
    const bDate = b.date ? Date.parse(b.date) : 0
    if (aDate !== bDate) return bDate - aDate
    return a.title.localeCompare(b.title)
  })
}

export function getBlogPost(slug: string): BlogPost | null {
  const filePath = getBlogFilePath(slug)
  if (!filePath) return null

  const raw = fs.readFileSync(filePath, 'utf8')
  const { meta, content } = parseFrontmatter(raw)
  const title = typeof meta.title === 'string' && meta.title.trim() ? meta.title : slug.replace(/-/g, ' ')

  return {
    meta: {
      slug,
      title,
      date: typeof meta.date === 'string' ? meta.date : undefined,
      description: typeof meta.description === 'string' ? meta.description : undefined,
      tags: Array.isArray(meta.tags) ? (meta.tags as string[]) : undefined,
    },
    content,
  }
}

export function getBlogSlugs() {
  return getBlogPosts().map((post) => post.slug)
}
