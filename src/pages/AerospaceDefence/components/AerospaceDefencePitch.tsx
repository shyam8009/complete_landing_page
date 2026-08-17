import React from 'react';
import { motion } from 'framer-motion';

export default function AerospaceDefencePitch() {
  return (
    <section className="relative w-full bg-[#000000] text-white py-32 px-6 md:px-12 lg:px-24 overflow-hidden font-['Inter',sans-serif]">
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
                Manufacturing Philosophy
              </span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-8">
              Structural <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">Perfection.</span>
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
              Mission-Critical Precision: Defense and aerospace deployment leaves zero margin for error; every micro-inch and material grain must perform under extreme physical duress.
            </p>
            
            <p className="text-base sm:text-lg text-white/50 leading-relaxed">
              By combining aerospace-grade alloys with low-loss high-frequency SATCOM architectures, we ensure structural and signal perfection. Our fully certified indigenous fabrication pipelines guarantee absolute supply chain security and compliance with rigorous military standards.
            </p>
            
            <div className="grid grid-cols-2 gap-6 pt-8 border-t border-white/10 mt-8">
              <div>
                <div className="text-3xl font-bold text-white mb-2">AS9100</div>
                <div className="text-xs text-white/40 uppercase tracking-widest font-mono">Certified Quality</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-2">100%</div>
                <div className="text-xs text-white/40 uppercase tracking-widest font-mono">Indigenous Supply</div>
              </div>
            </div>
          </motion.div>
        </div>
        
      </div>
    </section>
  );
}
