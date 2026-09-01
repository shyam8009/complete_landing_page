import React from 'react';
import { ChevronRight } from 'lucide-react';
import { TechCTA } from '@/components/TechCTA';

export function ClosingSection() {
  return (
    <section className="section-padding bg-[#000000] border-t border-white/5 relative overflow-hidden flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-6 text-center z-10 relative">
        <div className="mb-4">
          <span className="text-[#84CC16] font-mono text-sm tracking-widest uppercase">
            Architect Your Cloud Infrastructure
          </span>
        </div>
        <h2 className="text-2xl md:text-4xl font-bold text-white mb-12 uppercase tracking-tight leading-snug">
          Partner with our certified team of cloud solution architects to migrate your on-premise applications and deploy fully scalable serverless architectures.
        </h2>
        
        <div className="flex flex-col items-center justify-center gap-4">
          <TechCTA>
            REQUEST A CONSULTATION
            <ChevronRight className="w-4 h-4 text-[#84CC16] group-hover:translate-x-1 transition-transform" />
          </TechCTA>
          
          <a href="#" className="text-white/40 hover:text-white/80 text-sm transition-colors mt-2">
            Explore Cloud Deployments
          </a>
        </div>
      </div>
    </section>
  );
}
