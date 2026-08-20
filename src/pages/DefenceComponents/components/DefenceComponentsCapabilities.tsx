import React from 'react';
import cadImg from '@/imports/spear_cad_blueprint.png';

export function DefenceComponentsCapabilities() {
  return (
    <section className="w-full bg-[#000000] py-24 px-6 md:px-12 lg:px-24 text-white font-sans overflow-hidden">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* Left - Text */}
        <div className="flex flex-col relative z-10">
          <span className="text-[#84CC16] font-mono text-sm tracking-[0.2em] uppercase font-bold mb-6 block">
            RUGGEDIZED HARDWARE
          </span>
          
          <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight mb-8 leading-tight">
            Tactical Reliability for <br className="hidden md:block" />
            <span className="text-white/50">Severe Combat Environments.</span>
          </h2>
          
          <p className="text-white/70 text-lg leading-relaxed font-light">
            Defense deployment leaves zero margin for error. Siddhanta Machining—the integrated precision engineering arm of Sahana Defence—delivers mission-critical parts for defense vehicles, weapons systems, and support equipment. By leveraging state-of-the-art machinery and a strict space-grade quality culture, our components ensure uncompromising mechanical resilience, structural strength, and stable performance at elevated operational temperatures.
          </p>
        </div>

        {/* Right - Visual */}
        <div className="relative flex items-center justify-center min-h-[400px] lg:min-h-[500px]">
          
          {/* Decorative background glow */}
          <div className="absolute inset-0 bg-[#84CC16]/5 blur-[100px] rounded-full" />
          
          {/* Main CAD Visual Container */}
          <div className="relative w-full max-w-md aspect-square rounded-2xl border border-white/10 bg-[#050505] overflow-hidden flex items-center justify-center">
            <img 
              src={cadImg} 
              alt="3D CAD Schematic" 
              className="w-full h-full object-cover opacity-60 mix-blend-screen"
            />
            
            {/* Floating HUD Stats */}
            <div className="absolute inset-0 p-6 flex flex-col justify-between pointer-events-none">
              
              <div className="self-end bg-black/60 backdrop-blur-md border border-white/20 p-3 rounded-lg text-right transform translate-x-4">
                <div className="text-xs text-[#84CC16] font-mono tracking-widest uppercase mb-1">Ratio</div>
                <div className="text-sm font-bold text-white">High Strength-to-Weight</div>
              </div>

              <div className="self-start bg-black/60 backdrop-blur-md border border-white/20 p-3 rounded-lg transform -translate-x-4">
                <div className="text-xs text-[#84CC16] font-mono tracking-widest uppercase mb-1">Resistance</div>
                <div className="text-sm font-bold text-white">Corrosion & Thermal</div>
              </div>

              <div className="self-end bg-black/60 backdrop-blur-md border border-[#84CC16]/30 p-3 rounded-lg text-right transform translate-x-4">
                <div className="text-xs text-[#84CC16] font-mono tracking-widest uppercase mb-1">Integrity</div>
                <div className="text-sm font-bold text-white">Uncompromising Structure</div>
              </div>
              
            </div>
          </div>
          
        </div>
        
      </div>
    </section>
  );
}
