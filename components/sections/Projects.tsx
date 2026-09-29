import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { ProjectCard } from "@/components/ProjectCard";
import { projectsData } from "@/data/projects";
import { buttonClasses } from "@/components/ui/Button";
import { siteConfig } from "@/config/site";
import { Github } from "lucide-react";

export function Projects() {
    // The thesis has its own section, and client/internship work is covered under Experience.
    const projects = projectsData.filter((project) => !/Thesis|Client Work|Internship/.test(project.category));

    return (
        <Section
            id="projects"
            eyebrow="Projects"
            title="Selected work"
            subtitle="Client builds, course projects and self-driven work - each with the problem, what I built and what it measurably changed."
        >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
                {projects.map((project, idx) => (
                    <Reveal key={project.title} delay={(idx % 2) * 80} className="h-full min-w-0">
                        <ProjectCard project={project} />
                    </Reveal>
                ))}
            </div>

            <Reveal className="flex justify-center mt-12">
                <a href={siteConfig.social.github} target="_blank" rel="noopener noreferrer" className={buttonClasses("outline", "lg")}>
                    <Github className="w-4 h-4" />
                    More on GitHub
                </a>
            </Reveal>
        </Section>
    );
}
