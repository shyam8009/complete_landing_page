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
            
            // Remove line-clamp classes from the p tag that contains the description
            // Usually looks like: className="... line-clamp-2 lg:line-clamp-3"
            content = content.replace(/line-clamp-\d+/g, '');
            content = content.replace(/lg:\s+/g, ''); // Clean up trailing 'lg: ' if any
            content = content.replace(/ className="([^"]*)\s+"/g, ' className=""'); // Clean up trailing spaces
            content = content.replace(/\s+"/g, '"');
            
            // Remove the separator
            content = content.replace(/<div className="my-5 border-t border-slate-200" \/>\s*/g, '');
            
            // Remove Specs Grid comment
            content = content.replace(/\{\/\* Specs Grid \*\/\}\s*/g, '');
            
            // Remove Key Technical Features heading
            content = content.replace(/<h4[^>]*>[\s\S]*?Key Technical Features[\s\S]*?<\/h4>\s*/g, '');
            
            // Remove the grid block
            // It starts with <div className="grid and ends after the map block. We can just use a regex that matches until the outer </div>
            content = content.replace(/<div className="grid[^>]*>[\s\S]*?\.map\([\s\S]*?\}\)\}\s*<\/div>\s*/g, '');
            
            if (content !== original) {
                fs.writeFileSync(fullPath, content, 'utf8');
                console.log('Updated: ' + fullPath);
            }
        }
    }
}

processFiles(path.join(__dirname, 'src', 'pages'));
