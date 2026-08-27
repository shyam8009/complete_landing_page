const fs = require('fs');
const path = require('path');

function searchForDocs(dir) {
  const results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const full = path.join(dir, file);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      results.push(...searchForDocs(full));
    } else if (file.endsWith('.tsx')) {
      const content = fs.readFileSync(full, 'utf8');
      const found = content.match(/\/documents\/[^'">\s]+/g);
      if (found) {
        results.push({ file: full.replace(/.*src\/pages\//, ''), links: [...new Set(found)] });
      }
    }
  });
  return results;
}

const found = searchForDocs('src/pages');
found.forEach(r => {
  console.log('\n=== ' + r.file + ' ===');
  r.links.forEach(l => console.log('  ' + l));
});
