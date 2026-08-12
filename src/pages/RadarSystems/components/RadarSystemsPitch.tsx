import React from 'react';

const INTER = "'Inter', sans-serif";

export default function RadarSystemsPitch() {
  return (
    <section className="w-full bg-[#050505] py-24 border-b border-white/5">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Header Block */}
        <div className="mb-16 max-w-3xl">
          <h2 
            className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight uppercase"
            style={{ fontFamily: INTER }}
          >
            Tactical Edge <span className="text-[#84CC16]">Surveillance</span>
          </h2>
          <p 
            className="text-white/60 text-lg leading-relaxed"
            style={{ fontFamily: INTER }}
          >
            The battlefield has evolved. Standard air defense radars are tuned for large, fast-moving targets at high altitudes. Modern asymmetric threats demand a new sensor architecture focused on micro-Doppler resolution, constant 24/7 sweeps, and zero-visibility target acquisition.
          </p>
        </div>

        {/* Narrative Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1 */}
          <div className="p-8 border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-[1px] bg-[#84CC16]"></span>
              <span className="text-xs font-mono tracking-widest text-white/50 uppercase">01 / Challenge</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-4 uppercase" style={{ fontFamily: INTER }}>The Threat Shift</h3>
            <p className="text-sm text-white/60 leading-relaxed" style={{ fontFamily: INTER }}>
              Modern airborne threats are smaller, fly lower, and possess significantly reduced Radar Cross-Sections (RCS). Legacy systems struggle to separate these targets from background noise, creating dangerous gaps in low-altitude coverage.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-8 border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-[1px] bg-[#84CC16]"></span>
              <span className="text-xs font-mono tracking-widest text-white/50 uppercase">02 / Technology</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-4 uppercase" style={{ fontFamily: INTER }}>Micro-Doppler Advantage</h3>
            <p className="text-sm text-white/60 leading-relaxed" style={{ fontFamily: INTER }}>
              By analyzing sub-meter Doppler signatures and rotor-blade modulations, our FMCW architecture eliminates false alarms caused by birds, weather anomalies, or moving foliage, ensuring operator trust in target classification.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-8 border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-[1px] bg-[#84CC16]"></span>
              <span className="text-xs font-mono tracking-widest text-white/50 uppercase">03 / Sovereignty</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-4 uppercase" style={{ fontFamily: INTER }}>Indigenous Critical Path</h3>
            <p className="text-sm text-white/60 leading-relaxed" style={{ fontFamily: INTER }}>
              Engineered entirely in India. We maintain complete design authority over the RF chain, firmware, and signal processing algorithms, ensuring zero foreign hardware dependencies in your critical sensing paths.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
