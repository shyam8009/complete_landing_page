import React, { useState, useEffect, useRef } from 'react';
import { ChevronRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useScrambleText } from '../../../hooks/useScrambleText';

gsap.registerPlugin(ScrollTrigger);

const SUBSYSTEMS = [
  {
    id: '01',
    title: 'BUDDY-10 (High-Endurance Scout)',
    description: 'The optimal balance of speed, agility, and flight time. Built for long-range reconnaissance and perimeter scouting.',
    bullets: ['Frame Size: 10-inch', 'Max Speed: 130 kmph', 'Payload: Up to 3 kg', 'Range: Up to 40 km']
  },
  {
    id: '02',
    title: 'BUDDY-13 (Tactical Medium-Lift)',
    description: 'The most deployed tactical tier. Engineered to carry specialized payloads while maintaining impressive speed and agility.',
    bullets: ['Frame Size: 13-inch', 'Max Speed: 100 kmph', 'Payload: Up to 5 kg', 'Range: 20km (5kg) / 30km (3kg)']
  },
  {
    id: '03',
    title: 'BUDDY-15 (Heavy-Lift / High-Speed)',
    description: 'Maximum power delivery. Designed for rapid deployment of heavy payloads across hostile environments.',
    bullets: ['Frame Size: 15-inch', 'Max Speed: 180 kmph', 'Payload: Up to 12 kg', 'Range: 20 km']
  }
];

export function SubsystemsSection() {
  const [activeTab, setActiveTab] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const activeTabRef = useRef(0);
  const bgOverlayRef = useRef<HTMLDivElement>(null);
  
  const { displayText: scrambledTitle } = useScrambleText(SUBSYSTEMS[activeTab].title, true);
  const { displayText: scrambledId } = useScrambleText(SUBSYSTEMS[activeTab].id, true);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Smooth Theme Transition Overlay
      gsap.to(bgOverlayRef.current, {
        opacity: 0,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "top 20%",
          scrub: true,
        }
      });

      ScrollTrigger.create({
        trigger: sectionRef.current,
        pin: true,
        start: "top 10%",
        end: `+=${SUBSYSTEMS.length * 600}`, 
        onUpdate: (self) => {
          const numTabs = SUBSYSTEMS.length;
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
    <section ref={sectionRef} className="py-24 bg-white border-t border-black/5 min-h-screen flex items-center relative">
      {/* Theme Transition Overlay */}
      <div ref={bgOverlayRef} className="absolute inset-0 bg-black z-[5] pointer-events-none" />

      <div className="max-w-[1600px] mx-auto px-4 lg:px-6 relative z-10 w-full">
        
        <div className="mb-16">
          <div className="text-[#3C5929] font-mono text-sm uppercase tracking-widest mb-4">
            // PLATFORM TIERS
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-black uppercase tracking-tight">
            CONFIGURABLE <br />MISSION PROFILES.
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          
          {/* Left Navigation Tabs */}
          <div className="flex flex-col w-full lg:w-1/3 gap-4">
            {SUBSYSTEMS.map((sys, idx) => (
              <button
                key={sys.id}
                onClick={() => {
                  setActiveTab(idx);
                  activeTabRef.current = idx;
                }}
                className={`flex items-center justify-between p-6 rounded-lg text-left transition-all duration-300 border ${
                  activeTab === idx 
                    ? 'bg-[#3C5929]/10 border-[#3C5929]/30 shadow-[inset_0_0_20px_rgba(60,89,41,0.05)] scale-[1.02]' 
                    : 'bg-transparent border-transparent hover:bg-black/5 opacity-60 hover:opacity-100'
                }`}
              >
                <div className="flex flex-col gap-1">
                  <span className={`font-mono text-sm ${activeTab === idx ? 'text-[#3C5929]' : 'text-black/40'}`}>
                    [{sys.id}]
                  </span>
                  <span className={`font-bold uppercase tracking-wide ${activeTab === idx ? 'text-black' : 'text-black/60'}`}>
                    {sys.title.split(' (')[0]}
                  </span>
                </div>
                <ChevronRight className={`w-5 h-5 transition-transform duration-300 ${activeTab === idx ? 'text-[#3C5929] translate-x-1' : 'text-black/20 opacity-0 group-hover:opacity-100'}`} />
              </button>
            ))}
          </div>

          {/* Right Content Area */}
          <div className="flex-grow bg-[#f8f8f8] border border-black/10 rounded-xl p-8 lg:p-12 relative overflow-hidden min-h-[400px]">
            {/* Ambient Background Glow based on active tab */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#3C5929]/20 blur-[100px] rounded-full pointer-events-none transition-opacity duration-700" key={`glow-${activeTab}`} />

            {/* CSS Simulated Exploded View */}
            <div className="absolute right-0 top-0 bottom-0 w-1/2 hidden lg:flex items-center justify-center pointer-events-none z-0">
              <div 
                className="relative w-72 h-72 transition-transform duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)]"
                style={{ 
                  transformStyle: 'preserve-3d', 
                  transform: `rotateX(60deg) rotateZ(45deg) ${activeTab === 0 ? 'scale(1.1)' : activeTab === 1 ? 'scale(0.9)' : 'scale(1)'}` 
                }}
              >
                {/* Base Layer */}
                <div 
                  className="absolute inset-0 border-2 rounded-full transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)]"
                  style={{
                    borderColor: activeTab === 2 ? 'rgba(60,89,41,0.5)' : 'rgba(0,0,0,0.1)',
                    transform: activeTab === 0 ? 'translateZ(-60px)' : activeTab === 2 ? 'translateZ(-20px) scale(1.2)' : 'translateZ(0px)',
                    backgroundColor: activeTab === 2 ? 'rgba(60,89,41,0.05)' : 'transparent'
                  }}
                />
                
                {/* Mid Layer (Antenna Array / Logic Core) */}
                <div 
                  className="absolute inset-4 border-2 rounded-full transition-all duration-1000 delay-75 ease-[cubic-bezier(0.23,1,0.32,1)]"
                  style={{
                    borderColor: activeTab === 1 ? 'rgba(60,89,41,0.8)' : 'rgba(0,0,0,0.2)',
                    transform: activeTab === 0 ? 'translateZ(20px)' : activeTab === 1 ? 'translateZ(10px) scale(0.8)' : 'translateZ(10px)',
                    boxShadow: activeTab === 0 ? '0 0 40px rgba(60,89,41,0.2)' : activeTab === 1 ? 'inset 0 0 60px rgba(60,89,41,0.4), 0 0 60px rgba(60,89,41,0.4)' : 'none'
                  }}
                >
                  {/* Grid Lines for Array */}
                  <div className={`absolute inset-0 rounded-full transition-opacity duration-500 ${activeTab === 0 ? 'opacity-100' : 'opacity-0'}`} style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)', backgroundSize: '10px 10px' }} />
                </div>

                {/* Top Layer (Radome) */}
                <div 
                  className="absolute inset-8 border border-black/30 rounded-full transition-all duration-1000 delay-150 ease-[cubic-bezier(0.23,1,0.32,1)] bg-white/80 backdrop-blur-md"
                  style={{
                    transform: activeTab === 0 ? 'translateZ(120px)' : 'translateZ(20px)',
                    opacity: activeTab === 0 ? 0.3 : 1
                  }}
                />
              </div>
            </div>

            <div className="relative z-10 animate-fade-in w-full lg:w-1/2" key={`content-${activeTab}`}>
              <div className="inline-flex items-center gap-3 mb-6">
                <span className="w-2 h-2 bg-[#3C5929] rounded-full" />
                <span className="text-black/50 font-mono text-sm uppercase tracking-widest">TIER // {scrambledId}</span>
              </div>
              
              <h3 className="text-2xl font-bold text-black mb-6 uppercase tracking-wide min-h-[40px]">
                {scrambledTitle}
              </h3>
              
              <p className="text-black/70 text-lg leading-relaxed mb-10">
                {SUBSYSTEMS[activeTab].description}
              </p>

              <div className="space-y-4">
                {SUBSYSTEMS[activeTab].bullets.map((bullet, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-1.5 h-1.5 bg-[#3C5929] mt-2.5 rounded-sm shrink-0" />
                    <span className="text-black/80 font-mono">{bullet}</span>
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
