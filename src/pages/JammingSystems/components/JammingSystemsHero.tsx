import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Import videos/images directly via Vite
import bgVideo from '@/imports/gwr_video_mvp.mp4';
import spearVid from '@/imports/Infinity_Spear.mp4';
import rhinoVid from '@/imports/Hero banner Video.mp4';

const heroSlides = [
  {
    id: 'jamming-systems-main',
    title: 'JAMMING SYSTEMS',
    subtitle: 'Neutralize hostile communications and counter autonomous UAS threats instantly. Multi-frequency, high-power electronic countermeasure architectures.',
    mediaUrl: bgVideo,
    ctaText: 'DEPLOY JAMMING ASSETS',
    ctaLink: '#',
    isVideo: true
  },
  {
    id: 'jamming-spear',
    title: 'INFINITY SPEAR',
    subtitle: '60W Continuous Output . 1.5â€“2.0 km Range.',
    mediaUrl: spearVid,
    ctaText: 'SEE CAPABILITIES',
    ctaLink: '#',
    isVideo: true
  },
  {
    id: 'jamming-rhino',
    title: 'INFINITY RHINO',
    subtitle: '7 km Directional Anti-RTH Interdiction.',
    mediaUrl: rhinoVid,
    ctaText: 'DISCOVER RHINO',
    ctaLink: '#',
    isVideo: true
  },
];

export default function JammingSystemsHero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const slide = heroSlides[currentSlide];

  return (
    <section className="relative w-full min-h-[90vh] overflow-hidden bg-black text-white" style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* 1. Background Video / Image Layer with Crossfade */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={slide.id}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
          className="absolute inset-0 w-full h-full"
        >
          {slide.isVideo ? (
            <video
              autoPlay={!window.matchMedia('(prefers-reduced-motion: reduce)').matches}
              loop
              muted
              playsInline
              preload="metadata"
              className="w-full h-full object-cover opacity-80"
            >
              <source src={slide.mediaUrl} type="video/mp4" />
            </video>
          ) : (
            <img 
              src={slide.mediaUrl} 
              alt={slide.title}
              className="w-full h-full object-cover opacity-80"
            />
          )}
        </motion.div>
      </AnimatePresence>

      {/* 2. Gradient Overlay Layer */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-black/30 to-black/60 pointer-events-none" />

      {/* 3. Staggered Content Animation */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-start text-center px-4 sm:px-6 pt-32 md:pt-40">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.id}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  staggerChildren: 0.15,
                  duration: 0.6,
                  ease: 'easeOut',
                },
              },
              exit: {
                opacity: 0,
                y: -15,
                transition: { duration: 0.4, ease: 'easeIn' },
              },
            }}
            className="flex flex-col items-center max-w-4xl"
          >
            {/* Title */}
            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="text-3xl sm:text-5xl md:text-7xl font-extralight tracking-wider uppercase mb-6"
            >
              {slide.title}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 15 },
                visible: { opacity: 1, y: 0 },
              }}
              className="text-lg md:text-2xl font-light text-gray-300 mb-10 max-w-2xl"
            >
              {slide.subtitle}
            </motion.p>

            {/* Tactical CTA Button - Bottom Center Position */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="mt-16 md:mt-24 w-full"
            >
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full">
                <a
                  href={slide.ctaLink}
                  onClick={(e) => {
                    e.preventDefault();
                    window.scrollTo({
                      top: window.innerHeight * 1.5,
                      behavior: 'smooth'
                    });
                  }}
                  className="relative group px-10 py-4 text-xs font-bold tracking-[0.2em] uppercase transition-colors bg-black/40 backdrop-blur-md text-white hover:text-[#84CC16]"
                >
                  {/* Tactical Corner Accents */}
                  <span className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/60 transition-transform group-hover:border-[#84CC16]" />
                  <span className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/60 transition-transform group-hover:border-[#84CC16]" />
                  <span className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white/60 transition-transform group-hover:border-[#84CC16]" />
                  <span className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/60 transition-transform group-hover:border-[#84CC16]" />

                  {slide.ctaText}
                </a>

                <a
                  href="#"
                  className="relative group px-10 py-4 text-xs font-bold tracking-[0.2em] uppercase transition-colors bg-black/40 backdrop-blur-md text-white hover:text-[#84CC16]"
                >
                  <span className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/60 transition-transform group-hover:border-[#84CC16]" />
                  <span className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/60 transition-transform group-hover:border-[#84CC16]" />
                  <span className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white/60 transition-transform group-hover:border-[#84CC16]" />
                  <span className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/60 transition-transform group-hover:border-[#84CC16]" />
                  DOWNLOAD CAPABILITY BROCHURE
                </a>
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* 4. Large Next Arrow (Right Side) */}
      <div className="hidden md:flex absolute right-8 top-1/2 -translate-y-1/2 z-30">
        <button
          onClick={nextSlide}
          aria-label="Next slide"
          className="relative group p-4 flex items-center justify-center transition-transform hover:scale-110 focus:outline-none"
        >
          {/* Arrow Icon */}
          <svg className="w-12 h-12 sm:w-16 sm:h-16 text-white/70 transition-colors group-hover:text-[#84CC16]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* 5. Large Prev Arrow (Left Side) */}
      <div className="hidden md:flex absolute left-8 top-1/2 -translate-y-1/2 z-30">
        <button
          onClick={prevSlide}
          aria-label="Previous slide"
          className="relative group p-4 flex items-center justify-center transition-transform hover:scale-110 focus:outline-none"
        >
          {/* Arrow Icon (Left facing) */}
          <svg className="w-12 h-12 sm:w-16 sm:h-16 text-white/70 transition-colors group-hover:text-[#84CC16]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      </div>

      
    </section>
  );
}



