const fs = require('fs');
const path = require('path');
function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    if (fs.statSync(file).isDirectory()) {
      results = results.concat(walk(file));
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      results.push(file);
    }
  });
  return results;
}
const files = walk('./src');
files.forEach(f => {
  const c = fs.readFileSync(f, 'utf8');
  if (c.includes('useEffect(') || c.includes('useEffect (')) {
    const importMatch = c.match(/import\s+.*?from\s+['"]react['"]/s);
    if (importMatch && !importMatch[0].includes('useEffect')) {
      console.log('Missing useEffect import:', f);
    } else if (!importMatch) {
      console.log('Missing React import entirely:', f);
    }
  }
});
