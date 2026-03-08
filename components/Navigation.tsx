import Link from "next/link";
import { siteConfig } from "@/config/site";

export function Navigation() {
    const navItems = [
        { href: "#about", label: "About" },
        { href: "#expertise", label: "Expertise" },
        { href: "#projects", label: "Projects" },
        { href: "#blog", label: "Blog" },
        { href: "#resume", label: "Resume" },
        { href: "#contact", label: "Connect" },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="flex items-center justify-between h-16">
                    <Link href="/" className="font-mono text-success font-bold text-lg">
                        {siteConfig.author.name.split(" ").map(word => word[0]).join("")}
                    </Link>

                    <div className="hidden md:flex items-center gap-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="text-text-secondary hover:text-accent transition-colors text-sm font-medium"
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile menu button - simplified for now */}
                    <div className="md:hidden">
                        <button className="text-text-secondary hover:text-accent">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}
