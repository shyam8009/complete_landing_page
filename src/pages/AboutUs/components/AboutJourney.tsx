import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const INTER = "'Inter', sans-serif";

const JOURNEY_DATA = [
  { 
    year: '2012', 
    text: 'FOUNDED AS OCEANS TECHNOLOGIES AND SPECIALIZING IN IT SERVICES AND 3D DESIGN.', 
    image: '/assets/dashboard_ui.jpg' 
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
    image: '/assets/spear_cad_blueprint.png' 
  },
  { 
    year: '2025', 
    text: 'DEFENCE PARTS MANUFACTURING CAPABILITIES. ENTERED INTO SHIPPING AND PORTS SECTORS.', 
    image: '/assets/sahana_facility.png' 
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
      // Desktop Animation: Sequential fade-in of text and images
      gsap.matchMedia().add("(min-width: 1024px)", () => {
        const panels = gsap.utils.toArray('.journey-panel') as HTMLElement[];
        
        // Reset state for hot-reloads
        gsap.set('.journey-text-and-image', { opacity: 0, y: 20 });
        
        // Make the first panel's content visible immediately
        if (panels.length > 0) {
          gsap.set(panels[0].querySelector('.journey-text-and-image'), { opacity: 1, y: 0 });
        }

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "+=3000",
            pin: true,
            scrub: 1,
            anticipatePin: 1
          }
        });

        panels.forEach((panel, i) => {
          if (i === 0) return; // Skip first panel
          tl.to(panel.querySelector('.journey-text-and-image'), { 
            opacity: 1, 
            y: 0, 
            duration: 1, 
            ease: "power2.out" 
          });
        });
      });

      // Mobile/Tablet: Keep all visible
      gsap.matchMedia().add("(max-width: 1023px)", () => {
        gsap.set('.journey-text-and-image', { opacity: 1, y: 0 });
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
              className={`journey-panel flex-1 overflow-hidden border-r ${item.isFuture ? 'border-[#84CC16]' : 'border-white/20'} relative flex flex-col p-4 md:p-6`}
            >
              {/* Top: Vertical Year (Always Visible) */}
              <div 
                className={`text-4xl md:text-5xl font-light tracking-widest relative z-10 ${item.isFuture ? 'text-[#84CC16]' : 'text-white'}`}
                style={{ writingMode: 'vertical-rl' }}
              >
                {item.year}
              </div>
              
              {/* Animated Wrapper for Text & Image */}
              <div className="journey-text-and-image flex flex-col justify-between flex-1 relative z-10 opacity-0 mt-8">
                {/* Middle: Description */}
                <p 
                  className={`text-[10px] uppercase font-mono leading-relaxed ${item.isFuture ? 'text-[#84CC16]' : 'text-white/60'}`}
                >
                  {item.text}
                </p>
                
                {/* Bottom: Asset Image/Icon */}
                <div className="w-full h-24 relative shrink-0 mt-4">
                  <img 
                    src={item.image} 
                    alt={item.year}
                    className={`w-full h-full object-contain ${item.isFuture ? 'mix-blend-screen opacity-100' : 'mix-blend-screen opacity-50 grayscale'}`} 
                  />
                </div>
              </div>

              {/* Future Highlight Overlay (Always Visible) */}
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