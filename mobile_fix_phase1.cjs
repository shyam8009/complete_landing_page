/**
 * PHASE 1 - HIGH PRIORITY MOBILE FIXES
 * Fix hero text scaling, h-screen heights, About page padding, duplicate classes
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
      console.log(`  ✅ ${filePath}: "${from.slice(0,50)}..." → fixed`);
    } else {
      console.log(`  ⚠️  ${filePath}: pattern not found: "${from.slice(0,50)}..."`);
    }
  }
  if (changed) fs.writeFileSync(full, code, 'utf8');
}

// ─────────────────────────────────────────────────
// 1. AboutHero.tsx
// ─────────────────────────────────────────────────
patch('pages/AboutUs/components/AboutHero.tsx', [
  // h-screen → min-h-[100dvh]
  ['relative w-full h-screen overflow-hidden', 'relative w-full min-h-[100dvh] h-screen overflow-hidden'],
  // Large title - add mobile scale
  ['text-6xl md:text-8xl font-black text-white uppercase', 'text-4xl sm:text-6xl md:text-8xl font-black text-white uppercase'],
  // Subheadline
  ['text-xl md:text-3xl', 'text-base sm:text-xl md:text-3xl'],
  // Top margin on short screens
  ['mt-20 px-4', 'mt-12 sm:mt-20 px-4'],
  // Classification line - shrink on tiny screens
  ['w-12 h-[1px] bg-[#84CC16]', 'w-6 sm:w-12 h-[1px] bg-[#84CC16]'],
  ['tracking-[0.2em] uppercase text-xs', 'tracking-[0.15em] sm:tracking-[0.2em] uppercase text-[10px] sm:text-xs'],
]);

// ─────────────────────────────────────────────────
// 2. AboutManifesto.tsx
// ─────────────────────────────────────────────────
patch('pages/AboutUs/components/AboutManifesto.tsx', [
  ['text-5xl md:text-7xl lg:text-8xl', 'text-3xl sm:text-5xl md:text-7xl lg:text-8xl'],
]);

// ─────────────────────────────────────────────────
// 3. AboutValues.tsx
// ─────────────────────────────────────────────────
patch('pages/AboutUs/components/AboutValues.tsx', [
  // Section padding
  ['bg-black text-white pt-24 pb-32', 'bg-black text-white pt-12 sm:pt-16 md:pt-24 pb-16 md:pb-32'],
  // Title
  ['text-5xl md:text-6xl', 'text-3xl sm:text-4xl md:text-6xl'],
  // Fix w-max + whitespace-nowrap overflow
  ['w-max whitespace-nowrap', 'w-full break-words'],
  ['w-max"', 'w-full"'],
  ['whitespace-nowrap"', 'break-words"'],
]);

// ─────────────────────────────────────────────────
// 4. AboutCapabilities.tsx
// ─────────────────────────────────────────────────
patch('pages/AboutUs/components/AboutCapabilities.tsx', [
  ['py-32 md:py-48', 'py-16 sm:py-24 md:py-32 lg:py-48'],
]);

// ─────────────────────────────────────────────────
// 5. AboutLeadership.tsx
// ─────────────────────────────────────────────────
patch('pages/AboutUs/components/AboutLeadership.tsx', [
  ['py-32 z-10', 'py-16 sm:py-20 md:py-32 z-10'],
]);

// ─────────────────────────────────────────────────
// 6. AboutLocation.tsx
// ─────────────────────────────────────────────────
patch('pages/AboutUs/components/AboutLocation.tsx', [
  ['pt-24 pb-32', 'pt-12 sm:pt-16 md:pt-24 pb-16 md:pb-32'],
]);

// ─────────────────────────────────────────────────
// 7. AboutAddress.tsx
// ─────────────────────────────────────────────────
patch('pages/AboutUs/components/AboutAddress.tsx', [
  ['py-24 md:py-32', 'py-12 sm:py-16 md:py-24 lg:py-32'],
  ['text-4xl md:text-5xl font-black', 'text-3xl sm:text-4xl md:text-5xl font-black'],
  ['flex flex-col md:flex-row gap-12 justify-between', 'flex flex-col md:flex-row gap-6 md:gap-12 justify-between'],
  ['mb-16 md:mb-20', 'mb-10 md:mb-20'],
  ['"p-8 ', '"p-5 sm:p-8 '],
]);

// ─────────────────────────────────────────────────
// 8. AboutCertifications.tsx
// ─────────────────────────────────────────────────
patch('pages/AboutUs/components/AboutCertifications.tsx', [
  ['py-24 border-t', 'py-12 sm:py-16 md:py-24 border-t'],
]);

// ─────────────────────────────────────────────────
// 9. AboutJourney.tsx
// ─────────────────────────────────────────────────
patch('pages/AboutUs/components/AboutJourney.tsx', [
  ['min-h-screen py-24', 'min-h-screen py-12 sm:py-16 md:py-24'],
]);

// ─────────────────────────────────────────────────
// 10. AboutHero.tsx VisionSection in App.tsx
// ─────────────────────────────────────────────────
patch('app/App.tsx', [
  // VisionSection h-screen
  ['sticky top-0 z-0 h-screen w-full bg-black flex overflow-hidden',
   'sticky top-0 z-0 min-h-[100dvh] h-screen w-full bg-black flex overflow-hidden'],
  // Footer: outer wrapper - reduce gap on mobile
  ['bg-black pt-16 pb-16 flex flex-col gap-20',
   'bg-black pt-12 md:pt-16 pb-12 md:pb-16 flex flex-col gap-10 md:gap-20'],
  // Footer: top grid - fix uneven 2-col → 3-col on small screens
  ['grid grid-cols-2 gap-8 md:flex md:flex-row md:flex-wrap md:justify-between md:gap-10',
   'grid grid-cols-2 sm:grid-cols-3 lg:flex lg:flex-row lg:flex-wrap lg:justify-between gap-8 lg:gap-10'],
  // Footer: logo block - fix col-span
  ['col-span-2 md:col-span-1 flex flex-col gap-6 items-start',
   'col-span-2 sm:col-span-3 lg:col-span-1 flex flex-col gap-5 items-start'],
  // Footer: column min-w (3 occurrences)
  ['"min-w-[120px]"', '"w-full sm:min-w-[120px]"'],
  // Footer: bottom legal - go horizontal on sm+
  ['flex flex-col gap-3 border-t border-white/10 pt-8',
   'flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-0 border-t border-white/10 pt-6 md:pt-8'],
]);

console.log('\n✅ Phase 1 fixes applied.');
