import React, { useState, useMemo } from 'react';
import { ALL_CLIENTS, CLIENT_CATEGORIES, ClientItem } from '../data/clienteleData';
import { Search, MapPin, Tag, ArrowUpRight, X } from 'lucide-react';

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
    <section className="relative w-full section-padding bg-[#05080D] border-b border-white/10">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Section Header & Search */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#84CC16]" />
              <span className="text-[#84CC16] text-xs font-mono tracking-[0.2em] uppercase font-bold">
                PARTNER ECOSYSTEM DIRECTORY
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight uppercase" style={{ fontFamily: INTER }}>
              EXPLORE OUR STRATEGIC ALLIANCES
            </h2>
          </div>

          {/* Search Bar */}
          <div className="relative w-full lg:w-[380px]">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
            <input 
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search partner, domain, or capability..."
              className="w-full bg-black/80 border border-white/15 focus:border-[#84CC16] text-white text-xs sm:text-sm pl-10 pr-10 py-3 rounded-lg outline-none transition-all placeholder:text-white/30 font-mono"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-white/40 hover:text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {CLIENT_CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-mono uppercase tracking-wider whitespace-nowrap transition-all duration-200 ${
                  isActive
                    ? 'bg-[#84CC16] text-black font-bold shadow-[0_0_15px_rgba(132,204,22,0.3)]'
                    : 'bg-neutral-900/80 text-white/60 hover:text-white hover:bg-neutral-800 border border-white/10'
                }`}
              >
                <span>{cat.label}</span>
                <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                  isActive ? 'bg-black text-[#84CC16]' : 'bg-white/10 text-white/50'
                }`}>
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Results Count */}
        <div className="flex items-center justify-between text-xs font-mono text-white/40 mb-6 pb-3 border-b border-white/10">
          <span>SHOWING {filteredClients.length} STRATEGIC PARTNERS</span>
          {searchQuery && <span>FILTER: "{searchQuery}"</span>}
        </div>

        {/* Client Cards Grid */}
        {filteredClients.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredClients.map((client) => {
              const initial = client.name.charAt(0).toUpperCase();
              return (
                <div 
                  key={client.id}
                  className="group relative p-6 rounded-xl bg-neutral-950/90 border border-white/10 hover:border-[#84CC16]/50 transition-all duration-300 flex flex-col justify-between hover:shadow-[0_8px_30px_rgba(0,0,0,0.5)]"
                >
                  {/* Top Bar */}
                  <div>
                    <div className="flex items-start justify-between gap-4 mb-4">
                      {/* Monogram Badge */}
                      <div className="w-12 h-12 rounded-lg bg-neutral-900 border border-white/10 flex items-center justify-center font-mono font-bold text-base text-[#84CC16] group-hover:bg-[#84CC16]/10 group-hover:border-[#84CC16]/40 transition-colors shrink-0 shadow-inner">
                        {initial}
                      </div>

                      <span className="px-2.5 py-1 rounded text-[10px] font-mono uppercase tracking-wider bg-white/5 text-white/60 border border-white/10 group-hover:border-[#84CC16]/30 group-hover:text-[#84CC16] transition-colors">
                        {client.categoryLabel}
                      </span>
                    </div>

                    {/* Name & Full Name */}
                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-[#84CC16] transition-colors mb-1" style={{ fontFamily: INTER }}>
                      {client.name}
                    </h3>
                    <p className="text-xs text-white/50 font-medium leading-snug mb-3">
                      {client.fullName}
                    </p>

                    {/* Domain & Location */}
                    <div className="flex flex-col gap-1.5 mb-4 py-2 border-y border-white/5 text-[11px] font-mono text-white/70">
                      <div className="flex items-center gap-1.5 text-[#84CC16]/90 truncate">
                        <Tag className="w-3 h-3 shrink-0" />
                        <span className="truncate">{client.domain}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-white/40 truncate">
                        <MapPin className="w-3 h-3 shrink-0" />
                        <span className="truncate">{client.location}</span>
                      </div>
                    </div>

                    {/* Scope */}
                    <p className="text-xs text-white/60 leading-relaxed mb-6">
                      {client.scope}
                    </p>
                  </div>

                  {/* Capability Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
                    {client.tags.map((tag, i) => (
                      <span 
                        key={i} 
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-white/50 border border-white/5 group-hover:border-white/10 transition-colors"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="py-16 text-center bg-neutral-950/50 rounded-xl border border-white/10">
            <p className="text-white/40 text-sm font-mono uppercase tracking-wider mb-2">
              No matching alliances found for "{searchQuery}"
            </p>
            <button 
              onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}
              className="text-xs font-mono text-[#84CC16] hover:underline uppercase tracking-wider font-bold"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
