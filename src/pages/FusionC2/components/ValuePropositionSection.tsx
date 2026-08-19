import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Target, Camera, Activity } from 'lucide-react';
import productImg from '@/imports/c2_dashboard_ui.png';

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
    <section ref={sectionRef} className="relative w-full section-padding bg-[#05080D] overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          
          {/* Left Text Content */}
          <div className="w-full lg:w-1/2">
            <div className="vp-text mb-4">
              <span className="text-[#84CC16] font-mono text-xs font-bold tracking-[0.2em] uppercase">
                CORE CAPABILITIES
              </span>
            </div>
            
            <h2 className="vp-text text-2xl sm:text-4xl lg:text-6xl font-bold text-white mb-8 leading-[1.1] tracking-tight" style={{ fontFamily: INTER }}>
              Unified Multi-Sensor Surveillance.
            </h2>
            
            <p className="vp-text text-lg text-white/60 leading-relaxed max-w-xl">
              The FUSION Core AI Command and Control (C2) system offers advanced features for enhanced surveillance and monitoring in diverse environments. It delivers comprehensive battlefield or perimeter control that eliminates cognitive overload for operators. Designed for efficiency and adaptability, it delivers reliable performance, ensuring robust situational awareness and quick operational responses.
            </p>
          </div>

          {/* Right Image/Grid Content */}
          <div className="w-full lg:w-1/2 relative min-h-[500px] flex items-center justify-center">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(132,204,22,0.1)_0%,transparent_60%)] pointer-events-none" />
            
            {/* Main Product Image */}
            <div className="vp-image-container relative z-10 w-full max-w-xl">
              <img 
                src={productImg} 
                alt="FUSION C2 Interface" 
                className="w-full h-auto object-cover drop-shadow-[0_0_50px_rgba(255,255,255,0.1)] rounded-2xl border border-white/10"
              />
            </div>

            {/* Floating HUD 1: Blue Force Tracking */}
            <div className="vp-hud absolute top-[10%] -left-[5%] z-20 flex items-center gap-3 px-4 py-2 rounded-lg bg-white/5 border border-white/10 backdrop-blur-md shadow-lg">
              <div className="w-8 h-8 rounded-full bg-[#84CC16]/20 flex items-center justify-center">
                <Target className="w-4 h-4 text-[#84CC16]" />
              </div>
              <div>
                <div className="text-[10px] text-white/50 font-mono tracking-wider uppercase">Active</div>
                <div className="text-sm font-bold text-white">Blue Force Tracking</div>
              </div>
            </div>

            {/* Floating HUD 2: Automated Camera Handover */}
            <div className="vp-hud absolute top-[50%] -right-[5%] z-20 flex items-center gap-3 px-4 py-2 rounded-lg bg-white/5 border border-white/10 backdrop-blur-md shadow-lg">
              <div className="w-8 h-8 rounded-full bg-[#84CC16]/20 flex items-center justify-center">
                <Camera className="w-4 h-4 text-[#84CC16]" />
              </div>
              <div>
                <div className="text-[10px] text-white/50 font-mono tracking-wider uppercase">Slew-To-Cue</div>
                <div className="text-sm font-bold text-white">Automated Handover</div>
              </div>
            </div>

            {/* Floating HUD 3: System Status Telemetry */}
            <div className="vp-hud absolute bottom-[10%] left-[10%] z-20 flex items-center gap-3 px-4 py-2 rounded-lg bg-white/5 border border-white/10 backdrop-blur-md shadow-lg">
              <div className="w-8 h-8 rounded-full bg-[#84CC16]/20 flex items-center justify-center">
                <Activity className="w-4 h-4 text-[#84CC16]" />
              </div>
              <div>
                <div className="text-[10px] text-white/50 font-mono tracking-wider uppercase">Live</div>
                <div className="text-sm font-bold text-white">System Status Telemetry</div>
              </div>
            </div>

          </div>
          
        </div>
      </div>
    </section>
  );
}


