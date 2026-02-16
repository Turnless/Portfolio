// constants/index.js

export const navLinks = [
  { name: "Work", href: "#work" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export const skills = [
  { name: "React", category: "Frontend", icon: "⚛️" },
  { name: "Node.js", category: "Backend", icon: "🟢" },
  { name: "SQL", category: "Database", icon: "🗄️" },
  { name: "Python", category: "Scripting", icon: "🐍" },
  // Notice: No percentages. We will display these as a "Bento Grid".
];

export const projects = [
  {
    title: "Web3 dApp Runner",
    description: "Architected a secure API that reduced transaction latency by 30% for 500+ active users.", // IMPACT, NOT LIST
    tech: ["React", "Solidity", "Node.js"],
    challenge: "The blockchain sync was too slow for a good UX.",
    solution: "Implemented a custom caching layer using Redis.",
    link: "#",
  },
];