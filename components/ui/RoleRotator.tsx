"use client";

import { useEffect, useState } from "react";

interface RoleRotatorProps {
    words: string[];
    interval?: number;
}

/** Cycles through words with a vertical slide. The first word is server-rendered. */
export function RoleRotator({ words, interval = 2400 }: RoleRotatorProps) {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
        const id = setInterval(() => setIndex((i) => (i + 1) % words.length), interval);
        return () => clearInterval(id);
    }, [words.length, interval]);

    return (
        <span className="relative inline-grid overflow-hidden align-bottom" aria-live="off">
            {/* Invisible longest word reserves the width so the line never jumps. */}
            <span className="invisible col-start-1 row-start-1" aria-hidden="true">
                {words.reduce((a, b) => (a.length >= b.length ? a : b))}
            </span>
            {words.map((word, i) => (
                <span
                    key={word}
                    className="col-start-1 row-start-1 text-accent transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                    style={{
                        transform: `translateY(${i === index ? 0 : i < index ? -110 : 110}%)`,
                        opacity: i === index ? 1 : 0,
                    }}
                    aria-hidden={i !== index}
                >
                    {word}
                </span>
            ))}
        </span>
    );
}
