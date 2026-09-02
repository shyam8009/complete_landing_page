import React from 'react';
import { motion } from 'framer-motion';
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
    <section className="relative w-full section-padding bg-[#05080D] text-white border-b border-white/10 overflow-hidden">
      
      {/* Background glow and subtle tactical lines */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[radial-gradient(circle_at_50%_50%,rgba(132,204,22,0.08),transparent_70%)] pointer-events-none blur-3xl" />

      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#84CC16] animate-pulse" />
            <span className="text-[#84CC16] text-xs font-mono tracking-[0.2em] uppercase font-bold">
              ENGAGEMENT ARCHITECTURE
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight uppercase" style={{ fontFamily: INTER }}>
            HOW WE ENGAGE WITH SOVEREIGN PARTNERS
          </h2>
          <p className="mt-4 text-white/60 text-xs sm:text-sm md:text-base leading-relaxed">
            Our multi-tier partnership framework ensures rapid lifecycle progression from laboratory validation to frontline battlefield deployment.
          </p>
        </motion.div>

        {/* 4 Pillars Grid with Flow Animation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PILLARS.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.12 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="relative p-6 sm:p-8 rounded-xl bg-black/80 border border-white/10 hover:border-[#84CC16]/60 transition-all duration-300 flex flex-col justify-between group shadow-xl"
              >
                <div>
                  <span className="text-[10px] font-mono text-[#84CC16] tracking-widest uppercase font-bold block mb-4">
                    {pillar.step}
                  </span>
                  <div className="w-12 h-12 rounded-lg bg-[#84CC16]/10 border border-[#84CC16]/30 flex items-center justify-center text-[#84CC16] mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white uppercase tracking-tight mb-3 group-hover:text-[#84CC16] transition-colors" style={{ fontFamily: INTER }}>
                    {pillar.title}
                  </h3>
                  <p className="text-white/60 text-xs sm:text-sm leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
