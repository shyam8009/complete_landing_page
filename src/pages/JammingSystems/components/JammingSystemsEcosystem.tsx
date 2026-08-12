import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

// Using placeholder images for now
import imgSpear from '@/imports/infinity_spear.jpg';
import imgRhino from '@/imports/infinity_rhino.jpg';
import imgRhinoBlack from '@/imports/infinity_rhino.jpg';
import imgRhinoZ23 from '@/imports/rhino-z23/magnific_img1-this-is-my-product-r_ONKji9qynm.png';
import imgButterfly from '@/imports/butterfly-adg/magnific_professional-studio-produ_xgQveAGjfW.png';
import bgGrid from '@/imports/spear_cad_blueprint.png';

gsap.registerPlugin(ScrollTrigger);

const jammingData = [
  {
    tag: "60W Continuous Output . 1.5–2.0 km Range",
    title: "INFINITY SPEAR",
    desc: "A state-of-the-art handheld Counter-Unmanned Aerial System (C-UAS) designed for military and security operations. It empowers dismounted tactical squads with a highly mobile shield capable of disabling hostile drones instantly without secondary heavy battery packs.",
    features: [
      "Delivers 60 Watts of high-power RF and GNSS directional signal saturation.",
      "Effective interception radius of 1500 to 2000 meters.",
      "Compact 585mm rifle grip design minimizing operator fatigue.",
      "Instant-on boot sequence with user-defined channel selection."
    ],
    img: imgSpear
  },
  {
    tag: "7 km Directional . Anti-RTH Interdiction",
    title: "Manpack Jammer (Infinity Rhino)",
    desc: "A portable, cutting-edge solution engineered to deliver simultaneous long-range multi-band disruption and localized omnidirectional protection within a single-soldier portable frame.",
    features: [
      "Dual-mode suppression offering a 2 km omnidirectional bubble and 5 to 7 km directional interception.",
      "Integrated GPS jammer designed to completely block drone Return-to-Home (RTH) protocols.",
      "Advanced channel-wise controls to focus power on specific problematic frequencies.",
      "High-capacity rechargeable battery pack designed for critical field durations."
    ],
    img: imgRhino
  },
  {
    tag: "40+ Channels . 10 kg Portable Chassis",
    title: "Infinity Rhino Black",
    desc: "A specialized variant of the portable anti-drone manpack jammer, offering superior defense against modern aerial threats with an expansive multi-frequency coverage spanning 40+ individual channels.",
    features: [
      "Achieves a massive 2 km omni-directional neutralization radius.",
      "Precise jamming capabilities actively avoid collateral damage to friendly communications.",
      "Ultra-lightweight 10 kg form factor allowing transport by a single dismounted soldier.",
      "Fast setup deployment for rapid integration into tactical operations."
    ],
    img: imgRhinoBlack
  },
  {
    tag: "160W Power . Zu-23 Anti-Aircraft Integration",
    title: "Rhino Gen Z 23",
    desc: "A highly versatile portable anti-drone jammer engineered to augment traditional kinetic anti-aircraft platforms. It provides an operational disruption range of up to 5 km utilizing multi-frequency channels.",
    features: [
      "Emits 160 W of power for robust, 5-channel multi-frequency threat neutralization.",
      "Direct integration capabilities for the Zu-23 anti-aircraft gun platform, backpacks, or poles.",
      "Selectable omni-directional bubble defense or targeted directional signal broadcast.",
      "Wired remote control system enabling safe, standoff operation."
    ],
    img: imgRhinoZ23
  },
  {
    tag: "L70 Platform Integration . JSS 55555 Rated",
    title: "Butterfly ADG L70",
    desc: "Powered by the Sahana A.I. system, this solution integrates advanced jamming technology with the robust capabilities of the L70 Air Defence Gun to safeguard airspace in dynamic battlefield environments.",
    features: [
      "Multi-frequency operation from 400 MHz to 5.8 GHz, including GNSS L1, L2, and L5 bands.",
      "Operational range of 2 km (Omni-Directional) and 5 km (Directional).",
      "Rapid tactical adaptability with antenna changing times under 1 minute.",
      "JSS 55555 environmental protection rating, operating in temperatures from -20°C to +50°C."
    ],
    img: imgButterfly
  }
];

export default function JammingSystemsEcosystem() {
  const scrollContainer = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!trackRef.current || jammingData.length === 0) return;
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
      <section ref={scrollContainer} className="relative w-full h-screen overflow-hidden bg-[#050505]">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img 
            src={bgGrid} 
            alt="Intelligence Network Schematic" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(5,5,5,0.2)_0%,rgba(5,5,5,0.95)_100%)]" />
        </div>

        <div className="absolute top-8 left-0 right-0 z-20 flex justify-center pointer-events-none">
          <span className="text-[#84CC16] font-mono font-bold tracking-[0.2em] text-sm md:text-base uppercase">
            JAMMING ECOSYSTEM
          </span>
        </div>

        <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center pointer-events-none">
          <span className="text-white/40 font-mono tracking-widest text-xs uppercase animate-pulse">
            SCROLL TO EXPLORE
          </span>
        </div>

        <div className="relative z-10 flex h-full items-center overflow-visible">
          <div ref={trackRef} className="flex flex-nowrap h-full items-center px-[5vw] md:px-[10vw] gap-12 md:gap-24">
            
            {jammingData.map((item, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 flex items-center justify-center"
              >
                
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
                  
                  <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 z-20" style={{ borderColor: 'rgba(132,204,22,0.6)' }} />
                  <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 z-20" style={{ borderColor: 'rgba(132,204,22,0.6)' }} />
                  <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 z-20" style={{ borderColor: 'rgba(132,204,22,0.6)' }} />
                  <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 z-20" style={{ borderColor: 'rgba(132,204,22,0.6)' }} />

                  <div className="w-full md:w-1/2 min-h-[250px] md:min-h-full border-b md:border-b-0 md:border-r flex" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
                    <div className="relative w-full h-full flex-1 bg-[#000]">
                      <img src={item.img} alt={item.title} className="absolute inset-0 w-full h-full object-cover" />
                      <div style={{ background: 'linear-gradient(to top, rgba(5,5,5,0.9) 0%, transparent 60%)' }} className="absolute inset-0" />
                    </div>
                  </div>

                  <div className="w-full md:w-1/2 p-6 lg:p-10 flex flex-col justify-between bg-neutral-100 rounded-b-2xl md:rounded-b-none md:rounded-r-2xl">
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

                    <div className="pt-5 mt-auto border-t border-slate-200">
                      <button className="w-full md:w-auto py-3 px-8 rounded-xl font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 bg-slate-900 hover:bg-[#84CC16] hover:text-slate-900 text-white">
                        <span>Know More</span>
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
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
