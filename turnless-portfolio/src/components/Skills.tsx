'use client';
import { motion } from 'framer-motion';
import { Terminal, Shield, Zap, PenTool, Layout, Globe } from 'lucide-react';

const categories = [
  {
    label: "01. Engineering",
    title: "Technical Lead",
    skills: ["Full Stack Dev", "Web3 Integrations", "System Architecture"],
    icon: <Terminal size={20} />,
    color: "bg-blue-500"
  },
  {
    label: "02. Governance",
    title: "Operations & Advisor",
    skills: ["Operation Officer", "Strategic Advisor", "Ecosystem Growth"],
    icon: <Shield size={20} />,
    color: "bg-emerald-500"
  },
  {
    label: "03. Community",
    title: "Management & Mod",
    skills: ["Community Manager", "Lead Moderator", "Discord Architect"],
    icon: <Globe size={20} />,
    color: "bg-purple-500"
  },
  {
    label: "04. Narrative",
    title: "Content & Scripting",
    skills: ["Script Writer", "Content Creator", "Technical Writing"],
    icon: <PenTool size={20} />,
    color: "bg-orange-500"
  }
];

const Skills = () => {
  return (
    <section className="py-32 px-6 max-w-7xl mx-auto" id="skills">
      {/* Header with Technical Metadata */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 border-b border-[#38352e]/10 pb-10">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#a3988c] animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#a3988c]">
              Service Protocol v1.0
            </span>
          </div>
          <h3 className="text-6xl font-bold text-[#38352e] tracking-tighter leading-none">
            Technical <br /> <span className="text-[#a3988c]">Arsenal.</span>
          </h3>
        </div>
        <div className="mt-8 md:mt-0 max-w-[280px]">
          <p className="text-[12px] leading-relaxed text-[#504943] font-medium uppercase tracking-wider">
            A cross-functional stack bridging the gap between clean code and community growth.
          </p>
        </div>
      </div>

      {/* The Modern Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 border-l border-t border-[#38352e]/10">
        {categories.map((cat, idx) => (
          <motion.div
            key={cat.label}
            whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.5)" }}
            className="p-10 border-r border-b border-[#38352e]/10 relative group overflow-hidden transition-colors"
          >
            {/* Subtle Hover Reveal */}
            <div className="absolute top-0 left-0 w-[2px] h-0 bg-[#38352e] group-hover:h-full transition-all duration-500" />
            
            <div className="flex justify-between items-start mb-16">
              <span className="text-[10px] font-black text-[#a3988c] tracking-[0.3em] uppercase">
                {cat.label}
              </span>
              <div className="p-3 rounded-full border border-[#38352e]/10 text-[#38352e] group-hover:bg-[#38352e] group-hover:text-white transition-all duration-300">
                {cat.icon}
              </div>
            </div>

            <h4 className="text-3xl font-bold text-[#38352e] mb-6 tracking-tight">
              {cat.title}
            </h4>

            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill) => (
                <div 
                  key={skill}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-md border border-[#38352e]/5 bg-white/30"
                >
                  <div className="w-1 h-1 rounded-full bg-[#a3988c]" />
                  <span className="text-[11px] font-bold text-[#504943] uppercase tracking-tighter">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;