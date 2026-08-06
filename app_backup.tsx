import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GuardianExperiencePage } from '../pages/GuardianExperience/GuardianExperiencePage';
import { SahanaFpvProductPage } from '../pages/SahanaFpv/SahanaFpvProductPage';
import { FpvBuddyPage } from '../pages/FpvBuddy/FpvBuddyPage';
import { VarunaPage } from '../pages/Varuna/VarunaPage';
import { ProxyPage } from '../pages/Proxy/ProxyPage';
import { InfinitySpearPage } from '../pages/InfinitySpear/InfinitySpearPage';
import { InfinityRhinoPage } from '../pages/InfinityRhino/InfinityRhinoPage';
import { InfinityRhinoBlackPage } from '../pages/InfinityRhinoBlack/InfinityRhinoBlackPage';
import { ButterflyADGPage } from '../pages/ButterflyADG/ButterflyADGPage';
import { RhinoZ23Page } from '../pages/RhinoZ23/RhinoZ23Page';
import { DroneRadarPage } from '../pages/DroneRadar/DroneRadarPage';
import { RFDetectorPage } from '../pages/RFDetector/RFDetectorPage';
import { SurveillanceRadarPage } from '../pages/SurveillanceRadar/SurveillanceRadarPage';
import { ProductLayout } from '../pages/DynamicProduct/ProductLoader';
import DynamicPageLoader from '../pages/DynamicEcosystem/DynamicPageLoader';
import { OSINTPage } from '../pages/OSINT/OSINTPage';
import { QuantumSensingPage } from '../pages/QuantumSensing/QuantumSensingPage';
import QuantumCommunicationPage from '../pages/QuantumCommunication/QuantumCommunicationPage';
import IntelligenceSurveillancePage from '../pages/IntelligenceSurveillance/IntelligenceSurveillancePage';
import CommandControlPage from '../pages/CommandControl/CommandControlPage';
import CommunicationMonitoringPage from '../pages/CommunicationMonitoring/CommunicationMonitoringPage';
import { CAPABILITIES_DATA } from './capabilities_data';
import { Interactive360Viewer } from './components/ui/Interactive360Viewer';
import { RichText } from '../components/RichText';
import infinitySpearVideo from '@/imports/Infinity_Spear.mp4';
import visionRobotVideo from '@/imports/Vision_Drone.mp4';
import { ChevronRight } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
gsap.registerPlugin(ScrollTrigger);

import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import { Routes, Route, Link, useNavigate } from "react-router";
import svgPaths from "@/imports/1920WLight/svg-bymm5omek1";
import sahanaLogo from "@/imports/logo-sahana.png";
import makeInIndiaLogo from "@/imports/logo-make-in-india.png";
import heroVideo from "@/imports/Hero banner Video.mp4";
import { homeDb } from "../cms/db";
import { sanityClient, urlFor } from "../cms/sanity";

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
import varunaHullImg from "@/imports/varuna/magnific_a-photorealistic-underwat_3G7XWY1REY.png";
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

import capsuleIcon from '../imports/capsule-icon.png';
import drone3d1 from "@/imports/drone_3d_1.gif";
import drone3d2 from "@/imports/drone_3d_2.gif";
import rfRadarGeneratedImg from "@/imports/rf_radar_generated.png";
import rfRadarHudImg from "@/imports/rf_radar_hud.png";
import droneRadarHeroImg from "@/imports/drone_radar_hero.png";
import c2DashboardUiImg from "@/imports/c2_dashboard_ui.png";
import surveillanceRadarHeroImg from "@/imports/surveillance_radar_hero.png";
import surveillanceBlueprintImg from "@/imports/surveillance_blueprint.png";
import spearCadBlueprintImg from "@/imports/spear_cad_blueprint.png";






const CARD_GRADIENT =
  "linear-gradient(rgba(1,1,1,0) 0%,rgba(1,1,1,0.004) 1.8%,rgba(1,1,1,0.008) 4.8%,rgba(1,1,1,0.02) 9%,rgba(1,1,1,0.043) 13.9%,rgba(1,1,1,0.075) 19.8%,rgba(1,1,1,0.125) 27%,rgba(1,1,1,0.192) 35%,rgba(1,1,1,0.28) 43.5%,rgba(1,1,1,0.38) 53%,rgba(1,1,1,0.54) 66%,rgba(1,1,1,0.737) 81%,rgb(1,1,1) 100%)";

// ——— SVG helpers ————————————————————————————————————————————————————————————————————————————

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

// ——— Reusable "text + underline + arrow" link ————————————————————————————————————————————————

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





const INVESTORS_DATA = [
  {
    id: 'annual-reports',
    title: 'Annual Reports',
    description: 'Access annual reports, financial disclosures and company performance documents.',
    links: [
      { text: 'FY 2025-26', url: '#' },
      { text: 'FY 2024-25', url: '#' },
      { text: 'FY 2023-24', url: '#' },
    ],
    cta: 'View All →'
  },
  {
    id: 'general-meeting-notice',
    title: 'General Meeting Notice',
    description: 'Notices, agendas, and minutes for upcoming and past general meetings.',
    links: [
      { text: 'Upcoming AGM Notice', url: '#' },
      { text: 'EGM Minutes 2024', url: '#' },
      { text: 'Proxy Forms', url: '#' },
    ],
    cta: 'View All Notices →'
  },
  {
    id: 'code-of-conduct',
    title: 'Code of Conduct & Policies',
    description: 'Our commitment to ethical business practices and corporate integrity.',
    links: [
      { text: 'Code of Business Conduct', url: '#' },
      { text: 'Whistleblower Policy', url: '#' },
      { text: 'Anti-Bribery Guidelines', url: '#' },
    ],
    cta: 'View Policies →'
  },
  {
    id: 'annual-return',
    title: 'Annual Return',
    description: 'Statutory annual returns filed with regulatory authorities.',
    links: [
      { text: 'Form MGT-7 (2025)', url: '#' },
      { text: 'Form MGT-7 (2024)', url: '#' },
      { text: 'Archives', url: '#' },
    ],
    cta: 'View Returns →'
  },
  {
    id: 'policies',
    title: 'Policies of the Company',
    description: 'Operational and strategic policies governing our organization.',
    links: [
      { text: 'Dividend Distribution', url: '#' },
      { text: 'CSR Policy', url: '#' },
      { text: 'Risk Management', url: '#' },
    ],
    cta: 'View All Policies →'
  },
  {
    id: 'shareholder-info',
    title: 'Shareholder Information',
    description: 'Resources and updates for our valued shareholders and investors.',
    links: [
      { text: 'Shareholding Pattern', url: '#' },
      { text: 'Registrar Details', url: '#' },
      { text: 'Unpaid Dividend', url: '#' },
    ],
    cta: 'Investor Desk →'
  },
  {
    id: 'kmp',
    title: 'Key Managerial Personnel',
    description: "Executive leadership driving Sahana Defence's strategic vision.",
    links: [
      { text: 'CEO & Managing Director', url: '#' },
      { text: 'Chief Financial Officer', url: '#' },
      { text: 'Company Secretary', url: '#' },
    ],
    cta: 'View Leadership →'
  },
  {
    id: 'board-of-directors',
    title: 'Board of Directors',
    description: 'Company leadership and corporate governance framework.',
    links: [
      { text: 'Chairman', url: '#' },
      { text: 'Managing Director', url: '#' },
      { text: 'Independent Directors', url: '#' },
    ],
    cta: 'View Details →'
  },
  {
    id: 'committees',
    title: 'Composition of Committees',
    description: 'Details of various board committees and their current members.',
    links: [
      { text: 'Audit Committee', url: '#' },
      { text: 'Nomination & Remuneration', url: '#' },
      { text: 'CSR Committee', url: '#' },
    ],
    cta: 'View Committees →'
  },
  {
    id: 'key-contact',
    title: 'Key Contact',
    description: 'Direct contact points for investor relations and grievance redressal.',
    links: [
      { text: 'Nodal Officer', url: '#' },
      { text: 'Compliance Officer', url: '#' },
      { text: 'Investor Grievances', url: '#' },
    ],
    cta: 'Contact IR →'
  }
];

const TRUST_BAR_DATA = [
  {
    title: "Mission Ready",
    desc: "Built for the most demanding environments",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        <path d="M9 12l2 2 4-4"/>
      </svg>
    )
  },
  {
    title: "Proven Technology",
    desc: "Field tested. Battle proven. Trusted globally.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    )
  },
  {
    title: "Indigenous Innovation",
    desc: "Designed and developed in India",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="4" y="4" width="16" height="16" rx="2" ry="2"/>
        <rect x="9" y="9" width="6" height="6"/>
        <line x1="9" y1="1" x2="9" y2="4"/>
        <line x1="15" y1="1" x2="15" y2="4"/>
        <line x1="9" y1="20" x2="9" y2="23"/>
        <line x1="15" y1="20" x2="15" y2="23"/>
        <line x1="20" y1="9" x2="23" y2="9"/>
        <line x1="20" y1="14" x2="23" y2="14"/>
        <line x1="1" y1="9" x2="4" y2="9"/>
        <line x1="1" y1="14" x2="4" y2="14"/>
      </svg>
    )
  },
  {
    title: "End-to-End Solutions",
    desc: "From concept to deployment and beyond",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="18" cy="5" r="3"/>
        <circle cx="6" cy="12" r="3"/>
        <circle cx="18" cy="19" r="3"/>
        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
        <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
      </svg>
    )
  },
  {
    title: "Global Support",
    desc: "24/7 support and lifecycle services",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 18v-6a9 9 0 0 1 18 0v6"/>
        <path d="M21 19a2 2 0 0 1-2 2h-1v-6h3v4z"/>
        <path d="M3 19a2 2 0 0 0 2 2h1v-6H3v4z"/>
      </svg>
    )
  }
];






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
  const normalizedKey = (l2Node.l2Title || '').toLowerCase().replace(/\s+/g, '-')
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
          *[_type == "domain"] | order(order asc) {
            _id,
            "l1Title": title,
            "l2Categories": *[_type == "system" && references(^._id)] | order(order asc) {
              _id,
              "l2Title": title,
              "childrenNodes": *[_type in ["system", "product"] && references(^._id)] | order(order asc) {
                _id,
                title,
                "nodeType": _type,
                "slug": slug.current,
                "products": *[_type == "product" && references(^._id)] | order(order asc) {
                  _id,
                  "productTitle": title,
                  "productSlug": slug.current,
                  isFeatured
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
            domains: (l1.l2Categories || []).map((l2: any) => {
              
              // Helper to map L4 products directly placed under L2 into a generic "Overview" L3 sub-category
              const directProducts = l2.childrenNodes?.filter((c: any) => c.nodeType === "product") || [];
              const actualL3s = l2.childrenNodes?.filter((c: any) => c.nodeType === "system" || c.nodeType === "sub-system") || [];

              const l3SubCategories = actualL3s.map((l3: any) => ({
                id: l3._id,
                title: l3.title,
                slug: l3.slug,
                products: (l3.products || []).map((prod: any) => ({
                  id: prod._id,
                  title: prod.productTitle,
                  slug: prod.productSlug,
                  fullPath: `/capabilities/${(l1.l1Title || '').toLowerCase().replace(/\s+/g, '-')}/${l3.slug}/${prod.productSlug}`,
                  isFeatured: prod.isFeatured,
                }))
              }));

              if (directProducts.length > 0) {
                l3SubCategories.unshift({
                  id: l2._id + "-overview",
                  title: "Overview",
                  slug: "overview",
                  products: directProducts.map((prod: any) => ({
                    id: prod._id,
                    title: prod.title,
                    slug: prod.slug,
                    fullPath: `/capabilities/${(l1.l1Title || '').toLowerCase().replace(/\s+/g, '-')}/${(l2.l2Title || '').toLowerCase().replace(/\s+/g, '-')}/${prod.slug}`,
                    isFeatured: false,
                  }))
                });
              }

              return {
                ...attachVisualAssets({ l2Title: l2.l2Title, _id: l2._id }),
                subCategories: l3SubCategories
              };
            })
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
      .listen(`*[_type in ["domain", "system", "product"]]`, {}, { includeResult: false })
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
                          navigate(`/${(activeDomainData.title || '').toLowerCase().replace(/\s+/g, '-')}/${system.slug}`);
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
                    navigate(`/${(activeDomainData?.title || '').toLowerCase().replace(/\s+/g, '-')}/${activeSubCategoryData?.slug}`);
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


// ⚡️⚡️⚡️ DYNAMIC HOME LOADER (CMS BLOCK RENDERER) ⚡️⚡️⚡️
class ErrorBoundary extends React.Component<any, { hasError: boolean, error: any }> {
  constructor(props: any) { super(props); this.state = { hasError: false, error: null }; }
  static getDerivedStateFromError(error: any) { return { hasError: true, error }; }
  render() { 
    if (this.state.hasError) return <div className="text-red-500 bg-black w-full h-screen flex flex-col items-center justify-center p-10"><h1 className="text-3xl font-bold mb-4">CRITICAL RENDER ERROR</h1><pre className="text-sm bg-neutral-900 p-4 rounded overflow-auto">{this.state.error.toString()}</pre><p className="mt-4">Please screenshot this and send it back!</p></div>; 
    return this.props.children; 
  }
}

function DynamicHomeLoader() {
  const [pageData, setPageData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchHome() {
      try {
        const query = `
      *[_type == "homePage"][0] {
        ...,
        pageBuilder[] {
          ...,
          _type == 'blockProducts' => {
            ...,
            products[] {
              ...,
              productRef-> {
                ...,
                "featuredImageUrl": featuredImage.asset->url
              },
              "imageUrl": image.asset->url,
              "video360Url": video360.asset->url
            }
          },
          _type == 'blockNews' => {
            ...,
            articles[]->
          }
        }
      }
    `;
        
        // Wrap fetch in a timeout in case adblockers or network issues cause it to hang indefinitely
        const fetchPromise = sanityClient.fetch(query, {}, { tag: Date.now().toString(), cache: 'no-store' });
        const timeoutPromise = new Promise((_, reject) => setTimeout(() => reject(new Error("Sanity fetch timed out")), 5000));
        
        const sanityData = await Promise.race([fetchPromise, timeoutPromise]) as any;
        console.log("Sanity Fetch Result:", sanityData);

        if (sanityData && sanityData.pageBuilder) {
          console.log("Using Sanity Data");
          setPageData(sanityData);
        } else {
          // Fallback to local hardcoded DB
          setPageData({
            title: "Home",
            pageBuilder: [
              { _type: 'blockHero', ...homeDb.hero },
              { _type: 'blockVision', ...homeDb.vision },
              { _type: 'blockProducts', ...homeDb.productsSection },
              { _type: 'blockArsenal', ...homeDb.arsenalSection },
              { _type: 'blockNews', ...homeDb.newsSection }
            ]
          });
        }
      } catch (err) {
        console.error("Sanity fetch failed completely:", err);
        setPageData({
          title: "Home",
          pageBuilder: [
            { _type: 'blockHero', ...homeDb.hero },
            { _type: 'blockVision', ...homeDb.vision },
            { _type: 'blockProducts', ...homeDb.productsSection },
            { _type: 'blockArsenal', ...homeDb.arsenalSection },
            { _type: 'blockNews', ...homeDb.newsSection }
          ]
        });
      } finally {
        setLoading(false);
      }
    }
    fetchHome();
  }, []);

  if (loading) {
    return <div className="w-full h-screen bg-black flex items-center justify-center text-white">Initializing Autonomous Systems...</div>;
  }

  return (
    <>
      {pageData?.pageBuilder?.map((block: any, index: number) => {
        switch (block._type) {
          case 'blockHero':
            return <Hero key={index} data={block} />;
          case 'blockVision':
            return (
              <div key={index} className="relative w-full z-0">
                <VisionSection data={block} />
              </div>
            );
          case 'blockProducts':
            return (
              <div key={index} className="relative w-full z-0">
                <ProductsSection data={block} />
              </div>
            );
          case 'blockArsenal':
            return <Arsenal1Section key={index} data={block} />;
          case 'blockNews':
            return <NewsSection key={index} data={block} />;
          case 'blockEditorial':
            return <EditorialSection key={index} data={block} />;
          default:
            return null;
        }
      })}
    </>
  );
}

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
  onClick,
  has360 = false,
  on360Click,
}: {
  image: string;
  name: string;
  subtitle?: string;
  description?: string;
  className?: string;
  showArrow?: boolean;
  onClick?: () => void;
  has360?: boolean;
  on360Click?: (e: React.MouseEvent) => void;
}) {
  return (
    <div 
      className={`relative overflow-hidden rounded-sm cursor-pointer group ${className}`}
      onClick={onClick}
    >
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
          <a
            onClick={(e) => {
              if (onClick) {
                e.preventDefault();
                onClick();
              }
            }}
            href="#"
            className="text-white text-2xl tracking-tight leading-tight hover:underline cursor-pointer"
            style={{ fontFamily: INTER, fontWeight: 700 }}
          >
            {name}
          </a>
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
        {has360 && (
          <button
            onClick={(e) => { e.stopPropagation(); if(on360Click) on360Click(e); }}
            className="mt-4 px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-md text-white text-sm font-semibold tracking-wider transition-all z-20 relative shadow-lg"
            style={{ fontFamily: INTER }}
          >
            VIEW 360 DEGREE
          </button>
        )}
      </div>
    </div>
  );
}

// ÔÇöÔÇöÔÇö PRODUCTS SECTION ÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇö

const PRODUCTS_DATA = [
  {
    image: sensorDomeImg,
    name: "Infinity Optics",
    subtitle: "Eyes on the Mission.",
    description: "A precision sensing payload designed to deliver real-time visual intelligence in dynamic operational environments. Engineered for reconnaissance, target observation, and mission awareness, Infinity Optics enhances decision-making with reliable surveillance and persistent situational visibility.",
    desktopGridClass: "[grid-column:1/span_4] [grid-row:1]",
    showArrow: true,
    target: '/',
  },
  {
    image: flightImg,
    name: "FPV Bullseye & Interceptor",
    subtitle: "Tactical FPV Strike Platform",
    description: "Built for high-speed reconnaissance and precision engagement, the FPV Bullseye & Interceptor combines agile maneuverability, real-time situational awareness, and mission-ready reliability. Engineered for rapid deployment, it enables forces to operate effectively across dynamic and contested environments.",
    desktopGridClass: "[grid-column:5/span_4] [grid-row:1]",
    showArrow: true,
    target: '/fpv-drone',
  },
  {
    image: infinitySpearImg,
    name: "Infinity Spear",
    subtitle: "Portable Counter-UAS System",
    has360: true,
    video360: infinitySpearVideo,
    description: "Neutralize hostile drones with high-power multi-band jamming technology. Designed for rapid deployment, Infinity Spear delivers effective drone disruption at ranges up to 2.5 km while maintaining lightweight, one-person operation.",
    desktopGridClass: "[grid-column:9/span_4] [grid-row:1]",
    showArrow: true,
    target: '/handheld-jammer',
  },
  {
    image: rfDetectorImg,
    name: "RF Detector D360",
    subtitle: "Detect the Invisible.",
    description: "Engineered to uncover signal activity across a broad frequency spectrum, RF Detector D360 provides operators with reliable electronic awareness for defense, intelligence, and security operations.",
    desktopGridClass: "[grid-column:1/span_4] [grid-row:2/span_2]",
    showArrow: true,
    target: '/rf-detector',
  },
  {
    image: varunaHullImg,
    name: "Varuna ÔÇö Underwater Drone",
    subtitle: "Sub-Surface Agility & Clarity.",
    description: "A state-of-the-art underwater drone designed for professionals and enthusiasts requiring robust endurance beneath the surface.",
    desktopGridClass: "[grid-column:5/span_8] [grid-row:2]",
    showArrow: true,
    target: '/varuna',
  },
  {
    image: infinityRhinoImg,
    name: "Infinity Rhino",
    subtitle: "Defend Critical Airspace.",
    description: "A mission-ready anti-drone platform built to disrupt unauthorized UAV activity with precision and reliability. Combining portability, endurance, and operational flexibility, Infinity Rhino empowers teams to maintain control in contested environments.",
    desktopGridClass: "[grid-column:5/span_4] [grid-row:3]",
    showArrow: false,
    target: '/infinity-rhino',
  },
  {
    image: digitalTwinImg,
    name: "Digital Twin",
    subtitle: "Engineering Ports and Marine Intelligence",
    description: "Protecting Borders, Assets and Strategic Infrastructure",
    desktopGridClass: "[grid-column:9/span_4] [grid-row:3]",
    showArrow: false,
    target: '/',
  },
];


function VisionSection() {
  return (
    <section className="sticky top-0 z-0 h-screen w-full bg-black flex overflow-hidden">
      {/* The animation video */}
      <video
        src={visionRobotVideo}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-screen"
      />
      {/* Dark fade on top */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black pointer-events-none" />

      {/* Content wrapper for the vision text */}
      <div className="relative z-10 w-full h-full flex flex-col justify-center px-9 max-w-[1400px] mx-auto">
        <h2 className="text-white text-5xl md:text-6xl tracking-tight leading-[1.1] max-w-[800px]" style={{ fontFamily: INTER, fontWeight: 400 }}>
          Securing the Future<br />Through Uncompromised<br />Defence Innovation.
        </h2>
        <div className="mt-8 flex gap-8">
          <div className="flex flex-col gap-1">
            <span className="text-[#84CC16] text-[10px] font-bold tracking-[2px] uppercase">DEPLOYMENT</span>
            <span className="text-white font-medium text-lg">Multi-Domain Integration</span>
          </div>
          <div className="w-px h-12 bg-white/20" />
          <div className="flex flex-col gap-1">
            <span className="text-[#84CC16] text-[10px] font-bold tracking-[2px] uppercase">ARCHITECTURE</span>
            <span className="text-white font-medium text-lg">AI-First Infrastructure</span>
          </div>
        </div>
        {/* Soft bottom fade to blend with next section if needed */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>
      </div>
    </section>
  );
}

function ProductsSection() {
  const navigate = useNavigate();
  const [viewer360, setViewer360] = useState<string | null>(null);
  return (
    <section className="relative z-10 w-full px-9 pt-12 pb-16 bg-black/60 backdrop-blur-md">
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

      {/* ÔÇöÔÇöÔÇö Desktop 12-col grid ÔÇöÔÇöÔÇö */}
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
            has360={(product as any).has360}
            on360Click={(e) => {
              if ((product as any).video360) {
                setViewer360((product as any).video360);
              }
            }}
            onClick={() => {
              if (product.target) {
                navigate(product.target);
              }
            }}
          />
        ))}
      </div>

      {/* ÔÇöÔÇöÔÇö Mobile / tablet stacked grid ÔÇöÔÇöÔÇö */}
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
            onClick={() => {
              if (product.target) {
                navigate(product.target);
              }
            }}
          />
        ))}
      </div>
      {viewer360 && <Interactive360Viewer videoSrc={viewer360} onClose={() => setViewer360(null)} />}
    </section>
  );
}

// ÔÇöÔÇöÔÇö ARSENAL-1 FEATURE SECTION ÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇö

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

// ÔÇöÔÇöÔÇö NEWS & INSIGHTS ÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇö

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

// ÔÇöÔÇöÔÇö EDITORIAL PANEL ÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇö

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
        counter="PT ÔÇö 01 / 02"
      />
      <EditorialPanel
        title="Innovation"
        image={innovationImages}
        label="Read More"
        bg="#8e9291"
        textColor="#010101"
        dividerColor="#010101"
        counter="PT ÔÇö 02 / 02"
      />
    </section>
  );
}

// ÔÇöÔÇöÔÇö FOOTER ÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇöÔÇö

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

export default function App() {
  return (
    <ErrorBoundary>
      <div className="w-full min-h-screen bg-black overflow-x-clip" style={{ fontFamily: INTER }}>
      <Nav />
      {/* Push content below fixed nav */}
      <div className="pt-[86px]">
        <Routes>
          <Route path="/" element={<ErrorBoundary><DynamicHomeLoader /></ErrorBoundary>} />
          <Route path="/guardian-experience" element={<GuardianExperiencePage />} />
          <Route path="/sahana-fpv" element={<SahanaFpvProductPage />} />
          <Route path="/fpv-buddy" element={<FpvBuddyPage />} />
          <Route path="/varuna" element={<VarunaPage />} />
          <Route path="/proxy" element={<ProxyPage />} />
          <Route path="/infinity-spear" element={<InfinitySpearPage />} />
          <Route path="/infinity-rhino" element={<InfinityRhinoPage />} />
          <Route path="/infinity-rhino-black" element={<InfinityRhinoBlackPage />} />
          <Route path="/butterfly-adg" element={<ButterflyADGPage />} />
          <Route path="/rhino-gen-z23" element={<RhinoZ23Page />} />
          {/* <Route path="/electronic-warfare" element={<ElectronicWarfarePage />} /> */}
          <Route path="/rf-detector" element={<RFDetectorPage />} />
          <Route path="/drone-radar" element={<DroneRadarPage />} />
          <Route path="/surveillance-radar" element={<SurveillanceRadarPage />} />
          {/* <Route path="/handheld-jammer" element={<HandheldJammerPage />} /> */}
          <Route path="/osint" element={<OSINTPage />} />
          {/* Dynamic Ecosystem Routes */}
          <Route path="/:category/:slug" element={<DynamicPageLoader />} />
        </Routes>
        <Footer />
      </div>
    </div>
    </ErrorBoundary>
  );
}
