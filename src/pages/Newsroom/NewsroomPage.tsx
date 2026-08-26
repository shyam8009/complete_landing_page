import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ArrowRight, ChevronDown, Check, ChevronLeft, ChevronRight } from 'lucide-react';
import celImage from '@/imports/news_cel_agreement.png';
import celSigningImg from '@/imports/news_cel_signing.png';
import event1Img from '@/imports/event1_military.png';
import event3Img from '@/imports/event3_expo.png';
import award1Img from '@/imports/award1.png';
import award2Img from '@/imports/award2.png';
import spaceDay1Img from '@/imports/space_day_1.jpeg';
import spaceDay2Img from '@/imports/space_day_2.jpeg';

// Helper component for rendering multiple images as a slider
const ImageSlider = ({ images }: { images: string[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3500); // Auto slide every 3.5s
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="w-full h-full relative overflow-hidden group/slider bg-black">
      {images.map((img, idx) => (
        <img
          key={idx}
          src={img}
          alt={`Slide ${idx + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            idx === currentIndex ? 'opacity-90' : 'opacity-0'
          } group-hover/slider:scale-105 transition-transform`}
        />
      ))}
      
      {/* Navigation Controls */}
      <div className="absolute inset-x-0 bottom-4 flex justify-center items-center gap-2 z-10">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={(e) => {
              e.stopPropagation(); // Prevent clicking the card link
              setCurrentIndex(idx);
            }}
            className={`h-2 rounded-full transition-all duration-300 ${
              idx === currentIndex ? 'w-6 bg-[#3C5929]' : 'w-2 bg-white/70 hover:bg-white'
            } shadow-sm`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

const NEWS_ITEMS = [
  {
    id: 1,
    category: 'PRESS RELEASE',
    date: 'JUN 26, 2026',
    title: 'Sahana Defence Signs Strategic Manufacturing Agreement with CEL',
    description: "Sahana Defence has entered into a Contract Agreement with Central Electronics Limited (CEL) to expand India's indigenous defence manufacturing capabilities. The partnership will support the establishment of a dedicated facility focused on Electronic Warfare systems, weapon systems, defence peripherals, and advanced DefenceTech solutions, reinforcing the nation's vision for self-reliance in defence production.",
    image: celSigningImg,
    link: '#'
  },
  {
    id: 7,
    category: 'EVENTS',
    date: 'AUG 23, 2026',
    title: 'Sahana Defence showcased its capabilities at National Space Day 2026',
    description: "Sahana Defence marked its presence at the event by presenting its work and contributions to India's evolving space and defence ecosystem before distinguished leaders and industry stakeholders.",
    images: [spaceDay1Img, spaceDay2Img],
    link: '#'
  },
  {
    id: 2,
    category: 'EVENTS',
    date: 'NOV 26, 2025',
    title: 'Sahana showcased advanced drone and anti-drone capabilities at the Military-Civil Fusion Seminar',
    description: "An overview of Sahana's defence innovations in UAS and C-UAS systems, highlighting strategic impact, expert validation, and contributions to future-ready warfare capabilities.",
    image: event1Img,
    link: 'https://www.linkedin.com/feed/update/urn:li:activity:7400056268515770368'
  },
  {
    id: 3,
    category: 'EVENTS',
    date: 'OCT 12, 2025',
    title: 'Sahana highlighted its defence technology leadership at the SIDM expo, reinforcing Make in India initiative',
    description: "Insights from Sahana's defence leadership on advancing electronic warfare capabilities through in-house R&D, enabling mission-ready solutions aligned with India's self-reliance vision.",
    image: celImage,
    link: 'https://www.linkedin.com/feed/update/urn:li:activity:7377605428660170752'
  },
  {
    id: 4,
    category: 'EVENTS',
    date: 'SEP 05, 2025',
    title: 'Sahana demonstrated operational defence capabilities at the expo, led from its Defence Tech leadership',
    description: 'An inside view of how Sahana bridges field experience with product innovation, enabling meaningful defence engagements and showcasing operational readiness to key stakeholders.',
    image: event3Img,
    link: 'https://www.linkedin.com/feed/update/urn:li:activity:7376576020293951488'
  },
  {
    id: 5,
    category: 'AWARDS',
    date: '2025',
    title: "Sahana's Managing Director honoured with the Entrepreneur of the Year Award at Nirman Conclave & Awards 2025",
    description: "A recognition of visionary leadership, innovation-driven growth, and Sahana's continued commitment to building globally impactful technology and engineering solutions.",
    image: award1Img,
    link: '#'
  },
  {
    id: 6,
    category: 'AWARDS',
    date: '2021',
    title: 'InfinityRadar, a Sahana System Group company, received the Emerging Company of the Year 2020-2021 recognition from the Indian Achievers Forum',
    description: 'A proud milestone celebrating innovation, business growth, and the continued commitment to building impactful technology-driven solutions across industries.',
    image: award2Img,
    link: '#'
  }
];

const FILTER_OPTIONS = ['AWARDS', 'BLOG', 'CASE STUDIES', 'CONTRACTS', 'ELECTRONIC WARFARE', 'EVENTS', 'MEDIA', 'PRESS RELEASE', 'SOVEREIGN AI'];

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

  // Filter Logic
  const filteredItems = NEWS_ITEMS.filter(item => {
    if (selectedFilters.length === 0) return true;
    return selectedFilters.includes(item.category);
  });

  const fadeUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

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
            <motion.div {...fadeUp} className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-6 relative z-30">
                
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
                                className="absolute top-full left-0 w-full bg-[#EAEAEA] border-b border-l border-r border-[#CCCCCC] shadow-xl"
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

            {/* UNIFIED NEWSROOM WALL */}
            <motion.div 
              layout
              className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 relative z-20"
            >
                <AnimatePresence mode="popLayout">
                    {filteredItems.map(item => (
                        <motion.div 
                            key={item.id}
                            layout
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.3 }}
                            onClick={() => item.link && item.link !== '#' ? window.open(item.link, '_blank') : null}
                            className="bg-white rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 overflow-hidden flex flex-col group cursor-pointer hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-300 min-h-[400px]"
                        >
                            <div className="h-64 w-full overflow-hidden relative bg-gray-100">
                                {item.images ? (
                                    <ImageSlider images={item.images} />
                                ) : (
                                    <img 
                                      src={item.image} 
                                      alt={item.title} 
                                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90" 
                                    />
                                )}
                                <div className="absolute top-4 left-4 z-20 pointer-events-none">
                                    <span className="font-mono text-[10px] text-black bg-white/90 backdrop-blur-sm px-3 py-1.5 tracking-widest uppercase rounded-full shadow-sm font-bold">
                                        {item.category}
                                    </span>
                                </div>
                            </div>
                            <div className="p-8 flex flex-col flex-grow">
                                <div className="mb-4">
                                    <span className="font-mono text-[11px] text-[#A1A1A1] tracking-widest">{item.date}</span>
                                </div>
                                <h3 className="text-xl md:text-2xl font-bold text-[#111111] mb-4 group-hover:text-[#3C5929] transition-colors leading-snug">
                                    {item.title}
                                </h3>
                                <p className="text-[14px] text-[#666666] leading-relaxed flex-grow font-sans mb-8">
                                    {item.description}
                                </p>
                                <div className="mt-auto">
                                    <button className="border-b border-[#3C5929] text-[#3C5929] font-mono text-xs pb-1 tracking-widest transition-colors inline-flex items-center gap-2">
                                        READ MORE <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                    
                    {filteredItems.length === 0 && (
                        <div className="col-span-full py-20 text-center">
                            <p className="text-xl text-[#666666] font-mono">No dispatches found for the selected filters.</p>
                        </div>
                    )}
                </AnimatePresence>
            </motion.div>

            {/* INTERACTIVE LOAD MORE */}
            {filteredItems.length > 0 && (
                <motion.div {...fadeUp} className="flex justify-center mb-24">
                    <button className="border border-[#3C5929] text-[#3C5929] hover:bg-[#3C5929] hover:text-white font-mono text-sm px-8 py-3 tracking-widest transition-all">
                        LOAD MORE DISPATCHES
                    </button>
                </motion.div>
            )}

            {/* BOTTOM CALL TO ACTION BANNER */}
            <motion.div {...fadeUp} className="bg-[#1A1A1A] text-white border-t-2 border-[#3C5929] p-8 md:p-16 relative overflow-hidden shadow-xl rounded-2xl mb-12">
                <div className="absolute top-0 right-0 p-4 opacity-5">
                    <svg width="180" height="180" viewBox="0 0 24 24" fill="none" stroke="#3C5929" strokeWidth="1"><path d="M12 2v20M2 12h20M12 12m-8 0a8 8 0 1 0 16 0a8 8 0 1 0 -16 0"/></svg>
                </div>
                <div className="relative z-10 max-w-3xl">
                    <h2 className="text-3xl md:text-4xl font-light text-white mb-6 leading-tight">BUILDING SOVEREIGN DEFENCE TECH FOR MISSION-CRITICAL OPERATIONS</h2>
                    <p className="text-[#A1A1A1] font-mono text-sm mb-10 max-w-xl leading-relaxed">Partner with Sahana Defence for advanced electronic warfare and AI systems.</p>
                    <div className="flex flex-wrap gap-4">
                        <button onClick={() => window.location.href = '/investors/key-contact'} className="bg-[#3C5929] hover:bg-[#4E7335] text-white font-mono text-[11px] font-bold px-8 py-4 tracking-[0.2em] transition-colors rounded-full">
                            INQUIRE FOR PROCUREMENT
                        </button>
                        <button className="border border-white/30 text-white hover:bg-white hover:text-black font-mono text-[11px] font-bold px-8 py-4 tracking-[0.2em] transition-colors rounded-full">
                            OPEN ROLES
                        </button>
                    </div>
                </div>
            </motion.div>
        </div>
    </div>
  );
}
