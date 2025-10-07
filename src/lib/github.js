export async function getRecentPRs(username = 'ciaracade', limit = 5) {
  try {
    const response = await fetch(
      `https://api.github.com/search/issues?q=author:${username}+type:pr&sort=created&order=desc&per_page=${limit}`,
      {
        next: { revalidate: 3600 } // Revalidate every hour
      }
    );

    if (!response.ok) {
      throw new Error('Failed to fetch PRs');
    }

    const data = await response.json();

    return data.items.map(pr => ({
      title: pr.title,
      url: pr.html_url,
      repository: pr.repository_url.split('/').slice(-2).join('/'),
      state: pr.pull_request?.merged_at ? 'Merged' : pr.state === 'open' ? 'Open' : 'Closed',
      createdAt: pr.created_at
    }));
  } catch (error) {
    console.error('Error fetching PRs:', error);
    return [];
  }
}
