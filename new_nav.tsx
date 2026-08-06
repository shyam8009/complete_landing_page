import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { AndurilLogo } from '../components/AndurilLogo';
import capsuleIcon from '../imports/capsule_icon.png';
import { sanityClient } from '../cms/sanity';
import { FALLBACK_MENU_ASSETS } from './menuAssets';

// --- Types ---
export interface MappedL4Product {
  id: string
  title: string
  slug: string
  fullPath: string
  isFeatured?: boolean
  description?: string
  image?: string // fallback
}

export interface MappedL3SubCategory {
  id: string
  title: string
  slug: string
  products: MappedL4Product[]
}

export interface MappedL2Domain {
  id: string
  title: string
  icon?: React.ReactNode // Derived from local fallback lookup
  spotlightImage?: string
  subCategories: MappedL3SubCategory[]
}

export interface MappedL1Capability {
  id: string
  title: string
  domains: MappedL2Domain[]
}

function attachVisualAssets(l2Node: any): MappedL2Domain {
  const normalizedKey = l2Node.l2Title.toLowerCase().replace(/\s+/g, '-')
  const visualMeta = FALLBACK_MENU_ASSETS[normalizedKey] || FALLBACK_MENU_ASSETS['default']

  return {
    id: l2Node._id,
    title: l2Node.l2Title,
    icon: visualMeta.icon,
    spotlightImage: visualMeta.spotlightImage,
    subCategories: l2Node.l3SubCategories?.map((l3: any) => ({
      id: l3._id,
      title: l3.l3Title,
      slug: l3.l3Slug,
      products: l3.products?.map((prod: any) => ({
        id: prod._id,
        title: prod.productTitle,
        slug: prod.productSlug,
        fullPath: prod.fullPath || `/capabilities/${normalizedKey}/${l3.l3Slug}/${prod.productSlug}`,
        isFeatured: prod.isFeatured,
      })) || [],
    })) || [],
  }
}

const INTER = "'Inter', sans-serif";

const MiniArrow = ({ color = "white" }) => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

export function Nav() {
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const hoverTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // New State
  const [capabilitiesData, setCapabilitiesData] = useState<MappedL1Capability[]>([]);
  const [activeL2Id, setActiveL2Id] = useState<string | null>(null);
  const [activeL3Id, setActiveL3Id] = useState<string | null>(null);

  useEffect(() => {
    let subscription: any;

    async function fetchNav() {
      try {
        const query = `
          *[_type == "taxonomyNode" && !defined(parent)] | order(title asc) {
            _id,
            "l1Title": title,
            "l2Categories": *[_type == "taxonomyNode" && references(^._id)] | order(title asc) {
              _id,
              "l2Title": title,
              "l3SubCategories": *[_type == "taxonomyNode" && references(^._id)] | order(title asc) {
                _id,
                "l3Title": title,
                "l3Slug": slug.current,
                "products": *[_type == "product" && references(^._id)] | order(title asc) {
                  _id,
                  "productTitle": title,
                  "productSlug": slug.current,
                  isFeatured,
                  "fullPath": "/capabilities/" + ^.^.title + "/" + ^.slug.current + "/" + slug.current
                }
              }
            }
          }
        `;
        const l1Nodes = await sanityClient.fetch(query);
        
        if (l1Nodes && l1Nodes.length > 0) {
          const mappedCapabilities: MappedL1Capability[] = l1Nodes.map((l1: any) => ({
            id: l1._id,
            title: l1.l1Title,
            domains: (l1.l2Categories || []).map((l2: any) => attachVisualAssets(l2))
          }));

          setCapabilitiesData(mappedCapabilities);
          
          // Set initial active state if data exists
          if (mappedCapabilities.length > 0 && mappedCapabilities[0].domains.length > 0) {
            setActiveL2Id(mappedCapabilities[0].domains[0].id);
            if (mappedCapabilities[0].domains[0].subCategories.length > 0) {
              setActiveL3Id(mappedCapabilities[0].domains[0].subCategories[0].id);
            }
          }
        }
      } catch (err) {
        console.error("Failed to fetch taxonomy tree from Sanity:", err);
      }
    }

    fetchNav();

    subscription = sanityClient
      .listen(`*[_type == "taxonomyNode" || _type == "product"]`, {}, { includeResult: false })
      .subscribe(() => {
        console.log('[Sanity] Taxonomy updated — refreshing...');
        fetchNav();
      });

    return () => {
      if (subscription) subscription.unsubscribe();
    };
  }, []);

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
    
    // Automatically select the first L2 and L3 item when a capability dropdown opens
    if (link === 'Capabilities' && capabilitiesData.length > 0) {
      const firstL1 = capabilitiesData[0];
      if (firstL1.domains.length > 0) {
        const firstL2 = firstL1.domains[0];
        setActiveL2Id(firstL2.id);
        if (firstL2.subCategories.length > 0) {
          setActiveL3Id(firstL2.subCategories[0].id);
        }
      }
    }
  };

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

  // Helpers to get active data
  const activeL1 = capabilitiesData[0]; // Assuming only 1 capability pillar for now
  const activeDomainData = activeL1?.domains.find(d => d.id === activeL2Id) || activeL1?.domains[0];
  const activeSubCategoryData = activeDomainData?.subCategories.find(s => s.id === activeL3Id) || activeDomainData?.subCategories[0];

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
        {activeL1 && (
          <div className="max-w-[1400px] w-full mx-auto flex h-[500px]">
            
            {/* COLUMN 1: DOMAINS (L2) */}
            <div className="w-[340px] border-r border-white/5 flex flex-col p-6 gap-2">
              {activeL1.domains.map((domain) => {
                const isActive = activeL2Id === domain.id;
                return (
                  <div
                    key={domain.id}
                    onMouseEnter={() => {
                      setActiveL2Id(domain.id);
                      if (domain.subCategories.length > 0) {
                        setActiveL3Id(domain.subCategories[0].id);
                      } else {
                        setActiveL3Id(null);
                      }
                    }}
                    className={`flex items-center justify-between p-4 rounded-md cursor-pointer transition-all duration-300 ${isActive ? "bg-white/10" : "hover:bg-white/5"}`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`${isActive ? "text-[#84CC16]" : "text-white/40"}`}>
                        {domain.icon}
                      </div>
                      <span className={`font-bold text-[14px] ${isActive ? "text-white" : "text-white/60"}`}>{domain.title}</span>
                    </div>
                    {isActive && <div className="text-[#84CC16]"><MiniArrow color="#84CC16" /></div>}
                  </div>
                );
              })}
            </div>

            {/* COLUMN 2: SUB-CATEGORIES (L3) */}
            {activeDomainData && (
              <div className="w-[340px] border-r border-white/5 p-6 bg-[#030406]">
                <h4 className="text-[11px] font-bold tracking-[2px] uppercase text-[#84CC16] mb-6">{activeDomainData.title} Systems</h4>
                <div className="flex flex-col gap-2">
                  {activeDomainData.subCategories.map((system) => {
                    const isActive = activeL3Id === system.id;
                    return (
                      <div 
                        key={system.id}
                        onMouseEnter={() => setActiveL3Id(system.id)}
                        onClick={() => {
                          setHoveredNav(null);
                          // @ts-ignore
                          navigate(`/${activeDomainData.title.toLowerCase().replace(/\s+/g, '-')}/${system.slug}`);
                        }}
                        className={`flex items-center gap-4 p-4 rounded-md cursor-pointer transition-all duration-300 ${isActive ? "bg-white/10" : "hover:bg-white/5"}`}
                      >
                        <div className="flex-1">
                          <h3 className={`font-bold text-[14px] mb-1 ${isActive ? "text-white" : "text-white/80"}`}>{system.title}</h3>
                        </div>
                        {isActive && <div className="text-[#84CC16]"><MiniArrow color="#84CC16" /></div>}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* COLUMN 3: PRODUCTS (L4) + SPOTLIGHT */}
            {activeSubCategoryData && (
              <div className="flex-1 p-8 flex flex-col overflow-y-auto custom-scrollbar">
                <span className="text-[11px] font-bold tracking-[2px] uppercase text-white/40 mb-2">{activeDomainData?.title}</span>
                <h2 
                  className="text-[28px] font-bold text-white mb-6 cursor-pointer hover:text-[#84CC16] transition-colors inline-block w-fit"
                  onClick={() => {
                    setHoveredNav(null);
                    // @ts-ignore
                    navigate(`/${activeDomainData?.title.toLowerCase().replace(/\s+/g, '-')}/${activeSubCategoryData.slug}`);
                  }}
                >
                  {activeSubCategoryData.title}
                </h2>
                
                <div className="relative w-full h-[220px] rounded-md overflow-hidden mb-8 border border-white/10 shrink-0">
                  <img src={activeDomainData?.spotlightImage} alt={activeSubCategoryData.title} className="w-full h-full object-cover opacity-80 mix-blend-screen" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#05080D] via-transparent to-transparent opacity-80" />
                </div>

                <div>
                  <h4 className="text-[11px] font-bold tracking-[2px] uppercase text-[#84CC16] mb-4">PRODUCTS</h4>
                  <div className="grid grid-cols-2 gap-4">
                    {activeSubCategoryData.products.map((product) => (
                      <div 
                        key={product.id} 
                        className="group flex items-center gap-3 cursor-pointer bg-white/5 p-3 rounded-md hover:bg-white/10 transition-colors"
                        onClick={() => {
                          setHoveredNav(null);
                          // Since we don't have static mapping anymore, we use the product's slug as root
                          navigate(`/${product.slug}`);
                        }}
                      >
                        <span className="text-[13px] font-bold text-white/90 group-hover:text-white transition-colors flex-1">{product.title}</span>
                        <div className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                          <MiniArrow color="#84CC16" />
                        </div>
                      </div>
                    ))}
                    {activeSubCategoryData.products.length === 0 && (
                      <span className="text-white/40 text-sm">No products available in this category.</span>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </header>
  );
}
