'use client'; // Required for Framer Motion animations

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import { motion, useScroll } from 'framer-motion';

export default function Home() {
  const { scrollYProgress } = useScroll();

  return (
    <main className="bg-[#e6ddd0] min-h-screen">
      {/* Background Decorative Blobs */}
<div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden pointer-events-none">
  <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-[#a3988c]/10 blur-[120px]" />
  <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] rounded-full bg-[#504943]/5 blur-[100px]" />
</div>
      {/* Subtle Scroll Progress Bar for UX */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-[#504943] z-50 origin-left"
        style={{ scaleX: scrollYProgress }}
      />
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      
      {/* We will add Contact & Footer next */}
    </main>
  );
}