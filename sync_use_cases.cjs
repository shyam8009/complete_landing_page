const fs = require('fs');

const fpvBuddyStr = fs.readFileSync('src/pages/FpvBuddy/components/UseCasesSection.tsx', 'utf8');
const proxyStr = fs.readFileSync('src/pages/Proxy/components/UseCasesSection.tsx', 'utf8');

// We want to extract the return statement from FPV Buddy and put it in Proxy, 
// replacing the FPV buddy data variable references if needed (they use the same variable name USE_CASES)

// But wait, the FpvBuddy one uses '#84CC16' (neon green). I'll swap it to '#3C5929' for Proxy to match its theme.

let proxyImports = proxyStr.substring(0, proxyStr.indexOf('export function UseCasesSection()'));
let fpvBuddyComponent = fpvBuddyStr.substring(fpvBuddyStr.indexOf('export function UseCasesSection()'));

// Replace the neon green with proxy green
fpvBuddyComponent = fpvBuddyComponent.replace(/#84CC16/g, '#3C5929');

fs.writeFileSync('src/pages/Proxy/components/UseCasesSection.tsx', proxyImports + fpvBuddyComponent, 'utf8');

