import React, { useEffect } from 'react';
import { useLocation } from 'react-router';
import AboutHero from './components/AboutHero';
import AboutManifesto from './components/AboutManifesto';
import AboutValues from './components/AboutValues';
import AboutJourney from './components/AboutJourney';
import AboutCapabilities from './components/AboutCapabilities';
import AboutDomains from './components/AboutDomains';
import AboutLeadership from './components/AboutLeadership';
import AboutCertifications from './components/AboutCertifications';

export default function AboutUsPage() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="bg-[#050505] min-h-screen text-white w-full overflow-hidden">
      <AboutHero />
      <AboutManifesto />
      <AboutValues />
      <AboutJourney />
      <AboutCapabilities />
      <AboutDomains />
      <AboutLeadership />
      <AboutCertifications />
    </div>
  );
}

