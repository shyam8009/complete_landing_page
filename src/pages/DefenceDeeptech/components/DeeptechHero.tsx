import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Import videos
import intelligenceVid from '@/imports/intelligence_video.mp4';
import droneVid from '@/imports/drone_radar_hero_bg.mp4';
import quantumVid from '@/imports/quantum_communication_intro_video.mp4';

const heroSlides = [
  {
    id: 'deeptech-core',
    title: 'DEFENCE DEEPTECH',
    subtitle: 'Cognitive overmatch for the modern battlespace. Fusing AI, Big Data, and advanced Voice Solutions.',
    mediaUrl: intelligenceVid,
    ctaText: 'INITIALIZE AI SYSTEMS',
    ctaLink: '#',
  },
  {
    id: 'deeptech-ai',
    title: 'AI NEURAL ARCHITECTURE',
    subtitle: 'Semantic data routing and predictive analytics at the tactical edge.',
    mediaUrl: droneVid,
    ctaText: 'EXPLORE AI MODELS',
    ctaLink: '#',
  },
  {
    id: 'deeptech-voice',
    title: 'SECURE VOICE PROTOCOLS',
    subtitle: 'Air-gapped natural language processing and voice-to-action telemetry.',
    mediaUrl: quantumVid,
    ctaText: 'DISCOVER NLP',
    ctaLink: '#',
  },
];

export function DeeptechHero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);

  const slide = heroSlides[currentSlide];

  return (
    <section className="relative w-full min-h-[90vh] overflow-hidden bg-black text-white font-sans">
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
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-80"
          >
            <source src={slide.mediaUrl} type="video/mp4" />
          </video>
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
              visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.15, duration: 0.6, ease: 'easeOut' } },
              exit: { opacity: 0, y: -15, transition: { duration: 0.4, ease: 'easeIn' } },
            }}
            className="flex flex-col items-center max-w-4xl"
          >
            {/* Title */}
            <motion.h1
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="text-3xl sm:text-5xl md:text-7xl font-extralight tracking-wider uppercase mb-6"
            >
              {slide.title}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } }}
              className="text-lg md:text-2xl font-light text-gray-300 mb-10 max-w-2xl"
            >
              {slide.subtitle}
            </motion.p>

            {/* Tactical CTA Button - Bottom Center Position */}
            <motion.div
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="absolute bottom-8 md:bottom-16 left-1/2 -translate-x-1/2"
            >
              <a href={slide.ctaLink} className="relative group px-10 py-4 text-xs font-bold tracking-[0.2em] uppercase transition-colors bg-black/40 backdrop-blur-md text-white hover:text-[#84CC16]">
                <span className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/60 transition-transform group-hover:border-[#84CC16]" />
                <span className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/60 transition-transform group-hover:border-[#84CC16]" />
                <span className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white/60 transition-transform group-hover:border-[#84CC16]" />
                <span className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/60 transition-transform group-hover:border-[#84CC16]" />
                {slide.ctaText}
              </a>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* 4. Large Next/Prev Arrows */}
      <div className="hidden md:flex absolute right-8 top-1/2 -translate-y-1/2 z-30">
        <button onClick={nextSlide} className="relative group p-4 flex items-center justify-center transition-transform hover:scale-110">
          <svg className="w-12 h-12 sm:w-16 sm:h-16 text-white/70 transition-colors group-hover:text-[#84CC16]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
      <div className="hidden md:flex absolute left-8 top-1/2 -translate-y-1/2 z-30">
        <button onClick={prevSlide} className="relative group p-4 flex items-center justify-center transition-transform hover:scale-110">
          <svg className="w-12 h-12 sm:w-16 sm:h-16 text-white/70 transition-colors group-hover:text-[#84CC16]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center pointer-events-none">
        <span className="text-white/40 text-[10px] uppercase tracking-widest mb-4 animate-pulse">Scroll to Explore</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/40 to-transparent" />
      </div>
    </section>
  );
}
