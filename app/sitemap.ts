import { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

// Single-page site: fragment URLs (/#about) are not separate documents to crawlers,
// so the sitemap lists the page itself plus the downloadable resumes.
export default function sitemap(): MetadataRoute.Sitemap {
    const lastModified = new Date();

    return [
        { url: siteConfig.url, lastModified, changeFrequency: "monthly", priority: 1 },
        ...siteConfig.resumes.map((resume) => ({
            url: `${siteConfig.url}${resume.href}`,
            lastModified,
            changeFrequency: "monthly" as const,
            priority: 0.6,
        })),
    ];
}
