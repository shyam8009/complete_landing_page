import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

import bgGrid from '@/imports/digital_node_map.jpg';
import imgOsint from '@/imports/osint_dashboard.jpg';
import imgSigint from '@/imports/sigint_arrays.jpg';
import imgSecurity from '@/imports/security_assessment_twin.jpg';
import { TechCTA } from '@/components/TechCTA';

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
                      
                      <p className="text-sm lg:text-base text-slate-600 mb-3 ">
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


