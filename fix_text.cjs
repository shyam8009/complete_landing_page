const fs = require('fs');
const path = require('path');

const replacements = {
  'â€”': '—',
  'â€“': '–',
  'â€™': '’',
  'â€˜': '‘',
  'â€œ': '“',
  'â€\u009d': '”', // Sometimes represented as â€
  'â€"': '”', // Just in case
  'â€¢': '•',
  'â€¦': '…',
  '360': '360°',
  '90': '90°'
};

// Also specifically catch the literal "â€" if it comes up in different encoding
const fixText = (text) => {
  let newText = text;
  
  // Specific known ones
  newText = newText.replace(/â€”/g, '—');
  newText = newText.replace(/â€“/g, '–');
  newText = newText.replace(/â€™/g, '’');
  newText = newText.replace(/â€˜/g, '‘');
  newText = newText.replace(/â€œ/g, '“');
  newText = newText.replace(/â€/g, '”'); 
  newText = newText.replace(/â€¢/g, '•');
  newText = newText.replace(/â€¦/g, '…');
  
  // The Drone Radar degree symbol
  newText = newText.replace(/360/g, '360°');
  newText = newText.replace(/90/g, '90°');
  
  // Generic  cleanup if it's surrounded by spaces or specific words, 
  // but better to be safe and let the user handle others.
  
  return newText;
}

function processDirectory(dir) {
  let changedFiles = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) { 
      changedFiles = changedFiles.concat(processDirectory(fullPath));
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts') || fullPath.endsWith('.js') || fullPath.endsWith('.jsx')) {
      const content = fs.readFileSync(fullPath, 'utf8');
      const fixed = fixText(content);
      if (content !== fixed) {
        fs.writeFileSync(fullPath, fixed, 'utf8');
        changedFiles.push(fullPath);
      }
    }
  });
  return changedFiles;
}

const changed = processDirectory('src');
console.log('Fixed files:');
console.log(changed.join('\n'));
