import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { experienceData } from "@/data/experience";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export function Resume() {
    const achievements = experienceData.filter((exp) => exp.type === "achievement");
    const work = experienceData.filter((exp) => exp.type === "work");
    const education = experienceData.filter((exp) => exp.type === "education");
    const leadership = experienceData.filter((exp) => exp.type === "leadership");

    return (
        <Section
            id="resume"
            title="Experience & Achievements"
            subtitle="Production work, academic excellence and technical leadership"
        >
            {/* Work Experience */}
            <div className="mb-12">
                <h3 className="text-2xl font-semibold text-accent mb-6">Work Experience</h3>
                <div className="space-y-6">
                    {work.map((exp, idx) => (
                        <div
                            key={idx}
                            className="border-l-2 border-border pl-6 pb-8 last:pb-0 relative"
                        >
                            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-border border-4 border-background" />
                            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-4">
                                <div>
                                    <h4 className="text-lg font-semibold text-text-primary">{exp.role}</h4>
                                    <p className="text-text-secondary font-medium">{exp.company}</p>
                                    {exp.context && <p className="text-text-secondary text-sm">{exp.context}</p>}
                                </div>
                                <span className="text-sm text-text-secondary font-mono bg-surface px-3 py-1 rounded-full border border-border w-fit">{exp.period}</span>
                            </div>
                            <ul className="space-y-1 mb-3">
                                {exp.description.map((desc, i) => (
                                    <li key={i} className="text-text-secondary flex items-start text-sm">
                                        <span className="w-1.5 h-1.5 rounded-full bg-success mt-2 mr-2.5 flex-shrink-0"></span>
                                        <span>{desc}</span>
                                    </li>
                                ))}
                            </ul>
                            {exp.skills && exp.skills.length > 0 && (
                                <div className="flex flex-wrap gap-2 mt-3">
                                    {exp.skills.map((skill) => (
                                        <span
                                            key={skill}
                                            className="px-2 py-1 bg-background border border-border rounded text-xs text-text-secondary"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Positions of Responsibility */}
            <div className="mb-12">
                <h3 className="text-2xl font-semibold text-accent mb-6">Positions of Responsibility</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                    {leadership.map((pos) => (
                        <div key={pos.role} className="bg-surface border border-border rounded-lg p-5">
                            <div className="flex items-start justify-between gap-2 mb-2">
                                <h4 className="font-semibold text-text-primary">{pos.role}</h4>
                                <span className="text-xs text-text-secondary font-mono whitespace-nowrap">{pos.period}</span>
                            </div>
                            <p className="text-accent text-sm mb-2">{pos.company}</p>
                            <p className="text-text-secondary text-sm">{pos.description[0]}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Achievements Highlight */}
            <div className="mb-12">
                <h3 className="text-2xl font-semibold text-accent mb-6">Notable Achievements</h3>
                <div className="space-y-4">
                    {achievements.map((achievement, idx) => (
                        <div
                            key={idx}
                            className="bg-surface border border-border rounded-lg p-6"
                        >
                            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-4">
                                <h4 className="text-lg sm:text-xl font-semibold text-success">{achievement.role}</h4>
                                <span className="text-sm text-text-secondary font-mono bg-background px-3 py-1 rounded-full border border-border w-fit">{achievement.period}</span>
                            </div>
                            <p className="text-text-primary font-medium mb-3">{achievement.company}</p>
                            <ul className="space-y-2">
                                {achievement.description.map((desc, i) => (
                                    <li key={i} className="text-text-secondary flex items-start gap-2">
                                        <ChevronRight className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                                        <span>{desc}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            {/* Education */}
            <div className="mb-12">
                <h3 className="text-2xl font-semibold text-accent mb-6">Education</h3>
                <div className="space-y-4">
                    {education.map((edu, idx) => (
                        <div
                            key={idx}
                            className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 p-5 bg-surface border border-border rounded-lg"
                        >
                            <div className="flex-1">
                                <h4 className="text-lg font-semibold text-text-primary">{edu.role}</h4>
                                <p className="text-accent font-medium mb-3">{edu.company}</p>
                                <ul className="space-y-2">
                                    {edu.description.map((desc, i) => (
                                        <li key={i} className="text-text-secondary flex items-start gap-2 text-sm">
                                            <ChevronRight className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                                            <span>{desc}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <span className="text-sm text-text-secondary font-mono bg-background px-3 py-1 rounded-full border border-border w-fit">{edu.period}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Download Resume */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-12 px-4 sm:px-0">
                {siteConfig.resumes.map((resume, idx) => (
                    <Link key={resume.href} href={resume.href} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                        <Button size="lg" variant={idx === 0 ? "primary" : "outline"} className="w-full sm:w-auto">
                            {resume.label} (PDF)
                        </Button>
                    </Link>
                ))}
            </div>
        </Section>
    );
}
