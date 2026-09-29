"use client";

import dynamic from "next/dynamic";

// WebGL only runs in the browser; the static fallback glow shows while three.js loads.
const HeroScene = dynamic(() => import("./HeroScene"), {
    ssr: false,
    loading: () => (
        <div className="absolute inset-0 grid place-items-center" aria-hidden="true">
            <div className="w-[70%] aspect-square rounded-full bg-[radial-gradient(circle,rgba(139,155,255,0.25),transparent_65%)] animate-pulse" />
        </div>
    ),
});

export function HeroSceneLoader() {
    return <HeroScene />;
}
