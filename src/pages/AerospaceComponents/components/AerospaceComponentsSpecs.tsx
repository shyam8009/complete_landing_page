import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Settings, Frame, Disc } from 'lucide-react';
import img1 from '@/imports/magnific_extreme-closeup-macro-pro_WMNENw4cXe.png';
import img2 from '@/imports/magnific_extreme-closeup-macro-pro_8vcjnezIrU.png';
import img3 from '@/imports/magnific_extreme-closeup-macro-pro_LUQGHhOswO.png';

gsap.registerPlugin(ScrollTrigger);

const SPECS = [
  {
    id: '01',
    title: 'Engine & Turbomachinery',
    subtitle: 'CRITICAL PROPULSION',
    description: 'Manufactured to severe defense-grade tolerances using titanium, high-alloy steel, and nickel alloys.',
    image: img1,
    icon: Settings,
    metrics: [
      { label: 'Production', value: '40,000+ Units' },
      { label: 'Platform', value: 'Su-30MKI' }
    ]
  },
  {
    id: '02',
    title: 'Structural Airframe',
    subtitle: 'FLIGHT DYNAMICS',
    description: 'Precision-machined structural parts engineered to serve as load-bearing components for airframes and fuselages.',
    image: img2,
    icon: Frame,
    metrics: [
      { label: 'Load-Bearing', value: 'Optimized' },
      { label: 'Strength', value: 'Stringent' }
    ]
  },
  {
    id: '03',
    title: 'Mounting & Connection',
    subtitle: 'CRITICAL ASSEMBLIES',
    description: 'High-accuracy brackets and shackles designed for load-bearing defense and aerospace systems.',
    image: img3,
    icon: Disc,
    metrics: [
      { label: 'Tolerances', value: 'Exacting' },
      { label: 'Connections', value: 'Secure' }
    ]
  }
];

export function AerospaceComponentsSpecs() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(cardsRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0,
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
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 bg-[#020202] border-t border-white/5 relative overflow-hidden">
      
      {/* Dynamic Background Noise/Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(132,204,22,0.05)_0%,transparent_70%)] pointer-events-none" />
      
      <div className="max-w-[1600px] mx-auto px-4 lg:px-6 relative z-10">
        
        {/* Header */}
        <div className="mb-20">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="text-[#84CC16] text-sm font-bold tracking-[3px] uppercase">
              // PRECISION AEROSPACE PORTFOLIO
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white uppercase tracking-tight max-w-3xl leading-[1.1]">
            Technical Specifications & Applications
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SPECS.map((spec, idx) => {
            const Icon = spec.icon;
            return (
              <div 
                key={spec.id}
                ref={el => cardsRef.current[idx] = el}
                className="group relative flex flex-col bg-[#0a0a0a] rounded-xl overflow-hidden border border-white/10 hover:border-[#84CC16]/50 transition-colors duration-500 h-[600px]"
              >
                {/* Image Section (Top Half) */}
                <div className="relative h-[45%] w-full overflow-hidden">
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  <img 
                    src={spec.image} 
                    alt={spec.title}
                    className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                  />
                  {/* Floating badge */}
                  <div className="absolute top-4 right-4 z-20 bg-black/60 backdrop-blur-md border border-white/10 px-3 py-1 rounded-sm">
                    <span className="text-white/80 text-[10px] uppercase tracking-widest font-mono">
                      {spec.subtitle}
                    </span>
                  </div>
                </div>

                {/* Content Section (Bottom Half) */}
                <div className="relative p-8 flex flex-col flex-grow">
                  <div className="absolute top-0 left-8 -translate-y-1/2 w-12 h-12 bg-black border border-white/20 rounded-full flex items-center justify-center z-20 group-hover:border-[#84CC16] transition-colors duration-300">
                    <Icon className="w-5 h-5 text-white group-hover:text-[#84CC16] transition-colors" />
                  </div>

                  <div className="mt-4 mb-2 flex items-center gap-3">
                    <span className="text-[#84CC16] font-mono text-sm font-bold">{spec.id}</span>
                    <div className="h-px bg-white/20 flex-grow" />
                  </div>

                  <h3 className="text-2xl font-bold text-white uppercase tracking-tight mb-4 group-hover:text-[#84CC16] transition-colors duration-300">
                    {spec.title}
                  </h3>
                  
                  <p className="text-white/60 text-sm leading-relaxed mb-auto">
                    {spec.description}
                  </p>

                  {/* Data Metrics Footer */}
                  <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-2 gap-4">
                    {spec.metrics.map((metric, i) => (
                      <div key={i} className="flex flex-col">
                        <span className="text-white/40 text-[10px] uppercase tracking-wider font-mono mb-1">
                          {metric.label}
                        </span>
                        <span className="text-white font-bold text-sm">
                          {metric.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
