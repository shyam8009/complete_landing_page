import { getCliClient } from 'sanity/cli'
const client = getCliClient()

async function validate() {
  const homePages = await client.fetch(`*[_type == "homePage"]`)
  for (const doc of homePages) {
    if (doc.pageBuilder) {
      doc.pageBuilder.forEach(block => {
        if (block._type === 'blockHero' && typeof block.subheadline === 'string') {
          console.log('blockHero.subheadline is STILL string!', block.subheadline);
        }
        if (block._type === 'blockVision' && typeof block.text === 'string') {
          console.log('blockVision.text is STILL string!', block.text);
        }
        if (block._type === 'blockProducts' && Array.isArray(block.products)) {
          block.products.forEach(prod => {
            if (typeof prod.description === 'string') {
              console.log('blockProducts.products[].description is STILL string!', prod.name);
            }
          })
        }
      })
    }
  }
}
validate().catch(console.error);
