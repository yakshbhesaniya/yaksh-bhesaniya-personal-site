import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { experienceData } from "@/data/experience";
import { ChevronDown } from "lucide-react";

const VISIBLE_BULLETS = 4;

function Bullet({ text }: { text: string }) {
    return (
        <li className="flex gap-3 text-sm sm:text-[15px] text-text-secondary leading-relaxed">
            <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent2" aria-hidden="true" />
            <span>{text}</span>
        </li>
    );
}

export function Experience() {
    const work = experienceData.filter((exp) => exp.type === "work");

    return (
        <Section
            id="experience"
            eyebrow="Experience"
            title="Where I've shipped"
            subtitle="From backend internships to owning production LLM agents for a paying client."
        >
            <ol className="relative">
                {/* Timeline spine */}
                <span
                    className="absolute left-[7px] md:left-[calc(9rem+7px)] top-2 bottom-2 w-px bg-gradient-to-b from-accent/60 via-accent2/30 to-transparent"
                    aria-hidden="true"
                />
                {work.map((exp, idx) => {
                    const visible = exp.description.slice(0, VISIBLE_BULLETS);
                    const hidden = exp.description.slice(VISIBLE_BULLETS);
                    const current = exp.period.includes("Present");

                    return (
                        <Reveal as="li" key={`${exp.company}-${exp.period}`} delay={idx * 60} className="relative pl-8 md:pl-0 pb-10 last:pb-0">
                            <div className="md:grid md:grid-cols-[9rem_minmax(0,1fr)] md:gap-10">
                                <p className="hidden md:block pt-5 pr-5 text-right font-mono text-xs text-text-secondary leading-relaxed">
                                    {exp.period}
                                </p>

                                <div className="relative">
                                    <span
                                        className={`absolute -left-8 md:-left-10 top-6 h-[15px] w-[15px] rounded-full border-2 border-background ${
                                            current ? "bg-success shadow-[0_0_0_4px_rgba(70,227,172,0.15)]" : "bg-accent"
                                        }`}
                                        aria-hidden="true"
                                    />

                                    <article className="glass glass-hover rounded-3xl p-5 sm:p-7">
                                        <header className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                                            <div>
                                                <h3 className="text-lg sm:text-xl font-semibold text-white">{exp.role}</h3>
                                                <p className="text-accent font-medium">{exp.company}</p>
                                                {exp.context && <p className="text-sm text-text-secondary mt-0.5">{exp.context}</p>}
                                            </div>
                                            <span className="md:hidden chip w-fit font-mono">{exp.period}</span>
                                            {current && (
                                                <span className="hidden md:inline-flex chip w-fit border-success/30 text-success">Current</span>
                                            )}
                                        </header>

                                        {exp.metrics && (
                                            <dl className="mt-5 grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                                                {exp.metrics.map((metric) => (
                                                    <div key={metric.label} className="rounded-2xl border border-white/10 bg-white/[0.03] px-3.5 py-3">
                                                        <dd className="font-display text-lg sm:text-xl font-semibold text-gradient-accent">{metric.value}</dd>
                                                        <dt className="text-[11px] sm:text-xs text-text-secondary mt-0.5 leading-snug">{metric.label}</dt>
                                                    </div>
                                                ))}
                                            </dl>
                                        )}

                                        <ul className="mt-5 space-y-2.5">
                                            {visible.map((text) => (
                                                <Bullet key={text} text={text} />
                                            ))}
                                        </ul>

                                        {hidden.length > 0 && (
                                            <details className="group mt-2.5">
                                                <summary className="cursor-pointer inline-flex items-center gap-1.5 text-sm text-accent2 hover:text-white transition-colors py-1">
                                                    <span className="group-open:hidden">Show {hidden.length} more</span>
                                                    <span className="hidden group-open:inline">Show less</span>
                                                    <ChevronDown className="w-4 h-4 transition-transform group-open:rotate-180" />
                                                </summary>
                                                <ul className="mt-2.5 space-y-2.5">
                                                    {hidden.map((text) => (
                                                        <Bullet key={text} text={text} />
                                                    ))}
                                                </ul>
                                            </details>
                                        )}

                                        {exp.skills && (
                                            <div className="mt-5 flex flex-wrap gap-1.5">
                                                {exp.skills.map((skill) => (
                                                    <span key={skill} className="chip">{skill}</span>
                                                ))}
                                            </div>
                                        )}
                                    </article>
                                </div>
                            </div>
                        </Reveal>
                    );
                })}
            </ol>
        </Section>
    );
}
