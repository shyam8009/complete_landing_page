const fs = require('fs');
const path = require('path');

const dir = 'src/pages/QuantumControlSystems/components';

// 4. SoftwareLayers.tsx
fs.writeFileSync(path.join(dir, 'SoftwareLayers.tsx'), `import React from 'react';
import { InteractiveBlueprint, TierData } from '@/components/InteractiveBlueprint';
import rfd1Img from '@/imports/c2_integration.webp';
import rgQdImg from '@/imports/c2_dashboard_ui.png';

const LAYERS = [
  {
    id: "01",
    title: "Board Support Packages",
    type: "ABSTRACTION",
    description: "Low-level abstraction for diverse quantum control electronics hardware, enabling hardware-software integration across platforms and vendors.",
    image: rfd1Img,
    specs: [
      { label: "SCOPE", value: "Hardware abstraction" },
      { label: "COMPATIBILITY", value: "Vendor-agnostic" },
      { label: "OUTPUT", value: "Common hardware interface" }
    ]
  },
  {
    id: "02",
    title: "Software Stacks and Development Tools",
    type: "APPLICATION",
    description: "Device drivers, middleware and developer tools built on standardised APIs.",
    image: rgQdImg,
    specs: [
      { label: "SCOPE", value: "Drivers, middleware, tooling" },
      { label: "COMPATIBILITY", value: "Platform-agnostic" },
      { label: "OUTPUT", value: "Deployable software stack" }
    ]
  }
];

export function SoftwareLayers() {
  const tiers: TierData[] = LAYERS.map((v) => ({
    id: v.id,
    type: v.type,
    title: v.title,
    description: v.description,
    image: v.image,
    statusBadge: 'LAYER',
    specs: v.specs
  }));

  return <InteractiveBlueprint title="SOFTWARE<br/>LAYERS" subtitle="// SYSTEM ARCHITECTURE" tiers={tiers} />;
}`);

// 5. TacticalApplications.tsx
fs.writeFileSync(path.join(dir, 'TacticalApplications.tsx'), `import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import cmdImg from '@/imports/c2_dashboard_ui.png';
import terrainImg from '@/imports/air_defence_gun_integration.webp';
import opImg from '@/imports/rf_radar_hud.png';

gsap.registerPlugin(ScrollTrigger);

const USE_CASES = [
  {
    id: "01",
    title: "MULTI-VENDOR INTEGRATION",
    image: cmdImg,
  },
  {
    id: "02",
    title: "QUANTUM SYSTEM CONTROL",
    image: terrainImg,
  },
  {
    id: "03",
    title: "RF/MW PLATFORM DEPLOYMENT",
    image: opImg,
  }
];

export function TacticalApplications() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(cardsRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section-padding bg-black relative">
      <div className="max-w-[1600px] mx-auto px-4 lg:px-6 relative z-10">
        
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white uppercase tracking-tight">
            TACTICAL APPLICATIONS
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {USE_CASES.map((useCase, index) => (
            <div 
              key={useCase.id} 
              ref={el => cardsRef.current[index] = el}
              className="group relative aspect-[4/5] overflow-hidden rounded-xl border border-white/10"
            >
              <img 
                src={useCase.image} 
                alt={useCase.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 group-hover:opacity-60 transition-opacity duration-500" />
              <div className="absolute inset-0 bg-[#84CC16]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay" />
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="transform group-hover:-translate-y-2 transition-transform duration-500">
                  <span className="text-[#84CC16] font-mono text-sm tracking-widest font-bold mb-2 block">
                    {useCase.id}
                  </span>
                  <h3 className="text-2xl font-bold text-white uppercase leading-tight">
                    {useCase.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}`);

// 6. ClosingCTA.tsx
fs.writeFileSync(path.join(dir, 'ClosingCTA.tsx'), `import React from 'react';
import { TechCTA } from '@/components/TechCTA';

const INTER = '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';

export function ClosingCTA() {
  return (
    <section className="section-padding bg-black border-t border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(132,204,22,0.05),transparent_50%)]" />
      
      <div className="max-w-4xl mx-auto px-4 lg:px-6 relative z-10 text-center">
        <h2 className="quote-text text-3xl sm:text-4xl md:text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-12 leading-tight tracking-tight uppercase" style={{ fontFamily: INTER }}>
          "A DELIVERED DEVICE IS NOT YET A WORKING SYSTEM."
        </h2>
        
        <div className="quote-text flex flex-col items-center gap-6">
          <TechCTA>
            REQUEST FOR PROPOSAL
          </TechCTA>
        </div>
      </div>
    </section>
  );
}`);

// Page Component
fs.writeFileSync('src/pages/QuantumControlSystems/QuantumControlSystemsPage.tsx', `import React, { useEffect } from 'react';
import { HeroSection } from './components/HeroSection';
import { OperationalSequence } from './components/OperationalSequence';
import { CoreCapabilities } from './components/CoreCapabilities';
import { SoftwareLayers } from './components/SoftwareLayers';
import { TacticalApplications } from './components/TacticalApplications';
import { ClosingCTA } from './components/ClosingCTA';

export default function QuantumControlSystemsPage() {
  useEffect(() => {
    document.title = "Quantum Control Systems | Sahana Defence";
  }, []);

  return (
    <div className="w-full bg-[#05080D] min-h-screen text-white overflow-hidden font-sans selection:bg-[#84CC16]/30">
      <HeroSection />
      <OperationalSequence />
      <CoreCapabilities />
      <SoftwareLayers />
      <TacticalApplications />
      <ClosingCTA />
    </div>
  );
}`);

console.log('Created components 2/2 and page for QuantumControlSystems');
