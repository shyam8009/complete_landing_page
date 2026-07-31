import React from 'react';

const INTER = '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';

export function QuoteSection() {
  return (
    <section className="py-32 bg-[#020202] relative overflow-hidden border-t border-white/5">
      {/* Background radial gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(60,89,41,0.1),transparent_50%)]" />

      <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
        <div className="text-[#3C5929] font-mono text-sm uppercase tracking-widest mb-10">
          // PROCUREMENT & DEPLOYMENT
        </div>
        
        <h2 
          className="text-3xl md:text-5xl font-bold text-white uppercase tracking-tight leading-[1.2]"
          style={{ fontFamily: INTER }}
        >
          &ldquo;EQUIP YOUR TACTICAL UNITS WITH AGILE, HIGH-SPEED AERIAL SURVEILLANCE. <span className="relative inline-block">
            <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-white to-[#3C5929]">DEPLOY THE FPV DRONE BUDDY</span>
            <span className="absolute bottom-1 left-0 w-full h-[2px] bg-[#3C5929]/50" />
          </span> WHEN THE MISSION DEMANDS IT.&rdquo;
        </h2>
        
        <div className="mt-12 flex flex-col sm:flex-row items-center gap-6">
          <button className="bg-[#3C5929] text-black px-8 py-4 font-bold text-sm tracking-wider uppercase hover:bg-white transition-colors">
            Contact Defense Sales
          </button>
          <button className="border border-white/20 hover:border-white hover:bg-white hover:text-black text-white px-8 py-4 font-bold text-sm tracking-wider uppercase transition-all">
            Technical Specs
          </button>
        </div>

        <div className="mt-12 inline-flex items-center gap-2 px-4 py-2 border border-[#3C5929]/30 bg-[#3C5929]/10 rounded-full">
          <span className="w-2 h-2 rounded-full bg-[#3C5929] animate-pulse" />
          <span className="text-white/70 font-mono text-xs tracking-widest uppercase">MIL-STD Compliant Architecture</span>
        </div>
      </div>
    </section>
  );
}
