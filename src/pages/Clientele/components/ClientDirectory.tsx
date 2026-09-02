import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ALL_LOGOS, LOGO_CATEGORIES, CATEGORY_BOARDS } from '../data/clienteleLogosData';
import { Search, Grid3X3, LayoutTemplate, X } from 'lucide-react';

const INTER = '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';

export function ClientDirectory() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [viewMode, setViewMode] = useState<'grid' | 'boards'>('grid');

  const filteredLogos = useMemo(() => {
    return ALL_LOGOS.filter((logo) => {
      const matchesCategory = activeCategory === 'all' || logo.category === activeCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch = 
        !q ||
        logo.name.toLowerCase().includes(q) ||
        logo.categoryLabel.toLowerCase().includes(q);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const filteredBoards = useMemo(() => {
    return CATEGORY_BOARDS.filter((board) => {
      if (activeCategory === 'all') return true;
      return board.id === activeCategory;
    });
  }, [activeCategory]);

  return (
    <section className="relative w-full section-padding bg-[#F3F4F6] text-slate-900 border-b border-slate-200 overflow-hidden">
      
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#d1d5db_1px,transparent_1px)] [background-size:24px_24px] opacity-60 pointer-events-none" />

      <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 gap-6"
        >
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#5a8b10] animate-pulse" />
              <span className="text-[#5a8b10] text-xs font-mono tracking-[0.2em] uppercase font-bold">
                OFFICIAL INSTITUTIONAL ECOSYSTEM
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight uppercase" style={{ fontFamily: INTER }}>
              INSTITUTIONAL CLIENTELE &amp; LOGO DIRECTORY
            </h2>
            <p className="mt-2 text-slate-600 text-xs sm:text-sm md:text-base font-medium max-w-2xl">
              Verified emblem and logo insignia of our sovereign defense, space, PSU, aerospace, and enterprise partners.
            </p>
          </div>

          {/* Search & View Mode Switcher */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full lg:w-auto">
            {/* View Mode Switcher */}
            <div className="flex items-center bg-white border border-slate-300 p-1 rounded-xl shadow-sm self-start sm:self-auto">
              <button
                onClick={() => setViewMode('grid')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
                  viewMode === 'grid'
                    ? 'bg-slate-950 text-white font-bold shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Grid3X3 className="w-3.5 h-3.5" />
                <span>Logo Grid</span>
              </button>
              <button
                onClick={() => setViewMode('boards')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
                  viewMode === 'boards'
                    ? 'bg-slate-950 text-white font-bold shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <LayoutTemplate className="w-3.5 h-3.5" />
                <span>Category Boards</span>
              </button>
            </div>

            {/* Search Input */}
            <div className="relative w-full sm:w-[280px]">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input 
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search logo / category..."
                className="w-full bg-white border border-slate-300 focus:border-[#5a8b10] text-slate-900 text-xs sm:text-sm pl-10 pr-10 py-2.5 rounded-xl outline-none transition-all placeholder:text-slate-400 font-mono shadow-sm"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700 transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </motion.div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {LOGO_CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`relative flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-mono uppercase tracking-wider whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-slate-950 text-white font-bold shadow-md'
                    : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-50 border border-slate-200 shadow-sm'
                }`}
              >
                <span>{cat.label}</span>
                <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                  isActive ? 'bg-[#84CC16] text-black' : 'bg-slate-100 text-slate-500'
                }`}>
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Results Count Bar */}
        <div className="flex items-center justify-between text-xs font-mono text-slate-500 mb-6 pb-3 border-b border-slate-300">
          <span className="font-semibold">
            {viewMode === 'grid' 
              ? `DISPLAYING ${filteredLogos.length} LOGO EMBLEMS`
              : `DISPLAYING ${filteredBoards.length} CATEGORY ECOSYSTEM BOARDS`
            }
          </span>
          {searchQuery && <span className="text-[#5a8b10] font-bold">SEARCH: "{searchQuery}"</span>}
        </div>

        {/* --- VIEW MODE 1: LOGO TILES GRID --- */}
        {viewMode === 'grid' && (
          <AnimatePresence mode="popLayout">
            {filteredLogos.length > 0 ? (
              <motion.div 
                layout
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-5"
              >
                {filteredLogos.map((logo, idx) => (
                  <motion.div 
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.25, delay: Math.min(idx * 0.02, 0.3) }}
                    whileHover={{ y: -4, scale: 1.02, transition: { duration: 0.2 } }}
                    key={logo.id}
                    className="group relative p-5 rounded-2xl bg-white border border-slate-200/90 hover:border-[#5a8b10] shadow-[0_2px_10px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_32px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col items-center justify-center min-h-[130px] sm:min-h-[145px]"
                  >
                    {/* Corner category indicator on hover */}
                    <span className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity text-[8px] font-mono uppercase tracking-widest text-[#5a8b10] font-bold bg-[#84CC16]/10 px-1.5 py-0.5 rounded">
                      {logo.categoryLabel.split(' ')[0]}
                    </span>

                    {/* Logo Image */}
                    <div className="w-full h-full flex items-center justify-center">
                      <img 
                        src={logo.image} 
                        alt={logo.name} 
                        className="max-h-[65px] sm:max-h-[75px] max-w-[85%] object-contain filter grayscale-[15%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-300"
                        loading="lazy"
                      />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <div className="py-16 text-center bg-white rounded-2xl border border-slate-200 shadow-sm">
                <p className="text-slate-500 text-sm font-mono uppercase tracking-wider mb-2">
                  No matching logos found for "{searchQuery}"
                </p>
                <button 
                  onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}
                  className="text-xs font-mono text-[#5a8b10] hover:underline uppercase tracking-wider font-bold cursor-pointer"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </AnimatePresence>
        )}

        {/* --- VIEW MODE 2: CATEGORY ECOSYSTEM BOARDS --- */}
        {viewMode === 'boards' && (
          <div className="flex flex-col gap-10">
            {filteredBoards.map((board) => (
              <motion.div 
                key={board.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="p-6 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-[0_4px_24px_rgba(0,0,0,0.05)] flex flex-col gap-6"
              >
                {/* Board Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-slate-100 gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider font-bold bg-[#84CC16]/15 text-[#3f620d] border border-[#84CC16]/30">
                        {board.badge}
                      </span>
                      <span className="text-slate-400 text-xs font-mono">
                        {board.count} Partner Entities
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight" style={{ fontFamily: INTER }}>
                      {board.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 font-medium mt-1">
                      {board.subtitle}
                    </p>
                  </div>
                </div>

                {/* High-Res Master Graphic Sheet */}
                <div className="w-full rounded-2xl bg-slate-50/60 p-4 sm:p-8 flex items-center justify-center border border-slate-100">
                  <img 
                    src={board.sheetImage} 
                    alt={board.title} 
                    className="w-full max-w-[950px] h-auto object-contain drop-shadow-sm rounded-lg"
                    loading="lazy"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
