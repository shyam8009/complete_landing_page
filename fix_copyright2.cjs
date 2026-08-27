const fs = require('fs');
let content = fs.readFileSync('src/imports/1920WLight/index.tsx', 'utf8');

// Replace any corrupted copyright line with a clean one
content = content.replace(/Copyright[^0-9]+2026 [A-Za-z ]+/, 'Copyright &copy; 2026 Sahana Defence');

fs.writeFileSync('src/imports/1920WLight/index.tsx', content, 'utf8');
console.log('Copyright symbol fixed in 1920WLight.');
