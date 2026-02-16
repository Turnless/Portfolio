'use client';
import { useState } from 'react';
import { socials } from '@/constants';
import { Github, Linkedin, Twitter, ExternalLink } from 'lucide-react'; 
import { motion, AnimatePresence } from 'framer-motion';

const Contact = () => {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');
    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch("https://formspree.io/f/xbdaowoe", {
        method: "POST",
        body: formData,
        headers: { 'Accept': 'application/json' }
      });
      if (response.ok) setStatus('success');
    } catch (error) {
      console.error(error);
      setStatus('idle');
    }
  };

  return (
    <footer className="bg-[#504943] text-[#e6ddd0] pt-24 pb-12 px-6" id="contact">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">
        
{/* Left Side: Professional Hook & Socials */}
<motion.div 
  initial={{ opacity: 0, x: -30 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  className="flex flex-col h-full justify-between"
>
  <div>
    <h2 className="text-sm font-black tracking-[0.4em] text-[#a3988c] mb-6 uppercase">
      The Next Chapter
    </h2>
    
    {/* High-Impact Heading */}
    <h3 className="text-6xl md:text-7xl font-bold text-white tracking-tighter leading-[0.85] mb-10">
      Let’s build <br />
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e6ddd0] to-[#a3988c]/40">
        something <br />
      </span>
      that matters<span className="text-[#a3988c]">.</span>
    </h3>

    <p className="text-[#a3988c] text-lg max-w-sm leading-relaxed mb-12">
      I specialize in taking technical complexity and turning it into clean, scalable impact.
    </p>

    {/* Location & Email (Minimalist Style) */}
              <div className="space-y-6 mb-12">
            <div className="flex items-center gap-5 group">
              <div className="w-12 h-12 rounded-full bg-[#a3988c]/10 flex items-center justify-center group-hover:bg-[#a3988c]/20 transition-colors">📧</div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-[#a3988c] font-bold">Email Me</p>
                <p className="font-medium">hassanabdulsalam170@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center gap-5 group">
              <div className="w-12 h-12 rounded-full bg-[#a3988c]/10 flex items-center justify-center group-hover:bg-[#a3988c]/20 transition-colors">📍</div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-[#a3988c] font-bold">Location</p>
                <p className="font-medium">Osun State, Nigeria</p>
              </div>
            </div>
          </div>
  </div>

  {/* Social Media Links - Horizontal Boutique Style */}
<div className="flex flex-wrap gap-x-10 gap-y-6 items-center">
  {socials.map((social) => {
    // Logic to pick the right icon based on the name
    const Icon = 
      social.name.toLowerCase().includes('github') ? Github :
      social.name.toLowerCase().includes('linkedin') ? Linkedin :
      social.name.toLowerCase().includes('twitter') || social.name.toLowerCase().includes('x') ? Twitter : 
      ExternalLink;

    return (
      <a 
        key={social.name} 
        href={social.href} 
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-3 transition-all"
      >
        {/* The Icon Container */}
        <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#a3988c] group-hover:border-[#a3988c] transition-all duration-300">
          <Icon 
            size={18} 
            className="text-[#a3988c] group-hover:text-[#38352e] transition-colors" 
          />
        </div>

        {/* The Text Label */}
        <div className="flex flex-col">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#a3988c] group-hover:text-white transition-colors">
            {social.name}
          </span>
          <span className="text-[9px] text-[#a3988c]/40 font-medium group-hover:text-[#a3988c] transition-colors">
            Connect ↗
          </span>
        </div>
      </a>
    );
  })}
</div>
</motion.div>



        {/* Right Side: The Functional Form */}
        <div className="relative">
          <AnimatePresence mode="wait">
            {status === 'success' ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full min-h-[400px] flex flex-col items-center justify-center text-center bg-white/5 rounded-[2.5rem] border border-white/10 p-10"
              >
                <span className="text-5xl mb-6">🚀</span>
                <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                <p className="text-[#a3988c]">I'll get back to you as soon as possible.</p>
                <button onClick={() => setStatus('idle')} className="mt-8 text-xs font-bold uppercase tracking-widest underline">Send another</button>
              </motion.div>
            ) : (
              <motion.div 
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="bg-white/5 p-10 rounded-[2.5rem] border border-white/10 backdrop-blur-sm"
              >
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase tracking-[0.2em] text-[#a3988c] font-bold ml-1">Full Name</label>
                    <input 
                      name="name"
                      required
                      type="text" 
                      placeholder="e.g. John Doe" 
                      className="w-full bg-transparent border-b border-white/20 py-3 outline-none focus:border-[#a3988c] transition-colors text-white placeholder:text-white/20" 
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase tracking-[0.2em] text-[#a3988c] font-bold ml-1">Email Address</label>
                    <input 
                      name="email"
                      required
                      type="email" 
                      placeholder="e.g. john@example.com" 
                      className="w-full bg-transparent border-b border-white/20 py-3 outline-none focus:border-[#a3988c] transition-colors text-white placeholder:text-white/20" 
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase tracking-[0.2em] text-[#a3988c] font-bold ml-1">Your Project</label>
                    <textarea 
                      name="message"
                      required
                      placeholder="What are we building?" 
                      rows={3} 
                      className="w-full bg-transparent border-b border-white/20 py-3 outline-none focus:border-[#a3988c] transition-colors resize-none text-white placeholder:text-white/20" 
                    />
                  </div>
                  <button 
                    disabled={status === 'sending'}
                    className="w-full py-5 bg-[#e6ddd0] text-[#38352e] rounded-2xl font-black uppercase tracking-widest hover:bg-white hover:scale-[1.02] transition-all disabled:opacity-50"
                  >
                    {status === 'sending' ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="mt-24 pt-8 border-t border-white/5 text-center">
        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#a3988c]">
          © {new Date().getFullYear()} Turnless Portfolio • Built with Next.js 15
        </p>
      </div>
    </footer>
  );
};

export default Contact;