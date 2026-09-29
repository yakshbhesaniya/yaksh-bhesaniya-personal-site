export interface Experience {
    role: string;
    company: string;
    period: string;
    type: "work" | "education" | "achievement" | "leadership";
    /** Optional sub-line, e.g. the product or location. */
    context?: string;
    /** Headline numbers shown as stat tiles. */
    metrics?: { value: string; label: string }[];
    /** Grade shown prominently on education cards. */
    score?: string;
    description: string[];
    skills?: string[];
}

export const experienceData: Experience[] = [
    // ---------------------------------------------------------------- Work
    {
        role: "AI Engineer (Freelance)",
        company: "Dhi Labs AI",
        context: "Ledgerline (credit-agreement AI) · Outlyn (ed-tech)",
        period: "Apr'26 - Present",
        type: "work",
        metrics: [
            { value: "$10 → $1-2", label: "LLM extraction cost per agreement" },
            { value: "350+", label: "page agreements answered" },
            { value: "38", label: "MCP tools exposed" },
        ],
        description: [
            "Built Ledgerline's multi-phase LLM agent (Discovery → ReAct → Synthesis) that answers covenant questions with page-accurate citations",
            "Cut cost by right-sizing models per task and caching, gated by an LLM-as-judge eval so savings never cost accuracy",
            "Owned the multi-tenant FastAPI / PostgreSQL / Redis backend, with multi-provider LLM failover and Langfuse tracing",
            "Built Outlyn's AI study-coach agent, cutting its model calls per night from ~5 to ~2",
        ],
        skills: ["Python", "FastAPI", "PostgreSQL", "Redis", "LLM Agents", "MCP", "Langfuse"],
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
        description: ["Coordinated sponsors, mentors and participants across colleges"],
    },
    {
        role: "Lead Organizer - TechXIT 2022",
        company: "Institute-level technical festival",
        period: "Sep'22 - Oct'22",
        type: "leadership",
        description: [],
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
        description: ["Ranked first across 150+ institutes affiliated with Gujarat Technological University"],
    },
    {
        role: "Finalist - HackSVIT",
        company: "HackSVIT Hackathon",
        period: "May'22",
        type: "achievement",
        description: [],
    },
    {
        role: "Winner - Hacktober Hacks",
        company: "Hacktober Hacks Hackathon",
        period: "Oct'21",
        type: "achievement",
        description: [],
    },
    {
        role: "Winner - Hackout'21 (Pre-made Projects)",
        company: "Pre-made projects track",
        period: "Sep'21",
        type: "achievement",
        description: [],
    },
    {
        role: "Best Student Award - L.J. Polytechnic",
        company: "L.J. Polytechnic",
        period: "Nov'19",
        type: "achievement",
        description: [],
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
        role: "M.Tech",
        company: "IIT Bombay",
        period: "2027",
        type: "education",
        score: "9.18",
        description: [
            "Coursework: Machine Learning, AI, Applied ML, Satellite Image Processing, Remote Sensing, GIS",
        ],
    },
    {
        role: "B.E., Information Technology",
        company: "Vishwakarma Government Engineering College (GTU)",
        period: "2024",
        type: "education",
        score: "8.88",
        description: [
            "Coursework: Data Structures & Algorithms, DBMS, Operating Systems, Computer Networks, Software Engineering",
        ],
    },
    {
        role: "Diploma, Information Technology",
        company: "L.J. Polytechnic (GTU)",
        period: "2021",
        type: "education",
        score: "10.00",
        description: ["Foundation in programming, databases and networking"],
    },
];
