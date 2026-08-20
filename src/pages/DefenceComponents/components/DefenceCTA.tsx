import React from 'react';
import { TechCTA } from '@/components/TechCTA';

export function DefenceCTA() {
  return (
    <section className="w-full bg-[#000000] section-padding py-32 px-6 flex flex-col items-center justify-center text-center relative overflow-hidden font-sans">
      
      {/* Subtle top gradient */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#84CC16]/30 to-transparent" />
      
      <div className="max-w-[900px] mx-auto z-10 flex flex-col items-center">
        
        <span className="text-[#84CC16] font-mono text-sm tracking-widest uppercase mb-6 block">
          Ready to Deploy
        </span>

        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-white mb-8 leading-tight">
          Secure Your Tactical Component Supply Chain
        </h2>

        <p className="text-white/60 text-lg md:text-xl max-w-2xl mb-12 font-light leading-relaxed">
          Partner with Siddhanta Machining to leverage our integrated design, advanced 5-axis CNC machinery, and rigorous inspection capabilities for your next defense platform.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <TechCTA>
            <span>CONTACT MANUFACTURING DIVISION</span>
          </TechCTA>
          
          <a href="#" className="text-white/40 hover:text-white/80 text-xs tracking-wide transition-colors underline underline-offset-4 decoration-white/20 hover:decoration-white/50 uppercase font-mono mt-4 sm:mt-0">
            Submit Technical Drawings
          </a>
        </div>
      </div>
    </section>
  );
}
