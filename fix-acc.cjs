const fs = require('fs');
let content = fs.readFileSync('src/components/InteractiveBlueprint.tsx', 'utf8');

const replacement =         </div>
      </div>

      {/* MOBILE ACCORDION (Visible only on < 768px) */}
      <div className="md:hidden max-w-[1600px] mx-auto px-4 w-full relative z-10 flex flex-col gap-4 py-12">
        {/* Mobile Section Header */}
        <div className="mb-6">
          <span className="text-[#0052FF] font-mono text-xs font-bold uppercase tracking-[0.2em] mb-2 block">
            {subtitle}
          </span>
          <h2 className="text-3xl font-bold text-slate-900 uppercase tracking-tight leading-tight" dangerouslySetInnerHTML={{__html: title.replace(' ', '<br/>')}}>
          </h2>
        </div>

        {finalTiers.map((tier, idx) => {
          const isExpanded = openAccordion === idx;
          return (
            <div key={tier.id} className="w-full flex flex-col border border-slate-700/50 rounded-sm overflow-hidden bg-slate-900/50">
              {/* Header */}
              <div 
                className="w-full p-4 flex items-center justify-between bg-slate-900 border-b border-slate-800 cursor-pointer"
                onClick={() => setOpenAccordion(isExpanded ? -1 : idx)}
              >
                <div>
                  <span className="text-[10px] font-mono text-[#0052FF] font-bold uppercase tracking-widest block mb-1">
                    Tier 0{idx + 1} // {tier.type}
                  </span>
                  <h3 className="text-lg font-bold text-white uppercase tracking-wide">
                    {tier.title}
                  </h3>
                </div>
                <div>
                  <ChevronDown className={\w-5 h-5 text-[#0052FF] transition-transform duration-300 \\} />
                </div>
              </div>
              
              {/* Content */}
              <div className={\w-full overflow-hidden transition-all duration-500 ease-in-out \\}>
                <div className="w-full p-4 flex flex-col gap-6 bg-slate-950">
                  
                  {/* Media Container */}
                  <div className="w-full aspect-video relative rounded-sm overflow-hidden bg-black border border-white/10">
                    {tier.image && <img src={tier.image} alt={tier.title} className="w-full h-full object-cover opacity-80" />}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    <div className="absolute bottom-3 left-3">
                       <div className="inline-flex items-center gap-2 px-2 py-1 bg-blue-950/50 text-blue-400 rounded-sm text-[8px] font-mono font-bold tracking-widest border border-blue-900">
                         <Radio className="w-3 h-3" />
                         {tier.statusBadge}
                       </div>
                    </div>
                  </div>

                  {/* Specs / Description */}
                  <div>
                    <p className="text-slate-400 text-sm leading-relaxed mb-6">
                      {tier.description}
                    </p>
                    <div className="space-y-3">
                      {tier.specs.map((spec, sIdx) => (
                        <React.Fragment key={sIdx}>
                          <div className="flex items-center justify-between">
                            <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">{spec.label}</span>
                            <span className={\	ext-xs font-bold \\}>{spec.value}</span>
                          </div>
                          {sIdx < tier.specs.length - 1 && <div className="h-px w-full bg-white/10" />}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

    </section>;

content = content.replace(/        <\/div>\r?\n      <\/div>\r?\n    <\/section>/, replacement);
fs.writeFileSync('src/components/InteractiveBlueprint.tsx', content);
