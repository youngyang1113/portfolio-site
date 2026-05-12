export type ProjectLinkType = 'demo' | 'code' | 'docs' | 'download'

export type ProjectLink = {
  type: ProjectLinkType
  url: string
  text: string
}

export type ProjectRepo = {
  owner: string
  name: string
}

export type Project = {
  id: string
  title: string
  description: string
  tags: string[]
  tech: string[]
  createdAt?: string
  links: ProjectLink[]
  repo?: ProjectRepo
  highlights?: string[]
}

const PROJECTS: Project[] = [
  {
    id: 'official-live-page',
    title: 'Official Live Page',
    description: '轻量化官网 / 直播页模板：响应式、模块化、易定制，适配多终端。',
    tags: ['Web', 'Template', 'Landing'],
    tech: ['HTML', 'CSS', 'JavaScript'],
    createdAt: '2024-01-01',
    repo: { owner: 'youngyang1113', name: 'official-live-page' },
    links: [
      { type: 'demo', url: 'https://youngyang1113.github.io/official-live-page/', text: 'Live Demo' },
      { type: 'code', url: 'https://github.com/youngyang1113/official-live-page', text: 'GitHub' },
    ],
    highlights: ['响应式布局', '模块化结构', '易于定制', '多终端适配'],
  },
  {
    id: 'easy-lab',
    title: 'Easy Lab',
    description: '前端工程化与工具链优化实验：组件、工具函数与最佳实践沉淀。',
    tags: ['Tooling', 'Engineering', 'Web'],
    tech: ['TypeScript', 'Node.js'],
    createdAt: '2025-01-01',
    repo: { owner: 'youngyang1113', name: 'easy-lab' },
    links: [{ type: 'code', url: 'https://github.com/youngyang1113/easy-lab', text: 'GitHub' }],
    highlights: ['工程化沉淀', '通用组件与工具', '可复用实践', '降低上手成本'],
  },
  {
    id: 'folio-space',
    title: 'FolioSpace',
    description: '3D 项目展示工具：基于 impress.js 的平滑 3D 过渡动画，帮助创建沉浸式在线作品集。',
    tags: ['Web', '3D', 'Portfolio', 'Animation'],
    tech: ['React', 'TypeScript', 'Framer Motion', 'GSAP', 'Rsbuild'],
    createdAt: '2024-06-01',
    links: [
      { type: 'demo', url: '/folio-space', text: '本地演示' },
    ],
    highlights: ['3D 演示效果', '智能导航', '响应式设计', 'GitHub 集成'],
  },
]

export function getProjects() {
  return PROJECTS
}

export function getProjectById(id: string) {
  return PROJECTS.find((project) => project.id === id) ?? null
}

export function getProjectIds() {
  return PROJECTS.map((project) => project.id)
}
