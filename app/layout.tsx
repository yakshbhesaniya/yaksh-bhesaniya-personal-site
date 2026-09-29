import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";
import { Navigation } from "@/components/Navigation";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
    subsets: ["latin"],
    variable: "--font-jetbrains-mono",
});

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
        <html lang="en" className="scroll-smooth">
            <head>
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
            <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
                <Navigation />
                <main>{children}</main>
                <footer className="border-t border-border py-8">
                    <div className="container mx-auto px-4 max-w-6xl text-center">
                        <p className="text-text-secondary text-sm">
                            © {new Date().getFullYear()} {siteConfig.name}.
                        </p>
                        <p className="text-text-secondary text-xs mt-2">
                            Designed for production. Engineered for scale.
                        </p>
                    </div>
                </footer>
            </body>
        </html>
    );
}
