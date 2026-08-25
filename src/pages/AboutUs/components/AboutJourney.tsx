import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const INTER = "'Inter', sans-serif";

const JOURNEY_DATA = [
  { 
    year: '2012', 
    text: 'Founded as Oceans Technologies, specializing in IT services and 3D design.', 
    image: '/assets/journey_2012.jpg' 
  },
  { 
    year: '2016', 
    text: 'Expanded our presence by establishing several branches across different regions of Gujarat.', 
    image: '/assets/journey_2016.jpg' 
  },
  { 
    year: '2020', 
    text: 'Entered hardware trading, built a 50+ customer base, achieved CMMI Level 3 & ISO certifications.', 
    image: '/assets/journey_2020.jpg' 
  },
  { 
    year: '2022', 
    text: 'Diversified our business into sustainable technology and green energy under a new brand.', 
    image: '/assets/journey_2022.jpg' 
  },
  { 
    year: '2023', 
    text: 'Surpassed 100 customers. Became publicly listed. Acquired Softvan Group Deep Tech.', 
    image: '/assets/journey_2023.jpg' 
  },
  { 
    year: '2024', 
    text: 'Ventured into Defence & Aerospace. Crossed 1500+ Cr market cap. Acquired Sourceved.', 
    image: '/assets/journey_2024.jpg' 
  },
  { 
    year: '2025', 
    text: 'Established defence parts manufacturing capabilities. Entered into shipping and ports sectors.', 
    image: '/assets/journey_2025.jpg' 
  },
  { 
    year: '2026/27', 
    text: "Become an INR 5000 Cr. company driving India's deep tech leadership through innovation.", 
    image: '/assets/journey_2026.jpg',
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
        
        // Reset state for hot-reloads: Packed as 3% slivers initially so the vertical year text is visible
        // Using % for both start and end ensures GSAP interpolates correctly without breaking
        gsap.set(panels, { width: "3%", flex: "none" });
        gsap.set('.inner-content', { opacity: 0 });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "+=4000", // Increased scroll distance for comfortable reading
            pin: true,
            scrub: 1,
            anticipatePin: 1
          }
        });

                panels.forEach((panel) => {
          tl.to(panel, { width: "12.5%", duration: 1, ease: "none" })
            .to(panel.querySelector('.inner-content'), { opacity: 1, duration: 0.5 }, "<0.5");
        });
        
        // Add a small pause at the end so the user can read the 2026/27 tile before the section unpins
        tl.to({}, { duration: 1.5 });
      });

      // Mobile/Tablet: Auto-expand, simple horizontal scroll
      gsap.matchMedia().add("(max-width: 1023px)", () => {
        gsap.set('.journey-panel', { width: '200px', flex: 'none' });
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
              className={`journey-panel min-w-0 overflow-hidden border-r ${item.isFuture ? 'border-[#84CC16]' : 'border-white/20'} relative`}
              style={{ width: '3%', flex: 'none' }}
            >
              {/* Inner content given a fixed width to prevent text wrapping jank during GSAP flex expansion */}
              <div className="inner-content w-[180px] h-full flex flex-col justify-between p-4 md:p-6 opacity-0 relative z-10">
                
                {/* Top: Vertical Year */}
                <div 
                  className={`text-4xl md:text-5xl font-light tracking-widest ${item.isFuture ? 'text-[#84CC16]' : 'text-white'}`}
                  style={{ writingMode: 'vertical-rl' }}
                >
                  {item.year}
                </div>
                
                {/* Middle: Description */}
                <p 
                  className={`text-xs md:text-sm font-sans tracking-wide leading-relaxed mt-8 mb-auto ${item.isFuture ? 'text-[#84CC16]' : 'text-white/90'}`}
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



