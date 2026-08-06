const fs = require('fs');

// Read the old App.tsx
// Due to powershell >, it might be UTF-16, let's read it as utf-16le first, if it fails then utf-8
let oldApp = '';
try {
  oldApp = fs.readFileSync('old_app.tsx', 'utf-16le');
  if (!oldApp.includes('function VisionSection')) {
    oldApp = fs.readFileSync('old_app.tsx', 'utf8');
  }
} catch (e) {
  oldApp = fs.readFileSync('old_app.tsx', 'utf8');
}

const startIdx = oldApp.indexOf('function VisionSection() {');
const endIdx = oldApp.indexOf('const FOOTER_COMPANY');

if (startIdx !== -1 && endIdx !== -1) {
  const missingCode = oldApp.substring(startIdx, endIdx);
  
  let currentApp = fs.readFileSync('src/app/App.tsx', 'utf8');
  const insertIdx = currentApp.indexOf('const FOOTER_COMPANY');
  
  if (insertIdx !== -1) {
    const newApp = currentApp.substring(0, insertIdx) + missingCode + currentApp.substring(insertIdx);
    fs.writeFileSync('src/app/App.tsx', newApp, 'utf8');
    console.log('Successfully injected missing components!');
  } else {
    console.log('Could not find insert index in current App.tsx');
  }
} else {
  console.log('Could not find start or end index in old_app.tsx', startIdx, endIdx);
}
