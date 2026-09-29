import { Project } from "@/data/projects";
import { TiltCard } from "@/components/ui/TiltCard";
import { ArrowUpRight, ChevronDown, Lock } from "lucide-react";

interface ProjectCardProps {
    project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
    return (
        <TiltCard max={5} className="h-full rounded-3xl">
            <article className="glass glass-hover rounded-3xl p-6 sm:p-7 h-full flex flex-col">
                <header>
                    <div className="flex items-center justify-between gap-3 mb-4">
                        <span className="min-w-0 text-[11px] font-mono uppercase tracking-[0.14em] text-accent2 truncate">
                            {project.category}
                        </span>
                        <span className="text-[11px] font-mono text-text-secondary whitespace-nowrap">{project.period}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-white leading-snug text-balance">{project.title}</h3>
                </header>

                <p className="mt-3 text-sm text-text-secondary leading-relaxed">{project.problem}</p>

                <div className="mt-4 rounded-2xl border border-success/15 bg-success/[0.04] p-4">
                    <p className="text-[11px] font-mono uppercase tracking-[0.14em] text-success mb-1.5">Outcome</p>
                    <p className="text-sm text-white/85 leading-relaxed">{project.outcome}</p>
                </div>

                <details className="group mt-4">
                    <summary className="cursor-pointer inline-flex items-center gap-1.5 text-sm text-accent hover:text-white transition-colors">
                        <span className="group-open:hidden">How it works</span>
                        <span className="hidden group-open:inline">Hide details</span>
                        <ChevronDown className="w-4 h-4 transition-transform group-open:rotate-180" />
                    </summary>
                    <div className="mt-3 space-y-3">
                        <p className="text-sm text-text-secondary leading-relaxed">{project.solution}</p>
                        {project.challenges && (
                            <ul className="space-y-2">
                                {project.challenges.map((challenge) => (
                                    <li key={challenge} className="flex gap-2.5 text-sm text-text-secondary leading-relaxed">
                                        <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent2" aria-hidden="true" />
                                        <span>{challenge}</span>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </details>

                <div className="mt-5 flex flex-wrap gap-1.5">
                    {project.techStack.map((tech) => (
                        <span key={tech} className="chip">{tech}</span>
                    ))}
                </div>

                {(project.githubUrl || project.codeAccessNote) && (
                    <footer className="mt-auto pt-5">
                        <div className="pt-4 border-t border-white/10">
                            {project.githubUrl ? (
                                <a
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 text-sm font-medium text-white hover:text-accent2 transition-colors"
                                    aria-label={`View ${project.title} source code on GitHub`}
                                >
                                    View source on GitHub
                                    <ArrowUpRight className="w-4 h-4" />
                                </a>
                            ) : (
                                <p className="inline-flex items-center gap-1.5 text-sm text-text-secondary">
                                    <Lock className="w-3.5 h-3.5" />
                                    {project.codeAccessNote}
                                </p>
                            )}
                        </div>
                    </footer>
                )}
            </article>
        </TiltCard>
    );
}
