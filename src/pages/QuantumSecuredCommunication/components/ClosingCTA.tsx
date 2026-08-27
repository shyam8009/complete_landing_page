import React from 'react';
import { TechCTA } from '@/components/TechCTA';

export function ClosingCTA() {
  return (
    <section className="w-full bg-[#000000] section-padding px-6 flex flex-col items-center justify-center text-center relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="max-w-[800px] mx-auto z-10 flex flex-col items-center">
        <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-white mb-10 leading-tight font-['Inter',sans-serif]">
          "THE DANGEROUS INTERCEPTION IS THE ONE YOU NEVER FIND OUT ABOUT."
        </h2>
        
        <TechCTA className="mb-6">
          REQUEST FOR PROPOSAL
        </TechCTA>
      </div>
    </section>
  );
}