import React from 'react';
import { motion } from 'framer-motion';

export function ElectroOpticsPitch() {
  return (
    <section className="relative w-full bg-[#000000] text-white py-32 px-6 md:px-12 lg:px-24 overflow-hidden font-['Inter',sans-serif]">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[1px] bg-gradient-to-r from-transparent via-[#84CC16]/20 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(132,204,22,0.03)_0%,transparent_50%)] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24">
        
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
                SYSTEM NARRATIVE
              </span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-8">
              Unblinking Precision in <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">Any Environment.</span>
            </h2>
            
            <div className="w-16 h-1 bg-[#84CC16]/50" />
          </motion.div>
        </div>

        <div className="flex-1 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-8"
          >
            <p className="text-lg sm:text-xl text-white/70 leading-relaxed font-light">
              Our Electro-Optical & Tactical Imaging Systems are engineered to penetrate the fog of war. By fusing ultra-long-range thermal tracking with high-definition visible optics, we strip away the cover of darkness, severe weather, and advanced camouflage.
            </p>
            
            <p className="text-base sm:text-lg text-white/50 leading-relaxed">
              From man-portable targeting arrays to massive coastal defense platforms, our multi-spectral solutions ensure that your command always maintains visual supremacy over the battlespace.
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
