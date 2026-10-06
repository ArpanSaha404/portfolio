export const navItems = [
  { name: "About", link: "#about" },
  { name: "Work Experience", link: "#work" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];

export const techStack = [
  {
    name: "Languages",
    skills: ["C#", "JavaScript", "TypeScript"],
  },
  {
    name: "Backend",
    skills: [
      "ASP .NET Core",
      "ASP .NET Web API",
      "ASP.NET MVC",
      "ASP.NET Web Forms",
      "Node.js",
      "Express",
    ],
  },
  {
    name: "Frontend",
    skills: [
      "Next JS",
      "React JS",
      "Tailwind CSS",
      "HTML",
      "CSS",
      "React Redux",
      "React Redux Query",
    ],
  },
  {
    name: "Databases",
    skills: ["MySQL", "MSSQL", "Mongo DB", "DynamoDB"],
  },
  {
    name: "Tools",
    skills: ["AWS", "Git", "Github Actions", "Concourse CI", "Kibana"],
  },
  {
    name: "Others",
    skills: ["MS Excel", "Agile/Scrum", "REST API Design", "Unit Testing"],
  },
];

export const projects = [
  {
    id: 1,
    title: "Skillverse",
    desc: "Fully responsive learning management system allowing educators to create video courses and students to purchase and learn.",
    // img: "/pexels-maxfrancis-2246476.jpg",
    img: "/Screenshot 2025-02-01 Skillverse.png",
    techs: [
      "/skill-icons--react-dark.svg",
      "/skill-icons--javascript.svg",
      "/skill-icons--tailwindcss-dark.svg",
      "/skill-icons--expressjs-dark.svg",
      "/skill-icons--nodejs-dark.svg",
      "/skill-icons--mongodb.svg",
    ],
    gitLink: "https://github.com/ArpanSaha404/SkillVerse",
    liveLink: "https://skillverse-z2r9.onrender.com/",
  },
  {
    id: 2,
    title: "Travello",
    desc: "A travel package booking platform where admins post packages, and users can book them individually or in groups.",
    // img: "/pexels-maxfrancis-2246476.jpg",
    img: "/Screenshot 2025-02-01 Travello.png",
    techs: [
      "/skill-icons--react-dark.svg",
      "/skill-icons--typescript.svg",
      "/skill-icons--tailwindcss-dark.svg",
      "/skill-icons--expressjs-dark.svg",
      "/skill-icons--nodejs-dark.svg",
      "/skill-icons--mongodb.svg",
    ],
    gitLink: "https://github.com/ArpanSaha404/Travello",
    liveLink: "https://travello-frontend.onrender.com/",
  },
];

export const workExperience = [
  {
    title: "Accenture Soln Pvt Ltd. (2026 - Present) Software Analyst",
    techs: [
      "C#",
      "ASP .NET Core",
      "AWS ECS",
      "AWS SQS/SNS",
      "DynamoDB",
      "Docker",
      "OAuth 2.0/JWT",
      "Git",
    ],
    points: [
      "Architected and developed cloud-native, event-driven microservices using C# and .NET Core on AWS ECS, along with scalable RESTful APIs for billing, payments, cybersecurity, device health, user management, orders, appointments, and customer dashboards, integrating multiple downstream systems.",
      "Modernized and migrated a legacy API to a newer .NET platform by restructuring and integrating existing business logic into a standardized service template while maintaining existing functionality; implemented clean layered architecture with dependency injection and separation across service, repository, and provider components.",
      "Developed event-driven order and appointment processing, reconciliation, and data backfill workflows using AWS SQS/SNS, including DLQs and redrive policies for failure isolation, with processed data persisted in DynamoDB to support real-time operational dashboards and status tracking.",
      "Designed concurrent and resilient processing pipelines using SemaphoreSlim-based throttling, bounded message publishing, graceful degradation, and fault isolation to improve throughput while protecting downstream systems from excessive load.",
      "Built efficient data-access, caching, and data-refresh workflows using Dapper, stored procedures, DynamoDB, and event-driven SNS/SQS mechanisms, reducing redundant backend/database traffic and enabling low-latency access to frequently used application data.",
      "Implemented secure and observable distributed services using OAuth 2.0/JWT, AWS Secrets Manager, Docker, OpenTelemetry, and structured logging; authored AWS SAM/CloudFormation infrastructure for ECS, messaging, load balancing, health checks, and auto-scaling across multiple environments and AWS regions.",
      "Developed comprehensive unit and integration tests using xUnit and contributed throughout the SDLC, including requirement analysis, technical design, development, code reviews, defect/root-cause analysis, performance optimization, deployment support, and Agile collaboration with architects, QA, DevOps, frontend, and business teams.",
    ],
  },
  {
    title: "Infosys Ltd. (2022 - 2025) Senior System Engineer",
    techs: ["ASP .NET MVC", "React", "Node.js", "Express", "MongoDB", "MS Excel"],
    points: [
      "Developed a full-stack reporting application using the MERN stack to load, process, calculate, and organize Excel and database data into consolidated, downloadable Excel reports, reducing manual spreadsheet-based reporting effort.",
      "Automated a time-intensive manual reporting process by consolidating multiple database queries into a single-click workflow with real-time progress monitoring, improving operational efficiency and reducing repetitive manual tasks.",
      "Designed and developed an automated Excel data and formula comparison application, enabling users to compare spreadsheets programmatically and eliminating the need for time-consuming manual reviews.",
      "Built interactive and responsive dashboards with dynamic charts and visualizations, enabling stakeholders to monitor data in real time, share insights across users, and download reports to support financial analysis and business decision-making.",
      "Developed a dynamic, filter-driven reporting engine allowing users to define multiple filter conditions and select required data fields, generating customized, on-demand reports for efficient data analysis and retrieval.",
      "Developed full-stack applications using React, Node.js, and Express, integrating frontend interfaces with backend services and database systems to deliver data processing, reporting, filtering, and visualization capabilities.",
    ],
  },
];

export const socials = [
  {
    id: 0,
    name: "github",
    img: "/git.svg",
    link: "https://github.com/ArpanSaha404",
  },
  {
    id: 1,
    name: "linkedln",
    img: "/link.svg",
    link: "https://www.linkedin.com/in/arpan-saha-78b675165/",
  },
];
