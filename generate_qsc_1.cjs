const fs = require('fs');
const path = require('path');

const dir = 'src/pages/QuantumSecuredCommunication/components';
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

// 1. HeroSection.tsx
fs.writeFileSync(path.join(dir, 'HeroSection.tsx'), `import React, { useEffect, useRef } from 'react';
import { ChevronRight } from 'lucide-react';
import gsap from 'gsap';
import { TechCTA } from '@/components/TechCTA';
import heroVideo from '@/imports/quantum_communication_intro_video.mp4';

const INTER = "'Inter', sans-serif";

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".hero-element",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: "power3.out" }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative w-full min-h-[100dvh] max-md:landscape:min-h-[60vh] overflow-hidden bg-black flex flex-col">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-60"
        src={heroVideo}
      />
      
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent z-10" />
      <div className="absolute inset-0 bg-black/20 z-10" />
      
      <div className="relative z-20 flex-1 flex flex-col justify-center pt-20 sm:pt-24 md:pt-28 pb-8 sm:pb-10 md:pb-12 w-full px-4 sm:px-6 lg:px-12 max-w-[1600px] mx-auto">
        <div className="max-w-3xl">
          
          <div className="hero-element inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6">
            <div className="w-2 h-2 rounded-full bg-[#84CC16] animate-pulse" />
            <span className="text-xs font-bold tracking-[2px] text-white uppercase" style={{ fontFamily: INTER }}>
              QUANTUM COMMUNICATION
            </span>
          </div>
          
          <h1 
            className="hero-element text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 uppercase leading-[1.1] tracking-tight"
            style={{ fontFamily: INTER }}
          >
            QUANTUM SECURED <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">COMMUNICATION</span>
          </h1>
          
          <p className="hero-element text-xl text-white/60 mb-10 max-w-lg leading-relaxed">
            Keys that cannot be copied without leaving a trace.
          </p>
          
          <div className="hero-element flex flex-wrap gap-6 items-center mb-6 md:mb-16">
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full">
                <TechCTA>
                  REQUEST FOR PROPOSAL
                  <ChevronRight className="w-4 h-4 text-[#84CC16] group-hover:translate-x-1 transition-transform" />
                </TechCTA>
                <TechCTA>
                  DOWNLOAD CAPABILITY BROCHURE
                </TechCTA>
            </div>
          </div>
          
          <div className="hero-element flex flex-col md:flex-row gap-4 md:gap-8 p-6 rounded-lg mt-6 md:mt-12 border border-white/10 bg-white/5 backdrop-blur-xl max-w-fit">
            <div>
              <div className="text-2xl font-bold text-white">Over 2 Gbps</div>
              <div className="text-sm font-medium text-white/50 uppercase tracking-widest mt-1">QRNG THROUGHPUT</div>
            </div>
            <div className="hidden md:block w-px bg-white/20" />
            <div className="block md:hidden h-px w-full bg-white/20" />
            <div>
              <div className="text-2xl font-bold text-white">Fibre and drone relay</div>
              <div className="text-sm font-medium text-white/50 uppercase tracking-widest mt-1">LINK ARCHITECTURE</div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}`);

// 2. OperationalSequence.tsx
fs.writeFileSync(path.join(dir, 'OperationalSequence.tsx'), `import React from 'react';

const steps = [
  {
    title: "GENERATE",
    desc: "High-speed quantum random number generation produces cryptographically secure randomness at over 2 Gbps, with continuous entropy validation."
  },
  {
    title: "DISTRIBUTE",
    desc: "Quantum key distribution over fibre, where any attempt to intercept the key disturbs it and is detected at both ends."
  },
  {
    title: "EXTEND",
    desc: "Drone-relay architectures carry secure quantum links across terrain where fibre cannot be laid."
  },
  {
    title: "SECURE",
    desc: "Military-grade encryption for operations that cannot afford a compromised channel."
  }
];

export function OperationalSequence() {
  return (
    <section className="w-full bg-[#050505] text-white section-padding px-6 md:px-12 lg:px-24 border-t border-white/5 font-['Inter',sans-serif]">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {steps.map((step, idx) => (
          <div key={idx} className="flex flex-col border-t border-white/10 pt-6">
            <div className="text-[#84CC16] font-mono text-sm tracking-widest mb-4">0{idx + 1} // {step.title}</div>
            <p className="text-white/60 leading-relaxed text-sm lg:text-base">
              {step.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}`);

// 3. CoreCapabilities.tsx
fs.writeFileSync(path.join(dir, 'CoreCapabilities.tsx'), `import React from 'react';
import { motion } from 'framer-motion';

export function CoreCapabilities() {
  return (
    <section className="relative w-full bg-[#000000] text-white section-padding px-6 md:px-12 lg:px-24 overflow-hidden font-['Inter',sans-serif]">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[1px] bg-gradient-to-r from-transparent via-[#84CC16]/20 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(132,204,22,0.03)_0%,transparent_50%)] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24">
        
        <div className="flex-1">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-3 mb-8">
              <span className="w-2 h-2 rounded-full bg-[#84CC16] animate-pulse" />
              <span className="text-[#84CC16] font-mono text-[10px] sm:text-xs tracking-[0.2em] uppercase font-bold">
                CORE CAPABILITIES
              </span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] mb-8 uppercase">
              UNBREAKABLE KEYS <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">& FLEXIBLE LINKS</span>
            </h2>
            
            <div className="w-16 h-1 bg-[#84CC16]/50" />
          </motion.div>
        </div>

        <div className="flex-1 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-8"
          >
            <div className="flex flex-col gap-4">
              {["Over 2 Gbps QRNG Throughput", "QKD-Fibre and Drone Relay", "Continuous Entropy Validation"].map((badge, i) => (
                <div key={i} className="inline-flex items-center gap-3 px-4 py-2 rounded border border-white/10 bg-white/5 w-fit">
                  <div className="w-1.5 h-1.5 bg-[#84CC16] rounded-full" />
                  <span className="text-sm font-medium tracking-wide">{badge}</span>
                </div>
              ))}
            </div>
            
            <p className="text-base sm:text-lg text-white/50 leading-relaxed">
              Conventional encryption keys are generated by algorithms, which means they can in principle be predicted. Quantum Secured Communication combines high-speed quantum random number generation with quantum key distribution, so keys are drawn from genuinely unpredictable physical events and any interception of them is detectable rather than silent. Links run over fibre or, where fibre is not an option, across drone-relay architectures.
            </p>
            
          </motion.div>
        </div>
        
      </div>
    </section>
  );
}`);

console.log('Created Hero, Operational, Capabilities');
