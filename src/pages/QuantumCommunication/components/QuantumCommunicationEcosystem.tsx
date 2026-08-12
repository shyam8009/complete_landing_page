import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

import imgQkd from '@/imports/qkd_terminal.jpg';
import imgNetwork from '@/imports/quantum_network_nodes.jpg';
import imgCrypto from '@/imports/quantum_crypto_chip.jpg';
import imgSoftware from '@/imports/quantum_control_software.jpg';
import bgSchematic from '@/imports/unified_quantum_schematic.jpg';

gsap.registerPlugin(ScrollTrigger);

interface CommCard {
  tag: string;
  title: string;
  desc: string;
  features: string[];
  img: string;
}

const commsData: CommCard[] = [
  {
    tag: 'QKD-Fibre . Drone-Relay Architectures',
    title: 'Quantum Secured Communication',
    desc: 'Military-grade encryption for operations that can\'t afford to be broken. Quantum Secured Communication combines high-speed QRNG with quantum key distribution to secure India\'s most sensitive channels, in fibre and over the air.',
    features: [
      'QKD-Fibre for point-to-point quantum key distribution.',
      'Drone-Relay architectures extending secure quantum links across contested terrain.',
      'Over 2Gbps QRNG throughput.',
      'Military-grade encryption built for high-sensitivity operations.'
    ],
    img: imgQkd
  },
  {
    tag: 'Distributed Network Architecture',
    title: 'Quantum Internet',
    desc: 'The networking layer that connects quantum-secured nodes into a single, resilient infrastructure. Quantum Internet architecture extends secure quantum communication beyond point-to-point links into a distributed, mission-wide network.',
    features: [
      'Distributed quantum network architecture across multiple nodes.',
      'Extends secure communication beyond fibre to drone-relay and hybrid links.',
      'Foundation for battlefield-scale quantum networking.',
      'Built for resilience across contested and distributed operating environments.'
    ],
    img: imgNetwork
  },
  {
    tag: 'Hardware-Level Security',
    title: 'Hardware based Post Quantum Cryptography',
    desc: 'Cryptography engineered to withstand the quantum threat, at the hardware level. Hardware-based Post-Quantum Cryptography secures data and communications against both classical and quantum decryption, without relying on software alone.',
    features: [
      'Hardware-enabled implementation for tamper-resistant security.',
      'Built for the post-quantum threat horizon facing classical encryption.',
      'Secures data at rest and in transit across sensitive systems.',
      'Deployable alongside existing communication and control infrastructure.'
    ],
    img: imgCrypto
  },
  {
    tag: 'Board Support Packages . APIs',
    title: 'Quantum Control Systems',
    desc: 'The control and software layer that makes quantum hardware usable in the field. Quantum Control Systems, including Board Support Packages, give diverse hardware a common, standardised interface, cutting integration time and accelerating deployment.',
    features: [
      'Hardware-agnostic Board Support Packages (BSPs).',
      'Standardised APIs for device drivers, middleware, and developer tools.',
      'Reduces integration friction across vendors and platforms.',
      'Built for faster time-to-mission across quantum and RF/MW systems.'
    ],
    img: imgSoftware
  }
];

export default function QuantumCommunicationEcosystem() {
  const scrollContainer = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Only apply if we have cards
    if (!trackRef.current || commsData.length === 0) return;

    // Determine how far the track needs to slide (scrollWidth minus 1 viewport width)
    const getScrollDist = () => trackRef.current ? trackRef.current.scrollWidth - window.innerWidth : 0;

    ScrollTrigger.create({
      trigger: scrollContainer.current,
      start: "top top",
      end: () => `+=${getScrollDist()}`,
      pin: true,
      animation: gsap.to(trackRef.current, {
        x: () => -getScrollDist(),
        ease: "none"
      }),
      scrub: 1, // Smooth scrubbing
      invalidateOnRefresh: true, // Recalculates on resize
    });
  }, { scope: scrollContainer });

  return (
    <div className="font-['Inter',sans-serif]">

      {/* Outer Container for GSAP Track */}
      <section ref={scrollContainer} className="relative w-full h-screen overflow-hidden bg-[#050505]">
      
      {/* BACKGROUND IMAGE (Fixed, z-0) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img 
          src={bgSchematic} 
          alt="Quantum Network Schematic" 
          className="w-full h-full object-cover opacity-[0.15] mix-blend-screen invert"
        />
        {/* Faint green glow overlaid on schematic */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(132,204,22,0.06)_0%,rgba(5,5,5,0.85)_80%)]" />
      </div>

      {/* HEADER (Fixed, z-20) */}
      <div className="absolute top-8 left-0 w-full z-20 text-center pointer-events-none">
        <h3 className="text-[#84CC16] tracking-[0.3em] font-bold uppercase text-[10px] md:text-xs">
          The Quantum Ecosystem
        </h3>
      </div>

      {/* THE SLIDING TRACK (z-10) */}
      <div className="relative z-10 flex h-full items-center overflow-visible">
        <div ref={trackRef} className="flex flex-nowrap h-full items-center pl-[5vw] md:pl-[10vw]">
          
          {/* Render each card sequentially */}
          {commsData.map((item, index) => (
            <div 
              key={index} 
              className="w-screen flex-shrink-0 flex items-center justify-center pr-[10vw]"
              style={{ width: '100vw' }}
            >
              
              {/* THE GLASSMORPHISM CARD (Fixed Height Constraint) */}
              <div 
                className="w-[90vw] max-w-[1100px] rounded-2xl overflow-hidden mx-auto h-[min(540px,75vh)] flex flex-col md:flex-row"
                style={{ 
                  backgroundColor: 'rgba(8, 8, 8, 0.75)', 
                  border: '1px solid rgba(255,255,255,0.08)',
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  boxShadow: '0 25px 50px -12px rgba(0,0,0,0.8)',
                }}
              >
                
                {/* HUD Corner Accents */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 z-20" style={{ borderColor: 'rgba(132,204,22,0.6)' }} />
                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 z-20" style={{ borderColor: 'rgba(132,204,22,0.6)' }} />
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 z-20" style={{ borderColor: 'rgba(132,204,22,0.6)' }} />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 z-20" style={{ borderColor: 'rgba(132,204,22,0.6)' }} />

                {/* Left Split (Image) */}
                <div className="w-full md:w-1/2 h-48 md:h-auto border-b md:border-b-0 md:border-r" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
                  <div className="relative w-full h-full bg-[#000]">
                    <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
                    <div style={{ background: 'linear-gradient(to top, rgba(5,5,5,0.9) 0%, transparent 60%)' }} className="absolute inset-0" />
                  </div>
                </div>

                {/* Right Split (Content) */}
                <div className="w-full md:w-1/2 p-6 lg:p-10 flex flex-col justify-between h-full overflow-hidden bg-neutral-100">
                  <div>
                    <span className="inline-block px-3 py-1 rounded-md text-[9px] lg:text-[10px] font-mono tracking-wider uppercase mb-4"
                      style={{ color: '#050505', backgroundColor: '#84CC16', border: '1px solid #84CC16' }}>
                      {item.tag}
                    </span>
                    
                    <h2 className="text-slate-900 text-xl lg:text-3xl font-bold uppercase mb-4 leading-tight line-clamp-2">
                      {item.title}
                    </h2>
                    
                    <p className="text-sm lg:text-base text-slate-600 mb-3 leading-relaxed">
                      {item.desc}
                    </p>
                    
                    
                  </div>

                  {/* CTA */}
                  <div className="pt-6 mt-auto border-t border-slate-200">
                    <button className="w-full md:w-auto py-3 px-8 rounded-xl font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 bg-slate-900 hover:bg-white hover:text-slate-900 text-white">
                      <span>Know More</span>
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
    </div>
  );
}
