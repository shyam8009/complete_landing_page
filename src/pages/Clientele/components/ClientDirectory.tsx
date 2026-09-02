import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ALL_CLIENTS, CLIENT_CATEGORIES } from '../data/clienteleData';
import { Search, MapPin, Tag, X } from 'lucide-react';

const INTER = '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';

export function ClientDirectory() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredClients = useMemo(() => {
    return ALL_CLIENTS.filter((client) => {
      const matchesCategory = activeCategory === 'all' || client.category === activeCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch = 
        !q ||
        client.name.toLowerCase().includes(q) ||
        client.fullName.toLowerCase().includes(q) ||
        client.domain.toLowerCase().includes(q) ||
        client.location.toLowerCase().includes(q) ||
        client.tags.some(t => t.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section className="relative w-full section-padding bg-[#F1F3F5] text-slate-900 border-b border-slate-200">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Section Header & Search */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 gap-6"
        >
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#5a8b10]" />
              <span className="text-[#5a8b10] text-xs font-mono tracking-[0.2em] uppercase font-bold">
                PARTNER ECOSYSTEM DIRECTORY
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight uppercase" style={{ fontFamily: INTER }}>
              EXPLORE OUR STRATEGIC ALLIANCES
            </h2>
          </div>

          {/* Search Bar */}
          <div className="relative w-full lg:w-[400px]">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input 
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search partner, domain, or capability..."
              className="w-full bg-white border border-slate-300 focus:border-[#5a8b10] text-slate-900 text-xs sm:text-sm pl-10 pr-10 py-3 rounded-xl outline-none transition-all placeholder:text-slate-400 font-mono shadow-sm focus:shadow-md"
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
        </motion.div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {CLIENT_CATEGORIES.map((cat) => {
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

        {/* Active Results Count */}
        <div className="flex items-center justify-between text-xs font-mono text-slate-500 mb-6 pb-3 border-b border-slate-300">
          <span className="font-semibold">SHOWING {filteredClients.length} STRATEGIC PARTNERS</span>
          {searchQuery && <span className="text-[#5a8b10] font-bold">FILTER: "{searchQuery}"</span>}
        </div>

        {/* Client Cards Grid */}
        <AnimatePresence mode="popLayout">
          {filteredClients.length > 0 ? (
            <motion.div 
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredClients.map((client) => {
                const initial = client.name.charAt(0).toUpperCase();
                return (
                  <motion.div 
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                    key={client.id}
                    className="group relative p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/90 hover:border-[#5a8b10] transition-all duration-300 flex flex-col justify-between shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_32px_rgba(0,0,0,0.08)]"
                  >
                    {/* Top Bar */}
                    <div>
                      <div className="flex items-start justify-between gap-4 mb-4">
                        {/* Monogram Badge */}
                        <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center font-mono font-bold text-lg text-[#5a8b10] group-hover:bg-[#84CC16]/15 group-hover:border-[#5a8b10]/40 transition-colors shrink-0 shadow-inner">
                          {initial}
                        </div>

                        <span className="px-2.5 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider bg-slate-100 text-slate-600 border border-slate-200 group-hover:border-[#5a8b10]/40 group-hover:text-[#3f620d] group-hover:bg-[#84CC16]/10 transition-colors font-semibold">
                          {client.categoryLabel}
                        </span>
                      </div>

                      {/* Name & Full Name */}
                      <h3 className="text-lg sm:text-xl font-black text-slate-900 group-hover:text-[#5a8b10] transition-colors mb-1" style={{ fontFamily: INTER }}>
                        {client.name}
                      </h3>
                      <p className="text-xs text-slate-500 font-medium leading-snug mb-4">
                        {client.fullName}
                      </p>

                      {/* Domain & Location */}
                      <div className="flex flex-col gap-1.5 mb-4 py-2.5 border-y border-slate-100 text-[11px] font-mono text-slate-700">
                        <div className="flex items-center gap-1.5 text-[#5a8b10] font-semibold truncate">
                          <Tag className="w-3.5 h-3.5 shrink-0" />
                          <span className="truncate">{client.domain}</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-slate-500 truncate">
                          <MapPin className="w-3.5 h-3.5 shrink-0" />
                          <span className="truncate">{client.location}</span>
                        </div>
                      </div>

                      {/* Scope */}
                      <p className="text-xs text-slate-600 leading-relaxed mb-6 font-normal">
                        {client.scope}
                      </p>
                    </div>

                    {/* Capability Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-100">
                      {client.tags.map((tag, i) => (
                        <span 
                          key={i} 
                          className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 border border-slate-200/80 group-hover:border-slate-300 transition-colors"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          ) : (
            <div className="py-16 text-center bg-white rounded-2xl border border-slate-200 shadow-sm">
              <p className="text-slate-500 text-sm font-mono uppercase tracking-wider mb-2">
                No matching alliances found for "{searchQuery}"
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

      </div>
    </section>
  );
}
