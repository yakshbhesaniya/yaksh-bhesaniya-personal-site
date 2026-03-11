"use client";

import Link from "next/link";
import { siteConfig } from "@/config/site";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navigation() {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { href: "#about", label: "About" },
        { href: "#expertise", label: "Expertise" },
        { href: "#projects", label: "Projects" },
        { href: "#blog", label: "Blog" },
        { href: "#resume", label: "Resume" },
        { href: "#contact", label: "Connect" },
    ];

    const [isAtTop, setIsAtTop] = useState(true);

    // Close menu when clicking a link
    const handleToggle = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    // Handle scroll to toggle logo text
    useEffect(() => {
        const handleScroll = () => {
            const aboutSection = document.getElementById("about");
            if (aboutSection) {
                const rect = aboutSection.getBoundingClientRect();
                // Expand the logo (isAtTop = false) only when the About section is almost at the top
                // We show initials (isAtTop = true) when the About section is still below 100px from top
                setIsAtTop(rect.top > 100);
            } else {
                // Fallback if section not found (Hero is approx 100vh)
                setIsAtTop(window.scrollY < window.innerHeight * 0.9);
            }
        };

        window.addEventListener("scroll", handleScroll);
        // Initial check - use a small timeout to ensure DOM is ready
        setTimeout(handleScroll, 100);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Prevent scroll when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [isOpen]);

    const initials = siteConfig.author.name.split(" ").map(word => word[0]).join("");
    const fullName = siteConfig.author.name;

    return (
        <>
            <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border transition-all duration-300">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="flex items-center justify-between h-16">
                        <Link href="/" className="font-mono text-success font-bold text-lg z-50 flex items-center group" onClick={closeMenu}>
                            <span className="flex items-center">
                                <span>Y</span>
                                <span className={cn(
                                    "transition-all duration-500 ease-in-out overflow-hidden whitespace-nowrap",
                                    isAtTop ? "max-w-0 opacity-0" : "max-w-[200px] opacity-100 mr-2"
                                )}>
                                    aksh
                                </span>
                                <span className="ml-[1px]">B</span>
                                <span className={cn(
                                    "transition-all duration-500 ease-in-out overflow-hidden whitespace-nowrap",
                                    isAtTop ? "max-w-0 opacity-0" : "max-w-[200px] opacity-100 ml-0.5"
                                )}>
                                    hesaniya
                                </span>
                            </span>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center gap-8">
                            {navItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className="text-text-secondary hover:text-accent transition-colors text-sm font-medium"
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </div>

                        {/* Mobile menu button */}
                        <div className="md:hidden z-50">
                            <button 
                                onClick={handleToggle}
                                className="text-text-secondary hover:text-accent p-2"
                                aria-label="Toggle menu"
                            >
                                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Navigation Overlay */}
            <div 
                className={cn(
                    "fixed inset-0 bg-[#0d1117] z-[100] transition-transform duration-300 ease-in-out md:hidden flex flex-col overflow-y-auto",
                    isOpen ? "translate-x-0" : "translate-x-full"
                )}
            >
                {/* Close Button Inside Overlay */}
                <div className="sticky top-0 right-0 flex justify-end p-4 z-[110] bg-[#0d1117]">
                    <button 
                        onClick={closeMenu}
                        className="text-text-secondary hover:text-accent p-2"
                        aria-label="Close menu"
                    >
                        <X className="w-8 h-8" />
                    </button>
                </div>

                <div className="flex flex-col items-center gap-6 py-12">
                    {navItems.map((item, idx) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            onClick={closeMenu}
                            className="text-text-primary hover:text-accent transition-all text-2xl font-mono tracking-tighter hover:scale-110 active:scale-95 px-4 py-2"
                            style={{ transitionDelay: `${idx * 50}ms` }}
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>

                {/* Footer info in mobile menu */}
                <div className="mt-auto pb-12 text-center px-4">
                    <p className="text-text-secondary text-sm font-mono mb-4">yakshbhesaniya@gmail.com</p>
                    <div className="flex gap-8 justify-center">
                        <Link href={siteConfig.social.github} className="text-text-secondary hover:text-success text-sm font-mono" target="_blank">GITHUB</Link>
                        <Link href={siteConfig.social.linkedin} className="text-text-secondary hover:text-success text-sm font-mono" target="_blank">LINKEDIN</Link>
                    </div>
                </div>
            </div>
        </>
    );
}
