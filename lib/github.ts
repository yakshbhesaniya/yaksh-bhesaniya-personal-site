import { Octokit } from "@octokit/rest";

export interface GitHubRepo {
    name: string;
    description: string | null;
    url: string;
    homepage: string | null;
    language: string | null;
    stars: number;
    forks: number;
    topics: string[];
    updatedAt: string;
}

const octokit = new Octokit({
    auth: process.env.GITHUB_TOKEN, // Optional, for higher rate limits
});

export async function getGitHubRepos(username: string = "yakshbhesaniya"): Promise<GitHubRepo[]> {
    try {
        const { data } = await octokit.repos.listForUser({
            username,
            sort: "updated",
            per_page: 100,
        });

        const repos: GitHubRepo[] = data.map((repo): GitHubRepo => ({
            name: repo.name,
            description: repo.description ?? null,
            url: repo.html_url,
            homepage: repo.homepage ?? null,
            language: repo.language ?? null,
            stars: repo.stargazers_count ?? 0,
            forks: repo.forks_count ?? 0,
            topics: (repo.topics as string[] | undefined) ?? [],
            updatedAt: repo.updated_at ?? new Date().toISOString(),
        }));

        return repos;
    } catch (error) {
        console.error("Error fetching GitHub repos:", error);
        return [];
    }
}

export async function getPinnedRepos(username: string = "yakshbhesaniya"): Promise<GitHubRepo[]> {
    // Since GitHub API doesn't directly support pinned repos without GraphQL,
    // we'll return the most recently updated and starred repos
    const repos = await getGitHubRepos(username);

    // Filter by known project repos
    const projectRepoNames = [
        "inventory-backend",
        "Truck-Booking-WebApp",
        "Ambulance-Analysis-IITB",
        "landsat-image-classification",
    ];

    const pinnedRepos = repos.filter((repo) =>
        projectRepoNames.some((name) => repo.name.toLowerCase().includes(name.toLowerCase()))
    );

    // If we have less than expected, add top starred repos
    if (pinnedRepos.length < 6) {
        const sortedByStars = repos
            .filter((repo) => !pinnedRepos.includes(repo))
            .sort((a, b) => b.stars - a.stars);

        pinnedRepos.push(...sortedByStars.slice(0, 6 - pinnedRepos.length));
    }

    return pinnedRepos.slice(0, 6);
}

export async function getGitHubStats(username: string = "yakshbhesaniya") {
    try {
        const { data: user } = await octokit.users.getByUsername({ username });

        return {
            name: user.name,
            bio: user.bio,
            followers: user.followers,
            following: user.following,
            publicRepos: user.public_repos,
            avatarUrl: user.avatar_url,
            profileUrl: user.html_url,
        };
    } catch (error) {
        console.error("Error fetching GitHub stats:", error);
        return null;
    }
}
