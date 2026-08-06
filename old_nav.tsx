function Nav() {
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const hoverTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setHoveredNav(null);
    }, 250);
  };

  const handleMouseEnter = (link: string) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    setHoveredNav(link);
  };

  // For Capabilities Mega Menu specifically
  const [activeDomain, setActiveDomain] = useState(CAPABILITIES_DATA[0]);
  const [activeInvestorSection, setActiveInvestorSection] = useState(INVESTORS_DATA[0] || {} as any);
  const [activeSystem, setActiveSystem] = useState(CAPABILITIES_DATA[0].systems[0]);

  // For Mobile Accordion
  const [mobileDomainOpen, setMobileDomainOpen] = useState<string | null>(null);
  const [mobileSystemOpen, setMobileSystemOpen] = useState<string | null>(null);

  useEffect(() => {
    setActiveSystem(activeDomain.systems[0]);
  }, [activeDomain]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setHoveredNav(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <header 
      className={`fixed left-1/2 -translate-x-1/2 z-50 flex flex-col justify-center transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        scrolled 
          ? "top-4 w-[95%] lg:w-[90%] max-w-[1200px] h-[64px] rounded-full shadow-[0_10px_40px_rgba(0,0,0,0.5)] border border-white/20" 
          : "top-0 w-full max-w-none h-[86px] rounded-none border-b border-white/10"
      }`}
      onMouseLeave={handleMouseLeave}
    >
      <div className={`absolute inset-0 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${scrolled ? "bg-[#05080D]/40 backdrop-blur-[16px] rounded-full" : "bg-[#05080D]/90 backdrop-blur-xl rounded-none"}`} />

      <div className={`relative flex items-center justify-between z-50 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${scrolled ? "px-6 lg:px-8 h-[64px]" : "px-6 lg:px-9 h-[86px]"}`}>
        <a href="#" onClick={(e) => { e.preventDefault(); setHoveredNav(null); navigate('/'); }} 
           className="relative shrink-0 flex items-center transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]" 
           style={{ width: scrolled ? '40px' : '210px', height: '40px' }}>
          
          {/* Full Logo */}
          <div className={`absolute left-0 top-1/2 -translate-y-1/2 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${scrolled ? 'opacity-0 scale-90 pointer-events-none' : 'opacity-100 scale-100'}`}>
            <AndurilLogo width={210} />
          </div>
          
          {/* Capsule Icon */}
          <div className={`absolute left-0 top-1/2 -translate-y-1/2 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${scrolled ? 'opacity-100 scale-100' : 'opacity-0 scale-50 pointer-events-none'}`}>
            <img src={capsuleIcon} alt="Icon Logo" className="w-[40px] h-auto object-contain" />
          </div>
        </a>

        {/* Desktop Links */}
        <nav className={`hidden lg:flex items-center absolute left-1/2 -translate-x-1/2 h-full transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${scrolled ? "gap-6 scale-[0.85]" : "gap-8 scale-100"}`}>
          {['Capabilities', 'Investors', 'Newsroom', 'About Us'].map((link) => (
            <div 
              key={link}
              className="h-full flex items-center"
              onMouseEnter={() => handleMouseEnter(link)}
            >
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className={`text-[15px] whitespace-nowrap transition-all duration-150 cursor-pointer flex items-center gap-1.5 ${
                  hoveredNav === link ? "text-white" : "text-white/70 hover:text-white"
                }`}
                style={{ fontFamily: INTER }}
              >
                {link}
                {(link === 'Capabilities' || link === 'About Us' || link === 'Investors' || link === 'Newsroom') && (
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={`transition-transform duration-300 ${hoveredNav === link ? "rotate-180 text-[#84CC16]" : ""}`}>
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                )}
              </a>
            </div>
          ))}
        </nav>

        {/* Right Desktop Links */}
        <div className="hidden lg:flex items-center gap-6">
          <a 
            href="#" 
            onClick={(e) => { e.preventDefault(); setHoveredNav(null); }}
            className={`font-bold tracking-[1px] uppercase border border-white/20 hover:border-[#84CC16] hover:text-[#84CC16] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] rounded-sm text-white ${scrolled ? "px-4 py-1.5 text-[12px]" : "px-6 py-2.5 text-[14px]"}`}
          >
            Contact Us
          </a>
        </div>

        {/* Mobile Hamburger (Only visible on mobile screens) */}
        <div className="flex lg:hidden items-center gap-4">
          <button
            className="text-white p-2 cursor-pointer"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            <div className="space-y-1.5">
              <span className="block w-6 h-px bg-white transition-transform" />
              <span className="block w-6 h-px bg-white transition-transform" />
              <span className="block w-4 h-px bg-white transition-transform" />
            </div>
          </button>
        </div>
      </div>

      {/* Capabilities Mega Menu Dropdown */}
      <div
        className={`hidden lg:block fixed left-0 w-[100vw] bg-[#05080D] transition-all duration-300 origin-top z-40 ${
          scrolled ? "top-[80px]" : "top-[86px]"
        } ${
          hoveredNav === 'Capabilities'
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
        style={{ borderTop: "1px solid rgba(0,229,255,0.15)", borderBottom: "1px solid rgba(255,255,255,0.05)" }}
        onMouseEnter={() => handleMouseEnter('Capabilities')}
        onMouseLeave={handleMouseLeave}
      >
        <div className="max-w-[1400px] w-full mx-auto flex h-auto">
          
          {/* COLUMN 1: DOMAINS */}
          <div className="w-[340px] border-r border-white/5 flex flex-col p-6 gap-2">
            {CAPABILITIES_DATA.map((domain) => {
              const isActive = activeDomain.id === domain.id;
              return (
                <div 
                  key={domain.id}
                  onMouseEnter={() => setActiveDomain(domain)}
                  className={`group relative flex flex-col gap-1 py-4 px-5 rounded-md cursor-pointer transition-all duration-300 ${isActive ? "bg-gradient-to-r from-[rgba(0,229,255,0.1)] to-transparent border-l-2 border-[#84CC16]" : "border-l-2 border-transparent hover:bg-white/5"}`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`transition-colors ${isActive ? "text-[#84CC16]" : "text-white/50 group-hover:text-white/80"}`}>
                      {domain.icon}
                    </div>
                    <h3 className={`font-bold text-[15px] tracking-wide transition-colors ${isActive ? "text-white" : "text-white/70 group-hover:text-white"}`}>
                      {domain.title}
                    </h3>
                    {isActive && (
                      <div className="ml-auto text-[#84CC16] opacity-80">
                        <MiniArrow color="#84CC16" />
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* COLUMN 2: SYSTEMS */}
          <div className="w-[340px] border-r border-white/5 p-6 bg-black/20 flex flex-col relative">
            <h4 className="text-[11px] font-bold tracking-[2px] uppercase text-[#84CC16] mb-4">SYSTEMS</h4>
            <div className="flex flex-col gap-1 flex-1">
              {activeDomain.systems.map((system: any) => {
                const isActive = activeSystem.id === system.id;
                return (
                  <div 
                    key={system.id}
                    onMouseEnter={() => setActiveSystem(system)}
                    onClick={(e) => {
                      if (system.slug && system.slug !== 'home') {
                        e.preventDefault();
                        setHoveredNav(null);
                        navigate(system.slug);
                      }
                    }}
                    className={`flex items-start gap-4 p-4 rounded-md cursor-pointer transition-all duration-300 ${isActive ? "bg-white/10" : "hover:bg-white/5"}`}
                  >
                    <div className="flex-1">
                      <h3 className={`font-bold text-[14px] mb-1 ${isActive ? "text-[#84CC16]" : "text-white/80"}`}>{system.title}</h3>
                      <p className="text-[12px] text-white/40 leading-snug line-clamp-1">{system.description}</p>
                    </div>
                    {isActive && <div className="text-[#84CC16] mt-1"><MiniArrow color="#84CC16" /></div>}
                  </div>
                );
              })}
            </div>
            
            <a 
              href="#"
              onClick={(e) => { e.preventDefault(); setHoveredNav(null); navigate(activeDomain.systems[0].products[0]?.slug || 'home'); }}
              className="mt-6 flex items-center gap-2 text-[12px] font-bold uppercase tracking-wider text-[#84CC16] hover:text-white transition-colors"
            >
              View {activeDomain.title} <MiniArrow color="currentColor" />
            </a>
          </div>

          {/* COLUMN 3: PRODUCTS */}
          <div className="flex-1 border-r border-white/5 p-6 bg-black/40 flex flex-col relative">
            <h4 className="text-[11px] font-bold tracking-[2px] uppercase text-white/50 mb-4 flex items-center gap-2">
              <span className="text-[#84CC16]">{activeSystem.title}</span> Products
            </h4>
            
            <div className="flex flex-col gap-1 flex-1">
              {activeSystem.products.map((product: any) => (
                <div 
                  key={product.id} 
                  className="group flex items-center gap-4 cursor-pointer p-3 rounded-md hover:bg-white/5 transition-all duration-300"
                  onClick={() => { setHoveredNav(null); if (navigate) navigate(product.slug); }}
                >
                  <div className="w-[32px] h-[32px] rounded overflow-hidden border border-white/10 shrink-0 bg-[#05080d]">
                    <img src={product.image} alt={product.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <span className="text-[13px] font-bold text-white/70 group-hover:text-white transition-colors">{product.title}</span>
                  <div className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ml-auto">
                    <MiniArrow color="#84CC16" />
                  </div>
                </div>
              ))}
            </div>

            <a 
              href="#"
              onClick={(e) => { e.preventDefault(); setHoveredNav(null); navigate(activeSystem.products[0]?.slug || 'home'); }}
              className="mt-6 flex items-center gap-2 text-[12px] font-bold uppercase tracking-wider text-white/60 hover:text-white transition-colors"
            >
              View All Products <MiniArrow color="currentColor" />
            </a>
          </div>


        </div>
      </div>

      {/* Investors Mega Menu Dropdown */}
      <div
        className={`hidden lg:block fixed left-0 w-[100vw] bg-[#05080D] transition-all duration-300 origin-top overflow-hidden z-40 ${
          scrolled ? "top-[80px]" : "top-[86px]"
        } ${
          hoveredNav === 'Investors'
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
        style={{ borderTop: "1px solid rgba(0,229,255,0.15)", borderBottom: "1px solid rgba(255,255,255,0.05)" }}
        onMouseEnter={() => handleMouseEnter('Investors')}
        onMouseLeave={handleMouseLeave}
      >
        <div className="max-w-[1400px] w-full mx-auto flex h-auto max-h-[600px]">
          
          {/* COLUMN 1: THE HUB INFO CARD */}
          <div className="w-[340px] border-r border-white/5 flex flex-col p-6 gap-2">
            <div className="flex flex-col gap-1 py-6 px-6 rounded-md border-l-2 border-[#84CC16] bg-gradient-to-r from-[rgba(0,229,255,0.1)] to-transparent">
              <div className="flex items-center gap-4 mb-4">
                <div className="text-[#84CC16]">
                   <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                     <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                     <circle cx="9" cy="7" r="4"></circle>
                     <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                     <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                   </svg>
                </div>
              </div>
              <h4 className="text-[11px] font-bold tracking-[2px] uppercase text-[#84CC16] mb-1">THE HUB</h4>
              <h3 className="font-bold text-[18px] text-white mb-3">Investor Relations Center</h3>
              <p className="text-[13px] text-white/60 mb-6 leading-relaxed">All corporate governance, shareholder information, financial reports and disclosures.</p>
              
              <div className="flex items-center gap-3 text-[11px] font-bold tracking-wider uppercase mt-2">
                <span className="text-[#84CC16]">10 SECTIONS</span>
              </div>
            </div>
          </div>

          {/* COLUMN 2: THE HUB LINKS */}
          <div className="lg:w-[40%] xl:w-[500px] border-r border-white/5 p-6 bg-black/20 flex flex-col relative">
            <h4 className="text-[11px] font-bold tracking-[2px] uppercase text-[#84CC16] mb-4">THE HUB</h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-1 flex-1 pr-2">
              {INVESTORS_DATA.map((section: any) => {
                const isActive = activeInvestorSection.id === section.id;
                return (
                  <div 
                    key={section.id}
                    onMouseEnter={() => setActiveInvestorSection(section)}
                    className={`flex items-start gap-2 p-3 rounded-md cursor-pointer transition-all duration-300 ${isActive ? "bg-white/10" : "hover:bg-white/5"}`}
                  >
                    <div className="flex-1">
                      <h3 className={`font-bold text-[12px] ${isActive ? "text-[#84CC16]" : "text-white/80"}`}>{section.title}</h3>
                    </div>
                    {isActive && <div className="text-[#84CC16] mt-0.5"><MiniArrow color="#84CC16" /></div>}
                  </div>
                );
              })}
            </div>
          </div>

          {/* COLUMN 3: DYNAMIC DETAILS */}
          <div className="flex-1 border-r border-white/5 p-6 bg-black/40 flex flex-col relative">
            <h4 className="text-[11px] font-bold tracking-[2px] uppercase text-white/50 mb-4 flex items-center gap-2">
              <span className="text-[#84CC16]">{activeInvestorSection.title.toUpperCase()}</span>
            </h4>
            
            <p className="text-[14px] text-white/70 leading-relaxed mb-8 max-w-[400px]">
              {activeInvestorSection.description}
            </p>

            <h5 className="text-[11px] font-bold tracking-[2px] uppercase text-white/40 mb-3">Recent Documents</h5>
            
            <div className="flex flex-col gap-1 flex-1 max-w-[400px]">
              {activeInvestorSection.links.map((link: any, idx: number) => (
                <div 
                  key={idx} 
                  className="group flex items-center gap-4 cursor-pointer p-3 rounded-md hover:bg-white/5 transition-all duration-300"
                  onClick={() => { setHoveredNav(null); if (navigate) navigate(link.url); }}
                >
                  <div className="w-[24px] h-[24px] shrink-0 text-white/20 group-hover:text-[#84CC16] transition-colors flex items-center justify-center">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                      <polyline points="14 2 14 8 20 8"></polyline>
                      <line x1="16" y1="13" x2="8" y2="13"></line>
                      <line x1="16" y1="17" x2="8" y2="17"></line>
                      <polyline points="10 9 9 9 8 9"></polyline>
                    </svg>
                  </div>
                  <span className="text-[13px] font-bold text-white/70 group-hover:text-white transition-colors">{link.text}</span>
                  <div className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ml-auto">
                    <MiniArrow color="#84CC16" />
                  </div>
                </div>
              ))}
            </div>

            <a 
              href="#"
              onClick={(e) => { e.preventDefault(); setHoveredNav(null); navigate('/'); }}
              className="mt-6 flex items-center gap-2 text-[12px] font-bold uppercase tracking-wider text-white/60 hover:text-white transition-colors"
            >
              View All ÔåÆ
            </a>
          </div>


        </div>
      </div>

      {/* Newsroom Small Dropdown */}
      <div
        className={`hidden lg:block fixed left-[50%] ml-[40px] w-[220px] bg-[#05080D] border border-white/10 rounded-b-md shadow-2xl transition-all duration-300 origin-top overflow-hidden z-40 ${
          scrolled ? "top-[80px]" : "top-[86px]"
        } ${
          hoveredNav === 'Newsroom'
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
        onMouseEnter={() => handleMouseEnter('Newsroom')}
        onMouseLeave={handleMouseLeave}
      >
        <div className="flex flex-col p-4 max-h-[500px] overflow-y-auto custom-scrollbar">
          <h4 className="text-[11px] font-bold tracking-[2px] uppercase text-[#84CC16] mb-3 px-2">Newsroom</h4>
          <div className="flex flex-col gap-1">
            {['Press Release', 'Events', 'Awards'].map(item => (
              <a key={item} href="#" onClick={(e) => { e.preventDefault(); setHoveredNav(null); navigate('/'); }} className="group flex items-center justify-between px-2 py-2 text-[13px] text-white/70 hover:text-white hover:bg-white/5 rounded-sm transition-all" style={{ fontFamily: 'Inter, sans-serif' }}>
                <span>{item}</span>
                <span className="text-[#84CC16] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">ÔåÆ</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* About Us Small Dropdown */}
      <div
        className={`hidden lg:block fixed left-[50%] ml-[160px] w-[200px] bg-[#05080D] border border-white/10 rounded-b-md shadow-2xl transition-all duration-300 origin-top overflow-hidden z-40 ${
          scrolled ? "top-[80px]" : "top-[86px]"
        } ${
          hoveredNav === 'About Us'
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
        onMouseEnter={() => handleMouseEnter('About Us')}
        onMouseLeave={handleMouseLeave}
      >
        <div className="flex flex-col p-2">
          {['Company', 'Leadership', 'Careers', 'Certifications', 'Contact'].map(item => (
            <a key={item} href="#" onClick={(e) => { e.preventDefault(); setHoveredNav(null); navigate('/'); }} className="px-4 py-2 text-[14px] text-white/70 hover:text-white hover:bg-white/5 rounded-sm transition-colors" style={{ fontFamily: INTER }}>
              {item}
            </a>
          ))}
        </div>
      </div>

      {/* Mobile Menu Drawer (Stacked Accordion) */}
      <div className={`lg:hidden fixed inset-0 top-[86px] bg-[#05080D] z-40 overflow-y-auto transition-transform duration-300 ${mobileOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex flex-col p-6 gap-2">
          
          <a href="#" className="py-4 border-b border-white/10 text-[18px] font-bold text-white uppercase tracking-wider" onClick={() => { navigate('/'); setMobileOpen(false); }}>Home</a>
          
          {/* Capabilities Accordion */}
          <div className="py-4 border-b border-white/10">
            <h3 className="text-[18px] font-bold text-[#84CC16] uppercase tracking-wider mb-4">Capabilities</h3>
            <div className="flex flex-col gap-2 pl-4 border-l border-white/10">
              {CAPABILITIES_DATA.map((domain: any) => (
                <div key={domain.id} className="flex flex-col">
                  <div 
                    className="flex items-center justify-between py-3 text-white cursor-pointer"
                    onClick={() => setMobileDomainOpen(mobileDomainOpen === domain.id ? null : domain.id)}
                  >
                    <span className="font-bold text-[15px]">{domain.title}</span>
                    <span className="text-[#84CC16]">{mobileDomainOpen === domain.id ? "-" : "+"}</span>
                  </div>
                  {mobileDomainOpen === domain.id && (
                    <div className="flex flex-col gap-2 pl-4 py-2 border-l border-white/10">
                      {domain.systems.map((sys: any) => (
                        <div key={sys.id} className="flex flex-col">
                          <div 
                            className="flex items-center justify-between py-2 text-white/80 cursor-pointer text-[14px]"
                            onClick={() => setMobileSystemOpen(mobileSystemOpen === sys.id ? null : sys.id)}
                          >
                            <span>{sys.title}</span>
                            <span className="text-white/50 text-xs">{mobileSystemOpen === sys.id ? "Ôû╝" : "ÔûÂ"}</span>
                          </div>
                          {mobileSystemOpen === sys.id && (
                            <div className="flex flex-col gap-2 pl-4 py-2">
                              {sys.products.map((prod: any) => (
                                <a 
                                  key={prod.id} 
                                  href="#" 
                                  className="text-[13px] text-[#84CC16] py-1"
                                  onClick={(e) => { e.preventDefault(); navigate(prod.slug); setMobileOpen(false); }}
                                >
                                  {prod.title}
                                </a>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          <a href="#" className="py-4 border-b border-white/10 text-[18px] font-bold text-white uppercase tracking-wider">Investors</a>
          <a href="#" className="py-4 border-b border-white/10 text-[18px] font-bold text-white uppercase tracking-wider">Newsroom</a>
          <a href="#" className="py-4 border-b border-white/10 text-[18px] font-bold text-white uppercase tracking-wider">About Us</a>
          <a href="#" className="py-4 text-[18px] font-bold text-[#84CC16] uppercase tracking-wider mt-4 border border-[#84CC16]/30 text-center rounded-sm bg-[#84CC16]/5">Contact Us</a>

        </div>
      </div>

    </header>
  );
}
// ÔÇöÔÇöÔÇö HERO ÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇö

