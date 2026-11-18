export const personal = {
  name: "Prateek Sharma",
  locationPill: "Chandigarh, India · B.E. CSE (Full Stack Dev)",
  role: "Full-Stack MERN & Hardware-Connected Systems Engineer",
  bio: "I build fast, practical web applications, geospatial platforms, and IoT-connected systems with React, Node.js, and MongoDB—from live hospital bed telemetry to on-chain audit trails.",
  email: import.meta.env.VITE_OWNER_EMAIL || "prateek02105@gmail.com",
  phone: import.meta.env.VITE_OWNER_PHONE || "+91 70151 06889",
  github: import.meta.env.VITE_OWNER_GITHUB || "https://github.com/prateeksharma-dev",
  linkedin: import.meta.env.VITE_OWNER_LINKEDIN || "https://linkedin.com/in/prateeksharma-dev",
};

export const heroPillars = [
  {
    title: "Full-Stack Web & Geospatial",
    detail: "React, Node.js, Express & MongoDB GeoJSON",
    category: "Architecture",
  },
  {
    title: "IoT & Edge Hardware",
    detail: "ESP32 Telemetry & 24GHz mmWave Radar",
    category: "Hardware",
  },
  {
    title: "Leadership & Open Source",
    detail: "NextGen Hackathon Team Lead · Open Source Contributor",
    category: "Milestones",
  },
];

export const projects = [
  {
    id: "01",
    indexTag: "01 //",
    title: "Swasthya Seva — Real-Time Health Resource & Bed Telemetry PWA",
    summary:
      "Multilingual Progressive Web App helping residents in Chandigarh find nearby clinics via radius-based geospatial queries and check live hospital bed availability streamed from ESP32 sensors.",
    flowNodes: [
      { step: "01", label: "ESP32 Bed Sensor", sub: "mmWave / MQTT" },
      { step: "02", label: "Node/Express API", sub: "WebSockets Ingest" },
      { step: "03", label: "MongoDB GeoJSON", sub: "2dsphere $near" },
      { step: "04", label: "Multilingual PWA", sub: "Service Worker Sync" },
    ],
    tags: [
      "React",
      "React Native",
      "Node.js",
      "Express",
      "MongoDB Atlas",
      "Google OAuth",
      "ESP32",
    ],
    liveUrl: "https://swasthya-seva.vercel.app",
    githubUrl: "https://github.com/prateeksharma-dev/swasthya-seva",
  },
  {
    id: "02",
    indexTag: "02 //",
    title: "Transparency Chain — Decentralized Public Fund Tracker",
    summary:
      "Web3 anti-corruption prototype dApp enabling transparent public fund allocation and tamper-proof milestone verification. Built as Team Leader of The Dev Team for NextGen Hackathon 2025.",
    flowNodes: [
      { step: "01", label: "Fund Allocation", sub: "Treasury Lock" },
      { step: "02", label: "Solidity Escrow", sub: "EVM Contract" },
      { step: "03", label: "Milestone Verify", sub: "Multi-Sig Proof" },
      { step: "04", label: "Public Audit Ledger", sub: "On-Chain Event" },
    ],
    tags: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Shadcn UI",
      "Solidity",
      "Ethereum",
    ],
    liveUrl: null,
    githubUrl: "https://github.com/prateeksharma-dev/transparency-chain",
  },
  {
    id: "03",
    indexTag: "03 //",
    title: "Jarvis — Hybrid Online/Offline AI Voice Assistant",
    summary:
      "Dual-mode desktop voice assistant that executes local OS commands offline and routes natural-language reasoning tasks to the Gemini API when online.",
    flowNodes: [
      { step: "01", label: "Voice Capture", sub: "Acoustic Stream" },
      { step: "02", label: "Intent Router", sub: "Sub-40ms Classification" },
      { step: "03", label: "Offline OS Shell", sub: "Deterministic Actions" },
      { step: "04", label: "Gemini API", sub: "Cloud LLM Pipeline" },
    ],
    tags: [
      "Python",
      "SpeechRecognition",
      "Google Gemini API",
    ],
    liveUrl: null,
    githubUrl: "https://github.com/prateeksharma-dev/jarvis-ai-assistant",
  },
];

export const stackCategories = [
  {
    category: "Frontend",
    tag: "UI / UX",
    items: [
      "React",
      "React Native",
      "Tailwind CSS",
      "Vite",
      "Shadcn UI",
      "JavaScript (ES6+)",
      "HTML5/CSS3",
    ],
  },
  {
    category: "Backend & APIs",
    tag: "Runtime & Services",
    items: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "Google Sign-In / OAuth",
      "Gemini API",
    ],
  },
  {
    category: "Database",
    tag: "Data & Indexing",
    items: [
      "MongoDB Atlas",
      "GeoJSON Spatial Indexing",
      "Aggregation Pipelines",
    ],
  },
  {
    category: "Systems & IoT",
    tag: "Hardware & Embedded",
    items: [
      "Python",
      "C/C++",
      "ESP32",
      "Hi-Link HLK-LD2410B mmWave Radar",
      "Git/GitHub",
    ],
  },
];

export const milestones = [
  {
    role: "Team Lead",
    title: "NextGen Hackathon 2025",
    project: "Transparency Chain",
  },
  {
    role: "Builder",
    title: "AI Fest 2026 & Campus Tank",
    project: "Chandigarh University",
  },
];

export const aboutCards = [
  {
    id: "football",
    index: "01 //",
    title: "Competitive Football & Endurance",
    tagline: "I-League 3rd Division Midfielder · 10k–12k Distance",
    body: "Box-to-box midfielder who debuted in the Indian I-League 3rd Division at age 18. I still play three competitive matches a week alongside weekly 10k–12k road circuits. Operating between backline defense and frontline scoring built tactical situational awareness, team communication under pressure, and relentless work ethic.",
  },
  {
    id: "motorcycle",
    index: "02 //",
    title: "High-Altitude Riding & Filmmaking",
    tagline: "Royal Enfield Meteor 350 · Himalayan Expeditionist",
    body: "Long-distance motorcyclist on a Royal Enfield Meteor 350 navigating high-altitude Himalayan mountain passes and creating travel films. Handling mechanical reliability in sub-zero passes translates directly to software engineering: design for unexpected failures, maintain composure under ambiguity, and verify every system.",
  },
];
