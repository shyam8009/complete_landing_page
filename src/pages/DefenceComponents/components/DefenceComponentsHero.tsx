import React from 'react';
import { TechCTA } from '@/components/TechCTA';
import heroVideo from '@/imports/Hero banner Video.mp4';

export function DefenceComponentsHero() {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-black font-sans">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video 
          src={heroVideo}
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-full object-cover object-right"
        />
        {/* Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent z-10" />
      </div>

      {/* Content Container */}
      <div className="relative z-20 h-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 flex items-center">
        <div className="max-w-3xl flex flex-col justify-center">
          
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#84CC16] animate-pulse" style={{ boxShadow: '0 0 10px #84CC16' }} />
            <span className="text-[#84CC16] font-mono text-xs md:text-sm tracking-[0.2em] uppercase font-bold">
              STRATEGIC MANUFACTURING / DEFENCE COMPONENTS
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-[5rem] font-bold text-white leading-[1.05] mb-8 uppercase tracking-tight">
            MISSION-CRITICAL <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">DEFENCE COMPONENTS</span>
          </h1>

          {/* Subheadline */}
          <p className="text-base md:text-xl text-white/70 max-w-2xl mb-12 leading-relaxed font-light">
            Heavy-duty precision hardware engineered for tactical reliability. Delivering load-bearing structural parts and weapons system components built to endure severe combat and field environments.
          </p>

          {/* CTA and Stats Row */}
          <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
            <a href="#pipeline">
              <TechCTA className="!px-8 !py-4 bg-[#84CC16]/10 hover:bg-[#84CC16]/20 border border-[#84CC16]/30">
                REQUEST COMPONENT QUOTE
              </TechCTA>
            </a>

            {/* Quick Stats Block (Glassmorphic) */}
            <div className="flex gap-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl px-6 py-4">
              <div className="flex flex-col">
                <span className="text-white font-bold text-lg md:text-xl">Exotic Metallurgy</span>
                <span className="text-white/50 text-[10px] uppercase tracking-widest font-mono mt-1">Titanium & Nickel Alloys</span>
              </div>
              <div className="w-[1px] bg-white/10" />
              <div className="flex flex-col">
                <span className="text-white font-bold text-lg md:text-xl">Zero-Defect</span>
                <span className="text-white/50 text-[10px] uppercase tracking-widest font-mono mt-1">CMM Inspected</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
