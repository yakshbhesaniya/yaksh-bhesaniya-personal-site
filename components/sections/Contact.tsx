"use client";

import { Reveal } from "@/components/ui/Reveal";
import { buttonClasses } from "@/components/ui/Button";
import { siteConfig } from "@/config/site";
import { useState } from "react";
import { Mail, Copy, Check, Github, Linkedin, BookOpen, ArrowUpRight } from "lucide-react";

const socials = [
    { name: "LinkedIn", handle: "in/yaksh-bhesaniya", url: siteConfig.social.linkedin, icon: Linkedin },
    { name: "GitHub", handle: "@yakshbhesaniya", url: siteConfig.social.github, icon: Github },
    { name: "Medium", handle: "@yakshbhesaniya", url: siteConfig.social.medium, icon: BookOpen },
];

export function Contact() {
    const [copied, setCopied] = useState(false);

    const copyEmail = async () => {
        try {
            await navigator.clipboard.writeText(siteConfig.social.email);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch {
            window.location.href = `mailto:${siteConfig.social.email}`;
        }
    };

    return (
        <section id="contact" className="relative py-20 md:py-24 scroll-mt-20 overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
                <Reveal>
                    <div className="glass rounded-[32px] p-7 sm:p-12 md:p-16 relative overflow-hidden text-center">
                        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[36rem] h-[36rem] rounded-full bg-[radial-gradient(circle,rgba(139,155,255,0.22),transparent_60%)]" aria-hidden="true" />
                        <div className="absolute inset-0 grid-background opacity-40" aria-hidden="true" />

                        <div className="relative">
                            <p className="eyebrow justify-center mb-5">Contact</p>
                            <h2 className="text-3xl sm:text-5xl md:text-6xl font-semibold text-white text-balance max-w-3xl mx-auto">
                                Let&apos;s build something <span className="text-gradient-accent">that ships.</span>
                            </h2>
                            <p className="mt-5 text-text-secondary text-base sm:text-lg max-w-2xl mx-auto">
                                Open to full-time roles in AI engineering and backend systems. Happy to talk agents, evaluation,
                                distributed backends or satellite data.
                            </p>

                            <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3">
                                <a href={`mailto:${siteConfig.social.email}`} className={buttonClasses("primary", "lg", "w-full sm:w-auto")}>
                                    <Mail className="w-4 h-4" />
                                    Email me
                                </a>
                                <button
                                    onClick={copyEmail}
                                    className={buttonClasses("outline", "lg", "w-full sm:w-auto font-mono text-sm sm:text-base")}
                                    aria-live="polite"
                                >
                                    {copied ? <Check className="w-4 h-4 text-success" /> : <Copy className="w-4 h-4" />}
                                    {copied ? "Copied!" : siteConfig.social.email}
                                </button>
                            </div>

                            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-3xl mx-auto text-left">
                                {socials.map((social) => (
                                    <a
                                        key={social.name}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4 hover:border-accent/40 hover:bg-white/[0.05] transition-all"
                                    >
                                        <social.icon className="w-5 h-5 text-text-secondary group-hover:text-accent2 transition-colors" />
                                        <div className="min-w-0 flex-1">
                                            <p className="text-white text-sm font-medium">{social.name}</p>
                                            <p className="text-xs text-text-secondary truncate">{social.handle}</p>
                                        </div>
                                        <ArrowUpRight className="w-4 h-4 text-text-secondary group-hover:text-white transition-colors" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
