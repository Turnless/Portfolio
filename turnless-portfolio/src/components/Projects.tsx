'use client';
import { motion } from 'framer-motion';
import { Terminal, Users, TrendingUp, ArrowUpRight, Zap, PenTool, BarChart3 } from 'lucide-react';

const impacts = [
  {
    type: "Software Engineering",
    title: "DeFi Protocol Architecture",
    stat: "99.9% Uptime",
    desc: "Engineered a high-performance interface for decentralized asset management, optimizing RPC calls to reduce latency by 60%.",
    points: ["Next.js 15 Implementation", "Gas-optimized UI flows", "Sub-second data syncing", "Cross-chain compatibility", "Secure wallet integration"],
    icon: <Terminal className="w-5 h-5" />,
    id: "01"
  },
  {
    type: "Community Operations",
    title: "Global Ecosystem Lead",
    stat: "400% Growth",
    desc: "Led the strategic scaling of a Tier-1 Web3 community from 5k to 25k members while maintaining high engagement metrics.",
    points: ["Automated Mod Workflows", "Crisis Management Protocol", "Retention Strategy Design", "Onboarding Scripting", "Global Team Coordination"],
    icon: <Users className="w-5 h-5" />,
    id: "02"
  },
  {
    type: "Strategic Advisory",
    title: "Project Growth Lead",
    stat: "24/7 Stability",
    desc: "Advised on ecosystem sustainability and governance models to ensure long-term protocol health and token utility.",
    points: ["Governance Design", "Operational Auditing", "Contributor Incentives", "Stakeholder Relations", "Risk Mitigation"],
    icon: <Zap className="w-5 h-5" />,
    id: "03"
  },
  {
    type: "Content & Narrative",
    title: "Technical Script Writing",
    stat: "1M+ Impressions",
    desc: "Translated complex blockchain concepts into viral technical narratives and video scripts for top-tier Web3 brands.",
    points: ["Technical Storytelling", "Brand Voice Alignment", "Script Optimization", "Multi-platform Strategy", "Engagement Analytics"],
    icon: <PenTool className="w-5 h-5" />,
    id: "04"
  },
  {
    type: "Management & Mod",
    title: "High-Traffic Moderation",
    stat: "50% Response ↑",
    desc: "Revolutionized discord architecture for high-volume projects, ensuring zero-spam environments and rapid support.",
    points: ["Discord Bot Customization", "Safety Protocol Setup", "Community Health Tracking", "Educational Content", "Event Management"],
    icon: <BarChart3 className="w-5 h-5" />,
    id: "05"
  }
];

const Projects = () => {
  return (
    <section className="py-32 px-6 max-w-7xl mx-auto" id="work">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-32 border-b border-[#38352e]/10 pb-12">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#a3988c]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-[#a3988c]">Impact Ledger</span>
          </div>
          <h3 className="text-7xl font-bold text-[#38352e] tracking-tighter leading-none">
            Selected <br /> <span className="text-[#a3988c]">Impacts.</span>
          </h3>
        </div>
        <p className="max-w-[280px] text-[11px] font-bold uppercase tracking-widest text-[#504943] leading-loose opacity-60">
          A definitive record of engineering excellence and ecosystem growth delivered across the Web3 landscape.
        </p>
      </div>

      {/* The Impact List */}
      <div className="space-y-12">
        {impacts.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group grid grid-cols-1 lg:grid-cols-12 gap-8 py-12 border-b border-[#38352e]/5 hover:bg-white/40 transition-all rounded-[2rem] px-4 md:px-8"
          >
            {/* 01: Category & ID */}
            <div className="lg:col-span-3 flex flex-col justify-between py-2">
              <span className="text-[10px] font-black text-[#a3988c] tracking-[0.3em] uppercase">{item.id} / {item.type}</span>
              <div className="hidden lg:flex w-12 h-12 rounded-2xl bg-[#38352e] text-white items-center justify-center group-hover:scale-110 transition-transform duration-500">
                {item.icon}
              </div>
            </div>

            {/* 02: Title & Description */}
            <div className="lg:col-span-4 space-y-6">
              <h4 className="text-4xl font-bold text-[#38352e] tracking-tight leading-none group-hover:text-[#a3988c] transition-colors duration-500">
                {item.title}
              </h4>
              <p className="text-[#504943] leading-relaxed text-sm font-medium">
                {item.desc}
              </p>
              <a 
                href="#contact" 
                className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-[#38352e] border-b-2 border-[#a3988c] pb-1 hover:gap-4 transition-all"
              >
                Full Case Study <ArrowUpRight size={14} />
              </a>
            </div>

            {/* 03: Big Stat & Points */}
            <div className="lg:col-span-5 bg-[#38352e] rounded-[2rem] p-8 flex flex-col justify-between shadow-2xl">
              <div className="flex justify-between items-start mb-8">
                <span className="text-4xl font-black text-[#e6ddd0] tracking-tighter">{item.stat}</span>
                <TrendingUp size={20} className="text-[#a3988c]" />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-6">
                {item.points.map((point, pIdx) => (
                  <div key={pIdx} className="flex items-center gap-2">
                    <div className="w-1 h-1 rounded-full bg-[#a3988c]" />
                    <span className="text-[10px] font-bold text-[#a3988c] uppercase tracking-wider">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;