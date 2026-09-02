import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Crosshair, Layers } from 'lucide-react';
import { Link } from 'react-router';

const INTER = '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.15, ease: [0.25, 1, 0.5, 1] }
  })
};

export function ClienteleHero() {
  return (
    <section className="relative w-full min-h-[65vh] lg:min-h-[72vh] flex items-center justify-center pt-32 sm:pt-36 md:pt-44 pb-20 sm:pb-24 overflow-hidden bg-gradient-to-b from-[#020403] via-[#05080D] to-[#0a0f18] text-white border-b border-white/10">
      
      {/* Animated Tactical Grid & Radar Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_45%,#000_60%,transparent_100%)] pointer-events-none" />
      
      {/* Radial Glow Spotlight */}
      <motion.div 
        animate={{ 
          scale: [1, 1.15, 1],
          opacity: [0.15, 0.25, 0.15]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[radial-gradient(circle_at_50%_50%,rgba(132,204,22,0.18),transparent_70%)] pointer-events-none blur-3xl" 
      />

      {/* HUD Corner Accents */}
      <div className="absolute top-28 left-6 sm:left-12 w-6 h-6 border-t-2 border-l-2 border-[#84CC16]/50 pointer-events-none hidden sm:block" />
      <div className="absolute top-28 right-6 sm:right-12 w-6 h-6 border-t-2 border-r-2 border-[#84CC16]/50 pointer-events-none hidden sm:block" />
      <div className="absolute bottom-10 left-6 sm:left-12 w-6 h-6 border-b-2 border-l-2 border-[#84CC16]/50 pointer-events-none hidden sm:block" />
      <div className="absolute bottom-10 right-6 sm:right-12 w-6 h-6 border-b-2 border-r-2 border-[#84CC16]/50 pointer-events-none hidden sm:block" />

      <div className="relative z-10 max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-12 text-center flex flex-col items-center">
        
        {/* Breadcrumb & Live Ping */}
        <motion.div 
          custom={0}
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-6"
        >
          <Link to="/" className="text-white/50 hover:text-white text-xs font-mono tracking-widest uppercase transition-colors">
            HOME
          </Link>
          <span className="text-white/20 font-mono text-xs">//</span>
          <span className="text-[#84CC16] text-xs font-mono tracking-widest uppercase font-bold">
            STRATEGIC ALLIANCES &amp; CLIENTELE
          </span>
          <span className="text-white/20 font-mono text-xs hidden sm:inline">//</span>
          <div className="hidden sm:flex items-center gap-2 bg-[#84CC16]/10 border border-[#84CC16]/30 px-3 py-1 rounded-full backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-[#84CC16] animate-ping" />
            <span className="text-[#84CC16] text-[10px] font-mono tracking-widest uppercase font-bold">
              ACTIVE DEFENCE INDUSTRIAL ECOSYSTEM
            </span>
          </div>
        </motion.div>

        {/* Main Title */}
        <motion.h1 
          custom={1}
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight uppercase max-w-5xl leading-[1.08] mb-6"
          style={{ fontFamily: INTER }}
        >
          POWERING SOVEREIGN DEFENCE &amp;{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/95 to-[#84CC16] drop-shadow-[0_0_25px_rgba(132,204,22,0.3)]">
            STRATEGIC INFRASTRUCTURE
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p 
          custom={2}
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="text-white/70 text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed mb-10 font-normal"
        >
          Sahana Defence collaborates with the Ministry of Defence, the Tri-Services Armed Forces, premier Defence PSUs, and National Space Research Institutes to engineer and deploy mission-critical electronic warfare, aerospace, and quantum solutions.
        </motion.p>

        {/* Tactical Metadata Bar */}
        <motion.div 
          custom={3}
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 py-3 px-6 rounded-lg bg-neutral-950/80 border border-white/10 backdrop-blur-md text-xs font-mono text-white/70 shadow-2xl"
        >
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
        </motion.div>

      </div>
    </section>
  );
}
