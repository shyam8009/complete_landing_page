import { getCliClient } from 'sanity/cli'

const client = getCliClient()

const buildPortableText = (text) => {
  return [
    {
      _type: 'block',
      _key: Math.random().toString(36).substring(7),
      style: 'normal',
      markDefs: [],
      children: [
        {
          _type: 'span',
          _key: Math.random().toString(36).substring(7),
          text: text,
          marks: []
        }
      ]
    }
  ]
}

async function migrate() {
  console.log('Starting migration to Rich Text...');

  // 1. Migrate Products
  const products = await client.fetch(`*[_type == "product"]`)
  for (const doc of products) {
    let patches = []
    if (typeof doc.description === 'string') {
      patches.push(client.patch(doc._id).set({ description: buildPortableText(doc.description) }))
    }
    if (doc.features && Array.isArray(doc.features)) {
      const featurePatches = doc.features.reduce((acc, feature, i) => {
        if (typeof feature.featureDesc === 'string') {
          acc[`features[${i}].featureDesc`] = buildPortableText(feature.featureDesc)
        }
        return acc
      }, {})
      if (Object.keys(featurePatches).length > 0) {
        patches.push(client.patch(doc._id).set(featurePatches))
      }
    }
    
    for (const patch of patches) {
      await patch.commit()
      console.log(`Migrated product: ${doc.title}`)
    }
  }

  // 2. Migrate Categories
  const categories = await client.fetch(`*[_type == "category"]`)
  for (const doc of categories) {
    if (typeof doc.description === 'string') {
      await client.patch(doc._id).set({ description: buildPortableText(doc.description) }).commit()
      console.log(`Migrated category: ${doc.title}`)
    }
  }

  // 3. Migrate Ecosystem Pages
  const ecosystems = await client.fetch(`*[_type == "ecosystemPage"]`)
  for (const doc of ecosystems) {
    let ecosystemPatches = {}
    if (doc.hero && typeof doc.hero.subheadline === 'string') ecosystemPatches['hero.subheadline'] = buildPortableText(doc.hero.subheadline)
    if (doc.hero && typeof doc.hero.intro === 'string') ecosystemPatches['hero.intro'] = buildPortableText(doc.hero.intro)
    if (doc.ecosystem && typeof doc.ecosystem.introDesc === 'string') ecosystemPatches['ecosystem.introDesc'] = buildPortableText(doc.ecosystem.introDesc)
    
    if (doc.ecosystem && Array.isArray(doc.ecosystem.cards)) {
      doc.ecosystem.cards.forEach((card, i) => {
        if (typeof card.description === 'string') {
          ecosystemPatches[`ecosystem.cards[${i}].description`] = buildPortableText(card.description)
        }
      })
    }
    
    if (Object.keys(ecosystemPatches).length > 0) {
      await client.patch(doc._id).set(ecosystemPatches).commit()
      console.log(`Migrated ecosystem page: ${doc.title}`)
    }
  }

  // 4. Migrate Home Page (pageBuilder)
  const homePages = await client.fetch(`*[_type == "homePage"]`)
  for (const doc of homePages) {
    if (doc.pageBuilder && Array.isArray(doc.pageBuilder)) {
      let pbPatches = {}
      doc.pageBuilder.forEach((block, i) => {
        if (block._type === 'blockHero' && typeof block.subheadline === 'string') {
          pbPatches[`pageBuilder[${i}].subheadline`] = buildPortableText(block.subheadline)
        }
        if (block._type === 'blockVision' && typeof block.text === 'string') {
          pbPatches[`pageBuilder[${i}].text`] = buildPortableText(block.text)
        }
        if (block._type === 'blockProducts' && Array.isArray(block.products)) {
          block.products.forEach((prod, j) => {
            if (typeof prod.description === 'string') {
              pbPatches[`pageBuilder[${i}].products[${j}].description`] = buildPortableText(prod.description)
            }
          })
        }
      })
      if (Object.keys(pbPatches).length > 0) {
        await client.patch(doc._id).set(pbPatches).commit()
        console.log(`Migrated home page blocks`)
      }
    }
  }

  console.log('Migration complete!');
}

migrate().catch(console.error);
