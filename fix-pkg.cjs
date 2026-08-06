const fs = require('fs');
let pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));

if (!pkg.dependencies) pkg.dependencies = {};
pkg.dependencies['react'] = '^18.3.1';
pkg.dependencies['react-dom'] = '^18.3.1';

delete pkg.peerDependencies;
delete pkg.peerDependenciesMeta;

fs.writeFileSync('package.json', JSON.stringify(pkg, null, 2), 'utf8');
console.log('Fixed package.json');
