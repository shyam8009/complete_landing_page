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
    doc.parent = {
      _type: 'reference',
      _ref: parentId,
    };
  }

  return doc;
}

const docs = [];

// ==========================================
// CAPABILITIES (Treated as L1 Domains as per user request)
// ==========================================

const ew = createNode('Electronic Warfare', 'electronic-warfare', 'Domain', null, 1);
const iw = createNode('Information Warfare', 'information-warfare', 'Domain', null, 2);
const dd = createNode('Defence Deeptech', 'defence-deeptech', 'Domain', null, 3);
const ad = createNode('Aerospace & Defence', 'aerospace-defence', 'Domain', null, 4);

docs.push(ew, iw, dd, ad);

// ------------------------------------------
// ELECTRONIC WARFARE (EW)
// ------------------------------------------
const ads = createNode('Anti Drone Systems', 'anti-drone-systems', 'System', ew._id, 1);
const rs = createNode('Radar Systems', 'radar-systems', 'System', ew._id, 2);
const js = createNode('Jamming Systems', 'jamming-systems', 'System', ew._id, 3);
const ds = createNode('Detection Systems', 'detection-systems', 'System', ew._id, 4);

docs.push(ads, rs, js, ds);

// EW -> Anti Drone Systems (Products)
const fpvBuddy = createNode('FPV Drone Buddy', 'fpv-drone-buddy', 'Product', ads._id, 1);
const fpvBulleseye = createNode('FPV Bulleseye & Interceptor', 'fpv-bulleseye-interceptor', 'Product', ads._id, 2);
const varuna = createNode('Varuna - Underwater Drone', 'varuna-underwater-drone', 'Product', ads._id, 3);
const proxy = createNode('PROXY - Control Channel', 'proxy-control-channel', 'Product', ads._id, 4);
docs.push(fpvBuddy, fpvBulleseye, varuna, proxy);

// EW -> Radar Systems (Products)
const droneRadar = createNode('3D Drone Radar', '3d-drone-radar', 'Product', rs._id, 1);
const survRadar = createNode('Surveillance Radar', 'surveillance-radar', 'Product', rs._id, 2);
docs.push(droneRadar, survRadar);


// ------------------------------------------
// INFORMATION WARFARE (IW)
// ------------------------------------------
const intelSurv = createNode('Intelligence & Surveillance', 'intelligence-surveillance', 'System', iw._id, 1);
const cmdCtrl = createNode('Command & Control', 'command-control', 'System', iw._id, 2);
const commMon = createNode('Communication & Monitoring', 'communication-monitoring', 'System', iw._id, 3);
const aiLang = createNode('AI & Language', 'ai-language', 'System', iw._id, 4);

docs.push(intelSurv, cmdCtrl, commMon, aiLang);

// IW -> Intelligence & Surveillance (Products)
const osint = createNode('Open-Source Intelligence (OSINT)', 'osint', 'Product', intelSurv._id, 1);
const signalIntel = createNode('Signal Intelligence', 'signal-intelligence', 'Product', intelSurv._id, 2);
const secAssess = createNode('Comprehensive Security Assessment', 'comprehensive-security-assessment', 'Product', intelSurv._id, 3);
docs.push(osint, signalIntel, secAssess);


// ------------------------------------------
// DEFENCE DEEPTECH (DD)
// ------------------------------------------
const acoustic = createNode('Acoustic Tracking', 'acoustic-tracking', 'System', dd._id, 1);
const thermal = createNode('Thermal Imaging', 'thermal-imaging', 'System', dd._id, 2);
const sensorFus = createNode('Sensor Fusion Engine', 'sensor-fusion-engine', 'System', dd._id, 3);
const targetAcq = createNode('Target Acquisition', 'target-acquisition', 'System', dd._id, 4);
docs.push(acoustic, thermal, sensorFus, targetAcq);


// ------------------------------------------
// AEROSPACE & DEFENCE (AD)
// ------------------------------------------
const uavs = createNode('Autonomous UAVs', 'autonomous-uavs', 'System', ad._id, 1);
const vtol = createNode('VTOL Flight Systems', 'vtol-flight-systems', 'System', ad._id, 2);
const payloads = createNode('Modular Payloads', 'modular-payloads', 'System', ad._id, 3);
const intercept = createNode('Intercept Munitions', 'intercept-munitions', 'System', ad._id, 4);
docs.push(uavs, vtol, payloads, intercept);


// ==========================================
// CORPORATE & EDITORIAL SECTIONS
// ==========================================
const investors = createNode('Investors', 'investors', 'Domain', null, 5);
const newsroom = createNode('Newsroom', 'newsroom', 'Domain', null, 6);
const aboutUs = createNode('About Us', 'about-us', 'Domain', null, 7);

docs.push(investors, newsroom, aboutUs);

// Investors
const financials = createNode('Financials', 'financials', 'System', investors._id, 1);
const governance = createNode('Governance', 'governance', 'System', investors._id, 2);
docs.push(financials, governance);

docs.push(createNode('Quarterly Reports', 'quarterly-reports', 'Product', financials._id, 1));
docs.push(createNode('SEC Filings', 'sec-filings', 'Product', financials._id, 2));
docs.push(createNode('Annual Reports', 'annual-reports', 'Product', financials._id, 3));
docs.push(createNode('Board of Directors', 'board-of-directors', 'Product', governance._id, 1));
docs.push(createNode('Committee Charters', 'committee-charters', 'Product', governance._id, 2));
docs.push(createNode('Code of Conduct', 'code-of-conduct', 'Product', governance._id, 3));

// Newsroom
const press = createNode('Press', 'press', 'System', newsroom._id, 1);
const updates = createNode('Updates', 'updates', 'System', newsroom._id, 2);
docs.push(press, updates);

docs.push(createNode('Press Releases', 'press-releases', 'Product', press._id, 1));
docs.push(createNode('Media Kits', 'media-kits', 'Product', press._id, 2));
docs.push(createNode('Contact PR', 'contact-pr', 'Product', press._id, 3));
docs.push(createNode('Product News', 'product-news', 'Product', updates._id, 1));
docs.push(createNode('Feature Articles', 'feature-articles', 'Product', updates._id, 2));
docs.push(createNode('Events', 'events', 'Product', updates._id, 3));

// About Us
const company = createNode('Company', 'company', 'System', aboutUs._id, 1);
const careers = createNode('Careers', 'careers', 'System', aboutUs._id, 2);
docs.push(company, careers);

docs.push(createNode('Our Mission', 'our-mission', 'Product', company._id, 1));
docs.push(createNode('Leadership', 'leadership', 'Product', company._id, 2));
docs.push(createNode('Locations', 'locations', 'Product', company._id, 3));
docs.push(createNode('Life at Sahana', 'life-at-sahana', 'Product', careers._id, 1));
docs.push(createNode('Open Positions', 'open-positions', 'Product', careers._id, 2));
docs.push(createNode('Early Careers', 'early-careers', 'Product', careers._id, 3));

// Generate NDJSON
const ndjson = docs.map(doc => JSON.stringify(doc)).join('\n');
fs.writeFileSync('seed2.ndjson', ndjson);
console.log('Successfully generated seed2.ndjson with ' + docs.length + ' documents.');
