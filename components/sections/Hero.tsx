"use client";

import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/config/site";

export function Hero() {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden py-20">
            {/* Grid background */}
            <div className="absolute inset-0 grid-background opacity-50" />

            {/* Content */}
            <div className="container mx-auto px-4 max-w-6xl relative z-10 pt-16">
                <div className="space-y-8 md:space-y-12">
                    {/* Terminal-style greeting */}
                    <div className="font-mono text-success text-sm md:text-lg">
                        <span className="opacity-70">$ whoami</span>
                    </div>

                    {/* Name and Title */}
                    <div className="space-y-4 md:space-y-6">
                        <div>
                            <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-text-primary tracking-tight">
                                {siteConfig.author.name}
                            </h1>
                        </div>
                        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-text-secondary font-mono">
                            {siteConfig.author.tagline}
                        </p>
                    </div>

                    {/* Core Statement */}
                    <div className="max-w-3xl">
                        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-text-primary leading-relaxed opacity-90">
                            {siteConfig.description}
                        </p>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row flex-wrap gap-4">
                        <Button
                            size="lg"
                            className="w-full sm:w-auto"
                            onClick={() => scrollToSection("projects")}
                        >
                            View Work
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="w-full sm:w-auto"
                            onClick={() => scrollToSection("blog")}
                        >
                            Read Engineering Blogs
                        </Button>
                        <Button
                            size="lg"
                            variant="ghost"
                            className="w-full sm:w-auto"
                            onClick={() => scrollToSection("contact")}
                        >
                            Connect →
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
