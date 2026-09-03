import React, { useEffect, useRef } from 'react';
import { Laptop, LayoutTemplate, Share2 } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import rfdImg from '@/imports/rf_radar_generated.png';

gsap.registerPlugin(ScrollTrigger);

export function CoreCapabilities() {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.fade-in-right',
        { x: 50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 60%',
          }
        }
      );
      
      gsap.fromTo('.hud-element',
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'back.out(1.2)',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 50%',
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section-padding bg-[#020202] relative overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-4 lg:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="flex flex-col">
            <div className="fade-in-right inline-flex items-center gap-2 mb-6">
              <span className="text-[#84CC16] text-sm font-bold tracking-[3px] uppercase">
                CORE CAPABILITIES
              </span>
            </div>
            
            <h2 className="fade-in-right text-4xl lg:text-5xl font-bold text-white mb-8 uppercase tracking-tight">
              HARDWARE-AGNOSTIC CONTROL &amp; FASTER INTEGRATION
            </h2>
            
            <div className="fade-in-right space-y-6 text-white/60 text-lg leading-relaxed max-w-xl">
              <p>
                Quantum hardware arrives from different vendors with different interfaces, and every one of them costs integration time before anything reaches the field. Quantum Control Systems put a common layer over that variation: Board Support Packages, device drivers, middleware and developer tools that give diverse hardware a single standardised interface, cutting the integration work that usually sits between delivery and deployment.
              </p>
            </div>
          </div>

          <div className="relative h-[600px] flex items-center justify-center">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(132,204,22,0.15)_0%,transparent_70%)] pointer-events-none" />
            
            <img 
              src={rfdImg} 
              alt="Core Capabilities" 
              className="relative z-10 w-full max-w-[600px] object-cover rounded-xl drop-shadow-[0_0_50px_rgba(132,204,22,0.1)] hover:scale-105 transition-transform duration-700"
            />
            
            <div className="hud-element absolute top-[15%] left-[5%] bg-black/40 backdrop-blur-md border border-white/10 p-4 rounded-md z-20 shadow-2xl">
              <div className="flex items-center gap-3">
                <Laptop className="text-[#84CC16] w-5 h-5" />
                <div>
                  <div className="text-white font-bold text-sm">Hardware-Agnostic BSPs</div>
                </div>
              </div>
            </div>

            <div className="hud-element absolute bottom-[25%] left-0 bg-black/40 backdrop-blur-md border border-white/10 p-4 rounded-md z-20 shadow-2xl">
              <div className="flex items-center gap-3">
                <LayoutTemplate className="text-[#84CC16] w-5 h-5" />
                <div>
                  <div className="text-white font-bold text-sm">Standardised APIs</div>
                </div>
              </div>
            </div>

            <div className="hud-element absolute top-[40%] right-[5%] bg-black/40 backdrop-blur-md border border-white/10 p-4 rounded-md z-20 shadow-2xl">
              <div className="flex items-center gap-3">
                <Share2 className="text-[#84CC16] w-5 h-5" />
                <div>
                  <div className="text-white font-bold text-sm">Cross-Vendor Compatibility</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}