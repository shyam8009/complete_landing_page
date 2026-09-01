import React from 'react';
import { TechCTA } from '@/components/TechCTA';

const INTER = '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';

export function QuoteSection() {
  return (
    <section className="section-padding bg-black border-t border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(132,204,22,0.05),transparent_50%)]" />
      
      <div className="max-w-4xl mx-auto px-4 lg:px-6 relative z-10 text-center">
        <h2 className="quote-text text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-12 leading-tight tracking-tight" style={{ fontFamily: INTER }}>
          "Eliminate operational blind spots through rigorous multi-vector assessment."
        </h2>
        
        <div className="quote-text flex flex-col items-center gap-6">
          <TechCTA>
            CONTACT SECURITY ASSESSMENT DIVISION
          </TechCTA>
        </div>
      </div>
    </section>
  );
}


