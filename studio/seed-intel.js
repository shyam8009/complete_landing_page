import { getCliClient } from 'sanity/cli'
const client = getCliClient()

const buildRichText = (text) => ([{
  _type: 'block',
  _key: Math.random().toString(36).substring(7),
  style: 'normal',
  markDefs: [],
  children: [{ _type: 'span', _key: Math.random().toString(36).substring(7), text, marks: [] }]
}])

async function seed() {
  console.log('Seeding Intelligence & Surveillance page...')

  const doc = {
    _type: 'ecosystemPage',
    title: 'Intelligence & Surveillance',
    category: 'information-warfare',
    slug: { _type: 'slug', current: 'intelligence-surveillance' },
    metaDesc: 'Next-generation Intelligence and Surveillance systems. Featuring AI-powered OSINT platforms, tactical Signal Intelligence (SIGINT), and Comprehensive Security Assessments.',
    hero: {
      eyebrow: 'Information Warfare',
      h1: 'Intelligence & Surveillance',
      subheadline: buildRichText('Absolute informational dominance. From deep-web data extraction to invisible spectrum monitoring, this is the architecture required to map complex threats and secure multi-domain operations before a kinetic strike.'),
      intro: buildRichText('Absolute informational dominance. From deep-web data extraction to invisible spectrum monitoring.'),
      ctaText: 'Deploy Surveillance Assets',
    },
    ecosystem: {
      headerTitle: 'Threat Intelligence Ecosystem',
      introTag: 'Threat Intelligence',
      introH2: 'Threat Intelligence Ecosystem',
      introDesc: buildRichText('A unified architecture encompassing OSINT, SIGINT, and rigorous vulnerability assessments. Uncover hidden adversaries and secure infrastructure before threats materialize.'),
      cards: [
        {
          _key: Math.random().toString(36).substring(7),
          tag: 'AI Analytics . Darknet Extraction',
          title: 'Open-Source Intelligence (OSINT)',
          description: buildRichText('An advanced, AI-powered intelligence platform that automates multi-source data extraction across 500+ channels. It empowers commanders with a zero-footprint digital intelligence collector that filters out internet noise to extract, analyze, and map complex threats in absolute operational secrecy.'),
          specs: [
            'Simultaneously draws live data feeds from standard web channels, public blockchains, and deep Dark Web marketplaces.',
            'Powered by a rich backend combining over 1000 advanced algorithmic search methods.',
            'Integrates machine-learning-driven facial recognition to match individuals within visual contents effortlessly.',
            'Built on secure anonymity architecture that completely shields the user\'s IP and digital signatures.'
          ]
        },
        {
          _key: Math.random().toString(36).substring(7),
          tag: 'Electronic Intercept . Spectrum Dominance',
          title: 'Signal Intelligence (SIGINT)',
          description: buildRichText('Invisible exploitation of the electromagnetic spectrum. Our Signal Intelligence architecture provides the capability to intercept, analyze, and decrypt hostile electronic communications and radar emissions in real-time, delivering actionable tactical foresight.'),
          specs: [
            'Continuous monitoring and interception across wideband communication networks and encrypted channels.',
            'Precision direction-finding (DF) to geolocate hostile emitters and command nodes.',
            'Advanced modulation recognition and signal classification powered by machine learning algorithms.',
            'Rapid deployment form factors ranging from fixed infrastructure to mobile tactical units.'
          ]
        },
        {
          _key: Math.random().toString(36).substring(7),
          tag: 'Threat Mapping . Vulnerability Audits',
          title: 'Comprehensive Security Assessment',
          description: buildRichText('A holistic, multi-vector evaluation of physical and digital security postures. We simulate advanced persistent threats (APTs) and kinetic breaches to identify critical vulnerabilities within infrastructure, networks, and operational protocols before adversaries can exploit them.'),
          specs: [
            'Full-spectrum red-teaming encompassing physical perimeter breaches and cyber intrusion testing.',
            'Detailed risk matrix generation mapping internal and external threat vectors.',
            'Compliance and resilience benchmarking against global defense and intelligence standards.',
            'Actionable mitigation roadmaps to harden infrastructure and eliminate blind spots.'
          ]
        }
      ]
    },
    ctaBlock: {
      headline: 'Achieve absolute informational dominance across all domains.',
      btnText: 'Contact Info Warfare Division',
      linkText: 'Request a Threat Assessment Consultation'
    }
  }

  // Check if already exists
  const existing = await client.fetch(`*[_type == "ecosystemPage" && slug.current == "intelligence-surveillance"][0]._id`)
  if (existing) {
    console.log(`Document already exists (${existing}), updating...`)
    await client.patch(existing).set(doc).commit()
  } else {
    await client.create(doc)
  }
  console.log('Intelligence & Surveillance page seeded successfully!')
}

seed().catch(console.error)
