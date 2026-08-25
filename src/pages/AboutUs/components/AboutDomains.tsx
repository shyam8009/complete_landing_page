import React from 'react';
import { INTER } from '../../../constants';

const DOMAINS = [
  { name: 'NAVAL', desc: 'Maritime security and fleet defence systems.' },
  { name: 'AIRBORNE', desc: 'Aerial threat detection and interception.' },
  { name: 'HOMELAND', desc: 'Border and internal security infrastructure.' },
  { name: 'DEFENCE', desc: 'Tactical battlefield capabilities and EW.' },
  { name: 'PORT & MARINE', desc: 'Critical infrastructure coastal protection.' }
];

export default function AboutDomains() {
  return (
    <section className="w-full bg-[#050505] text-white py-24 border-t border-white/5 relative z-10">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <h3 className="text-center text-sm font-bold tracking-[0.2em] text-white/50 uppercase mb-16" style={{ fontFamily: INTER }}>
          [ OPERATIONAL DOMAINS ]
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {DOMAINS.map((domain, i) => (
            <div key={i} className="group relative border border-white/10 bg-white/5 p-6 hover:bg-[#84CC16]/5 transition-colors overflow-hidden">
              {/* Hover line */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-[#84CC16] scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
              
              <div className="text-3xl font-light text-white/20 mb-4 font-mono">0{i+1}</div>
              <h4 className="text-lg font-bold tracking-widest uppercase mb-2">{domain.name}</h4>
              <p className="text-sm text-white/50 leading-relaxed">{domain.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
