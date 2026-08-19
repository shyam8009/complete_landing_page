import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { RichText } from '../../../components/RichText';
import { TechCTA } from '@/components/TechCTA';

gsap.registerPlugin(ScrollTrigger);

export default function DynamicEcosystem({ data }: { data: any }) {
  const scrollContainer = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const cards = gsap.utils.toArray('.dynamic-card');
    if (!trackRef.current || cards.length === 0) return;
    
    const track = trackRef.current;
    const getScrollDist = () => track.scrollWidth - window.innerWidth;

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
  }, { scope: scrollContainer, dependencies: [data] });

  if (!data) return null;

  return (
    <main className="bg-[#050505]">
      {/* Intro Section */}
      <section className="relative w-full pt-16 pb-8 md:pt-24 md:pb-12 flex flex-col items-start justify-center overflow-hidden" style={{ backgroundColor: '#050505' }}>
        
        {/* Animated Pattern Background */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#050505] to-[#020202]" />
          
          <div 
            className="absolute inset-0 opacity-30" 
            style={{ 
              backgroundImage: 'linear-gradient(rgba(132, 204, 34, 0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(132, 204, 34, 0.15) 1px, transparent 1px)',
              backgroundSize: '40px 40px',
              backgroundPosition: 'center center'
            }}
          />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#050505_80%)]" />
          <div className="absolute top-[20%] right-[20%] w-[30vw] h-[30vw] bg-[#84CC16]/10 rounded-full blur-[100px] animate-pulse" style={{ animationDuration: '6s' }} />
          <div className="absolute bottom-[10%] left-[10%] w-[40vw] h-[40vw] bg-[#84CC16]/5 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '8s' }} />
        </div>

        <div className="relative z-10 px-6 md:px-12 max-w-3xl text-left">
          {data.introTag && (
            <span className="inline-block px-3 py-1 rounded-full text-[10px] font-mono tracking-wider uppercase mb-6" style={{ color: '#84CC16', backgroundColor: 'rgba(132,204,22,0.1)', border: '1px solid rgba(132,204,22,0.2)' }}>
              {data.introTag}
            </span>
          )}
          <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tight text-white leading-tight" dangerouslySetInnerHTML={{ __html: data.introH2.replace(' ', '<br className="hidden md:block" /> ') }} />
          <RichText content={data.introDesc} className="mt-6 text-sm md:text-base  text-neutral-300 max-w-xl" />
        </div>
      </section>

      {/* HORIZONTAL ECOSYSTEM TRACK */}
      <section ref={scrollContainer} className="relative w-full h-screen overflow-hidden bg-[#050505]">
        
        {/* BACKGROUND IMAGE / VIDEO */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          {data.resolvedBg ? (
            data.bgIsVideo ? (
              <video src={data.resolvedBg} autoPlay loop muted playsInline className="w-full h-full object-cover opacity-20" />
            ) : (
              <img src={data.resolvedBg} alt="Network Grid" className="w-full h-full object-cover opacity-20" />
            )
          ) : null}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(5,5,5,0.2)_0%,rgba(5,5,5,0.95)_100%)]" />
        </div>

        {/* THE SLIDING TRACK */}
        <div className="h-full w-full flex items-center overflow-visible z-10 relative">
          <div ref={trackRef} className="flex flex-nowrap h-full items-center pl-[5vw] md:pl-[10vw]">
            {data.cards.map((card: any, idx: number) => (
              <div 
                key={idx} 
                className="dynamic-card shrink-0 flex items-center justify-center pr-[10vw]"
                style={{ width: '100vw' }}
              >
                {/* THE GLASSMORPHISM CARD */}
                <div
                  className="relative w-[90vw] max-w-[1100px] rounded-2xl overflow-hidden mx-auto h-[min(540px,75vh)]"
                  style={{ 
                    backgroundColor: 'rgba(8, 8, 8, 0.75)', 
                    border: '1px solid rgba(255,255,255,0.08)',
                    backdropFilter: 'blur(16px)',
                    WebkitBackdropFilter: 'blur(16px)',
                    boxShadow: '0 25px 50px -12px rgba(0,0,0,0.8)',
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                >
                  <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 z-20" style={{ borderColor: 'rgba(132,204,22,0.6)' }} />
                  <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 z-20" style={{ borderColor: 'rgba(132,204,22,0.6)' }} />
                  <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 z-20" style={{ borderColor: 'rgba(132,204,22,0.6)' }} />
                  <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 z-20" style={{ borderColor: 'rgba(132,204,22,0.6)' }} />

                  <div className="flex flex-col md:grid md:grid-cols-12 h-full w-full overflow-hidden">
                    
                    {/* LEFT */}
                    <div className="md:col-span-6 p-5 lg:p-6 border-b md:border-b-0 md:border-r relative" 
                      style={{ backgroundColor: 'rgba(255,255,255,0.02)', borderColor: 'rgba(255,255,255,0.06)' }}>
                      <div className="relative w-full h-48 md:h-full rounded-xl overflow-hidden group" 
                        style={{ border: '1px solid rgba(255,255,255,0.08)', backgroundColor: '#000', minHeight: '300px' }}>
                        {card.resolvedImg ? (
                          card.imgIsVideo ? (
                            <video src={card.resolvedImg} autoPlay loop muted playsInline className="w-full h-full object-cover object-center" />
                          ) : (
                            <img src={card.resolvedImg} alt={card.title} className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700" />
                          )
                        ) : (
                          <div className="w-full h-full bg-neutral-900 flex items-center justify-center">
                            <span className="text-white/20 text-xs">No media uploaded</span>
                          </div>
                        )}
                        <div style={{ background: 'linear-gradient(to top, rgba(5,5,5,0.9) 0%, transparent 60%)' }} className="absolute inset-0 pointer-events-none" />
                        
                        <div className="absolute bottom-4 left-4 right-4 flex flex-col gap-2 pointer-events-none">
                          {card.statusBadge && (
                            <span className="flex items-center gap-1.5 text-[10px] font-mono text-white/90">
                              <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: '#84CC16' }} />
                              {card.statusBadge}
                            </span>
                          )}
                          {card.freqRange && (
                            <span className="text-[10px] font-mono text-white/60">
                              {card.freqRange}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* RIGHT */}
                    <div className="md:col-span-6 p-6 lg:p-8 flex flex-col justify-between h-full bg-neutral-100">
                      <div className="mb-6">
                        {card.tag && (
                          <span className="inline-block px-3 py-1 rounded-md text-[9px] lg:text-[10px] font-mono tracking-wider uppercase mb-4"
                            style={{ color: '#050505', backgroundColor: '#84CC16', border: '1px solid #84CC16' }}>
                            {card.tag}
                          </span>
                        )}

                        <h3 className="text-slate-900 text-xl lg:text-3xl font-bold tracking-wide uppercase leading-tight line-clamp-2">
                          {card.title}
                        </h3>
                        <RichText content={card.description} className="text-sm lg:text-base mt-3 mb-3  text-slate-600" />

                        
                      </div>

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
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-8 left-0 w-full z-20 text-center pointer-events-none">
          <p className="text-white/40 tracking-widest text-xs uppercase animate-pulse">
            Scroll to Explore
          </p>
        </div>
      </section>
    </main>
  );
}

