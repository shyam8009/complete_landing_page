import React from 'react';
import { TechCTA } from '@/components/TechCTA';

export function QuantumCommunicationCTA() {
  const openContact = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    window.dispatchEvent(new CustomEvent('open-contact-modal'));
  };

  return (
    <section className="w-full bg-[#000000] section-padding px-6 flex flex-col items-center justify-center text-center relative overflow-hidden">
      {/* Subtle top gradient */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="max-w-[800px] mx-auto z-10 flex flex-col items-center">
        <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-white mb-10 leading-tight">
          DEFINE THE NEXT GENERATION OF SECURE DEFENCE COMMUNICATION.
        </h2>
        
        <TechCTA className="mb-6" onClick={openContact}>
          REQUEST FOR PROPOSAL
        </TechCTA>
        
        <a 
          href="#" 
          className="text-white/40 hover:text-white/80 text-xs tracking-wide transition-colors underline underline-offset-4 decoration-white/20 hover:decoration-white/50" 
          onClick={openContact}
        >
          Schedule an Engineering Consultation
        </a>
      </div>
    </section>
  );
}
