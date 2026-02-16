'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';

interface ProjectProps {
  project: {
    title: string;
    impact: string;
    challenge: string;
    solution: string;
    tech: string[];
    link: string;
  }
}

const ProjectCard = ({ project }: ProjectProps) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <motion.div 
      layout
      className="glass-card rounded-[2rem] overflow-hidden p-8 flex flex-col h-full"
    >
      <div className="flex justify-between items-start mb-6">
        <h3 className="text-3xl font-bold tracking-tighter">{project.title}</h3>
        <div className="flex gap-2">
           {project.tech.map(t => (
             <span key={t} className="text-[10px] font-black uppercase tracking-widest bg-[#504943] text-[#e6ddd0] px-2 py-1 rounded">
               {t}
             </span>
           ))}
        </div>
      </div>

      <p className="text-lg font-medium text-[#504943] mb-8 leading-relaxed">
        {project.impact}
      </p>

      {/* Case Study Toggle */}
      <div className="mt-auto">
        <button 
          onClick={() => setShowDetails(!showDetails)}
          className="text-sm font-bold border-b-2 border-[#38352e] pb-1 hover:text-[#a3988c] hover:border-[#a3988c] transition-all"
        >
          {showDetails ? "CLOSE DETAILS —" : "VIEW CASE STUDY +"}
        </button>

        {showDetails && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="mt-6 pt-6 border-t border-[#504943]/10 space-y-4"
          >
            <div>
              <span className="text-[10px] font-bold uppercase text-[#a3988c]">The Challenge</span>
              <p className="text-sm text-[#504943] leading-relaxed">{project.challenge}</p>
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase text-[#a3988c]">The Solution</span>
              <p className="text-sm text-[#504943] leading-relaxed">{project.solution}</p>
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;