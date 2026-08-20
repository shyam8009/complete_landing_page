import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Crosshair, Activity, Cpu } from 'lucide-react';
import imageRender from '@/imports/c2_dashboard_ui.png';

gsap.registerPlugin(ScrollTrigger);

export function ChatbotsVoiceCapabilities() {
  const containerRef = useRef<HTMLElement>(null);
  
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // Animate text elements
      gsap.fromTo(".cap-text",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
          }
        }
      );

      // Animate floating HUDs
      gsap.fromTo(".hud-stat",
        { x: 50, opacity: 0, scale: 0.9 },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.2,
          ease: "back.out(1.2)",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 50%",
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-24 bg-black border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#84CC16]/5 blur-[120px] pointer-events-none" />
      
      <div className="max-w-[1600px] mx-auto px-4 lg:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left: Text Content */}
          <div className="flex-1 w-full">
            <div className="cap-text inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#84CC16]/10 border border-[#84CC16]/20 mb-8">
              <span className="text-[#84CC16] text-xs font-bold tracking-[3px] uppercase">
                COGNITIVE ASSISTANCE
              </span>
            </div>
            
            <h2 className="cap-text text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-8 uppercase tracking-tight leading-[1.1]">
              Eliminating Cognitive Overload Through Voice.
            </h2>
            
            <p className="cap-text text-white/60 text-lg leading-relaxed max-w-2xl">
              In the modern battlespace, language is often the earliest signal of intent—but manual transcription and traditional database querying are far too slow. Our Chatbots and Voice Solutions deploy secure, air-gapped conversational AI directly to the tactical edge. By enabling operators to interact with complex intelligence databases hands-free, and translating intercepted communications in real-time, we strip away the friction between human intent and machine execution.
            </p>
          </div>

          {/* Right: Visual Render & HUDs */}
          <div className="flex-1 w-full relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 shadow-2xl cap-text">
              <img 
                src={imageRender} 
                alt="Tactical NLP Dashboard" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 mix-blend-overlay" />
            </div>

            {/* Floating HUD 1 */}
            <div className="hud-stat absolute -left-8 lg:-left-16 top-12 bg-black/80 backdrop-blur-md border border-white/10 p-4 rounded-lg flex items-center gap-4 shadow-xl z-20">
              <div className="p-2 bg-[#84CC16]/20 rounded-full border border-[#84CC16]/50">
                <Activity className="w-5 h-5 text-[#84CC16]" />
              </div>
              <div className="text-white font-mono text-sm tracking-wide uppercase">
                Real-Time Voice-to-Text<br/>Transcription
              </div>
            </div>

            {/* Floating HUD 2 */}
            <div className="hud-stat absolute -right-4 lg:-right-12 top-1/2 -translate-y-1/2 bg-black/80 backdrop-blur-md border border-white/10 p-4 rounded-lg flex items-center gap-4 shadow-xl z-20">
              <div className="p-2 bg-[#84CC16]/20 rounded-full border border-[#84CC16]/50">
                <Crosshair className="w-5 h-5 text-[#84CC16]" />
              </div>
              <div className="text-white font-mono text-sm tracking-wide uppercase">
                Hands-Free C2<br/>Interaction
              </div>
            </div>

            {/* Floating HUD 3 */}
            <div className="hud-stat absolute -left-4 lg:-left-12 bottom-12 bg-black/80 backdrop-blur-md border border-white/10 p-4 rounded-lg flex items-center gap-4 shadow-xl z-20">
              <div className="p-2 bg-[#84CC16]/20 rounded-full border border-[#84CC16]/50">
                <Cpu className="w-5 h-5 text-[#84CC16]" />
              </div>
              <div className="text-white font-mono text-sm tracking-wide uppercase">
                Air-Gapped Secure<br/>Inference
              </div>
            </div>

          </div>
          
        </div>
      </div>
    </section>
  );
}
