import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

import imgQkd from '@/imports/qkd_terminal.jpg';
import imgNetwork from '@/imports/quantum_network_nodes.jpg';
import imgCrypto from '@/imports/quantum_crypto_chip.jpg';
import imgSoftware from '@/imports/quantum_control_software.jpg';
import bgSchematic from '@/imports/unified_quantum_schematic.jpg';
import introVideo from '@/imports/quantum_communication_intro_video.mp4';

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
      {/* Intro Section - Standard Flow */}
      <section className="relative w-full py-32 md:py-48 flex flex-col items-start justify-center overflow-hidden" style={{ backgroundColor: '#050505' }}>
        
        {/* Background Video */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <video 
            src={introVideo} 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover"
          />
          {/* Gradient overlay to ensure text is legible on the left */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
          
          {/* Bottom fade to blend seamlessly into the next section */}
          <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#050505] to-transparent" />
        </div>

        <div className="relative z-10 px-6 md:px-12 max-w-3xl text-left">
          <span className="inline-block px-3 py-1 rounded-full text-[10px] font-mono tracking-wider uppercase mb-6" style={{ color: '#84CC16', backgroundColor: 'rgba(132,204,22,0.1)', border: '1px solid rgba(132,204,22,0.2)' }}>
            Sovereign Technology
          </span>
          <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tight text-white leading-tight">
            Quantum Communication <br className="hidden md:block" /> Ecosystem
          </h2>
          <p className="mt-6 text-sm md:text-base leading-relaxed text-neutral-300 max-w-xl">
            A comprehensive, unhackable communication architecture spanning hardware, software, and distributed networking. Built to secure India's most critical data against classical and quantum threats.
          </p>
        </div>
      </section>

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
              
              {/* THE GLASSMORPHISM CARD (Max height ensures it clears header/footer) */}
              <div 
                className="w-[90vw] max-w-[1100px] h-auto max-h-[75vh] flex flex-col md:flex-row rounded-2xl overflow-hidden mx-auto"
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
                <div className="w-full md:w-5/12 h-48 md:h-auto border-b md:border-b-0 md:border-r" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
                  <div className="relative w-full h-full bg-[#000]">
                    <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
                    <div style={{ background: 'linear-gradient(to top, rgba(5,5,5,0.9) 0%, transparent 60%)' }} className="absolute inset-0" />
                  </div>
                </div>

                {/* Right Split (Content) */}
                <div className="w-full md:w-7/12 p-6 lg:p-10 flex flex-col justify-center overflow-y-auto">
                  <div>
                    <span className="inline-block px-3 py-1 rounded-md text-[9px] lg:text-[10px] font-mono tracking-wider uppercase mb-4"
                      style={{ color: '#84CC16', backgroundColor: 'rgba(132,204,22,0.1)', border: '1px solid rgba(132,204,22,0.2)' }}>
                      {item.tag}
                    </span>
                    
                    <h2 className="text-white text-xl lg:text-3xl font-bold uppercase mb-4 leading-tight">
                      {item.title}
                    </h2>
                    
                    <p className="text-xs lg:text-sm text-neutral-300 mb-6 leading-relaxed">
                      {item.desc}
                    </p>
                    
                    <div className="my-5" style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }} />
                    
                    <ul className="space-y-3">
                      {item.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-start gap-3 text-xs lg:text-[13px] text-white/80">
                          <span className="mt-[2px] font-bold" style={{ color: '#84CC16' }}>›</span>
                          <span className="leading-normal">{feature}</span>
                        </li>
                      ))}
                    </ul>
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
