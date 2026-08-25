import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, AnimatePresence } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

const INTER = "'Inter', sans-serif";

const DOMAINS = [
  {
    id: 'air',
    tab: 'AIR',
    eyebrow: '[ DOMAIN 01 / 05 ]',
    title: 'Airborne Defense & Aviation',
    desc: 'Equipping aerial defense platforms with autonomous signal intelligence, airborne jammer arrays, and real-time threat neutralization.',
    media: '/assets/domain_airborne_v3.jpeg'
  },
  {
    id: 'land',
    tab: 'LAND',
    eyebrow: '[ DOMAIN 02 / 05 ]',
    title: 'Tactical Land Systems',
    desc: 'Shielding land borders and national critical assets against asymmetric threats, deploying battle-tested Information Warfare networks.',
    media: '/assets/domain_land_v2.jpeg'
  },
  {
    id: 'space',
    tab: 'SPACE',
    eyebrow: '[ DOMAIN 03 / 05 ]',
    title: 'Space & Satellite Systems',
    desc: 'Securing orbital assets and ensuring resilient satellite communications with advanced quantum cryptography and deep-space tracking technology.',
    media: '/assets/domain_space_v2.jpeg'
  },
  {
    id: 'port',
    tab: 'PORT & MARINE',
    eyebrow: '[ DOMAIN 04 / 05 ]',
    title: 'Port & Critical Marine Infrastructure',
    desc: 'Safeguarding commercial and military seaports, container terminals, and vital marine supply routes with automated surveillance grid systems.',
    media: '/assets/domain_marine.jpg'
  },
  {
    id: 'infrastructure',
    tab: 'CRITICAL INFRASTRUCTURE',
    eyebrow: '[ DOMAIN 05 / 05 ]',
    title: 'Critical National Infrastructure',
    desc: 'Protecting power grids, communication hubs, and strategic facilities from cyber-physical attacks and electronic intrusion.',
    media: '/assets/domain_infra.jpg'
  }
];

export default function AboutDomains() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollTriggerRef = useRef<ScrollTrigger | null>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Only pin on desktop to avoid crazy mobile scroll issues
      gsap.matchMedia().add("(min-width: 768px)", () => {
        scrollTriggerRef.current = ScrollTrigger.create({
          trigger: containerRef.current,
          start: "top top",
          end: "+=4000", // 4000px of scrolling for 5 slides
          pin: true,
          scrub: 1,
          onUpdate: (self) => {
            const newIndex = Math.min(4, Math.floor(self.progress * 5));
            setActiveIndex((prev) => prev !== newIndex ? newIndex : prev);
          }
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleTabClick = (index: number) => {
    if (scrollTriggerRef.current && window.innerWidth >= 768) {
      // If pinned on desktop, scroll to the corresponding progress point
      const start = scrollTriggerRef.current.start;
      const end = scrollTriggerRef.current.end;
      const totalScroll = end - start;
      const targetScroll = start + (totalScroll / 5) * index + (totalScroll / 10);
      window.scrollTo({ top: targetScroll, behavior: 'smooth' });
    } else {
      // Direct state update on mobile or if ScrollTrigger isn't active
      setActiveIndex(index);
    }
  };

  const activeDomain = DOMAINS[activeIndex];

  return (
    <section ref={containerRef} className="w-full h-screen bg-[#050505] text-white flex flex-col md:flex-row overflow-hidden z-10 relative border-t border-white/10">
      
      {/* Left Column (Text & Controls) */}
      <div className="w-full md:w-[45%] h-[60%] md:h-full flex flex-col justify-between pt-12 md:py-20 px-6 md:pl-20 md:pr-12 relative z-20">
        
        {/* Animated Text Content */}
        <div className="relative flex-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="absolute inset-0 flex flex-col justify-center"
            >
              <p className="text-xs tracking-[0.2em] text-[#84CC16] mb-4 md:mb-8 font-mono uppercase font-bold">
                {activeDomain.eyebrow}
              </p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 md:mb-8 leading-[1.1] tracking-tight">
                {activeDomain.title}
              </h2>
              <p className="text-base md:text-lg text-white/70 leading-relaxed max-w-xl" style={{ fontFamily: INTER }}>
                {activeDomain.desc}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls (Tabs & Counter) */}
        <div className="shrink-0 pb-6 md:pb-0">
          <div className="flex flex-row md:flex-wrap overflow-x-auto md:overflow-visible gap-2 md:gap-4 mb-8 md:mb-16 hide-scrollbar pr-6 md:pr-0">
            {DOMAINS.map((domain, i) => (
              <button
                key={i}
                onClick={() => handleTabClick(i)}
                className={`relative shrink-0 px-4 py-2 md:px-5 md:py-3 text-[10px] md:text-xs font-mono tracking-widest uppercase transition-all duration-300 border ${
                  activeIndex === i 
                    ? 'border-[#84CC16] text-[#84CC16] bg-[#84CC16]/5' 
                    : 'border-white/20 text-white/50 hover:text-white hover:border-white/50'
                }`}
              >
                {/* Tech Brackets */}
                <div className={`absolute top-0 left-0 w-1.5 h-1.5 border-t border-l ${activeIndex === i ? 'border-[#84CC16]' : 'border-transparent'}`} />
                <div className={`absolute top-0 right-0 w-1.5 h-1.5 border-t border-r ${activeIndex === i ? 'border-[#84CC16]' : 'border-transparent'}`} />
                <div className={`absolute bottom-0 left-0 w-1.5 h-1.5 border-b border-l ${activeIndex === i ? 'border-[#84CC16]' : 'border-transparent'}`} />
                <div className={`absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r ${activeIndex === i ? 'border-[#84CC16]' : 'border-transparent'}`} />
                
                {domain.tab}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <div className="w-2.5 h-2.5 bg-[#84CC16]" />
            <span className="text-sm md:text-lg font-mono font-bold">{activeIndex + 1} / {DOMAINS.length}</span>
          </div>
        </div>
      </div>

      {/* Right Column (Media Wipe) */}
      <div className="w-full md:w-[55%] h-[40%] md:h-full relative overflow-hidden bg-[#0a0a0a] z-10">
        <AnimatePresence>
          <motion.div
            key={activeIndex}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-20%', opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0"
          >
            <div 
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${activeDomain.media})` }}
            />
            {/* Desktop Fade Gradient */}
            <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/20 to-transparent" />
            {/* Mobile Fade Gradient */}
            <div className="block md:hidden absolute inset-0 bg-gradient-to-b from-[#050505] via-[#050505]/20 to-transparent" />
          </motion.div>
        </AnimatePresence>
      </div>
      
    </section>
  );
}




