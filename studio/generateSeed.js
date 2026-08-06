const fs = require('fs');
const crypto = require('crypto');

function generateId() {
  return crypto.randomUUID();
}

function createNode(title, slug, nodeType, parentId, order) {
  const doc = {
    _id: generateId(),
    _type: 'contentNode',
    title: title,
    slug: { _type: 'slug', current: slug },
    nodeType: nodeType,
    order: order,
    showInMegaMenu: true,
  };

  if (parentId) {
    // According to sanity-plugin-page-tree, the parent reference is simply called 'parent'
    doc.parent = {
      _type: 'reference',
      _ref: parentId,
    };
  }

  return doc;
}

const docs = [];

// LEVEL 1 DOMAINS (Root Nodes)
const ew = createNode('Electronic Warfare', 'electronic-warfare', 'Domain', null, 1);
const iw = createNode('Information Warfare', 'information-warfare', 'Domain', null, 2);
const qt = createNode('Quantum Technology Solutions', 'quantum-technology-solutions', 'Domain', null, 3);
const ad = createNode('Aerospace & Defence', 'aerospace-defence', 'Domain', null, 4);
const dd = createNode('Defence Deeptech', 'defence-deeptech', 'Domain', null, 5);

docs.push(ew, iw, qt, ad, dd);

// LEVEL 2 SYSTEMS & LEVEL 4 PRODUCTS (Child Nodes) under Electronic Warfare
const ads = createNode('Anti Drone Systems', 'anti-drone-systems', 'System', ew._id, 1);
const rs = createNode('Radar Systems', 'radar-systems', 'System', ew._id, 2);
const js = createNode('Jamming Systems', 'jamming-systems', 'System', ew._id, 3);
const ds = createNode('Detection Systems', 'detection-systems', 'System', ew._id, 4);

docs.push(ads, rs, js, ds);

// LEVEL 4 PRODUCTS under Anti Drone Systems
const fpvBuddy = createNode('FPV Drone Buddy', 'fpv-drone-buddy', 'Product', ads._id, 1);
const fpvBulleseye = createNode('FPV Bulleseye & Interceptor', 'fpv-bulleseye-interceptor', 'Product', ads._id, 2);
const varuna = createNode('Varuna - Underwater Drone', 'varuna-underwater-drone', 'Product', ads._id, 3);
const proxy = createNode('PROXY - Control Channel', 'proxy-control-channel', 'Product', ads._id, 4);

docs.push(fpvBuddy, fpvBulleseye, varuna, proxy);

// LEVEL 2 SYSTEMS under Information Warfare
const intelSurv = createNode('Intelligence & Surveillance', 'intelligence-surveillance', 'System', iw._id, 1);
const cmdCtrl = createNode('Command & Control', 'command-control', 'System', iw._id, 2);
const commMon = createNode('Communication & Monitoring', 'communication-monitoring', 'System', iw._id, 3);

docs.push(intelSurv, cmdCtrl, commMon);

// LEVEL 4 PRODUCTS under Intelligence & Surveillance
const osint = createNode('Open-Source Intelligence (OSINT)', 'osint', 'Product', intelSurv._id, 1);
const signalIntel = createNode('Signal Intelligence', 'signal-intelligence', 'Product', intelSurv._id, 2);
const secAssess = createNode('Comprehensive Security Assessment', 'comprehensive-security-assessment', 'Product', intelSurv._id, 3);

docs.push(osint, signalIntel, secAssess);

// CORPORATE & EDITORIAL SECTIONS
const aboutUs = createNode('About Us', 'about-us', 'Domain', null, 6);
const investors = createNode('Investors', 'investors', 'Domain', null, 7);
const newsroom = createNode('Newsroom', 'newsroom', 'Domain', null, 8);

docs.push(aboutUs, investors, newsroom);

// Generate NDJSON
const ndjson = docs.map(doc => JSON.stringify(doc)).join('\n');
fs.writeFileSync('seed.ndjson', ndjson);
console.log('Successfully generated seed.ndjson with ' + docs.length + ' documents.');
