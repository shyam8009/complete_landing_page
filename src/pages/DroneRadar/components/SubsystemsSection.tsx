import React, { useState, useEffect, useRef } from 'react';
import { ChevronRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SUBSYSTEMS = [
  {
    id: '01',
    title: 'AESA ANTENNA ARRAY',
    description: 'Active Electronically Scanned Array (AESA) technology allows for instantaneous beam steering, eliminating the mechanical latency of traditional rotating radars. Provides unblinking coverage of the entire hemisphere.',
    bullets: ['Solid-state transmitter architecture', 'Simultaneous multi-beam generation', 'Graceful degradation support']
  },
  {
    id: '02',
    title: 'AI THREAT CLASSIFIER',
    description: 'Embedded edge-computing modules process radar returns in real-time, using deep neural networks to distinguish between biological targets (birds), fixed-wing aircraft, and rotary-wing drones.',
    bullets: ['Micro-Doppler signature analysis', 'False alarm reduction < 0.1%', 'Continuous model updates via secure OTA']
  },
  {
    id: '03',
    title: 'COMMAND & CONTROL INTEGRATION',
    description: 'Natively outputs standardized tracks (e.g., ASTERIX) for seamless ingestion into existing C2 nodes. Engineered to act as the primary sensor in a multi-layered defense architecture.',
    bullets: ['Zero-latency network distribution', 'Interoperable with legacy C2 systems', 'API-first architecture']
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
        end: `+=${SUBSYSTEMS.length * 600}`, // 600px of scrolling per tab
        onUpdate: (self) => {
          const numTabs = SUBSYSTEMS.length;
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
    <section ref={sectionRef} className="py-24 bg-white border-t border-black/5 min-h-screen flex items-center">
      <div className="max-w-[1600px] mx-auto px-4 lg:px-6">
        
        <div className="mb-16">
          <div className="text-[#84CC16] font-mono text-sm uppercase tracking-widest mb-4">
            // TECHNICAL ARCHITECTURE
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-black uppercase tracking-tight">
            ENGINEERED FOR THE <br />MODERN BATTLESPACE.
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          
          {/* Left Navigation Tabs */}
          <div className="flex flex-col w-full lg:w-1/3 gap-4">
            {SUBSYSTEMS.map((sys, idx) => (
              <button
                key={sys.id}
                onClick={() => {
                  // Optional: if clicked, we could scroll to the exact spot. 
                  // For now, clicking just overrides the active state.
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
                    [{sys.id}]
                  </span>
                  <span className={`font-bold uppercase tracking-wide ${activeTab === idx ? 'text-black' : 'text-black/60'}`}>
                    {sys.title}
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
                <span className="text-black/50 font-mono text-sm uppercase tracking-widest">COMPONENT // {SUBSYSTEMS[activeTab].id}</span>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold text-black mb-6 uppercase tracking-wide">
                {SUBSYSTEMS[activeTab].title}
              </h3>
              
              <p className="text-black/70 text-lg leading-relaxed mb-10">
                {SUBSYSTEMS[activeTab].description}
              </p>

              <div className="space-y-4">
                {SUBSYSTEMS[activeTab].bullets.map((bullet, i) => (
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