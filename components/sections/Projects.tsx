import { Section } from "@/components/ui/Section";
import { ProjectCard } from "@/components/ProjectCard";
import { projectsData } from "@/data/projects";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/config/site";

export function Projects() {
    return (
        <Section
            id="projects"
            title="Engineering Projects"
            subtitle="Practical solutions to real-world engineering challenges"
        >
            <div className="grid md:grid-cols-2 gap-8">
                {projectsData.map((project) => (
                    <ProjectCard key={project.title} project={project} />
                ))}
            </div>

            <div className="flex justify-center mt-12">
                <a href={siteConfig.social.github} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="lg" className="group">
                        View more projects on GitHub
                        <span className="ml-2 group-hover:translate-x-1 transition-transform inline-block">→</span>
                    </Button>
                </a>
            </div>
        </Section>
    );
}
