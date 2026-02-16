'use client';
import { motion } from 'framer-motion';
import { Target, Zap, Shield } from 'lucide-react';

const About = () => {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto" id="about">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        {/* Photo Side - Optimized for 400x400 */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative flex justify-center items-center"
        >
          {/* Background Gradient Glow */}
          <div className="absolute w-64 h-64 bg-[#a3988c]/20 rounded-full blur-3xl -z-10" />
          
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-full max-w-[400px] aspect-square overflow-hidden rounded-[2.5rem] glass-card p-3"
          >
            <img 
              src="/pics.jpg" 
              alt="Abdulsalam"
              className="w-full h-full object-cover rounded-[2rem] grayscale hover:grayscale-0 transition-all duration-500"
            />
          </motion.div>

          {/* Floating Badge (Visual Signal) */}
          <motion.div 
            initial={{ rotate: -10 }}
            className="absolute -bottom-4 -right-4 md:right-4 bg-[#38352e] text-[#e6ddd0] px-6 py-3 rounded-2xl font-bold text-sm shadow-xl"
          >
            S.E. @ 2026
          </motion.div>
        </motion.div>

        {/* Text Side */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-sm font-black tracking-[0.2em] text-[#a3988c] mb-4 uppercase">
            The Philosophy
          </h2>
          <h3 className="text-5xl font-bold text-[#38352e] mb-8 tracking-tighter leading-[1.1]">
            <span className="text-[#a3988c]">Code is the foundation. </span><br/> People are the power.
          </h3>
          
          <div className="space-y-6 text-lg text-[#504943] leading-relaxed max-w-xl">
            <p>
                            I entered the Web3 space with a core mission: to bridge the gap between complex software engineering and high-growth ecosystem management. 

            </p>
            <p>
                           I don’t just deploy smart contracts or build frontends; I architect the social and technical layers that make a project sustainable.

            </p>
          </div>

          <div className="mt-10 flex gap-10">
            <div>
              <p className="text-3xl font-black text-[#38352e]">50+</p>
              <p className="text-[10px] font-bold uppercase tracking-widest text-[#a3988c]">Commits Weekly</p>
            </div>
            <div>
              <p className="text-3xl font-black text-[#38352e]">100%</p>
              <p className="text-[10px] font-bold uppercase tracking-widest text-[#a3988c]">Uptime Focus</p>
            </div>
          </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-white/5">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Target size={18} className="text-[#a3988c]" />
                <h4 className="font-bold uppercase tracking-widest text-xs">Mission Control</h4>
              </div>
              <p className="text-sm text-[#a3988c]/70 leading-relaxed italic">
                Focusing on operational efficiency and strategic growth to ensure project longevity in volatile markets.
              </p>
            </div>

                        <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Shield size={18} className="text-[#a3988c]" />
                <h4 className="font-bold uppercase tracking-widest text-xs">Ecosystem Safety</h4>
              </div>
              <p className="text-sm text-[#a3988c]/70 leading-relaxed italic">
                Implementing rigorous moderation protocols and safety scripts to protect communities from exploits.
              </p>
            </div>

            </div>
            
            <div className="pt-8">
            <blockquote className="border-l-4 border-[#a3988c] pl-6 py-2">
              <p className="text-xl font-medium text-[#38352e] italic">
                "Abdulsalam doesn't just manage a community; he builds an infrastructure where users become stakeholders."
              </p>
            </blockquote>
          </div>


        </motion.div>

      </div>
    </section>
  );
};

export default About;