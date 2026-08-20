import React from 'react';
import { motion } from 'framer-motion';
import heroBgVideo from '@/imports/intelligence_video.mp4';
import { TechCTA } from '@/components/TechCTA';

export function ConnectivityHero() {
  return (
    <section className="relative w-full min-h-[90vh] overflow-hidden bg-black text-white" style={{ fontFamily: "'Inter', sans-serif" }}>
      
      {/* Background Video Layer */}
      <motion.div
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
          className="w-full h-full object-cover opacity-80"
        >
          <source src={heroBgVideo} type="video/mp4" />
        </video>
      </motion.div>

      {/* Gradient Overlay Layer */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-black/30 to-black/60 pointer-events-none" />

      {/* Content Animation Layer - Centered like DroneSystems */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4 sm:px-6 pt-20">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { staggerChildren: 0.15, duration: 0.6, ease: 'easeOut' },
            }
          }}
          className="flex flex-col items-center max-w-4xl"
        >
          
          <motion.div 
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-black/40 backdrop-blur-md mb-8"
          >
            <div className="w-2 h-2 rounded-full bg-[#84CC16] animate-pulse" />
            <span className="text-xs font-bold tracking-[2px] text-[#84CC16] uppercase">
              CONNECTIVITY & INFRASTRUCTURE
            </span>
          </motion.div>

          {/* Title - Using DroneSystems Font Styling */}
          <motion.h1
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="text-4xl sm:text-5xl md:text-6xl font-extralight tracking-wider uppercase mb-6"
          >
            Digital <br />
            <span className="font-bold">Foundation</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } }}
            className="text-lg md:text-xl font-light text-gray-300 mb-10 max-w-3xl leading-relaxed"
          >
            Every sensor, dashboard, and command system depends on infrastructure that simply works: securely connected, reliably available, and built to scale.
          </motion.p>

          <motion.div
            variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } }}
            className="mb-12"
          >
            <TechCTA>
              ARCHITECT YOUR INFRASTRUCTURE
            </TechCTA>
          </motion.div>
          
          <motion.div 
            variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } }}
            className="flex flex-col sm:flex-row gap-6 md:gap-12 p-6 rounded-lg border border-white/10 bg-black/40 backdrop-blur-xl"
          >
            <div>
              <div className="text-2xl font-bold text-white tracking-widest uppercase">Built for Scale</div>
              <div className="text-xs font-medium text-[#84CC16] uppercase tracking-widest mt-1">Cloud-Native & Serverless</div>
            </div>
            <div className="hidden sm:block w-px bg-white/20" /><div className="block sm:hidden h-px w-full bg-white/20" />
            <div>
              <div className="text-2xl font-bold text-white tracking-widest uppercase">Security First</div>
              <div className="text-xs font-medium text-[#84CC16] uppercase tracking-widest mt-1">Native Compliance</div>
            </div>
          </motion.div>

        </motion.div>
      </div>
      
    </section>
  );
}
