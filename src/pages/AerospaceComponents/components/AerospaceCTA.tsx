import React from 'react';
import { ChevronRight } from 'lucide-react';
import { TechCTA } from '@/components/TechCTA';

export function AerospaceCTA() {
  return (
    <section className="section-padding bg-[#000000] border-t border-white/5 relative overflow-hidden flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-6 text-center z-10 relative">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 uppercase tracking-tight leading-snug">
          Secure Your Flight-Critical Component Supply Chain
        </h2>
        
        <p className="text-lg text-white/60 mb-12 max-w-2xl mx-auto">
          Partner with Siddhanta Machining to leverage our fully integrated design, multi-axis CNC machinery, and CMM inspection capabilities for your next aerospace platform.
        </p>
        
        <div className="flex flex-col items-center justify-center gap-4">
          <TechCTA>
            CONTACT MANUFACTURING DIVISION
            <ChevronRight className="w-4 h-4 text-[#84CC16] group-hover:translate-x-1 transition-transform" />
          </TechCTA>
        </div>
      </div>
    </section>
  );
}

