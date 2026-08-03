import React, { useState, useEffect, useRef } from 'react';
import { ChevronRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import bgPattern from '../../../imports/light_blueprint_bg.jpg';

gsap.registerPlugin(ScrollTrigger);

const RANGE_TIERS = [
  {
    id: 'VSR',
    title: 'VERY SHORT RANGE RADAR',
    description: 'Optimized for localized perimeter loops and close-quarters security networks. Ideal for precise tactical layouts requiring immediate, localized threat detection.',
    bullets: ['1.5 km Range Envelope', '100 Concurrent Targets', 'Compact deployment footprint']
  },
  {
    id: 'SR',
    title: 'SHORT RANGE RADAR',
    description: 'Mid-tier baseline security setup for expansive commercial or military footprints. Provides a balanced matrix of range, tracking capacity, and rapid deployment capabilities.',
    bullets: ['11 km Range Envelope', '300 Concurrent Targets', 'Integrated C2 compatibility']
  },
  {
    id: 'MR',
    title: 'MEDIUM RANGE RADAR',
    description: 'Advanced deep-field early warning grid designed specifically for critical national infrastructure and sovereign border defense.',
    bullets: ['30 km Range Envelope', '700 Concurrent Targets', 'Zero-visibility predictive tracking']
  }
];

export function SubsystemsSection() {
  const [activeTab, setActiveTab] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const activeTabRef = useRef(0);

  useEffect(() => {
    let ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        pin: true,
        start: "top 10%",
        end: `+=${RANGE_TIERS.length * 600}`, // 600px of scrolling per tab
        onUpdate: (self) => {
          const numTabs = RANGE_TIERS.length;
          // Calculate the target tab based on scroll progress
          let nextTab = Math.floor(self.progress * numTabs);
          if (nextTab >= numTabs) nextTab = numTabs - 1;
          
          if (nextTab !== activeTabRef.current) {
            activeTabRef.current = nextTab;
            setActiveTab(nextTab);
          }
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="overflow-hidden relative py-24 bg-white border-t border-black/5 min-h-screen flex items-center">
      {/* Schematic Vector Background Overlay */}
      <img 
        src={bgPattern} 
        alt="Technical Blueprint Overlay" 
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-80"
      />
      <div className="absolute inset-0 bg-white/20 z-0" />

      <div className="max-w-[1600px] mx-auto px-4 lg:px-6">
        
        <div className="mb-16">
          <div className="text-[#84CC16] font-mono text-sm uppercase tracking-widest mb-4">
            // CONFIGURABLE SYSTEM TIERS
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-black uppercase tracking-tight">
            MODULAR VARIANTS FOR <br />EVERY TACTICAL LAYOUT.
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          
          {/* Left Navigation Tabs */}
          <div className="flex flex-col w-full lg:w-1/3 gap-4">
            {RANGE_TIERS.map((tier, idx) => (
              <button
                key={tier.id}
                onClick={() => {
                  setActiveTab(idx);
                  activeTabRef.current = idx;
                }}
                className={`flex items-center justify-between p-6 rounded-lg text-left transition-all duration-300 border ${
                  activeTab === idx 
                    ? 'bg-[#84CC16]/10 border-[#84CC16]/30 shadow-[inset_0_0_20px_rgba(132,204,22,0.05)] scale-[1.02]' 
                    : 'bg-transparent border-transparent hover:bg-black/5 opacity-60 hover:opacity-100'
                }`}
              >
                <div className="flex flex-col gap-1">
                  <span className={`font-mono text-sm ${activeTab === idx ? 'text-[#84CC16]' : 'text-black/40'}`}>
                    [{tier.id} TIER]
                  </span>
                  <span className={`font-bold uppercase tracking-wide ${activeTab === idx ? 'text-black' : 'text-black/60'}`}>
                    {tier.title}
                  </span>
                </div>
                <ChevronRight className={`w-5 h-5 transition-transform duration-300 ${activeTab === idx ? 'text-[#84CC16] translate-x-1' : 'text-black/20 opacity-0 group-hover:opacity-100'}`} />
              </button>
            ))}
          </div>

          {/* Right Content Area */}
          <div className="flex-grow bg-[#f8f8f8] border border-black/10 rounded-xl p-8 lg:p-12 relative overflow-hidden min-h-[400px]">
            {/* Ambient Background Glow based on active tab */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#84CC16]/20 blur-[100px] rounded-full pointer-events-none transition-opacity duration-700" key={`glow-${activeTab}`} />

            <div className="relative z-10 animate-fade-in" key={`content-${activeTab}`}>
              <div className="inline-flex items-center gap-3 mb-6">
                <span className="w-2 h-2 bg-[#84CC16] rounded-full" />
                <span className="text-black/50 font-mono text-sm uppercase tracking-widest">MODULE // {RANGE_TIERS[activeTab].id}</span>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold text-black mb-6 uppercase tracking-wide">
                {RANGE_TIERS[activeTab].title}
              </h3>
              
              <p className="text-black/70 text-lg leading-relaxed mb-10">
                {RANGE_TIERS[activeTab].description}
              </p>

              <div className="space-y-4">
                {RANGE_TIERS[activeTab].bullets.map((bullet, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-1.5 h-1.5 bg-[#84CC16] mt-2.5 rounded-sm shrink-0" />
                    <span className="text-black/80">{bullet}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}