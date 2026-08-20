import React from 'react';
import { TechCTA } from '@/components/TechCTA';

export function QuantumCTA() {
  return (
    <section className="w-full bg-[#000000] section-padding px-6 flex flex-col items-center justify-center text-center relative overflow-hidden">
      
      {/* Subtle top gradient */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="max-w-[800px] mx-auto z-10 flex flex-col items-center">
        <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-white mb-6 leading-tight">
          Secure Your Operational Foundation
        </h2>
        
        <p className="text-white/60 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
          Consult with our certified architects to deploy scalable cloud services, secure IoT integrations, and real-time video streaming platforms tailored for defence.
        </p>
        
        <div className="mb-6">
          <TechCTA>
            <span className="relative z-10">CONTACT INFRASTRUCTURE DIVISION</span>
            <div className="absolute inset-0 bg-white translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-out" />
          </TechCTA>
        </div>
        
        <a href="#" className="text-white/40 hover:text-white/80 text-xs tracking-wide transition-colors underline underline-offset-4 decoration-white/20 hover:decoration-white/50 uppercase">
          Request Architecture Consultation
        </a>
      </div>
    </section>
  );
}
