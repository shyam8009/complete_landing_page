const fs = require('fs');
const path = require('path');

// Check what files actually exist in public/documents
function listAllFiles(dir, base) {
  const results = [];
  if (!fs.existsSync(dir)) return results;
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const full = path.join(dir, file);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      results.push(...listAllFiles(full, base));
    } else {
      results.push(full.replace(base, '').replace(/\\/g, '/'));
    }
  });
  return results;
}

const allFiles = listAllFiles('public/documents', 'public');
console.log('=== FILES ACTUALLY IN public/documents ===');
allFiles.forEach(f => console.log(f));
