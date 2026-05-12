export async function getGitHubProfile(username: string) {
  const response = await fetch(`https://api.github.com/users/${username}`, { next: { revalidate: 3600 } })
  if (!response.ok) {
    throw new Error('Failed to fetch GitHub profile')
  }
  return response.json()
}

export function getProjectList() {
  return [
    {
      title: '智能仪表盘',
      slug: 'smart-dashboard',
      summary: '实时交互与可视化项目。',
    },
    {
      title: '3D 个人主页',
      slug: 'interactive-space',
      summary: 'Three.js 效果与页面动画。',
    },
    {
      title: 'MDX 博客系统',
      slug: 'mdx-blog',
      summary: '笔记与项目文档的统一入口。',
    },
  ]
}
