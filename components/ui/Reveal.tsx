"use client";

import { cn } from "@/lib/utils";
import { ReactNode, useEffect, useRef } from "react";

interface RevealProps {
    children: ReactNode;
    as?: "div" | "li" | "article" | "section";
    className?: string;
    /** Stagger delay in ms. */
    delay?: number;
}

/** Fades and lifts its children into view the first time they enter the viewport. */
export function Reveal({ children, as: Tag = "div", className, delay = 0 }: RevealProps) {
    const ref = useRef<HTMLElement | null>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    el.classList.add("is-visible");
                    observer.disconnect();
                }
            },
            { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
        <Tag
            ref={(el: HTMLElement | null) => {
                ref.current = el;
            }}
            className={cn("reveal", className)}
            style={{ "--reveal-delay": `${delay}ms` } as React.CSSProperties}
        >
            {children}
        </Tag>
    );
}
