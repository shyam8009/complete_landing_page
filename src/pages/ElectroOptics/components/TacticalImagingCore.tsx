import React from 'react';
import { motion } from 'framer-motion';
import { Flame, Moon, Activity, Lightbulb, Camera, Layers, CloudFog, Cpu, Radar } from 'lucide-react';

const CAPABILITIES = [
  {
    icon: Flame,
    title: 'Thermal Imaging',
    desc: 'See radiant heat. No light required.'
  },
  {
    icon: Moon,
    title: 'Night Vision',
    desc: 'Multiple ways to see in the dark.'
  },
  {
    icon: Activity,
    title: 'Gyro Stabilization',
    desc: 'Remove shakiness in long-range imaging.'
  },
  {
    icon: Lightbulb,
    title: 'ZLID™ / IR Illumination',
    desc: 'Laser IR illumination up to 5km.'
  },
  {
    icon: Camera,
    title: '4K/HD Visible Imaging',
    desc: 'Visible/RGB color in ultra-high definition.'
  },
  {
    icon: Layers,
    title: 'Multispectral EO/IR',
    desc: 'See in several different wavelengths concurrently.'
  },
  {
    icon: CloudFog,
    title: 'Near-Infrared (NIR) & SWIR',
    desc: 'See straight through smoke, fog, and atmospheric haze.'
  },
  {
    icon: Cpu,
    title: 'AI & Image Processing',
    desc: 'Edge-based target tracking and real-time video enhancement.'
  },
  {
    icon: Radar,
    title: 'Radar Integration',
    desc: 'Slew-to-cue automated optical tracking over land, air, and sea.'
  }
];

export function TacticalImagingCore() {
  return (
    <section className="relative w-full bg-[#000000] text-white py-32 px-6 md:px-12 lg:px-24 overflow-hidden font-['Inter',sans-serif]">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[1px] bg-gradient-to-r from-transparent via-[#84CC16]/20 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(132,204,22,0.03)_0%,transparent_50%)] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto flex flex-col gap-16 lg:gap-24">
        
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-3 mb-8">
              <span className="w-2 h-2 rounded-full bg-[#84CC16] animate-pulse" />
              <span className="text-[#84CC16] font-mono text-[10px] sm:text-xs tracking-[0.2em] uppercase font-bold">
                TACTICAL IMAGING CORE
              </span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-8">
              Multi-Spectral <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">Sensing Mastery.</span>
            </h2>
            
            <p className="text-lg sm:text-xl text-white/70 leading-relaxed font-light mb-8 max-w-2xl">
              Engineered to pierce through total darkness, adverse weather, and long-range atmospheric interference, our imaging core provides unparalleled visual dominance.
            </p>

            <div className="w-16 h-1 bg-[#84CC16]/50" />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {CAPABILITIES.map((cap, idx) => {
            const Icon = cap.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
                className="group relative bg-[#0a0a0a] border border-white/5 hover:border-[#84CC16]/30 p-8 rounded-2xl transition-all duration-300"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#84CC16]/5 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl" />
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-12 h-12 bg-white/5 rounded-xl border border-white/10 flex items-center justify-center mb-6 group-hover:bg-[#84CC16]/10 group-hover:border-[#84CC16]/30 transition-colors">
                    <Icon className="w-6 h-6 text-[#84CC16]" />
                  </div>
                  
                  <h3 className="text-lg font-bold text-white mb-3 uppercase tracking-wide">
                    {cap.title}
                  </h3>
                  
                  <p className="text-sm text-white/50 leading-relaxed font-light">
                    {cap.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
