import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';
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
  },
  {
    id: '02',
    title: 'Structural Airframe',
    subtitle: 'FLIGHT DYNAMICS',
    description: 'Precision-machined structural parts engineered to serve as load-bearing components for airframes and fuselages.',
    image: img2,
  },
  {
    id: '03',
    title: 'Mounting & Connection',
    subtitle: 'CRITICAL ASSEMBLIES',
    description: 'High-accuracy brackets and shackles designed for load-bearing defense and aerospace systems.',
    image: img3,
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
    <section ref={sectionRef} className="py-16 bg-white border-y border-gray-200 relative">
      <div className="max-w-[1600px] mx-auto px-4 lg:px-6">
        
        {/* Header */}
        <div className="mb-20">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="text-[#84CC16] text-sm font-bold tracking-[3px] uppercase">
              // PRECISION AEROSPACE PORTFOLIO
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black uppercase tracking-tight max-w-3xl leading-[1.1]">
            Technical Specifications & Applications
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SPECS.map((spec, idx) => (
            <div 
              key={spec.id}
              ref={el => cardsRef.current[idx] = el}
              className="group relative flex flex-col bg-[#F5F5F5] rounded-xl overflow-hidden h-[500px]"
            >
              
              {/* Initial Text Layer (Z-0) */}
              <div className="relative z-0 flex flex-col justify-between h-full p-8 md:p-10">
                
                <div className="flex flex-col gap-6">
                  {/* Top: Logo / ID */}
                  <span className="text-[#84CC16] font-mono text-xl font-black">
                    {spec.id}
                  </span>
                  
                  {/* Title & Description */}
                  <div>
                    <h3 className="text-3xl font-bold text-black uppercase tracking-tight mb-4 leading-tight">
                      {spec.title}
                    </h3>
                    <p className="text-gray-600 text-base leading-relaxed">
                      {spec.description}
                    </p>
                  </div>
                </div>

                {/* Bottom: CTA */}
                <div className="mt-auto pt-8">
                  <div className="inline-flex flex-col">
                    <span className="text-black font-bold text-sm tracking-[2px] uppercase mb-2 flex items-center gap-2">
                      READ MORE
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </span>
                    <div className="w-full h-0.5 bg-[#84CC16]" />
                  </div>
                </div>

              </div>

              {/* Hover Media Layer (Z-10) - Slides up to cover */}
              <div className="absolute inset-0 w-full h-full z-10 translate-y-full group-hover:translate-y-0 transition-transform duration-[400ms] ease-[cubic-bezier(0.25,1,0.5,1)]">
                {/* Optional dark overlay so if we wanted to overlay text it would be readable. But prompt says "sliding up smoothly to cover the text". */}
                <div className="absolute inset-0 bg-black/10 z-10 pointer-events-none" />
                <img 
                  src={spec.image} 
                  alt={spec.title}
                  className="w-full h-full object-cover grayscale-0"
                />
                
                {/* To ensure the CTA is still clickable or the card still makes sense, we can overlay the title over the image on hover */}
                <div className="absolute inset-0 z-20 flex flex-col justify-end p-8 md:p-10 opacity-0 group-hover:opacity-100 transition-opacity duration-[400ms] delay-100 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
                  <h3 className="text-2xl font-bold text-white uppercase tracking-tight mb-2">
                    {spec.title}
                  </h3>
                  <span className="text-[#84CC16] text-xs font-bold tracking-[2px] uppercase">
                    {spec.subtitle}
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
