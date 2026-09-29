export const siteConfig = {
    name: "Yaksh Bhesaniya",
    title: "AI Engineer | Agentic AI, LLM Systems & Backend",
    description: "I build production LLM agent systems and the backends they run on - currently for a paying client at Dhi Labs AI - while my M.Tech thesis at IIT Bombay builds an agentic pipeline that extracts provenance-tracked data from scientific papers.",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://yakshbhesaniya.vercel.app",

    author: {
        name: "Yaksh Bhesaniya",
        email: "yakshb.iitb@gmail.com",
        role: "AI Engineer",
        tagline: "Agentic AI | LLM Systems | Backend",
        bio: "M.Tech student at IIT Bombay and freelance AI Engineer building production LLM agents, evaluation harnesses and the multi-tenant backends they run on. Former ISRO SAC intern and GTU Gold Medalist.",
    },

    /** Credential strip shown above the fold - the proof, not the promise. */
    credentials: [
        { value: "Dhi Labs AI", label: "AI Engineer (Freelance)" },
        { value: "IIT Bombay", label: "M.Tech" },
        { value: "ISRO SAC", label: "Project Intern" },
        { value: "RapidOps Inc.", label: "Software Engineer Intern" },
    ],

    social: {
        linkedin: "https://www.linkedin.com/in/yaksh-bhesaniya/",
        github: "https://github.com/yakshbhesaniya",
        medium: "https://yakshbhesaniya.medium.com/",
        email: "yakshb.iitb@gmail.com",
    },

    resumes: [
        { label: "Resume - AI / Agentic", href: "/resume/Yaksh_Bhesaniya_Resume.pdf" },
        { label: "Resume - Backend / Systems", href: "/resume/Yaksh_Bhesaniya_Resume_Backend_Systems.pdf" },
    ],

    keywords: [
        "Yaksh Bhesaniya",
        "AI Engineer",
        "Agentic AI Engineer",
        "LLM Engineer",
        "LLM Agent Developer",
        "Multi-Agent AI Systems",
        "ReAct Agents",
        "Model Context Protocol",
        "MCP Server Developer",
        "RAG Engineer",
        "LLM Evaluation",
        "Backend Engineer India",
        "FastAPI Python Developer",
        "Node.js Backend Engineer",
        "PostgreSQL Redis Backend",
        "Distributed Systems Engineer",
        "IIT Bombay M.Tech",
        "IIT Bombay AI Engineer",
        "ISRO SAC Intern",
        "Satellite Image Processing",
        "Remote Sensing Engineer",
        "GTU Gold Medalist",
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
