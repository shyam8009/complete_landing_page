import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Activity, ShieldAlert, Target } from 'lucide-react';
import dashboardImg from '@/imports/osint_dashboard.jpg';

gsap.registerPlugin(ScrollTrigger);

export function BigDataBICapabilities() {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo('.cap-text',
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
          }
        }
      );
      
      gsap.fromTo('.cap-image-container',
        { x: 50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
          }
        }
      );

      gsap.fromTo('.hud-stat',
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.6,
          stagger: 0.15,
          ease: 'back.out(1.5)',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 60%',
          }
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-black border-t border-white/5 relative overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-4 lg:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="flex flex-col">
            <div className="cap-text inline-flex items-center gap-2 mb-6">
              <span className="text-[#84CC16] text-sm font-bold tracking-[3px] uppercase">
                DATA FUSION ARCHITECTURE
              </span>
            </div>
            
            <h2 className="cap-text text-4xl lg:text-5xl font-bold text-white mb-8 uppercase tracking-tight leading-tight">
              Integrated Data Management Solutions.
            </h2>
            
            <div className="cap-text space-y-6 text-white/60 text-lg leading-relaxed max-w-xl">
              <p>
                SoftVan offers big data consulting to ensure a better customer experience through customized service packages. We provide an integrated data management solution, offering skilled consultative services to uncover opportunities hidden within your organization's information.
              </p>
              <p>
                By focusing on data pipelining, we ensure the correct and timely transmission of performance metrics across refined, massive knowledge platforms.
              </p>
            </div>
          </div>

          <div className="cap-image-container relative h-[500px] lg:h-[600px] flex items-center justify-center">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(132,204,22,0.15)_0%,transparent_70%)] pointer-events-none" />
            
            <div className="relative w-full max-w-[600px] h-full rounded-xl overflow-hidden border border-white/10 shadow-2xl">
              <img 
                src={dashboardImg} 
                alt="BI Dashboard" 
                className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-screen"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
            </div>
            
            <div className="hud-stat absolute top-[10%] -left-[5%] bg-black/60 backdrop-blur-md border border-white/10 p-4 rounded z-20 shadow-xl flex items-center gap-3">
              <Activity className="text-[#84CC16] w-5 h-5" />
              <div className="text-white font-bold text-sm tracking-wide uppercase">Real-Time Stream Preprocessing</div>
            </div>

            <div className="hud-stat absolute top-[40%] -right-[5%] bg-black/60 backdrop-blur-md border border-white/10 p-4 rounded z-20 shadow-xl flex items-center gap-3">
              <Target className="text-[#84CC16] w-5 h-5" />
              <div className="text-white font-bold text-sm tracking-wide uppercase">Automated Data Usage</div>
            </div>

            <div className="hud-stat absolute bottom-[20%] left-[10%] bg-black/60 backdrop-blur-md border border-white/10 p-4 rounded z-20 shadow-xl flex items-center gap-3">
              <ShieldAlert className="text-[#84CC16] w-5 h-5" />
              <div className="text-white font-bold text-sm tracking-wide uppercase">Superior Processing Performance</div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
