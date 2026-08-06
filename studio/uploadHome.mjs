import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'wtvw97ue',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2023-05-03',
  token: 'skYhaIgOL1Go8APOJiwgiDHxQQnY9kYpMAuSsKs1IRtz6xUKWGBLsmPRlpebxLyGv0KSEOYjqQtC6KQrjFY6qrFZj9lWL0B9FkcAq8KjJSroqPiZlHvQjrQH8GP3pRZpdD7bA8vCfRbdNnmFal68XAYh9KLI9EDkgfthXA17TJp9pOw0IUDN',
});

const homeData = {
  _type: 'homePage',
  title: 'Home',
  metaDesc: 'Official Complete Lending Page',
  pageBuilder: [
    {
      _key: 'hero_1',
      _type: 'blockHero',
      tag: "INDIA'S FIRST APEX DEFENSE INITIATIVE",
      headline: "Unmatched Operational Superiority.",
      subheadline: "Deploy autonomous systems, quantum-secured communications, and pervasive intelligence gathering across all domains.",
      ctaPrimary: "Explore Arsenal",
      ctaSecondary: "View Capabilities"
    },
    {
      _key: 'vision_1',
      _type: 'blockVision',
      text: "Building the digital nervous system for next-generation sovereign defense operations, integrating AI-driven autonomous systems with unbreakable quantum networks.",
      stats: [
        { _key: 'stat_1', value: "300+", label: "Patents Filed" },
        { _key: 'stat_2', value: "100%", label: "Indigenous Tech" },
        { _key: 'stat_3', value: "0ms", label: "Quantum Latency" }
      ]
    },
    {
      _key: 'products_1',
      _type: 'blockProducts',
      title: "Electronic Warfare",
      subLink: "Mission Critical Facility"
    },
    {
      _key: 'arsenal_1',
      _type: 'blockArsenal',
      title: "Electronic Warfare",
      subLink: "Mission Critical Facility",
      tagline: "Designed by Sahana Defence"
    },
    {
      _key: 'news_1',
      _type: 'blockNews',
      title: "News & Insights",
      subLink: "All articles",
      date: "06/26/2026",
      articleTitle: "Sahana Defence Signs Strategic Manufacturing Agreement with CEL",
      articleSummary: "Sahana Defence has entered into a Contract Agreement with Central Electronics Limited (CEL) to expand India's indigenous defence manufacturing capabilities. The partnership will support the establishment of a dedicated facility focused on Electronic Warfare systems, weapon systems, defence peripherals, and advanced DefenceTech solutions, reinforcing the nation's vision for self-reliance in defence production.",
      readMoreText: "Read more"
    }
  ]
};

async function uploadData() {
  try {
    console.log('Uploading home page data to Sanity...');
    const result = await client.create(homeData);
    console.log('Successfully uploaded:', result._id);
  } catch (err) {
    console.error('Error uploading data:', err);
  }
}

uploadData();
