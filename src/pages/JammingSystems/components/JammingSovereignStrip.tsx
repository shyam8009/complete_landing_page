import React from 'react';

export function JammingSovereignStrip() {
  return (
    <section className="w-full bg-[#050505] border-y border-white/10 py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-radial-[circle_at_center,rgba(132,204,22,0.03)_0%,transparent_50%] pointer-events-none" />
      
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
          
          <div className="flex flex-col items-center md:items-start text-center md:text-left group">
            <div className="mb-6 p-4 rounded-full bg-white/5 border border-white/10 group-hover:border-[#84CC16]/50 group-hover:bg-[#84CC16]/5 transition-all duration-300">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#84CC16" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-3" style={{ fontFamily: 'Inter' }}>Indigenous Critical Path</h3>
            <p className="text-sm text-white/50 leading-relaxed font-light">
              Engineered in India with zero foreign dependency in critical RF transceiver pathways.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-start text-center md:text-left group">
            <div className="mb-6 p-4 rounded-full bg-white/5 border border-white/10 group-hover:border-[#84CC16]/50 group-hover:bg-[#84CC16]/5 transition-all duration-300">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#84CC16" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-3" style={{ fontFamily: 'Inter' }}>Defense-Grade Ruggedization</h3>
            <p className="text-sm text-white/50 leading-relaxed font-light">
              Hardened enclosures built for extreme operational climates, varying altitudes, and rigorous combat conditions.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-start text-center md:text-left group">
            <div className="mb-6 p-4 rounded-full bg-white/5 border border-white/10 group-hover:border-[#84CC16]/50 group-hover:bg-[#84CC16]/5 transition-all duration-300">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#84CC16" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-3" style={{ fontFamily: 'Inter' }}>C2 Network Integration</h3>
            <p className="text-sm text-white/50 leading-relaxed font-light">
              Interoperable with overarching tactical Command and Control (C2) frameworks for rapid counter-UAS deployment.
            </p>
          </div>
          
        </div>
      </div>
    </section>
  );
}
