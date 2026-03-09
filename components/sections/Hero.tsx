"use client";

import Image from "next/image";
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
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                    {/* Text Content */}
                    <div className="flex-1 space-y-8 md:space-y-12 text-left">
                        {/* Terminal-style greeting */}
                        <div className="font-mono text-success text-sm md:text-lg">
                            <span className="opacity-70">$ whoami</span>
                        </div>

                        {/* Name and Title */}
                        <div className="space-y-4 md:space-y-6">
                            <div>
                                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-text-primary tracking-tight">
                                    {siteConfig.author.name}
                                </h1>
                            </div>
                            <p className="text-lg sm:text-xl md:text-2xl text-text-secondary font-mono">
                                {siteConfig.author.tagline}
                            </p>
                        </div>

                        {/* Core Statement */}
                        <div className="max-w-2xl">
                            <p className="text-base sm:text-lg md:text-xl text-text-primary leading-relaxed opacity-90">
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

                    {/* Image Column */}
                    <div className="flex-shrink-0 relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-success/50 to-accent/50 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                        <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden border border-white/10 glassmorphism shadow-2xl skew-y-0 group-hover:-skew-y-2 transition-transform duration-500">
                            <Image
                                src="/Yaksh.jpeg"
                                alt={siteConfig.author.name}
                                fill
                                className="object-cover transition-all duration-700 scale-100 hover:scale-110"
                                priority
                            />
                        </div>
                        {/* Decorative elements */}
                        <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-success/10 rounded-full blur-2xl"></div>
                        <div className="absolute -top-4 -left-4 w-24 h-24 bg-accent/10 rounded-full blur-2xl"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
