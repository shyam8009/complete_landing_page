import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import qkdVid from '@/imports/quantum_communication_intro_video.mp4';
import pqcVid from '@/imports/surveillance_radar_hero_bg.mp4';

const heroSlides = [
  {
    id: 'qkd',
    title: 'QKD Systems',
    subtitle: 'Quantum Key Distribution Networks',
    mediaUrl: qkdVid,
    ctaText: 'EXPLORE QKD',
    ctaLink: '/quantum-technology-solutions/quantum-communication',
  },
  {
    id: 'pqc',
    title: 'Post-Quantum Crypto',
    subtitle: 'Future-Proof Encryption Standards',
    mediaUrl: pqcVid,
    ctaText: 'SEE PQC',
    ctaLink: '/quantum-technology-solutions/quantum-communication',
  }
];

export default function QuantumCommunicationHero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const slide = heroSlides[currentSlide];

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black text-white" style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* 1. Background Video Layer with Crossfade */}
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
            preload="metadata"
            className="w-full h-full object-cover opacity-80"
          >
            <source src={slide.mediaUrl} type="video/mp4" />
          </video>
        </motion.div>
      </AnimatePresence>

      {/* 2. Gradient Overlay Layer */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-black/30 to-black/60 pointer-events-none" />

      {/* 3. Content Animation */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-6 mt-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            <div className="inline-flex items-center gap-3 px-3 py-1.5 rounded-full mb-6" 
              style={{ backgroundColor: 'rgba(132,204,22,0.1)', border: '1px solid rgba(132,204,22,0.2)' }}>
              <span className="w-2 h-2 rounded-full bg-[#84CC16] animate-pulse shadow-[0_0_10px_#84CC16]" />
              <span className="text-[11px] font-mono tracking-widest uppercase text-[#84CC16] font-bold">
                Quantum Communication
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-tight text-white mb-4 leading-none" style={{ textShadow: '0 4px 20px rgba(0,0,0,0.5)' }}>
              {slide.title}
            </h1>
            
            <p className="text-lg md:text-xl text-neutral-300 font-light max-w-2xl mb-8 tracking-wide drop-shadow-md">
              {slide.subtitle}
            </p>

            <button 
              onClick={() => { window.location.href = slide.ctaLink; }}
              className="bg-[#84CC16] inline-flex items-center justify-center px-8 py-4 rounded-sm text-sm font-bold uppercase tracking-widest text-[#050505] transition-all hover:bg-white"
            >
              {slide.ctaText}
              <svg className="w-5 h-5 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </button>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* 4. Controls */}
      <div className="absolute z-30 bottom-12 left-0 right-0 flex justify-center items-center gap-8 pointer-events-none">
        <button 
          onClick={prevSlide}
          className="pointer-events-auto w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors backdrop-blur-sm group"
        >
          <svg className="w-5 h-5 text-white/70 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 19l-7-7 7-7" /></svg>
        </button>
        
        <div className="flex gap-3 pointer-events-auto">
          {heroSlides.map((_, i) => (
            <button 
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${i === currentSlide ? 'w-8 bg-[#84CC16]' : 'w-2 bg-white/20 hover:bg-white/40'}`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        <button 
          onClick={nextSlide}
          className="pointer-events-auto w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors backdrop-blur-sm group"
        >
          <svg className="w-5 h-5 text-white/70 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5l7 7-7 7" /></svg>
        </button>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#000000] to-transparent z-10 pointer-events-none" />
    </section>
  );
}
