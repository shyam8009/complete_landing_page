import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import bgHero from '@/imports/arsenal_facility.jpg';

export function AerospaceComponentsHero() {
  const scrollToPipeline = () => {
    const pipelineSection = document.getElementById('pipeline-section');
    if (pipelineSection) {
      pipelineSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full h-screen bg-[#050505] overflow-hidden flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={bgHero} 
          alt="Precision CNC Machining"
          className="w-full h-full object-cover opacity-60 object-right"
        />
        {/* Gradient Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/70 to-transparent w-[70%]" />
        {/* Radial vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#050505_100%)] opacity-80" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-2 h-2 rounded-full bg-[#84CC16] shadow-[0_0_10px_rgba(132,204,22,0.8)] animate-pulse" />
            <span className="text-[#84CC16] font-mono text-[10px] md:text-[12px] font-bold tracking-widest uppercase">
              STRATEGIC MANUFACTURING / AEROSPACE COMPONENTS
            </span>
          </motion.div>

          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 uppercase tracking-tight leading-[1.1]">
              FLIGHT-CRITICAL<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">AEROSPACE COMPONENTS</span>
            </h1>
          </motion.div>

          {/* Subheadline */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl text-white/70 max-w-3xl mb-10 font-light leading-relaxed"
          >
            Zero-defect precision machining for extreme aviation environments. Delivering mission-critical engine hardware and structural components with uncompromising quality, backed by over two decades of aerospace-grade manufacturing discipline.
          </motion.p>

          {/* CTA & Stats Row */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col md:flex-row items-start md:items-center gap-8"
          >
            {/* Primary CTA */}
            <button 
              onClick={scrollToPipeline}
              className="group relative px-8 py-4 bg-[#84CC16] text-[#050505] font-bold tracking-widest uppercase text-sm flex items-center gap-3 hover:bg-white transition-colors duration-300"
            >
              REQUEST COMPONENT QUOTE
              <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </button>

            {/* Quick Stats Block */}
            <div className="flex items-center gap-6 bg-white/5 backdrop-blur-md border border-white/10 px-6 py-4 rounded-sm">
              <div className="flex flex-col">
                <span className="text-white font-bold text-lg">AS9100D</span>
                <span className="text-white/40 text-[10px] uppercase tracking-wider font-mono">Aerospace Quality Management</span>
              </div>
              <div className="w-[1px] h-10 bg-white/10" />
              <div className="flex flex-col">
                <span className="text-white font-bold text-lg">20+ Years</span>
                <span className="text-white/40 text-[10px] uppercase tracking-wider font-mono">Precision Operations</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
