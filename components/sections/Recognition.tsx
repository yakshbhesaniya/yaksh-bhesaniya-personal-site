import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { TiltCard } from "@/components/ui/TiltCard";
import { buttonClasses } from "@/components/ui/Button";
import { experienceData } from "@/data/experience";
import { siteConfig } from "@/config/site";
import { GraduationCap, Trophy, Users, Download } from "lucide-react";

export function Recognition() {
    const education = experienceData.filter((exp) => exp.type === "education");
    const achievements = experienceData.filter((exp) => exp.type === "achievement");
    const leadership = experienceData.filter((exp) => exp.type === "leadership");

    return (
        <Section
            id="recognition"
            eyebrow="Recognition"
            title="Education, honours & leadership"
            subtitle="A consistent record from diploma gold medal to IIT Bombay - and the teams I've helped run along the way."
        >
            {/* Education */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {education.map((edu, idx) => (
                    <Reveal key={edu.role} delay={idx * 80} className="h-full">
                        <TiltCard max={6} className="h-full rounded-3xl">
                            <article className="glass glass-hover rounded-3xl p-6 h-full">
                                <div className="flex items-center justify-between mb-5">
                                    <div className="grid place-items-center w-10 h-10 rounded-xl bg-accent/10 border border-accent/25">
                                        <GraduationCap className="w-5 h-5 text-accent" />
                                    </div>
                                    <span className="chip font-mono">{edu.period}</span>
                                </div>
                                <p className="font-display text-3xl font-semibold text-gradient-accent">
                                    {edu.score}
                                    <span className="text-sm text-text-secondary font-sans font-normal ml-1.5">CGPA</span>
                                </p>
                                <h3 className="mt-3 text-white font-semibold">{edu.role}</h3>
                                <p className="text-sm text-accent">{edu.company}</p>
                                <ul className="mt-3 space-y-1.5">
                                    {edu.description.map((line) => (
                                        <li key={line} className="text-xs sm:text-sm text-text-secondary leading-relaxed">{line}</li>
                                    ))}
                                </ul>
                            </article>
                        </TiltCard>
                    </Reveal>
                ))}
            </div>

            <div className="mt-6 grid lg:grid-cols-2 gap-6">
                {/* Achievements */}
                <Reveal>
                    <div className="glass rounded-3xl p-6 sm:p-7 h-full">
                        <h3 className="flex items-center gap-2.5 text-white font-semibold mb-5">
                            <Trophy className="w-5 h-5 text-accent" /> Scholastic achievements
                        </h3>
                        <ul className="divide-y divide-white/[0.06]">
                            {achievements.map((a) => (
                                <li key={a.role} className="py-3 first:pt-0 last:pb-0 flex items-start justify-between gap-4">
                                    <div>
                                        <p className="text-white text-sm sm:text-[15px] font-medium">{a.role}</p>
                                        {a.description[0] && <p className="text-xs sm:text-sm text-text-secondary mt-0.5">{a.description[0]}</p>}
                                    </div>
                                    <span className="font-mono text-xs text-text-secondary whitespace-nowrap pt-0.5">{a.period}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </Reveal>

                {/* Positions of responsibility */}
                <Reveal delay={100}>
                    <div className="glass rounded-3xl p-6 sm:p-7 h-full flex flex-col">
                        <h3 className="flex items-center gap-2.5 text-white font-semibold mb-5">
                            <Users className="w-5 h-5 text-accent" /> Positions of responsibility
                        </h3>
                        <ul className="space-y-3">
                            {leadership.map((pos) => (
                                <li key={pos.role} className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">
                                    <div className="flex items-start justify-between gap-3">
                                        <p className="text-white text-sm sm:text-[15px] font-medium">{pos.role}</p>
                                        <span className="font-mono text-xs text-text-secondary whitespace-nowrap">{pos.period}</span>
                                    </div>
                                    <p className="text-xs text-accent mt-0.5">{pos.company}</p>
                                    {pos.description[0] && <p className="text-xs sm:text-sm text-text-secondary mt-1.5 leading-relaxed">{pos.description[0]}</p>}
                                </li>
                            ))}
                        </ul>
                    </div>
                </Reveal>
            </div>

            {/* Resume downloads */}
            <Reveal className="mt-10">
                <div className="glass rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6 overflow-hidden relative">
                    <div className="absolute -left-20 -bottom-20 w-64 h-64 rounded-full bg-accent2/10 blur-3xl" aria-hidden="true" />
                    <div className="relative">
                        <h3 className="text-xl text-white font-semibold">Want the full picture?</h3>
                        <p className="text-sm text-text-secondary mt-1">Two versions of my resume, tailored by role.</p>
                    </div>
                    <div className="relative flex flex-col sm:flex-row gap-3">
                        {siteConfig.resumes.map((resume, idx) => (
                            <a
                                key={resume.href}
                                href={resume.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={buttonClasses(idx === 0 ? "primary" : "outline", "md")}
                            >
                                <Download className="w-4 h-4" />
                                {resume.label.replace("Resume - ", "")}
                            </a>
                        ))}
                    </div>
                </div>
            </Reveal>
        </Section>
    );
}
