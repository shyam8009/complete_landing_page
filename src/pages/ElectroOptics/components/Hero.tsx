import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import bgVideo from '@/imports/infinity_optics_gwr_video_mvp.mp4';

export function Hero() {
  return (
    <section className="relative w-full h-screen bg-[#050505] overflow-hidden flex items-center">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover opacity-100 object-right"
        >
          <source src={bgVideo} type="video/mp4" />
        </video>
        
        {/* Gradient Overlay to ensure text readability on the left */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/70 to-transparent" />
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
              ELECTRONIC WARFARE / ELECTRO-OPTICS
            </span>
          </motion.div>

          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 uppercase tracking-tight leading-[1.1]">
              ELECTRO-OPTICS
            </h1>
          </motion.div>

          {/* Subheadline */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl text-white/60 mb-10 max-w-2xl leading-relaxed"
          >
            Unblinking multi-spectral dominance. From compact mobile PTZs to extreme-range border surveillance, our electro-optical systems deliver absolute visual clarity in any environment, day or night.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          >
            <button 
              onClick={() => {
                document.getElementById('ecosystem-track')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group relative inline-flex items-center gap-4 px-8 py-4 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#84CC16]/50 transition-all duration-300 rounded-sm overflow-hidden"
            >
              <div className="absolute inset-0 w-0 bg-[#84CC16]/10 group-hover:w-full transition-all duration-500 ease-out" />
              <span className="relative z-10 text-[12px] font-bold tracking-widest uppercase text-white group-hover:text-[#84CC16] transition-colors">
                DEPLOY OPTICAL ASSETS
              </span>
              <ArrowDown className="relative z-10 w-4 h-4 text-white/50 group-hover:text-[#84CC16] group-hover:translate-y-1 transition-all" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
