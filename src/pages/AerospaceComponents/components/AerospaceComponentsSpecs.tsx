import React from 'react';
import { InteractiveBlueprint, TierData } from '@/components/InteractiveBlueprint';
import img1 from '@/imports/magnific_extreme-closeup-macro-pro_WMNENw4cXe.png';
import img2 from '@/imports/magnific_extreme-closeup-macro-pro_8vcjnezIrU.png';
import img3 from '@/imports/magnific_extreme-closeup-macro-pro_LUQGHhOswO.png';

export function AerospaceComponentsSpecs() {
  const tiers: TierData[] = [
    {
      id: 'aero-1',
      type: 'CRITICAL PROPULSION',
      title: 'Engine & Turbomachinery',
      description: 'Manufactured to severe defense-grade tolerances using titanium, high-alloy steel, and nickel alloys.',
      image: img1,
      statusBadge: 'Propulsion Systems',
      specs: [
        { label: 'METALLURGY', value: 'Titanium / Nickel' },
        { label: 'TOLERANCE', value: 'Severe' }
      ]
    },
    {
      id: 'aero-2',
      type: 'FLIGHT DYNAMICS',
      title: 'Structural Airframe',
      description: 'Precision-machined structural parts engineered to serve as load-bearing components for airframes and fuselages.',
      image: img2,
      statusBadge: 'Airframe Structures',
      specs: [
        { label: 'MATERIAL', value: 'High-Alloy Steel' },
        { label: 'STRESS', value: 'Load-Bearing' }
      ]
    },
    {
      id: 'aero-3',
      type: 'CRITICAL ASSEMBLIES',
      title: 'Mounting & Connection',
      description: 'High-accuracy brackets and shackles designed for load-bearing defense and aerospace systems.',
      image: img3,
      statusBadge: 'Mechanical Assemblies',
      specs: [
        { label: 'DEPLOYMENT', value: 'Defence Systems' },
        { label: 'TYPE', value: 'Brackets & Shackles' }
      ]
    }
  ];

  return <InteractiveBlueprint title="Precision Aerospace<br/>Portfolio" subtitle="// Technical Specifications & Applications" tiers={tiers} />;
}
