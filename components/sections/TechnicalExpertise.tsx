import { Section } from "@/components/ui/Section";
import { skillsData } from "@/data/skills";
import { Code2, Server, Network, Database, Wrench, ChevronRight, Bot, Satellite } from "lucide-react";

export function TechnicalExpertise() {
    const categories = [
        { title: "Agentic AI & LLM Systems", items: skillsData.aiAgents, icon: <Bot className="w-6 h-6 text-accent" /> },
        { title: "Backend Engineering", items: skillsData.backend, icon: <Server className="w-6 h-6 text-accent" /> },
        { title: "Systems & Concurrency", items: skillsData.systems, icon: <Network className="w-6 h-6 text-accent" /> },
        { title: "Machine Learning & Data", items: skillsData.mlData, icon: <Code2 className="w-6 h-6 text-accent" /> },
        { title: "Geospatial & Remote Sensing", items: skillsData.geospatial, icon: <Satellite className="w-6 h-6 text-accent" /> },
        { title: "Languages", items: skillsData.languages, icon: <Code2 className="w-6 h-6 text-accent" /> },
        { title: "Databases & Storage", items: skillsData.databases, icon: <Database className="w-6 h-6 text-accent" /> },
        { title: "DevOps & Tools", items: skillsData.devops, icon: <Wrench className="w-6 h-6 text-accent" /> },
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
                            <span className="flex-shrink-0">{category.icon}</span>
                            <h3 className="text-lg sm:text-xl font-semibold text-text-primary">{category.title}</h3>
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
