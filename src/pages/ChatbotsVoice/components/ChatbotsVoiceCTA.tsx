import React from 'react';
import { ChevronRight } from 'lucide-react';
import { TechCTA } from '@/components/TechCTA';

export function ChatbotsVoiceCTA() {
  return (
    <section className="py-24 bg-[#050505] border-t border-white/5 relative overflow-hidden flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-6 text-center z-10 relative">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 uppercase tracking-tight leading-snug">
          Transform Tactical Communications into Actionable Data
        </h2>
        
        <p className="text-lg text-white/60 mb-12 max-w-2xl mx-auto">
          Consult with our Deeptech engineers to integrate secure Natural Language Processing, voice assistants, and military-grade chatbots into your operational architecture.
        </p>
        
        <div className="flex flex-col items-center justify-center gap-4">
          <TechCTA>
            CONTACT AI DIVISION
            <ChevronRight className="w-4 h-4 text-[#84CC16] group-hover:translate-x-1 transition-transform" />
          </TechCTA>
          <a href="#" className="text-white/40 hover:text-white/80 text-xs tracking-wide transition-colors underline underline-offset-4 decoration-white/20 hover:decoration-white/50 uppercase font-mono mt-4">
            Request Deeptech Demo
          </a>
        </div>
      </div>
    </section>
  );
}
