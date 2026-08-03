import React from 'react';
import bgImage from '../../../imports/3d-drone-detector/magnific_professional-outdoor-prod_Ia0jOAPtvE.png';

const INTER = '"Inter", sans-serif';

function ChevronRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="9 18 15 12 9 6"></polyline>
    </svg>
  );
}

export function HeroSection() {
  return (
    <section className="relative w-full h-screen min-h-[700px] flex flex-col justify-center items-start px-8 md:px-16 lg:px-24 border-b border-white/10 bg-[#000000] overflow-hidden">
      {/* Background Image & Gradient */}
      <div className="absolute inset-0 z-0">
        <img 
          src={bgImage} 
          alt="3D Drone Detection Radar Field Installation" 
          className="w-full h-full object-cover object-center opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-4xl flex flex-col gap-6">
        
        {/* Eyebrow Tag */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm self-start">
          <span className="w-2 h-2 bg-[#84CC16] rounded-full animate-pulse shadow-[0_0_8px_#84CC16]" />
          <span className="text-[#84CC16] text-xs font-semibold tracking-[0.2em]" style={{ fontFamily: INTER }}>
            RADAR SYSTEMS
          </span>
        </div>

        {/* Headlines */}
        <div className="flex flex-col gap-2">
          <h1 className="text-5xl md:text-7xl lg:text-8xl tracking-tighter text-white uppercase" style={{ fontFamily: INTER, fontWeight: 700, lineHeight: 1.1 }}>
            3D DRONE DETECTION <br className="hidden md:block"/>
            <span className="bg-gradient-to-br from-white to-neutral-600 bg-clip-text text-transparent">RADAR</span>
          </h1>
          <h2 className="text-xl md:text-2xl text-white/70 max-w-2xl mt-4 leading-relaxed" style={{ fontFamily: INTER, fontWeight: 400 }}>
            Engineered for multi-drone classification and tracking under extreme environment operations.
          </h2>
        </div>

        {/* CTA */}
        <div className="mt-4">
          <button className="flex items-center justify-center gap-2 bg-[#84CC16] text-black px-8 py-4 text-sm uppercase tracking-wider font-bold hover:bg-[#95E01A] transition-colors duration-300" style={{ fontFamily: INTER }}>
            REQUEST CONSULTATION
            <ChevronRight />
          </button>
        </div>

        {/* Glassmorphic Stats Block */}
        <div className="mt-8 flex gap-8 p-6 rounded-lg border border-white/10 bg-white/5 backdrop-blur-md max-w-fit">
          <div className="flex flex-col gap-1 pr-8 border-r border-white/10">
            <span className="text-3xl md:text-4xl text-white font-bold tracking-tight" style={{ fontFamily: INTER }}>15 km</span>
            <span className="text-white/50 text-xs uppercase tracking-widest font-mono">Tracking Envelope</span>
          </div>
          <div className="flex flex-col gap-1 pl-2">
            <span className="text-3xl md:text-4xl text-white font-bold tracking-tight" style={{ fontFamily: INTER }}>360&deg;</span>
            <span className="text-white/50 text-xs uppercase tracking-widest font-mono">Azimuth Sweep</span>
          </div>
        </div>

      </div>
    </section>
  );
}
