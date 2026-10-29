// ============================================================================
// Portfolio Data — Single Source of Truth
// Voice: First person, plain, specific, short sentences.
// No filler buzzwords (passionate, innovative, cutting-edge, leverage, crafting).
// ============================================================================

export interface Project {
  number: string;
  title: string;
  slug: string;
  year: string;
  summary: string;
  problem: string;
  solution: string;
  stack: string[];
  outcome: string;
  repoUrl: string;
  liveUrl?: string;
  image: string;
  award?: string;
}

export interface ExperienceItem {
  period: string;
  role: string;
  organization: string;
  location: string;
  description: string;
  highlights?: string[];
}

export const meta = {
  name: "Vaibhav Chavanpatil",
  role: "Full-Stack Developer",
  location: "Belagavi, Karnataka, India",
  availability: "Available for internships & full-stack roles",
  email: "chavanpatilvaibhav395@gmail.com",
  phone: "+91 73494 17848",
  github: "https://github.com/VAIBHAV7848",
  linkedin: "https://linkedin.com/in/vaibhav-chavanpatil-a047b035a/",
  kaggle: "https://www.kaggle.com/vaibhavchavanpatil",
  resumeUrl: "/Vaibhav_Chavanpatil_Resume.pdf",
};

export const hero = {
  statementLead: "I build",
  statementAccent: "dependable",
  statementRest: "full-stack systems, machine learning pipelines, and interfaces that survive real use.",
  facts: [
    { label: "Location", value: "Belagavi, India" },
    { label: "Status", value: "Available for Internships" },
    { label: "Focus", value: "Full-Stack & Systems" },
  ],
};

export const projects: Project[] = [
  {
    number: "01",
    title: "SentimentIQ",
    slug: "sentimentiq",
    year: "2026",
    summary: "Privacy-first retail support pipeline with PII masking and human escalation.",
    problem:
      "Retail support messages frequently contain sensitive data: Aadhaar numbers, phone numbers, and payment IDs. Passing these raw messages to public LLMs violates user privacy and banking standards. Frustrated customers also get stuck in bot loops while urgent chargebacks sit in queue.",
    solution:
      "I built a multi-agent support pipeline. It intercepts customer messages and runs Microsoft Presidio with custom Indian regex patterns to mask PII into tokenized vaults before any model receives them. A two-tier classifier analyzes sentiment and immediately routes high-frustration tickets to human agents.",
    stack: ["Python", "FastAPI", "React 19", "Presidio", "Hugging Face", "Ollama"],
    outcome:
      "Awarded 1st Place at the TCS Technology Day Hackathon for privacy-preserving conversational architecture.",
    repoUrl: "https://github.com/VAIBHAV7848/TCS-Retail-Sentiment-Chatbot",
    image: "/projects/sentimentiq.png",
    award: "Winner — TCS Technology Day Hackathon",
  },
  {
    number: "02",
    title: "GigaFlow",
    slug: "gigaflow",
    year: "2026",
    summary: "Milestone escrow marketplace with finite state machines and double-entry accounting.",
    problem:
      "Freelance platforms suffer from symmetrical payment risk: clients refuse to release funds after work is done, or pay upfront without proof that deliverables meet specification.",
    solution:
      "I architected an escrow platform with strict finite state machine lifecycles (Locked → Funded → In Development → Submitted → Approved). Implemented a double-entry ledger that enforces balance conservation (ΔEscrow + ΔUser = 0) and generates SHA-256 deliverable checksums for cryptographic evidence during dispute arbitration.",
    stack: ["Next.js 15", "TypeScript", "Prisma", "PostgreSQL", "Tailwind CSS"],
    outcome:
      "Engineered role-based portals for clients, freelancers, and arbiters with zero ledger drift across test cycles.",
    repoUrl: "https://github.com/VAIBHAV7848/gigaflow",
    image: "/projects/gigaflow.png",
  },
  {
    number: "03",
    title: "ExpenseIQ",
    slug: "expenseiq",
    year: "2025",
    summary: "Client-side personal finance tracker with zero-latency IndexedDB persistence.",
    problem:
      "Most budget applications require constant network connectivity. On intermittent mobile data, logging daily expenses fails or lags, causing users to abandon tracking.",
    solution:
      "I built an offline-first expense dashboard. All transactions, budget limits, and category aggregations write directly to browser IndexedDB with sub-4ms update latency. The dashboard provides graphical spending trend analysis without sending financial records to an external server.",
    stack: ["React", "JavaScript", "IndexedDB", "Chart.js", "Tailwind CSS"],
    outcome:
      "Won the College Best Project Award (Belagavi) in the Web Technology course for offline architecture and interface design.",
    repoUrl: "https://github.com/VAIBHAV7848/ExpenseIQ",
    image: "/projects/expenseiq.png",
    award: "Best Project Award — KLE Tech, Belagavi",
  },
  {
    number: "04",
    title: "KLE Connect",
    slug: "kleconnect",
    year: "2025",
    summary: "Academic resource platform with sub-150ms hierarchical search for university departments.",
    problem:
      "Engineering students and faculty lacked a single verified repository for syllabi, lab manuals, and previous examination papers. Materials were scattered across private chat groups.",
    solution:
      "I developed a centralized resource syndication platform. Built relational MySQL schemas with composite indexing for sub-150ms department resource queries. Implemented JWT session authorization, a peer-reviewed resource verification system, and a responsive mobile interface.",
    stack: ["TypeScript", "React", "Node.js", "Express", "MySQL"],
    outcome:
      "Deployed for university students and faculty across semester cycles for curriculum resource distribution.",
    repoUrl: "https://github.com/VAIBHAV7848/KLE_CONNECT",
    image: "/projects/kleconnect.png",
  },
];

export const about = {
  lead: "I am a computer science student and full-stack developer based in Karnataka, India.",
  body: [
    "I study at KLE Technological University (2024–2028). My work focuses on building full-stack platforms, financial state machines, and machine learning pipelines that operate predictably under constraints.",
    "I avoid decorative complexity. I prefer code that can be verified: double-entry balance checks for escrow funds, PII masking before inference, and client-side storage that survives network drops.",
    "Outside coursework, I compete in hackathons, participate in the Stanford WiDS Global Datathon, and write open-source tools from the Linux terminal.",
  ],
  photo: {
    src: "/vaibhav.jpeg",
    alt: "Vaibhav Chavanpatil",
    caption: "FIG 01. VAIBHAV CHAVANPATIL, 2026.",
  },
};

export const experience: ExperienceItem[] = [
  {
    period: "2024 — 2028",
    role: "B.Tech in Computer Science and Engineering",
    organization: "KLE Technological University, Belagavi",
    location: "Belagavi, Karnataka, India",
    description:
      "Current 3rd-year undergraduate student. Cumulative CGPA: 6.5 / 10.0.",
    highlights: [
      "Coursework: Data Structures & Algorithms, Object-Oriented Programming (Java/C++), Database Management Systems (SQL), Operating Systems, Computer Networks.",
    ],
  },
  {
    period: "OCT 2026",
    role: "1st Place Winner",
    organization: "TCS Technology Day Hackathon",
    location: "Belagavi, India",
    description:
      "Won 1st Place for SentimentIQ: a multi-agent retail sentiment analysis and privacy-first customer support pipeline with PII scrubbing.",
  },
  {
    period: "2025",
    role: "Best Project Award",
    organization: "KLE Tech Web Technology Course",
    location: "Belagavi, India",
    description:
      "Awarded 1st Prize / Best Project Award in College (Belagavi) for ExpenseIQ: offline-first personal budget tracker with IndexedDB storage.",
  },
  {
    period: "2025 — 2026",
    role: "Certified AI Builder",
    organization: "Google & Kaggle",
    location: "Remote",
    description:
      "Completed 5-Day AI Agents Intensive (2025) and AI Agents Vibe Coding (2026). Capstone project verified.",
  },
  {
    period: "SEP 2026",
    role: "Certified in Artificial Intelligence",
    organization: "IBM SkillsBuild (Credly Verified)",
    location: "Remote",
    description:
      "Earned digital credential for AI engineering foundations and code troubleshooting methodology.",
  },
  {
    period: "2026",
    role: "Datathon Competitor",
    organization: "Stanford / WiDS Global Datathon",
    location: "Remote",
    description:
      "Built predictive survival models and risk stratification pipelines for wildfire climate data analysis.",
  },
];

export const skillsGrouped = {
  "Languages": ["Java", "Python", "C", "C++", "TypeScript", "JavaScript", "SQL"],
  "AI & Systems": ["PyTorch", "Scikit-Learn", "Pandas", "NumPy", "NLP", "Multi-Agent Systems"],
  "Web & Backend": ["React 19", "Next.js 15", "Node.js", "Express.js", "Tailwind CSS", "REST APIs"],
  "Databases": ["PostgreSQL", "MySQL", "Prisma ORM", "IndexedDB", "SQLite"],
  "Environment": ["Linux / Bash", "Git", "GitHub", "VS Code", "CLI Workflows"],
};

export const colophon = {
  typography: "Instrument Serif (Display) & Geist (Body, Mono)",
  stack: "Next.js 16 (App Router), TypeScript, Tailwind CSS",
  palette: "Paper #F3EFE6, Ink #1A1814, Muted #6B655A, Hairline #D8D1C2, Vermilion #D4400F",
  updated: "October 2026",
  license: "MIT License",
};
