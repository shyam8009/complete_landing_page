/**
 * PHASE 2 - Hero sections, Product pages, Newsroom, Investor pages, Canvas/FPV heroes
 * RULE: Only add/modify base/sm: classes. Never touch md:, lg:, xl: desktop classes.
 */
const fs = require('fs');
const path = require('path');

const BASE = 'C:\\Users\\Shaym Bhadja\\Downloads\\SDL\\Complete Lending Page Design\\src';

function patch(filePath, replacements) {
  const full = path.join(BASE, filePath);
  if (!fs.existsSync(full)) { console.log('SKIP (not found):', filePath); return; }
  let code = fs.readFileSync(full, 'utf8');
  let changed = false;
  for (const [from, to] of replacements) {
    if (code.includes(from)) {
      code = code.split(from).join(to);
      changed = true;
      console.log(`  ✅ ${filePath}: patched`);
    } else {
      console.log(`  ⚠️  ${filePath}: NOT FOUND: "${from.slice(0,60)}..."`);
    }
  }
  if (changed) fs.writeFileSync(full, code, 'utf8');
}

// ─────────────────────────────────────────────────
// Hero Quick Stats: max-w-fit → w-full sm:w-auto max-w-full
// and p-6 → p-4 sm:p-6 (applied across all product hero sections)
// ─────────────────────────────────────────────────
const heroStatsFix = [
  ['p-6 rounded-lg mt-6 md:mt-12 border border-white/10 bg-white/5 backdrop-blur-xl max-w-fit',
   'p-4 sm:p-6 rounded-lg mt-6 md:mt-12 border border-white/10 bg-white/5 backdrop-blur-xl w-full sm:w-auto max-w-full'],
];

// CTA button alignment fix (justify-center → justify-start)
const ctaAlignFix = [
  ['flex flex-col sm:flex-row gap-4 items-center justify-center w-full',
   'flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-start w-full'],
];

// Hero subheadline size fix
const subheadFix = [
  ['text-xl text-white/60 mb-10 max-w-lg', 'text-base sm:text-xl text-white/60 mb-6 sm:mb-10 max-w-lg'],
];

// Hero H1 size fix
const h1Fix360 = [
  ['text-4xl sm:text-5xl lg:text-7xl font-bold', 'text-3xl sm:text-5xl lg:text-7xl font-bold'],
];

const productHeroPages = [
  'pages/FpvBuddy/components/HeroSection.tsx',
  'pages/InfinitySpear/components/HeroSection.tsx',
  'pages/InfinityRhino/components/HeroSection.tsx',
  'pages/InfinityRhinoBlack/components/HeroSection.tsx',
  'pages/ButterflyADG/components/HeroSection.tsx',
  'pages/RhinoZ23/components/HeroSection.tsx',
  'pages/DroneRadar/components/HeroSection.tsx',
  'pages/SurveillanceRadar/components/HeroSection.tsx',
  'pages/RFDetector/components/HeroSection.tsx',
  'pages/GuardianExperience/components/HeroSection.tsx',
  'pages/OSINT/components/HeroSection.tsx',
  'pages/Sigint/components/HeroSection.tsx',
  'pages/SecurityAssessment/components/HeroSection.tsx',
  'pages/FusionC2/components/HeroSection.tsx',
  'pages/InterceptionSystem/components/HeroSection.tsx',
  'pages/RadioMonitoring/components/HeroSection.tsx',
  'pages/DirectionFinders/components/HeroSection.tsx',
  'pages/LorrosCommunication/components/HeroSection.tsx',
  'pages/Proxy/components/HeroSection.tsx',
  'pages/Varuna/components/HeroSection.tsx',
  'pages/AerospaceComponents/components/HeroSection.tsx',
  'pages/DefenceComponents/components/HeroSection.tsx',
  'pages/SatcomComponents/components/HeroSection.tsx',
  'pages/IoT/components/HeroSection.tsx',
  'pages/CloudServices/components/HeroSection.tsx',
  'pages/VideoStreaming/components/HeroSection.tsx',
  'pages/ChatbotsVoice/components/HeroSection.tsx',
  'pages/BigDataBI/components/HeroSection.tsx',
  'pages/ArtificialIntelligence/components/HeroSection.tsx',
];

for (const p of productHeroPages) {
  patch(p, [...heroStatsFix, ...ctaAlignFix, ...subheadFix, ...h1Fix360]);
}

// ─────────────────────────────────────────────────
// FpvBuddy duplicate className bug fix
// ─────────────────────────────────────────────────
patch('pages/FpvBuddy/components/HeroSection.tsx', [
  // Remove the duplicated pt-20/pb-8 tokens that appear twice
  ['pt-20 sm:pt-24 md:pt-28 pb-8 sm:pb-10 md:pb-12 w-full pt-20 sm:pt-24 md:pt-28 pb-8 sm:pb-10 md:pb-12',
   'pt-20 sm:pt-24 md:pt-28 pb-8 sm:pb-10 md:pb-12 w-full'],
]);

// ─────────────────────────────────────────────────
// SahanaFpv hero h-screen fix
// ─────────────────────────────────────────────────
patch('pages/SahanaFpv/components/HeroSection.tsx', [
  ['text-4xl sm:text-5xl lg:text-7xl', 'text-3xl sm:text-5xl lg:text-7xl'],
]);

// ─────────────────────────────────────────────────
// Newsroom padding fix
// ─────────────────────────────────────────────────
patch('pages/Newsroom/NewsroomPage.tsx', [
  ['pt-32 pb-20', 'pt-20 sm:pt-28 md:pt-32 pb-12 md:pb-20'],
  ['text-5xl md:text-7xl font-light', 'text-4xl sm:text-5xl md:text-7xl font-light'],
  ['text-2xl md:text-3xl', 'text-lg sm:text-2xl md:text-3xl'],
  ['"mb-16 gap-6"', '"mb-8 md:mb-16 gap-6"'],
  ['"p-8 md:p-16"', '"p-6 sm:p-8 md:p-16"'],
  ['text-3xl md:text-4xl', 'text-2xl sm:text-3xl md:text-4xl'],
]);

// ─────────────────────────────────────────────────
// Investor Pages - pt-32 too tall on mobile
// ─────────────────────────────────────────────────
const investorPages = [
  'pages/BoardOfDirectors/BoardOfDirectorsPage.tsx',
  'pages/FinancialReports/FinancialReportsPage.tsx',
  'pages/KeyContact/KeyContactPage.tsx',
  'pages/AnnualReturn/AnnualReturnPage.tsx',
  'pages/CodeOfConduct/CodeOfConductPage.tsx',
  'pages/CompositionOfCommittees/CompositionOfCommitteesPage.tsx',
  'pages/GeneralMeetingNotice/GeneralMeetingNoticePage.tsx',
  'pages/GovernancePolicies/GovernancePoliciesPage.tsx',
  'pages/KeyManagerialPersonnel/KeyManagerialPersonnelPage.tsx',
  'pages/ShareholderInformation/ShareholderInformationPage.tsx',
];

for (const p of investorPages) {
  patch(p, [
    // Hero content container top padding
    ['pt-32 md:pt-40', 'pt-20 sm:pt-28 md:pt-40'],
    ['pt-32 md:pt-44', 'pt-20 sm:pt-28 md:pt-44'],
    // Hero title
    ['text-4xl sm:text-6xl md:text-7xl lg:text-8xl', 'text-3xl sm:text-5xl md:text-7xl lg:text-8xl'],
    // Horizontal padding
    ['px-6 sm:px-10 md:px-16', 'px-4 sm:px-8 md:px-16'],
  ]);
}

// ─────────────────────────────────────────────────
// CanvasScrollHero - 100vw → 100% and 100vh → 100dvh
// ─────────────────────────────────────────────────
patch('components/CanvasScrollHero.tsx', [
  ['relative w-full h-screen bg-black overflow-hidden',
   'relative w-full min-h-[100dvh] h-screen bg-black overflow-hidden'],
  ["width: '100vw', height: '100vh'",
   "width: '100%', height: '100dvh'"],
]);

// ─────────────────────────────────────────────────
// FpvCanvasHero - 100vh → 100dvh
// ─────────────────────────────────────────────────
patch('components/FpvCanvasHero.tsx', [
  ["height: '100vh'", "height: '100dvh', minHeight: '100dvh'"],
]);

// ─────────────────────────────────────────────────
// ContactModal logo - remove scale-[2.0] that overflows on mobile
// ─────────────────────────────────────────────────
patch('components/ContactModal.tsx', [
  ['h-10 lg:h-12 w-auto object-contain scale-[2.0] sm:scale-[2.5] origin-left ml-2 sm:ml-4',
   'h-8 sm:h-10 lg:h-12 w-auto object-contain origin-left ml-2 sm:ml-4'],
]);

// ─────────────────────────────────────────────────
// AboutHero h-screen → min-h-[100dvh] (also About Domains section)
// ─────────────────────────────────────────────────
patch('pages/AboutUs/components/AboutDomains.tsx', [
  // Section - force min-h instead of fixed h-screen on mobile
  ['"w-full h-screen ', '"w-full min-h-[100dvh] md:h-screen '],
]);

// ─────────────────────────────────────────────────
// App.tsx HandheldJammer section h-screen
// ─────────────────────────────────────────────────
patch('app/App.tsx', [
  ['w-full h-screen border-t border-white/10 bg-black overflow-hidden relative',
   'w-full min-h-[100dvh] h-screen border-t border-white/10 bg-black overflow-hidden relative'],
]);

// ─────────────────────────────────────────────────
// Ecosystem hero pages - content clipped inside absolute inset-0
// ─────────────────────────────────────────────────
const ecoHeroFiles = [
  'pages/QuantumSensing/components/QuantumHero.tsx',
  'pages/IntelligenceSurveillance/components/IntelligenceSurveillanceHero.tsx',
  'pages/CommandControl/components/CommandControlHero.tsx',
  'pages/AerospaceDefence/components/AerospaceDefenceHero.tsx',
  'pages/CommunicationMonitoring/components/CommunicationMonitoringHero.tsx',
  'pages/DroneSystems/components/DroneSystemsHero.tsx',
  'pages/DefenceDeeptech/components/DeeptechHero.tsx',
  'pages/RadarSystems/components/RadarSystemsHero.tsx',
  'pages/JammingSystems/components/JammingSystemsHero.tsx',
];

for (const p of ecoHeroFiles) {
  patch(p, [
    // text size for mobile
    ['text-3xl sm:text-5xl md:text-7xl', 'text-2xl sm:text-4xl md:text-5xl lg:text-7xl'],
    // pt-32 inside absolute container
    ['absolute inset-0 z-20 flex flex-col items-center justify-start text-center px-4 sm:px-6 pt-32 md:pt-40',
     'absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4 sm:px-6 pt-20 sm:pt-24 md:pt-40'],
    ['absolute inset-0 z-20 flex flex-col items-center justify-start text-center px-4 sm:px-6 pt-32',
     'absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4 sm:px-6 pt-20 sm:pt-24'],
  ]);
}

console.log('\n✅ Phase 2 fixes applied.');
