'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { navLinks } from '@/constants';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Twitter, Linkedin, ArrowUpRight } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-[100] transition-all duration-500 ease-in-out ${
      scrolled ? 'top-6' : 'top-0'
    }`}>
      {/* Main Glass Capsule */}
      <div className={`mx-auto px-8 flex justify-between items-center transition-all duration-500 ${
        scrolled 
          ? 'max-w-2xl bg-white/40 backdrop-blur-xl rounded-full py-3 shadow-lg border border-white/20' 
          : 'max-w-7xl py-10 bg-transparent'
      }`}>
        
        {/* Logo Section */}
        <div className="flex items-center gap-4 z-[110] group cursor-pointer">
          <div className="relative w-10 h-10 rounded-full p-[2px] bg-gradient-to-tr from-[#a3988c] to-transparent">
            <div className="relative w-full h-full rounded-full overflow-hidden bg-[#38352e]">
              <Image 
                src="/pics.jpg" 
                alt="Turnless Identity"
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-110 group-hover:scale-100"
                priority
              />
            </div>
          </div>
          
          <div className="flex flex-col justify-center">
            <span className="text-lg font-black tracking-tighter leading-none text-[#38352e]">
              TURNLESS<span className="text-[#a3988c]">.</span>
            </span>
            <span className="text-[8px] font-bold uppercase tracking-[0.4em] text-[#38352e] opacity-60">
              stay creative
            </span>
          </div>
        </div>

        {/* Desktop Links (Re-added this section) */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-[10px] font-black uppercase tracking-[0.3em] text-[#504943] hover:text-[#38352e] transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#38352e] transition-all group-hover:w-full" />
            </a>
          ))}
          
          <a 
            href="#contact" 
            className="px-6 py-2.5 bg-[#38352e] text-[#e6ddd0] rounded-full text-[10px] font-black uppercase tracking-widest transition-all hover:scale-105 active:scale-95 shadow-md"
          >
            Hire
          </a>
        </div>

        {/* Mobile Toggle Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden relative z-[110] w-10 h-10 flex flex-col justify-center items-center group"
        >
          <div className={`w-6 h-[2px] bg-[#38352e] transition-all duration-300 ${
            isOpen ? 'rotate-45 translate-y-[2px]' : ''
          }`} />
          <div className={`w-6 h-[2px] mt-1.5 bg-[#38352e] transition-all duration-300 ${
            isOpen ? '-rotate-45 -translate-y-[6px]' : ''
          }`} />
        </button>
      </div>

      {/* Modern Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-[#e6ddd0] z-[105] flex flex-col md:hidden"
          >
            <div className="flex flex-col h-full justify-between p-10 pt-32">
              
              {/* Navigation Section */}
              <div className="space-y-8">
                <span className="text-[10px] font-black text-[#a3988c] tracking-[0.5em] uppercase block mb-4">Navigation</span>
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    custom={i}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                    onClick={() => setIsOpen(false)}
                    className="flex items-end gap-4 group"
                  >
                    <span className="text-5xl font-bold text-[#38352e] tracking-tighter leading-none group-hover:text-[#a3988c] transition-colors">
                      {link.name}
                    </span>
                    <ArrowUpRight size={24} className="text-[#a3988c] mb-1 opacity-0 group-hover:opacity-100 transition-all" />
                  </motion.a>
                ))}
              </div>

              {/* Mobile Footer Section */}
              <div className="space-y-10 border-t border-[#38352e]/10 pt-10">
                <div className="grid grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <p className="text-[9px] font-black uppercase tracking-widest text-[#a3988c]">Presence</p>
                    <div className="flex gap-4">
                      <motion.a 
                        whileHover={{ y: -3 }}
                        href="https://github.com/turnless" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-[#38352e] hover:text-[#a3988c] transition-colors"
                      >
                        <Github size={20} />
                      </motion.a>
                      <motion.a 
                        whileHover={{ y: -3 }}
                        href="https://twitter.com/turnless2" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-[#38352e] hover:text-[#a3988c] transition-colors"
                      >
                        <Twitter size={20} />
                      </motion.a>
                      <motion.a 
                        whileHover={{ y: -3 }}
                        href="https://linkedin.com/in/turnless" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-[#38352e] hover:text-[#a3988c] transition-colors"
                      >
                        <Linkedin size={20} />
                      </motion.a>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <p className="text-[9px] font-black uppercase tracking-widest text-[#a3988c]">Availability</p>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                      <span className="text-xs font-bold text-[#38352e]">Ready to Sync</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-[10px] font-bold text-[#38352e]/40 uppercase tracking-[0.3em] text-center">
                  Turnless Protocol © 2026
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Header;