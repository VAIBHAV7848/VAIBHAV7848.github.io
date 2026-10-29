// ============================================================================
// Portfolio Data — Single source of truth for all content.
// Edit this file to update the site. All copy comes from the resume and GitHub.
// ============================================================================

export const siteConfig = {
  name: "Vaibhav Chavanpatil",
  title: "Vaibhav Chavanpatil — Full-Stack Developer",
  description:
    "Full-stack developer building secure web platforms, AI-powered tools, and systems that hold up under real use.",
  url: "https://vaibhav7848.github.io",
  email: "chavanpatilvaibhav395@gmail.com",
  phone: "+91-7349417848",
  github: "https://github.com/VAIBHAV7848",
  linkedin:
    "https://linkedin.com/in/vaibhav-chavanpatil-a047b035a/",
  kaggle: "https://www.kaggle.com/vaibhavchavanpatil",
  resumeFile: "/Vaibhav_Chavanpatil_Resume.pdf",
  location: "Karnataka, India",
};

export const hero = {
  headline: "I build software that earns trust.",
  sub: "Full-stack systems, AI pipelines, and interfaces — with a bias toward correctness, security, and craft.",
};

export interface Project {
  number: string;
  title: string;
  slug: string;
  tagline: string;
  archetype: string;
  spec: string;
  problem: string;
  solution: string;
  stack: string[];
  outcome: string;
  repoUrl: string;
  liveUrl?: string;
  award?: string;
  year: string;
}

export const projects: Project[] = [
  {
    number: "01",
    title: "SentimentIQ",
    slug: "sentimentiq",
    tagline: "Privacy-first retail sentiment analysis",
    archetype: "Multi-Agent AI Pipeline",
    spec: "NER Masking · 2-Tier Sentiment · Escalation Guard",
    problem:
      "Retail support desks handle thousands of messages. Angry customers sit in queue beside mundane tickets. Customers paste sensitive data — Aadhaar, phone numbers, cards — straight into chat. Bots keep talking when a human is needed.",
    solution:
      "Built a multi-agent chatbot that masks PII before any model sees it (Presidio + custom Indian recognizers), classifies sentiment in two tiers, generates empathetic responses, and escalates to humans when frustration hits a threshold. Sentiment-adaptive avatar gives real-time visual feedback.",
    stack: ["Python", "FastAPI", "React 19", "TypeScript", "Hugging Face", "Presidio", "Ollama"],
    outcome: "Won 1st place at TCS Technology Day Hackathon for innovative customer experience and privacy-first architecture.",
    repoUrl: "https://github.com/VAIBHAV7848/TCS-Retail-Sentiment-Chatbot",
    award: "1st Place — TCS Technology Day Hackathon",
    year: "2026",
  },
  {
    number: "02",
    title: "GigaFlow",
    slug: "gigaflow",
    tagline: "Milestone-based escrow marketplace",
    archetype: "Financial State Machine",
    spec: "ACID Ledger · Double-Entry · Merkle Proofs",
    problem:
      "Freelance platforms have two failure modes: clients don't pay after work is done, or they pay upfront with no proof of deliverable quality. Both sides lose.",
    solution:
      "Architected a milestone-based escrow platform with finite state machine lifecycles, double-entry ACID ledger with balance conservation, SHA-256 deliverable checksumming for cryptographic evidence arbitration, and role-based access across Client, Freelancer, and Arbiter portals.",
    stack: ["Next.js 15", "TypeScript", "Prisma", "PostgreSQL", "Tailwind CSS"],
    outcome: "Academic team project demonstrating production-grade financial system design with concurrency-safe state transitions.",
    repoUrl: "https://github.com/VAIBHAV7848/gigaflow",
    year: "2026",
  },
  {
    number: "03",
    title: "ExpenseIQ",
    slug: "expenseiq",
    tagline: "Offline-first personal finance tracker",
    archetype: "Client-Side Store & Analytics",
    spec: "IndexedDB Sync · Zero Latency · Reactive Charts",
    problem:
      "Most budget apps need constant connectivity, making them useless on spotty mobile networks. Data feels trapped in someone else's cloud.",
    solution:
      "Built an interactive budgeting dashboard with real-time graphical analytics and trend reports. All data persists client-side via IndexedDB — zero-latency transaction updates, seamless offline sync, no server dependency.",
    stack: ["JavaScript", "React", "Chart.js", "IndexedDB", "Tailwind CSS"],
    outcome: "Won Best Project Award in college for Web Technology course — recognized for exceptional UI design and offline architecture.",
    repoUrl: "https://github.com/VAIBHAV7848/ExpenseIQ",
    award: "Best Project Award — KLE Tech WebTech Course",
    year: "2025",
  },
  {
    number: "04",
    title: "KLE Connect",
    slug: "kleconnect",
    tagline: "Campus collaboration platform",
    archetype: "Campus Knowledge Graph",
    spec: "Relational Schemas · Sub-150ms Search · JWT",
    problem:
      "Students and faculty had no central place to share syllabi, notes, and announcements. Resources were scattered across WhatsApp groups and random drives.",
    solution:
      "Built a centralized resource-sharing platform with relational MySQL schemas, composite indexing for sub-150ms hierarchical search, JWT-authenticated API endpoints, peer-voting mechanisms, and responsive mobile-first UI.",
    stack: ["TypeScript", "React", "Node.js", "Express", "MySQL"],
    outcome: "Active campus tool used by students and faculty for resource syndication across departments.",
    repoUrl: "https://github.com/VAIBHAV7848/KLE_CONNECT",
    year: "2025",
  },
  {
    number: "05",
    title: "Diana",
    slug: "diana",
    tagline: "Voice-controlled AI desktop companion",
    archetype: "Bidirectional Voice Agent",
    spec: "Gemini Live Audio · MCP Tool Runner · Real-Time",
    problem:
      "Desktop AI assistants are either cloud-locked toys or CLI-only tools. Neither feels like a real companion you can talk to.",
    solution:
      "Built a voice-controlled desktop companion powered by Gemini Live Audio and MCP tools. Real-time bidirectional voice interaction with tool use — not just a chatbot, but an agent that can execute actions on your machine.",
    stack: ["Python", "Gemini Live Audio", "MCP", "Voice Recognition"],
    outcome: "Open-source AI companion demonstrating real-time voice + tool integration patterns.",
    repoUrl: "https://github.com/VAIBHAV7848/Diana",
    year: "2026",
  },
];

export const education = [
  {
    institution: "KLE Technological University",
    location: "Karnataka, India",
    degree: "Bachelor of Technology in Computer Science and Engineering",
    period: "Aug 2024 — May 2028",
    detail: "CGPA: 6.5 / 10.0",
    coursework:
      "Data Structures & Algorithms, OOP (Java/C++), DBMS (SQL), Operating Systems, Computer Networks",
  },
];

export const skills = {
  "Languages": ["Java", "Python", "C", "C++", "TypeScript", "JavaScript", "SQL"],
  "AI & Machine Learning": [
    "PyTorch",
    "Scikit-Learn",
    "Pandas",
    "NumPy",
    "NLP",
    "Multi-Agent Systems",
  ],
  "Full-Stack & Web": [
    "React",
    "Next.js 15",
    "Node.js",
    "Express.js",
    "Tailwind CSS",
    "REST APIs",
  ],
  "Databases & ORM": ["PostgreSQL", "MySQL", "Prisma ORM", "IndexedDB", "SQLite"],
  "Developer Tools": [
    "Git",
    "GitHub",
    "Linux / Bash",
    "VS Code",
    "Jupyter Notebook",
    "Agentic Coding & CLI Workflows",
  ],
};

export const achievements = [
  {
    title: "1st Place — TCS Technology Day Hackathon",
    detail: "Multi-Agent Retail Sentiment AI",
    year: "2026",
  },
  {
    title: "Best Project Award — KLE Tech",
    detail: "ExpenseIQ, Web Technology course",
    year: "2025",
  },
  {
    title: "Google & Kaggle Certified",
    detail: "AI Agents Vibe Coding (2026) & AI Agents Intensive (2025) — Capstone Builder",
    links: [
      {
        label: "Vibe Coding",
        url: "https://www.kaggle.com/certification/badges/vaibhavchavanpatil/108",
      },
      {
        label: "Intensive",
        url: "https://www.kaggle.com/certification/badges/vaibhavchavanpatil/105",
      },
    ],
  },
  {
    title: "IBM Certified — Getting Started with AI",
    detail: "IBM SkillsBuild, Credly Verified",
    links: [
      {
        label: "Credly Badge",
        url: "https://www.credly.com/badges/c140727b-a954-4315-b41a-2aeeb993a21b",
      },
    ],
  },
  {
    title: "Stanford WiDS Global Datathon 2026",
    detail: "Predictive Climate Survival — Active Competitor",
    year: "2026",
  },
];
