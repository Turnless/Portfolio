'use client';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center px-6 pt-20 overflow-hidden">
      {/* Background Tech Accent */}
      <div className="absolute top-1/4 right-0 w-1/3 h-1/2 bg-[#a3988c]/10 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Text Content (Always Visible) */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 text-center lg:text-left"
        >
          {/* <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#504943]/10 bg-white/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-[10px] font-bold tracking-widest text-[#504943] uppercase">
              Available for new projects
            </span>
          </div> */}

          <h1 className="text-5xl md:text-7xl font-bold text-[#38352e] leading-[1.1]">
            Engineering <br /> 
            <span className="text-[#a3988c]">Digital Impact.</span>
          </h1>

          <p className="max-w-lg mx-auto lg:mx-0 text-lg text-[#504943] leading-relaxed">
I’m Abdulsalam, a Software Engineer focused on high-performance backends 
        and seamless user interfaces. Currently optimizing Web3 infrastructure.          </p>

          <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
            <a 
              href="#work" 
              className="px-8 py-4 bg-[#38352e] text-[#e6ddd0] rounded-xl font-bold hover:bg-[#504943] transition-all"
            >
              View My Work
            </a>
            <a 
              href="#contact" 
              className="px-8 py-4 border border-[#38352e] text-[#38352e] rounded-xl font-bold hover:bg-[#38352e]/5 transition-all"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        {/* Right Side: Image (Hidden on mobile/tablet, visible on Desktop) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden lg:flex justify-end relative"
        >
          {/* Decorative Elements */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#a3988c]/20 blur-3xl rounded-full" />
          
          <div className="relative w-full max-w-[400px] aspect-square">
            {/* The "Frame" */}
            <div className="absolute inset-0 border border-[#38352e]/10 rounded-[2.5rem] rotate-3 -z-10" />
            
            <div className="w-full h-full rounded-[2.5rem] overflow-hidden glass-card p-2 shadow-2xl">
              <img 
                src="/pics.jpg" 
                alt="Abdulsalam" 
                className="w-full h-full object-cover rounded-[2rem]"
              />
            </div>
            {/* Full Stack Tag has been removed as requested */}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;