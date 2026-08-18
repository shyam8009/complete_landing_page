import React from 'react';
import { ChevronRight } from 'lucide-react';

export function AerospaceCTA() {
  return (
    <section className="py-32 bg-[#000000] border-t border-white/5 relative overflow-hidden flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-6 text-center z-10 relative">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 uppercase tracking-tight leading-snug">
          Secure Your Flight-Critical Component Supply Chain
        </h2>
        
        <p className="text-lg text-white/60 mb-12 max-w-2xl mx-auto">
          Partner with Siddhanta Machining to leverage our fully integrated design, multi-axis CNC machinery, and CMM inspection capabilities for your next aerospace platform.
        </p>
        
        <div className="flex flex-col items-center justify-center gap-4">
          <button className="flex items-center gap-2 px-8 py-4 bg-[#84CC16] hover:bg-[#95e01a] text-black font-bold uppercase tracking-wider text-sm transition-all duration-300 rounded-sm">
            CONTACT MANUFACTURING DIVISION
            <ChevronRight className="w-4 h-4" />
          </button>
          
          <a href="#" className="text-white/40 hover:text-white/80 text-sm transition-colors mt-2 underline underline-offset-4 decoration-white/20">
            Submit Technical Drawings
          </a>
        </div>
      </div>
    </section>
  );
}
