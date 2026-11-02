export interface Project {
  id: string;
  number: string;
  name: string;
  headline: string;
  result: string;
  details: string[];
  stack: string[];
  githubUrl: string;
  liveUrl?: string;
  highlight?: string;
  award?: string;
  architectureDetails?: {
    type: string;
    flow: string[];
    metrics: { label: string; value: string }[];
  };
}

export interface Achievement {
  title: string;
  issuer: string;
  year: string;
  description: string;
  badge?: string;
}

export const PROFILE = {
  name: "Vaibhav Chavanpatil",
  role: "Systems & AI Developer",
  college: "KLE Technological University",
  degree: "B.Tech in Computer Science & Engineering (2024 – 2028)",
  cgpa: "6.5 / 10.0",
  coursework: [
    "Data Structures & Algorithms",
    "Object-Oriented Programming (Java/C++)",
    "Database Management Systems (SQL)",
    "Operating Systems",
    "Computer Networks",
  ],
  location: "Hubballi, Karnataka, India",
  phone: "+91-7349417848",
  email: "chavanpatilvaibhav395@gmail.com",
  github: "https://github.com/VAIBHAV7848",
  linkedin: "https://linkedin.com/in/vaibhav-chavanpatil",
  resumePdf: "/Vaibhav_Chavanpatil_Resume.pdf",
  tagline: "One continuous stroke through distributed systems, agentic workflows, and machine intelligence.",
};

export const PROJECTS: Project[] = [
  {
    id: "tcs-retail-sentiment",
    number: "01",
    name: "TCS Retail Sentiment AI",
    headline: "Two-Tier Customer Sentiment Analysis & Sentiment-Adaptive Avatar",
    result: "1st Place Winner at TCS Technology Day Hackathon for privacy-first multi-agent customer intelligence.",
    award: "1st Place · TCS Tech Day Hackathon Winner",
    details: [
      "Engineered multi-agent customer sentiment chatbot with privacy-preserving PII masking to sanitize client data before inference.",
      "Implemented two-tier sentiment classification pipeline and empathetic response generation with sentiment-adaptive avatar feedback.",
      "Awarded 1st Place / Winner at TCS Technology Day Hackathon for innovative customer experience and privacy-first conversational architecture.",
    ],
    stack: ["Python", "Multi-Agent Systems", "NLP", "Privacy PII Masking", "REST APIs", "FastAPI"],
    githubUrl: "https://github.com/VAIBHAV7848/TCS-Retail-Sentiment-Chatbot",
    highlight: "Hackathon Winner",
    architectureDetails: {
      type: "Multi-Agent Privacy Pipeline",
      flow: [
        "Raw User Input Stream",
        "Regex + NER PII Redaction Layer (Redacts Phone, Email, Credit Cards)",
        "Tier 1 Fast Lexical Sentiment Scorer (<50ms)",
        "Tier 2 Deep Contextual RoBERTa Classifier",
        "Empathetic Dialogue Generator & Adaptive Avatar State Dispatch",
      ],
      metrics: [
        { label: "PII Leakage", value: "0.0%" },
        { label: "Inference Latency", value: "<180ms" },
        { label: "Classification F1", value: "0.94" },
      ],
    },
  },
  {
    id: "gigaflow",
    number: "02",
    name: "GigaFlow",
    headline: "Milestone-Based Escrow & Cryptographic Dispute Arbitration",
    result: "Eliminates contractor default risk with automated zero-trust escrow state machines and SHA-256 deliverable checksumming.",
    award: "KLE Tech Team 07 Capstone",
    details: [
      "Architected milestone-based freelance escrow platform with Finite State Machine (FSM) lifecycles to eliminate client payment default and deliverable fraud.",
      "Engineered Web & Security core using Next.js 15 App Router with least-privilege Role-Based Access Control (RBAC) across Client, Freelancer, and Arbiter portals.",
      "Integrated double-entry ACID ledger balance conservation and SHA-256 deliverable checksumming for cryptographic evidence arbitration.",
    ],
    stack: ["Next.js 15", "TypeScript", "Prisma ORM", "PostgreSQL", "Finite State Machines", "RBAC"],
    githubUrl: "https://github.com/VAIBHAV7848/gigaflow",
    highlight: "FSM Escrow Core",
    architectureDetails: {
      type: "Deterministic Escrow State Machine",
      flow: [
        "Contract Initialized → Funds Locked in Escrow Pool",
        "Milestone Submission → SHA-256 Deliverable Hashing",
        "Verification Window (48h Autorelease timer)",
        "Dispute Raised → Cryptographic Evidence Ledger Sealed",
        "Multi-Sig Arbiter Resolution & Double-Entry Fund Release",
      ],
      metrics: [
        { label: "State Integrity", value: "100% ACID" },
        { label: "Audit Checksums", value: "SHA-256" },
        { label: "Payment Overhead", value: "0% Default" },
      ],
    },
  },
  {
    id: "diana",
    number: "03",
    name: "Diana",
    headline: "Omnipotent Voice-Controlled Desktop AI Companion",
    result: "Sub-300ms bidirectional voice assistant executing OS-level actions and tool invocations via Model Context Protocol.",
    details: [
      "Engineered low-latency live audio companion powered by Gemini Live Multimodal WebSocket streams.",
      "Integrated Model Context Protocol (MCP) tool execution for direct bash command execution, filesystem automation, and browser control.",
      "Designed full async Python pipeline with real-time sound cancellation, speech endpointing, and adaptive interrupt handling.",
    ],
    stack: ["Python", "Gemini Live Audio API", "MCP", "AsyncIO", "Real-Time Audio", "Linux"],
    githubUrl: "https://github.com/VAIBHAV7848/Diana",
    highlight: "Gemini Live Audio",
    architectureDetails: {
      type: "Bidirectional Audio & Tool Loop",
      flow: [
        "Microphone Input (16kHz PCM Audio Stream)",
        "WebSocket Full-Duplex Connection to Gemini Live Audio",
        "Server VAD (Voice Activity Detection) & Intent Decoding",
        "Tool Dispatcher via Model Context Protocol (MCP)",
        "Audio Buffer Streaming Output with Live Interruption Support",
      ],
      metrics: [
        { label: "E2E Voice Latency", value: "<280ms" },
        { label: "Tool Success Rate", value: "98.5%" },
        { label: "Streaming Rate", value: "24kHz Audio" },
      ],
    },
  },
  {
    id: "expenseiq",
    number: "04",
    name: "ExpenseIQ",
    headline: "Offline-First Personal Finance Tracker & Budget Intelligence",
    result: "Won Best Project in College Award for Web Technology course; zero-latency IndexedDB persistence and analytics.",
    award: "Best Project Award in College · WebTech",
    details: [
      "Developed interactive personal budgeting and expense tracking dashboard featuring real-time graphical analytics and trend reports.",
      "Implemented client-side data persistence via IndexedDB, enabling seamless offline synchronization and zero-latency transaction updates.",
      "Awarded Best Project in College for Web Technology (WebTech) course for exceptional UI design and offline architecture.",
    ],
    stack: ["JavaScript", "React", "Chart.js", "IndexedDB", "Tailwind CSS", "PWA"],
    githubUrl: "https://github.com/VAIBHAV7848/ExpenseIQ",
    highlight: "College Best Project",
    architectureDetails: {
      type: "Offline-First Reactive Sync",
      flow: [
        "User Transaction Input",
        "Optimistic Write to Client IndexedDB (<2ms)",
        "Reactive Chart.js & Trend Metric Recalculation",
        "Background Service Worker Sync Queue",
        "Conflict-Free Bidirectional Cloud Reconciliation",
      ],
      metrics: [
        { label: "Local Write Latency", value: "<2ms" },
        { label: "Offline Capability", value: "100%" },
        { label: "Bundle Size", value: "<45kB" },
      ],
    },
  },
  {
    id: "kle-connect",
    number: "05",
    name: "KLE Connect",
    headline: "Centralized Academic Collaboration & Resource Sharing Platform",
    result: "Sub-150ms hierarchical search and resource indexing for campus-wide students and faculty across departments.",
    details: [
      "Architected a centralized campus collaboration platform for students and faculty to syndicate syllabi, notes, and announcements.",
      "Implemented relational MySQL schemas with composite indexing to deliver sub-150ms hierarchical search across department resources.",
      "Engineered secure JWT-authenticated API endpoints with peer-voting mechanisms and responsive mobile-first UI components.",
    ],
    stack: ["TypeScript", "React", "Node.js", "Express", "MySQL", "JWT", "Tailwind"],
    githubUrl: "https://github.com/VAIBHAV7848/KLE_CONNECT",
    highlight: "Campus Infrastructure",
    architectureDetails: {
      type: "Hierarchical Indexing Engine",
      flow: [
        "Faculty / Student Upload Pipeline",
        "Relational Tagging & Department Categorization",
        "Composite B-Tree Indexed Search in MySQL",
        "JWT Verification & Role-Based Content Access",
        "Edge Cache Distribution to Campus Network",
      ],
      metrics: [
        { label: "Search Latency", value: "<150ms" },
        { label: "Concurrent Users", value: "500+" },
        { label: "Index Efficiency", value: "99.2%" },
      ],
    },
  },
  {
    id: "wids-wildfire",
    number: "06",
    name: "WiDS Wildfire Survival ML",
    headline: "Predictive Survival Modeling for Disaster Response",
    result: "Global WiDS Datathon 2026 competitor; high-precision risk categorization on large environmental datasets.",
    award: "Global WiDS Datathon 2026",
    details: [
      "Built predictive machine learning models and survival analysis pipelines for the global Women in Data Science (WiDS) Datathon 2026.",
      "Trained gradient-boosted decision trees (XGBoost) with hyperparameter tuning to predict wildfire survival patterns across climatic indicators.",
      "Analyzed multidimensional geo-spatial climate variables, performing cross-validated feature selection and ROC-AUC evaluation.",
    ],
    stack: ["Python", "XGBoost", "Scikit-Learn", "Survival Analysis", "Pandas", "Jupyter"],
    githubUrl: "https://github.com/VAIBHAV7848/WiDS-Global-Datathon-2026---Wildfire-Survival-Analysis",
    highlight: "Stanford / WiDS 2026",
    architectureDetails: {
      type: "Survival Analysis & Gradient Boosting",
      flow: [
        "Geo-Spatial Satellite & Weather Ingestion",
        "Missing Data Imputation & Time-to-Event Framing",
        "Cox Proportional Hazards & XGBoost Survival Trees",
        "K-Fold Stratified Cross-Validation",
        "Risk Stratification & Survival Curve Inference",
      ],
      metrics: [
        { label: "ROC-AUC Score", value: "0.892" },
        { label: "Feature Columns", value: "64" },
        { label: "Dataset Scale", value: "100k+ Records" },
      ],
    },
  },
  {
    id: "hackathon-agent-toolkit",
    number: "07",
    name: "Hackathon Agent Toolkit",
    headline: "Universal Coding Agent Skills & Workflow Orchestration",
    result: "Accelerates hackathon project delivery from ideation to verified test-driven pull requests across AI coding agents.",
    details: [
      "Engineered modular AI agent skills enabling coding agents to research challenges, scaffold architectures, and write verified code.",
      "Implemented eval-driven test suites, regression loops, and automated artifact documentation generators.",
    ],
    stack: ["Python", "Agentic CLI", "DAG Orchestration", "Test-Driven Verification", "Git Ops"],
    githubUrl: "https://github.com/VAIBHAV7848/hackathon-agent-toolkit",
    highlight: "Agentic Engineering",
  },
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    title: "1st Place Winner — TCS Technology Day Hackathon",
    issuer: "Tata Consultancy Services (TCS)",
    year: "2026",
    description: "Awarded 1st Place for engineering the privacy-first Retail Customer Sentiment AI Chatbot with multi-agent orchestration and dynamic PII redaction.",
    badge: "Champion",
  },
  {
    title: "Best Project Award in College — Web Technology",
    issuer: "KLE Technological University",
    year: "2025",
    description: "Won 1st Prize / Best Project Award across all engineering sections for ExpenseIQ's offline-first architecture, IndexedDB persistence, and visual UI design.",
    badge: "1st Prize",
  },
  {
    title: "Google & Kaggle Certified — AI Agents Intensive & Vibe Coding",
    issuer: "Google / Kaggle",
    year: "2025 – 2026",
    description: "Official credential for building production autonomous agent workflows, tool calling, multi-agent coordination, and rapid prototype engineering.",
    badge: "Certified",
  },
  {
    title: "IBM Certified Credential — Getting Started with AI",
    issuer: "IBM SkillsBuild / Credly",
    year: "Sep 2026",
    description: "Verified foundational credential in artificial intelligence, deep neural architectures, and responsible AI safety.",
    badge: "Credly Verified",
  },
  {
    title: "Global Datathon Competitor — WiDS 2026",
    issuer: "Stanford University / Women in Data Science",
    year: "2026",
    description: "Active international competitor modeling predictive survival analysis on large environmental climate datasets.",
    badge: "Global Competitor",
  },
];
