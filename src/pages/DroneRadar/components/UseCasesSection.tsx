import React from 'react';
import { Network, PlaneTakeoff, ShieldHalf } from 'lucide-react';

const USE_CASES = [
  {
    icon: PlaneTakeoff,
    title: 'AIRSPACE MONITORING',
    description: 'Provide continuous 3D surveillance of critical airspace. Detects and tracks autonomous drones, loitering munitions, and unauthorized surveillance craft in real-time before they breach restricted zones.',
    status: 'IN PRODUCTION'
  },
  {
    icon: ShieldHalf,
    title: 'BORDER SURVEILLANCE',
    description: 'Deploy ruggedized units along porous borders to identify low-flying smuggling drones and cross-border incursions. Operates effectively in extreme weather and denied environments.',
    status: 'FIELD DEPLOYED'
  },
  {
    icon: Network,
    title: 'ASSET PROTECTION',
    description: 'Integrate directly into the security perimeters of forward operating bases, power plants, and VIP locations. Acts as the primary sensor triggering automated kinetic and EW countermeasures.',
    status: 'PROVEN IN MULTIPLE ENVIRONMENTS'
  }
];

export function UseCasesSection() {
  return (
    <section className="py-24 bg-black border-t border-white/5">
      <div className="max-w-[1600px] mx-auto px-4 lg:px-6">
        
        <div className="text-center mb-16">
          <div className="text-[#84CC16] font-mono text-sm uppercase tracking-widest mb-4">
            // DEPLOYMENT SCENARIOS
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-tight">
            AI FOR THE HARDEST MISSION PROBLEMS.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {USE_CASES.map((useCase, idx) => {
            const Icon = useCase.icon;
            return (
              <div 
                key={idx} 
                className="flex flex-col p-8 rounded-xl bg-[#050505] border border-white/10 hover:border-[#84CC16]/30 hover:bg-[#84CC16]/5 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-lg bg-black border border-white/10 flex items-center justify-center mb-8 group-hover:border-[#84CC16]/50 transition-colors">
                  <Icon className="w-6 h-6 text-white/60 group-hover:text-[#84CC16] transition-colors" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-wide">
                  {useCase.title}
                </h3>
                
                <p className="text-white/60 leading-relaxed mb-12 flex-grow">
                  {useCase.description}
                </p>

                <div className="mt-auto">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 rounded border border-white/10">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#84CC16]" />
                    <span className="text-xs font-mono text-white/60 uppercase tracking-widest">STATUS: {useCase.status}</span>
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