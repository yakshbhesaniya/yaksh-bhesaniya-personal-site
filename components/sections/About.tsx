import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { TiltCard } from "@/components/ui/TiltCard";
import { siteConfig } from "@/config/site";
import { Bot, ServerCog, Gauge, Satellite } from "lucide-react";

const pillars = [
    {
        icon: Bot,
        title: "Agentic AI & LLM Systems",
        body: "ReAct and multi-agent systems that answer questions over long legal documents with verifiable citations - built around the unglamorous half: cost control, evaluation, tracing and failover.",
    },
    {
        icon: ServerCog,
        title: "Production Backends",
        body: "Multi-tenant FastAPI and Node.js services on PostgreSQL and Redis - worker pools, idempotency keys, crash recovery and tests against real infrastructure.",
    },
    {
        icon: Gauge,
        title: "Measurement Over Assumption",
        body: "An LLM-as-judge harness gates every prompt change on client work; on my thesis, no value is accepted until it passes schema, unit and verbatim-grounding checks.",
    },
    {
        icon: Satellite,
        title: "Geospatial & Remote Sensing",
        body: "Satellite image mosaicking at ISRO SAC, change detection on Landsat and GIS routing systems - scientific data pipelines where a wrong answer looks exactly like a right one.",
    },
];

export function About() {
    return (
        <Section id="about" eyebrow="About" title="Engineer first. Researcher by training.">
            <div className="grid lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-12 lg:gap-16 items-start">
                <Reveal className="mx-auto w-full max-w-sm lg:max-w-none">
                    <TiltCard max={8} className="rounded-[28px]">
                        <div className="glass rounded-[28px] p-2.5">
                            <div className="relative aspect-[4/5] rounded-[22px] overflow-hidden">
                                <Image
                                    src="/Yaksh.jpeg"
                                    alt={`Portrait of ${siteConfig.name}`}
                                    fill
                                    sizes="(min-width: 1024px) 420px, 90vw"
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                            </div>
                        </div>
                        {/* Floating badges sit on their own depth layer. */}
                        <div
                            className="glass absolute left-2 sm:-left-6 bottom-16 rounded-2xl px-4 py-3"
                            style={{ transform: "translateZ(60px)" }}
                        >
                            <p className="font-sans text-white font-bold">Agentic AI</p>
                            <p className="text-xs text-text-secondary">LLM systems · evals</p>
                        </div>
                        <div
                            className="glass absolute right-2 sm:-right-6 top-10 rounded-2xl px-4 py-3"
                            style={{ transform: "translateZ(80px)" }}
                        >
                            <p className="font-sans text-white font-bold">Backend</p>
                            <p className="text-xs text-text-secondary">Python · Node.js · Postgres</p>
                        </div>
                    </TiltCard>
                </Reveal>

                <div>
                    <Reveal>
                        <div className="space-y-5 text-text-secondary text-base sm:text-lg leading-relaxed">
                            <p>
                                I started out writing backend code - a diploma and a B.E. in Information Technology,
                                internships at HumBee Studio and RapidOps, then a year of freelance work shipping real
                                systems for retail clients, including an ERP that still runs a business every day.
                            </p>
                            <p>
                                At IIT Bombay my work moved toward AI and scientific data: satellite imagery at ISRO, LLM
                                agents for a paying client, and a thesis on{" "}
                                <a href="#thesis" className="text-accent hover:underline">turning research papers into trustworthy datasets</a>.
                                The thread through all of it is the same - systems that stay correct, cheap and observable
                                once real users depend on them.
                            </p>
                        </div>
                    </Reveal>

                    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {pillars.map((pillar, idx) => (
                            <Reveal key={pillar.title} delay={idx * 80}>
                                <div className="glass glass-hover rounded-2xl p-5 h-full">
                                    <div className="mb-3 inline-grid place-items-center w-10 h-10 rounded-xl bg-accent/10 border border-accent/25">
                                        <pillar.icon className="w-5 h-5 text-accent" />
                                    </div>
                                    <h3 className="text-white font-semibold mb-1.5">{pillar.title}</h3>
                                    <p className="text-sm text-text-secondary leading-relaxed">{pillar.body}</p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    );
}
