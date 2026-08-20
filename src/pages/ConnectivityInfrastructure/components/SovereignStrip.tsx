import React from 'react';
import { Network, PenTool, Shield } from 'lucide-react';

export function SovereignStrip() {
  return (
    <section className="bg-[#84CC16] py-12 relative z-20">
      <div className="max-w-[1600px] mx-auto px-4 lg:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-black/10">
          
          <div className="flex flex-col items-center text-center px-4 py-4 md:py-0">
            <Network className="w-8 h-8 text-black mb-4" />
            <h3 className="text-black font-bold text-lg uppercase tracking-wide mb-2">End-to-End Infrastructure</h3>
            <p className="text-black/70 text-sm leading-relaxed max-w-sm">
              Connected devices, cloud platforms, and streaming delivery united under one practice.
            </p>
          </div>

          <div className="flex flex-col items-center text-center px-4 py-4 md:py-0">
            <PenTool className="w-8 h-8 text-black mb-4" />
            <h3 className="text-black font-bold text-lg uppercase tracking-wide mb-2">In-House Depth</h3>
            <p className="text-black/70 text-sm leading-relaxed max-w-sm">
              Fully architected and supported by Sahana's own elite engineering team.
            </p>
          </div>

          <div className="flex flex-col items-center text-center px-4 py-4 md:py-0">
            <Shield className="w-8 h-8 text-black mb-4" />
            <h3 className="text-black font-bold text-lg uppercase tracking-wide mb-2">Built for Scale & Security</h3>
            <p className="text-black/70 text-sm leading-relaxed max-w-sm">
              Serverless approaches designed to grow with operational demand, with security built-in from day one.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
