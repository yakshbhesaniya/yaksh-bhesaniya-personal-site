import { Section } from "@/components/ui/Section";
import { skillsData } from "@/data/skills";
import { Code2, Server, Network, Database, Wrench, GitBranch, ChevronRight } from "lucide-react";

export function TechnicalExpertise() {
    const categories = [
        { title: "Languages", items: skillsData.languages, icon: <Code2 className="w-6 h-6 text-accent" /> },
        { title: "Backend Engineering", items: skillsData.backend, icon: <Server className="w-6 h-6 text-accent" /> },
        { title: "Systems & Architecture", items: skillsData.systems, icon: <Network className="w-6 h-6 text-accent" /> },
        { title: "Databases", items: skillsData.databases, icon: <Database className="w-6 h-6 text-accent" /> },
        { title: "Tools & Frameworks", items: skillsData.tools, icon: <Wrench className="w-6 h-6 text-accent" /> },
        { title: "Development", items: skillsData.development, icon: <GitBranch className="w-6 h-6 text-accent" /> },
    ];

    return (
        <Section
            id="expertise"
            title="Technical Expertise"
            subtitle="Production-ready skills organized by domain, not proficiency meters"
        >
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {categories.map((category) => (
                    <div
                        key={category.title}
                        className="bg-surface border border-border rounded-lg p-6 hover:border-accent/50 transition-colors"
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <span>{category.icon}</span>
                            <h3 className="text-xl font-semibold text-text-primary">{category.title}</h3>
                        </div>

                        <ul className="space-y-2">
                            {category.items.map((item, idx) => (
                                <li
                                    key={idx}
                                    className="text-text-secondary flex items-start gap-2"
                                >
                                    <ChevronRight className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </Section>
    );
}
