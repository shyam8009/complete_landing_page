import React from 'react';
import { Network, Database, ChevronDown } from 'lucide-react';
import { Link } from 'react-router';

export function IoTHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent z-10" />
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-full object-cover"
        >
          {/* Add actual video source in production */}
          <source src="/assets/iot_hero_bg.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="max-w-[1600px] mx-auto px-4 lg:px-6 relative z-10 w-full">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-6 animate-fade-in">
            <div className="w-2 h-2 rounded-full bg-[#84CC16] animate-pulse shadow-[0_0_10px_#84CC16]" />
            <span className="text-[#84CC16] font-mono text-sm tracking-widest uppercase">
              DEFENCE DEEPTECH / CONNECTIVITY & INFRASTRUCTURE
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in-up">
            INTERNET OF <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">THINGS</span>
          </h1>

          <p className="text-lg md:text-xl text-white/70 mb-12 leading-relaxed animate-fade-in-up delay-100 max-w-2xl">
            Technology and devices that connect immeasurable folks within the world, working smarter with better connectivity. Adopt an IoT strategy to deliver higher services and redefine relationships with your clients, partners, and employees.
          </p>

          <div className="flex flex-wrap items-center gap-6 animate-fade-in-up delay-200">
            <a 
              href="#pipeline"
              className="group relative inline-flex items-center justify-center px-8 py-4 bg-[#84CC16] text-black font-mono font-bold tracking-widest uppercase overflow-hidden"
            >
              <div className="absolute inset-0 w-full h-full bg-white/20 -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out" />
              <span className="relative flex items-center gap-2">
                REQUEST A CONSULTATION
                <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
              </span>
            </a>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in-up delay-300">
            <div className="flex items-center gap-4 p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg">
              <Network className="w-8 h-8 text-[#84CC16]" />
              <div>
                <div className="text-2xl font-bold text-white mb-1">Total Automation</div>
                <div className="text-sm text-white/60 font-mono">Device-to-Device Interaction</div>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg">
              <Database className="w-8 h-8 text-[#84CC16]" />
              <div>
                <div className="text-2xl font-bold text-white mb-1">Seamless Management</div>
                <div className="text-sm text-white/60 font-mono">Customized IoT Platforms</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
