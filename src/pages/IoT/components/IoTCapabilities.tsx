import React from 'react';
import { Zap, Server, Shield } from 'lucide-react';

export function IoTCapabilities() {
  return (
    <section className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-4 lg:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Text Content */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-2 rounded-full bg-[#84CC16] animate-pulse" />
              <span className="text-[#84CC16] font-mono text-sm tracking-widest uppercase">
                SMART INFRASTRUCTURE
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
              Customized Hardware <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">
                & Total Automation.
              </span>
            </h2>

            <p className="text-lg text-white/60 leading-relaxed mb-8">
              Companies looking forward to top-quality innovations are adopting the Internet of Things strategy to make higher services by understanding their client better. By deploying our customized IoT solution in your business, you can customize with our IOT services with an end-to-end solution.
            </p>
            <p className="text-lg text-white/60 leading-relaxed">
              We guarantee total automation just in case of device-to-device interaction. Furthermore, our IOT platforms offer customized solutions for the seamless management of your business.
            </p>
          </div>

          {/* Visual Content */}
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-white/10 bg-[#111] group">
            {/* Background Image / Render */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#84CC16]/10 to-transparent opacity-50 mix-blend-overlay" />
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-40 mix-blend-luminosity group-hover:opacity-60 transition-opacity duration-700" />
            
            {/* Overlay Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px]" />

            {/* HUD Elements */}
            <div className="absolute inset-0 p-8 flex flex-col justify-between">
              <div className="flex justify-end">
                <div className="px-4 py-2 bg-black/80 backdrop-blur-md border border-[#84CC16]/30 rounded text-[#84CC16] font-mono text-sm flex items-center gap-2 shadow-[0_0_15px_rgba(132,204,22,0.15)]">
                  <Zap className="w-4 h-4" />
                  Wireless Communication & Cloud Computing
                </div>
              </div>

              <div className="flex justify-start">
                <div className="px-4 py-2 bg-black/80 backdrop-blur-md border border-white/10 rounded text-white font-mono text-sm flex items-center gap-2">
                  <Server className="w-4 h-4 text-white/60" />
                  Processing Speed & Light-Weight OS
                </div>
              </div>

              <div className="flex justify-end">
                <div className="px-4 py-2 bg-black/80 backdrop-blur-md border border-white/10 rounded text-white font-mono text-sm flex items-center gap-2">
                  <Shield className="w-4 h-4 text-white/60" />
                  Small-Footprint Protocols
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
