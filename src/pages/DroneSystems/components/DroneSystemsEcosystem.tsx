import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

import bgGrid from '@/imports/spear_cad_blueprint.png';
import imgBuddy from '@/imports/fpv-buddy/magnific_prompt-a-photorealistic-e_TeRGqk0VNR.png';
import imgBullseye from '@/imports/sahana_fpv_interceptor.jpg';
import imgProxy from '@/imports/command_control_1.jpeg';
import { TechCTA } from '@/components/TechCTA';

gsap.registerPlugin(ScrollTrigger);

const droneSystemsData = [
  {
    tag: "Scalable Frame Architectures . Heavy Lift",
    title: "Sahana FPV Drone Buddy",
    desc: "A tactical FPV drone family engineered for real-time aerial surveillance, reconnaissance, and field operations across contested electronic warfare environments. Built across three distinct frame sizes (10\", 13\", and 15\"), it provides resilient oversight in heavily jammed theaters.",
    features: [
      "Scalable platform options supporting payloads up to 12 kg (Buddy-15) and operational flight ranges up to 40 km (Buddy-10).",
      "High-speed maneuvering capability with the Buddy-15 variant reaching maximum speeds of 180 kmph.",
      "Hardened electronic warfare protection utilizing an interference-resistant 'Proxy' channel across 1.2â€“3.5 GHz bands.",
      "Optional thermal imaging integration and fiber-optic spool configurations."
    ],
    img: imgBuddy
  },
  {
    tag: "400 kmph Kinetic Interceptor . Counter-UAS",
    title: "Sahana FPV Bullseye & Interceptor",
    desc: "A high-speed FPV drone and kinetic interceptor engineered for rapid-response counter-UAS operations and tactical aerial neutralization. Built with an aerodynamic tubular carbon-fiber chassis, it neutralizes incoming airborne threats while providing real-time situational awareness.",
    features: [
      "Outstanding 400 kmph maximum speed and 200â€“250 kmph cruising speed for rapid threat interception.",
      "10 km operational flight range powered by an 8s 22,000 mAh LiPo battery architecture.",
      "3 kg payload capacity supporting high-definition FPV video, optional thermal imaging, and fiber-optic spool options.",
      "Hardened with the interference-resistant 'Proxy' communication link to counter active jamming."
    ],
    img: imgBullseye
  },
  {
    tag: "Anti-Jamming . ISM-to-non-ISM Conversion",
    title: "Sahana PROXY â€” Control Channel",
    desc: "A long-range, interference-resistant control channel and band conversion kit designed to maintain telemetry and video links in heavily jammed or contested electronic warfare environments.",
    features: [
      "Bypasses standard electronic jamming by converting standard ISM-band frequencies to secure non-ISM bands (1.2â€“3.5 GHz).",
      "Ground-control station with a 4â€“6 m mast and dual directional antenna arrays delivering up to 10 W output power.",
      "Ultra-lightweight 300 g aerial video signal repeater minimizing payload drag on deployed FPVs.",
      "Flexible operational deployment supporting both wireless and wired line operation up to 120 meters."
    ],
    img: imgProxy
  }
];

export default function DroneSystemsEcosystem() {
  const scrollContainer = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!trackRef.current || droneSystemsData.length === 0) return;
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

        {/* TOP HEADER (Fixed, z-20) */}
        <div className="absolute top-8 left-0 right-0 z-20 flex justify-center pointer-events-none">
          <span className="text-[#84CC16] font-mono font-bold tracking-[0.2em] text-sm md:text-base uppercase">
            TACTICAL DRONE & EW ECOSYSTEM
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
            
            {droneSystemsData.map((item, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 flex items-center justify-center"
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

