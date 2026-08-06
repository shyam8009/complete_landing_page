const fs = require('fs');

let oldApp = '';
try {
  oldApp = fs.readFileSync('old_app.tsx', 'utf-16le');
  if (!oldApp.includes('function VisionSection')) {
    oldApp = fs.readFileSync('old_app.tsx', 'utf8');
  }
} catch (e) {
  oldApp = fs.readFileSync('old_app.tsx', 'utf8');
}

const startIdx = oldApp.indexOf('function ProductCard');
const endIdx = oldApp.indexOf('function VisionSection() {');

if (startIdx !== -1 && endIdx !== -1) {
  const missingCode = oldApp.substring(startIdx, endIdx);
  
  let currentApp = fs.readFileSync('src/app/App.tsx', 'utf8');
  const insertIdx = currentApp.indexOf('function VisionSection() {');
  
  if (insertIdx !== -1) {
    const newApp = currentApp.substring(0, insertIdx) + missingCode + currentApp.substring(insertIdx);
    fs.writeFileSync('src/app/App.tsx', newApp, 'utf8');
    console.log('Successfully injected missing ProductCard and PRODUCTS_DATA!');
  } else {
    console.log('Could not find insert index in current App.tsx');
  }
} else {
  console.log('Could not find start or end index in old_app.tsx', startIdx, endIdx);
}
