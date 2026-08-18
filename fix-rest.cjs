const fs = require('fs');

const filesToFix = [
  'src/pages/DroneRadar/components/HeroSection.tsx',
  'src/pages/SahanaFpv/components/HeroSection.tsx',
  'src/pages/SurveillanceRadar/components/HeroSection.tsx'
];

for (const file of filesToFix) {
  let content = fs.readFileSync(file, 'utf8');

  // Fix 1: section classes
  content = content.replace(
    'relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-black pt-24 pb-16',
    'relative min-h-[100dvh] flex flex-col justify-between overflow-hidden bg-black pt-28 pb-12'
  );

  // Fix 2: Container classes to grow
  content = content.replace(
    'max-w-[1600px] mx-auto px-4 lg:px-6 w-full relative z-10',
    'max-w-[1600px] mx-auto px-4 lg:px-6 w-full relative z-10 flex-1 flex flex-col justify-center'
  );

  // Fix 3: Heading scale
  content = content.replace(
    'text-5xl lg:text-7xl font-bold',
    'text-4xl sm:text-5xl lg:text-7xl font-bold'
  );

  // Fix 4: Quick stats mt
  content = content.replace(
    'mt-16 pt-8 border-t border-white/10 flex flex-wrap gap-8',
    'mt-6 md:mt-12 pt-8 border-t border-white/10 flex flex-wrap gap-8'
  );

  // In case quick stats doesn't match the above exactly
  content = content.replace(
    'grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mt-12 w-full',
    'grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mt-6 md:mt-12 w-full'
  );

  fs.writeFileSync(file, content);
}
console.log('Fixed remainder.');
