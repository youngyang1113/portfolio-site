import Link from 'next/link'
import Navbar from '../../components/Navbar'
import ProjectsMiniMap from '../../components/ProjectsMiniMap'
import { getGitHubRepo } from '../../lib/github'
import { getProjects } from '../../lib/projects'

function formatZhDate(date?: string) {
  if (!date) return null
  const parsed = new Date(date)
  if (Number.isNaN(parsed.valueOf())) return date
  return new Intl.DateTimeFormat('zh-CN', { year: 'numeric', month: 'long', day: 'numeric' }).format(parsed)
}

export const metadata = {
  title: '项目 | Rye Young',
  description: '开源项目与作品集展示。',
}

export default async function ProjectsPage() {
  const projects = getProjects()
  const repoDataEntries = await Promise.all(
    projects.map(async (project) => {
      if (!project.repo) return [project.id, null] as const
      return [project.id, await getGitHubRepo(project.repo.owner, project.repo.name)] as const
    })
  )
  const repoData = Object.fromEntries(repoDataEntries)
  const miniMapItems = [
    { id: 'projects-overview', label: 'Introduction' },
    ...projects.map((project) => ({ id: `project-${project.id}`, label: project.title })),
  ]

  return (
    <main className="min-h-screen text-white">
      <Navbar />
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10 lg:py-28">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-accent/60">Open Source</p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">开源项目</h1>
            <p className="mt-4 max-w-xl text-[15px] text-gray-400">维护中的核心仓库与在线演示。</p>
          </div>
          <Link href="/" className="text-sm text-gray-500 transition hover:text-white">
            ← 首页
          </Link>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-[280px,1fr]">
          <ProjectsMiniMap items={miniMapItems} />

          <div className="space-y-10">
            <div
              id="projects-overview"
              className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-8 md:p-10"
            >
              <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">Overview</h2>
              <p className="mt-4 text-[15px] leading-relaxed text-gray-400 md:text-lg">
                以开源项目为载体沉淀模板与工程实践：从交付效率、可维护性到交互体验，持续迭代可复用方案。
              </p>
            </div>

            {projects.map((project) => {
              const repo = repoData[project.id] as Awaited<ReturnType<typeof getGitHubRepo>> | null
              const created = formatZhDate(project.createdAt)

              return (
                <section
                  key={project.id}
                  id={`project-${project.id}`}
                  className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-8 md:p-10"
                >
                  <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                    <div className="min-w-0">
                      <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">{project.title}</h2>
                      <p className="mt-4 text-[15px] leading-relaxed text-gray-400 md:text-lg">{project.description}</p>
                    </div>

                    <div className="shrink-0 space-y-2 text-sm text-gray-500">
                      {created ? <p>创建于 {created}</p> : null}
                      {repo ? (
                        <p>
                          GitHub · {repo.stars} Stars{repo.forks ? ` · ${repo.forks} Forks` : ''}
                        </p>
                      ) : null}
                    </div>
                  </div>

                  <div className="mt-8 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/[0.08] bg-black/20 px-3 py-1 text-[12px] text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tech.map((tech) => (
                      <span key={tech} className="rounded-full bg-accent/10 px-3 py-1 text-[12px] text-accent/90">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-10 flex flex-wrap gap-4">
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
                      href={`/projects/${project.id}`}
                      className="inline-flex h-11 items-center rounded-full border border-white/15 px-8 text-sm text-gray-300 transition hover:border-white/25 hover:bg-white/[0.04]"
                    >
                      Learn More
                    </Link>
                  </div>
                </section>
              )
            })}
          </div>
        </div>
      </section>
    </main>
  )
}
