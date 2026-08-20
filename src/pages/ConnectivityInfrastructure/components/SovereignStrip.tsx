import React from 'react';
import { Network, PenTool, Shield } from 'lucide-react';

export function SovereignStrip() {
  return (
    <section className="w-full bg-[#050505] border-y border-white/10 py-16 md:section-padding relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(132,204,22,0.03)_0%,transparent_50%)] pointer-events-none" />
      
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
          
          {/* Block 1 */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left group">
            <div className="mb-6 p-4 rounded-full bg-white/5 border border-white/10 group-hover:border-[#84CC16]/50 group-hover:bg-[#84CC16]/5 transition-all duration-300">
              <Network className="w-7 h-7 text-[#84CC16]" />
            </div>
            <h3 className="text-lg font-bold uppercase tracking-wider text-white mb-3">
              End-to-End Infrastructure
            </h3>
            <p className="text-sm text-white/60 leading-relaxed">
              Connected devices, cloud platforms, and streaming delivery united under one practice.
            </p>
          </div>

          {/* Block 2 */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left group">
            <div className="mb-6 p-4 rounded-full bg-white/5 border border-white/10 group-hover:border-[#84CC16]/50 group-hover:bg-[#84CC16]/5 transition-all duration-300">
              <PenTool className="w-7 h-7 text-[#84CC16]" />
            </div>
            <h3 className="text-lg font-bold uppercase tracking-wider text-white mb-3">
              In-House Depth
            </h3>
            <p className="text-sm text-white/60 leading-relaxed">
              Fully architected and supported by Sahana's own elite engineering team.
            </p>
          </div>

          {/* Block 3 */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left group">
            <div className="mb-6 p-4 rounded-full bg-white/5 border border-white/10 group-hover:border-[#84CC16]/50 group-hover:bg-[#84CC16]/5 transition-all duration-300">
              <Shield className="w-7 h-7 text-[#84CC16]" />
            </div>
            <h3 className="text-lg font-bold uppercase tracking-wider text-white mb-3">
              Built for Scale & Security
            </h3>
            <p className="text-sm text-white/60 leading-relaxed">
              Serverless approaches designed to grow with operational demand, with security built-in from day one.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
