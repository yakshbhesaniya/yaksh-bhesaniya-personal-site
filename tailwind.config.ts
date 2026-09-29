import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#07070a",
                surface: "#101014",
                elevated: "#16161c",
                border: "rgba(255, 255, 255, 0.09)",
                "text-primary": "#f2f2f5",
                "text-secondary": "#9d9daa",
                accent: "#c6ff3d",
                accent2: "#9d8cff",
                success: "#c6ff3d",
            },
            fontFamily: {
                sans: ["var(--font-sans)", "system-ui", "sans-serif"],
                display: ["var(--font-display)", "var(--font-sans)", "system-ui", "sans-serif"],
                mono: ["var(--font-mono)", "ui-monospace", "monospace"],
            },
            keyframes: {
                "fade-up": {
                    "0%": { opacity: "0", transform: "translateY(24px)" },
                    "100%": { opacity: "1", transform: "translateY(0)" },
                },
                shimmer: {
                    "0%": { backgroundPosition: "0% 50%" },
                    "100%": { backgroundPosition: "200% 50%" },
                },
                marquee: {
                    "0%": { transform: "translateX(0)" },
                    "100%": { transform: "translateX(-50%)" },
                },
                float: {
                    "0%, 100%": { transform: "translateY(0)" },
                    "50%": { transform: "translateY(-10px)" },
                },
                pulseDot: {
                    "0%, 100%": { opacity: "1", transform: "scale(1)" },
                    "50%": { opacity: "0.4", transform: "scale(0.8)" },
                },
            },
            animation: {
                "fade-up": "fade-up 0.8s cubic-bezier(0.22, 1, 0.36, 1) both",
                shimmer: "shimmer 6s linear infinite",
                float: "float 6s ease-in-out infinite",
                marquee: "marquee 40s linear infinite",
                "pulse-dot": "pulseDot 2s ease-in-out infinite",
            },
        },
    },
    plugins: [],
};
export default config;
