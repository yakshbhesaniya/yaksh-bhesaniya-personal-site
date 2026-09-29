export interface Project {
    title: string;
    /** Short label shown above the title, e.g. "M.Tech Thesis" or "Client Project". */
    category: string;
    period: string;
    problem: string;
    solution: string;
    techStack: string[];
    /** Omitted for overview-only entries where details cannot be disclosed. */
    challenges?: string[];
    outcome: string;
    /** Omitted for proprietary / client / restricted-access work. */
    githubUrl?: string;
    /** Shown in place of a repo link when the code cannot be public. */
    codeAccessNote?: string;
    featured?: boolean;
}

export const projectsData: Project[] = [
    {
        title: "SETU - Spec-Driven Agentic Extraction of Scientific Data",
        category: "M.Tech Thesis · Prof. Pritam Das",
        period: "2026 - Present",
        problem: "Scientific values - a dam's seepage rate, a material's bandgap - are scattered across thousands of papers in many languages and formats. Building a dataset means reading them by hand, and an LLM that simply 'extracts' will confidently invent numbers with no way to audit where they came from.",
        solution: "An agentic LLM pipeline that turns scientific literature into a provenance-tracked dataset, storing the page and verbatim quote behind every value. A config-driven Extraction Spec keeps domain, format and model out of the code, so the same pipeline serves a new field with no code changes. Hybrid retrieval (BGE-M3 vectors + SQLite FTS5, fused by reciprocal rank) feeds a self-hosted Qwen model on vLLM.",
        techStack: ["Python", "vLLM", "Qwen", "Tool Calling", "Guided JSON", "BGE-M3", "SQLite FTS5", "pint", "Pydantic"],
        challenges: [
            "An escalation ladder: self-consistency (2 of 3 samples must agree), then a tool-calling agent loop capped at 5 turns, then Qwen3-235B, then human review - so the expensive model only runs on the hard cases",
            "Three validation gates before any value is accepted: JSON-schema checks, unit and dimension checks with pint, and grounding that requires the quote to appear verbatim on the cited page",
            "Locale-aware number parsing - '1.234,56' in a German paper is 1234.56, a 1000x error that would otherwise pass every other check",
            "Generality proven by invariants, not claimed: no domain term, vendor SDK or format branch is allowed outside its one module",
        ],
        outcome: "Every accepted value in the dataset is traceable to a page and a verbatim quote, and per-gate rejection rates are reported as quality metrics rather than hidden - the grounding gate is a free, domain-agnostic guard against hallucination.",
        codeAccessNote: "Thesis in progress - repository to be released",
        featured: true,
    },
    {
        title: "Ledgerline - LLM Agent Platform for Credit-Agreement Analysis",
        category: "Client Work · Dhi Labs AI",
        period: "Apr'26 - Present",
        problem: "Reviewing a corporate loan agreement means answering dozens of standardised covenant questions from a 350+ page contract by hand, and every answer must cite the exact clause it came from - a wrong citation is a legal and financial liability, not a UX bug.",
        solution: "A production multi-tenant SaaS platform where analysts upload an agreement and a multi-phase LLM agent (Discovery, ReAct, Synthesis) answers questions over 23 document tools, with pixel-accurate citations back into the source PDF. I own the agent architecture, document preprocessing, model routing and evaluation, plus the FastAPI backend it runs on.",
        techStack: ["Python", "FastAPI", "PostgreSQL 16", "Redis", "S3", "MCP", "Langfuse", "OpenAI / Anthropic / Grok", "Docker"],
        challenges: [
            "Right-sizing the model per task and caching prompts and artifacts: extraction cost $10 → $1-2 and end-to-end answering $5-6 → $2 per agreement, with no accuracy regression",
            "A deterministic 8-stage preprocessing pipeline that indexes PDFs into TOC, definitions and cross-references, so the agent reasons over document structure instead of raw chunks",
            "An offline LLM-as-judge harness scored against 10 expert-authored ground-truth workbooks, gating every prompt or model change",
            "Multi-tenant backend with a SELECT ... FOR UPDATE SKIP LOCKED worker pool, advisory-lock watchdog, 24h idempotency keys and a mid-run budget guard",
        ],
        outcome: "Live paid client work exposed over the Model Context Protocol (38 tools, 6 resources, 4 prompts), backed by 528 tests that run against real PostgreSQL and Redis rather than mocks.",
        codeAccessNote: "Proprietary client work",
        featured: true,
    },
    {
        title: "StreamScribe - Real-Time Scene Captioning over WebRTC",
        category: "Self-Project",
        period: "Jun'26 - Aug'26",
        problem: "A camera feed produces 10-30 frames a second, but almost nothing meaningful happens in most of them. Captioning every frame is wasteful, slow and produces a wall of duplicate text.",
        solution: "A 3-stage real-time pipeline that ingests webcam or screen-share over WebRTC (aiortc), detects meaningful scene changes with YOLOv8 + ByteTrack, captions them with a vision-language model and streams captions back to the browser over WebSockets - then writes a post-session narrative with a MAP-REDUCE LLM orchestrator.",
        techStack: ["Python", "FastAPI", "WebRTC (aiortc)", "PyTorch", "YOLOv8", "ByteTrack", "WebSockets", "React", "SQLite"],
        challenges: [
            "A two-tier deduplication gate - track IDs, then cosine similarity (0.985) on pooled embeddings - cutting vision-language model calls by 60-70%",
            "Bounded thread-safe queues between stages, giving natural backpressure and drop-frames-over-lag behaviour so a slow GPU degrades caption rate instead of stalling ingest",
            "Privacy by design: only text ever leaves the machine, never raw video frames",
        ],
        outcome: "2-3s end-to-end caption latency under sustained streaming on a single GPU, with graceful degradation instead of stalls when the model falls behind.",
        featured: true,
    },
    {
        title: "Satellite Image Mosaicking Pipeline",
        category: "Internship · ISRO SAC",
        period: "May'26 - Jul'26",
        problem: "Stitching multiple overlapping satellite scenes into a single geometrically corrected mosaic, accurately enough that the result can be trusted as a measurement.",
        solution: "Internship work at the Space Applications Centre (ISRO) on a mosaicking workflow that refines RPC sensor models from tie-point measurements - evaluating deep-learning image matching alongside classical SIFT/SURF, and contributing to Cloud Optimized GeoTIFF output, quick-looks, GIS footprints and geometric quality reporting.",
        techStack: ["Python", "PyTorch", "OpenCV", "GDAL / Rasterio", "NumPy", "FastAPI", "React"],
        outcome: "Contributed a browser-based interface for inspecting matching results without desktop GIS, alongside the product-generation tooling. Project details, data and results are confidential.",
        codeAccessNote: "Confidential ISRO work - overview only",
        featured: true,
    },
    {
        title: "Multi-Agentic AI for Critical Events Monitoring & Management",
        category: "Seminar Project · GNR-694, IIT Bombay",
        period: "Jan'26 - May'26",
        problem: "Emergency response to an earthquake needs infrastructure and transportation risks assessed together and fused into one prioritised decision - and an LLM that hallucinates risk levels is worse than no assistant at all.",
        solution: "A hierarchical multi-agent architecture where a Coordinator agent decomposes a scenario into sub-tasks for specialist Infrastructure and Transportation agents, then fuses their structured JSON reports into a single prioritised response plan with an explicit confidence level and traceable evidence.",
        techStack: ["Node.js", "Express.js", "Google Gemini API", "Multi-Agent Orchestration", "Structured Outputs"],
        challenges: [
            "Grounding each agent with a curated knowledge base (6 topic categories, ~50 seismic and urban-vulnerability facts) to reduce hallucination",
            "Schema-constrained JSON outputs with parsing and fallback error handling",
            "Design grounded in a comparative survey of CAMEL, AutoGen, ReAct and Toolformer",
        ],
        outcome: "Scenarios can be replayed, diffed and compared across model and prompt versions over a REST API and CLI runner, making evaluation repeatable across releases.",
        githubUrl: "https://github.com/yakshbhesaniya/multi-agent-earthquake-response",
        featured: true,
    },
    {
        title: "MobileBizPro - Retail Inventory & Accounting ERP",
        category: "Client Project · live in production",
        period: "May'25 - Jun'25",
        problem: "A multi-branch mobile retail business had no reliable view of stock or profit, leading to duplicate sales, stock discrepancies and revenue it couldn't account for.",
        solution: "A multi-location retail ERP backend of 20 data models, 16 route groups and 110+ endpoints, used daily for live billing, stock management and end-of-day reconciliation across branches.",
        techStack: ["Node.js", "Express 5", "MongoDB", "Redis", "JWT", "RBAC", "Puppeteer", "node-cron"],
        challenges: [
            "An IMEI-level stock ledger tracking every handset as a serialised unit, preventing duplicate sales under concurrent billing",
            "A double-entry-style money layer with automatic balance reversal, powering a 14-report suite with drill-down P&L",
            "Invoice PDF latency cut ~80% with a warm process pool and multi-layer caching",
        ],
        outcome: "Live in production for a real client, with nightly off-site backups and a one-command restore path tested in disaster-recovery drills before handover.",
        githubUrl: "https://github.com/yakshbhesaniya/MobileBizPro",
        featured: true,
    },
    {
        title: "TruckIt - Real-Time Logistics Booking & Fleet Tracking",
        category: "Course Project · GNR 605",
        period: "Oct'25 - Dec'25",
        problem: "Manual truck allocation meant coordination overhead, delayed dispatch and opaque pricing for shippers.",
        solution: "A two-sided freight booking system with separate shipper and driver portals, live map tracking and multi-stop planning, exposing 20+ REST endpoints via Flask Blueprints over a normalised 4-table schema.",
        techStack: ["Python", "Flask", "SQLite (WAL)", "Leaflet.js", "OpenRouteService", "OSRM", "Multithreading"],
        challenges: [
            "Routing on the ORS heavy-goods profile behind a three-tier ORS → OSRM → Haversine fallback",
            "A thread-safe live-tracking simulator (threading.local + SQLite WAL) syncing two clients in real time without a broker",
            "Dynamic pricing over distance, cargo weight, fleet mix and peak-hour multipliers up to 1.25x",
        ],
        outcome: "Every quote is reproducible from the booking parameters alone, and routing stays available when an upstream provider is down or rate-limited.",
        githubUrl: "https://github.com/yakshbhesaniya/Truck-Booking-WebApp",
    },
    {
        title: "GIS Ambulance Routing & Emergency Response Analytics",
        category: "Self-Project",
        period: "Oct'25 - Dec'25",
        problem: "Campus ambulance operations had no visibility into response times or route patterns, and trips were logged by hand.",
        solution: "A full-stack Flask + Leaflet application that logs, routes and analyses ambulance trips across 18+ geocoded pickup points on an OpenStreetMap basemap.",
        techStack: ["Python", "Flask", "SQLAlchemy", "SQLite", "Leaflet.js", "OpenRouteService", "OSRM"],
        challenges: [
            "A 3-tier routing fallback that keeps distance and ETA working under API-key exhaustion",
            "Isochrone service-area zones (3/5/7-minute) and a route-frequency heat map from trip-segment aggregation",
        ],
        outcome: "Replaced manual record-keeping with odometer tracking, trip logging and CSV export for response-time reporting.",
        githubUrl: "https://github.com/yakshbhesaniya/Ambulance-Analysis-IITB",
    },
    {
        title: "Landsat Land-Cover Classification & Water-Body Change Detection",
        category: "Self-Project",
        period: "Nov'25",
        problem: "Tracking how water bodies around Powai changed over two decades, without any labelled training data.",
        solution: "K-Means implemented from first principles in NumPy over ~1 million pixel feature vectors built from NDVI, NDWI and brightness, with a centroid-statistics heuristic solving the cluster-to-class correspondence problem.",
        techStack: ["Python", "NumPy", "Rasterio", "Matplotlib", "Tkinter"],
        challenges: [
            "Vectorised centroid assignment, empty-cluster reinitialisation and L2-shift convergence - no scikit-learn",
            "Deterministic output under a fixed seed, validated against ground-truth land-cover samples",
        ],
        outcome: "Change maps quantifying water-body loss and gain across 2005-2025, with per-class accuracy reported for spectrally similar cover types.",
        githubUrl: "https://github.com/yakshbhesaniya/landsat-image-classification",
    },
    {
        title: "Principal Component Transform for Multi-Band Imagery",
        category: "Course Project · GNR 607",
        period: "Oct'25 - Nov'25",
        problem: "Multispectral satellite bands are highly redundant, wasting storage and processing.",
        solution: "PCA/PCT implemented from scratch on 11-band Landsat-8 imagery - manual mean-centering, covariance by matrix multiplication and eigenvector projection - with an interactive GUI to visualise components and reconstruct from the top-k.",
        techStack: ["Python", "NumPy", "Tkinter", "tifffile", "scikit-image"],
        outcome: "Reports per-component variance explained alongside reconstruction MSE for each top-k choice, making the cost of compression explicit.",
        githubUrl: "https://github.com/yakshbhesaniya/PCA-Image-Project",
    },
];
