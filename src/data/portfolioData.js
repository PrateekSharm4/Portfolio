export const personal = {
  name: "Prateek Sharma",
  role: "Full-Stack MERN & Hardware-Connected Systems Engineer",
  bio: "B.E. CSE (Hons. Full Stack Development) undergrad at Chandigarh University. I build practical web applications, geospatial platforms, and IoT-connected systems using React, Node.js, and MongoDB.",
  email: import.meta.env.VITE_OWNER_EMAIL || "prateeksharma.dev@gmail.com",
  phone: import.meta.env.VITE_OWNER_PHONE || "+91 98765 43210",
  github: import.meta.env.VITE_OWNER_GITHUB || "https://github.com/prateeksharma-dev",
  linkedin: import.meta.env.VITE_OWNER_LINKEDIN || "https://linkedin.com/in/prateeksharma-dev",
};

export const projects = [
  {
    title: "Swasthya Seva — Real-Time Health Resource & Bed Telemetry PWA",
    summary:
      "Multilingual Progressive Web App helping residents in Chandigarh locate nearby clinics via radius-based geospatial queries and check real-time hospital bed availability streamed from ESP32 hardware.",
    tags: [
      "React",
      "React Native",
      "Node.js",
      "Express",
      "MongoDB Atlas (GeoJSON)",
      "Google OAuth",
      "ESP32",
    ],
    liveUrl: "https://swasthya-seva.vercel.app",
    githubUrl: "https://github.com/prateeksharma-dev/swasthya-seva",
  },
  {
    title: "Transparency Chain — Decentralized Public Fund Tracker",
    summary:
      "Web3 anti-corruption prototype dApp for tamper-proof public fund allocation and on-chain milestone verification. Built as Team Leader of The Dev Team for NextGen Hackathon 2025.",
    tags: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Shadcn UI",
      "Solidity",
      "Ethereum",
    ],
    liveUrl: "https://transparency-chain.vercel.app",
    githubUrl: "https://github.com/prateeksharma-dev/transparency-chain",
  },
  {
    title: "Jarvis — Hybrid Online/Offline AI Voice Assistant",
    summary:
      "Dual-mode desktop voice assistant that executes local OS commands offline and routes natural-language reasoning tasks to the Gemini API when connected.",
    tags: [
      "Python",
      "SpeechRecognition",
      "Google Gemini API",
    ],
    liveUrl: null,
    githubUrl: "https://github.com/prateeksharma-dev/jarvis-ai-assistant",
  },
];

export const stack = [
  {
    category: "Frontend",
    items: "React, React Native, Tailwind CSS, Vite, Shadcn UI, JavaScript (ES6+), HTML5/CSS3",
  },
  {
    category: "Backend & APIs",
    items: "Node.js, Express.js, REST APIs, Google Sign-In / OAuth, Gemini API",
  },
  {
    category: "Database",
    items: "MongoDB Atlas (GeoJSON spatial indexing & aggregation)",
  },
  {
    category: "Systems & IoT",
    items: "Python, C/C++, ESP32, Hi-Link HLK-LD2410B 24GHz mmWave Radar, Solidity, Git/GitHub",
  },
];

export const milestones = [
  {
    title: "Team Lead, NextGen Hackathon 2025",
    context: "Transparency Chain",
  },
  {
    title: "Builder, AI Fest 2026 & Campus Tank",
    context: "Chandigarh University",
  },
  {
    title: "Registered Contributor, Google Summer of Code (GSoC) 2026",
    context: "Open Source",
  },
];

export const aboutText =
  "Outside engineering, I played as a box-to-box midfielder in the Indian I-League 3rd Division (debuting at 18) and still play weekly matches alongside 10k–12k road runs. When I'm away from the keyboard, I ride a Royal Enfield Meteor 350 across Himalayan routes like Yulla Kanda (3,895m) and edit travel films.";
