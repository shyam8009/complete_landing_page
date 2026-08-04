import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

import bgGrid from '@/imports/digital_node_map.jpg';
import imgOsint from '@/imports/osint_dashboard.jpg';
import imgSigint from '@/imports/sigint_arrays.jpg';
import imgSecurity from '@/imports/security_assessment_twin.jpg';

gsap.registerPlugin(ScrollTrigger);

const surveillanceData = [
  {
    tag: "AI Analytics . Darknet Extraction",
    title: "Open-Source Intelligence (OSINT)",
    desc: "An advanced, AI-powered intelligence platform that automates multi-source data extraction across 500+ channels. It empowers commanders with a zero-footprint digital intelligence collector that filters out internet noise to extract, analyze, and map complex threats in absolute operational secrecy.",
    features: [
      "Simultaneously draws live data feeds from standard web channels, public blockchains, and deep Dark Web marketplaces.",
      "Powered by a rich backend combining over 1000 advanced algorithmic search methods.",
      "Integrates machine-learning-driven facial recognition to match individuals within visual contents effortlessly.",
      "Built on secure anonymity architecture that completely shields the user's IP and digital signatures."
    ],
    img: imgOsint
  },
  {
    tag: "Electronic Intercept . Spectrum Dominance",
    title: "Signal Intelligence (SIGINT)",
    desc: "Invisible exploitation of the electromagnetic spectrum. Our Signal Intelligence architecture provides the capability to intercept, analyze, and decrypt hostile electronic communications and radar emissions in real-time, delivering actionable tactical foresight.",
    features: [
      "Continuous monitoring and interception across wideband communication networks and encrypted channels.",
      "Precision direction-finding (DF) to geolocate hostile emitters and command nodes.",
      "Advanced modulation recognition and signal classification powered by machine learning algorithms.",
      "Rapid deployment form factors ranging from fixed infrastructure to mobile tactical units."
    ],
    img: imgSigint
  },
  {
    tag: "Threat Mapping . Vulnerability Audits",
    title: "Comprehensive Security Assessment",
    desc: "A holistic, multi-vector evaluation of physical and digital security postures. We simulate advanced persistent threats (APTs) and kinetic breaches to identify critical vulnerabilities within infrastructure, networks, and operational protocols before adversaries can exploit them.",
    features: [
      "Full-spectrum red-teaming encompassing physical perimeter breaches and cyber intrusion testing.",
      "Detailed risk matrix generation mapping internal and external threat vectors.",
      "Compliance and resilience benchmarking against global defense and intelligence standards.",
      "Actionable mitigation roadmaps to harden infrastructure and eliminate blind spots."
    ],
    img: imgSecurity
  }
];

export default function IntelligenceSurveillanceEcosystem() {
  const scrollContainer = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!trackRef.current || surveillanceData.length === 0) return;
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
      {/* Intro Section */}
      <section className="relative w-full py-32 md:py-48 flex flex-col items-start justify-center overflow-hidden" style={{ backgroundColor: '#050505' }}>
        <div className="relative z-10 px-6 md:px-12 max-w-3xl text-left">
          <span className="inline-block px-3 py-1 rounded-full text-[10px] font-mono tracking-wider uppercase mb-6" style={{ color: '#84CC16', backgroundColor: 'rgba(132,204,22,0.1)', border: '1px solid rgba(132,204,22,0.2)' }}>
            Threat Intelligence
          </span>
          <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tight text-white leading-tight">
            Threat Intelligence <br className="hidden md:block" /> Ecosystem
          </h2>
          <p className="mt-6 text-sm md:text-base leading-relaxed text-neutral-300 max-w-xl">
            A unified architecture encompassing OSINT, SIGINT, and rigorous vulnerability assessments. Uncover hidden adversaries and secure infrastructure before threats materialize.
          </p>
        </div>
      </section>

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

        {/* THE SLIDING TRACK (z-10) */}
        <div className="relative z-10 flex h-full items-center overflow-visible">
          <div ref={trackRef} className="flex flex-nowrap h-full items-center pl-[5vw] md:pl-[10vw]">
            
            {surveillanceData.map((item, index) => (
              <div 
                key={index} 
                className="w-screen flex-shrink-0 flex items-center justify-center pr-[10vw]"
                style={{ width: '100vw' }}
              >
                
                {/* THE GLASSMORPHISM CARD */}
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
