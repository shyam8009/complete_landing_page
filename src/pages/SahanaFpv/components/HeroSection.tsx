import React from 'react';
import { ChevronRight } from 'lucide-react';
import cinematicVideo from '../../../assets/Drone 2.mp4';

const INTER = '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-black pt-24 pb-16">
      {/* Full-width Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-80"
        src={cinematicVideo}
      />
      
      {/* Background Graphic Elements overlaying the video */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-r from-black/80 via-black/40 to-transparent" />

      <div className="max-w-[1600px] mx-auto px-4 lg:px-6 w-full relative z-10">
        <div className="max-w-3xl">
          
          {/* Left Text Content */}
          <div className="flex flex-col items-start fade-up">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#3C5929]/20 border border-[#3C5929]/40 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#3C5929] animate-pulse" />
              <span className="text-[#3C5929] text-xs font-bold uppercase tracking-wider font-mono">Drone Systems</span>
            </div>
            
            <h1 
              className="text-5xl lg:text-7xl font-bold text-white mb-6 uppercase leading-[1.1] tracking-tight"
              style={{ fontFamily: INTER }}
            >
              SAHANA FPV <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">DRONE BUDDY</span>
            </h1>
            
            <p className="text-xl text-white/60 mb-10 max-w-lg leading-relaxed">
              Tactical precision and real-time aerial surveillance. Engineered for high-speed oversight in challenging, interference-heavy environments.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <button className="group relative flex items-center justify-center gap-2 bg-[#3C5929] text-black px-8 py-4 rounded font-bold uppercase tracking-wide hover:bg-white transition-colors">
                Request Specs
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mt-16 p-6 border border-white/10 rounded-xl backdrop-blur-md bg-black/40 w-full sm:w-fit shadow-2xl">
              <div>
                <div className="text-2xl font-bold text-white mb-1">12 kg</div>
                <div className="text-xs text-white/50 font-mono uppercase">Max Payload</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white mb-1">180 km/h</div>
                <div className="text-xs text-white/50 font-mono uppercase">Max Speed</div>
              </div>
              <div className="hidden md:block">
                <div className="text-2xl font-bold text-white mb-1">40 km</div>
                <div className="text-xs text-white/50 font-mono uppercase">Flight Range</div>
              </div>
              <div className="hidden md:block">
                <div className="text-2xl font-bold text-white mb-1">Proxy</div>
                <div className="text-xs text-white/50 font-mono uppercase">Comm Channel</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
