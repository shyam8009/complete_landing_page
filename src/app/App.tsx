import { useState, useEffect, useRef } from "react";
import svgPaths from "@/imports/1920WLight/svg-bymm5omek1";
import sahanaLogo from "@/imports/logo-sahana.png";
import makeInIndiaLogo from "@/imports/logo-make-in-india.png";
import heroVideo from "@/imports/Hero banner Video.mp4";

// New product images — all of the same tactical drone, different shots & environments
import heroImg from "@/imports/magnific_professional-outdoor-prod_y6xDQjJPW9.jpeg";
import sensorDomeImg from "@/imports/magnific_extreme-closeup-macro-pro_WMNENw4cXe.png";
import motorImg from "@/imports/magnific_extreme-closeup-macro-pro_8vcjnezIrU.png";
import fieldImg from "@/imports/magnific_professional-outdoor-prod_brmNd7p5Y2.png";
import sensorAngle2Img from "@/imports/magnific_extreme-closeup-macro-pro_LUQGHhOswO.png";
import flightImg from "@/imports/sahana_fpv_interceptor.jpg";
import jungleImg from "@/imports/magnific_professional-outdoor-prod_SObWxSiUb8.png";
import infinitySpearImg from "@/imports/infinity_spear.jpg";
import rfDetectorImg from "@/imports/rf_detector_d360.jpg";
import infinityRhinoImg from "@/imports/infinity_rhino.jpg";
import infinityRadarImg from "@/imports/infinity_radar.jpg";
import arsenalFacilityImg from "@/imports/arsenal_facility.jpg";
import haleDroneImg from "@/imports/hale_drone.jpg";
import digitalTwinImg from "@/imports/digital_twin.jpg";
import newsCelImg from "@/imports/news_cel_agreement.png";
import corporateHouse1 from "@/imports/corporate_house_1.jpg";
import corporateHouse2 from "@/imports/corporate_house_2.jpg";
import corporateHouse3 from "@/imports/corporate_house_3.jpg";
import innovation1 from "@/imports/innovation_1.jpg";
import innovation2 from "@/imports/innovation_2.jpg";
import innovation3 from "@/imports/innovation_3.png";
import innovation4 from "@/imports/innovation_4.jpg";
import innovation5 from "@/imports/innovation_5.jpg";

import drone3d1 from "@/imports/drone_3d_1.gif";
import drone3d2 from "@/imports/drone_3d_2.gif";

const INTER = "'Inter', sans-serif";

const CARD_GRADIENT =
  "linear-gradient(rgba(1,1,1,0) 0%,rgba(1,1,1,0.004) 1.8%,rgba(1,1,1,0.008) 4.8%,rgba(1,1,1,0.02) 9%,rgba(1,1,1,0.043) 13.9%,rgba(1,1,1,0.075) 19.8%,rgba(1,1,1,0.125) 27%,rgba(1,1,1,0.192) 35%,rgba(1,1,1,0.28) 43.5%,rgba(1,1,1,0.38) 53%,rgba(1,1,1,0.54) 66%,rgba(1,1,1,0.737) 81%,rgb(1,1,1) 100%)";

// ─── SVG helpers ────────────────────────────────────────────────────────────

function AndurilLogo({ width = 210 }: { width?: number }) {
  return (
    <img src={sahanaLogo} alt="Sahana Defence" style={{ width: `${width}px`, height: 'auto' }} className="h-10 object-contain pointer-events-auto" />
  );
}

function SmallLogo({ width = 150 }: { width?: number }) {
  return (
    <img src={sahanaLogo} alt="Sahana Defence" style={{ width: `${width}px`, height: 'auto' }} className="h-9 object-contain" />
  );
}

function CardArrow() {
  return (
    <svg width="14.39" height="14.39" viewBox="0 0 14.3906 14.3906" fill="none">
      <path d={svgPaths.p1941c480} fill="white" />
    </svg>
  );
}

function MiniArrow({ color = "#010101" }: { color?: string }) {
  return (
    <svg width="9.89" height="9.89" viewBox="0 0 9.89062 9.89062" fill="none">
      <path d={svgPaths.pd0ac800} fill={color} />
    </svg>
  );
}

// ─── Reusable "text + underline + arrow" link ────────────────────────────────

function UnderlineLink({
  children,
  color = "#010101",
  opacity = 1,
}: {
  children: React.ReactNode;
  color?: string;
  opacity?: number;
}) {
  return (
    <div className="flex items-center gap-2 cursor-pointer" style={{ opacity }}>
      <div className="relative">
        <span
          className="text-sm capitalize whitespace-nowrap"
          style={{ color, fontFamily: INTER, fontWeight: 400 }}
        >
          {children}
        </span>
        <div className="absolute -bottom-1.5 left-0 right-0 h-px" style={{ background: color }} />
      </div>
      <MiniArrow color={color} />
    </div>
  );
}

// ─── NAV ────────────────────────────────────────────────────────────────────

interface NavDataStructure {
  [key: string]: {
    description: string;
    categories: {
      [key: string]: string[];
    };
  };
}

const NAV_DATA: NavDataStructure = {
  "Protect": {
    description: "Advanced electronic and information systems engineered to safeguard critical assets and neutralize adversarial threats with speed and precision.",
    categories: {
      "Electronic Warfare": [
        "Drone Systems",
        "Radar Systems",
        "Jamming Systems",
        "Detection Systems"
      ],
      "Information Warfare": [
        "Intelligence & Surveillance",
        "Command & Control",
        "Communication & Monitoring",
        "AI & Language"
      ]
    }
  },
  "Detect": {
    description: "Multi-domain sensing networks and intelligent software that provide absolute battlefield visibility and real-time situational awareness.",
    categories: {
      "Defence Deeptech": [
        "Acoustic Tracking",
        "Thermal Imaging",
        "Sensor Fusion Engine",
        "Target Acquisition"
      ]
    }
  },
  "Dominate": {
    description: "Integrated tactical superiority systems across air, land, and sea, delivering decisive autonomous action for national defense.",
    categories: {
      "Aerospace & Defence": [
        "Autonomous UAVs",
        "VTOL Flight Systems",
        "Modular Payloads",
        "Intercept Munitions"
      ]
    }
  },
  "Investors": {
    description: "Financial updates, governance guidelines, annual reports, and resources for shareholders of Sahana Defence.",
    categories: {
      "Financials": [
        "Quarterly Reports",
        "SEC Filings",
        "Annual Reports"
      ],
      "Governance": [
        "Board of Directors",
        "Committee Charters",
        "Code of Conduct"
      ]
    }
  },
  "Newsroom": {
    description: "The latest press releases, articles, official statements, and media kits from Sahana Defence.",
    categories: {
      "Press": [
        "Press Releases",
        "Media Kits",
        "Contact PR"
      ],
      "Updates": [
        "Product News",
        "Feature Articles",
        "Events"
      ]
    }
  },
  "About Us": {
    description: "Discover our mission to rebuild the arsenal of democracy, our leadership team, our history, and our values.",
    categories: {
      "Company": [
        "Our Mission",
        "Leadership",
        "Locations"
      ],
      "Careers": [
        "Life at Sahana",
        "Open Positions",
        "Early Careers"
      ]
    }
  }
};

function Nav({ onNavigate }: { onNavigate: (page: 'home' | 'fpv') => void }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeL1, setActiveL1] = useState<string | null>(null);
  const [activeL2, setActiveL2] = useState<string | null>(null);
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveL1(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <header 
      className="fixed top-0 left-0 right-0 z-50 border-b border-white/10"
      onMouseLeave={() => {
        setActiveL1(null);
        setHoveredCategory(null);
      }}
    >
      {/* backdrop */}
      <div className="absolute inset-0 backdrop-blur-xl bg-black/80" />

      <div className="relative flex items-center justify-between px-9 h-[86px] z-50">
        {/* Logo */}
        <a 
          href="#" 
          onClick={(e) => {
            e.preventDefault();
            onNavigate('home');
          }}
          className="shrink-0"
        >
          <AndurilLogo width={210} />
        </a>

        {/* Center links — desktop */}
        <nav className="hidden lg:flex items-center gap-4 xl:gap-6 absolute left-1/2 -translate-x-1/2">
          {Object.keys(NAV_DATA).map((link) => (
            <a
              key={link}
              href="#"
              className={`text-[15px] whitespace-nowrap px-3 py-1 border rounded-[2px] transition-all duration-150 cursor-pointer ${
                activeL1 === link 
                  ? "border-white text-white font-normal" 
                  : "border-transparent text-white/80 hover:text-white"
              }`}
              style={{ fontFamily: INTER }}
              onMouseEnter={() => {
                setActiveL1(link);
                setActiveL2(Object.keys(NAV_DATA[link].categories)[0]);
              }}
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Right links — desktop */}
        <div className="hidden lg:flex items-center">
          <a 
            href="#" 
            className="text-white/80 hover:text-white text-[15px] transition-colors" 
            style={{ fontFamily: INTER }}
          >
            Contact us
          </a>
        </div>

        {/* Hamburger — mobile */}
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <div className="space-y-1.5">
            <span className="block w-6 h-px bg-white" />
            <span className="block w-6 h-px bg-white" />
            <span className="block w-4 h-px bg-white" />
          </div>
        </button>
      </div>

      {/* Mega Menu Dropdown */}
      <div
        className={`absolute top-[86px] left-0 right-0 w-full bg-black border-y border-white/10 transition-all duration-300 origin-top overflow-hidden z-40 ${
          activeL1
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        {activeL1 && (
          <div className="max-w-[1400px] mx-auto grid grid-cols-12 px-16 py-12 gap-8 text-white select-none">
            {/* Column 1: Overview */}
            <div className="col-span-4 flex flex-col border-r border-white/10 pr-12">
              <h4 className="text-white text-[13px] tracking-[2px] uppercase font-bold mb-4">
                {activeL1.toUpperCase()} DOMAIN
              </h4>
              <p className="text-white/60 text-[15px] font-light leading-relaxed max-w-[320px]">
                {NAV_DATA[activeL1].description}
              </p>
            </div>

            {/* Column 2: Categories */}
            <div className="col-span-4 flex flex-col border-r border-white/10 px-8">
              <span className="text-[11px] tracking-[1.5px] text-white/40 uppercase font-medium mb-4">
                {activeL1.toUpperCase()}
              </span>
              <div className="flex flex-col gap-3">
                {Object.keys(NAV_DATA[activeL1].categories).map((category) => {
                  const isHovered = hoveredCategory === category;
                  const isActive = activeL2 === category;
                  return (
                    <div
                      key={category}
                      className="text-[15px] font-normal transition-colors duration-150 cursor-pointer py-1.5 flex items-center"
                      style={{
                        color: isHovered ? "#2e4321" : isActive ? "#ffffff" : "rgba(255, 255, 255, 0.6)"
                      }}
                      onMouseEnter={() => {
                        setHoveredCategory(category);
                        setActiveL2(category);
                      }}
                      onMouseLeave={() => {
                        setHoveredCategory(null);
                      }}
                    >
                      <span>{isHovered ? "-" : "+"} {category}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Column 3: Products */}
            <div className="col-span-4 flex flex-col pl-12">
              <span className="text-[11px] tracking-[1.5px] text-white/40 uppercase font-medium mb-4">
                Products
              </span>
              <div className="flex flex-col gap-2.5">
                {activeL2 &&
                  NAV_DATA[activeL1].categories[activeL2]?.map((product) => (
                    <div
                      key={product}
                      onClick={() => {
                        if (product === "Drone Systems") {
                          onNavigate("fpv");
                          setActiveL1(null);
                        }
                      }}
                      className="text-white/85 hover:text-[#2e4321] transition-colors duration-150 cursor-pointer font-normal text-[15px] py-0.5"
                    >
                      {product}
                    </div>
                  ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="relative lg:hidden bg-black/95 px-9 py-8 flex flex-col gap-6 z-50">
          {Object.keys(NAV_DATA).map((link) => (
            <div key={link} className="flex flex-col gap-2">
              <span className="text-white text-sm tracking-[2px] uppercase font-bold">
                {link}
              </span>
              <div className="pl-4 flex flex-col gap-2 border-l border-white/10 mt-1">
                {Object.keys(NAV_DATA[link].categories).map((cat) => (
                  <div key={cat} className="flex flex-col gap-1 mt-1">
                    <span className="text-white/90 text-sm font-semibold">{cat}</span>
                    <div className="pl-3 flex flex-col gap-1.5 text-white/70 text-xs">
                      {NAV_DATA[link].categories[cat].map((prod) => (
                        <span 
                          key={prod}
                          onClick={() => {
                            if (prod === "Drone Systems") {
                              onNavigate("fpv");
                              setMobileOpen(false);
                            }
                          }}
                          className="cursor-pointer hover:text-white"
                        >
                          {prod}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
          <div className="border-t border-white/20 pt-6 flex flex-col gap-4">
            <a href="#" className="text-white/70 text-lg" style={{ fontFamily: INTER }}>Contact us</a>
          </div>
        </div>
      )}
    </header>
  );
}

// ─── HERO ───────────────────────────────────────────────────────────────────

function Hero() {
  const [playVideo, setPlayVideo] = useState(false);
  const [showText, setShowText] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Start video background after 2 seconds
    const videoTimer = setTimeout(() => {
      setPlayVideo(true);
      if (videoRef.current) {
        videoRef.current.play().catch((err) => {
          console.log("Auto-playing video failed or was interrupted:", err);
        });
      }
    }, 2000);

    // Hide text overlay after 4 seconds (2s image + 2s video)
    const textTimer = setTimeout(() => {
      setShowText(false);
    }, 4000);

    return () => {
      clearTimeout(videoTimer);
      clearTimeout(textTimer);
    };
  }, []);

  const headingText = "Protect. Detect. Dominate";
  const overheadText = "AI-led Deep Tech Company";

  return (
    <section 
      className="relative w-full overflow-hidden flex flex-col justify-end pb-24 px-9" 
      style={{ height: "calc(100vh - 86px)" }}
    >
      {/* Background image */}
      <img 
        src={heroImg} 
        alt="Ghost drone" 
        className="absolute inset-0 w-full h-full object-cover z-0" 
      />

      {/* Video Background (fades in after 2 seconds) */}
      <video
        ref={videoRef}
        src={heroVideo}
        loop
        muted
        playsInline
        className={`absolute inset-0 w-full h-full object-cover z-0 transition-opacity duration-1000 ease-in-out ${
          playVideo ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      />
      
      {/* dark overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-black/40 pointer-events-none z-10" />
      
      {/* Hero content */}
      <div 
        className={`relative z-20 max-w-4xl flex flex-col gap-4 select-none transition-all duration-1000 ease-in-out ${
          showText ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <p className="text-[#2e4321] text-sm tracking-[4px] uppercase font-bold" style={{ fontFamily: INTER }}>
          {overheadText}
        </p>
        <h1 className="text-white text-5xl md:text-7xl tracking-tighter uppercase leading-none font-light" style={{ fontFamily: INTER }}>
          {headingText}
        </h1>
        <p className="text-white/80 text-lg md:text-2xl font-light max-w-2xl leading-relaxed" style={{ fontFamily: INTER }}>
          Real-time edge compute, vertical takeoff and landing, and modular payload configuration for persistent military autonomy.
        </p>
        <div className="mt-6 flex flex-wrap gap-4 pointer-events-auto">
          <button className="px-6 py-3 bg-[#2e4321] hover:bg-[#3c562b] text-white font-semibold text-sm rounded-sm transition-all duration-300 shadow-[0_0_15px_rgba(46,67,33,0.4)] hover:shadow-[0_0_20px_rgba(46,67,33,0.6)] cursor-pointer">
            Explore Specifications
          </button>
          <button className="px-6 py-3 border border-white/20 hover:border-white/60 text-white font-semibold text-sm rounded-sm transition-all duration-300 backdrop-blur-sm cursor-pointer">
            Watch Operations
          </button>
        </div>
      </div>
    </section>
  );
}

function ProductCard({
  image,
  name,
  subtitle,
  description,
  className = "",
  showArrow = false,
}: {
  image: string;
  name: string;
  subtitle?: string;
  description?: string;
  className?: string;
  showArrow?: boolean;
}) {
  return (
    <div className={`relative overflow-hidden rounded-sm cursor-pointer group ${className}`}>
      <img
        src={image}
        alt={name}
        className="absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105 group-hover:blur-[3px]"
      />
      {/* gradient overlay */}
      <div
        className="absolute inset-0 mix-blend-multiply opacity-50"
        style={{ backgroundImage: CARD_GRADIENT }}
      />
      {/* text */}
      <div className="absolute bottom-9 left-5 right-5">
        <div className="flex items-center justify-between gap-4">
          <p
            className="text-white text-2xl tracking-tight leading-tight"
            style={{ fontFamily: INTER, fontWeight: 700 }}
          >
            {name}
          </p>
          <div
            className={`transition-opacity duration-300 shrink-0 ${
              showArrow ? "opacity-100" : "opacity-0 group-hover:opacity-100"
            }`}
          >
            <CardArrow />
          </div>
        </div>
        {subtitle && (
          <p
            className="text-white text-base mt-2 opacity-90"
            style={{ fontFamily: INTER, fontWeight: 400 }}
          >
            {subtitle}
          </p>
        )}
        {description && (
          <p
            className="text-white/80 text-[13px] md:text-sm mt-3 opacity-0 max-h-0 translate-y-2 group-hover:opacity-100 group-hover:max-h-[120px] group-hover:translate-y-0 transition-all duration-500 ease-out leading-relaxed overflow-hidden"
            style={{ fontFamily: INTER, fontWeight: 400 }}
          >
            {description}
          </p>
        )}
      </div>
    </div>
  );
}

// ─── PRODUCTS SECTION ───────────────────────────────────────────────────────

const PRODUCTS_DATA = [
  {
    image: sensorDomeImg,
    name: "Infinity Optics",
    subtitle: "Eyes on the Mission.",
    description: "A precision sensing payload designed to deliver real-time visual intelligence in dynamic operational environments. Engineered for reconnaissance, target observation, and mission awareness, Infinity Optics enhances decision-making with reliable surveillance and persistent situational visibility.",
    desktopGridClass: "[grid-column:1/span_4] [grid-row:1]",
    showArrow: true,
  },
  {
    image: flightImg,
    name: "Sahana FPV Bullseye & Interceptor",
    subtitle: "Tactical FPV Strike Platform",
    description: "Built for high-speed reconnaissance and precision engagement, the Sahana FPV Bullseye & Interceptor combines agile maneuverability, real-time situational awareness, and mission-ready reliability. Engineered for rapid deployment, it enables forces to operate effectively across dynamic and contested environments.",
    desktopGridClass: "[grid-column:5/span_4] [grid-row:1]",
    showArrow: true,
  },
  {
    image: infinitySpearImg,
    name: "Infinity Spear",
    subtitle: "Portable Counter-UAS System",
    description: "Neutralize hostile drones with high-power multi-band jamming technology. Designed for rapid deployment, Infinity Spear delivers effective drone disruption at ranges up to 2.5 km while maintaining lightweight, one-person operation.",
    desktopGridClass: "[grid-column:9/span_4] [grid-row:1]",
    showArrow: true,
  },
  {
    image: rfDetectorImg,
    name: "RF Detector D360",
    subtitle: "Detect the Invisible.",
    description: "Engineered to uncover signal activity across a broad frequency spectrum, RF Detector D360 provides operators with reliable electronic awareness for defense, intelligence, and security operations.",
    desktopGridClass: "[grid-column:1/span_4] [grid-row:2/span_2]",
    showArrow: false,
  },
  {
    image: haleDroneImg,
    name: "HALE Drones",
    subtitle: "High-Altitude Long-Endurance.",
    description: "They are unique assets providing long-term observation and strike capabilities.",
    desktopGridClass: "[grid-column:5/span_8] [grid-row:2]",
    showArrow: false,
  },
  {
    image: infinityRhinoImg,
    name: "Infinity Rhino",
    subtitle: "Defend Critical Airspace.",
    description: "A mission-ready anti-drone platform built to disrupt unauthorized UAV activity with precision and reliability. Combining portability, endurance, and operational flexibility, Infinity Rhino empowers teams to maintain control in contested environments.",
    desktopGridClass: "[grid-column:5/span_4] [grid-row:3]",
    showArrow: false,
  },
  {
    image: digitalTwinImg,
    name: "Digital Twin",
    subtitle: "Engineering Ports and Marine Intelligence",
    description: "Protecting Borders, Assets and Strategic Infrastructure",
    desktopGridClass: "[grid-column:9/span_4] [grid-row:3]",
    showArrow: false,
  },
];

function ProductsSection() {
  return (
    <section className="relative z-10 w-full px-9 pt-12 pb-16 bg-black/45 backdrop-blur-[2px]">
      {/* Section header */}
      <div className="flex items-end justify-between mb-5 w-full">
        <h2
          className="text-white text-3xl md:text-4xl tracking-tight"
          style={{ fontFamily: INTER, fontWeight: 400 }}
        >
          Electronic Warfare
        </h2>
        <UnderlineLink color="white" opacity={0.6}>
          Mission Critical Facility
        </UnderlineLink>
      </div>

      {/* ── Desktop 12-col grid ── */}
      <div
        className="hidden lg:grid grid-cols-12 gap-5 w-full"
        style={{ gridTemplateRows: "repeat(3, clamp(220px, 31vw, 598px))" }}
      >
        {PRODUCTS_DATA.map((product) => (
          <ProductCard
            key={product.name}
            image={product.image}
            name={product.name}
            subtitle={product.subtitle}
            description={product.description}
            className={product.desktopGridClass}
            showArrow={product.showArrow}
          />
        ))}
      </div>

      {/* ── Mobile / tablet stacked grid ── */}
      <div className="grid lg:hidden grid-cols-1 sm:grid-cols-2 gap-5 w-full">
        {PRODUCTS_DATA.map((product) => (
          <ProductCard
            key={product.name}
            image={product.image}
            name={product.name}
            subtitle={product.subtitle}
            description={product.description}
            className="aspect-square"
            showArrow={product.showArrow}
          />
        ))}
      </div>
    </section>
  );
}

// ─── ARSENAL-1 FEATURE SECTION ──────────────────────────────────────────────

function Arsenal1Section() {
  return (
    <section className="relative z-10 w-full py-20 flex flex-col gap-9 bg-neutral-900/60 backdrop-blur-md">
      {/* header */}
      <div className="px-9 flex items-end justify-between">
        <h2
          className="text-white text-3xl md:text-4xl tracking-tight"
          style={{ fontFamily: INTER, fontWeight: 400 }}
        >
          Electronic Warfare
        </h2>
        <UnderlineLink color="white" opacity={0.6}>
          Mission Critical Facility
        </UnderlineLink>
      </div>

      {/* featured image */}
      <div className="px-9">
        <div className="relative w-full overflow-hidden rounded-sm" style={{ aspectRatio: "3 / 1" }}>
          <img
            src={arsenalFacilityImg}
            alt="Sahana Defence manufacturing facility"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>

      {/* caption row */}
      <div className="px-9 grid grid-cols-1 md:grid-cols-12 gap-5">
        <div className="md:col-span-2 flex flex-col gap-0.5">
          <p
            className="text-white text-xs uppercase tracking-[0.54px]"
            style={{ fontFamily: INTER, fontWeight: 400 }}
          >
            Designed by Sahana Defence
          </p>
        </div>
      </div>
    </section>
  );
}

// ─── NEWS & INSIGHTS ────────────────────────────────────────────────────────

function NewsSection() {
  return (
    <section className="w-full py-14 flex flex-col gap-9" style={{ background: "#f1f0ea" }}>
      {/* header */}
      <div className="px-9">
        <div className="flex items-end justify-between pb-4 border-b border-black/60">
          <h2
            className="text-[#010101] text-4xl md:text-5xl tracking-[-0.9px] capitalize"
            style={{ fontFamily: INTER, fontWeight: 400 }}
          >
            News &amp; Insights
          </h2>
          <UnderlineLink color="#010101">All articles</UnderlineLink>
        </div>
      </div>

      {/* article layout */}
      <div className="px-9 grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* text */}
        <div className="lg:col-span-5 flex flex-col gap-9">
          <div className="flex flex-col gap-2">
            <p
              className="text-[#010101] text-xs uppercase tracking-[0.54px]"
              style={{ fontFamily: INTER, fontWeight: 500 }}
            >
              06/26/2026
            </p>
            <h3
              className="text-[#010101] text-3xl md:text-4xl tracking-[-0.36px] capitalize leading-tight"
              style={{ fontFamily: INTER, fontWeight: 400 }}
            >
              Sahana Defence Signs Strategic Manufacturing Agreement with CEL
            </h3>
          </div>
          <p
            className="text-[#010101] text-base leading-relaxed"
            style={{ fontFamily: INTER, fontWeight: 400 }}
          >
            Sahana Defence has entered into a Contract Agreement with Central Electronics Limited (CEL) to expand India's indigenous defence manufacturing capabilities. The partnership will support the establishment of a dedicated facility focused on Electronic Warfare systems, weapon systems, defence peripherals, and advanced DefenceTech solutions, reinforcing the nation's vision for self-reliance in defence production.
          </p>
          <UnderlineLink color="#010101">Read more</UnderlineLink>
        </div>

        {/* image */}
        <div className="lg:col-start-7 lg:col-span-6">
          <div className="relative w-full overflow-hidden rounded-sm" style={{ aspectRatio: "16/9" }}>
            <img
              src={newsCelImg}
              alt="Sahana Defence signs agreement with CEL"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── EDITORIAL PANEL ────────────────────────────────────────────────────────

function EditorialPanel({
  title,
  image,
  label,
  bg,
  textColor = "white",
  dividerColor = "white",
  counter,
}: {
  title: string;
  image: string | string[];
  label: string;
  bg: string;
  textColor?: string;
  dividerColor?: string;
  counter: string;
}) {
  const isArray = Array.isArray(image);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!isArray) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % image.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [isArray, image]);

  return (
    <div
      className="flex-1 flex flex-col gap-9 py-16 px-9 min-h-[640px] relative"
      style={{ background: bg }}
    >
      {/* header */}
      <div className="flex items-end justify-between">
        <h3
          className="text-3xl md:text-4xl tracking-[-0.36px]"
          style={{ fontFamily: INTER, fontWeight: 400, color: textColor }}
        >
          {title}
        </h3>
        <UnderlineLink color={textColor}>
          {label}
        </UnderlineLink>
      </div>

      {/* divider */}
      <div className="h-px opacity-60" style={{ background: dividerColor }} />

      {/* image */}
      <div className="relative w-full flex-1 overflow-hidden rounded-sm min-h-[320px]">
        {isArray ? (
          image.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`${title} slide ${idx + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                idx === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
              }`}
            />
          ))
        ) : (
          <img
            src={image}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}

      </div>
    </div>
  );
}

function EditorialSection() {
  const corporateHouseImages = [corporateHouse1, corporateHouse2, corporateHouse3];
  const innovationImages = [
    innovation1,
    innovation2,
    innovation3,
    innovation4,
    innovation5
  ];
  return (
    <section className="w-full flex flex-col lg:flex-row">
      <EditorialPanel
        title="Sahana Corporate House"
        image={corporateHouseImages}
        label="Read More"
        bg="#505544"
        textColor="white"
        dividerColor="white"
        counter="PT — 01 / 02"
      />
      <EditorialPanel
        title="Innovation"
        image={innovationImages}
        label="Read More"
        bg="#8e9291"
        textColor="#010101"
        dividerColor="#010101"
        counter="PT — 02 / 02"
      />
    </section>
  );
}

// ─── FOOTER ─────────────────────────────────────────────────────────────────

const FOOTER_COMPANY = ["Mission", "Newsroom", "Leadership", "Gear Store"];
const FOOTER_WORK = ["Careers", "Early Career", "Veteran Careers", "Open Roles"];
const FOOTER_SOCIAL = ["X", "YouTube", "Instagram", "Facebook", "LinkedIn"];

function FooterCol({ label, links }: { label: string; links: string[] }) {
  return (
    <div className="flex flex-col gap-5">
      <p
        className="text-white/60 text-xs uppercase tracking-[0.54px]"
        style={{ fontFamily: INTER, fontWeight: 500 }}
      >
        {label}
      </p>
      <ul className="flex flex-col gap-2">
        {links.map((link) => (
          <li key={link}>
            <a
              href="#"
              className="text-white text-lg hover:text-white/80 transition-colors"
              style={{ fontFamily: INTER, fontWeight: 400 }}
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Footer() {
  return (
    <footer className="w-full bg-black pt-16 pb-16 flex flex-col gap-20">
      {/* top nav columns */}
      <div className="px-9 flex flex-col md:flex-row flex-wrap justify-between gap-10">
        {/* logo & contact */}
        <div className="flex flex-col gap-6 items-start">
          <SmallLogo />
          <img 
            src={makeInIndiaLogo} 
            alt="Make in India" 
            className="h-10 w-auto object-contain invert opacity-70 hover:opacity-100 transition-opacity duration-200" 
          />
          <div className="flex flex-col gap-2 mt-2">
            <p
              className="text-white/60 text-xs uppercase tracking-[0.54px]"
              style={{ fontFamily: INTER, fontWeight: 500 }}
            >
              Contact
            </p>
            <a
              href="mailto:contact@sahanadefence.com"
              className="text-white text-sm hover:text-white/80 transition-colors"
              style={{ fontFamily: INTER, fontWeight: 400 }}
            >
              contact@sahanadefence.com
            </a>
          </div>
        </div>

        {/* Company */}
        <div className="min-w-[120px]">
          <FooterCol label="Company" links={FOOTER_COMPANY} />
        </div>
        {/* Work with us */}
        <div className="min-w-[120px]">
          <FooterCol label="Work with us" links={FOOTER_WORK} />
        </div>
        {/* Social */}
        <div className="min-w-[120px]">
          <FooterCol label="Social" links={FOOTER_SOCIAL} />
        </div>
      </div>

            {/* bottom legal */}
      <div className="px-9 flex flex-col gap-3 border-t border-white/10 pt-8">
        <p
          className="text-white text-xs uppercase tracking-[0.54px]"
          style={{ fontFamily: INTER, fontWeight: 500 }}
        >
          Copyright © 2026 Sahana Defence
        </p>
        <div className="flex flex-row flex-wrap gap-x-6 gap-y-2">
          {["Privacy Policy", "Terms of Use", "Modern Anti-Slavery Policy", "Investor Relations"].map(
            (item) => (
              <a
                key={item}
                href="#"
                className="text-white/60 text-xs uppercase tracking-[0.54px] capitalize hover:text-white/90 transition-colors"
                style={{ fontFamily: INTER, fontWeight: 500 }}
              >
                {item}
              </a>
            )
          )}
        </div>
      </div>
    </footer>
  );
}

// ─── SAHANA FPV PRODUCT PAGE ────────────────────────────────────────────────

function SahanaFpvProductPage() {
  const [activeTab, setActiveTab] = useState(0);
  const [viewMode, setViewMode] = useState<1 | 2>(1);
  const [selectedSpot, setSelectedSpot] = useState(0);

  const hotspots: Record<number, Array<{ name: string; desc: string }>> = {
    1: [
      { name: "Carbon-Fiber Frame Structure", desc: "Built using aerospace-grade ultra-light carbon composites, yielding maximum structural strength with minimal weight." },
      { name: "Agile Propulsion Array", desc: "Equipped with high-torque brushless motors and twin aerodynamic rotors providing instantaneous yaw/pitch responsiveness." },
      { name: "Impact-Resistant Motor Mounts", desc: "Custom CNC-machined mounts absorb flight vibrations, protecting internal telemetry from mechanical noise." }
    ],
    2: [
      { name: "Visual Guidance Gimbal", desc: "Dual optical-thermal camera dome features visual-inertial tracking for autonomous threat target acquisition." },
      { name: "Electronic Hardening Core", desc: "Internal computational module with visual-flow odometry and localized RF anti-jamming filters." },
      { name: "Aerodynamic Canopy", desc: "Tactical low-drag canopy engineered to optimize cooling air intake and airflow stability at speeds up to 180 km/h." }
    ]
  };

  const tabs = [
    {
      title: "Aerodynamic Performance",
      text: "Propelled by high-efficiency brushless motors and custom carbon-fiber rotor blades, achieving speeds up to 180 km/h for rapid tactical positioning and extreme agile maneuvering in contested airspace.",
    },
    {
      title: "Electro-Optical Intelligence",
      text: "An integrated dual-sensor gimbal housing high-definition optical and thermal infrared sensors ensures low-latency, high-clarity video feeds for day/night target reconnaissance and observation.",
    },
    {
      title: "GPS-Denied Autonomy",
      text: "Equipped with advanced optical flow navigation, visual inertia odometry, and electronic hardening to successfully maintain flight stability and carry out missions in GPS-denied or heavily jammed environments.",
    },
  ];

  return (
    <div className="w-full bg-[#111] text-white">
      {/* 1. Hero Section */}
      <section className="relative w-full min-h-[80vh] flex flex-col justify-end pb-20 px-9 overflow-hidden">
        {/* Background Image */}
        <img
          src={heroImg}
          alt="Sahana FPV Hero"
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/20 z-10" />

        <div className="relative z-20 max-w-4xl flex flex-col gap-4 select-none">
          <p className="text-[#2e4321] text-sm tracking-[4px] uppercase font-bold" style={{ fontFamily: INTER }}>
            Tactical Unmanned Aerial System
          </p>
          <h1 className="text-white text-5xl md:text-7xl font-bold tracking-tighter uppercase leading-none" style={{ fontFamily: INTER }}>
            Sahana FPV <br />
            <span className="font-light text-white/90">Bullseye & Interceptor</span>
          </h1>
          <p className="text-white/80 text-lg md:text-2xl font-light max-w-2xl leading-relaxed mt-2" style={{ fontFamily: INTER }}>
            Built for high-speed reconnaissance and precision engagement, the Sahana FPV Bullseye & Interceptor combines agile maneuverability, real-time situational awareness, and mission-ready reliability.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <button className="px-6 py-3 bg-[#2e4321] hover:bg-[#3c562b] text-white font-semibold text-sm rounded-sm transition-all duration-300 shadow-[0_0_15px_rgba(46,67,33,0.4)] hover:shadow-[0_0_20px_rgba(46,67,33,0.6)] cursor-pointer">
              Download Datasheet
            </button>
            <button className="px-6 py-3 border border-white/20 hover:border-white/60 text-white font-semibold text-sm rounded-sm transition-all duration-300 backdrop-blur-sm cursor-pointer">
              Request Specifications
            </button>
          </div>
        </div>
      </section>

      {/* 2. Specs Side-by-Side Comparison */}
      <section className="w-full py-24 px-9 bg-black border-t border-white/10">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* FPV Bullseye Card */}
          <div className="flex flex-col gap-6 bg-neutral-900/40 border border-white/10 rounded-sm p-8 hover:border-white/25 transition-all duration-300">
            <h2 className="text-3xl font-bold tracking-tight" style={{ fontFamily: INTER }}>FPV Bullseye</h2>
            <p className="text-white/60 text-sm leading-relaxed" style={{ fontFamily: INTER }}>
              Engineered for precision surveillance and target engagement, providing ground forces with a lightweight, rapid-response tactical aerial capability.
            </p>
            <div className="relative w-full h-[280px] overflow-hidden rounded-sm bg-neutral-950 flex items-center justify-center">
              <img src={fieldImg} alt="Sahana FPV Bullseye" className="w-full h-full object-cover" />
            </div>
            <div className="grid grid-cols-3 gap-4 border-t border-white/10 pt-6">
              <div>
                <p className="text-[11px] tracking-wider text-white/40 uppercase font-semibold">Range</p>
                <p className="text-xl font-bold mt-1">+20km</p>
              </div>
              <div>
                <p className="text-[11px] tracking-wider text-white/40 uppercase font-semibold">Endurance</p>
                <p className="text-xl font-bold mt-1">+40min</p>
              </div>
              <div>
                <p className="text-[11px] tracking-wider text-white/40 uppercase font-semibold">Deployment</p>
                <p className="text-xl font-bold mt-1">&lt; 60s</p>
              </div>
            </div>
          </div>

          {/* FPV Interceptor Card */}
          <div className="flex flex-col gap-6 bg-neutral-900/40 border border-white/10 rounded-sm p-8 hover:border-white/25 transition-all duration-300">
            <h2 className="text-3xl font-bold tracking-tight" style={{ fontFamily: INTER }}>FPV Interceptor</h2>
            <p className="text-white/60 text-sm leading-relaxed" style={{ fontFamily: INTER }}>
              Optimized for high-speed threat interception and dynamic engagement, designed to chase down and neutralize hostile drones.
            </p>
            <div className="relative w-full h-[280px] overflow-hidden rounded-sm bg-neutral-950 flex items-center justify-center">
              <img src={flightImg} alt="Sahana FPV Interceptor" className="w-full h-full object-cover" />
            </div>
            <div className="grid grid-cols-3 gap-4 border-t border-white/10 pt-6">
              <div>
                <p className="text-[11px] tracking-wider text-white/40 uppercase font-semibold">Range</p>
                <p className="text-xl font-bold mt-1">+20km</p>
              </div>
              <div>
                <p className="text-[11px] tracking-wider text-white/40 uppercase font-semibold">Max Speed</p>
                <p className="text-xl font-bold mt-1">180 km/h</p>
              </div>
              <div>
                <p className="text-[11px] tracking-wider text-white/40 uppercase font-semibold">Deployment</p>
                <p className="text-xl font-bold mt-1">&lt; 45s</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. 3D Technical Visualization Section */}
      <section className="w-full py-24 px-9 bg-[#0b0c0d] border-t border-white/10 relative overflow-hidden">
        {/* Decorative cyber grid lines */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none z-0" />
        
        <div className="max-w-[1400px] mx-auto relative z-10 flex flex-col gap-16">
          <div className="text-center max-w-2xl mx-auto flex flex-col gap-4">
            <span className="text-[#2e4321] text-xs uppercase tracking-[3px] font-bold">Interactive Telemetry</span>
            <h2 className="text-3xl md:text-5xl tracking-tight" style={{ fontFamily: INTER, fontWeight: 300 }}>
              3D Technical Visualization
            </h2>
            <p className="text-white/60 text-sm md:text-base leading-relaxed" style={{ fontFamily: INTER }}>
              Select a system view to analyze the aerodynamic envelope, payload distribution, and flight stability modeling of the Sahana FPV.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            {/* Control Panel (4 cols) */}
            <div className="lg:col-span-4 flex flex-col justify-between bg-neutral-900/40 border border-white/10 rounded-sm p-6 backdrop-blur-md">
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <span className="text-[11px] tracking-wider text-white/40 uppercase font-bold">System View</span>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => {
                        setViewMode(1);
                        setSelectedSpot(0);
                      }}
                      className={`py-3 px-4 text-xs font-semibold uppercase tracking-wider rounded-sm border transition-all duration-300 ${
                        viewMode === 1
                          ? "bg-[#2e4321] border-[#2e4321] text-white"
                          : "bg-transparent border-white/10 text-white/60 hover:border-white/20 hover:text-white"
                      }`}
                    >
                      Structural Frame
                    </button>
                    <button
                      onClick={() => {
                        setViewMode(2);
                        setSelectedSpot(0);
                      }}
                      className={`py-3 px-4 text-xs font-semibold uppercase tracking-wider rounded-sm border transition-all duration-300 ${
                        viewMode === 2
                          ? "bg-[#2e4321] border-[#2e4321] text-white"
                          : "bg-transparent border-white/10 text-white/60 hover:border-white/20 hover:text-white"
                      }`}
                    >
                      Flight Dynamics
                    </button>
                  </div>
                </div>

                <div className="flex flex-col gap-3 border-t border-white/10 pt-6">
                  <span className="text-[11px] tracking-wider text-white/40 uppercase font-bold">Component Analysis</span>
                  <div className="flex flex-col gap-2.5">
                    {hotspots[viewMode].map((spot, idx) => (
                      <div
                        key={idx}
                        onClick={() => setSelectedSpot(idx)}
                        className={`p-3 rounded-sm border cursor-pointer transition-all duration-200 ${
                          selectedSpot === idx
                            ? "bg-white/5 border-white/35 text-white"
                            : "bg-transparent border-white/5 text-white/50 hover:border-white/10 hover:text-white"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-semibold">{spot.name}</span>
                          <span className="text-[10px] text-[#2e4321] font-bold">ACTIVE</span>
                        </div>
                        {selectedSpot === idx && (
                          <p className="text-[11px] mt-2 text-white/70 leading-relaxed transition-all duration-300">
                            {spot.desc}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Console Stats */}
              <div className="border-t border-white/10 pt-6 mt-6 grid grid-cols-2 gap-4">
                <div>
                  <span className="text-[9px] tracking-wider text-white/40 uppercase">Rotational Yaw</span>
                  <p className="text-sm font-mono text-white/80 mt-1">360° CONTINUOUS</p>
                </div>
                <div>
                  <span className="text-[9px] tracking-wider text-white/40 uppercase">Render Engine</span>
                  <p className="text-sm font-mono text-white/80 mt-1">RAY-TRACED GIF</p>
                </div>
              </div>
            </div>

            {/* Visualizer Display (8 cols) */}
            <div className="lg:col-span-8 flex flex-col justify-center items-center bg-black/60 border border-white/10 rounded-sm relative overflow-hidden group min-h-[480px]">
              {/* Scanline and corner decor */}
              <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-white/20 pointer-events-none" />
              <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-white/20 pointer-events-none" />
              <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-white/20 pointer-events-none" />
              <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-white/20 pointer-events-none" />
              
              {/* Animated scanline */}
              <div className="absolute inset-0 w-full h-[2px] bg-white/5 top-0 animate-[scanline_6s_linear_infinite] pointer-events-none z-10" />

              {/* Viewing screen */}
              <div className="relative w-full max-w-[560px] aspect-video flex items-center justify-center p-6 overflow-hidden">
                <img
                  src={viewMode === 1 ? drone3d1 : drone3d2}
                  alt="3D Drone Animation"
                  className="max-w-full max-h-full object-contain transition-all duration-500 scale-[1.8] mix-blend-screen opacity-90 group-hover:scale-[1.95]"
                />
              </div>

              {/* HUD compass overlay */}
              <div className="absolute bottom-6 left-6 text-[10px] font-mono text-white/40 select-none flex flex-col gap-1 z-10">
                <p>LATENCY: 12MS</p>
                <p>TELEMETRY: NOMINAL</p>
              </div>
              <div className="absolute bottom-6 right-6 text-[10px] font-mono text-white/40 select-none text-right z-10">
                <p>FOV: 45°</p>
                <p>ZOOM: 1.80X</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Build Qualities Tabbed Section */}
      <section className="w-full py-24 px-9 bg-[#161616] border-t border-white/10">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Tab selectors and text */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <h2 className="text-3xl md:text-4xl tracking-tight" style={{ fontFamily: INTER, fontWeight: 400 }}>
              Build Qualities
            </h2>
            <div className="flex flex-col gap-4">
              {tabs.map((tab, idx) => (
                <div
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className={`p-5 rounded-sm border cursor-pointer transition-all duration-300 ${
                    activeTab === idx
                      ? "bg-[#2e4321]/10 border-[#2e4321] text-white"
                      : "bg-transparent border-white/10 text-white/60 hover:border-white/20 hover:text-white"
                  }`}
                >
                  <p className="font-semibold text-lg" style={{ fontFamily: INTER }}>{tab.title}</p>
                  {activeTab === idx && (
                    <p className="text-sm mt-3 text-white/80 leading-relaxed">
                      {tab.text}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right: Large Image with transition */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="relative w-full rounded-sm overflow-hidden border border-white/10" style={{ aspectRatio: "16 / 9" }}>
              <img
                src={activeTab === 0 ? motorImg : activeTab === 1 ? sensorDomeImg : jungleImg}
                alt="Build Qualities Showcase"
                className="absolute inset-0 w-full h-full object-cover transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* 4. Use Case Section */}
      <section className="w-full py-24 px-9 bg-black border-t border-white/10">
        <div className="max-w-[1400px] mx-auto flex flex-col gap-12">
          <h2 className="text-3xl md:text-4xl tracking-tight text-center" style={{ fontFamily: INTER, fontWeight: 400 }}>
            Mission Applications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Defense */}
            <div className="p-8 rounded-sm border border-white/10 bg-neutral-900/20 flex flex-col gap-4">
              <span className="text-[#2e4321] text-xs uppercase tracking-[2px] font-bold">Military / Tactical</span>
              <h3 className="text-2xl font-bold" style={{ fontFamily: INTER }}>Defense Operations</h3>
              <p className="text-white/70 text-sm leading-relaxed" style={{ fontFamily: INTER }}>
                Deploys in under 60 seconds to provide dynamic battlefield awareness, target tracking, and high-speed threat interception in active electronic combat zones.
              </p>
            </div>

            {/* Commercial */}
            <div className="p-8 rounded-sm border border-white/10 bg-neutral-900/20 flex flex-col gap-4">
              <span className="text-[#2e4321] text-xs uppercase tracking-[2px] font-bold">Civilian / Security</span>
              <h3 className="text-2xl font-bold" style={{ fontFamily: INTER }}>Critical Patrol & Inspection</h3>
              <p className="text-white/70 text-sm leading-relaxed" style={{ fontFamily: INTER }}>
                Performs automated high-value asset inspections, remote search & rescue, and long-range border surveillance under extreme weather conditions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// ─── APP ─────────────────────────────────────────────────────────────────────

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'fpv'>('home');

  const handleNavigate = (page: 'home' | 'fpv') => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <div className="w-full min-h-screen bg-black overflow-x-hidden" style={{ fontFamily: INTER }}>
      <Nav onNavigate={handleNavigate} />
      {/* Push content below fixed nav */}
      <div className="pt-[86px]">
        {currentPage === 'home' ? (
          <>
            <Hero />
            <ProductsSection />
            <Arsenal1Section />
            <NewsSection />
            <EditorialSection />
          </>
        ) : (
          <SahanaFpvProductPage />
        )}
        <Footer />
      </div>
    </div>
  );
}
