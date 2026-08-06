const fs = require('fs');
const crypto = require('crypto');

function generateId() {
  return crypto.randomUUID();
}

function createNode(title, slug, nodeType, parentId, order, extraFields = {}) {
  const doc = {
    _id: generateId(),
    _type: nodeType, // 'homePage', 'domain', 'system', 'product'
    title: title,
    ...extraFields
  };
  
  if (nodeType !== 'homePage') {
    doc.slug = { _type: 'slug', current: slug };
    doc.order = order;
    doc.showInMegaMenu = true;
  }

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
// ROOT FOLDER
// ==========================================
const rootFolder = createNode('Capabilities Tree', 'capabilities-tree', 'homePage', null, 0);
docs.push(rootFolder);


// ==========================================
// CAPABILITIES (L1 Domains)
// ==========================================

const ew = createNode('Electronic Warfare', 'electronic-warfare', 'domain', rootFolder._id, 1);
const iw = createNode('Information Warfare', 'information-warfare', 'domain', rootFolder._id, 2);
const dd = createNode('Defence Deeptech', 'defence-deeptech', 'domain', rootFolder._id, 3);
const ad = createNode('Aerospace & Defence', 'aerospace-defence', 'domain', rootFolder._id, 4);
const qts = createNode('Quantum Technology Solutions', 'quantum-technology-solutions', 'domain', rootFolder._id, 5);

docs.push(ew, iw, dd, ad, qts);

// ------------------------------------------
// ELECTRONIC WARFARE (EW)
// ------------------------------------------
const ads = createNode('Anti Drone Systems', 'anti-drone-systems', 'system', ew._id, 1);
const rs = createNode('Radar Systems', 'radar-systems', 'system', ew._id, 2);
const js = createNode('Jamming Systems', 'jamming-systems', 'system', ew._id, 3);
const ds = createNode('Detection Systems', 'detection-systems', 'system', ew._id, 4);
docs.push(ads, rs, js, ds);

// EW -> Anti Drone Systems (Products)
docs.push(
  createNode('FPV Drone Buddy', 'fpv-drone-buddy', 'product', ads._id, 1),
  createNode('FPV Bulleseye & Interceptor', 'fpv-bulleseye-interceptor', 'product', ads._id, 2),
  createNode('Varuna - Underwater Drone', 'varuna-underwater-drone', 'product', ads._id, 3),
  createNode('PROXY - Control Channel', 'proxy-control-channel', 'product', ads._id, 4)
);

// EW -> Radar Systems (Products)
docs.push(
  createNode('3D Drone Radar', '3d-drone-radar', 'product', rs._id, 1),
  createNode('Surveillance Radar', 'surveillance-radar', 'product', rs._id, 2)
);

// ------------------------------------------
// QUANTUM TECHNOLOGY SOLUTIONS (QTS) -> From db.ts
// ------------------------------------------
const qs = createNode('Quantum Sensing', 'quantum-sensing', 'system', qts._id, 1, {
  metaTitle: "Quantum Sensing Systems | Sovereign Dynamics",
  metaDescription: "Next-generation quantum sensing...",
  heroBgImage: "@/imports/global_threat_map.jpg",
  heroEyebrow: "Quantum Technology Solutions",
  heroH1: "QUANTUM SENSING",
  heroSubheadline: "Sensing built on quantum principles, engineered for a sensitivity classical hardware can't reach.",
  heroIntro: "From RF detection to atomic clocks, this is the measurement layer for India's aerospace and defence programmes.",
  heroCtaText: "Explore Quantum Sensors",
  ecosystemHeaderTitle: "The Quantum Ecosystem",
  ecosystemIntroTag: "Quantum Advantage",
  ecosystemIntroH2: "The Quantum Ecosystem",
  ecosystemIntroDesc: "A complete suite of sovereign quantum hardware, from wideband RF detectors to atomic clocks.",
  ctaHeadline: "Define the next generation of aerospace and defence measurement."
});

const qc = createNode('Quantum Communication', 'quantum-communication', 'system', qts._id, 2, {
  metaTitle: "Quantum Communication Systems | Sovereign Dynamics",
  heroBgImage: "@/imports/quantum_hero_bg.jpg",
  heroEyebrow: "Quantum Technology Solutions",
  heroH1: "QUANTUM COMMUNICATION",
  heroSubheadline: "Unbreakable communication infrastructure...",
  ecosystemHeaderTitle: "The Quantum Communication Ecosystem",
});
docs.push(qs, qc);

// QTS -> Quantum Sensing Products
docs.push(
  createNode('Wideband RF Detectors', 'wideband-rf-detectors', 'product', qs._id, 1, {
    productTag: "RFD1 | RG-QD | RF-Model / HVN S4",
    productLocalImage: "@/imports/quantum_rfd_detect.jpg",
    shortDescription: "Detection hardware built for the full RF spectrum...",
    productStatusBadge: "DEFENCE GRADE - ACTIVE",
    productFreqRange: "100 MHz - 40 GHz",
    productSpecs: ["Broadband detection across RF/MW frequencies", "Configurable for thru-wall RADAR and SIGINT", "Zero foreign dependency in the critical path", "Noise figure: < 2 dB across full band", "MIL-STD-810H environmental qualification", "Indigenous signal processing architecture"]
  }),
  createNode('Quantum Microwave Devices', 'quantum-microwave-devices', 'product', qs._id, 2, {
    productTag: "TWPAs | HEMT Amps | IQ Mixers",
    productLocalImage: "@/imports/innovation_2.jpg",
    shortDescription: "The amplification and signal-conditioning layer quantum systems run on.",
    productStatusBadge: "CRYOGENIC CAPABLE",
    productFreqRange: "4K - 300K Operating",
    productSpecs: ["TWPAs for near-quantum-limited amplification", "HEMT amplifiers for low-noise RF/MW gain"]
  }),
  createNode('Rydberg Atom Sensors', 'rydberg-atom-sensors', 'product', qs._id, 3, {
    productTag: "Atomic-Precision Sensing",
    productLocalImage: "@/imports/rydberg_sensor_macro.jpg",
    shortDescription: "Atomic-precision sensing for environments where classical RF sensors fall short.",
    productStatusBadge: "QUANTUM ACTIVE",
    productFreqRange: "DC - 100+ GHz",
    productSpecs: ["Ultra-high sensitivity EM field detection", "Self-calibrating atomic reference standard"]
  }),
  createNode('Quantum Drone', 'quantum-drone', 'product', qs._id, 4, {
    productTag: "DaaS / Mission Scale",
    productLocalImage: "@/imports/quantum_stealth_drone.jpg",
    shortDescription: "Quantum-enabled drone systems built for contested and GPS-denied environments.",
    productStatusBadge: "MISSION READY",
    productFreqRange: "GPS-Denied Nav",
    productSpecs: ["Drone-as-a-Service (DaaS) flexible deployment", "Onboard quantum sensing for GPS-denied nav"]
  }),
  createNode('Quantum Clock Source', 'quantum-clock-source', 'product', qs._id, 5, {
    productTag: "Quantum Limit Precision",
    productLocalImage: "@/imports/quantum_atomic_clock.jpg",
    shortDescription: "Precision timing at the quantum limit.",
    productStatusBadge: "SOVEREIGN TIMING",
    productFreqRange: "Allan Dev < 1e-10",
    productSpecs: ["Quantum-grade frequency stability", "Enables sovereign, GPS-independent timing"]
  })
);

// QTS -> Quantum Communication Products
docs.push(
  createNode('Quantum Secured Communication', 'quantum-secured-communication', 'product', qc._id, 1, { productLocalImage: "@/imports/qkd_terminal.jpg" }),
  createNode('Quantum Internet', 'quantum-internet', 'product', qc._id, 2, { productLocalImage: "@/imports/quantum_network_nodes.jpg" }),
  createNode('Hardware based Post Quantum Cryptography', 'hardware-based-post-quantum-cryptography', 'product', qc._id, 3, { productLocalImage: "@/imports/quantum_crypto_chip.jpg" }),
  createNode('Quantum Control Systems', 'quantum-control-systems', 'product', qc._id, 4, { productLocalImage: "@/imports/quantum_control_software.jpg" })
);

// ------------------------------------------
// INFORMATION WARFARE (IW)
// ------------------------------------------
const intelSurv = createNode('Intelligence & Surveillance', 'intelligence-surveillance', 'system', iw._id, 1, {
  heroBgImage: "@/imports/intel_hero_bg.jpg",
  heroEyebrow: "Information Warfare",
  heroH1: "INTELLIGENCE & SURVEILLANCE",
  heroSubheadline: "Actionable intelligence derived from multi-domain data...",
});
const cmdCtrl = createNode('Command & Control', 'command-control', 'system', iw._id, 2, {
  heroBgImage: "@/imports/c2_hero_bg.jpg",
  heroH1: "COMMAND & CONTROL",
});
const commMon = createNode('Communication Monitoring', 'communication-monitoring', 'system', iw._id, 3, {
  heroBgImage: "@/imports/comms_hero_bg.jpg",
  heroH1: "COMMUNICATION MONITORING",
});

docs.push(intelSurv, cmdCtrl, commMon);

// IW -> Intelligence & Surveillance Products
docs.push(
  createNode('Open-Source Intelligence (OSINT)', 'osint', 'product', intelSurv._id, 1, { productLocalImage: "@/imports/osint_dashboard.jpg" }),
  createNode('Signal Intelligence (SIGINT)', 'signal-intelligence', 'product', intelSurv._id, 2, { productLocalImage: "@/imports/sigint_arrays.jpg" }),
  createNode('Comprehensive Security Assessment', 'comprehensive-security-assessment', 'product', intelSurv._id, 3, { productLocalImage: "@/imports/security_assessment_twin.jpg" })
);

// IW -> Command & Control Products
docs.push(
  createNode('FUSION Core AI Command & Control (C2)', 'fusion-core-ai-c2', 'product', cmdCtrl._id, 1, { productLocalImage: "@/imports/c2_dashboard_ui.png" }),
  createNode('Interception System', 'interception-system', 'product', cmdCtrl._id, 2, { productLocalImage: "@/imports/interception_ui.jpg" })
);

// IW -> Communication Monitoring Products
docs.push(
  createNode('Radio Monitoring and Location Portfolio', 'radio-monitoring-location', 'product', commMon._id, 1, { productLocalImage: "@/imports/radio_monitoring_portfolio.jpg" }),
  createNode('Direction Finders', 'direction-finders', 'product', commMon._id, 2, { productLocalImage: "@/imports/direction_finders_system.jpg" })
);

// ------------------------------------------
// DEFENCE DEEPTECH (DD)
// ------------------------------------------
const acoustic = createNode('Acoustic Tracking', 'acoustic-tracking', 'system', dd._id, 1);
const thermal = createNode('Thermal Imaging', 'thermal-imaging', 'system', dd._id, 2);
docs.push(acoustic, thermal);

// ------------------------------------------
// AEROSPACE & DEFENCE (AD)
// ------------------------------------------
const uavs = createNode('Autonomous UAVs', 'autonomous-uavs', 'system', ad._id, 1);
const vtol = createNode('VTOL Flight Systems', 'vtol-flight-systems', 'system', ad._id, 2);
docs.push(uavs, vtol);


fs.writeFileSync('seed4.ndjson', docs.map(doc => JSON.stringify(doc)).join('\n'));
console.log(`Generated ${docs.length} documents into seed4.ndjson`);
