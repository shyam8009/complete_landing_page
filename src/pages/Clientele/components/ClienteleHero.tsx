import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Crosshair, Layers } from 'lucide-react';
import { Link } from 'react-router';
import heroBg from '@/imports/clientele/hero_banner.png';

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
    <section className="relative w-full min-h-[100dvh] max-md:landscape:min-h-[60vh] overflow-hidden bg-black flex flex-col justify-center">
      {/* Background Image - Clean rendering without heavy filters or glow effects */}
      <img
        src={heroBg}
        alt="Clientele & Strategic Alliances"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      
      {/* Soft gradient overlay for text readability without obscuring the image */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent z-10" />

      {/* Content Container - Left Aligned */}
      <div className="relative z-20 flex-1 flex flex-col justify-center pt-28 sm:pt-36 md:pt-44 pb-16 sm:pb-20 w-full px-4 sm:px-6 lg:px-12 max-w-[1600px] mx-auto">
        <div className="max-w-4xl text-left flex flex-col items-start">
          

          {/* Main Title - Left Aligned */}
          <motion.h1 
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight uppercase leading-[1.08] mb-6 text-left"
            style={{ fontFamily: INTER }}
          >
            POWERING SOVEREIGN DEFENCE &amp; <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/95 to-[#84CC16]">
              STRATEGIC INFRASTRUCTURE
            </span>
          </motion.h1>

          {/* Subtitle - Left Aligned */}
          <motion.p 
            custom={2}
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-white/80 text-base sm:text-lg md:text-xl max-w-3xl leading-relaxed mb-10 font-normal text-left"
          >
            Sahana Defence collaborates with the Ministry of Defence, the Tri-Services Armed Forces, premier Defence PSUs, and National Space Research Institutes to engineer and deploy mission-critical electronic warfare, aerospace, and quantum solutions.
          </motion.p>

          {/* Tactical Metadata Bar - Left Aligned */}
          <motion.div 
            custom={3}
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="flex flex-wrap items-center justify-start gap-3 sm:gap-6 py-3 px-6 rounded-lg bg-black/60 border border-white/10 backdrop-blur-md text-xs font-mono text-white/80 shadow-2xl"
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
      </div>
    </section>
  );
}
