import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SectionProps {
    children: ReactNode;
    id?: string;
    className?: string;
    title?: string;
    subtitle?: string;
}

export function Section({ children, id, className, title, subtitle }: SectionProps) {
    return (
        <section id={id} className={cn("py-20 md:py-24 scroll-mt-16", className)}>
            <div className="container mx-auto px-4 max-w-6xl">
                {(title || subtitle) && (
                    <div className="mb-12 md:mb-16">
                        {title && (
                            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-text-primary">
                                {title}
                            </h2>
                        )}
                        {subtitle && (
                            <p className="text-text-secondary text-lg max-w-2xl">
                                {subtitle}
                            </p>
                        )}
                    </div>
                )}
                {children}
            </div>
        </section>
    );
}
