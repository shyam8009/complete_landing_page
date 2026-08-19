import React, { useRef } from 'react';
import { Link } from 'react-router';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

// Using placeholders for Radar systems
import imgDroneDetection from '@/imports/command_control_1.jpeg';
import imgSurveillance from '@/imports/command_control_2.jpeg';
import rfDetectorImg from '@/imports/rf-detector-d360/magnific_professional-outdoor-prod_62g8z7SiJO.png';

gsap.registerPlugin(ScrollTrigger);

const radarSystemsData = [
  {
    tag: '15 km Tracking Envelope â€¢ 360Â° Azimuth â€¢ X-Band FMCW',
    title: '3D Drone Detection RADAR',
    desc: 'An all-weather, day-and-night 3D FMCW radar system optimized for low power consumption to continuously detect, track, and classify low-altitude UAVs and ground threats.',
    img: imgDroneDetection,
    statusBadge: 'ACTIVE DEPLOYMENT',
    slug: '/drone-radar'
  },
  {
    tag: 'Passive RF Scanning â€¢ 10km Range â€¢ Multi-Band',
    title: 'RF Detector',
    desc: 'Advanced passive RF sensing module designed for silent detection and localization of enemy communications and autonomous drone signals without emitting traceable signatures.',
    img: rfDetectorImg,
    statusBadge: 'ACTIVE DEPLOYMENT',
    slug: '/rf-detector'
  },
  {
    tag: 'Micro-Doppler â€¢ High Resolution â€¢ Ground Tracking',
    title: 'Ground Surveillance Radar',
    desc: 'High-resolution ground and perimeter surveillance radar designed for tactical border security, critical infrastructure protection, and real-time intruder tracking.',
    img: imgSurveillance,
    statusBadge: 'TACTICAL READY',
    slug: '/surveillance-radar'
  },
  {
    tag: '3D Positioning â€¢ Multi-Frequency â€¢ Autonomous Targeting',
    title: '3D Drone RF Detector',
    desc: 'A hybrid 3D sensing platform combining passive RF telemetry with spatial processing to precisely locate and identify swarming UAVs and hostile controllers.',
    img: rfDetectorImg,
    statusBadge: 'PROTOTYPE',
    slug: '/3d-drone-detector'
  }
];

export default function RadarSystemsEcosystem() {
  const containerRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const cards = gsap.utils.toArray('.radar-card');
    if (!trackRef.current || cards.length === 0) return;

    const track = trackRef.current;
    
    const getScrollDist = () => track.scrollWidth - window.innerWidth;

    gsap.to(track, {
      x: () => -getScrollDist(),
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: 1,
        start: "top top",
        end: () => `+=${getScrollDist()}`,
        invalidateOnRefresh: true,
      }
    });
  }, { scope: containerRef });

  return (
    <div className="font-['Inter',sans-serif] bg-[#050505]">
      {/* Spacer to give room before pinned section */}
      <div className="h-24 md:h-32 bg-[#050505]" />

      <section 
        ref={containerRef} 
        className="relative h-screen overflow-hidden bg-[#050505]"
      >
        <div className="h-full w-full flex items-center overflow-visible z-10 relative">
          <div ref={trackRef} className="flex flex-nowrap h-full items-center px-[5vw] md:px-[10vw] gap-12 md:gap-24">
            
            {radarSystemsData.map((item, index) => (
              <div 
                key={index} 
                className="radar-card flex-shrink-0 flex items-center justify-center"
              >
                
                {/* THE GLASSMORPHISM CARD */}
                <div 
                  className="w-[90vw] max-w-[1100px] rounded-2xl mx-auto flex flex-col md:flex-row items-stretch"
                  style={{ 
                    backgroundColor: 'rgba(8, 8, 8, 0.75)', 
                    border: '1px solid rgba(255,255,255,0.08)',
                    backdropFilter: 'blur(16px)',
                    WebkitBackdropFilter: 'blur(16px)',
                    boxShadow: '0 25px 50px -12px rgba(0,0,0,0.8)'
                  }}
                >
                  {/* Corner Accents */}
                  <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 z-20" style={{ borderColor: 'rgba(132,204,22,0.6)' }} />
                  <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 z-20" style={{ borderColor: 'rgba(132,204,22,0.6)' }} />
                  <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 z-20" style={{ borderColor: 'rgba(132,204,22,0.6)' }} />
                  <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 z-20" style={{ borderColor: 'rgba(132,204,22,0.6)' }} />

                  {/* Left Split (Image) */}
                  <div className="w-full md:w-1/2 min-h-[250px] md:min-h-full border-b md:border-b-0 md:border-r flex" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
                    <div className="relative w-full h-full flex-1 bg-[#000]">
                      <img src={item.img} alt={item.title} className="absolute inset-0 w-full h-full object-cover" />
                      <div style={{ background: 'linear-gradient(to top, rgba(5,5,5,0.9) 0%, transparent 60%)' }} className="absolute inset-0" />
                      
                      {/* Status indicator */}
                      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                        <span className="flex items-center gap-1.5 text-[10px] font-mono text-white/90">
                          <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: '#84CC16' }} />
                          {item.statusBadge}
                        </span>
                      </div>
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
                      <Link to={item.slug} className="w-full md:w-auto py-3 px-8 rounded-xl font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 bg-slate-900 hover:bg-[#84CC16] hover:text-slate-900 text-white group">
                        <span>Know More</span>
                        <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Spacer after pinned section */}
      <div className="h-24 md:h-32 bg-[#050505]" />
    </div>
  );
}

