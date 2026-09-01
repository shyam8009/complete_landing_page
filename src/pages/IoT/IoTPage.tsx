import React, { useEffect } from 'react';
import { IoTHero } from './components/IoTHero';
import { IoTPipeline } from './components/IoTPipeline';
import { IoTCapabilities } from './components/IoTCapabilities';
import { IoTSpecs } from './components/IoTSpecs';
import { IoTApplications } from './components/IoTApplications';
import { IoTCTA } from './components/IoTCTA';

export function IoTPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#050505] min-h-screen">
      <IoTHero />
      <IoTPipeline />
      <IoTCapabilities />
      <IoTSpecs />
      <IoTApplications />
      <IoTCTA />
    </div>
  );
}
