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

const replacements = [
  { bad: 'â„¢', good: '™' },
  { bad: 'â€”', good: '—' },
  { bad: 'â€“', good: '–' },
  { bad: 'â€™', good: '’' },
  { bad: 'â€œ', good: '“' },
  { bad: 'â€\x9d', good: '”' }, // sometimes the right quote is 'â€\x9d'
  { bad: 'Â©', good: '©' },
  { bad: 'Â®', good: '®' },
  { bad: 'ZLIDT', good: 'ZLID™' } // because I accidentally typed ZLIDT in fix_eo_data.cjs!
];

files.forEach(f => {
  let c = fs.readFileSync(f, 'utf8');
  let changed = false;
  
  replacements.forEach(({ bad, good }) => {
    if (c.includes(bad)) {
      c = c.split(bad).join(good);
      changed = true;
      console.log(`Replaced ${bad} with ${good} in ${f}`);
    }
  });
  
  if (changed) {
    fs.writeFileSync(f, c, 'utf8');
  }
});
