import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ArrowRight, ChevronDown, Check } from 'lucide-react';
import celImage from '@/imports/news_cel_agreement.png';

export function NewsroomPage() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsFilterOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleFilter = (filter: string) => {
    setSelectedFilters(prev => 
      prev.includes(filter) 
        ? prev.filter(f => f !== filter)
        : [...prev, filter]
    );
  };

  const fadeUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const FILTER_OPTIONS = ['AWARDS', 'BLOG', 'CASE STUDIES', 'MEDIA', 'PRESS RELEASE', 'CONTRACTS', 'ELECTRONIC WARFARE'];

  return (
    <div className="bg-[#F4F4F4] min-h-screen pt-32 pb-20 text-black relative">
        {/* Tactical Grid Background Overlay */}
        <div 
          className="fixed inset-0 pointer-events-none opacity-20" 
          style={{ 
            backgroundImage: 'linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)', 
            backgroundSize: '50px 50px' 
          }} 
        />

        <div className="container mx-auto px-4 md:px-8 relative z-10 max-w-7xl">
            {/* HERO SECTION */}
            <motion.div {...fadeUp} className="mb-16 flex flex-col md:flex-row justify-between md:items-end gap-8">
                <div>
                    <span className="font-mono text-[#666666] tracking-widest text-xs block mb-4 uppercase">[ WHAT WE'VE BEEN UP TO ]</span>
                    <h1 className="text-5xl md:text-7xl font-light tracking-tight text-black">Newsroom</h1>
                </div>
                <div className="md:w-1/2">
                    <p className="text-2xl md:text-3xl font-light text-black md:text-right leading-tight max-w-lg ml-auto">
                        Explore the latest news and developments from Sahana Defence
                    </p>
                </div>
            </motion.div>

            {/* FILTER CONTROLS */}
            <motion.div {...fadeUp} className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-6">
                
                {/* Custom Filter Dropdown */}
                <div className="relative w-full md:w-72" ref={dropdownRef}>
                    <button 
                        onClick={() => setIsFilterOpen(!isFilterOpen)}
                        className="w-full bg-[#EAEAEA] border border-[#CCCCCC] px-4 py-3 flex justify-between items-center hover:bg-[#E0E0E0] transition-colors"
                    >
                        <span className="font-mono text-[10px] font-bold text-[#666666] uppercase tracking-widest">Filter By</span>
                        <ChevronDown className={`w-4 h-4 text-[#666666] transition-transform duration-300 ${isFilterOpen ? 'rotate-180' : ''}`} />
                    </button>
                    
                    <AnimatePresence>
                        {isFilterOpen && (
                            <motion.div 
                                initial={{ opacity: 0, y: -5 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -5 }}
                                transition={{ duration: 0.2 }}
                                className="absolute top-full left-0 w-full bg-[#EAEAEA] border-b border-l border-r border-[#CCCCCC] z-20 shadow-lg"
                            >
                                <div className="p-2 flex flex-col gap-1 max-h-64 overflow-y-auto custom-scrollbar">
                                    {FILTER_OPTIONS.map(option => (
                                        <label key={option} className="flex items-center gap-3 px-3 py-2 hover:bg-black/5 cursor-pointer transition-colors group" onClick={() => toggleFilter(option)}>
                                            <div className={`w-4 h-4 border flex items-center justify-center transition-colors ${selectedFilters.includes(option) ? 'bg-[#3C5929] border-[#3C5929]' : 'border-[#999999] group-hover:border-[#3C5929]'}`}>
                                                {selectedFilters.includes(option) && <Check className="w-3 h-3 text-white" />}
                                            </div>
                                            <span className="font-mono text-[11px] text-[#333333] tracking-wider uppercase">{option}</span>
                                        </label>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Custom Search Bar with Brackets */}
                <div className="w-full md:w-80 relative group">
                    {/* Corner Brackets */}
                    <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#666666] pointer-events-none" />
                    <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[#666666] pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-[#666666] pointer-events-none" />
                    <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#666666] pointer-events-none" />
                    
                    <div className="flex items-center bg-[#EAEAEA] border border-[#CCCCCC]/50 px-4 py-3">
                        <Search className="w-4 h-4 text-[#666666] mr-3 group-focus-within:text-[#3C5929] transition-colors" />
                        <input 
                            type="text" 
                            placeholder="SEARCH" 
                            className="w-full bg-transparent text-[#333333] placeholder-[#999999] font-mono text-[11px] font-bold tracking-widest uppercase focus:outline-none" 
                        />
                    </div>
                </div>
            </motion.div>

            {/* FEATURED RELEASE CARD */}
            <motion.div {...fadeUp} className="bg-[#1A1A1A] text-white p-0 mb-12 group transition-all duration-300 cursor-pointer relative overflow-hidden flex flex-col md:flex-row shadow-xl">
                <div className="md:w-[40%] relative h-64 md:h-auto overflow-hidden bg-black">
                    <img 
                      src={celImage} 
                      alt="Sahana Defence Zooms on Bagging ?24.69 Cr Order" 
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" 
                    />
                </div>
                <div className="md:w-[60%] flex flex-col justify-center p-8 md:p-12">
                    <div className="flex items-center gap-4 mb-6">
                        <span className="font-mono text-xs text-[#3C5929] border border-[#3C5929] px-2 py-1 tracking-widest bg-[#3C5929]/10 uppercase">Press Release</span>
                        <span className="font-mono text-xs text-[#A1A1A1]">AUGUST 20, 2026</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight group-hover:text-[#3C5929] transition-colors">Sahana Defence Zooms on Bagging ?24.69 Cr Order for Advanced Drone Detection System.</h2>
                    <p className="text-[#A1A1A1] mb-10 font-mono text-sm leading-relaxed max-w-2xl">Central Electronics Limited (CEL) mandates Sahana Defence to design, supply, and commission an integrated RF and radar-based drone detection and jamming system, cementing our role in 'Aatma Nirbhar Bharat'.</p>
                    
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
                <motion.div variants={fadeUp} className="bg-[#1A1A1A] text-white p-8 group transition-colors flex flex-col cursor-pointer min-h-[300px]">
                    <div className="flex justify-between items-center mb-6">
                        <span className="font-mono text-[10px] text-white border border-white/20 px-2 py-1 tracking-widest uppercase">Contract</span>
                        <span className="font-mono text-[10px] text-[#A1A1A1] tracking-widest">JUL 04, 2025</span>
                    </div>
                    <h3 className="text-2xl font-light text-white mb-4 group-hover:text-[#3C5929] transition-colors leading-tight">Sahana System Subsidiary Secures ?8.01 Cr Contract for Indian Navy RF Infrastructure.</h3>
                    <p className="text-[#A1A1A1] font-mono text-sm mb-8 flex-grow leading-relaxed">Upgrading critical non-RF infrastructure for the Indian Navy's RF measurement systems to ensure optimal maritime communication readiness.</p>
                    <div className="mt-auto">
                        <button className="border-b border-[#3C5929] text-white hover:text-[#3C5929] font-mono text-xs pb-1 tracking-widest transition-colors inline-flex items-center gap-2">
                            READ ARTICLE <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </motion.div>

                {/* Grid Article 2 */}
                <motion.div variants={fadeUp} className="bg-[#1A1A1A] text-white p-8 group transition-colors flex flex-col cursor-pointer min-h-[300px]">
                    <div className="flex justify-between items-center mb-6">
                        <span className="font-mono text-[10px] text-white border border-white/20 px-2 py-1 tracking-widest uppercase">Deployment</span>
                        <span className="font-mono text-[10px] text-[#A1A1A1] tracking-widest">JUL 10, 2023</span>
                    </div>
                    <h3 className="text-2xl font-light text-white mb-4 group-hover:text-[#3C5929] transition-colors leading-tight">Tactical Anti-Drone Solutions Deployed for Large-Scale Public Security.</h3>
                    <p className="text-[#A1A1A1] font-mono text-sm mb-8 flex-grow leading-relaxed">Infinity Radar, a Sahana brand, successfully neutralizes aerial threats using advanced long-range anti-drone technology during high-profile national events.</p>
                    <div className="mt-auto">
                        <button className="border-b border-[#3C5929] text-white hover:text-[#3C5929] font-mono text-xs pb-1 tracking-widest transition-colors inline-flex items-center gap-2">
                            READ ARTICLE <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </motion.div>
                
                {/* Grid Article 3 */}
                <motion.div variants={fadeUp} className="bg-[#1A1A1A] text-white p-8 group transition-colors flex flex-col cursor-pointer min-h-[300px]">
                    <div className="flex justify-between items-center mb-6">
                        <span className="font-mono text-[10px] text-white border border-white/20 px-2 py-1 tracking-widest uppercase">Sovereign AI</span>
                        <span className="font-mono text-[10px] text-[#A1A1A1] tracking-widest">SEP 15, 2025</span>
                    </div>
                    <h3 className="text-2xl font-light text-white mb-4 group-hover:text-[#3C5929] transition-colors leading-tight">Advancing Information Warfare with Indigenous AI-Driven Signal Intelligence.</h3>
                    <p className="text-[#A1A1A1] font-mono text-sm mb-8 flex-grow leading-relaxed">Sahana Defence announces breakthroughs in machine learning classification for rapid threat identification in congested RF environments.</p>
                    <div className="mt-auto">
                        <button className="border-b border-[#3C5929] text-white hover:text-[#3C5929] font-mono text-xs pb-1 tracking-widest transition-colors inline-flex items-center gap-2">
                            READ ARTICLE <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </motion.div>

                {/* Grid Article 4 */}
                <motion.div variants={fadeUp} className="bg-[#1A1A1A] text-white p-8 group transition-colors flex flex-col cursor-pointer min-h-[300px]">
                    <div className="flex justify-between items-center mb-6">
                        <span className="font-mono text-[10px] text-white border border-white/20 px-2 py-1 tracking-widest uppercase">Electronic Warfare</span>
                        <span className="font-mono text-[10px] text-[#A1A1A1] tracking-widest">MAR 22, 2026</span>
                    </div>
                    <h3 className="text-2xl font-light text-white mb-4 group-hover:text-[#3C5929] transition-colors leading-tight">Next-Gen Anti-Jamming GPS Systems Built for Contested Environments.</h3>
                    <p className="text-[#A1A1A1] font-mono text-sm mb-8 flex-grow leading-relaxed">Developing robust positioning, navigation, and timing (PNT) assurance modules to protect critical assets from electronic spoofing.</p>
                    <div className="mt-auto">
                        <button className="border-b border-[#3C5929] text-white hover:text-[#3C5929] font-mono text-xs pb-1 tracking-widest transition-colors inline-flex items-center gap-2">
                            READ ARTICLE <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </motion.div>
            </motion.div>

            {/* INTERACTIVE LOAD MORE */}
            <motion.div {...fadeUp} className="flex justify-center mb-24">
                <button className="border border-[#3C5929] text-[#3C5929] hover:bg-[#3C5929] hover:text-white font-mono text-sm px-8 py-3 tracking-widest transition-all">
                    LOAD MORE DISPATCHES
                </button>
            </motion.div>

            {/* BOTTOM CALL TO ACTION BANNER */}
            <motion.div {...fadeUp} className="bg-[#1A1A1A] text-white border-t-2 border-[#3C5929] p-8 md:p-16 relative overflow-hidden shadow-xl">
                <div className="absolute top-0 right-0 p-4 opacity-5">
                    <svg width="180" height="180" viewBox="0 0 24 24" fill="none" stroke="#3C5929" strokeWidth="1"><path d="M12 2v20M2 12h20M12 12m-8 0a8 8 0 1 0 16 0a8 8 0 1 0 -16 0"/></svg>
                </div>
                <div className="relative z-10 max-w-3xl">
                    <h2 className="text-3xl md:text-4xl font-light text-white mb-6 leading-tight">BUILDING SOVEREIGN DEFENCE TECH FOR MISSION-CRITICAL OPERATIONS</h2>
                    <p className="text-[#A1A1A1] font-mono text-sm mb-10 max-w-xl leading-relaxed">Partner with Sahana Defence for advanced electronic warfare and AI systems.</p>
                    <div className="flex flex-wrap gap-4">
                        <button onClick={() => window.location.href = '/investors/key-contact'} className="bg-[#3C5929] hover:bg-[#4E7335] text-white font-mono text-[11px] font-bold px-8 py-4 tracking-[0.2em] transition-colors">
                            INQUIRE FOR PROCUREMENT
                        </button>
                        <button className="border border-white/30 text-white hover:bg-white hover:text-black font-mono text-[11px] font-bold px-8 py-4 tracking-[0.2em] transition-colors">
                            OPEN ROLES
                        </button>
                    </div>
                </div>
            </motion.div>
        </div>
    </div>
  );
}
