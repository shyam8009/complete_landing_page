const fs = require('fs');

const file = 'src/pages/ElectroOptics/components/ElectroOpticsPipeline.tsx';
let content = fs.readFileSync(file, 'utf8');

// The file currently has:
// import React, { useEffect, useRef } from 'react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
//
// gsap.registerPlugin(ScrollTrigger);
// 
// export function ElectroOpticsPipeline() {

const newImports = `
import { Shield, Eye, Target, CheckCircle } from 'lucide-react';

const PIPELINE_STEPS = [
  {
    id: "01",
    title: "DEPLOY",
    description: "Highly scalable multi-sensor platforms available across portable, maritime, and ultra-long-range perimeter configurations.",
    icon: Shield
  },
  {
    id: "02",
    title: "OBSERVE",
    description: "Enables real-time target acquisition via ultra-high-definition visible and thermal imaging for true 24/7 unblinking surveillance.",
    icon: Eye
  },
  {
    id: "03",
    title: "TRACK",
    description: "Achieve millimeter-precise tracking of evasive targets with AI-driven image processing and radar slew-to-cue integration.",
    icon: Target
  },
  {
    id: "04",
    title: "IDENTIFY",
    description: "Employs multi-spectral wavelengths (SWIR/NIR) and ZLID™ illumination to penetrate severe weather, smoke, and haze.",
    icon: CheckCircle
  }
];
`;

content = content.replace("gsap.registerPlugin(ScrollTrigger);", "gsap.registerPlugin(ScrollTrigger);\n" + newImports);

fs.writeFileSync(file, content);
console.log('Fixed ElectroOpticsPipeline data array');
