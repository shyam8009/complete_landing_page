import React from 'react';
import bgVideo from '@/imports/gwr_video_mvp.mp4';

const INTER = "'Inter', sans-serif";

export default function RadarSystemsHero() {
  const scrollToEcosystem = () => {
    window.scrollTo({
      top: window.innerHeight * 1.5,
      behavior: 'smooth'
    });
  };

  return (
    <section className="relative w-full h-screen overflow-hidden bg-[#050505] flex items-center">
      {/* Background Video/Image (Right-weighted tactical radar sweep visual) */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-full object-cover opacity-30 md:opacity-50 object-right"
        >
          <source src={bgVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/80 to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col justify-center h-full">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#84CC16] animate-pulse"></span>
            <span className="text-[#84CC16] font-mono text-xs md:text-sm tracking-[0.2em] uppercase">
              Electronic Warfare / Radar Systems
            </span>
          </div>

          {/* Headline */}
          <h1 
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-[1.1] uppercase tracking-tight"
            style={{ fontFamily: INTER }}
          >
            RADAR SYSTEMS
          </h1>

          {/* Subheadline */}
          <p 
            className="text-white/70 text-base md:text-lg lg:text-xl leading-relaxed mb-10 max-w-2xl"
            style={{ fontFamily: INTER }}
          >
            Continuous, all-weather airspace and perimeter dominance. High-resolution 3D FMCW radar architectures engineered for early detection, micro-Doppler target classification, and seamless counter-UAS integration.
          </p>

          {/* CTA */}
          <button 
            onClick={scrollToEcosystem}
            className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#84CC16] text-[#050505] font-bold text-sm tracking-widest uppercase overflow-hidden hover:bg-white transition-colors duration-300"
            style={{ fontFamily: INTER }}
          >
            <span>EXPLORE RADAR ECOSYSTEM</span>
            <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 pointer-events-none opacity-50">
        <span className="text-[10px] font-mono tracking-widest uppercase text-white">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent" />
      </div>
    </section>
  );
}
