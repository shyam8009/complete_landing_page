import React from 'react';
import { motion } from 'framer-motion';
import { ALLIANCE_SPOTLIGHTS } from '../data/clienteleData';
import { CheckCircle2 } from 'lucide-react';

const INTER = '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';

export function FeaturedAlliances() {
  return (
    <section className="relative w-full section-padding bg-[#F9FAFB] text-slate-900 border-b border-slate-200 overflow-hidden">
      
      {/* Subtle Light Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-70 pointer-events-none" />

      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6"
        >
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#5a8b10] animate-pulse" />
              <span className="text-[#5a8b10] text-xs font-mono tracking-[0.2em] uppercase font-bold">
                KEY COLLABORATION HIGHLIGHTS
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight uppercase" style={{ fontFamily: INTER }}>
              STRATEGIC PARTNERSHIP MILESTONES
            </h2>
          </div>
          <p className="text-slate-600 text-xs sm:text-sm md:text-base max-w-md leading-relaxed font-medium">
            High-impact joint manufacturing agreements, national technology transfers, and tier-1 defence empanelments powering sovereign self-reliance.
          </p>
        </motion.div>

        {/* 4-Spotlight Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {ALLIANCE_SPOTLIGHTS.map((alliance, idx) => (
            <motion.div 
              key={alliance.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.12 }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="relative group p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] hover:border-[#84CC16] transition-all duration-300 flex flex-col justify-between"
            >
              {/* Top Meta */}
              <div>
                <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
                  <span className="px-3 py-1 rounded-full text-[11px] font-mono uppercase tracking-wider font-bold bg-[#84CC16]/15 text-[#3f620d] border border-[#84CC16]/30">
                    {alliance.badge}
                  </span>
                  <span className="text-slate-500 text-xs font-mono font-medium">
                    {alliance.milestone}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-1 group-hover:text-[#5a8b10] transition-colors" style={{ fontFamily: INTER }}>
                  {alliance.partner}
                </h3>
                <p className="text-[#5a8b10] text-xs font-mono uppercase tracking-wider font-semibold mb-4">
                  {alliance.partnerType}
                </p>

                <h4 className="text-slate-800 text-sm sm:text-[15px] font-bold mb-3 leading-snug">
                  {alliance.title}
                </h4>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                  {alliance.description}
                </p>
              </div>

              {/* Capabilities List */}
              <div className="pt-6 border-t border-slate-100">
                <p className="text-[11px] font-mono text-slate-400 uppercase tracking-widest font-semibold mb-3">
                  Scope of Collaboration:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {alliance.capabilities.map((cap, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-[#5a8b10] shrink-0" />
                      <span className="break-words">{cap}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
