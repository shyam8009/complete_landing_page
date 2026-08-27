const fs = require('fs');
let content = fs.readFileSync('src/app/App.tsx', 'utf8');

// Replace any corrupted copyright line with a clean one
content = content.replace(/Copyright[^0-9]+2026 Sahana Defence/, 'Copyright &copy; 2026 Sahana Defence');

fs.writeFileSync('src/app/App.tsx', content, 'utf8');
console.log('Copyright symbol fixed.');
