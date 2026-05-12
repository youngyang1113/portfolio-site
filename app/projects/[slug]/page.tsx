import Link from 'next/link'
import Navbar from '../../../components/Navbar'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { getGitHubRepo } from '../../../lib/github'
import { getProjectById, getProjectIds } from '../../../lib/projects'

interface ProjectPageProps {
  params: { slug: string }
}

export function generateStaticParams() {
  return getProjectIds().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const project = getProjectById(params.slug)
  if (!project) {
    return { title: '项目不存在' }
  }

  return {
    title: `${project.title} | 项目`,
    description: project.description,
  }
}

function formatZhDate(date?: string) {
  if (!date) return null
  const parsed = new Date(date)
  if (Number.isNaN(parsed.valueOf())) return date
  return new Intl.DateTimeFormat('zh-CN', { year: 'numeric', month: 'long', day: 'numeric' }).format(parsed)
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const project = getProjectById(params.slug)
  if (!project) {
    notFound()
  }

  const repo = project.repo ? await getGitHubRepo(project.repo.owner, project.repo.name) : null
  const created = formatZhDate(project.createdAt)

  return (
    <main className="min-h-screen text-white">
      <Navbar />
      <article className="mx-auto max-w-3xl px-6 py-20 lg:px-10 lg:py-28">
        <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-accent/60">Project</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">{project.title}</h1>
        <p className="mt-8 text-[15px] leading-relaxed text-gray-400 md:text-lg">{project.description}</p>

        <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-500">
          {created ? <span>创建于 {created}</span> : null}
          {repo ? (
            <span>
              GitHub · {repo.stars} Stars{repo.forks ? ` · ${repo.forks} Forks` : ''}
            </span>
          ) : null}
        </div>

        <div className="mt-10 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="rounded-full border border-white/[0.08] bg-black/20 px-3 py-1 text-[12px] text-gray-300">
              {tag}
            </span>
          ))}
          {project.tech.map((tech) => (
            <span key={tech} className="rounded-full bg-accent/10 px-3 py-1 text-[12px] text-accent/90">
              {tech}
            </span>
          ))}
        </div>

        {project.highlights?.length ? (
          <div className="mt-12 rounded-2xl border border-white/[0.08] bg-black/20 p-6">
            <h2 className="text-lg font-medium text-white">Highlights</h2>
            <ul className="mt-6 space-y-3 border-l border-white/[0.12] pl-6">
              {project.highlights.map((feature) => (
                <li key={feature} className="text-[15px] text-gray-300">
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        <div className="mt-14 flex flex-wrap gap-4">
          {project.links.map((link) => (
            <a
              key={`${project.id}-${link.type}`}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center rounded-full bg-white px-8 text-sm font-medium text-black transition hover:bg-white/90"
            >
              {link.text}
            </a>
          ))}
          <Link
            href="/projects"
            className="inline-flex h-11 items-center rounded-full border border-white/15 px-8 text-sm text-gray-300 transition hover:border-white/25 hover:bg-white/[0.04]"
          >
            全部项目
          </Link>
          <Link href="/" className="inline-flex h-11 items-center text-sm text-gray-500 transition hover:text-white">
            首页
          </Link>
        </div>
      </article>
    </main>
  )
}
