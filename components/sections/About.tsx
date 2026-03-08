import { Section } from "@/components/ui/Section";

export function About() {
    return (
        <Section
            id="about"
            title="Engineering Journey"
            subtitle="From foundational IT education to production-grade backend systems"
        >
            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                <div className="space-y-6 text-text-primary">
                    <div>
                        <h3 className="text-xl font-semibold mb-3 text-accent">The Path</h3>
                        <p className="text-text-secondary leading-relaxed">
                            My journey began with a Diploma in IT, leading to a BE in IT where I developed a strong foundation in computer science. 
                            After securing a good rank in GATE (CS), I am currently pursuing postgraduate studies at IIT Bombay, 
                            focusing on deepening my understanding of distributed systems while continuing to build practical applications.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold mb-3 text-accent">Backend Specialization</h3>
                        <p className="text-text-secondary leading-relaxed">
                            Focused on Node.js and Python for building scalable backend architectures.
                            Experience ranges from real-time inventory systems to logistics optimization
                            platforms and emergency response analytics.
                        </p>
                    </div>
                </div>

                <div className="space-y-6 text-text-primary">
                    <div>
                        <h3 className="text-xl font-semibold mb-3 text-accent">Production Focus</h3>
                        <p className="text-text-secondary leading-relaxed">
                            I enjoy building systems that are robust and reliable. I strive to design architectures that 
                            can handle real-world challenges, such as unexpected traffic or system failures. I am always 
                            learning more about caching, async processing, database optimization and ways to improve API performance.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold mb-3 text-accent">Systems Thinking</h3>
                        <p className="text-text-secondary leading-relaxed">
                            I have a strong interest in microservices and distributed systems. I approach problems by 
                            trying to understand the entire lifecycle of an application, from the initial API design 
                            down to deployment and monitoring, always looking for ways to improve overall observability.
                        </p>
                    </div>
                </div>
            </div>

        </Section>
    );
}
