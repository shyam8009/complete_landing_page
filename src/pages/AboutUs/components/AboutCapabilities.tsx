import React from 'react';
const INTER = "'Inter', sans-serif";

export default function AboutCapabilities() {
  return (
    <section className="w-full bg-[#050505] text-white py-16 sm:py-24 md:py-32 lg:py-48 z-10 relative border-t border-white/10">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-8 h-[1px] bg-[#84CC16]" />
              <span className="text-[#84CC16] text-xs tracking-[0.2em] font-medium" style={{ fontFamily: INTER }}>
                [ THE FORGE ]
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-8">
              Indigenous <br />
              <span className="font-bold">R&D & Manufacturing</span>
            </h2>
            
            <p className="text-lg text-white/70 leading-relaxed mb-8">
              Sahana Defence operates state-of-the-art research and development laboratories alongside highly secure, indigenous manufacturing facilities. We do not just assemble; we engineer from the foundational level up.
            </p>
            
            <div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-8">
              <div>
                <h4 className="text-3xl font-black mb-2">13+</h4>
                <p className="text-sm text-white/50 tracking-widest uppercase">Years Expertise</p>
              </div>
              <div>
                <h4 className="text-3xl font-black mb-2">25+</h4>
                <p className="text-sm text-white/50 tracking-widest uppercase">Defence Clients</p>
              </div>
            </div>
          </div>
          
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-tr from-[#84CC16]/20 to-transparent blur-2xl opacity-50 transition-opacity group-hover:opacity-100" />
            <div className="relative border border-white/10 bg-white/5 overflow-hidden rounded-sm">
              <img src="/assets/sahana_facility.png" alt="Sahana Facility" className="w-full h-auto object-cover grayscale opacity-80 mix-blend-screen transition-transform duration-700 group-hover:scale-105" />
              
              {/* Tactical overlay elements */}
              <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-[#84CC16]" />
              <div className="absolute top-4 right-4 w-4 h-4 border-t border-r border-[#84CC16]" />
              <div className="absolute bottom-4 left-4 w-4 h-4 border-b border-l border-[#84CC16]" />
              <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-[#84CC16]" />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
