import React from 'react';
import { ChevronRight } from 'lucide-react';
import { TechCTA } from '@/components/TechCTA';

export function JammingCTA() {
  return (
    <section className="w-full bg-[#050505] text-white section-padding relative overflow-hidden font-['Inter',sans-serif]">
      {/* Background patterns */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(132,204,22,0.05)_0%,transparent_60%)]" />
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#84CC16]/20 to-transparent" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center">
        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-8">
          <span className="w-2 h-2 rounded-full bg-[#84CC16] animate-pulse" />
          <span className="text-[#84CC16] font-mono text-xs tracking-[0.2em] uppercase font-bold">
            STRATEGIC DEFENSE IMPLEMENTATION
          </span>
        </div>

        {/* Headline */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-8 leading-[1.1]">
          Secure Your Airspace & <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">Tactical Perimeters</span>
        </h2>

        {/* Description */}
        <p className="text-lg md:text-xl text-white/50 font-light max-w-2xl mx-auto mb-12 leading-relaxed">
          Consult with our electronic warfare division to evaluate multi-frequency jamming architecture, portable counter-UAS deployment, and platform integrations for your mission parameters.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto">
          {/* Primary CTA */}
          <TechCTA onClick={() => window.dispatchEvent(new CustomEvent('open-contact-modal'))}>
            CONTACT EW DIVISION
            <ChevronRight className="w-4 h-4 text-[#84CC16] group-hover:translate-x-1 transition-transform" />
          </TechCTA>
          
          {/* Secondary CTA */}
          <TechCTA onClick={() => window.dispatchEvent(new CustomEvent('open-contact-modal'))}>
            REQUEST TECHNICAL DEMO
          </TechCTA>
        </div>
      </div>
    </section>
  );
}
