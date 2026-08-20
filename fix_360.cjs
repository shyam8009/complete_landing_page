const fs = require('fs');
function fixFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;
  content = content.replace(/360[^\x00-\x7F]+\s*Field/g, '360° Field');
  content = content.replace(/360[^\x00-\x7F]+\s*Predictive/g, '360° Predictive');
  content = content.replace(/360[^\x00-\x7F]+\s*field/g, '360° field');
  content = content.replace(/360[^\x00-\x7F]+\s*PREDICTIVE/g, '360° PREDICTIVE');
  
  if (original !== content) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Fixed:', filePath);
  }
}
function walkDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = dir + '/' + file;
    if (fs.statSync(fullPath).isDirectory()) {
      walkDir(fullPath);
    } else if (fullPath.endsWith('.tsx')) {
      fixFile(fullPath);
    }
  }
}
walkDir('src/pages');
