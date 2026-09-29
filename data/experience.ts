export interface Experience {
    role: string;
    company: string;
    period: string;
    type: "work" | "education" | "achievement" | "leadership";
    /** Optional sub-line, e.g. the product or location. */
    context?: string;
    description: string[];
    skills?: string[];
}

export const experienceData: Experience[] = [
    // ---------------------------------------------------------------- Work
    {
        role: "AI Engineer (Freelance)",
        company: "Dhi Labs AI",
        context: "Ledgerline (credit-agreement AI) · Outlyn (GATE CS & DA ed-tech) · team of 4",
        period: "Apr'26 - Present",
        type: "work",
        description: [
            "Engineered Ledgerline's multi-phase LLM agent (Discovery, ReAct, Synthesis) answering covenant questions over 350+ page credit agreements via 23 document tools, capped at 15 iterations with full tool-call tracing for cost, latency and stop reason",
            "Cut client LLM spend per 350-page agreement - extraction $10 → $1-2, end-to-end answering $5-6 → $2 - by right-sizing the model per task and caching prompts and artifacts, with no accuracy regression on the expert-authored ground-truth benchmark",
            "Built a deterministic 8-stage LLM preprocessing pipeline indexing raw PDFs into TOC, definitions and cross-references, so the agent reasons over document structure rather than raw text chunks",
            "Implemented multi-provider LLM routing (OpenAI / Anthropic / Grok) in YAML with prompt caching, automatic failover and Langfuse cost and latency tracing - provider swaps are config-only",
            "Built an offline LLM-as-judge evaluation harness scoring answers against 10 expert-authored ground-truth Q&A workbooks, used as a regression gate before any prompt or model change ships",
            "Delivered precomputed, pixel-accurate citation highlighting (page + bounding boxes) with progressive resolution, a shared artifact cache and runtime warmup, cutting citation cold-open from ~8s to instant",
            "Exposed the platform over the Model Context Protocol (38 tools, 6 resources, 4 prompts) and owned the multi-tenant FastAPI / PostgreSQL / Redis backend behind it - SKIP LOCKED worker pool, advisory-lock watchdog, 24h idempotency keys and 528 passing tests",
            "Built Outlyn's AI study-coach agent that reads a student's progress, plans the next day and saves it in one database transaction; pre-loading its most-requested data cut model calls from ~5 to ~2 a night and cost by more than half",
            "Added cross-provider LLM fallback (Anthropic, OpenRouter) that pauses a repeatedly failing model and reroutes to a backup, with every switch logged, plus a PostgreSQL-table job queue with retries and failure-only alerting",
        ],
        skills: [
            "Python",
            "FastAPI",
            "PostgreSQL",
            "Redis",
            "S3",
            "ReAct Agents",
            "MCP",
            "RAG",
            "Langfuse",
            "OpenAI / Anthropic / Grok",
            "Pydantic",
            "Docker",
        ],
    },
    {
        role: "Project Intern",
        company: "Space Applications Centre (SAC), ISRO",
        context: "Ahmedabad",
        period: "May'26 - Jul'26",
        type: "work",
        description: [
            "Contributed to a satellite image mosaicking workflow that stitches overlapping high-resolution scenes into a single geometrically corrected mosaic by refining RPC sensor models from tie-point measurements",
            "Worked on the image-matching stage, evaluating deep-learning-based image matching alongside classical feature-based methods (SIFT/SURF) and comparing the geometric quality each achieves",
            "Contributed to product generation and review tooling - Cloud Optimized GeoTIFF output, quick-look overlays, GIS footprints and geometric quality reporting - including a browser-based interface for inspecting matching results without desktop GIS",
        ],
        skills: [
            "Python",
            "PyTorch (TorchScript)",
            "OpenCV",
            "GDAL / Rasterio",
            "FastAPI",
            "React",
            "RANSAC",
            "RPC Sensor Models",
            "COG",
            "Photogrammetry",
        ],
    },
    {
        role: "Freelance Software Developer",
        company: "Self-Employed",
        period: "Jun'24 - Jun'25",
        type: "work",
        description: [
            "Delivered production backend systems for retail clients, owning requirements through schema design, implementation and deployment, and handing each system over with operating documentation",
            "Implemented JWT authentication and role-based access control across multiple user tiers, plus inventory, billing and payment workflows on MongoDB and PostgreSQL with third-party payment, messaging and invoicing integrations",
        ],
        skills: ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "Redis", "JWT", "RBAC", "Linux"],
    },
    {
        role: "Software Engineer Intern",
        company: "RapidOps Inc.",
        period: "Jan'24 - May'24",
        type: "work",
        description: [
            "Implemented backend APIs for production-scale applications using Node.js and REST service patterns under load",
            "Optimised database queries and API flows by profiling slow paths, refactoring data access and adding indexes on hot query paths",
        ],
        skills: ["Node.js", "Express.js", "MongoDB", "MySQL", "Query Optimisation"],
    },
    {
        role: "Software Engineer Intern",
        company: "HumBee Studio",
        period: "Feb'23 - May'23",
        type: "work",
        description: [
            "Implemented backend modules and features for web applications across the request-handling and data layers",
        ],
        skills: ["JavaScript", "Node.js", "REST APIs"],
    },

    // ---------------------------------------------------------- Leadership
    {
        role: "Teaching Assistant",
        company: "IIT Bombay",
        period: "Jul'25 - Present",
        type: "leadership",
        description: ["Teaching and mentoring 30+ postgraduate students through labs, doubt sessions and grading"],
    },
    {
        role: "Interview Coordinator",
        company: "Placement Office, IIT Bombay",
        period: "Oct'25 - Dec'25",
        type: "leadership",
        description: [
            "Part of a 300+ member team running campus placements for 2,100+ students across 10+ companies - tests, PPTs and interview schedules",
        ],
    },
    {
        role: "Lead Organizer - HackVGEC 2023",
        company: "State-level hackathon",
        period: "Feb'23 - Apr'23",
        type: "leadership",
        description: ["Led organisation of a state-level hackathon - sponsors, mentors and participants across colleges"],
    },
    {
        role: "Lead Organizer - TechXIT 2022",
        company: "Institute-level technical festival",
        period: "Sep'22 - Oct'22",
        type: "leadership",
        description: ["Led organisation of the institute's technical festival"],
    },

    // -------------------------------------------------------- Achievements
    {
        role: "GATE (CS) - 98.94 Percentile",
        company: "All India Rank 1814",
        period: "Mar'25",
        type: "achievement",
        description: ["Top ~1% nationally in the Graduate Aptitude Test in Engineering, Computer Science"],
    },
    {
        role: "Gold Medalist - Diploma in IT",
        company: "Gujarat Technological University",
        period: "Jan'22",
        type: "achievement",
        description: ["Ranked first across 150+ affiliated institutes with a perfect 10.00 CGPA"],
    },
    {
        role: "Finalist - HackSVIT",
        company: "HackSVIT Hackathon",
        period: "May'22",
        type: "achievement",
        description: ["Reached the finals of the HackSVIT hackathon"],
    },
    {
        role: "Winner - Hacktober Hacks",
        company: "Hacktober Hacks Hackathon",
        period: "Oct'21",
        type: "achievement",
        description: ["Won the Hacktober Hacks hackathon"],
    },
    {
        role: "Winner - Hackout'21",
        company: "Hackout'21 (Pre-made Projects)",
        period: "Sep'21",
        type: "achievement",
        description: ["Won the pre-made projects track at Hackout'21"],
    },
    {
        role: "Best Student Award",
        company: "L.J. Polytechnic",
        period: "Nov'19",
        type: "achievement",
        description: ["Best Student Award, Diploma in Information Technology"],
    },
    {
        role: "Rajya Puraskar",
        company: "The Bharat Scouts & Guides",
        period: "Feb'17",
        type: "achievement",
        description: ["Highest state-level honour of The Bharat Scouts & Guides, awarded by the Governor of Gujarat"],
    },

    // ----------------------------------------------------------- Education
    {
        role: "M.Tech, Geoinformatics (CSRE)",
        company: "Indian Institute of Technology Bombay",
        period: "2027",
        type: "education",
        description: [
            "CGPA: 9.18",
            "Thesis: SETU - spec-driven agentic extraction of scientific data, under Prof. Pritam Das",
            "Coursework: Machine Learning, AI, Applied ML, Satellite Image Processing, Remote Sensing, GIS",
        ],
    },
    {
        role: "B.E., Information Technology",
        company: "Vishwakarma Government Engineering College (GTU)",
        period: "2024",
        type: "education",
        description: [
            "CGPA: 8.88",
            "Coursework: Data Structures & Algorithms, DBMS, Operating Systems, Computer Networks, Software Engineering",
        ],
    },
    {
        role: "Diploma, Information Technology",
        company: "L.J. Polytechnic (GTU)",
        period: "2021",
        type: "education",
        description: ["CGPA: 10.00 - GTU Gold Medalist"],
    },
];
