
const stack = [
    "Python",
    "FastAPI",
    "LLM Agents",
    "ReAct",
    "Model Context Protocol",
    "RAG",
    "PostgreSQL",
    "Redis",
    "Node.js",
    "PyTorch",
    "vLLM",
    "Langfuse",
    "Docker",
    "WebRTC",
    "GDAL",
    "OpenCV",
];


/** Scrolling tech marquee between the hero and About. */
export function Highlights() {
    return (
        <section aria-label="Highlights" className="relative pt-10 md:pt-14">
            <div className="marquee-mask overflow-hidden border-y border-white/[0.07] py-5">
                <div className="flex w-max animate-marquee gap-10 pr-10 hover:[animation-play-state:paused]">
                    {[...stack, ...stack].map((item, i) => (
                        <span
                            key={`${item}-${i}`}
                            className="flex items-center gap-10 font-display text-2xl sm:text-3xl font-medium text-white/80 whitespace-nowrap"
                            aria-hidden={i >= stack.length}
                        >
                            {item}
                            <span className="text-accent text-xl">✦</span>
                        </span>
                    ))}
                </div>
            </div>

        </section>
    );
}
