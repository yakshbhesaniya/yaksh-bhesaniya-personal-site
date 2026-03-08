import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { getPinnedRepos } from "@/lib/github";
import Link from "next/link";

export async function GitHub() {
    const repos = await getPinnedRepos();

    return (
        <Section
            id="github"
            title="GitHub Repositories"
            subtitle="Engineering output: code, systems, and solutions"
        >
            {repos.length === 0 ? (
                <div className="text-center py-12 text-text-secondary">
                    <p>Repositories are loading... Visit my GitHub profile directly.</p>
                    <Link
                        href="https://github.com/yakshbhesaniya"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent hover:underline mt-2 inline-block"
                    >
                        Visit GitHub →
                    </Link>
                </div>
            ) : (
                <>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {repos.map((repo) => (
                            <Link
                                key={repo.url}
                                href={repo.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-surface border border-border rounded-lg p-6 hover:border-accent/50 transition-all duration-300 flex flex-col group"
                            >
                                <div className="flex-1">
                                    <div className="flex items-start justify-between mb-3">
                                        <h3 className="text-lg font-semibold text-text-primary group-hover:text-accent transition-colors">
                                            {repo.name}
                                        </h3>
                                        <svg className="w-5 h-5 text-text-secondary flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                                            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                                        </svg>
                                    </div>

                                    <p className="text-text-secondary text-sm mb-4 line-clamp-2">
                                        {repo.description || "No description available"}
                                    </p>
                                </div>

                                <div className="flex items-center gap-4 text-xs text-text-secondary mt-4 pt-4 border-t border-border">
                                    {repo.language && (
                                        <div className="flex items-center gap-1">
                                            <span className="w-2 h-2 rounded-full bg-accent"></span>
                                            <span>{repo.language}</span>
                                        </div>
                                    )}
                                    {repo.stars > 0 && (
                                        <div className="flex items-center gap-1">
                                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                            <span>{repo.stars}</span>
                                        </div>
                                    )}
                                    {repo.forks > 0 && (
                                        <div className="flex items-center gap-1">
                                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M7.707 3.293a1 1 0 010 1.414L5.414 7H11a7 7 0 017 7v2a1 1 0 11-2 0v-2a5 5 0 00-5-5H5.414l2.293 2.293a1 1 0 11-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                            <span>{repo.forks}</span>
                                        </div>
                                    )}
                                </div>

                                {repo.topics.length > 0 && (
                                    <div className="flex flex-wrap gap-2 mt-3">
                                        {repo.topics.slice(0, 3).map((topic) => (
                                            <Badge key={topic} variant="default">
                                                {topic}
                                            </Badge>
                                        ))}
                                    </div>
                                )}
                            </Link>
                        ))}
                    </div>

                    {/* Link to GitHub Profile */}
                    <div className="mt-12 text-center">
                        <Link
                            href="https://github.com/yakshbhesaniya"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-surface border border-border rounded-lg text-text-primary hover:border-accent transition-colors"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                            </svg>
                            View Full GitHub Profile
                        </Link>
                    </div>
                </>
            )}
        </Section>
    );
}
