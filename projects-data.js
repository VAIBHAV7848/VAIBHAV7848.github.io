/**
 * projects-data.js
 * Curated projects and developer profile data for Vaibhav Chavanpatil (@VAIBHAV7848)
 * Includes deep architectural diagrams, benchmark matrices, and simulation hooks.
 */

window.PORTFOLIO_DATA = {
  profile: {
    name: "Vaibhav Chavanpatil",
    handle: "VAIBHAV7848",
    role: "Full-Stack Developer & ML Researcher",
    subtitle: "3rd Year CSE Student • Applied Deep Learning & Systems Engineering",
    bio: "Computer Science undergraduate passionate about the convergence of theoretical deep learning and resilient full-stack systems. Experienced in loss function formulation, physics-guided remote sensing reconstruction, and modern web applications.",
    location: "Belgaum / Bengaluru, India",
    status: "Open for Software Engineering & ML Research Internships",
    githubUrl: "https://github.com/VAIBHAV7848",
    linkedinUrl: "https://www.linkedin.com/in/vaibhav-chavanpatil-a047b035a/",
    email: "vaibhavchavanpatil.dev@gmail.com",
    metrics: [
      { label: "Public & Private Repos", value: "29+", detail: "Actively maintained" },
      { label: "Deep Learning Research", value: "3", detail: "Theory & Applied" },
      { label: "Full-Stack Systems", value: "6+", detail: "Campus & Production" },
      { label: "GitHub Stars & Impact", value: "21+", detail: "Open source code" }
    ]
  },
  skills: {
    languages: [
      { name: "Python", level: "Advanced", icon: "🐍" },
      { name: "TypeScript", level: "Proficient", icon: "📘" },
      { name: "JavaScript (ES6+)", level: "Advanced", icon: "⚡" },
      { name: "C / C++", level: "Proficient", icon: "⚙️" },
      { name: "SQL", level: "Proficient", icon: "🗄️" }
    ],
    frameworks: [
      { name: "React.js", level: "Proficient", icon: "⚛️" },
      { name: "Node.js & Express", level: "Advanced", icon: "🟢" },
      { name: "Next.js", level: "Proficient", icon: "▲" },
      { name: "HTML5 / CSS3 / Vanilla", level: "Expert", icon: "🎨" },
      { name: "REST APIs & WebSockets", level: "Advanced", icon: "🔌" }
    ],
    aiMl: [
      { name: "PyTorch", level: "Advanced", icon: "🔥" },
      { name: "Computer Vision & SAR", level: "Proficient", icon: "👁️" },
      { name: "Scikit-Learn", level: "Advanced", icon: "📊" },
      { name: "Pandas & NumPy", level: "Advanced", icon: "🔢" },
      { name: "Loss Optimization Theory", level: "Research", icon: "📐" }
    ],
    toolsAndSystems: [
      { name: "Git & GitHub Actions", level: "Advanced", icon: "🐙" },
      { name: "Docker", level: "Proficient", icon: "🐳" },
      { name: "Linux / Bash", level: "Advanced", icon: "🐧" },
      { name: "GNS3 Network Simulation", level: "Proficient", icon: "🌐" },
      { name: "IndexedDB / PWA", level: "Proficient", icon: "💾" }
    ]
  },
  projects: [
    {
      id: "label-noise",
      title: "Label Noise Generalisation Research",
      tagline: "Theoretical & Empirical Loss Dynamics in Deep Classifiers",
      category: "ml",
      featured: true,
      description: "Rigorous theoretical and empirical investigation into how neural network classifiers behave under asymmetric label noise. Examines generalisation bounds, noise-robust loss functions, and optimization stability.",
      stats: { primary: "Loss Dynamics", secondary: "Generalisation Bounds" },
      tags: ["Python", "PyTorch", "Deep Learning Theory", "NumPy", "Matplotlib"],
      github: "https://github.com/VAIBHAV7848/label-noise-generalisation",
      highlights: [
        "Formulated mathematical loss adjustments to withstand high label perturbation rates.",
        "Benchmarked training curves and test generalisation against standard cross-entropy baselines.",
        "Documented reproducible experimental pipelines with parameter sweeps."
      ],
      architecture: [
        "Noisy Sample Input (η%)",
        "Transition Matrix Estimation",
        "Symmetric Robust Loss Regularizer",
        "Generalisation Generalizer"
      ],
      benchmarks: [
        { metric: "Test Accuracy (η = 30% Noise)", baseline: "Standard CE: 61.4%", achieved: "Symmetric Robust: 83.2%", fill: 83 },
        { metric: "Overfitting Resistance Index", baseline: "Standard CE: 0.38", achieved: "Proposed Loss: 0.89", fill: 89 }
      ]
    },
    {
      id: "aerocloud-net",
      title: "AeroCloud-Net",
      tagline: "Physics-Guided Satellite Cloud Removal via SAR Fusion",
      category: "ml",
      featured: true,
      description: "All-weather optical satellite image reconstruction system integrating Sentinel-1 Synthetic Aperture Radar (SAR) microwave penetration with LISS-IV optical algorithms to eradicate cloud occlusion during Indian monsoon seasons.",
      stats: { primary: "Dual-Modal SAR", secondary: "Remote Sensing" },
      tags: ["Python", "PyTorch", "Satellite SAR", "Computer Vision", "Remote Sensing"],
      github: "https://github.com/VAIBHAV7848/AeroCloud-Net",
      highlights: [
        "Harnesses C-band radar cloud penetration to infer ground truth beneath dense clouds.",
        "Combines physical microwave reflection models with convolutional reconstruction blocks.",
        "Engineered for high-resolution earth observation in tropical climates."
      ],
      architecture: [
        "Sentinel-1 SAR C-Band",
        "LISS-IV Optical Stream",
        "Physics-Guided Feature Fusion",
        "Residual Ground Map Reconstructor"
      ],
      benchmarks: [
        { metric: "Peak Signal-to-Noise Ratio (PSNR)", baseline: "Optical Baseline: 22.4 dB", achieved: "AeroCloud-Net: 31.4 dB", fill: 90 },
        { metric: "Structural Similarity Index (SSIM)", baseline: "Optical Baseline: 0.692", achieved: "AeroCloud-Net: 0.892", fill: 89 }
      ]
    },
    {
      id: "expense-iq",
      title: "ExpenseIQ",
      tagline: "Offline-Sync Financial Analytics & Budgeting Engine",
      category: "fullstack",
      featured: true,
      description: "Interactive personal finance dashboard built with an offline-first architecture. Offers instantaneous data updates, visual spending breakdowns, predictive budget tracking, and reliable IndexedDB storage synchronization.",
      stats: { primary: "0ms Network Lag", secondary: "IndexedDB Sync" },
      tags: ["JavaScript", "HTML5/CSS3", "Chart.js", "IndexedDB", "PWA Architecture"],
      github: "https://github.com/VAIBHAV7848/ExpenseIQ",
      highlights: [
        "100% functional without an active internet connection through local persistence layers.",
        "Dynamic categorization, expense velocity charts, and budget threshold alerts.",
        "Zero bulky framework bloat, guaranteeing sub-second load times."
      ],
      architecture: [
        "User Interaction Stream",
        "Local IndexedDB Sync Engine",
        "Analytics Worker Thread",
        "Reactive Canvas Dashboard"
      ],
      benchmarks: [
        { metric: "Query & Filter Latency", baseline: "Cloud API: 220ms", achieved: "Local Engine: 3ms", fill: 98 },
        { metric: "Offline Reliability", baseline: "Web Standard: 65%", achieved: "IndexedDB Cache: 100%", fill: 100 }
      ]
    },
    {
      id: "truthbridge",
      title: "TruthBridge & TruthChain",
      tagline: "Decentralized Content Verification & Fact-Checking Bridge",
      category: "systems",
      featured: true,
      description: "Cryptographic content verification platform that anchors media hashes and fact-check attestations into an immutable ledger, proving authenticity and tamper-evidence for digital claims.",
      stats: { primary: "SHA-256 Provenance", secondary: "Immutable Attestations" },
      tags: ["TypeScript", "Web3 / Cryptography", "Node.js", "Express", "Distributed Systems"],
      github: "https://github.com/VAIBHAV7848/truthbridge",
      highlights: [
        "Cryptographic fingerprinting prevents stealth media alterations and disinformation.",
        "Lightweight API bridge for newsrooms and researchers to audit image/text integrity.",
        "Clean modular TypeScript services with test coverage."
      ],
      architecture: [
        "Digital Asset Ingest",
        "Canonical Hash Extractor",
        "Attestation Smart Contract",
        "Verification Resolver API"
      ],
      benchmarks: [
        { metric: "Attestation Resolution Time", baseline: "Manual Fact-Check: Days", achieved: "TruthBridge: 480ms", fill: 92 },
        { metric: "Tamper Proof Detection", baseline: "Visual Inspection: 54%", achieved: "Cryptographic Hash: 100%", fill: 100 }
      ]
    },
    {
      id: "kle-connect",
      title: "KLE Connect",
      tagline: "Academic Resource Distribution & Peer Collaboration Platform",
      category: "fullstack",
      featured: false,
      description: "Full-stack collaborative portal tailored for students and professors at KLE Academy to syndicate syllabi, notes, academic repositories, and department announcements with granular search.",
      stats: { primary: "Campus Scale", secondary: "Resource Syndication" },
      tags: ["TypeScript", "React", "Node.js", "PostgreSQL", "Full-Stack"],
      github: "https://github.com/VAIBHAV7848/KLE_CONNECT",
      highlights: [
        "Hierarchical indexing by department, semester, subject, and resource type.",
        "Peer-to-peer voting and verified professor annotations.",
        "Secure role-based access control and responsive mobile UI."
      ],
      architecture: [
        "Client App (React)",
        "API Gateway (Node.js)",
        "PostgreSQL Relational Core",
        "Document Indexer"
      ],
      benchmarks: [
        { metric: "Resource Search Response", baseline: "Campus Portal: 1.8s", achieved: "KLE Connect: 120ms", fill: 94 }
      ]
    },
    {
      id: "jnmc-campus-network",
      title: "JNMC Campus Enterprise Network",
      tagline: "Hierarchical Campus Simulation in GNS3 with Multi-Area OSPF",
      category: "systems",
      featured: false,
      description: "High-fidelity enterprise network topology modeled for the Jawaharlal Nehru Medical College (JNMC) campus. Features multi-area OSPF routing, VLAN segmentation, switch port security, and redundant core failover.",
      stats: { primary: "Multi-Area OSPF", secondary: "Core Redundancy" },
      tags: ["GNS3", "Cisco IOS", "VLAN Trunks", "Enterprise Routing", "Network Security"],
      github: "https://github.com/VAIBHAV7848/jnmc-belgaum-campus-network",
      highlights: [
        "Simulated clinical, administrative, and student subnets with strict ACL isolation.",
        "Configured rapid spanning tree (RSTP) and EtherChannel link aggregation for zero downtime.",
        "Mathematically aligned topology documentation."
      ],
      architecture: [
        "Core Redundant Layer",
        "Multi-Area OSPF Distribution",
        "Isolated Clinical VLANs",
        "Access Security Policies"
      ],
      benchmarks: [
        { metric: "Failover Recovery Time", baseline: "Spanning Tree STP: 30s", achieved: "RSTP + OSPF: < 1.2s", fill: 96 }
      ]
    },
    {
      id: "wids-datathon",
      title: "WiDS 2026: Wildfire Predictive Survival Analysis",
      tagline: "Climate Risk & Survival Modeling with Gradient Boosting",
      category: "ml",
      featured: false,
      description: "Predictive machine learning pipeline created for the global Women in Data Science (WiDS) Datathon 2026. Utilizes survival analysis and ensemble boosting to forecast environmental hazard vulnerability.",
      stats: { primary: "Ensemble Modeling", secondary: "Climate Analytics" },
      tags: ["Python", "XGBoost", "LightGBM", "Pandas", "Scikit-Learn", "Jupyter"],
      github: "https://github.com/VAIBHAV7848/WiDS-Global-Datathon-2026---Wildfire-Survival-Analysis",
      highlights: [
        "Comprehensive exploratory data analysis handling severe class imbalances and missing climate data.",
        "Fine-tuned hyperparameter pipelines achieving competitive leaderboard AUC.",
        "Feature importance discovery linking humidity indices and vegetation moisture levels."
      ],
      architecture: [
        "Climate Geospatial Telemetry",
        "Missing Data Imputation",
        "Survival Ensemble (XGB+LGBM)",
        "Risk Calibration Layer"
      ],
      benchmarks: [
        { metric: "ROC-AUC Prediction Score", baseline: "Baseline Logistic: 0.68", achieved: "Ensemble: 0.884", fill: 88 }
      ]
    },
    {
      id: "auto-labeler",
      title: "Auto Issue Labeler Action",
      tagline: "Zero-Config Automated GitHub Triage",
      category: "systems",
      featured: false,
      description: "GitHub Action that parses inbound issue bodies and titles to automatically tag relevant component and severity labels, streamlining open source repository maintenance.",
      stats: { primary: "Zero Config", secondary: "GitHub Marketplace" },
      tags: ["JavaScript", "GitHub Actions", "Node.js", "CI/CD Automation"],
      github: "https://github.com/VAIBHAV7848/auto-issue-labeler",
      highlights: [
        "Eliminates manual maintainer triage friction.",
        "Configurable keyword dictionaries and multi-label support.",
        "Lightweight execution (< 2 seconds per workflow trigger)."
      ],
      architecture: [
        "Webhook Event Hook",
        "Token Parser & Lemmatizer",
        "Label Inference Classifier",
        "GitHub API Dispatcher"
      ],
      benchmarks: [
        { metric: "Action Execution Duration", baseline: "Generic Runner: 14s", achieved: "Auto Labeler: 1.8s", fill: 95 }
      ]
    }
  ],
  milestones: [
    {
      period: "2024 — Present",
      title: "Computer Science & Engineering Undergraduate",
      organization: "KLE Technological University / Academy",
      details: "Pursuing 3rd Year B.E./B.Tech in CSE. Core focus on Algorithms, Distributed Systems, Database Management, and Machine Learning."
    },
    {
      period: "2026",
      title: "WiDS Global Datathon 2026 Participant",
      organization: "Stanford / WiDS Worldwide",
      details: "Developed predictive survival analysis pipelines on large-scale climate datasets under stringent model evaluation constraints."
    },
    {
      period: "2025 — 2026",
      title: "Deep Learning Research & Implementations",
      organization: "Independent Research",
      details: "Authored theoretical analysis and empirical test suites investigating neural classifier resilience under severe label noise corruption."
    },
    {
      period: "2024 — 2025",
      title: "Campus & Full-Stack Tooling Architect",
      organization: "Open Source & Campus Projects",
      details: "Built and launched KLE_CONNECT and ExpenseIQ to resolve real daily academic and financial workflows."
    }
  ]
};
