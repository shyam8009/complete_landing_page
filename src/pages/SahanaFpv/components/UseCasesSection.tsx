import React from 'react';
import { Target, Layers, Battery } from 'lucide-react';

const USE_CASES = [
  {
    icon: Target,
    title: 'THE FLIGHT STACK',
    description: 'High-definition FPV system for real-time video, with optional thermal imaging integration available for nighttime reconnaissance.',
    status: 'IN PRODUCTION'
  },
  {
    icon: Layers,
    title: 'FRAME & ENGINEERING',
    description: 'Scalable platform built across three distinct carbon fiber frame sizes (10", 13", 15") to accommodate variable payload and speed requirements.',
    status: 'MIL-STD COMPLIANT'
  },
  {
    icon: Battery,
    title: 'POWER & CONNECTIVITY',
    description: 'Equipped with high-capacity LiPo 6s/8s battery configurations and available with Fiber Optics Pool integration for tethered continuous operations.',
    status: 'PROVEN IN MULTIPLE ENVIRONMENTS'
  }
];

export function UseCasesSection() {
  return (
    <section className="py-24 bg-black border-t border-white/5">
      <div className="max-w-[1600px] mx-auto px-4 lg:px-6">
        
        <div className="text-center mb-16">
          <div className="text-[#3C5929] font-mono text-sm uppercase tracking-widest mb-4">
            // SYSTEM ARCHITECTURE
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-tight">
            CORE CAPABILITIES.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {USE_CASES.map((useCase, idx) => {
            const Icon = useCase.icon;
            return (
              <div 
                key={idx} 
                className="flex flex-col p-8 rounded-xl bg-[#050505] border border-white/10 hover:border-[#3C5929]/30 hover:bg-[#3C5929]/5 transition-all duration-300 group"
              >
                <div className="relative w-16 h-16 mb-8 group flex items-center justify-center">
                  {/* Interactive Range Rings */}
                  <div className="absolute inset-0 rounded-full border border-[#3C5929]/0 group-hover:border-[#3C5929]/40 group-hover:animate-[ping_2s_ease-out_infinite]" />
                  <div className="absolute inset-0 rounded-full border border-[#3C5929]/0 group-hover:border-[#3C5929]/20 group-hover:animate-[ping_2.5s_ease-out_infinite_0.5s]" />
                  
                  <div className="relative z-10 w-12 h-12 rounded-lg bg-black border border-white/10 flex items-center justify-center group-hover:border-[#3C5929]/50 group-hover:bg-[#3C5929]/10 transition-colors">
                    <Icon className="w-6 h-6 text-white/60 group-hover:text-[#3C5929] transition-colors" />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-wide">
                  {useCase.title}
                </h3>
                
                <p className="text-white/60 leading-relaxed mb-12 flex-grow">
                  {useCase.description}
                </p>

                <div className="mt-auto">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 rounded border border-white/10 group-hover:border-[#3C5929]/30 group-hover:bg-[#3C5929]/5 transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(60,89,41,0.15)]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#3C5929] group-hover:animate-pulse group-hover:shadow-[0_0_8px_#3C5929]" />
                    <span className="text-xs font-mono text-white/60 uppercase tracking-widest group-hover:text-white transition-colors">STATUS: {useCase.status}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
