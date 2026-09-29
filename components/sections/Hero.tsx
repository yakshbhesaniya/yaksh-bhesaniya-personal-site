import { siteConfig } from "@/config/site";
import { buttonClasses } from "@/components/ui/Button";
import { RoleRotator } from "@/components/ui/RoleRotator";
import { HeroSceneLoader } from "@/components/three/HeroSceneLoader";
import { ArrowRight, Download, ArrowDown } from "lucide-react";

const roles = ["LLM agents", "multi-agent systems", "RAG pipelines", "scalable backends", "satellite pipelines"];

export function Hero() {
    return (
        <section className="relative min-h-[100svh] flex flex-col overflow-hidden pt-28">
            <div className="absolute inset-0 grid-background" aria-hidden="true" />

            {/* 3D globe, framed by the same 72rem box as the content.
                Phone/tablet: a large dimmed backdrop behind the whole hero.
                Desktop: beside the text, bleeding slightly past the content edge. */}
            <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-full max-w-6xl pointer-events-none" aria-hidden="true">
                <div className="absolute inset-0 opacity-35 lg:opacity-100 lg:left-[56%] xl:left-[51%] lg:-right-14 lg:pointer-events-auto">
                    <HeroSceneLoader />
                </div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 max-w-6xl relative z-10 flex-1 flex items-center pb-14 pointer-events-none">
                <div className="max-w-2xl lg:max-w-[54%] xl:max-w-[58%] will-change-transform pointer-events-auto" data-hero-parallax>
                    <p className="animate-fade-up flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs sm:text-sm text-text-secondary">
                        <span className="inline-flex items-center gap-2 rounded-full bg-accent/10 border border-accent/30 px-3 py-1 text-accent">
                            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse-dot" />
                            Open to full-time roles
                        </span>
                    </p>

                    <h1
                        className="mt-8 text-[3.6rem] leading-[0.92] sm:text-8xl lg:text-[5.4rem] xl:text-[6.6rem] animate-fade-up"
                        style={{ animationDelay: "80ms" }}
                    >
                        <span className="block text-white">Yaksh</span>
                        <span className="inline-block whitespace-nowrap text-gradient">Bhesaniya</span>
                    </h1>

                    <p
                        className="mt-8 font-display text-2xl sm:text-3xl md:text-4xl font-medium text-white leading-tight animate-fade-up"
                        style={{ animationDelay: "160ms" }}
                    >
                        I build <RoleRotator words={roles} />
                        <br />
                        <span className="text-text-secondary">that hold up in production.</span>
                    </p>

                    <p
                        className="mt-6 text-base sm:text-lg text-text-secondary leading-relaxed max-w-xl animate-fade-up"
                        style={{ animationDelay: "240ms" }}
                    >
                        I design agents that cite their sources, stay inside a cost budget and pass an evaluation gate
                        before they ship - along with the multi-tenant backends they run on.
                    </p>

                    <div className="mt-10 flex flex-col sm:flex-row gap-3 animate-fade-up" style={{ animationDelay: "320ms" }}>
                        <a href="#projects" className={buttonClasses("primary", "lg")}>
                            See my work
                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </a>
                        <a
                            href={siteConfig.resumes[0].href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={buttonClasses("outline", "lg")}
                        >
                            <Download className="w-4 h-4" />
                            Resume
                        </a>
                    </div>
                </div>
            </div>

            {/* Credential rail - in normal flow so it never collides with the content on short screens */}
            <div className="relative z-10 hidden md:block">
                <div className="container mx-auto px-6 max-w-6xl">
                    <dl className="grid grid-cols-4 border-t border-white/[0.08]">
                        {siteConfig.credentials.map((credential, idx) => (
                            <div
                                key={credential.label}
                                className="py-5 pr-4 flex flex-col-reverse animate-fade-up"
                                style={{ animationDelay: `${400 + idx * 60}ms` }}
                            >
                                <dt className="text-xs text-text-secondary mt-1">{credential.label}</dt>
                                <dd className="font-sans text-lg font-bold text-white">{credential.value}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>

            <a
                href="#about"
                className="absolute right-6 bottom-28 z-10 hidden xl:grid place-items-center w-12 h-12 rounded-full border border-white/15 text-white hover:bg-accent hover:text-black hover:border-accent transition-colors"
                aria-label="Scroll to About"
            >
                <ArrowDown className="w-5 h-5 animate-float" />
            </a>
        </section>
    );
}
