export const skillsData = {
    aiAgents: [
        "LLM Integration",
        "Multi-Agent Orchestration",
        "ReAct Agents & Tool Calling",
        "RAG & Hybrid Retrieval",
        "Model Context Protocol (MCP)",
        "Prompt Engineering",
        "Schema-Constrained Outputs",
        "LLM-as-Judge Evaluation",
        "Context Compression",
        "Token & Cost Budgeting",
        "Vector Databases",
        "AI Observability (Langfuse)",
    ],

    backend: [
        "FastAPI",
        "Node.js / Express.js",
        "Flask",
        "REST API Design",
        "Microservices",
        "Async Processing",
        "Server-Sent Events",
        "JWT, OAuth & RBAC",
        "Idempotency",
        "Rate Limiting",
    ],

    systems: [
        "Multithreading & Thread-Safe Queues",
        "Backpressure & Load Shedding",
        "Worker Pools (SKIP LOCKED)",
        "Row-Level & Advisory Locking",
        "Caching",
        "Memory-Bounded Processing",
        "Profiling",
        "Graceful Degradation",
        "System Design",
    ],

    mlData: [
        "PyTorch",
        "NumPy",
        "Pandas",
        "Scikit-learn",
        "OpenCV",
        "Dask",
        "Bayesian Inference",
        "Clustering",
        "Dimensionality Reduction",
        "Uncertainty Calibration",
    ],

    geospatial: [
        "GDAL / Rasterio",
        "GeoPandas & Shapely",
        "STAC",
        "Cloud Optimized GeoTIFF",
        "QGIS",
        "Leaflet",
        "Photogrammetry (RPC, RANSAC)",
        "Remote Sensing",
    ],

    languages: ["Python", "JavaScript", "TypeScript", "C", "C++", "Java", "SQL"],

    databases: ["PostgreSQL", "MongoDB", "Redis", "MySQL", "SQLite", "S3", "Mongoose", "SQLAlchemy"],

    devops: [
        "Docker & Docker Compose",
        "Git & GitHub Actions",
        "CI/CD",
        "Linux",
        "pytest",
        "mypy & ruff",
        "Postman",
        "Jira",
        "LaTeX",
    ],
};

export type SkillsData = typeof skillsData;
