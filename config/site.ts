export const siteConfig = {
    name: "Yaksh Bhesaniya",
    title: "Backend Engineer | Node.js | Python | Distributed Systems",
    description: "I design and build scalable backend systems that survive real traffic, real failures and real production environments.",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://yakshbhesaniya.com",

    author: {
        name: "Yaksh Bhesaniya",
        email: "yakshb.iitb@gmail.com",
        role: "Backend Engineer",
        tagline: "Backend Engineer | Node.js | Python | Distributed Systems",
        bio: "GTU Gold Medalist specializing in scalable backend systems, microservices architecture and production-grade engineering.",
    },

    social: {
        linkedin: "https://www.linkedin.com/in/yaksh-bhesaniya/",
        github: "https://github.com/yakshbhesaniya",
        medium: "https://yakshbhesaniya.medium.com/",
        email: "yakshb.iitb@gmail.com",
    },

    keywords: [
        "Backend Developer India",
        "Node.js Backend Engineer",
        "Scalable Systems Developer",
        "Yaksh Bhesaniya",
        "Microservices Node.js Expert",
        "GTU Gold Medalist Developer",
        "TypeScript Backend Developer",
        "Distributed Systems Engineer",
    ],

    // Featured Medium blog playlists
    mediumPlaylists: [
        "node-js-microservices-playbook-a-devs-no-fluff-guide-to-production-grade-architecture-8361ba525d9a",
        "handling-failures-retries-timeouts-circuit-breakers-in-microservices-f1f31db921f2",
        "dear-devs-stop-dumping-everything-in-index-js-a-clean-node-js-structure-for-2025-f3f0a32c7f3b",
        "event-driven-architecture-in-practice-building-async-flows-that-work-8dbe2d1f73a3",
        "worker-pools-parallelism-in-node-js-with-threads-bullmq-6366aa1ba7c4",
        "rate-limiting-throttling-service-hardening-defending-your-microservices-like-a-pro-f71d95487d25",
    ],
};

export type SiteConfig = typeof siteConfig;
