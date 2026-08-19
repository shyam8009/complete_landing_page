import React from 'react';
import { motion } from 'framer-motion';

export default function IntelligenceSurveillancePitch() {
  return (
    <section className="relative w-full bg-[#000000] text-white section-padding px-6 md:px-12 lg:px-24 overflow-hidden font-['Inter',sans-serif]">
      {/* Background Accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[1px] bg-gradient-to-r from-transparent via-[#84CC16]/20 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(132,204,22,0.03)_0%,transparent_50%)] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24">
        
        {/* Left: Large Typography Focus */}
        <div className="flex-1">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-3 mb-8">
              <span className="w-2 h-2 rounded-full bg-[#84CC16] animate-pulse" />
              <span className="text-[#84CC16] font-mono text-[10px] sm:text-xs tracking-[0.2em] uppercase font-bold">
                Information Dominance
              </span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-8">
              Unblinking <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">Intelligence.</span>
            </h2>
            
            <div className="w-16 h-1 bg-[#84CC16]/50" />
          </motion.div>
        </div>

        {/* Right: Technical Pitch & Details */}
        <div className="flex-1 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-8"
          >
            <p className="text-lg sm:text-xl text-white/70 leading-relaxed font-light">
              In the modern theatre, information is the ultimate weapon. Uncertainty and fog-of-war cost operational superiority.
            </p>
            
            <p className="text-base sm:text-lg text-white/50 leading-relaxed">
              Sahana's intelligence architectures synthesize multi-domain data streams into actionable targeting matrices in real-time. By fusing Open Source Intelligence (OSINT), Signal Intelligence (SIGINT), and advanced AI analytics, we illuminate the grey zone and eliminate tactical blind spots for command centers.
            </p>
            
            <div className="grid grid-cols-2 gap-6 pt-8 border-t border-white/10 mt-8">
              <div>
                <div className="text-3xl font-bold text-white mb-2">100<span className="text-lg text-[#84CC16]">+</span></div>
                <div className="text-xs text-white/40 uppercase tracking-widest font-mono">Data Sources</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-2">&lt;1<span className="text-lg text-[#84CC16]">s</span></div>
                <div className="text-xs text-white/40 uppercase tracking-widest font-mono">AI Fusion Latency</div>
              </div>
            </div>
          </motion.div>
        </div>
        
      </div>
    </section>
  );
}

