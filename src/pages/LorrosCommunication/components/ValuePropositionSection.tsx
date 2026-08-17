import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Crosshair, Eye, Activity } from 'lucide-react';
import productImg from '@/imports/magnific_extreme-closeup-macro-pro_WMNENw4cXe.png';

gsap.registerPlugin(ScrollTrigger);

const INTER = "'Inter', sans-serif";

export function ValuePropositionSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fade in text content
      gsap.fromTo(".vp-text",
        { opacity: 0, x: -30 },
        {
          opacity: 1, 
          x: 0, 
          duration: 1, 
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%"
          }
        }
      );

      // Fade in image and floating HUDs
      gsap.fromTo(".vp-image-container",
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%"
          }
        }
      );

      gsap.fromTo(".vp-hud",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "back.out(1.5)",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 50%"
          }
        }
      );

      // Subtle floating animation for HUDs
      gsap.to(".vp-hud", {
        y: -10,
        duration: 2,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
        stagger: 0.3
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full py-32 bg-[#050505] overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          
          {/* Left Text Content */}
          <div className="w-full lg:w-1/2">
            <div className="vp-text mb-4">
              <span className="text-[#84CC16] font-mono text-xs font-bold tracking-[0.2em] uppercase">
                CORE CAPABILITIES
              </span>
            </div>
            
            <h2 className="vp-text text-4xl lg:text-6xl font-bold text-white mb-8 leading-[1.1] tracking-tight" style={{ fontFamily: INTER }}>
              Scalable Multi-Channel Intelligence.
            </h2>
            
            <p className="vp-text text-lg text-white/60 leading-relaxed max-w-xl">
              LORROS is designed as a highly configurable tactical solution tailored to precise mission requirements. By combining day and thermal imaging with laser range finding and multi-channel video streaming, it ensures continuous, high-fidelity observation. Its scalable deployment model allows overarching control of entire sensor networks from centralized or distributed stations, providing total situational awareness.
            </p>
          </div>

          {/* Right Image/Grid Content */}
          <div className="w-full lg:w-1/2 relative min-h-[500px] flex items-center justify-center">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(132,204,22,0.1)_0%,transparent_60%)] pointer-events-none" />
            
            {/* Main Product Image */}
            <div className="vp-image-container relative z-10 w-full max-w-md">
              <img 
                src={productImg} 
                alt="LORROS Electro-Optical Suite" 
                className="w-full h-auto object-contain drop-shadow-[0_0_50px_rgba(255,255,255,0.1)] rounded-2xl"
              />
            </div>

            {/* Floating HUD 1: Laser Range Finding */}
            <div className="vp-hud absolute top-[10%] left-[5%] z-20 flex items-center gap-3 px-4 py-2 rounded-lg bg-white/5 border border-white/10 backdrop-blur-md shadow-lg">
              <div className="w-8 h-8 rounded-full bg-[#84CC16]/20 flex items-center justify-center">
                <Crosshair className="w-4 h-4 text-[#84CC16]" />
              </div>
              <div>
                <div className="text-[10px] text-white/50 font-mono tracking-wider uppercase">Active</div>
                <div className="text-sm font-bold text-white">Laser Range Finding</div>
              </div>
            </div>

            {/* Floating HUD 2: Thermal & Day Imaging */}
            <div className="vp-hud absolute top-[50%] -right-[5%] z-20 flex items-center gap-3 px-4 py-2 rounded-lg bg-white/5 border border-white/10 backdrop-blur-md shadow-lg">
              <div className="w-8 h-8 rounded-full bg-[#84CC16]/20 flex items-center justify-center">
                <Eye className="w-4 h-4 text-[#84CC16]" />
              </div>
              <div>
                <div className="text-[10px] text-white/50 font-mono tracking-wider uppercase">Multi-Spectral</div>
                <div className="text-sm font-bold text-white">Thermal & Day Imaging</div>
              </div>
            </div>

            {/* Floating HUD 3: Multi-Channel Streaming */}
            <div className="vp-hud absolute bottom-[10%] left-[10%] z-20 flex items-center gap-3 px-4 py-2 rounded-lg bg-white/5 border border-white/10 backdrop-blur-md shadow-lg">
              <div className="w-8 h-8 rounded-full bg-[#84CC16]/20 flex items-center justify-center">
                <Activity className="w-4 h-4 text-[#84CC16]" />
              </div>
              <div>
                <div className="text-[10px] text-white/50 font-mono tracking-wider uppercase">Data Link</div>
                <div className="text-sm font-bold text-white">Multi-Channel Streaming</div>
              </div>
            </div>

          </div>
          
        </div>
      </div>
    </section>
  );
}
