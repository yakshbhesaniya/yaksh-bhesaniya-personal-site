import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { experienceData } from "@/data/experience";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export function Resume() {
    const achievements = experienceData.filter((exp) => exp.type === "achievement");
    const work = experienceData.filter((exp) => exp.type === "work");
    const education = experienceData.filter((exp) => exp.type === "education");

    return (
        <Section
            id="resume"
            title="Experience & Achievements"
            subtitle="Production work, academic excellence and technical leadership"
        >
            {/* Achievements Highlight */}
            <div className="mb-12">
                <h3 className="text-2xl font-semibold text-accent mb-6">Notable Achievements</h3>
                <div className="space-y-4">
                    {achievements.map((achievement, idx) => (
                        <div
                            key={idx}
                            className="bg-surface border border-border rounded-lg p-6"
                        >
                            <div className="flex items-start justify-between mb-2">
                                <h4 className="text-xl font-semibold text-success">{achievement.role}</h4>
                                <span className="text-sm text-text-secondary font-mono">{achievement.period}</span>
                            </div>
                            <p className="text-text-secondary mb-2">{achievement.company}</p>
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

            {/* Work Experience */}
            <div className="mb-12">
                <h3 className="text-2xl font-semibold text-accent mb-6">Work Experience</h3>
                <div className="space-y-6">
                    {work.map((exp, idx) => (
                        <div
                            key={idx}
                            className="border-l-2 border-border pl-6 pb-6 last:pb-0"
                        >
                            <div className="flex items-start justify-between mb-2">
                                <div>
                                    <h4 className="text-lg font-semibold text-text-primary">{exp.role}</h4>
                                    <p className="text-text-secondary">{exp.company}</p>
                                </div>
                                <span className="text-sm text-text-secondary font-mono">{exp.period}</span>
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

            {/* Education */}
            <div className="mb-12">
                <h3 className="text-2xl font-semibold text-accent mb-6">Education</h3>
                <div className="space-y-4">
                    {education.map((edu, idx) => (
                        <div
                            key={idx}
                            className="flex items-start justify-between p-4 bg-surface border border-border rounded-lg"
                        >
                            <div>
                                <h4 className="text-lg font-semibold text-text-primary">{edu.role}</h4>
                                <p className="text-text-secondary">{edu.company}</p>
                                <ul className="mt-2 space-y-1">
                                    {edu.description.map((desc, i) => (
                                        <li key={i} className="text-text-secondary flex items-start gap-2 text-sm">
                                            <ChevronRight className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                                            <span>{desc}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <span className="text-sm text-text-secondary font-mono">{edu.period}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Download Resume */}
            <div className="text-center">
                <Link href="/resume/Yaksh_Bhesaniya_Resume.pdf" target="_blank" rel="noopener noreferrer">
                    <Button size="lg">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        Download Resume (PDF)
                    </Button>
                </Link>
            </div>
        </Section>
    );
}
