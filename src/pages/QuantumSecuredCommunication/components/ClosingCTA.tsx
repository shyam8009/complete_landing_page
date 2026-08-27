import React from 'react';
import { ChevronRight } from 'lucide-react';
import { TechCTA } from '@/components/TechCTA';

const INTER = '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';

export function ClosingCTA() {
  return (
    <section className="section-padding bg-black border-t border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(132,204,22,0.05),transparent_50%)]" />
      
      <div className="max-w-4xl mx-auto px-4 lg:px-6 relative z-10 text-center">
        <h2 className="quote-text text-3xl sm:text-4xl md:text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-12 leading-tight tracking-tight uppercase" style={{ fontFamily: INTER }}>
          "THE DANGEROUS INTERCEPTION IS THE ONE YOU NEVER FIND OUT ABOUT."
        </h2>
        
        <div className="quote-text flex flex-col items-center gap-6">
          <TechCTA>
            REQUEST FOR PROPOSAL
          </TechCTA>
        </div>
      </div>
    </section>
  );
}


