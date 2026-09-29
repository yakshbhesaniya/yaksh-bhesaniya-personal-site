"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";

/**
 * Inertial smooth scrolling (Lenis) plus two scroll-linked touches:
 * a progress bar across the top and a gentle parallax fade on the hero.
 * Everything is skipped when the visitor prefers reduced motion.
 */
export function SmoothScroll() {
    const bar = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        const hero = document.querySelector<HTMLElement>("[data-hero-parallax]");

        const onScroll = (scroll: number, progress: number) => {
            if (bar.current) bar.current.style.transform = `scaleX(${progress})`;
            if (hero) {
                const p = Math.min(scroll / window.innerHeight, 1);
                hero.style.transform = `translate3d(0, ${p * -80}px, 0)`;
                hero.style.opacity = `${1 - p * 0.85}`;
            }
        };

        if (reduce) {
            const native = () => {
                const max = document.documentElement.scrollHeight - window.innerHeight;
                if (bar.current) bar.current.style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`;
            };
            window.addEventListener("scroll", native, { passive: true });
            return () => window.removeEventListener("scroll", native);
        }

        const lenis = new Lenis({
            lerp: 0.09,
            smoothWheel: true,
            wheelMultiplier: 0.9,
            // Nav and in-page links glide instead of jumping; each section's scroll-margin clears the header.
            anchors: true,
            autoRaf: true,
        });
        lenis.on("scroll", (l: Lenis) => onScroll(l.scroll, l.progress));

        return () => lenis.destroy();
    }, []);

    return (
        <div className="fixed top-0 inset-x-0 z-[60] h-[2px] pointer-events-none" aria-hidden="true">
            <div ref={bar} className="h-full origin-left bg-accent" style={{ transform: "scaleX(0)" }} />
        </div>
    );
}
