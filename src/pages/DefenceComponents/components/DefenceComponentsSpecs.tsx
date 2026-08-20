import React from 'react';

const specsData = [
  {
    badge: "AIRFRAME & FUSELAGE",
    title: "LOAD-BEARING STRUCTURES",
    desc: "Load-bearing precision parts engineered for critical defense airframes and fuselages, meeting the most stringent weight and structural strength requirements.",
    footLeft: { label: "APPLICATION", val: "Defense Vehicles" },
    footRight: { label: "MATERIAL", val: "High-Alloy Steel" }
  },
  {
    badge: "CRITICAL MOUNTS",
    title: "BRACKETS & SHACKLES",
    desc: "High-accuracy, load-bearing mounting hardware deployed extensively across military aircraft, ground-based defense systems, and launch vehicles.",
    footLeft: { label: "INTEGRITY", val: "Field-Tested" },
    footRight: { label: "TOLERANCE", val: "Exacting" }
  },
  {
    badge: "MECHANICAL ALIGNMENT",
    title: "FLANGES & ADJUSTABLE RINGS",
    desc: "Connection and sealing components manufactured to exacting tolerances, including precision adjustable rings utilized for field-tunable mechanical systems.",
    footLeft: { label: "ALIGNMENT", val: "Field-Tunable" },
    footRight: { label: "SEALING", val: "Secure" }
  }
];

export function DefenceComponentsSpecs() {
  return (
    <section className="w-full bg-white py-24 px-6 md:px-12 lg:px-24 font-sans">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Section Header */}
        <div className="mb-16">
          <span className="text-[#84CC16] font-mono text-sm tracking-widest uppercase block mb-4">Technical Specifications</span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 uppercase tracking-tight">
            Defense Applications
          </h2>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {specsData.map((card, i) => (
            <div key={i} className="flex flex-col bg-neutral-50 border border-slate-200 p-8 rounded-xl hover:shadow-xl transition-shadow duration-300 group">
              
              <div className="mb-8">
                <span className="inline-block px-3 py-1 bg-slate-900 text-white font-mono text-[10px] tracking-widest uppercase rounded-md mb-6">
                  {card.badge}
                </span>
                
                <h3 className="text-2xl font-bold text-slate-900 uppercase tracking-tight mb-4">
                  {card.title}
                </h3>
                
                <p className="text-slate-600 text-sm leading-relaxed">
                  {card.desc}
                </p>
              </div>

              <div className="mt-auto pt-6 border-t border-slate-200 flex justify-between items-center text-xs font-mono uppercase tracking-wider">
                <div className="flex flex-col gap-1">
                  <span className="text-slate-400">{card.footLeft.label}</span>
                  <span className="text-slate-900 font-bold flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#84CC16]" /> {card.footLeft.val}
                  </span>
                </div>
                <div className="flex flex-col gap-1 text-right">
                  <span className="text-slate-400">{card.footRight.label}</span>
                  <span className="text-slate-900 font-bold">{card.footRight.val}</span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
