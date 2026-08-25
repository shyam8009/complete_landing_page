import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

import bgSchematic from '@/imports/comms_network_schematic.jpg';
import imgRadioMonitoring from '@/imports/radio_monitoring_portfolio.jpg';
import imgDirectionFinders from '@/imports/direction_finders_system.jpg';
import { TechCTA } from '@/components/TechCTA';

gsap.registerPlugin(ScrollTrigger);

const commsData = [
  {
    tag: "Spectrum Dominance . Wideband Interception",
    title: "Radio Monitoring and Location Portfolio",
    description: "A comprehensive suite of advanced receivers and monitoring systems engineered to detect, intercept, and analyze complex radio frequency (RF) emissions across congested spectrums. It provides total electromagnetic spectrum awareness for tactical and strategic defense operations.",
    specs: [
      "Real-time wideband monitoring spanning VLF to SHF frequency bands.",
      "Automated signal classification, demodulation, and decoding of hostile transmissions.",
      "Multi-channel interception architecture enabling simultaneous tracking of diverse threat vectors.",
      "Seamless data pipeline integration into overarching strategic Command and Control (C2) networks."
    ],
    img: imgRadioMonitoring
  },
  {
    tag: "Precision Geolocation . Tactical DF",
    title: "Direction Finders",
    description: "High-precision tactical direction finding (DF) systems designed to instantly geolocate hostile emitters. Utilizing advanced correlative interferometry and time-difference-of-arrival (TDOA) techniques, it delivers pinpoint accuracy in multi-domain operational theaters.",
    specs: [
      "Rapid geolocation of frequency-hopping, burst, and low-probability-of-intercept (LPI) transmissions.",
      "Highly adaptable deployment options across fixed infrastructure, mobile land units, and airborne platforms.",
      "High-resolution spatial mapping of RF targets with real-time tactical map overlays.",
      "Integrated 3D terrain compensation algorithms to eliminate multi-path errors and improve fix accuracy."
    ],
    img: imgDirectionFinders
  }
];

export default function CommunicationMonitoringEcosystem() {
  const scrollContainer = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const cards = gsap.utils.toArray('.comms-card');
    if (!trackRef.current || cards.length === 0) return;
    
    const track = trackRef.current;
    const getScrollDist = () => track.scrollWidth - window.innerWidth;

    gsap.to(track, {
      x: () => -getScrollDist(),
      ease: "none",
      scrollTrigger: {
        trigger: scrollContainer.current,
        pin: true,
        scrub: 1,
        start: "top top",
        end: () => `+=${getScrollDist()}`,
        invalidateOnRefresh: true,
      }
    });
  }, { scope: scrollContainer });

  return (
    <div className="font-['Inter',sans-serif]">
      {/* HORIZONTAL ECOSYSTEM TRACK */}
      <section ref={scrollContainer} className="relative w-full h-screen overflow-hidden bg-[#050505]">
        
        {/* BACKGROUND IMAGE (Fixed, z-0) */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img 
            src={bgSchematic} 
            alt="RF Network Grid" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(5,5,5,0.2)_0%,rgba(5,5,5,0.95)_100%)]" />
        </div>

        {/* THE SLIDING TRACK (z-10) */}
        <div className="h-full w-full flex items-center overflow-visible z-10 relative">
          <div ref={trackRef} className="flex flex-nowrap h-full items-center pl-[5vw] md:pl-[10vw]">
            {commsData.map((data, idx) => (
              <div 
                key={idx} 
                className="comms-card shrink-0 flex items-center justify-center pr-[10vw]"
                style={{ width: '100vw' }}
              >
                {/* THE GLASSMORPHISM CARD */}
                <div 
                  className="w-[90vw] max-w-[1100px] min-h-[500px] rounded-2xl mx-auto flex flex-col md:flex-row items-stretch"
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
                  <div className="w-full md:w-1/2 min-h-[250px] md:min-h-full border-b md:border-b-0 md:border-r flex relative" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
                    <div className="relative w-full h-full flex-1 bg-[#000]">
                      <img src={data.img} alt={data.title} className="absolute inset-0 w-full h-full object-cover" />
                      <div style={{ background: 'linear-gradient(to top, rgba(5,5,5,0.9) 0%, transparent 60%)' }} className="absolute inset-0" />
                      
                      {/* Status indicator */}
                      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                        <span className="flex items-center gap-1.5 text-[10px] font-mono text-white/90">
                          <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: '#84CC16' }} />
                          ACTIVE MONITORING
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Right Split (Content) */}
                  <div className="w-full md:w-1/2 p-6 lg:p-10 flex flex-col justify-between bg-neutral-100 rounded-b-2xl md:rounded-bl-none md:rounded-r-2xl">
                    <div className="mb-6">
                      <span className="inline-block px-3 py-1 rounded-md text-[9px] lg:text-[10px] font-mono tracking-wider uppercase mb-4"
                        style={{ color: '#050505', backgroundColor: '#84CC16', border: '1px solid #84CC16' }}>
                        {data.tag}
                      </span>
                      
                      <h2 className="text-slate-900 text-xl lg:text-3xl font-bold uppercase mb-4 leading-tight line-clamp-2">
                        {data.title}
                      </h2>
                      
                      <p className="text-slate-600 text-sm lg:text-base leading-relaxed">
                        {data.description}
                      </p>
                    </div>

                    <div className="pt-6 mt-auto border-t border-slate-200">
                      <TechCTA theme="dark">
                        <span>Know More</span>
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                      </TechCTA>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FOOTER (Fixed, z-20) */}
        <div className="absolute bottom-8 left-0 w-full z-20 text-center pointer-events-none">
          <p className="text-white/40 tracking-widest text-xs uppercase animate-pulse">
            Scroll to Explore
          </p>
        </div>
      </section>
    </div>
  );
}


