import React from 'react';
import { InteractiveBlueprint, TierData } from '@/components/InteractiveBlueprint';
import img1 from '@/imports/magnific_extreme-closeup-macro-pro_WMNENw4cXe.png';
import img2 from '@/imports/magnific_extreme-closeup-macro-pro_8vcjnezIrU.png';
import img3 from '@/imports/magnific_extreme-closeup-macro-pro_LUQGHhOswO.png';

export function DefenceComponentsSpecs() {
  const tiers: TierData[] = [
    {
      id: 'def-1',
      type: 'CRITICAL HARDWARE',
      title: 'LOAD-BEARING ASSEMBLIES',
      description: 'Specialized fabrication of critical brackets, shackles, flanges, clamps, and adjustable rings engineered from Titanium alloys, High-alloy steel, and Nickel alloy.',
      image: img1,
      statusBadge: 'Defence Components',
      specs: [
        { label: 'METALLURGY', value: 'Exotic Alloys' },
        { label: 'STRENGTH', value: 'Extreme Yield' }
      ]
    },
    {
      id: 'def-2',
      type: 'FLIGHT DYNAMICS',
      title: 'FUSELAGE & WING COMPONENTS',
      description: 'High-precision fuselage and wing components manufactured to strict defence-grade structural tolerances to support advanced aerodynamic loads.',
      image: img2,
      statusBadge: 'Aerostructure Components',
      specs: [
        { label: 'CATEGORY', value: 'Aerostructures' },
        { label: 'TOLERANCE', value: 'Defence-Grade' }
      ]
    },
    {
      id: 'def-3',
      type: 'PROCESS EXCELLENCE',
      title: 'PRECISION FABRICATION',
      description: 'Integrated capability combining precision CNC machining, precision sheet metal fabrication, CAM programming, and comprehensive reverse engineering.',
      image: img3,
      statusBadge: 'Manufacturing Engineering',
      specs: [
        { label: 'SOFTWARE', value: 'CATIA / MasterCAM' },
        { label: 'INSPECTION', value: 'Stage-Wise' }
      ]
    }
  ];

  return <InteractiveBlueprint title="Core Manufacturing<br/>Capabilities" subtitle="// Technical Specifications" tiers={tiers} />;
}
