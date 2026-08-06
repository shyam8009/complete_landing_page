const fs = require('fs');
let oldApp = '';
try {
  oldApp = fs.readFileSync('old_app.tsx', 'utf-16le');
  if (!oldApp.includes('function Nav')) {
    oldApp = fs.readFileSync('old_app.tsx', 'utf8');
  }
} catch (e) {
  oldApp = fs.readFileSync('old_app.tsx', 'utf8');
}

const startIdx = oldApp.indexOf('function Nav');
const endIdx = oldApp.indexOf('function Hero()');

if (startIdx !== -1 && endIdx !== -1) {
  const missingCode = oldApp.substring(startIdx, endIdx);
  fs.writeFileSync('old_nav.tsx', missingCode, 'utf8');
}
