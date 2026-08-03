const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src', 'pages');

const bgOverlayHtml = `
      {/* Schematic Vector Background Overlay */}
      <img 
        src={bgPattern} 
        alt="Technical Blueprint Overlay" 
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-80"
      />
      <div className="absolute inset-0 bg-white/20 z-0" />
`;

const bgImport = `import bgPattern from '../../../imports/light_blueprint_bg.jpg';\n`;

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  if (content.includes('light_blueprint_bg.jpg')) {
    console.log(`Skipping ${filePath} (already has bg)`);
    return;
  }

  // 1. Add import right after the last import statement or at the top
  const lastImportIndex = content.lastIndexOf('import ');
  if (lastImportIndex !== -1) {
    const endOfImport = content.indexOf('\n', lastImportIndex);
    content = content.slice(0, endOfImport + 1) + bgImport + content.slice(endOfImport + 1);
  } else {
    content = bgImport + content;
  }

  // 2. Find the return ( ... <section> ... )
  const sectionRegex = /<section[^>]*>/;
  const match = content.match(sectionRegex);
  if (match) {
    let sectionTag = match[0];
    
    // Ensure section has 'relative'
    if (!sectionTag.includes('relative')) {
      if (sectionTag.includes('className="')) {
        sectionTag = sectionTag.replace('className="', 'className="relative ');
      } else {
        sectionTag = sectionTag.replace('<section', '<section className="relative"');
      }
    }
    
    // Ensure section has 'overflow-hidden'
    if (!sectionTag.includes('overflow-hidden')) {
      sectionTag = sectionTag.replace('className="', 'className="overflow-hidden ');
    }

    // Replace the opening section tag and inject the background overlay
    content = content.replace(match[0], sectionTag + bgOverlayHtml);
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${filePath}`);
  } else {
    console.log(`Failed to find <section> in ${filePath}`);
  }
}

const TARGET_PAGES = [
  'FpvBuddy',
  'Varuna',
  'Proxy',
  'DroneRadar',
  'SurveillanceRadar',
  'InfinitySpear',
  'InfinityRhino',
  'ButterflyADG',
  'RhinoZ23',
  'InfinityRhinoBlack',
  'GuardianExperience',
  'RFDetector',
  '3DDetectionRadar'
];

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      if (dir === srcDir && !TARGET_PAGES.includes(file)) {
        continue;
      }
      walkDir(fullPath);
    } else if (file === 'SubsystemsSection.tsx') {
      processFile(fullPath);
    }
  }
}

walkDir(srcDir);
