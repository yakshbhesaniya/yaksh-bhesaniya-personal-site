import Parser from "rss-parser";
import { extractExcerpt, calculateReadTime } from "./utils";

export interface MediumPost {
    title: string;
    link: string;
    pubDate: string;
    author: string;
    content: string;
    excerpt: string;
    readTime: number;
    categories: string[];
}

const parser = new Parser();

export async function getMediumPosts(): Promise<MediumPost[]> {
    try {
        const feed = await parser.parseURL("https://medium.com/feed/@yakshbhesaniya");

        const posts: MediumPost[] = feed.items.map((item) => ({
            title: item.title || "",
            link: item.link || "",
            pubDate: item.pubDate || "",
            author: item.creator || "Yaksh Bhesaniya",
            content: item["content:encoded"] || item.content || "",
            excerpt: extractExcerpt(item["content:encoded"] || item.content || ""),
            readTime: calculateReadTime(item["content:encoded"] || item.content || "", item.title),
            categories: item.categories || [],
        }));

        return posts;
    } catch (error) {
        console.error("Error fetching Medium posts:", error);
        return [];
    }
}

import { siteConfig } from "@/config/site";

import { featuredBlogs } from "@/data/blog";

// Featured posts can be pinned by configuration
export async function getFeaturedPosts(limit: number = 6): Promise<MediumPost[]> {
    // Medium's RSS feed limits responses to the 10 most recent posts. 
    // To explicitly feature high-view older posts, we use a curated local list.
    return featuredBlogs.slice(0, limit);
}
