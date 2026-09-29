"use client";

import { cn } from "@/lib/utils";
import { ReactNode, useRef } from "react";

interface TiltCardProps {
    children: ReactNode;
    className?: string;
    /** Maximum rotation in degrees. */
    max?: number;
}

/**
 * Card that tilts in 3D toward the pointer, with a soft glare that follows it.
 * Only reacts to a real mouse, so touch devices get a static card.
 */
export function TiltCard({ children, className, max = 6 }: TiltCardProps) {
    const ref = useRef<HTMLDivElement>(null);

    const handleMove = (e: React.PointerEvent<HTMLDivElement>) => {
        if (e.pointerType !== "mouse" || !ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const px = (e.clientX - rect.left) / rect.width;
        const py = (e.clientY - rect.top) / rect.height;
        const style = ref.current.style;
        style.setProperty("--ry", `${(px - 0.5) * max * 2}deg`);
        style.setProperty("--rx", `${(0.5 - py) * max * 2}deg`);
        style.setProperty("--gx", `${px * 100}%`);
        style.setProperty("--gy", `${py * 100}%`);
        style.setProperty("--glare", "1");
    };

    const handleLeave = () => {
        const style = ref.current?.style;
        if (!style) return;
        style.setProperty("--rx", "0deg");
        style.setProperty("--ry", "0deg");
        style.setProperty("--glare", "0");
    };

    return (
        <div
            ref={ref}
            onPointerMove={handleMove}
            onPointerLeave={handleLeave}
            className={cn("tilt relative", className)}
        >
            {children}
            <div className="tilt-glare" aria-hidden="true" />
        </div>
    );
}
