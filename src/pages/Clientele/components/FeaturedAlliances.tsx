import React from 'react';
import { ALLIANCE_SPOTLIGHTS } from '../data/clienteleData';
import { CheckCircle2, Award, ArrowUpRight } from 'lucide-react';

const INTER = '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';

export function FeaturedAlliances() {
  return (
    <section className="relative w-full section-padding bg-black border-b border-white/10 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_80%_20%,rgba(132,204,22,0.06),transparent_60%)] pointer-events-none" />

      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#84CC16] animate-pulse" />
              <span className="text-[#84CC16] text-xs font-mono tracking-[0.2em] uppercase font-bold">
                KEY COLLABORATION HIGHLIGHTS
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight uppercase" style={{ fontFamily: INTER }}>
              STRATEGIC PARTNERSHIP MILESTONES
            </h2>
          </div>
          <p className="text-white/60 text-xs sm:text-sm max-w-md leading-relaxed">
            High-impact joint manufacturing agreements, national technology transfers, and tier-1 defence empanelments powering sovereign self-reliance.
          </p>
        </div>

        {/* 4-Spotlight Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {ALLIANCE_SPOTLIGHTS.map((alliance) => (
            <div 
              key={alliance.id}
              className="relative group p-6 sm:p-8 rounded-xl bg-neutral-950 border border-white/10 hover:border-[#84CC16]/60 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Top Meta */}
              <div>
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <span className="px-3 py-1 rounded-full text-[11px] font-mono uppercase tracking-wider font-semibold bg-[#84CC16]/10 text-[#84CC16] border border-[#84CC16]/30">
                    {alliance.badge}
                  </span>
                  <span className="text-white/40 text-xs font-mono tracking-wider">
                    {alliance.milestone}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 group-hover:text-[#84CC16] transition-colors" style={{ fontFamily: INTER }}>
                  {alliance.partner}
                </h3>
                <p className="text-[#84CC16]/80 text-xs font-mono uppercase tracking-wider mb-4">
                  {alliance.partnerType}
                </p>

                <h4 className="text-white/90 text-sm font-semibold mb-3 leading-snug">
                  {alliance.title}
                </h4>

                <p className="text-white/60 text-xs sm:text-sm leading-relaxed mb-6">
                  {alliance.description}
                </p>
              </div>

              {/* Capabilities List */}
              <div className="pt-6 border-t border-white/10">
                <p className="text-[11px] font-mono text-white/40 uppercase tracking-widest mb-3">
                  Scope of Collaboration:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {alliance.capabilities.map((cap, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-white/80">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#84CC16] shrink-0" />
                      <span className="truncate">{cap}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
