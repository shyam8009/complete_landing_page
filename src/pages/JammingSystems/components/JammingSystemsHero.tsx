import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import bgVideo from '@/imports/gwr_video_mvp.mp4'; // Placeholder since we don't have a 3D abstract RF field video

const heroSlides = [
  {
    id: 'jamming-hero',
    title: 'JAMMING SYSTEMS',
    subtitle: 'Neutralize hostile communications and counter autonomous UAS threats instantly. Multi-frequency, high-power electronic countermeasure architectures built for tactical field superiority.',
    mediaUrl: bgVideo,
    ctaText: 'DEPLOY JAMMING ASSETS',
    ctaLink: '#',
    isVideo: true
  }
];

export default function JammingSystemsHero() {
  const slide = heroSlides[0];

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black text-white" style={{ fontFamily: "'Inter', sans-serif" }}>
      <AnimatePresence mode="popLayout">
        <motion.div
          key={slide.id}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
          className="absolute inset-0 w-full h-full"
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className="w-full h-full object-cover opacity-80 object-right"
          >
            <source src={slide.mediaUrl} type="video/mp4" />
          </video>
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 z-10 bg-gradient-to-r from-black via-black/80 to-transparent pointer-events-none" />

      <div className="relative z-20 flex flex-col justify-center h-full px-6 md:px-12 lg:px-24 mt-12 max-w-[1400px] mx-auto text-left">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.id}
            initial="hidden"
            animate="visible"
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
            }}
            className="flex flex-col items-start max-w-3xl"
          >
            <motion.div
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-[#84CC16] animate-pulse"></span>
              <span className="text-[#84CC16] font-mono text-xs tracking-[0.2em] uppercase">
                ELECTRONIC WARFARE / JAMMING SYSTEMS
              </span>
            </motion.div>

            <motion.h1
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight uppercase mb-6 leading-[1.1]"
            >
              {slide.title}
            </motion.h1>

            <motion.p
              variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } }}
              className="text-lg md:text-xl font-light text-white/70 mb-10 max-w-2xl leading-relaxed"
            >
              {slide.subtitle}
            </motion.p>

            <motion.div
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            >
              <a
                href={slide.ctaLink}
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: window.innerHeight * 1.5, behavior: 'smooth' });
                }}
                className="relative group px-10 py-4 text-xs font-bold tracking-[0.2em] uppercase transition-colors bg-black/40 backdrop-blur-md text-white hover:text-black hover:bg-[#84CC16] inline-flex"
              >
                <span className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/60 transition-transform group-hover:border-transparent" />
                <span className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/60 transition-transform group-hover:border-transparent" />
                <span className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white/60 transition-transform group-hover:border-transparent" />
                <span className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/60 transition-transform group-hover:border-transparent" />
                {slide.ctaText}
              </a>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
      
      <div className="absolute bottom-10 left-12 z-30 flex flex-col items-start pointer-events-none opacity-50">
        <span className="text-white text-[10px] uppercase tracking-widest mb-4 font-mono">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent ml-[20px]" />
      </div>
    </section>
  );
}
