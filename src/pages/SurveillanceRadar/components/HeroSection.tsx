import React from 'react';
import { ChevronRight, Target } from 'lucide-react';
import surveillanceRadarHeroImg from '../../../imports/surveillance_radar_hero.png';

const INTER = '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#0a0a0a] pt-24 pb-16">
      {/* Background Graphic Elements */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_50%,rgba(132,204,22,0.15),transparent_50%)]" />
        <div className="absolute left-10 top-20 w-px h-full bg-gradient-to-b from-[#84CC16]/50 to-transparent" />
        <div className="absolute left-10 top-40 w-8 h-px bg-[#84CC16]/50" />
      </div>

      <div className="max-w-[1600px] mx-auto px-4 lg:px-6 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Text Content */}
          <div className="flex flex-col items-start fade-up">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#84CC16]/10 border border-[#84CC16]/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#84CC16] animate-pulse" />
              <span className="text-[#84CC16] text-xs font-bold uppercase tracking-wider font-mono">Ground Surveillance RADAR (GSR) / Ku-Band FMCW</span>
            </div>
            
            <h1 
              className="text-5xl lg:text-7xl font-bold text-white mb-6 uppercase leading-[1.1] tracking-tight"
              style={{ fontFamily: INTER }}
            >
              SURVEILLANCE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">RADAR</span>
            </h1>
            
            <p className="text-xl text-white/60 mb-10 max-w-lg leading-relaxed">
              Dynamic 360Â° Predictive Threat Tracking. Dominating Adverse Visibility Up to 30 Kilometers.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <button className="group relative flex items-center justify-center gap-2 bg-[#84CC16] text-black px-8 py-4 rounded font-bold uppercase tracking-wide hover:bg-[#a3e635] transition-colors">
                Request Briefing
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 gap-8 mt-16 pt-8 border-t border-white/10 w-full">
              <div>
                <div className="text-3xl font-bold text-white mb-1">30 km</div>
                <div className="text-sm text-white/50 font-mono uppercase">Max Tracking Envelope</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-1">700</div>
                <div className="text-sm text-white/50 font-mono uppercase">Concurrent Targets</div>
              </div>
            </div>
          </div>

          {/* Right Image Content */}
          <div className="relative fade-up" style={{ transitionDelay: '0.2s' }}>
            <div className="relative aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 bg-black/50 backdrop-blur-sm group">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#84CC16]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
              <img 
                src={surveillanceRadarHeroImg} 
                alt="Surveillance Radar System" 
                className="w-full h-full object-cover opacity-80 mix-blend-lighten"
              />
              {/* Overlay HUD elements */}
              <div className="absolute top-6 right-6 flex flex-col gap-2 z-20">
                <div className="flex items-center gap-2 px-3 py-1.5 bg-black/60 backdrop-blur-md rounded border border-white/10">
                  <Target className="w-4 h-4 text-[#84CC16]" />
                  <span className="text-xs font-mono text-white/80">360Â° PREDICTIVE: ACTIVE</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}