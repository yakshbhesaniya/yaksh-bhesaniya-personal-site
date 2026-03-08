export interface Project {
    title: string;
    period: string;
    problem: string;
    solution: string;
    techStack: string[];
    challenges: string[];
    outcome: string;
    githubUrl: string;
    featured?: boolean;
}

export const projectsData: Project[] = [
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
        techStack: ["Node.js", "Express.js", "MongoDB", "Redis", "REST API"],
        challenges: [
            "Ensuring real-time stock accuracy across concurrent transactions",
            "Optimizing database queries for instant profit calculations",
            "Implementing async workflows without blocking critical operations",
        ],
        outcome: "Improved backend responsiveness through Redis-based async processing. Enabled real-time visibility into inventory and profit metrics for mobile retail operations.",
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
            "Implementing dynamic pricing based on distance, weight, time and traffic",
            "Real-time driver assignment and dispatch simulation (pickup to drop)",
            "Building a multi-tiered routing fallback system for reliability",
        ],
        outcome: "Reduced manual coordination overhead by automating booking workflows. Enabled faster dispatch and accurate fare estimation with interactive maps.",
        githubUrl: "https://github.com/yakshbhesaniya/Truck-Booking-WebApp",
        featured: true,
    },
    {
        title: "Smart Ambulance Routing & Response Analytics",
        period: "Oct'25 - Dec'25",  
        problem: "Lack of visibility in ambulance operations resulted in delayed responses and inefficient route planning during emergencies.",
        solution: "Designed a GIS-based routing system with automated form tracking for trips. Implemented a robust 3-tier routing fallback system (ORS → OSRM → Haversine) to guarantee route calculation.",
        techStack: ["Python", "Flask", "SQLite", "Leaflet.js", "OpenRouteService"],
        challenges: [
            "Ensuring 100% routing uptime using a 3-tier API fallback architecture",
            "Building interactive isochrone zone analytics and heatmaps",
            "Managing persistent trip records and odometer tracking",
        ],
        outcome: "Delivered a reliable emergency routing platform. Improved operational visibility with animated map routing and data-driven response analytics.",
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
        solution: "Developed an unsupervised K-Means classification pipeline from scratch to identify Water, Vegetation and Others from Landsat images (2005-2025).",
        techStack: ["Python", "NumPy", "Tkinter", "Image Processing"],
        challenges: [
            "Implementing K-Means clustering manually without scikit-learn",
            "Handling multi-band satellite data natively",
            "Building a GUI for side-by-side temporal comparisons of water bodies",
        ],
        outcome: "Successfully classified historical terrain data, enabling automated tracking of land/water changes over a 20-year span.",
        githubUrl: "https://github.com/yakshbhesaniya/landsat-image-classification",
    },
];
