const fs = require('fs');
const path = require('path');

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  // Regex to match typical CTA buttons
  // E.g. <button className="...bg-[#84CC16]..."> TEXT <ChevronRight .../> </button>
  // We'll use a replacer function
  
  const buttonRegex = /<button[^>]*className="[^"]*(?:bg-\[#84CC16\]|bg-white text-black|bg-slate-900)[^"]*"[^>]*>([\s\S]*?)<\/button>/g;
  
  let modified = false;
  content = content.replace(buttonRegex, (match, innerContent) => {
    // If it's the secondary button (text-white/40), skip it for now, unless the user wants all buttons. User said "all the CTA button". Secondary buttons are not primary CTAs, but let's see. Wait, my regex looks for bg-[#84CC16], bg-white, bg-slate-900.
    modified = true;
    
    // Replace <ChevronRight ... /> inside innerContent to have group-hover
    // Actually, TechCTA uses group-hover:translate-x-1, so we can replace ChevronRight className
    let newInner = innerContent.replace(/<ChevronRight[^>]*>/, (chevronMatch) => {
      // Just keep ChevronRight but make sure it has text-[#84CC16] and group-hover
      return `<ChevronRight className="w-4 h-4 text-[#84CC16] group-hover:translate-x-1 transition-transform" />`;
    });

    return `<TechCTA>${newInner}</TechCTA>`;
  });

  if (modified) {
    // Add import if not present
    if (!content.includes('import { TechCTA }')) {
      const importStatement = `import { TechCTA } from '@/components/TechCTA';\n`;
      // Insert after last import
      const lastImportIndex = content.lastIndexOf('import ');
      if (lastImportIndex !== -1) {
        const endOfLine = content.indexOf('\n', lastImportIndex);
        content = content.slice(0, endOfLine + 1) + importStatement + content.slice(endOfLine + 1);
      } else {
        content = importStatement + content;
      }
    }
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${filePath}`);
  }
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walkDir(fullPath);
    } else if (fullPath.endsWith('.tsx')) {
      processFile(fullPath);
    }
  }
}

walkDir(path.join(__dirname, 'src/pages'));
walkDir(path.join(__dirname, 'src/components'));
