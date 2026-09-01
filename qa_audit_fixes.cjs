const fs = require('fs');
const path = require('path');

const srcDir = 'C:\\Users\\Shaym Bhadja\\Downloads\\SDL\\Complete Lending Page Design\\src';

function getAllFiles(dir) {
  let res = [];
  for (const item of fs.readdirSync(dir)) {
    const full = path.join(dir, item);
    if (fs.statSync(full).isDirectory()) res = res.concat(getAllFiles(full));
    else if (full.endsWith('.tsx') || full.endsWith('.ts')) res.push(full);
  }
  return res;
}

const files = getAllFiles(srcDir);
let fixedCount = 0;

for (const f of files) {
  let code = fs.readFileSync(f, 'utf8');
  let changed = false;

  // 1. Clean up duplicated text scale in Quote/CTA sections
  if (code.includes('text-3xl sm:text-4xl md:text-3xl sm:text-4xl lg:text-6xl')) {
    code = code.split('text-3xl sm:text-4xl md:text-3xl sm:text-4xl lg:text-6xl').join('text-3xl sm:text-4xl md:text-5xl lg:text-6xl');
    changed = true;
  }

  // 2. Fix CommunicationDetection Hero
  if (f.endsWith('pages\\CommunicationDetection\\components\\Hero.tsx')) {
    if (code.includes('relative w-full h-screen overflow-hidden')) {
      code = code.split('relative w-full h-screen overflow-hidden').join('relative w-full min-h-[100dvh] overflow-hidden');
      changed = true;
    }
    if (code.includes('text-5xl md:text-7xl font-extralight tracking-wider uppercase mb-6')) {
      code = code.split('text-5xl md:text-7xl font-extralight tracking-wider uppercase mb-6').join('text-3xl sm:text-5xl md:text-7xl font-extralight tracking-wider uppercase mb-6');
      changed = true;
    }
  }

  // 3. Fix AerospaceComponentsHero, DefenceComponentsHero, SatcomComponentsHero, ChatbotsVoiceHero
  if (f.endsWith('AerospaceComponentsHero.tsx') || f.endsWith('DefenceComponentsHero.tsx') || f.endsWith('SatcomComponentsHero.tsx') || f.endsWith('ChatbotsVoiceHero.tsx')) {
    if (code.includes('relative w-full min-h-screen overflow-hidden')) {
      code = code.split('relative w-full min-h-screen overflow-hidden').join('relative w-full min-h-[100dvh] overflow-hidden');
      changed = true;
    }
    if (code.includes('text-4xl sm:text-5xl lg:text-7xl font-bold')) {
      code = code.split('text-4xl sm:text-5xl lg:text-7xl font-bold').join('text-3xl sm:text-5xl lg:text-7xl font-bold');
      changed = true;
    }
    if (code.includes('p-6 rounded-lg border border-white/10 bg-white/5 backdrop-blur-xl w-full md:max-w-fit')) {
      code = code.split('p-6 rounded-lg border border-white/10 bg-white/5 backdrop-blur-xl w-full md:max-w-fit').join('p-4 sm:p-6 rounded-lg border border-white/10 bg-white/5 backdrop-blur-xl w-full md:max-w-fit');
      changed = true;
    }
  }

  // 4. Fix DroneRadar Hero stats grid padding on ultra-small mobile
  if (f.endsWith('DroneRadar\\components\\HeroSection.tsx')) {
    if (code.includes('grid grid-cols-2 gap-8 mt-16 p-6 border')) {
      code = code.split('grid grid-cols-2 gap-8 mt-16 p-6 border').join('grid grid-cols-2 gap-4 sm:gap-8 mt-12 sm:mt-16 p-4 sm:p-6 border');
      changed = true;
    }
  }

  if (changed) {
    fs.writeFileSync(f, code, 'utf8');
    fixedCount++;
    console.log('Fixed:', path.relative(srcDir, f));
  }
}

console.log(`\nAudit cleanup complete. Total files updated: ${fixedCount}`);
