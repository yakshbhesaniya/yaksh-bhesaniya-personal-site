import { Badge } from "@/components/ui/Badge";
import { Project } from "@/data/projects";
import Link from "next/link";

interface ProjectCardProps {
    project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
    return (
        <div className="bg-surface border border-border rounded-lg p-5 sm:p-6 hover:border-accent/50 transition-all duration-300 h-full flex flex-col">
            <div className="flex-1">
                {/* Title and Period */}
                <div className="mb-4">
                    <h3 className="text-lg sm:text-xl font-semibold text-text-primary mb-2">
                        {project.title}
                    </h3>
                    <p className="text-sm text-text-secondary font-mono">{project.period}</p>
                </div>

                {/* Problem Statement */}
                <div className="mb-4">
                    <h4 className="text-sm font-semibold text-accent mb-2">Problem</h4>
                    <p className="text-text-secondary text-sm leading-relaxed">
                        {project.problem}
                    </p>
                </div>

                {/* Solution */}
                <div className="mb-4">
                    <h4 className="text-sm font-semibold text-accent mb-2">Solution</h4>
                    <p className="text-text-secondary text-sm leading-relaxed">
                        {project.solution}
                    </p>
                </div>

                {/* Challenges */}
                {project.challenges.length > 0 && (
                    <div className="mb-4">
                        <h4 className="text-sm font-semibold text-accent mb-2">Key Challenges</h4>
                        <ul className="space-y-1">
                            {project.challenges.map((challenge, idx) => (
                                <li key={idx} className="text-text-secondary flex items-start text-sm">
                                    <span className="w-1.5 h-1.5 rounded-full bg-success mt-2 mr-2.5 flex-shrink-0"></span>
                                    <span>{challenge}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* Outcome */}
                <div className="mb-4">
                    <h4 className="text-sm font-semibold text-success mb-2">Engineering Outcome</h4>
                    <p className="text-text-secondary text-sm leading-relaxed">
                        {project.outcome}
                    </p>
                </div>

                {/* Tech Stack */}
                <div className="mb-4">
                    <h4 className="text-sm font-semibold text-text-primary mb-2">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech) => (
                            <Badge key={tech} variant="default">
                                {tech}
                            </Badge>
                        ))}
                    </div>
                </div>
            </div>

            {/* GitHub Link */}
            <div className="mt-auto pt-4 border-t border-border">
                <Link
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-accent hover:underline text-sm font-medium"
                >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                    View on GitHub
                </Link>
            </div>
        </div>
    );
}
