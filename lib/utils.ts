import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function formatDate(date: string | Date): string {
    const d = new Date(date);
    return d.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
}

function decodeHTMLEntities(text: string) {
    return text
        .replace(/&#x([0-9A-Fa-f]+);/g, (_, dec) => String.fromCharCode(parseInt(dec, 16)))
        .replace(/&#(\d+);/g, (_, dec) => String.fromCharCode(dec))
        .replace(/&nbsp;/g, ' ')
        .replace(/&amp;/g, '&')
        .replace(/&quot;/g, '"')
        .replace(/&apos;/g, "'")
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>');
}

export function calculateReadTime(text: string, title: string = ""): number {
    const wordsPerMinute = 200;
    const plainText = text.replace(/<[^>]*>/g, " ");
    const words = plainText.trim().split(/\s+/).length;
    
    // Medium RSS feeds often only provide a short summary instead of full content.
    // If we only have a tiny snippet, calculate a realistic deterministic mock time (4-9 minutes).
    if (words < 100) {
        let hash = 0;
        const seed = title || text;
        for (let i = 0; i < seed.length; i++) {
            hash = seed.charCodeAt(i) + ((hash << 5) - hash);
        }
        return 5 + Math.abs(hash % 5); // Returns 5-9 minutes
    }

    return Math.max(1, Math.ceil(words / wordsPerMinute));
}

export function extractExcerpt(html: string, maxLength: number = 200): string {
    // Remove HTML tags and extra whitespace
    const text = html.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
    
    // Decode HTML entities
    const decodedText = decodeHTMLEntities(text);

    if (decodedText.length <= maxLength) return decodedText;

    // Find the last space within maxLength
    const truncated = decodedText.substring(0, maxLength);
    const lastSpace = truncated.lastIndexOf(" ");

    return truncated.substring(0, lastSpace > 0 ? lastSpace : maxLength) + "...";
}
