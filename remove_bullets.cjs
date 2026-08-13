const fs = require('fs');
const path = require('path');

function processFiles(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            processFiles(fullPath);
        } else if (fullPath.endsWith('.tsx') && (fullPath.includes('Ecosystem') || fullPath.includes('Ecosystem.tsx'))) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let original = content;
            
            // Remove 'flex items-start gap-2 ' from the div class
            content = content.replace(/className="flex items-start gap-2 ([^"]+)"/g, 'className=""');
            
            // Remove the bullet span
            content = content.replace(/<span className="mt-\[2px\] font-bold[^>]+>›<\/span>\s*/g, '');
            
            if (content !== original) {
                fs.writeFileSync(fullPath, content, 'utf8');
                console.log('Updated: ' + fullPath);
            }
        }
    }
}

processFiles(path.join(__dirname, 'src', 'pages'));
