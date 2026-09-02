import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { TechCTA } from '@/components/TechCTA';

const INTER = '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';

export function ClienteleCTA({ onContactClick }: { onContactClick?: () => void }) {
  return (
    <section className="section-padding bg-black relative overflow-hidden text-center border-t border-white/10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(132,204,22,0.1),transparent_65%)] pointer-events-none" />
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-4xl mx-auto px-4 lg:px-6 relative z-10 text-center"
      >
        <h2 className="quote-text text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-12 leading-tight tracking-tight uppercase" style={{ fontFamily: INTER }}>
          "FORGE SOVEREIGN PARTNERSHIPS. DELIVER UNCOMPROMISED MISSION READINESS."
        </h2>
        
        <div className="quote-text flex flex-col items-center gap-6">
          <TechCTA onClick={onContactClick}>
            INITIATE STRATEGIC ALLIANCE
            <ChevronRight className="w-4 h-4 text-[#84CC16] group-hover:translate-x-1 transition-transform" />
          </TechCTA>
          
          <button 
            onClick={onContactClick}
            className="text-white/40 hover:text-white transition-colors text-sm underline underline-offset-4 decoration-white/20 hover:decoration-white uppercase tracking-wider font-bold cursor-pointer"
          >
            Request Alliance Capability Briefing
          </button>
        </div>
      </motion.div>
    </section>
  );
}
