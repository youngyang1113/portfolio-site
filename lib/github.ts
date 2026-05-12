type GitHubRepoResponse = {
  stargazers_count?: number
  forks_count?: number
  html_url?: string
  description?: string
}

export async function getGitHubRepo(
  owner: string,
  repo: string
): Promise<{ stars: number; forks: number; url: string; description?: string } | null> {
  try {
    const response = await fetch(`https://api.github.com/repos/${owner}/${repo}`, {
      headers: { Accept: 'application/vnd.github+json' },
      next: { revalidate: 3600 },
    })

    if (!response.ok) return null

    const data = (await response.json()) as GitHubRepoResponse
    return {
      stars: typeof data.stargazers_count === 'number' ? data.stargazers_count : 0,
      forks: typeof data.forks_count === 'number' ? data.forks_count : 0,
      url: typeof data.html_url === 'string' ? data.html_url : `https://github.com/${owner}/${repo}`,
      description: typeof data.description === 'string' ? data.description : undefined,
    }
  } catch {
    return null
  }
}

