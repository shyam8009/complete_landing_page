import React from 'react';
import { InteractiveBlueprint, TierData } from '../../../components/InteractiveBlueprint';
import img1 from '@/imports/magnific_extreme-closeup-macro-pro_WMNENw4cXe.png';
import img2 from '@/imports/magnific_extreme-closeup-macro-pro_8vcjnezIrU.png';
import img3 from '@/imports/magnific_extreme-closeup-macro-pro_LUQGHhOswO.png';

export function AerospaceComponentsSpecs() {
  const tiers: TierData[] = [
    {
      id: 'sub-engine',
      type: 'DEFENSE-GRADE',
      title: 'Engine & Turbomachinery Hardware',
      description: 'Manufactured to severe defense-grade tolerances using titanium, high-alloy steel, and nickel alloys.',
      image: img1,
      statusBadge: 'CRITICAL PROPULSION',
      specs: [
        { label: 'Production', value: '40,000+ Units' },
        { label: 'Client', value: 'HAL' },
        { label: 'Platform', value: 'Su-30MKI', highlight: 'LIVE' }
      ]
    },
    {
      id: 'sub-airframe',
      type: 'STRUCTURAL',
      title: 'Structural Airframe Components',
      description: 'Precision-machined structural parts engineered to serve as load-bearing components for airframes and fuselages.',
      image: img2,
      statusBadge: 'FLIGHT DYNAMICS',
      specs: [
        { label: 'Load-Bearing', value: 'Optimized' },
        { label: 'Weight-to-Strength', value: 'Stringent' }
      ]
    },
    {
      id: 'sub-mounting',
      type: 'HARDWARE',
      title: 'Mounting & Connection Hardware',
      description: 'High-accuracy brackets and shackles designed for load-bearing defense and aerospace systems.',
      image: img3,
      statusBadge: 'CRITICAL ASSEMBLIES',
      specs: [
        { label: 'Tolerances', value: 'Exacting' },
        { label: 'Connections', value: 'Secure Sealing', highlight: 'ACTIVE' }
      ]
    }
  ];

  return <InteractiveBlueprint title="Technical Specifications<br/>& Applications" subtitle="// PRECISION AEROSPACE PORTFOLIO" tiers={tiers} />;
}
