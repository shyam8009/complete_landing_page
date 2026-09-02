import React from 'react';
import { ShieldCheck, Crosshair, ArrowDownRight, Layers } from 'lucide-react';
import { Link } from 'react-router';

const INTER = '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';

export function ClienteleHero() {
  return (
    <section className="relative w-full min-h-[60vh] lg:min-h-[70vh] flex items-center justify-center pt-32 sm:pt-36 md:pt-40 pb-16 sm:pb-20 overflow-hidden bg-black border-b border-white/10">
      {/* Tactical Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />
      
      {/* Ambient Radial Lime Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-[radial-gradient(circle_at_50%_50%,rgba(132,204,22,0.12),transparent_70%)] pointer-events-none blur-2xl" />

      {/* HUD Corner Accents */}
      <div className="absolute top-28 left-6 sm:left-12 w-6 h-6 border-t-2 border-l-2 border-[#84CC16]/40 pointer-events-none hidden sm:block" />
      <div className="absolute top-28 right-6 sm:right-12 w-6 h-6 border-t-2 border-r-2 border-[#84CC16]/40 pointer-events-none hidden sm:block" />
      <div className="absolute bottom-8 left-6 sm:left-12 w-6 h-6 border-b-2 border-l-2 border-[#84CC16]/40 pointer-events-none hidden sm:block" />
      <div className="absolute bottom-8 right-6 sm:right-12 w-6 h-6 border-b-2 border-r-2 border-[#84CC16]/40 pointer-events-none hidden sm:block" />

      <div className="relative z-10 max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-12 text-center flex flex-col items-center">
        
        {/* Breadcrumb & Live Ping */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-6">
          <Link to="/" className="text-white/40 hover:text-white text-xs font-mono tracking-widest uppercase transition-colors">
            HOME
          </Link>
          <span className="text-white/20 font-mono text-xs">//</span>
          <span className="text-[#84CC16] text-xs font-mono tracking-widest uppercase font-bold">
            STRATEGIC ALLIANCES &amp; CLIENTELE
          </span>
          <span className="text-white/20 font-mono text-xs hidden sm:inline">//</span>
          <div className="hidden sm:flex items-center gap-2 bg-[#84CC16]/10 border border-[#84CC16]/30 px-2.5 py-0.5 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-[#84CC16] animate-pulse" />
            <span className="text-[#84CC16] text-[10px] font-mono tracking-widest uppercase font-bold">
              ACTIVE DEFENCE ECOSYSTEM
            </span>
          </div>
        </div>

        {/* Main Title */}
        <h1 
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight uppercase max-w-5xl leading-[1.08] mb-6"
          style={{ fontFamily: INTER }}
        >
          POWERING SOVEREIGN DEFENCE &amp;{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-[#84CC16]">
            STRATEGIC INFRASTRUCTURE
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-white/70 text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed mb-10 font-normal">
          Sahana Defence collaborates with the Ministry of Defence, the Tri-Services Armed Forces, premier Defence PSUs, and Space Research Institutes to engineer and deploy mission-critical electronic warfare, aerospace, and quantum solutions.
        </p>

        {/* Tactical Metadata Bar */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 py-3 px-6 rounded-lg bg-neutral-950/80 border border-white/10 backdrop-blur-md text-xs font-mono text-white/60">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#84CC16]" />
            <span>MOD TIER-1 INTEGRATION</span>
          </div>
          <span className="text-white/20 hidden sm:inline">|</span>
          <div className="flex items-center gap-2">
            <Crosshair className="w-4 h-4 text-[#84CC16]" />
            <span>MAKE IN INDIA INDIGENOUS IP</span>
          </div>
          <span className="text-white/20 hidden sm:inline">|</span>
          <div className="flex items-center gap-2">
            <Layers className="w-4 h-4 text-[#84CC16]" />
            <span>MULTI-DOMAIN INTEROPERABILITY</span>
          </div>
        </div>

      </div>
    </section>
  );
}
