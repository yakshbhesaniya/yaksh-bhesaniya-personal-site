export interface Project {
    title: string;
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
        title: "SWM - Multi-Mission Surface Water Monitoring (M.Tech Thesis)",
        period: "Ongoing",
        problem: "Existing surface-water products (JRC GSW, Dynamic World, DSWE) are Earth-Engine and cloud-native, which excludes exactly the state water boards, district flood cells and small NGOs that need monitoring most. Nearly all report only extent - where the water is - never elevation, so storage volume is unobtainable.",
        solution: "An automated pipeline that measures water extent, surface elevation and storage volume for any water body from a single lat/lon and year range, fusing Sentinel-1/2 and Landsat imagers with SWOT, Jason-2/3, Sentinel-3A/6, ICESat-2 and GEDI altimeters. Imagers give area, altimeters give height; paired through a hypsometric curve they give volume - which neither can produce alone.",
        techStack: ["Python 3.12", "NumPy", "Dask", "rasterio/GDAL", "STAC", "pytest", "uv"],
        challenges: [
            "Running CPU-only inside a hard 6 GB memory budget, bounded by construction through an explicit chunk-sizing model with a process-tree guard as backstop - end-to-end peak is 0.30 GB",
            "Design-based area estimation with confidence intervals (Olofsson et al. 2014) instead of biased pixel counting, verified by reproducing the paper's worked example exactly",
            "Knowing when to refuse an answer: Otsu always returns a threshold, so two independent gates decide whether to trust it - a water-free scene returns zero area with a recorded reason rather than a guess",
            "Proving the tests are worth trusting via a mutation-testing harness that injects real bugs and requires the suite to catch each one",
        ],
        outcome: "Calibrated probabilistic output on every run (Brier 0.0021, ECE 0.023), backed by 209 tests plus mutation testing that surfaced 12 real defects. Three of my own predictions were falsified during verification and documented as findings rather than tuned away - including that AWEIsh does not out-suppress terrain shadow against MNDWI under single-threshold Otsu, and that subpixel mixing, not spectral confusion, is the binding constraint on narrow rivers.",
        codeAccessNote: "Thesis in progress - Apache-2.0, repository to be released",
        featured: true,
    },
    {
        title: "Ledgerline - AI Platform for Credit-Agreement Analysis",
        period: "Apr'26 - Present",
        problem: "Reviewing a corporate loan agreement means answering dozens of standardized questions from a several-hundred-page contract by hand, over days, and every answer has to cite the exact clause it came from - a wrong citation is a legal and financial liability, not a UX bug.",
        solution: "Freelance AI Engineer work for Dhi Labs AI on a production multi-tenant SaaS platform where analysts upload an agreement and an LLM agent answers questions about it with citations linking back to the exact page in the source document. I own the AI pipeline - agent design, document understanding, model routing and answer-quality evaluation - along with the production backend it runs on.",
        techStack: ["FastAPI", "SQLAlchemy", "PostgreSQL", "Redis", "S3", "Next.js", "React", "TypeScript", "Docker"],
        challenges: [
            "Multi-tenant isolation treated as a tested invariant rather than a convention, since cross-tenant leakage is the P0 failure mode for any B2B SaaS and it ships silently",
            "Asynchronous job architecture for long-running, expensive work - durable, horizontally scalable, with crash recovery and live progress streamed to the browser",
            "LLM cost control as a first-class concern: per-run budget enforcement, idempotency on mutating endpoints and per-user concurrency limits, so retries and double-clicks cannot double-bill",
            "Making answer quality measurable - an offline evaluation harness scored against expert ground truth, used as a regression gate before any prompt change ships, because prompt engineering without measurement is superstition",
        ],
        outcome: "Live paid client work rather than a side project, which is what makes the constraints real - auditability, cost ceilings, tenant isolation and uptime. Delivered end-to-end across an async Python backend, an LLM agent system and a TypeScript frontend, under strict typing and integration tests that run against real infrastructure instead of mocks.",
        codeAccessNote: "Proprietary client work - implementation details under NDA",
        featured: true,
    },
    {
        title: "Satellite Image Mosaicking Pipeline (ISRO - SAC)",
        period: "May'26 - Jul'26",
        problem: "Stitching multiple overlapping satellite scenes into a single geometrically corrected mosaic, accurately enough that the result can be trusted as a measurement.",
        solution: "Internship work at the Space Applications Centre (ISRO) enhancing an existing mosaicking pipeline - applying deep-learning-based image matching alongside classical feature matching, broadening the pipeline's ingestion, and improving its output products and geometric quality reporting. Everything was built and deployed on an air-gapped departmental system.",
        techStack: ["Python", "PyTorch", "OpenCV", "GDAL/rasterio", "FastAPI", "React", "NumPy"],
        challenges: [
            "Engineering a system around a deep-learning model rather than merely running one - when inputs are prepared incorrectly the model returns confident, plausible, wrong answers instead of an error, so the correctness burden sits in the data path",
            "Processing rasters far larger than available memory through windowed I/O, so cost scales with the working window rather than the scene",
            "Shipping a full web-based tool into an air-gapped environment with no package registry, CDN or build step available",
        ],
        outcome: "Delivered the enhancements within the internship period and validated them against reference imagery, where real data exposed a concurrency defect that synthetic tests had passed by luck. Project details, data and results are confidential.",
        codeAccessNote: "Confidential ISRO work - overview only",
        featured: true,
    },
    {
        title: "Multi-Agent AI System for Critical Event Monitoring",
        period: "Jan'26 - Current",
        problem: "Monitoring critical events like wildfires, floods, etc. requires processing dynamic environmental data, predicting risks and making instant safety decisions.",
        solution: "Engineered a cohesive pipeline of 5 specialized agents (Data, Detection, Prediction, Decision, Alert) coordinated through a Flask backend. Built a real-time dashboard for interactive pipeline execution and alert management.",
        techStack: ["Python", "Flask", "SQLite", "Leaflet.js", "Bootstrap", "Agentic AI"],
        challenges: [
            "Orchestrating a multi-step agent pipeline for sequential processing",
            "Implementing a weighted scoring model for risk probability (0-100%)",
            "Building a real-time UI to visualize agent status and active alerts",
        ],
        outcome: "Created a functional multi-agent system capable of analyzing weather data, detecting anomalies and automatically triaging alerts.",
        githubUrl: "https://github.com/yakshbhesaniya/Multi-Agentic-AI",
        featured: true,
    },
    {
        title: "MobileBizPro: Real-Time Inventory & Sales Management System",
        period: "May'25 - Jun'25",
        problem: "Mobile retail businesses faced critical inventory visibility and profit-tracking issues, leading to stock discrepancies and revenue loss.",
        solution: "Designed comprehensive backend workflows for sales, returns, supplier analytics and real-time stock valuation. Implemented Redis-based async processing to offload non-blocking operations and improve responsiveness.",
        techStack: ["Node.js", "Express.js", "MongoDB", "Redis", "REST API", "Puppeteer"],
        challenges: [
            "IMEI-level stock ledger keeping real-time accuracy across concurrent transactions",
            "A double-entry-style money layer with balance reversal on edit/delete, so corrections never silently drift the books",
            "A 14-report suite including a 1,700-line P&L engine, optimized for instant profit calculations",
            "Implementing async workflows without blocking critical operations",
        ],
        outcome: "~12,000 LOC across 20 data models, 16 REST route groups and 110+ endpoints, live in production for a real client. Invoice PDF latency cut ~80% via a warm Puppeteer browser pool and layered caching; nightly EJSON-to-zip off-site MongoDB backups with one-command restore.",
        githubUrl: "https://github.com/patoliyabhi7/inventory-backend",
        featured: true,
    },
    {
        title: "Truck Booking & Logistics Optimization System",
        period: "Oct'25 - Dec'25",
        problem: "Manual truck allocation led to coordination overhead, delayed dispatch and inefficient route planning.",
        solution: "Built an Uber-style web application automating booking, fare estimation and end-to-end vehicle tracking with simulated GPS updates. Implemented traffic-aware routing and dynamic driver assignment using FastAPI-based REST APIs.",
        techStack: ["Python", "Flask", "FastAPI", "SQLite", "OpenRouteService", "Leaflet.js"],
        challenges: [
            "Dynamic pricing over distance, cargo weight, mixed truck allocation, a time-of-day multiplier up to 1.25x and per-second-prorated halt charges",
            "Routing under HGV constraints (height/weight/length) via the ORS heavy-goods profile",
            "A 3-tier routing fallback (ORS -> OSRM -> Haversine) giving 100% routing availability",
            "Thread-safe dispatch simulation using threading.local plus SQLite WAL mode",
        ],
        outcome: "20+ REST endpoints organized via Blueprints over a normalized 4-table schema, covering 40+ Mumbai locations. Reduced manual coordination overhead by automating booking workflows and enabled accurate fare estimation with interactive maps.",
        githubUrl: "https://github.com/yakshbhesaniya/Truck-Booking-WebApp",
        featured: true,
    },
    {
        title: "Smart Ambulance Routing & Response Analytics",
        period: "Oct'25 - Dec'25",  
        problem: "Lack of visibility in ambulance operations resulted in delayed responses and inefficient route planning during emergencies.",
        solution: "Designed a GIS-based routing system with automated form tracking for trips. Implemented a robust 3-tier routing fallback system (ORS → OSRM → Haversine) to guarantee route calculation.",
        techStack: ["Python", "Flask", "SQLAlchemy", "SQLite", "Leaflet.js", "OpenRouteService", "OSRM"],
        challenges: [
            "Ensuring 100% routing uptime using a 3-tier API fallback architecture (ORS -> OSRM -> Haversine)",
            "Isochrone service-area analysis at 3/5/7-minute response bands",
            "A route-frequency heat map built by segment-level aggregation of historical trip geometries",
            "Managing persistent trip records with automatic odometer tracking and CSV export",
        ],
        outcome: "Delivered a reliable emergency routing platform across 18+ geocoded IITB pickup points. Improved operational visibility with animated map routing and data-driven response analytics.",
        githubUrl: "https://github.com/yakshbhesaniya/Ambulance-Analysis-IITB",
        featured: true,
    },
    {
        title: "PCA-Based Multispectral Image Processing",
        period: "Nov'25",
        problem: "High spectral redundancy in multispectral satellite imagery led to inefficient storage and processing.",
        solution: "Implemented Principal Component Analysis (PCA) mathematically from scratch. Built a Python GUI to visualize the principal components and reconstruct top-k images.",
        techStack: ["Python", "NumPy", "Tkinter", "scikit-image", "tifffile"],
        challenges: [
            "Computing covariance matrices and eigendecomposition manually",
            "Handling and transforming multi-band Landsat TIFF files",
            "Evaluating reconstruction quality using MSE metrics in a custom GUI",
        ],
        outcome: "Successfully reduced spectral dimensionality while preserving information. Validated mathematical concepts by building the algorithm without high-level ML libraries.",
        githubUrl: "https://github.com/yakshbhesaniya/PCA-Image-Project",
    },
    {
        title: "Landsat Image Classification System",
        period: "Nov'25",
        problem: "Need for automated land cover classification from satellite imagery for environmental monitoring of the Powai Region.",
        solution: "Developed an unsupervised K-Means classification pipeline from scratch (~475 lines across 5 modules) to identify Water, Vegetation and Others across three Landsat acquisitions of Powai, Mumbai spanning 2005-2025.",
        techStack: ["Python", "NumPy", "Tkinter", "Image Processing"],
        challenges: [
            "Implementing K-Means manually in NumPy - vectorized assignment, empty-cluster reinitialization and tolerance convergence on centroid L2-shift below 1e-4 - without scikit-learn",
            "Clustering ~10^6 pixel feature vectors built from NDVI, NDWI and brightness",
            "Solving cluster-to-class correspondence with a centroid heuristic, since K-Means labels are arbitrary",
            "Building a GUI for side-by-side temporal comparisons of water bodies",
        ],
        outcome: "Successfully classified historical terrain data with a fixed RNG seed for reproducibility, enabling automated tracking of land/water changes over a 20-year span.",
        githubUrl: "https://github.com/yakshbhesaniya/landsat-image-classification",
    },
];
