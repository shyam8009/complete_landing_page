import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { TechCTA } from '@/components/TechCTA';

import bgGrid from '@/imports/c2_network_schematic.jpg';
import img1 from '@/imports/c2_dashboard_ui.png';
import img2 from '@/imports/surveillance_radar_hero.png';
import img3 from '@/imports/drone_3d_1.gif';

gsap.registerPlugin(ScrollTrigger);

const ecosystemData = [
  {
    tag: "NLP . Voice Command . Conversational AI",
    title: "Chatbots and Voice Solution",
    desc: "Secure, military-grade conversational AI and voice recognition systems designed for tactical environments. Overcome cognitive overload by enabling operators to interact with complex databases and command systems using natural language.",
    features: [
      "Secure, offline Natural Language Processing (NLP) for air-gapped command centers.",
      "Real-time voice-to-text transcription for rapid intelligence logging and communication routing.",
      "Automated tactical briefings and multilingual translation modules for allied coalition operations."
    ],
    img: img1
  },
  {
    tag: "Data Fusion . Predictive Analytics . OSINT",
    title: "Big Data and Business Intelligence",
    desc: "Transform fragmented, high-velocity data into a unified operational picture. Our BI architecture ingests massive datasets from radar, OSINT, and logistics networks to expose hidden tactical patterns and supply chain vulnerabilities.",
    features: [
      "Real-time ingestion and normalization of unstructured intelligence datasets.",
      "Customizable, high-performance BI dashboards deployed at the tactical edge.",
      "Predictive logistics modeling to anticipate supply chain disruptions before they impact troop readiness."
    ],
    img: img2
  },
  {
    tag: "Machine Learning . Neural Networks . Automation",
    title: "Artificial Intelligence",
    desc: "Deploy advanced algorithmic warfare capabilities. We build, train, and deploy custom machine learning models and neural networks that automate target recognition, optimize communication arrays, and accelerate decision-making cycles.",
    features: [
      "Computer vision algorithms for automated target detection in ISR video feeds.",
      "Anomaly detection models to identify hostile electronic warfare (EW) interference.",
      "Edge-deployed AI processing, ensuring autonomous capabilities even when disconnected from central servers."
    ],
    img: img3
  }
];

export function TechEcosystem() {
  const scrollContainer = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!trackRef.current || ecosystemData.length === 0) return;
    const getScrollDist = () => trackRef.current ? trackRef.current.scrollWidth - window.innerWidth : 0;

    ScrollTrigger.create({
      trigger: scrollContainer.current,
      start: "top top",
      end: () => "+=" + getScrollDist(),
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
            src={bgGrid} 
            alt="Intelligence Network Schematic" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(5,5,5,0.2)_0%,rgba(5,5,5,0.95)_100%)]" />
        </div>

        {/* TOP HEADER (Fixed, z-20) */}
        <div className="absolute top-8 left-0 right-0 z-20 flex justify-center pointer-events-none">
          <span className="text-[#84CC16] font-mono font-bold tracking-[0.2em] text-sm md:text-base uppercase">
            AI & DATA ECOSYSTEM
          </span>
        </div>

        {/* BOTTOM FOOTER (Fixed, z-20) */}
        <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center pointer-events-none">
          <span className="text-white/40 font-mono tracking-widest text-xs uppercase animate-pulse">
            SCROLL TO EXPLORE
          </span>
        </div>

        {/* THE SLIDING TRACK (z-10) */}
        <div className="relative z-10 flex h-full items-center overflow-visible">
          <div ref={trackRef} className="flex flex-nowrap h-full items-center px-[5vw] md:px-[10vw] gap-12 md:gap-24">
            
            {ecosystemData.map((item, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 flex items-center justify-center"
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
                  <div className="w-full md:w-1/2 min-h-[250px] md:min-h-full border-b md:border-b-0 md:border-r flex" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
                    <div className="relative w-full h-full flex-1 bg-[#000]">
                      <img src={item.img} alt={item.title} className="absolute inset-0 w-full h-full object-cover" />
                      <div style={{ background: 'linear-gradient(to top, rgba(5,5,5,0.9) 0%, transparent 60%)' }} className="absolute inset-0" />
                    </div>
                  </div>

                  {/* Right Split (Content) */}
                  <div className="w-full md:w-1/2 p-6 lg:p-10 flex flex-col justify-between bg-neutral-100">
                    <div className="mb-6">
                      <span className="inline-block px-3 py-1 rounded-md text-[9px] lg:text-[10px] font-mono tracking-wider uppercase mb-4"
                        style={{ color: '#050505', backgroundColor: '#84CC16', border: '1px solid #84CC16' }}>
                        {item.tag}
                      </span>
                      
                      <h2 className="text-slate-900 text-xl lg:text-3xl font-bold uppercase mb-4 leading-tight line-clamp-2">
                        {item.title}
                      </h2>
                      
                      <p className="text-sm lg:text-base text-slate-600 mb-6">
                        {item.desc}
                      </p>
                      
                      
                      
                    </div>

                    {/* CTA */}
                    <div className="pt-5 mt-auto border-t border-slate-200">
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
      </section>
    </div>
  );
}

