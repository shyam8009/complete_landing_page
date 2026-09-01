const fs = require('fs');
const path = require('path');
const BASE = 'C:\\Users\\Shaym Bhadja\\Downloads\\SDL\\Complete Lending Page Design\\src';

function patch(filePath, replacements) {
  const full = path.join(BASE, filePath);
  if (!fs.existsSync(full)) { console.log('SKIP:', filePath); return; }
  let code = fs.readFileSync(full, 'utf8');
  let changed = false;
  for (const [from, to] of replacements) {
    if (code.includes(from)) {
      code = code.split(from).join(to);
      changed = true;
      console.log(`  ✅ ${filePath}: patched`);
    } else {
      console.log(`  ⚠️  ${filePath}: NOT FOUND: "${from.slice(0, 60)}"`);
    }
  }
  if (changed) fs.writeFileSync(full, code, 'utf8');
}

// Fix whitespace-nowrap in AboutValues (still present inside template literal)
patch('pages/AboutUs/components/AboutValues.tsx', [
  ['whitespace-nowrap transition-colors', 'break-words transition-colors'],
]);

// Fix ecosystem hero pt-32 (use different search pattern – they use pt-32 inline)
const ecoHeroFix = [
  ['justify-start text-center px-4 sm:px-6 pt-32', 'justify-center text-center px-4 sm:px-6 pt-20 sm:pt-24'],
  ['justify-start text-center px-4 sm:px-6 pt-28', 'justify-center text-center px-4 sm:px-6 pt-20 sm:pt-24'],
];

const ecoFiles = [
  'pages/QuantumSensing/components/QuantumHero.tsx',
  'pages/IntelligenceSurveillance/components/IntelligenceSurveillanceHero.tsx',
  'pages/CommandControl/components/CommandControlHero.tsx',
  'pages/AerospaceDefence/components/AerospaceDefenceHero.tsx',
  'pages/CommunicationMonitoring/components/CommunicationMonitoringHero.tsx',
  'pages/DroneSystems/components/DroneSystemsHero.tsx',
  'pages/DefenceDeeptech/components/DeeptechHero.tsx',
  'pages/RadarSystems/components/RadarSystemsHero.tsx',
  'pages/JammingSystems/components/JammingSystemsHero.tsx',
  'pages/ElectroOptics/ElectroOpticsPage.tsx',
  'pages/CommunicationDetection/CommunicationDetectionPage.tsx',
];

for (const f of ecoFiles) {
  patch(f, ecoHeroFix);
}

// Fix ChatbotsVoice, BigDataBI, ArtificialIntelligence (different component structure)
const aiHeroFiles = [
  'pages/ChatbotsVoice/ChatbotsVoicePage.tsx',
  'pages/BigDataBI/BigDataBIPage.tsx',
  'pages/ArtificialIntelligence/AIPage.tsx',
];
const heroCommonFixes = [
  ['text-4xl sm:text-5xl lg:text-7xl font-bold', 'text-3xl sm:text-5xl lg:text-7xl font-bold'],
  ['text-xl text-white/60 mb-10 max-w-lg', 'text-base sm:text-xl text-white/60 mb-6 sm:mb-10 max-w-lg'],
  ['p-6 rounded-lg mt-6 md:mt-12 border border-white/10 bg-white/5 backdrop-blur-xl max-w-fit',
   'p-4 sm:p-6 rounded-lg mt-6 md:mt-12 border border-white/10 bg-white/5 backdrop-blur-xl w-full sm:w-auto max-w-full'],
];
for (const f of aiHeroFiles) { patch(f, heroCommonFixes); }

// Fix AboutAddress p-8 card padding (uses 'p-8' differently)
patch('pages/AboutUs/components/AboutAddress.tsx', [
  [' p-8 flex flex-col', ' p-5 sm:p-8 flex flex-col'],
]);

// Fix Newsroom filter bar & card padding
patch('pages/Newsroom/NewsroomPage.tsx', [
  ['mb-16', 'mb-8 md:mb-16'],
  [' p-8 md:p-16', ' p-6 sm:p-8 md:p-16'],
]);

// Fix AerospaceComponents, DefenceComponents, SatcomComponents hero (they are inline in their pages)
const aeroFiles = [
  'pages/AerospaceComponents/AerospaceComponentsPage.tsx',
  'pages/DefenceComponents/DefenceComponentsPage.tsx',
  'pages/SatcomComponents/SatcomComponentsPage.tsx',
];
for (const f of aeroFiles) {
  patch(f, [
    ['text-4xl sm:text-5xl lg:text-7xl font-bold', 'text-3xl sm:text-5xl lg:text-7xl font-bold'],
    ['p-6 rounded-lg mt-6 md:mt-12 border border-white/10 bg-white/5 backdrop-blur-xl max-w-fit',
     'p-4 sm:p-6 rounded-lg mt-6 md:mt-12 border border-white/10 bg-white/5 backdrop-blur-xl w-full sm:w-auto max-w-full'],
  ]);
}

// App.tsx - Electronic Warfare section large text
patch('app/App.tsx', [
  ['text-4xl md:text-7xl', 'text-3xl sm:text-5xl md:text-7xl'],
]);

// Fix DroneSystems hero (different text class)
patch('pages/DroneSystems/components/DroneSystemsHero.tsx', [
  ['text-4xl sm:text-5xl md:text-7xl', 'text-3xl sm:text-4xl md:text-5xl lg:text-7xl'],
]);

console.log('\n✅ Phase 3 (cleanup) fixes applied.');
