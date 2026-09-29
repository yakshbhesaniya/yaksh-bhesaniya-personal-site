import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import { Reveal } from "@/components/ui/Reveal";

interface SectionProps {
    children: ReactNode;
    id?: string;
    className?: string;
    /** Small label above the title, e.g. "Experience". */
    eyebrow?: string;
    title?: string;
    subtitle?: string;
}

export function Section({ children, id, className, eyebrow, title, subtitle }: SectionProps) {
    return (
        <section id={id} className={cn("relative py-20 md:py-24 scroll-mt-20", className)}>
            <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
                {(title || subtitle) && (
                    <Reveal className="mb-12 md:mb-16 max-w-3xl">
                        {eyebrow && (
                            <p className="eyebrow mb-4">
                                <span className="h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
                                {eyebrow}
                            </p>
                        )}
                        {title && (
                            <h2 className="text-4xl sm:text-5xl md:text-6xl mb-5 text-white text-balance leading-[1.02]">
                                {title}
                            </h2>
                        )}
                        {subtitle && (
                            <p className="text-text-secondary text-base sm:text-lg leading-relaxed">{subtitle}</p>
                        )}
                    </Reveal>
                )}
                {children}
            </div>
        </section>
    );
}
