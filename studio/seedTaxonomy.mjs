import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'wtvw97ue', // Hardcoded from previous operations
  dataset: 'production',
  useCdn: false,
  token: 'skYhaIgOL1Go8APOJiwgiDHxQQnY9kYpMAuSsKs1IRtz6xUKWGBLsmPRlpebxLyGv0KSEOYjqQtC6KQrjFY6qrFZj9lWL0B9FkcAq8KjJSroqPiZlHvQjrQH8GP3pRZpdD7bA8vCfRbdNnmFal68XAYh9KLI9EDkgfthXA17TJp9pOw0IUDN',
  apiVersion: '2023-01-01',
});

// Since capabilities_data contains JSX for icons, we will just seed the text data for now.
// The user can upload real SVG strings via the CMS later.
const taxonomy = [
  {
    title: "Electronic Warfare",
    slug: "electronic-warfare",
    description: "Spectrum dominance and electronic superiority solutions.",
    highlights: ["Counter Drone Operations", "Radar Surveillance", "Electronic Attack", "Spectrum Dominance"],
    systems: [
      {
        title: "Anti Drone Systems",
        slug: "anti-drone",
        description: "Detect, track, and neutralize drone threats.",
        stats: ["Real-time Detection", "Tracking & Classification", "Interception", "Counter Swarm"],
        applications: ["Border Security", "Military Bases", "Critical Infrastructure", "VIP Protection", "Counter-UAS Operations"],
        products: [
          { title: "FPV Drone Buddy", slug: "fpv-buddy" },
          { title: "FPV Bullseye & Interceptor", slug: "sahana-fpv" },
          { title: "Varuna - Underwater Drone", slug: "varuna" },
          { title: "PROXY - Control Channel", slug: "proxy" }
        ]
      },
      {
        title: "Radar Systems",
        slug: "radar",
        description: "Advanced radar solutions for surveillance and tracking.",
        stats: ["360° Coverage", "AI Threat Analysis", "Multi-Target Tracking", "All-Weather Operability"],
        applications: ["Airspace Monitoring", "Border Surveillance", "Naval Defence", "Asset Protection"],
        products: [
          { title: "3D Drone Radar", slug: "drone-radar" },
          { title: "Surveillance Radar", slug: "surveillance-radar" }
        ]
      },
      {
        title: "Jamming Systems",
        slug: "jamming",
        description: "Electronic jamming solutions for spectrum dominance.",
        stats: ["Multi-Band Jamming", "Directional Disruption", "Man-Portable", "Vehicle Integrated"],
        applications: ["Convoy Protection", "Tactical Infantry Support", "Event Security", "Airspace Denial"],
        products: [
          { title: "Handheld Jammer (Infinity Spear)", slug: "infinity-spear" },
          { title: "Anti Drone System (Infinity Rhino)", slug: "infinity-rhino" },
          { title: "Butterfly ADG L70", slug: "butterfly-adg" },
          { title: "Rhino Gen Z23", slug: "rhino-gen-z23" },
          { title: "Infinity Rhino Black", slug: "infinity-rhino-black" }
        ]
      },
      {
        title: "Detection Systems",
        slug: "detection",
        description: "Multi-sensor detection for complete threat awareness.",
        stats: ["Passive RF Sensing", "Acoustic Detection", "Optical Recognition", "Early Warning Alarms"],
        applications: ["Forward Operating Bases", "Border Outposts", "Critical Infrastructure", "Urban Warfare"],
        products: [
          { title: "The Guardian Smart Soldier Band", slug: "guardian-experience" },
          { title: "RF Detector D360", slug: "rf-detector" }
        ]
      }
    ]
  },
  {
    title: "Information Warfare",
    slug: "information-warfare",
    description: "Intelligence-led operations for information superiority and security.",
    highlights: ["Intelligence Collection", "Signal Monitoring", "Command & Control", "Situational Awareness"],
    systems: [
      {
        title: "Intelligence & Surveillance",
        slug: "information-warfare-intelligence-surveillance",
        description: "Advanced intelligence gathering and open-source data analytics.",
        stats: ["Real-time Analysis", "Deep Web Monitoring", "Predictive Alerts", "Secure Data Pipelines"],
        applications: ["Strategic Intelligence", "Threat Forecasting", "National Security", "Cyber Defense"],
        products: [
          { title: "Open-Source Intelligence (OSINT)", slug: "osint" },
          { title: "Signal Intelligence", slug: "sigint" },
          { title: "Comprehensive Security Assessment", slug: "security-assessment" }
        ]
      },
      {
        title: "Command & Control",
        slug: "information-warfare-command-control",
        description: "Centralized AI command hubs for autonomous asset coordination.",
        stats: ["Multi-Domain Fusion", "Automated Tasking", "Encrypted Comms", "Scalable Architecture"],
        applications: ["Joint Operations Centers", "Tactical Headquarters", "Disaster Response", "Fleet Management"],
        products: [
          { title: "FUSION Core AI Command and Control (C2)", slug: "fusion-core" },
          { title: "Interception System", slug: "interception" }
        ]
      },
      {
        title: "Communication & Monitoring",
        slug: "information-warfare-communication-monitoring",
        description: "Secure, unjammable communication networks and signal interception.",
        stats: ["High Bandwidth", "Low Latency", "Anti-Jamming", "Spectrum Hopping"],
        applications: ["Battlefield Comms", "Covert Operations", "Signal Triangulation", "Radio Interception"],
        products: [
          { title: "Radio Monitoring and Location Portfolio", slug: "radio-portfolio" },
          { title: "Direction Finders", slug: "direction-finders" }
        ]
      }
    ]
  },
  {
    title: "Quantum Technology Solutions",
    slug: "quantum-technology-solutions",
    description: "Next-generation quantum sensing, communication, and cryptography architectures.",
    highlights: ["Quantum Sensing", "Quantum Communication", "Post-Quantum Cryptography"],
    systems: [
      {
        title: "Quantum Sensing",
        slug: "quantum-technology-solutions-quantum-sensing",
        description: "Next-generation sensing hardware exploiting quantum principles.",
        stats: ["High Precision", "RF Detection", "Quantum Drones", "Atomic Clocks"],
        applications: ["Navigation", "Radar Systems", "Secure Timing", "Targeting"],
        products: [
          { title: "Wideband RF Detectors", slug: "wideband-rf" },
          { title: "Quantum Microwave Devices", slug: "quantum-microwave" },
          { title: "Rydberg Atom Quantum Sensors", slug: "rydberg-atom" },
          { title: "Quantum Drone", slug: "quantum-drone" },
          { title: "Quantum Clock Source", slug: "quantum-clock" }
        ]
      },
      {
        title: "Quantum Communication",
        slug: "quantum-technology-solutions-quantum-communication",
        description: "Unhackable quantum internet and post-quantum cryptographic systems.",
        stats: ["Unhackable Links", "QKD", "Post-Quantum Security", "Global Reach"],
        applications: ["Secure Comms", "Financial Data", "Military Networks", "Command & Control"],
        products: [
          { title: "Quantum Secured Communication", slug: "quantum-secured-comms" },
          { title: "Quantum Internet", slug: "quantum-internet" },
          { title: "Hardware based Post Quantum Cryptography", slug: "hardware-pqc" },
          { title: "Quantum Control Systems", slug: "quantum-control" }
        ]
      }
    ]
  },
  {
    title: "Aerospace & Defence",
    slug: "aerospace",
    description: "High-performance systems and components for aerospace and defence.",
    highlights: ["Aerospace Engineering", "Defence Manufacturing", "SATCOM Systems", "Precision Components"],
    systems: [
      {
        title: "Manufacturing & Fabrication",
        slug: "aero-components",
        description: "Precision-engineered aerospace and defence manufacturing.",
        stats: ["Mil-Spec Grade", "Advanced Materials", "Rapid Prototyping", "Scalable Production"],
        applications: ["Aircraft Assembly", "Munitions Casings", "Satellite Integration", "Naval Upgrades"],
        products: [
          { title: "Aerospace Components", slug: "aerospace-comp" },
          { title: "Defence Components", slug: "defence-comp" },
          { title: "SATCOM Components", slug: "satcom" }
        ]
      }
    ]
  },
  {
    title: "Defence Deeptech",
    slug: "defence-deeptech",
    description: "Advanced technologies driving the future of defence.",
    highlights: ["Artificial Intelligence", "Big Data Analytics", "Cloud Infrastructure", "IoT Networks"],
    systems: [
      {
        title: "AI & Data",
        slug: "ai-data",
        description: "Machine learning algorithms and big data processing pipelines.",
        stats: ["Neural Networks", "Predictive Analytics", "Natural Language", "Computer Vision"],
        applications: ["Automated Targeting", "Logistics Prediction", "Cyber Threat Detection", "Autonomous Navigation"],
        products: [
          { title: "Chatbots and Voice Solution", slug: "chatbots" },
          { title: "Big Data and Business Intelligence", slug: "big-data" },
          { title: "Artificial Intelligence", slug: "ai" }
        ]
      },
      {
        title: "Connectivity & Infrastructure",
        slug: "connectivity",
        description: "Resilient cloud services and IoT frameworks for military bases.",
        stats: ["Secure Cloud", "Mesh Networks", "Low-Latency Video", "Redundant Systems"],
        applications: ["Base Infrastructure", "Drone Telemetry", "Live Video Feeds", "Sensor Networks"],
        products: [
          { title: "Internet of Things", slug: "iot" },
          { title: "Cloud Services", slug: "cloud" },
          { title: "Video Streaming Services", slug: "video" }
        ]
      }
    ]
  }
];

async function seedData() {
  console.log("Starting smart CMS seeding process...");

  const createdTopLevelCategories = [];

  for (const dom of taxonomy) {
    // 1. Create Top-Level Category
    const topCategoryDoc = {
      _type: 'category',
      title: dom.title,
      slug: { _type: 'slug', current: dom.slug },
      description: dom.description,
      highlights: dom.highlights
    };
    
    console.log(`Creating Top-Level Category: ${dom.title}`);
    const createdTopCat = await client.create(topCategoryDoc);
    createdTopLevelCategories.push({
      _key: createdTopCat._id,
      _type: 'reference',
      _ref: createdTopCat._id
    });

    // 2. Create Sub-Categories
    for (const sys of dom.systems) {
      const subCategoryDoc = {
        _type: 'category',
        title: sys.title,
        slug: { _type: 'slug', current: sys.slug },
        description: sys.description,
        stats: sys.stats,
        applications: sys.applications,
        parentCategory: {
          _type: 'reference',
          _ref: createdTopCat._id
        }
      };

      console.log(`  Creating Sub-Category: ${sys.title}`);
      const createdSubCat = await client.create(subCategoryDoc);

      // 3. Create Products for this Sub-Category
      for (const prod of sys.products) {
        const productDoc = {
          _type: 'product',
          title: prod.title,
          slug: { _type: 'slug', current: prod.slug },
          category: {
            _type: 'reference',
            _ref: createdSubCat._id
          }
        };

        console.log(`    Creating Product: ${prod.title}`);
        await client.create(productDoc);
      }
    }
  }

  // 4. Create Master Navigation Menu
  console.log("Creating Master Navigation Menu...");
  const navDoc = {
    _type: 'navigationMenu',
    title: 'Main Desktop Navbar',
    items: [
      {
        _key: 'nav_capabilities',
        title: 'Capabilities',
        megaMenuType: 'capabilities',
        categories: createdTopLevelCategories // Link to EW, IW, Quantum, Aerospace, Deeptech
      },
      {
        _key: 'nav_investors',
        title: 'Investors',
        megaMenuType: 'investors'
      },
      {
        _key: 'nav_newsroom',
        title: 'Newsroom',
        link: '/newsroom',
        megaMenuType: 'none'
      },
      {
        _key: 'nav_about',
        title: 'About Us',
        link: '/about',
        megaMenuType: 'none'
      }
    ]
  };

  await client.create(navDoc);

  console.log("Smart CMS successfully seeded!");
}

seedData().catch(console.error);
