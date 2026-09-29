import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { TiltCard } from "@/components/ui/TiltCard";
import { FileSearch, Layers, Search, Sparkles, GitMerge, Table2, ShieldCheck, Ruler, Quote } from "lucide-react";

const phases = [
    { icon: FileSearch, label: "Acquire", detail: "Open-access papers from scholarly APIs" },
    { icon: Layers, label: "Normalize", detail: "Layout-aware reading order, tables, OCR" },
    { icon: Search, label: "Retrieve", detail: "BGE-M3 + SQLite FTS5, reciprocal-rank fusion" },
    { icon: Sparkles, label: "Extract", detail: "Self-hosted Qwen on vLLM, guided JSON" },
    { icon: GitMerge, label: "Reconcile", detail: "Merge conflicting claims per entity" },
    { icon: Table2, label: "Export", detail: "Dataset + evidence trail per value" },
];

const ladder = [
    { step: "01", title: "Self-consistency", body: "3 samples of one guided-JSON call; 2 of 3 must agree." },
    { step: "02", title: "Tool-calling agent", body: "Reads pages, searches, converts units - capped at 5 turns." },
    { step: "03", title: "Qwen3-235B pass", body: "The large model runs only on documents still unresolved." },
    { step: "04", title: "Human review", body: "Anything still uncertain goes to a review queue, never the dataset." },
];

const gates = [
    { icon: ShieldCheck, title: "Schema", body: "Output must parse into the spec's claim schema (pydantic + guided JSON)." },
    { icon: Ruler, title: "Units & dimensions", body: "pint checks the unit has the declared dimension and converts to canonical." },
    { icon: Quote, title: "Verbatim grounding", body: "The quote must appear on the cited page. Non-negotiable - no fuzzy matches." },
];

export function Thesis() {
    return (
        <Section
            id="thesis"
            eyebrow="M.Tech Thesis"
            title="SETU - spec-driven agentic extraction of scientific data"
            subtitle="Under Prof. Pritam Das at IIT Bombay. SETU turns scientific literature into a provenance-tracked dataset: every value carries the page and the verbatim quote it came from, and a config-driven Extraction Spec keeps domain, format and model out of the code."
        >
            {/* Pipeline */}
            <Reveal>
                <div className="glass rounded-3xl p-5 sm:p-8 overflow-hidden relative">
                    <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-accent/10 blur-3xl" aria-hidden="true" />
                    <p className="eyebrow mb-6">The pipeline</p>
                    <ol className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 relative">
                        {phases.map((phase, idx) => (
                            <li key={phase.label} className="relative rounded-2xl border border-white/10 bg-white/[0.02] p-4">
                                <div className="flex items-center justify-between mb-3">
                                    <phase.icon className="w-5 h-5 text-accent" />
                                    <span className="font-mono text-[10px] text-text-secondary">P{idx}</span>
                                </div>
                                <p className="text-white font-semibold text-sm">{phase.label}</p>
                                <p className="text-xs text-text-secondary mt-1 leading-snug">{phase.detail}</p>
                            </li>
                        ))}
                    </ol>
                </div>
            </Reveal>

            <div className="mt-6 grid lg:grid-cols-2 gap-6">
                {/* Escalation ladder - drawn as a 3D staircase */}
                <Reveal>
                    <div className="glass rounded-3xl p-5 sm:p-8 h-full">
                        <p className="eyebrow mb-2">Escalation ladder</p>
                        <p className="text-sm text-text-secondary mb-6">
                            The expensive model only runs on the hard cases - precision from single-shot, recall from the loop.
                        </p>
                        <ol className="space-y-3">
                            {ladder.map((rung, idx) => (
                                <li
                                    key={rung.step}
                                    className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition-colors hover:border-accent/40"
                                    style={{ marginLeft: `${idx * 5}%`, borderLeftColor: `rgba(198,255,61,${0.25 + idx * 0.2})`, borderLeftWidth: 3 }}
                                >
                                    <span className="font-mono text-sm text-gradient-accent font-semibold">{rung.step}</span>
                                    <div>
                                        <p className="text-white font-semibold text-sm">{rung.title}</p>
                                        <p className="text-xs sm:text-sm text-text-secondary mt-0.5">{rung.body}</p>
                                    </div>
                                </li>
                            ))}
                        </ol>
                    </div>
                </Reveal>

                {/* Validation gates */}
                <Reveal delay={100}>
                    <div className="glass rounded-3xl p-5 sm:p-8 h-full">
                        <p className="eyebrow mb-2">Three validation gates</p>
                        <p className="text-sm text-text-secondary mb-6">
                            No value enters the dataset until it passes all three. Rejection rates per gate are reported as quality metrics.
                        </p>
                        <div className="space-y-3">
                            {gates.map((gate) => (
                                <TiltCard key={gate.title} max={4} className="rounded-2xl">
                                    <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-4">
                                        <div className="grid place-items-center w-10 h-10 flex-shrink-0 rounded-xl bg-success/10 border border-success/20">
                                            <gate.icon className="w-5 h-5 text-success" />
                                        </div>
                                        <div>
                                            <p className="text-white font-semibold text-sm">{gate.title}</p>
                                            <p className="text-xs sm:text-sm text-text-secondary mt-0.5">{gate.body}</p>
                                        </div>
                                    </div>
                                </TiltCard>
                            ))}
                        </div>
                        <div className="mt-6 flex flex-wrap gap-1.5">
                            {["Python", "vLLM", "Qwen", "Tool Calling", "Hybrid Retrieval", "pint", "Pydantic", "SQLite FTS5"].map((t) => (
                                <span key={t} className="chip">{t}</span>
                            ))}
                        </div>
                    </div>
                </Reveal>
            </div>
        </Section>
    );
}
