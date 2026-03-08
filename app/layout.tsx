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
    openGraph: {
        type: "website",
        locale: "en_US",
        url: siteConfig.url,
        title: `${siteConfig.name} - ${siteConfig.title}`,
        description: siteConfig.description,
        siteName: siteConfig.name,
        images: [
            {
                url: `${siteConfig.url}/og-image.png`,
                width: 1200,
                height: 630,
                alt: siteConfig.name,
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: `${siteConfig.name} - ${siteConfig.title}`,
        description: siteConfig.description,
        images: [`${siteConfig.url}/og-image.png`],
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
                            image: `${siteConfig.url}/og-image.png`,
                            sameAs: [
                                siteConfig.social.linkedin,
                                siteConfig.social.github,
                                siteConfig.social.medium,
                            ],
                            jobTitle: siteConfig.author.role,
                            description: siteConfig.author.bio,
                            email: siteConfig.social.email,
                            alumniOf: [
                                {
                                    "@type": "EducationalOrganization",
                                    name: "IIT Bombay",
                                },
                                {
                                    "@type": "EducationalOrganization",
                                    name: "Gujarat Technological University",
                                },
                            ],
                            award: "GTU Gold Medalist 2021",
                            knowsAbout: [
                                "Backend Development",
                                "Node.js",
                                "TypeScript",
                                "Microservices Architecture",
                                "Distributed Systems",
                                "REST API Design",
                                "Database Optimization",
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
