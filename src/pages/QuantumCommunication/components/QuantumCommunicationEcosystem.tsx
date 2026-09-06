import React, { useRef } from 'react';
import { useNavigate } from 'react-router';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

import qkdFibreImg from '@/imports/quantum-secured-communication/qkd_fibre.png';
import cryptoImg from '@/imports/quantum_crypto_chip.jpg';
import controlImg from '@/imports/quantum_control_software.jpg';
import bgSchematic from '@/imports/unified_quantum_schematic.jpg';
import { TechCTA } from '@/components/TechCTA';

gsap.registerPlugin(ScrollTrigger);

interface ProductCard {
  id: string;
  badge: string;
  title: string;
  text: string;
  imageLabel: string;
  image: string;
  slug: string;
}

const PRODUCTS: ProductCard[] = [
  {
    id: 'quantum-secured-comms',
    badge: 'QKD-Fibre · Drone-Relay Architectures',
    title: 'QUANTUM SECURED COMMUNICATION',
    text: 'Key distribution where any attempt to intercept is detected at both ends.',
    imageLabel: 'SECURE CHANNEL · ACTIVE',
    image: qkdFibreImg,
    slug: '/quantum-technology-solutions/quantum-communication/quantum-secured-communication'
  },
  {
    id: 'hardware-pqc',
    badge: 'Hardware-Level Security',
    title: 'HARDWARE BASED POST QUANTUM CRYPTOGRAPHY',
    text: 'Encryption implemented in hardware, resistant to both classical and quantum decryption.',
    imageLabel: 'QUANTUM RESISTANT',
    image: cryptoImg,
    slug: '/quantum-technology-solutions/quantum-communication/hardware-based-post-quantum-cryptography'
  },
  {
    id: 'quantum-control',
    badge: 'Board Support Packages · APIs',
    title: 'QUANTUM CONTROL SYSTEMS',
    text: 'A common software layer that gives diverse quantum hardware a single interface.',
    imageLabel: 'HARDWARE AGNOSTIC',
    image: controlImg,
    slug: '/quantum-technology-solutions/quantum-communication/quantum-control-systems'
  }
];

export function QuantumCommunicationEcosystem() {
  const containerRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const cards = gsap.utils.toArray('.qc-card');
    if (!trackRef.current || cards.length === 0) return;

    const track = trackRef.current;
    const getScrollDist = () => track.scrollWidth - window.innerWidth;

    gsap.to(track, {
      x: () => -getScrollDist(),
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: 1,
        start: 'top top',
        end: () => `+=${getScrollDist()}`,
        invalidateOnRefresh: true,
      }
    });
  }, { scope: containerRef });

  return (
    <div className="font-['Inter',sans-serif]">
      <section 
        ref={containerRef} 
        className="relative h-screen overflow-hidden"
        style={{ backgroundColor: '#050505' }}
      >
        {/* Background Schematic Image */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <img 
            src={bgSchematic} 
            alt="Quantum Schematic Background" 
            className="w-full h-full object-cover opacity-[0.15] mix-blend-screen invert"
          />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(132,204,22,0.06)_0%,rgba(5,5,5,0.85)_80%)]" />
        </div>

        {/* Section Header Indicator */}
        <div className="absolute top-8 left-0 right-0 z-20 flex justify-center pointer-events-none">
          <span className="text-[#84CC16] font-mono font-bold tracking-[0.2em] text-sm md:text-base uppercase">
            QUANTUM COMMUNICATION ECOSYSTEM
          </span>
        </div>

        <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center pointer-events-none">
          <span className="text-white/40 font-mono tracking-widest text-xs uppercase animate-pulse">
            SCROLL TO EXPLORE
          </span>
        </div>

        {/* Track Container */}
        <div className="h-full w-full flex items-center overflow-visible z-10 relative">
          <div ref={trackRef} className="flex flex-nowrap h-full items-center pl-[5vw] md:pl-[10vw]">
            {PRODUCTS.map((prod, idx) => (
              <div 
                key={idx} 
                className="qc-card shrink-0 flex items-center justify-center pr-[10vw]"
                style={{ width: '100vw' }}
              >
                <ProductConsoleCard data={prod} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function ProductConsoleCard({ data }: { data: ProductCard }) {
  const navigate = useNavigate();

  return (
    <div 
      className="w-[90vw] max-w-[1100px] min-h-[500px] rounded-2xl mx-auto flex flex-col md:flex-row items-stretch relative"
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
      <div className="w-full md:w-1/2 min-h-[250px] md:min-h-full border-b md:border-b-0 md:border-r flex rounded-t-2xl md:rounded-t-none md:rounded-l-2xl overflow-hidden relative" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
        <div className="relative w-full h-full flex-1 bg-[#000]">
          <img src={data.image} alt={data.title} className="absolute inset-0 w-full h-full object-cover" />
          <div style={{ background: 'linear-gradient(to top, rgba(5,5,5,0.9) 0%, transparent 60%)' }} className="absolute inset-0" />
          
          {/* Image Label */}
          <div className="absolute bottom-6 left-6 flex items-center justify-between">
            <span className="flex items-center gap-1.5 text-[10px] font-mono text-white/90 uppercase tracking-widest bg-black/60 px-2.5 py-1 rounded backdrop-blur-md border border-white/10">
              <span className="w-1.5 h-1.5 rounded-full animate-pulse bg-[#84CC16]" />
              {data.imageLabel}
            </span>
          </div>
        </div>
      </div>

      {/* Right Split (Content) */}
      <div className="w-full md:w-1/2 p-6 lg:p-10 flex flex-col justify-between bg-neutral-100 rounded-b-2xl md:rounded-b-none md:rounded-r-2xl">
        <div className="mb-6">
          <span className="inline-block px-3 py-1 rounded-md text-[9px] lg:text-[10px] font-mono tracking-wider uppercase mb-4"
            style={{ color: '#050505', backgroundColor: '#84CC16', border: '1px solid #84CC16' }}>
            {data.badge}
          </span>
          
          <h2 className="text-slate-900 text-xl lg:text-3xl font-bold uppercase mb-4 leading-tight line-clamp-2">
            {data.title}
          </h2>
          
          <p className="text-slate-600 text-sm lg:text-base leading-relaxed">
            {data.text}
          </p>
        </div>

        <div className="pt-6 mt-auto border-t border-slate-200">
          <TechCTA theme="dark" onClick={() => data.slug && navigate(data.slug)}>
            <span>KNOW MORE</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </TechCTA>
        </div>
      </div>
    </div>
  );
}
