import { Section } from "@/components/ui/Section";
import { getFeaturedPosts } from "@/lib/medium";
import { formatDate } from "@/lib/utils";
import Link from "next/link";

export async function Blog() {
    const posts = await getFeaturedPosts(6);

    return (
        <Section
            id="blog"
            title="Engineering Blog"
            subtitle="Technical deep-dives on Node.js, microservices and production systems"
        >
            {posts.length === 0 ? (
                <div className="text-center py-12 text-text-secondary">
                    <p>Blog posts are loading... Check back soon or visit my Medium directly.</p>
                    <Link
                        href="https://yakshbhesaniya.medium.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent hover:underline mt-2 inline-block"
                    >
                        Visit Medium →
                    </Link>
                </div>
            ) : (
                <>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {posts.map((post) => (
                            <article
                                key={post.link}
                                className="bg-surface border border-border rounded-lg p-6 hover:border-accent/50 transition-all duration-300 flex flex-col"
                            >
                                <div className="flex-1">
                                    <h3 className="text-lg font-semibold text-text-primary mb-2 line-clamp-2">
                                        {post.title}
                                    </h3>

                                    <p className="text-text-secondary text-sm mb-4 line-clamp-3">
                                        {post.excerpt}
                                    </p>
                                </div>

                                <div className="flex items-center justify-between text-xs text-text-secondary mt-4 pt-4 border-t border-border">
                                    <span>{formatDate(post.pubDate)}</span>
                                    <span>{post.readTime} min read</span>
                                </div>

                                <Link
                                    href={post.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-4 text-accent hover:underline text-sm font-medium inline-flex items-center gap-1"
                                >
                                    Read on Medium
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </Link>
                            </article>
                        ))}
                    </div>

                    {/* Link to Medium */}
                    <div className="mt-12 flex justify-center px-4 sm:px-0">
                        <Link
                            href="https://yakshbhesaniya.medium.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 px-6 min-h-[3rem] py-3 bg-surface border border-border rounded-lg text-text-primary hover:border-accent transition-colors w-full sm:w-auto text-sm md:text-base font-medium"
                        >
                            View All Articles on Medium
                            <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                        </Link>
                    </div>
                </>
            )}
        </Section>
    );
}
