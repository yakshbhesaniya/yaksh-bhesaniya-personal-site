export interface Experience {
    role: string;
    company: string;
    period: string;
    type: "work" | "education" | "achievement";
    description: string[];
    skills?: string[];
}

export const experienceData: Experience[] = [
    {
        role: "GATE (CS) - 98.94 Percentile",
        company: "All India Rank 1814",
        period: "Mar'25",
        type: "achievement",
        description: [
            "Secured GATE (CS) with 98.94 Percentile and All India Rank 1814",
            "Demonstrated strong fundamentals in Computer Science and engineering concepts",
        ],
    },
    {
        role: "Gold Medalist - Diploma in IT",
        company: "Gujarat Technological University",
        period: "Jan'22",
        type: "achievement",
        description: [
            "Gold Medalist in Diploma in Information Technology awarded by Gujarat Technological University (GTU)",
            "Achieved 10.00 CGPA demonstrating academic excellence",
        ],
    },
    {
        role: "Hackathon Winner",
        company: "Hacktober Hacks Hackathon & Hackout'21",
        period: "Sep'21 - Oct'21",
        type: "achievement",
        description: [
            "Winner, Hacktober Hacks Hackathon & Hackout'21 (Pre-made Projects Category)",
            "Demonstrated technical innovation and problem-solving capabilities",
        ],
    },
    {
        role: "Best Student Award",
        company: "L.J. Polytechnic",
        period: "Nov'19",
        type: "achievement",
        description: [
            "Awarded Best Student Award in Diploma in Information Technology at LJ Polytechnic",
            "Recognized for outstanding academic performance and overall contribution",
        ],
    },
    {
        role: "Rajya Puraskar Recipient",
        company: "The Bharat Scouts & Guides",
        period: "2019",
        type: "achievement",
        description: [
            "Recipient of Rajya Puraskar, the highest state-level honor by The Bharat Scouts & Guides",
            "Awarded by the Honorable Governor of Gujarat for exceptional service and leadership",
        ],
    },
    {
        role: "Research Intern",
        company: "Space Applications Centre (SAC), ISRO - SRTD, Ahmedabad",
        period: "May'26 - Jul'26",
        type: "work",
        description: [
            "Worked on enhancing a satellite image mosaicking pipeline for geometric correction of high-resolution imagery",
            "Explored deep-learning-based image matching alongside classical feature-matching approaches, and built supporting tooling for an air-gapped environment",
            "Project details and results are confidential; overview only",
        ],
        skills: [
            "Python",
            "PyTorch",
            "OpenCV",
            "GDAL/rasterio",
            "FastAPI",
            "React",
            "Photogrammetry",
            "Air-gapped Deployment",
        ],
    },
    {
        role: "AI Engineer (Freelance)",
        company: "Dhi Labs AI - Ledgerline",
        period: "Apr'26 - Present",
        type: "work",
        description: [
            "Building Ledgerline, a multi-tenant SaaS platform where analysts upload lengthy credit agreements and an LLM agent answers questions about them with citations linking back to the exact page in the source document",
            "Work spans the AI pipeline - agent design, document understanding, model routing and answer-quality evaluation - and the production backend it runs on",
            "Paid client engagement; implementation details are under NDA",
        ],
        skills: [
            "FastAPI",
            "SQLAlchemy",
            "PostgreSQL",
            "Redis",
            "S3",
            "Next.js",
            "React",
            "TypeScript",
            "LLM Agents",
            "Docker",
        ],
    },
    {
        role: "Teaching Assistant",
        company: "IIT Bombay",
        period: "Jul'25 - Present",
        type: "work",
        description: [
            "Assisted in lab sessions and grading for 30+ students",
            "Provided technical guidance on programming concepts and debugging",
        ],
        skills: ["Teaching", "Mentoring", "Python", "DBMS"],
    },
    {
        role: "Interview Coordinator",
        company: "Placement Office, IIT Bombay",
        period: "Oct'25 - Dec'25",
        type: "work",
        description: [
            "Ensured smooth execution of the 2025-26 campus placements",
            "Coordinated company tests, PPTs and interview schedules",
        ],
        skills: ["Coordination", "Communication", "Organization"],
    },
    {
        role: "Freelance Software Developer",
        company: "Self-Employed",
        period: "Jun'24 - Jun'25",
        type: "work",
        description: [
            "Built end-to-end backend development projects using Node.js and REST APIs",
            "Implemented authentication, RBAC and database-driven workflows in production",
            "Owned end-to-end backend development lifecycle with scalability and maintainability focus",
        ],
        skills: ["Node.js", "Express.js", "MongoDB", "REST API", "JWT", "RBAC"],
    },
    {
        role: "Software Engineer Intern",
        company: "Rapidops Inc.",
        period: "Jan'24 - May'24",
        type: "work",
        description: [
            "Developed and optimized backend APIs and database queries for production-scale applications",
        ],
        skills: ["Backend Development", "API Design", "Database Optimization"],
    },
    {
        role: "Software Engineer Intern",
        company: "HumBee Studio",
        period: "Feb'23 - May'23",
        type: "work",
        description: [
            "Contributed to backend feature development and bug fixes across production web applications",
        ],
        skills: ["Backend Development", "Web Development", "Debugging"],
    },
    {
        role: "Lead Organizer",
        company: "HackVGEC'23 & TechXIT'22",
        period: "2022 - 2023",
        type: "work",
        description: [
            "Organized state-level hackathon HackVGEC'23 and technical fest TechXIT'22",
            "Coordinated sponsors, mentors and participants across colleges",
        ],
        skills: ["Event Management", "Leadership", "Coordination"],
    },
    {
        role: "Post Graduation",
        company: "IIT Bombay",
        period: "2027",
        type: "education",
        description: [
            "CGPA: 9.05",
            "Specializing in distributed systems, backend architectures and satellite imagery processing",
        ],
    },
    {
        role: "Graduation (BE IT)",
        company: "Vishwakarma Government Engineering College",
        period: "2024",
        type: "education",
        description: [
            "CGPA: 8.88",
            "Specialized in backend development and system design",
        ],
    },
    {
        role: "Diploma (IT)",
        company: "L.J. Polytechnic",
        period: "2021",
        type: "education",
        description: [
            "CGPA: 10.00 (GTU Gold Medalist)",
            "Foundation in programming and information technology",
        ],
    },
];
