"use client";

import Link from "next/link";
import { siteConfig } from "@/config/site";
import { useEffect, useState } from "react";
import { Menu, X, FileText } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#thesis", label: "Thesis" },
    { href: "#projects", label: "Projects" },
    { href: "#expertise", label: "Skills" },
    { href: "#recognition", label: "Recognition" },
    { href: "#blog", label: "Writing" },
    { href: "#contact", label: "Contact" },
];

export function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [active, setActive] = useState("");

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 24);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });

        // Highlight the section occupying the middle of the viewport.
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) setActive(`#${entry.target.id}`);
                });
            },
            { rootMargin: "-45% 0px -50% 0px" }
        );
        navItems.forEach((item) => {
            const el = document.querySelector(item.href);
            if (el) observer.observe(el);
        });

        return () => {
            window.removeEventListener("scroll", onScroll);
            observer.disconnect();
        };
    }, []);

    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "";
    }, [isOpen]);

    const closeMenu = () => setIsOpen(false);

    return (
        <>
            <header className="fixed top-0 inset-x-0 z-50 px-3 sm:px-6 pt-3">
                <nav
                    aria-label="Primary"
                    className={cn(
                        "mx-auto max-w-6xl flex items-center justify-between h-14 px-4 sm:px-5 rounded-full transition-all duration-500",
                        scrolled ? "glass" : "bg-transparent border border-transparent"
                    )}
                >
                    <Link href="/" className="flex items-center gap-2.5 z-50" onClick={closeMenu} aria-label="Home">
                        <span className="grid place-items-center w-8 h-8 rounded-full bg-accent text-black font-sans font-bold text-sm">
                            YB
                        </span>
                        <span className="hidden sm:block font-sans font-bold text-white tracking-tight">
                            {siteConfig.name}
                        </span>
                    </Link>

                    <div className="hidden lg:flex items-center gap-1">
                        {navItems.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                className={cn(
                                    "relative px-3 py-1.5 text-sm rounded-full transition-colors",
                                    active === item.href ? "text-white bg-white/[0.07]" : "text-text-secondary hover:text-white"
                                )}
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>

                    <div className="flex items-center gap-2">
                        <a
                            href={siteConfig.resumes[0].href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-white text-black px-4 py-1.5 text-sm font-medium hover:bg-accent transition-colors"
                        >
                            <FileText className="w-4 h-4" />
                            Resume
                        </a>
                        <button
                            onClick={() => setIsOpen((open) => !open)}
                            className="lg:hidden z-50 p-2 text-text-secondary hover:text-white"
                            aria-label={isOpen ? "Close menu" : "Open menu"}
                            aria-expanded={isOpen}
                        >
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </nav>
            </header>

            {/* Mobile menu */}
            <div
                data-lenis-prevent
                className={cn(
                    "fixed inset-0 z-40 lg:hidden bg-background/95 backdrop-blur-xl transition-all duration-500",
                    isOpen ? "opacity-100 visible" : "opacity-0 invisible"
                )}
            >
                <div className="flex flex-col h-full pt-24 pb-10 px-8 overflow-y-auto">
                    <div className="flex flex-col gap-1">
                        {navItems.map((item, idx) => (
                            <a
                                key={item.href}
                                href={item.href}
                                onClick={closeMenu}
                                className={cn(
                                    "font-display text-3xl font-semibold py-2 transition-all duration-500",
                                    isOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4",
                                    active === item.href ? "text-gradient-accent" : "text-white"
                                )}
                                style={{ transitionDelay: isOpen ? `${idx * 40}ms` : "0ms" }}
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>
                    <div className="mt-auto pt-10 space-y-4">
                        <a
                            href={siteConfig.resumes[0].href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-full bg-white text-black px-5 py-2.5 font-medium"
                        >
                            <FileText className="w-4 h-4" /> Download Resume
                        </a>
                        <p className="text-text-secondary text-sm font-mono">{siteConfig.social.email}</p>
                        <div className="flex gap-6 text-sm font-mono">
                            <a href={siteConfig.social.github} target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-white">GitHub</a>
                            <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-white">LinkedIn</a>
                            <a href={siteConfig.social.medium} target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-white">Medium</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
