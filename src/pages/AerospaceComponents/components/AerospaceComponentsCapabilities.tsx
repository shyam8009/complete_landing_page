import React from 'react';
import { motion } from 'framer-motion';

import cadImage from '@/imports/digital_twin.jpg'; // Using an available tech/schematic image

export function AerospaceComponentsCapabilities() {
  return (
    <section className="w-full bg-[#0a0a0a] py-32 px-6 md:px-12 lg:px-24 border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
        
        {/* Left: Text Narrative */}
        <div className="flex-1 w-full">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#84CC16] animate-pulse" />
              <span className="text-[#84CC16] font-mono text-[10px] md:text-[12px] font-bold tracking-widest uppercase">
                ADVANCED METALLURGY
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 uppercase tracking-tight leading-tight">
              Uncompromising <br/> Precision for <br/> Airborne Missions
            </h2>
            
            <p className="text-lg text-white/70 leading-relaxed font-light mb-8">
              Aerospace component manufacturing permits zero margin for error. Every structural spar, turbine housing, and actuation bracket must endure punishing gravitational g-forces, thermal expansion cycles, and vibrational fatigue.
            </p>
            
            <p className="text-lg text-white/70 leading-relaxed font-light">
              Our state-of-the-art facility integrates automated CNC systems with proprietary heat-treatment protocols, delivering components that exceed global aviation standards.
            </p>
          </motion.div>
        </div>

        {/* Right: Interactive Technical Rendering */}
        <div className="flex-1 w-full relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative rounded-lg overflow-hidden border border-white/10 aspect-square max-h-[600px] bg-black group"
          >
            <img 
              src={cadImage} 
              alt="High-fidelity 3D CAD schematic" 
              className="w-full h-full object-cover opacity-60 mix-blend-screen group-hover:scale-105 transition-transform duration-700"
            />
            
            {/* Grid overlay for technical feel */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA0MCAwIEwgMCAwIDAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] pointer-events-none" />

            {/* Floating HUD Metrics */}
            <div className="absolute top-8 right-8 bg-black/60 backdrop-blur-md border border-white/10 px-4 py-2 rounded text-xs font-mono text-white/90">
              <span className="text-[#84CC16] mr-2">▶</span> High Strength-to-Weight Ratio
            </div>
            
            <div className="absolute bottom-1/2 left-8 bg-black/60 backdrop-blur-md border border-white/10 px-4 py-2 rounded text-xs font-mono text-white/90">
              <span className="text-[#84CC16] mr-2">▶</span> Extreme Thermal Resistance
            </div>
            
            <div className="absolute bottom-8 right-12 bg-black/60 backdrop-blur-md border border-white/10 px-4 py-2 rounded text-xs font-mono text-white/90">
              <span className="text-[#84CC16] mr-2">▶</span> Vibration Fatigue Dampening
            </div>

          </motion.div>
        </div>

      </div>
    </section>
  );
}
