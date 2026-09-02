import React from 'react';
import { ShieldCheck, Cpu, Factory, Globe2 } from 'lucide-react';

const INTER = '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';

const PILLARS = [
  {
    icon: Cpu,
    step: '01 // RESEARCH & CO-DEV',
    title: 'Joint R&D & Tech Transfer',
    desc: 'Collaborative development with DRDO, ISRO, and national laboratories to convert sovereign research into field-ready defence hardware.',
  },
  {
    icon: Factory,
    step: '02 // MAKE IN INDIA FAB',
    title: 'Dedicated Manufacturing Hubs',
    desc: 'Contract manufacturing facilities in synergy with DPSUs like CEL, providing precision CNC fabrication, cleanrooms, and automated testing.',
  },
  {
    icon: ShieldCheck,
    step: '03 // C4ISR & EW INTEGRATION',
    title: 'Multi-Domain Interoperability',
    desc: 'Seamless integration with existing tri-services weapon platforms, armored vehicles, naval masts, and coastal radar stations.',
  },
  {
    icon: Globe2,
    step: '04 // SOVEREIGN SUPPLY CHAIN',
    title: 'Global Export & Self-Reliance',
    desc: 'Empowering India’s defence industrial base and sovereign allies with non-ITAR, export-ready electronic warfare and quantum systems.',
  },
];

export function PartnershipFramework() {
  return (
    <section className="relative w-full section-padding bg-black border-b border-white/10">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#84CC16] animate-pulse" />
            <span className="text-[#84CC16] text-xs font-mono tracking-[0.2em] uppercase font-bold">
              ENGAGEMENT ARCHITECTURE
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight uppercase" style={{ fontFamily: INTER }}>
            HOW WE ENGAGE WITH SOVEREIGN PARTNERS
          </h2>
          <p className="mt-4 text-white/60 text-xs sm:text-sm md:text-base leading-relaxed">
            Our multi-tier partnership framework ensures rapid lifecycle progression from laboratory validation to frontline battlefield deployment.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PILLARS.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div 
                key={idx}
                className="relative p-6 sm:p-8 rounded-xl bg-neutral-950 border border-white/10 hover:border-[#84CC16]/60 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <span className="text-[10px] font-mono text-[#84CC16] tracking-widest uppercase font-bold block mb-4">
                    {pillar.step}
                  </span>
                  <div className="w-12 h-12 rounded-lg bg-[#84CC16]/10 border border-[#84CC16]/20 flex items-center justify-center text-[#84CC16] mb-6 group-hover:scale-105 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white uppercase tracking-tight mb-3" style={{ fontFamily: INTER }}>
                    {pillar.title}
                  </h3>
                  <p className="text-white/55 text-xs sm:text-sm leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
