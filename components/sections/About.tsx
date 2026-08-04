import { Section } from "@/components/ui/Section";

export function About() {
    return (
        <Section
            id="about"
            title="Engineering Journey"
            subtitle="From foundational IT education to production-grade backend systems"
        >
            <div className="space-y-12">
                {/* The Path - Full Width for Narrative */}
                <div className="max-w-6xl">
                    <h3 className="text-lg sm:text-xl font-semibold mb-3 text-accent">The Path</h3>
                    <p className="text-text-secondary leading-relaxed text-lg">
                        My journey began with a Diploma in IT, leading to a BE in IT where I developed a strong foundation in computer science.
                        After securing a good rank in GATE (CS), I am currently pursuing postgraduate studies at IIT Bombay.
                        Along the way I have interned at Space Applications Centre (ISRO), working on satellite image processing,
                        and I currently work as a freelance AI Engineer at Dhi Labs AI building a production LLM agent platform -
                        while my M.Tech thesis takes on surface water monitoring from satellite data.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
                    <div className="space-y-8 text-text-primary">
                        <div>
                            <h3 className="text-lg sm:text-xl font-semibold mb-3 text-accent">Backend Specialization</h3>
                            <p className="text-text-secondary leading-relaxed">
                                I build scalable backend architectures in Python and Node.js. That work has shipped as a
                                retail inventory and accounting system running in production for a real client, a
                                multi-tenant SaaS platform for a paying customer, and logistics and emergency-response
                                platforms built on GIS routing.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-lg sm:text-xl font-semibold mb-3 text-accent">Production Focus</h3>
                            <p className="text-text-secondary leading-relaxed">
                                I design for failure, because production systems fail in ways demos never do. Retries,
                                timeouts, idempotency, caching, async processing and database optimization are the parts
                                I reach for first - and I treat a timeout as a design decision with a reason behind it,
                                not a magic number someone will tidy away later.
                            </p>
                        </div>
                    </div>

                    <div className="space-y-8 text-text-primary">
                        <div>
                            <h3 className="text-lg sm:text-xl font-semibold mb-3 text-accent">Measurement Over Assumption</h3>
                            <p className="text-text-secondary leading-relaxed">
                                I own the whole lifecycle, from API design through deployment and monitoring, and I verify
                                rather than assume. On my thesis that means mutation-testing the test suite itself and
                                publishing the predictions of mine that turned out to be wrong; on client work it means an
                                evaluation harness that has to pass before a change ships.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-lg sm:text-xl font-semibold mb-3 text-accent">Agentic AI & Multi-Agent Systems</h3>
                            <p className="text-text-secondary leading-relaxed">
                                I build autonomous agents and multi-agent systems that reason, plan and execute complex workflows,
                                including production LLM agents that answer questions over long documents with verifiable citations.
                                My focus is the unglamorous half: cost control, evaluation, isolation and tracing, so these systems
                                are reliable and observable rather than merely impressive in a demo.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </Section>
    );
}
