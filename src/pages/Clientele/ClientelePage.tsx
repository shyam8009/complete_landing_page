import React, { useEffect } from 'react';
import { ClienteleHero } from './components/ClienteleHero';
import { ClientMetrics } from './components/ClientMetrics';
import { FeaturedAlliances } from './components/FeaturedAlliances';
import { ClientDirectory } from './components/ClientDirectory';
import { PartnershipFramework } from './components/PartnershipFramework';
import { ClienteleCTA } from './components/ClienteleCTA';

export function ClientelePage({ onContactClick }: { onContactClick?: () => void }) {
  useEffect(() => {
    document.title = "Clientele & Strategic Alliances | Sahana Defence";
  }, []);

  return (
    <div className="w-full bg-black text-white overflow-hidden">
      <ClienteleHero />
      <ClientMetrics />
      <FeaturedAlliances />
      <ClientDirectory />
      <PartnershipFramework />
      <ClienteleCTA onContactClick={onContactClick} />
    </div>
  );
}

export default ClientelePage;
