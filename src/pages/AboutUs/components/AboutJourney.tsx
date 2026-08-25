import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const INTER = "'Inter', sans-serif";

const JOURNEY_DATA = [
  { 
    year: '2012', 
    text: 'FOUNDED AS OCEANS TECHNOLOGIES AND SPECIALIZING IN IT SERVICES AND 3D DESIGN.', 
    image: '/assets/spear_cad_blueprint.png' 
  },
  { 
    year: '2016', 
    text: 'EXPANDED OUR PRESENCE BY ESTABLISHING SEVERAL BRANCHES ACROSS DIFFERENT REGIONS OF GUJARAT.', 
    image: '/assets/corporate_house_3.jpg' 
  },
  { 
    year: '2020', 
    text: 'ENTERED HARDWARE TRADING, BUILT 50+ CUSTOMER BASE, ACHIEVED CMMI LEVEL 3 & ISO CERTIFICATIONS.', 
    image: '/assets/Hardware_Spec_1.webp' 
  },
  { 
    year: '2022', 
    text: 'DIVERSIFIED OUR BUSINESS INTO SUSTAINABLE TECHNOLOGY AND GREEN ENERGY UNDER A NEW BRAND.', 
    image: '/assets/innovation_5.jpg' 
  },
  { 
    year: '2023', 
    text: 'SURPASSED 100 CUSTOMERS. BECAME PUBLICLY LISTED. ACQUIRED SOFTVAN GROUP DEEP TECH.', 
    image: '/assets/c2_dashboard_ui.png' 
  },
  { 
    year: '2024', 
    text: 'VENTURED IN DEFENCE & AEROSPACE. CROSSED 1500+ CR MARKET CAP. ACQUIRED SOURCEVED.', 
    image: '/assets/surveillance_blueprint.png' 
  },
  { 
    year: '2025', 
    text: 'DEFENCE PARTS MANUFACTURING CAPABILITIES. ENTERED INTO SHIPPING AND PORTS SECTORS.', 
    image: '/assets/Hardware_Spec_2.webp' 
  },
  { 
    year: '2026/27', 
    text: "BECOME AN INR 5000 CR. COMPANY DRIVING INDIA'S DEEP TECH LEADERSHIP THROUGH INNOVATION.", 
    image: '/assets/rf_radar_generated.png',
    isFuture: true
  }
];

export default function AboutJourney() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Desktop Animation: Unpack columns sequentially
      gsap.matchMedia().add("(min-width: 1024px)", () => {
        const panels = gsap.utils.toArray('.journey-panel') as HTMLElement[];
        
        // Reset state for hot-reloads
        gsap.set(panels, { flex: 0 });
        gsap.set('.inner-content', { opacity: 0 });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "+=4000",
            pin: true,
            scrub: 1,
            anticipatePin: 1
          }
        });

        panels.forEach((panel) => {
          tl.to(panel, { flex: 1, duration: 1, ease: "none" })
            .to(panel.querySelector('.inner-content'), { opacity: 1, duration: 0.5 }, "<0.5");
        });
      });

      // Mobile/Tablet: Auto-expand, simple horizontal scroll
      gsap.matchMedia().add("(max-width: 1023px)", () => {
        gsap.set('.journey-panel', { flex: '0 0 200px' });
        gsap.set('.inner-content', { opacity: 1 });
      });

    }, containerRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="w-full h-screen bg-[#050505] text-white flex flex-col justify-center relative overflow-hidden">
      
      <div className="max-w-[1400px] w-full mx-auto px-6 md:px-12 mb-12">
        <h2 className="text-3xl md:text-5xl font-light tracking-tight">Our Journey of Innovation</h2>
      </div>

      <div className="max-w-[1400px] w-full mx-auto px-6 md:px-12 h-[65vh]">
        <div className="flex flex-row h-full w-full border-l border-white/20 overflow-x-auto md:overflow-x-hidden hide-scrollbar">
          
          {JOURNEY_DATA.map((item, i) => (
            <div 
              key={i} 
              className={`journey-panel overflow-hidden border-r ${item.isFuture ? 'border-[#84CC16]' : 'border-white/20'} relative`}
              style={{ flex: 0 }}
            >
              {/* Inner content given a fixed width to prevent text wrapping jank during GSAP flex expansion */}
              <div className="inner-content w-[200px] md:w-[150px] lg:w-[160px] h-full flex flex-col justify-between p-4 md:p-6 opacity-0 relative z-10">
                
                {/* Top: Vertical Year */}
                <div 
                  className={`text-4xl md:text-5xl font-light tracking-widest ${item.isFuture ? 'text-[#84CC16]' : 'text-white'}`}
                  style={{ writingMode: 'vertical-rl' }}
                >
                  {item.year}
                </div>
                
                {/* Middle: Description */}
                <p 
                  className={`text-[10px] uppercase font-mono leading-relaxed mt-8 mb-auto ${item.isFuture ? 'text-[#84CC16]' : 'text-white/60'}`}
                >
                  {item.text}
                </p>
                
                {/* Bottom: Asset Image/Icon */}
                <div className="w-full h-24 relative mt-4 shrink-0">
                  <img 
                    src={item.image} 
                    alt={item.year}
                    className={`w-full h-full object-contain ${item.isFuture ? 'mix-blend-screen opacity-100' : 'mix-blend-screen opacity-50 grayscale'}`} 
                  />
                </div>
              </div>

              {/* Future Highlight Overlay */}
              {item.isFuture && (
                <div className="absolute inset-0 bg-gradient-to-b from-[#84CC16]/20 to-transparent pointer-events-none z-0" />
              )}
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}