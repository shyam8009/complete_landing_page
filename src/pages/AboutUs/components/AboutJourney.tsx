import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const INTER = "'Inter', sans-serif";

const JOURNEY_DATA = [
  { 
    year: '2012', 
    text: 'Founded as Oceans Technologies and specializing in IT services and 3D design.', 
    image: '/assets/dashboard_ui.jpg' 
  },
  { 
    year: '2016', 
    text: 'Expanded our presence by establishing several branches across different regions of Gujarat.', 
    image: '/assets/corporate_house_3.jpg' 
  },
  { 
    year: '2020', 
    text: 'Entered the hardware trading business, built a clientele of over 50 customers, and achieved CMMI Level 3, ISO 9001, and ISO/IEC 27001 certifications.', 
    image: '/assets/Hardware_Spec_1.webp' 
  },
  { 
    year: '2022', 
    text: 'Diversified our business into sustainable technology and green energy under a new brand.', 
    image: '/assets/innovation_5.jpg' 
  },
  { 
    year: '2023', 
    text: 'Surpassed 100 customers. Became a publicly listed company, valuation of INR 137 Crores Expanded into deep tech with Softvan Group acquisition.', 
    image: '/assets/c2_dashboard_ui.png' 
  },
  { 
    year: '2024', 
    text: 'Ventured in Defence & Aerospace tech. Crossed Market cap of INR 1500+ Crores Acquired Leading CMS Firm Sourceved Technologies.', 
    image: '/assets/spear_cad_blueprint.png' 
  },
  { 
    year: '2025', 
    text: 'Defence parts manufacturing capabilities. Entered into shipping and ports sectors.', 
    image: '/assets/sahana_facility.png' 
  },
  { 
    year: '2026/27', 
    text: "Become an INR 5000 Cr. company driving India's Deep Tech leadership through Innovation, Integrity & Impact.", 
    image: '/assets/rf_radar_generated.png',
    isFuture: true
  }
];

export default function AboutJourney() {
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Only run on desktop/tablet to prevent mobile flex squishing
      gsap.matchMedia().add("(min-width: 1024px)", () => {
        const panels = gsap.utils.toArray('.journey-panel') as HTMLElement[];
        
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: triggerRef.current,
            start: "top top",
            end: "+=6000", // longer scroll for 8 items
            pin: true,
            scrub: 1, // Smooth expansion
            anticipatePin: 1
          }
        });

        panels.forEach((panel, i) => {
          if (i === 0) return; // Skip first as it's the starting state

          const prevPanel = panels[i - 1];

          tl.to(prevPanel, { flex: 1, duration: 1, ease: "power2.inOut" }, i)
            .to(panel, { flex: 10, duration: 1, ease: "power2.inOut" }, i)
            
            // Fade out previous panel contents
            .to(prevPanel.querySelector('.journey-text-content'), { opacity: 0, duration: 0.3 }, i)
            .to(prevPanel.querySelector('.journey-year-vertical'), { opacity: 1, duration: 0.3 }, i + 0.5)
            .to(prevPanel.querySelector('.journey-image'), { opacity: 0, scale: 0.95, duration: 0.5 }, i)
            
            // Fade in new panel contents
            .to(panel.querySelector('.journey-year-vertical'), { opacity: 0, duration: 0.3 }, i)
            .to(panel.querySelector('.journey-text-content'), { opacity: 1, duration: 0.5 }, i + 0.5)
            .to(panel.querySelector('.journey-image'), { opacity: 1, scale: 1, duration: 0.8, ease: "power2.out" }, i + 0.2);
        });
      });
    }, containerRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="w-full bg-[#050505] text-white overflow-hidden relative">
      <div ref={triggerRef} className="w-full h-screen flex flex-row overflow-hidden border-t border-b border-white/20">
        
        {JOURNEY_DATA.map((item, i) => (
          <div 
            key={i} 
            className={`journey-panel relative h-full border-r border-white/20 overflow-hidden ${i === 0 ? 'flex-[10]' : 'flex-1'}`}
          >
            {/* Top Text Content (Aligned Upper-Middle) */}
            <div 
              className={`journey-text-content absolute top-0 left-0 w-full md:w-[450px] h-[55%] p-10 flex flex-col justify-start ${i === 0 ? 'opacity-100' : 'opacity-0'}`}
            >
              <h3 className={`text-4xl lg:text-6xl font-light mb-8 ${item.isFuture ? 'text-[#84CC16]' : 'text-white'}`}>
                {item.year}
              </h3>
              <div className="flex-1 flex flex-col justify-center">
                <p 
                  className={`text-lg lg:text-xl font-medium leading-relaxed ${item.isFuture ? 'text-[#84CC16]' : 'text-white/80'}`}
                  style={{ fontFamily: INTER }}
                >
                  {item.text}
                </p>
              </div>
            </div>

            {/* Inactive Vertical Year (Visible only when panel is collapsed) */}
            <div 
              className={`journey-year-vertical absolute top-12 left-1/2 -translate-x-1/2 flex justify-center items-center ${i === 0 ? 'opacity-0' : 'opacity-100'}`}
            >
              <span 
                className="text-white/40 text-xl font-mono tracking-widest uppercase transform -rotate-90 origin-center whitespace-nowrap pt-8"
              >
                {item.year}
              </span>
            </div>

            {/* Bottom Media Asset (Absolute Bottom) */}
            <div 
              className={`journey-image absolute bottom-0 left-0 w-full h-[55%] transform origin-bottom ${i === 0 ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
            >
              {/* Fade gradient to blend into the black background seamlessly */}
              <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#050505] to-transparent z-10" />
              <img 
                src={item.image} 
                alt={item.year} 
                className="w-full h-full object-cover object-top opacity-60" 
              />
            </div>

          </div>
        ))}

      </div>
    </section>
  );
}