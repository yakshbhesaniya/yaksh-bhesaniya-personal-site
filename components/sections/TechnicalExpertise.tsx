import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { skillsData } from "@/data/skills";
import { Bot, Server, Network, Brain, Satellite, Code2, Database, Wrench } from "lucide-react";
import { cn } from "@/lib/utils";

const categories = [
    { title: "Agentic AI & LLM Systems", items: skillsData.aiAgents, icon: Bot, wide: true },
    { title: "Backend Engineering", items: skillsData.backend, icon: Server },
    { title: "Systems & Concurrency", items: skillsData.systems, icon: Network },
    { title: "Machine Learning & Data", items: skillsData.mlData, icon: Brain, wide: true },
    { title: "Geospatial & Remote Sensing", items: skillsData.geospatial, icon: Satellite, wide: true },
    { title: "Languages", items: skillsData.languages, icon: Code2 },
    { title: "Databases & Storage", items: skillsData.databases, icon: Database },
    { title: "DevOps & Tools", items: skillsData.devops, icon: Wrench, wide: true },
];

export function TechnicalExpertise() {
    return (
        <Section
            id="expertise"
            eyebrow="Skills"
            title="Technical expertise"
            subtitle="Grouped by what I build with them - every item here has been used in shipped or evaluated work above."
        >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {categories.map((category, idx) => (
                    <Reveal
                        key={category.title}
                        delay={(idx % 3) * 70}
                        className={cn(category.wide && "lg:col-span-2")}
                    >
                        <div className="glass glass-hover rounded-3xl p-6 h-full">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="grid place-items-center w-10 h-10 rounded-xl bg-accent/10 border border-accent/25">
                                    <category.icon className="w-5 h-5 text-accent" />
                                </div>
                                <h3 className="text-white font-semibold">{category.title}</h3>
                            </div>
                            <ul className="flex flex-wrap gap-1.5">
                                {category.items.map((item) => (
                                    <li key={item} className="chip text-text-primary/85">{item}</li>
                                ))}
                            </ul>
                        </div>
                    </Reveal>
                ))}
            </div>
        </Section>
    );
}
