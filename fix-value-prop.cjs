const fs = require('fs');
let content = fs.readFileSync('src/pages/FpvBuddy/components/ValuePropositionSection.tsx', 'utf8');

// 1. Hide the desktop layout
content = content.replace(
  '<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">',
  '<!-- DESKTOP LAYOUT -->\n        <div className="hidden md:grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">'
);

// 2. Inject mobile layout right after the closing </div> of the grid
const replacement =         </div>

        {/* MOBILE STACKED LAYOUT (Visible only on < 768px) */}
        <div className="flex flex-col md:hidden w-full gap-8 mobile-tactical-stack">
          
          {/* Header Area */}
          <div className="flex flex-col text-left">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="text-[#84CC16] text-xs font-bold tracking-[2px] uppercase">
                CORE CAPABILITIES
              </span>
            </div>
            <h2 className="text-3xl font-bold text-white mb-4 uppercase tracking-tight">
              Tactical Precision & Resilience
            </h2>
            <p className="text-white/60 text-base leading-relaxed">
              Built across three frame sizes, the Drone Buddy features a lightweight, durable frame that ensures resilience in challenging environments. It is positioned as an essential tool for reconnaissance, training, and field operations, delivering high-speed aerial oversight in interference-heavy environments.
            </p>
          </div>

          {/* Hero Image (No absolute HUDs) */}
          <div className="relative w-full aspect-square flex items-center justify-center">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(132,204,22,0.15)_0%,transparent_70%)] pointer-events-none" />
            <img 
              src={fpvModelImg} 
              alt="FPV Drone Buddy" 
              className="relative z-10 w-full h-full object-contain drop-shadow-[0_0_30px_rgba(132,204,22,0.1)]"
            />
          </div>

          {/* Feature Badge Stack */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-4 bg-[#111] border border-white/10 rounded-sm p-4">
              <div className="bg-[#84CC16]/10 p-2 rounded-sm border border-[#84CC16]/20 flex-shrink-0">
                <Target className="text-[#84CC16] w-5 h-5" />
              </div>
              <div className="text-white font-bold text-sm tracking-wide">Up to 12 kg Payload Capacity</div>
            </div>

            <div className="flex items-center gap-4 bg-[#111] border border-white/10 rounded-sm p-4">
              <div className="bg-[#84CC16]/10 p-2 rounded-sm border border-[#84CC16]/20 flex-shrink-0">
                <Zap className="text-[#84CC16] w-5 h-5" />
              </div>
              <div className="text-white font-bold text-sm tracking-wide">Interference-Resistant 'Proxy' Channel</div>
            </div>

            <div className="flex items-center gap-4 bg-[#111] border border-white/10 rounded-sm p-4">
              <div className="bg-[#84CC16]/10 p-2 rounded-sm border border-[#84CC16]/20 flex-shrink-0">
                <Shield className="text-[#84CC16] w-5 h-5" />
              </div>
              <div className="text-white font-bold text-sm tracking-wide">Fiber Optics Pool Integration</div>
            </div>
          </div>
          
        </div>

      </div>;

content = content.replace(/        <\/div>\r?\n      <\/div>\r?\n    <\/section>/, replacement + '\n    </section>');

// Wait, the previous block didn't have <!-- DESKTOP LAYOUT -->, it's a JSX comment. I'll fix that.
content = content.replace('<!-- DESKTOP LAYOUT -->', '{/* DESKTOP LAYOUT */}');

fs.writeFileSync('src/pages/FpvBuddy/components/ValuePropositionSection.tsx', content);
