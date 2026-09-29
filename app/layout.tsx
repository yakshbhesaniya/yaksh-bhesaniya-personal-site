import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";
import { Navigation } from "@/components/Navigation";
import { SmoothScroll } from "@/components/SmoothScroll";
import "lenis/dist/lenis.css";

// Clash Display + Satoshi by Indian Type Foundry (Fontshare, free for commercial use), self-hosted.
const clashDisplay = localFont({
    src: [
        { path: "./fonts/ClashDisplay-Medium.woff2", weight: "500" },
        { path: "./fonts/ClashDisplay-Semibold.woff2", weight: "600" },
        { path: "./fonts/ClashDisplay-Bold.woff2", weight: "700" },
    ],
    variable: "--font-display",
    display: "swap",
});

const satoshi = localFont({
    src: [
        { path: "./fonts/Satoshi-Regular.woff2", weight: "400" },
        { path: "./fonts/Satoshi-Medium.woff2", weight: "500" },
        { path: "./fonts/Satoshi-Bold.woff2", weight: "700" },
    ],
    variable: "--font-sans",
    display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
    subsets: ["latin"],
    variable: "--font-mono",
});

export const viewport: Viewport = {
    themeColor: "#07070a",
    colorScheme: "dark",
};

export const metadata: Metadata = {
    metadataBase: new URL(siteConfig.url),
    title: {
        default: `${siteConfig.name} - ${siteConfig.title}`,
        template: `%s | ${siteConfig.name}`,
    },
    description: siteConfig.description,
    keywords: siteConfig.keywords,
    authors: [{ name: siteConfig.author.name, url: siteConfig.url }],
    creator: siteConfig.author.name,
    alternates: {
        canonical: "/",
    },
    category: "technology",
    openGraph: {
        type: "website",
        locale: "en_US",
        url: siteConfig.url,
        title: `${siteConfig.name} - ${siteConfig.title}`,
        description: siteConfig.description,
        siteName: siteConfig.name,
    },
    twitter: {
        card: "summary_large_image",
        title: `${siteConfig.name} - ${siteConfig.title}`,
        description: siteConfig.description,
        creator: "@yakshbhesaniya",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                {/* Marks JS as available so scroll-reveal may hide content; without JS everything stays visible. */}
                <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Person",
                            name: siteConfig.author.name,
                            url: siteConfig.url,
                            image: `${siteConfig.url}/Yaksh.jpeg`,
                            sameAs: [
                                siteConfig.social.linkedin,
                                siteConfig.social.github,
                                siteConfig.social.medium,
                            ],
                            jobTitle: siteConfig.author.role,
                            description: siteConfig.author.bio,
                            email: `mailto:${siteConfig.social.email}`,
                            worksFor: {
                                "@type": "Organization",
                                name: "Dhi Labs AI",
                            },
                            alumniOf: [
                                {
                                    "@type": "CollegeOrUniversity",
                                    name: "Indian Institute of Technology Bombay",
                                },
                                {
                                    "@type": "CollegeOrUniversity",
                                    name: "Gujarat Technological University",
                                },
                            ],
                            award: [
                                "GTU Gold Medalist, Diploma in Information Technology",
                                "GATE (CS) 2025 - 98.94 Percentile",
                                "Rajya Puraskar, The Bharat Scouts & Guides",
                            ],
                            knowsAbout: [
                                "Agentic AI",
                                "Large Language Models",
                                "Multi-Agent Systems",
                                "ReAct Agents",
                                "Model Context Protocol",
                                "Retrieval-Augmented Generation",
                                "LLM Evaluation",
                                "Backend Development",
                                "FastAPI",
                                "Node.js",
                                "PostgreSQL",
                                "Distributed Systems",
                                "Remote Sensing",
                                "Satellite Image Processing",
                            ],
                        }),
                    }}
                />
            </head>
            <body className={`${satoshi.variable} ${clashDisplay.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
                <a
                    href="#about"
                    className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-black"
                >
                    Skip to content
                </a>
                <div className="fixed inset-0 -z-10 ambient-bg" aria-hidden="true" />
                <SmoothScroll />
                <Navigation />
                <main>{children}</main>
                <footer className="border-t border-white/[0.06] py-10">
                    <div className="container mx-auto px-4 sm:px-6 max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-text-secondary">
                        <p>
                            © {new Date().getFullYear()} {siteConfig.name}
                        </p>
                        <nav aria-label="Social" className="flex gap-5">
                            <a href={siteConfig.social.github} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
                            <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
                            <a href={siteConfig.social.medium} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Medium</a>
                        </nav>
                    </div>
                </footer>
            </body>
        </html>
    );
}
