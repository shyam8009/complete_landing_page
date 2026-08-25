import React from 'react';
import { INTER } from '../../../constants';

export default function AboutCertifications() {
  return (
    <section className="w-full bg-white text-slate-900 py-24 border-t border-slate-200 z-10 relative">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 text-center">
        <h3 className="text-sm font-bold tracking-[0.2em] text-slate-400 uppercase mb-12" style={{ fontFamily: INTER }}>
          [ ASSURED SECURITY & COMPLIANCE ]
        </h3>
        
        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          {['ISO 9001:2015', 'MIL-STD COMPLIANT', 'GOVT APPROVED VENDOR', 'DEFENCE EXPORT READY'].map((cert, i) => (
            <div key={i} className="flex flex-col items-center opacity-70 hover:opacity-100 transition-opacity">
              <div className="w-20 h-20 rounded-full border-2 border-slate-200 flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <span className="text-xs font-bold tracking-widest text-slate-600" style={{ fontFamily: INTER }}>{cert}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
