import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { buttonClasses } from "@/components/ui/Button";
import { getFeaturedPosts } from "@/lib/medium";
import { siteConfig } from "@/config/site";
import { ArrowUpRight, BookOpen } from "lucide-react";

export async function Blog() {
    const posts = await getFeaturedPosts(6);

    return (
        <Section
            id="blog"
            eyebrow="Writing"
            title="Engineering blog"
            subtitle="Deep-dives on backend architecture, resilience patterns and production systems, published on Medium."
        >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {posts.map((post, idx) => (
                    <Reveal as="article" key={post.link} delay={(idx % 3) * 70} className="h-full">
                        <a
                            href={post.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group glass glass-hover rounded-3xl p-6 h-full flex flex-col"
                        >
                            <div className="flex flex-wrap gap-1.5 mb-4">
                                {post.categories.slice(0, 2).map((cat) => (
                                    <span key={cat} className="chip">{cat}</span>
                                ))}
                            </div>
                            <h3 className="text-white font-semibold leading-snug line-clamp-2 group-hover:text-accent2 transition-colors">
                                {post.title}
                            </h3>
                            <p className="mt-2.5 text-sm text-text-secondary leading-relaxed line-clamp-3 flex-1">{post.excerpt}</p>
                            <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-text-secondary">
                                <span className="inline-flex items-center gap-1.5">
                                    <BookOpen className="w-3.5 h-3.5" /> {post.readTime} min read
                                </span>
                                <span className="inline-flex items-center gap-1 text-white group-hover:text-accent2 transition-colors">
                                    Read <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                </span>
                            </div>
                        </a>
                    </Reveal>
                ))}
            </div>

            <Reveal className="flex justify-center mt-12">
                <a href={siteConfig.social.medium} target="_blank" rel="noopener noreferrer" className={buttonClasses("outline", "lg")}>
                    All articles on Medium
                    <ArrowUpRight className="w-4 h-4" />
                </a>
            </Reveal>
        </Section>
    );
}
