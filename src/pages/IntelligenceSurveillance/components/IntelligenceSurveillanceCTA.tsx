import React from 'react';
import { TechCTA } from '@/components/TechCTA';

export function IntelligenceSurveillanceCTA() {
  return (
    <section className="w-full bg-[#000000] py-32 px-6 flex flex-col items-center justify-center text-center relative overflow-hidden">
      
      {/* Subtle top gradient */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="max-w-[800px] mx-auto z-10 flex flex-col items-center">
        <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-white mb-10 leading-tight">
          Achieve absolute informational dominance across all domains.
        </h2>
        
        <TechCTA>
          <span className="relative z-10">Contact Info Warfare Division</span>
          <div className="absolute inset-0 bg-white translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-out" />
        </TechCTA>
        
        <a href="#" className="text-white/40 hover:text-white/80 text-xs tracking-wide transition-colors underline underline-offset-4 decoration-white/20 hover:decoration-white/50">
          Request a Threat Assessment Consultation
        </a>
      </div>
    </section>
  );
}
