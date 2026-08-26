import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search, ArrowRight } from 'lucide-react';
import celImage from '@/imports/news_cel_agreement.png';

export function NewsroomPage() {
  const [selectedCategory, setSelectedCategory] = useState("All Categories");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="bg-[#0A0A0A] min-h-screen pt-32 pb-20 text-white relative">
        {/* Tactical Grid Background Overlay */}
        <div 
          className="fixed inset-0 pointer-events-none opacity-20" 
          style={{ 
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)', 
            backgroundSize: '50px 50px' 
          }} 
        />

        <div className="container mx-auto px-4 md:px-8 relative z-10 max-w-7xl">
            {/* HERO SECTION */}
            <motion.div {...fadeUp} className="mb-16">
                <span className="font-mono text-[#A1A1A1] tracking-widest text-sm block mb-4 uppercase">[ TACTICAL DISPATCHES & INTELLIGENCE ]</span>
                <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-white uppercase">Newsroom</h1>
                <p className="text-[#A1A1A1] text-lg max-w-2xl font-mono">Explore the latest deployments, contract awards, and technological breakthroughs from Sahana Defence.</p>
            </motion.div>

            {/* FILTER CONTROLS */}
            <motion.div {...fadeUp} className="flex flex-col md:flex-row justify-between items-center mb-12 gap-4 border-b border-white/10 pb-6">
                <div className="flex gap-4 w-full md:w-auto overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
                    {["All Categories", "Electronic Warfare", "Contracts", "AI"].map(cat => (
                        <button 
                            key={cat}
                            onClick={() => setSelectedCategory(cat)}
                            className={`px-4 py-2 font-mono text-sm border transition-colors whitespace-nowrap ${selectedCategory === cat ? 'border-[#3C5929] text-white bg-[#3C5929]/20' : 'border-white/20 text-[#A1A1A1] hover:border-[#3C5929] hover:text-white'}`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
                <div className="w-full md:w-auto relative group">
                    <Search className="w-4 h-4 text-[#A1A1A1] absolute left-3 top-1/2 -translate-y-1/2 group-focus-within:text-[#3C5929]" />
                    <input 
                      type="text" 
                      placeholder="Search dispatches (Press Q)" 
                      className="w-full md:w-72 bg-[#121212] border border-white/20 text-white pl-10 pr-4 py-2 font-mono text-sm focus:outline-none focus:border-[#3C5929] transition-colors" 
                    />
                </div>
            </motion.div>

            {/* FEATURED RELEASE CARD */}
            <motion.div {...fadeUp} className="bg-[#121212] border border-white/10 p-6 md:p-8 mb-12 group hover:border-[#3C5929]/50 transition-colors cursor-pointer relative overflow-hidden flex flex-col md:flex-row gap-8">
                <div className="md:w-1/2 relative h-64 md:h-auto overflow-hidden bg-black border border-white/5">
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-transparent z-10 md:hidden" />
                    <img 
                      src={celImage} 
                      alt="Sahana Defence Zooms on Bagging ₹24.69 Cr Order" 
                      className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" 
                    />
                </div>
                <div className="md:w-1/2 flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-4">
                        <span className="font-mono text-xs text-[#3C5929] border border-[#3C5929] px-2 py-1 tracking-widest bg-[#3C5929]/10">[ CONTRACT AWARD ]</span>
                        <span className="font-mono text-xs text-[#A1A1A1]">AUGUST 20, 2026</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight group-hover:text-[#3C5929] transition-colors">Sahana Defence Zooms on Bagging ₹24.69 Cr Order for Advanced Drone Detection System.</h2>
                    <p className="text-[#A1A1A1] mb-8 font-mono text-sm leading-relaxed">Central Electronics Limited (CEL) mandates Sahana Defence to design, supply, and commission an integrated RF and radar-based drone detection and jamming system, cementing our role in 'Aatma Nirbhar Bharat'.</p>
                    
                    <div className="mt-auto">
                        <button className="bg-[#3C5929] hover:bg-[#4E7335] text-white font-mono text-sm px-6 py-3 tracking-widest transition-colors inline-flex items-center gap-2">
                            READ FULL RELEASE <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>
            </motion.div>

            {/* NEWSFEED GRID */}
            <motion.div 
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              transition={{ staggerChildren: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16"
            >
                {/* Grid Article 1 */}
                <motion.div variants={fadeUp} className="bg-[#121212] border border-white/10 p-6 group hover:border-[#3C5929]/50 transition-colors flex flex-col cursor-pointer min-h-[300px]">
                    <div className="flex justify-between items-center mb-6">
                        <span className="font-mono text-xs text-white bg-white/10 px-2 py-1 tracking-widest">[ INDIAN NAVY ]</span>
                        <span className="font-mono text-xs text-[#A1A1A1]">JUL 04, 2025</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#3C5929] transition-colors">Sahana System Subsidiary Secures ₹8.01 Cr Contract for Indian Navy RF Infrastructure.</h3>
                    <p className="text-[#A1A1A1] font-mono text-sm mb-8 flex-grow">Upgrading critical non-RF infrastructure for the Indian Navy's RF measurement systems to ensure optimal maritime communication readiness.</p>
                    <div className="mt-auto">
                        <button className="border border-[#3C5929] text-white hover:bg-[#3C5929] font-mono text-xs px-4 py-2 tracking-widest transition-colors inline-flex items-center gap-2">
                            READ ARTICLE <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </motion.div>

                {/* Grid Article 2 */}
                <motion.div variants={fadeUp} className="bg-[#121212] border border-white/10 p-6 group hover:border-[#3C5929]/50 transition-colors flex flex-col cursor-pointer min-h-[300px]">
                    <div className="flex justify-between items-center mb-6">
                        <span className="font-mono text-xs text-white bg-white/10 px-2 py-1 tracking-widest">[ DEPLOYMENT ]</span>
                        <span className="font-mono text-xs text-[#A1A1A1]">JUL 10, 2023</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#3C5929] transition-colors">Tactical Anti-Drone Solutions Deployed for Large-Scale Public Security.</h3>
                    <p className="text-[#A1A1A1] font-mono text-sm mb-8 flex-grow">Infinity Radar, a Sahana brand, successfully neutralizes aerial threats using advanced long-range anti-drone technology during high-profile national events.</p>
                    <div className="mt-auto">
                        <button className="border border-[#3C5929] text-white hover:bg-[#3C5929] font-mono text-xs px-4 py-2 tracking-widest transition-colors inline-flex items-center gap-2">
                            READ ARTICLE <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </motion.div>
                
                {/* Grid Article 3 */}
                <motion.div variants={fadeUp} className="bg-[#121212] border border-white/10 p-6 group hover:border-[#3C5929]/50 transition-colors flex flex-col cursor-pointer min-h-[300px]">
                    <div className="flex justify-between items-center mb-6">
                        <span className="font-mono text-xs text-white bg-white/10 px-2 py-1 tracking-widest">[ SOVEREIGN AI ]</span>
                        <span className="font-mono text-xs text-[#A1A1A1]">SEP 15, 2025</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#3C5929] transition-colors">Advancing Information Warfare with Indigenous AI-Driven Signal Intelligence.</h3>
                    <p className="text-[#A1A1A1] font-mono text-sm mb-8 flex-grow">Sahana Defence announces breakthroughs in machine learning classification for rapid threat identification in congested RF environments.</p>
                    <div className="mt-auto">
                        <button className="border border-[#3C5929] text-white hover:bg-[#3C5929] font-mono text-xs px-4 py-2 tracking-widest transition-colors inline-flex items-center gap-2">
                            READ ARTICLE <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </motion.div>

                {/* Grid Article 4 */}
                <motion.div variants={fadeUp} className="bg-[#121212] border border-white/10 p-6 group hover:border-[#3C5929]/50 transition-colors flex flex-col cursor-pointer min-h-[300px]">
                    <div className="flex justify-between items-center mb-6">
                        <span className="font-mono text-xs text-white bg-white/10 px-2 py-1 tracking-widest">[ ELECTRONIC WARFARE ]</span>
                        <span className="font-mono text-xs text-[#A1A1A1]">MAR 22, 2026</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#3C5929] transition-colors">Next-Gen Anti-Jamming GPS Systems Built for Contested Environments.</h3>
                    <p className="text-[#A1A1A1] font-mono text-sm mb-8 flex-grow">Developing robust positioning, navigation, and timing (PNT) assurance modules to protect critical assets from electronic spoofing.</p>
                    <div className="mt-auto">
                        <button className="border border-[#3C5929] text-white hover:bg-[#3C5929] font-mono text-xs px-4 py-2 tracking-widest transition-colors inline-flex items-center gap-2">
                            READ ARTICLE <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </motion.div>
            </motion.div>

            {/* INTERACTIVE LOAD MORE */}
            <motion.div {...fadeUp} className="flex justify-center mb-24">
                <button className="border border-[#3C5929] text-white hover:bg-[#3C5929] font-mono text-sm px-8 py-3 tracking-widest transition-all hover:shadow-[0_0_15px_rgba(60,89,41,0.4)]">
                    LOAD MORE DISPATCHES
                </button>
            </motion.div>

            {/* BOTTOM CALL TO ACTION BANNER */}
            <motion.div {...fadeUp} className="bg-[#121212] border-t border-[#3C5929] p-8 md:p-12 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-5">
                    <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="#3C5929" strokeWidth="1"><path d="M12 2v20M2 12h20M12 12m-8 0a8 8 0 1 0 16 0a8 8 0 1 0 -16 0"/></svg>
                </div>
                <div className="relative z-10 max-w-3xl">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 uppercase">BUILDING SOVEREIGN DEFENCE TECH FOR MISSION-CRITICAL OPERATIONS</h2>
                    <p className="text-[#A1A1A1] font-mono text-sm mb-8">Partner with Sahana Defence for advanced electronic warfare and AI systems.</p>
                    <div className="flex flex-wrap gap-4">
                        <button onClick={() => window.location.href = '/investors/key-contact'} className="bg-[#3C5929] hover:bg-[#4E7335] text-white font-mono text-sm px-6 py-3 tracking-widest transition-colors">
                            INQUIRE FOR PROCUREMENT
                        </button>
                        <button className="border border-white/30 text-white hover:bg-white hover:text-black font-mono text-sm px-6 py-3 tracking-widest transition-colors">
                            OPEN ROLES
                        </button>
                    </div>
                </div>
            </motion.div>
        </div>
    </div>
  );
}
