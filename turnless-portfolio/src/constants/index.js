// src/constants/index.js

export const navLinks = [
  { name: "Work", href: "#work" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
  { name: "Skills", href: "#skills" },
];

export const skills = [
  { name: "Solidity", category: "Smart Contracts", icon: "⛓️", level: "Core" },
  { name: "React/Next.js", category: "Frontend", icon: "⚛️", level: "DApp" },
  { name: "Ethers.js", category: "Web3 Provider", icon: "🔗", level: "Interface" },
  { name: "Node.js", category: "Backend", icon: "🟢", level: "Server" },
  { name: "Rust", category: "High Perf", icon: "🦀", level: "Systems" },
  { name: "PostgreSQL", category: "Database", icon: "🗄️", level: "Storage" },
];

export const projects = [
  {
    title: "EcoTrack AI",
    impact: "Reduced server response time by 45% using Next.js 15 and edge functions.",
    challenge: "The legacy system couldn't handle real-time data streaming from 1,000+ IoT sensors.",
    solution: "I migrated the backend to a serverless architecture and implemented WebSockets for instant updates.",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    link: "#",
  },
];

export const socials = [
  { name: "GitHub", href: "https://github.com/turnless" },
  { name: "LinkedIn", href: "https://linkedin.com/in/yourprofile" },
  { name: "X-Twitter", href: "https://twitter.com/turnless2" },
];