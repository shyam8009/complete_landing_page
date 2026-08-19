import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

import bgSchematic from '@/imports/c2_network_schematic.jpg';
import imgFusionC2 from '@/imports/c2_dashboard_ui.png';
import imgInterception from '@/imports/interception_ui.jpg';
import { TechCTA } from '@/components/TechCTA';

gsap.registerPlugin(ScrollTrigger);

const commandControlData = [
  {
    tag: "1000+ Tracks . 2D/3D Spatial Mapping",
    title: "FUSION Core AI Command & Control (C2)",
    desc: "An advanced AI-driven Command and Control (C2) system designed for enhanced surveillance, seamless sensor integration, and real-time situational awareness with minimal cognitive burden. It unifies complex sensor feedsâ€”including radar tracks, live video, and system telemetryâ€”into an intuitive 2D and 3D interface.",
    features: [
      "Simultaneously tracks over 1000+ objects in real-time, integrating Blue Force tracking for complete spatial dominance.",
      "2D Operational Mapping and 3D Situational Awareness Mapping to grasp terrain elevation, obstacles, and tactical high ground.",
      "User-defined Custom Protection Zones trigger smart audio/visual alarms the moment perimeters are breached.",
      "Automated target tracking and camera handover loops ensure continuous coverage with minimal operator input."
    ],
    img: imgFusionC2
  },
  {
    tag: "Tactical Signal Intercept . Spectrum Exploitation",
    title: "Interception System",
    desc: "A tactical electronic warfare asset engineered for covert monitoring and real-time exploitation of hostile communications. The Interception System isolates, decrypts, and extracts intelligence from encrypted RF channels and digital transmissions across contested operational zones.",
    features: [
      "Wideband frequency monitoring with automatic modulation classification for instant threat detection.",
      "Real-time decryption and signal extraction from tactical radio and RF transmission channels.",
      "Integrated Direction-Finding (DF) routines to geolocate hostile emitters on tactical C2 maps.",
      "Direct data pipeline integration into FUSION Core AI C2 for rapid countermeasure targeting."
    ],
    img: imgInterception
  }
];

export default function CommandControlEcosystem() {
  const scrollContainer = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!trackRef.current || commandControlData.length === 0) return;
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
      scrub: 1,
      invalidateOnRefresh: true,
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
            alt="Command Network Grid" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(5,5,5,0.2)_0%,rgba(5,5,5,0.95)_100%)]" />
        </div>

        {/* THE SLIDING TRACK (z-10) */}
        <div className="relative z-10 flex h-full items-center overflow-visible">
          <div ref={trackRef} className="flex flex-nowrap h-full items-center pl-[5vw] md:pl-[10vw]">
            
            {commandControlData.map((item, index) => (
              <div 
                key={index} 
                className="w-screen flex-shrink-0 flex items-center justify-center pr-[10vw]"
                style={{ width: '100vw' }}
              >
                
                {/* THE GLASSMORPHISM CARD */}
                <div 
                  className="w-[90vw] max-w-[1100px] rounded-2xl mx-auto flex flex-col md:flex-row items-stretch"
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
                  <div className="w-full md:w-1/2 min-h-[250px] md:min-h-full border-b md:border-b-0 md:border-r flex" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
                    <div className="relative w-full h-full flex-1 bg-[#000]">
                      <img src={item.img} alt={item.title} className="absolute inset-0 w-full h-full object-cover" />
                      <div style={{ background: 'linear-gradient(to top, rgba(5,5,5,0.9) 0%, transparent 60%)' }} className="absolute inset-0" />
                    </div>
                  </div>

                  {/* Right Split (Content) - Uses the global bg-neutral-100 style */}
                  <div className="w-full md:w-1/2 p-6 lg:p-10 flex flex-col justify-between bg-neutral-100">
                    <div className="mb-6">
                      <span className="inline-block px-3 py-1 rounded-md text-[9px] lg:text-[10px] font-mono tracking-wider uppercase mb-4"
                        style={{ color: '#050505', backgroundColor: '#84CC16', border: '1px solid #84CC16' }}>
                        {item.tag}
                      </span>
                      
                      <h2 className="text-slate-900 text-xl lg:text-3xl font-bold uppercase mb-4 leading-tight line-clamp-2">
                        {item.title}
                      </h2>
                      
                      <p className="text-sm lg:text-base text-slate-600 mb-3 ">
                        {item.desc}
                      </p>
                      
                      
                    </div>

                    {/* CTA */}
                    <div className="pt-5 mt-auto border-t border-slate-200">
                      <TechCTA>
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
      </section>
    </div>
  );
}

