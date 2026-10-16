import React from 'react';
import { ChevronRight } from 'lucide-react';
import { TechCTA } from '@/components/TechCTA';

interface QuantumCTAProps {
  title?: string;
  primaryAction?: string;
  secondaryAction?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
}

export function QuantumCTA({
  title = "Define the next generation of aerospace and defence measurement.",
  primaryAction = "CONTACT QUANTUM DIVISION",
  secondaryAction = "Schedule an Engineering Consultation",
  onPrimaryClick,
  onSecondaryClick,
}: QuantumCTAProps) {
  const handlePrimary = () => {
    if (onPrimaryClick) onPrimaryClick();
    else window.dispatchEvent(new CustomEvent('open-contact-modal'));
  };

  const handleSecondary = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onSecondaryClick) onSecondaryClick();
    else window.dispatchEvent(new CustomEvent('open-contact-modal'));
  };

  return (
    <section className="w-full bg-[#000000] section-padding px-6 flex flex-col items-center justify-center text-center relative overflow-hidden">
      {/* Subtle top gradient */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="max-w-[800px] mx-auto z-10 flex flex-col items-center">
        <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-white mb-10 leading-tight">
          {title}
        </h2>
        
        <TechCTA className="mb-6" onClick={handlePrimary}>
          {primaryAction}
          <ChevronRight className="w-4 h-4 text-[#84CC16] group-hover:translate-x-1 transition-transform" />
        </TechCTA>
        
        {secondaryAction && (
          <a 
            href="#" 
            className="text-white/40 hover:text-white/80 text-xs tracking-wide transition-colors underline underline-offset-4 decoration-white/20 hover:decoration-white/50 uppercase font-mono tracking-wider" 
            onClick={handleSecondary}
          >
            {secondaryAction}
          </a>
        )}
      </div>
    </section>
  );
}
