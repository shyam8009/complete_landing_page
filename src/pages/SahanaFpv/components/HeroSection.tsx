import React from 'react';
import { ChevronRight } from 'lucide-react';
import fpvHeroBg from '../../../imports/fpv_bullseye/hero_video.mp4';
import { TechCTA } from '@/components/TechCTA';

const INTER = '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';

export function HeroSection() {
  return (
    <section className="relative min-h-[100dvh] max-md:landscape:min-h-[60vh] flex flex-col justify-between overflow-hidden bg-black pt-20 sm:pt-24 md:pt-28 pb-8 sm:pb-10 md:pb-12">
      {/* Full-width Background Video */}
      <video
        autoPlay={!window.matchMedia('(prefers-reduced-motion: reduce)').matches}
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-80"
        src={fpvHeroBg}
      />
      
      {/* Background Graphic Elements overlaying the video */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-r from-black/80 via-black/40 to-transparent" />

      <div className="max-w-[1600px] mx-auto px-4 lg:px-6 w-full relative z-10 flex-1 flex flex-col justify-center">
        <div className="max-w-3xl">
          
          {/* Left Text Content */}
          <div className="flex flex-col items-start fade-up">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#84CC16]/10 border border-[#84CC16]/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#84CC16] animate-pulse" />
              <span className="text-[#84CC16] text-xs font-bold uppercase tracking-wider font-mono">DRONE SYSTEMS</span>
            </div>
            
            <h1 
              className="text-3xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 uppercase leading-[1.1] tracking-tight"
              style={{ fontFamily: INTER }}
            >
              FPV BULLSEYE &amp; <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">INTERCEPTOR</span>
            </h1>
            
            <p className="text-xl text-white/60 mb-10 max-w-lg leading-relaxed">
              High-speed tactical precision and rapid aerial threat neutralization.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full">
                <TechCTA>
                Request Consultation
                <ChevronRight className="w-4 h-4 text-[#84CC16] group-hover:translate-x-1 transition-transform" />
              </TechCTA>
                <TechCTA>
                  DOWNLOAD CAPABILITY BROCHURE
                </TechCTA>
              </div>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 gap-8 mt-16 p-6 border border-white/10 rounded-xl backdrop-blur-md bg-black/40 w-full sm:w-fit shadow-2xl">
              <div>
                <div className="text-3xl font-bold text-white mb-1">400 kmph</div>
                <div className="text-sm text-white/50 font-mono uppercase">Max Interception Speed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-1">10 km</div>
                <div className="text-sm text-white/50 font-mono uppercase">Tactical Flight Range</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}






