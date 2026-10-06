import React from 'react';
import { Link, useNavigate } from 'react-router';
import { Building2, Briefcase, Share2, Mail, ChevronRight, ArrowUp, Linkedin, Youtube, Instagram, Facebook } from 'lucide-react';

import footerLogo from "@/imports/footer-logo.png";
import makeInIndiaLogo from "@/imports/logo-make-in-india.png";

const INTER = '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';

const XIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 24.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const FOOTER_COMPANY = [
  { label: "Mission", url: "/about-us" },
  { label: "Clientele", url: "/clientele" },
  { label: "Newsroom", url: "/newsroom" },
  { label: "Leadership", url: "/about-us" }
];
const FOOTER_WORK = [
  { label: "Careers", url: "#" }
];
const FOOTER_SOCIAL = [
  { label: "X", url: "#", icon: XIcon },
  { label: "YouTube", url: "#", icon: Youtube },
  { label: "Instagram", url: "#", icon: Instagram },
  { label: "Facebook", url: "#", icon: Facebook },
  { label: "LinkedIn", url: "#", icon: Linkedin }
];

function FooterCol({ icon: Icon, label, links }: { icon?: React.ElementType, label: string; links: any[] }) {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-3">
        {Icon && <Icon className="w-5 h-5 text-[#84CC16]" />}
        <p
          className="text-white text-sm uppercase tracking-[0.1em]"
          style={{ fontFamily: INTER, fontWeight: 500 }}
        >
          {label}
        </p>
      </div>
      <ul className="flex flex-col gap-4">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              to={link.url}
              className="group flex items-center justify-between text-white/70 hover:text-white transition-colors"
            >
              <div className="flex items-center gap-3">
                <span className="text-sm tracking-wide" style={{ fontFamily: INTER, fontWeight: 400 }}>{link.label}</span>
              </div>
              <ChevronRight className="w-4 h-4 text-white/30 group-hover:text-[#84CC16] group-hover:translate-x-1 transition-transform" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer({ onContactClick }: { onContactClick?: () => void }) {
  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#1a1a1a] flex flex-col relative overflow-hidden text-white/90">
      {/* Subtle background gradient overlay to mimic the deep tech feel */}
      <div className="absolute top-0 right-0 w-full md:w-2/3 h-full bg-gradient-to-l from-[#05131f]/40 to-transparent pointer-events-none z-0" />
      
      {/* Top section with 5 columns */}
      <div className="max-w-[1600px] mx-auto w-full px-6 md:px-12 pt-20 pb-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-8">
          
          {/* Column 1: Logo & Contact */}
          <div className="lg:col-span-2 flex flex-col gap-6 pr-0 lg:pr-12">
            <img src={footerLogo} alt="Sahana Defence" className="h-10 object-contain self-start" />
            <p className="text-white/70 text-sm mb-4" style={{ fontFamily: INTER, fontWeight: 400 }}>
              Innovative Technology for a Safer Tomorrow
            </p>
            
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#84CC16]/10 rounded-xl flex items-center justify-center">
                <Mail className="w-6 h-6 text-[#84CC16]" />
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-xs tracking-[0.2em] uppercase text-white/50 font-medium">Contact</span>
                <a href="mailto:contact@sahanadefence.com" className="text-white hover:text-[#84CC16] transition-colors text-sm font-medium">
                  contact@sahanadefence.com
                </a>
              </div>
            </div>

            {/* Social Circle Icons */}
            <div className="flex items-center gap-3 mt-4">
              {FOOTER_SOCIAL.map((social) => {
                const Icon = social.icon;
                return (
                  <a key={social.label} href={social.url} className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#84CC16]/20 hover:border-[#84CC16]/50 hover:text-[#84CC16] transition-all">
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Middle Columns: Company, Work, Social */}
          <div className="lg:border-l lg:border-white/10 lg:pl-8">
            <FooterCol icon={Building2} label="Company" links={FOOTER_COMPANY} />
          </div>
          
          <div className="lg:border-l lg:border-white/10 lg:pl-8">
            <FooterCol icon={Briefcase} label="Work with us" links={FOOTER_WORK} />
          </div>
          
          <div className="lg:border-l lg:border-white/10 lg:pl-8 lg:pr-8 lg:border-r">
            <FooterCol icon={Share2} label="Social" links={FOOTER_SOCIAL} />
          </div>

          {/* Final Column: Tagline */}
          <div className="flex flex-col justify-center items-start lg:pl-4">
            <h3 className="text-2xl md:text-3xl font-light italic text-white/90 leading-tight">
              Building Secure<br/>
              &amp; Resilient<br/>
              <span className="text-[#84CC16]">Digital Futures</span>
            </h3>
            <div className="w-10 h-[2px] bg-[#84CC16] mt-6" />
          </div>

        </div>
      </div>

      {/* Bottom Legal Bar */}
      <div className="border-t border-white/10 relative z-10 bg-black/20">
        <div className="max-w-[1600px] mx-auto w-full px-6 md:px-12 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 text-xs uppercase tracking-widest text-white/60 font-medium">
            <span>Copyright &copy; 2026 Sahana Defence</span>
            <div className="hidden md:block w-px h-4 bg-white/20" />
            <Link to="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
          </div>

          <button 
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
