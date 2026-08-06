import { getCliClient } from 'sanity/cli'
import { randomKey } from '@sanity/util/content' // Or just generate it

const client = getCliClient()

const generateKey = () => Math.random().toString(36).substring(7)

async function fixKeys() {
  console.log('Checking homePage for missing _keys in pageBuilder...');
  const homePages = await client.fetch(`*[_type == "homePage"]`)
  
  for (const doc of homePages) {
    if (doc.pageBuilder && Array.isArray(doc.pageBuilder)) {
      let needsPatch = false;
      const patchedPageBuilder = doc.pageBuilder.map(block => {
        let newBlock = { ...block };
        if (!newBlock._key) {
          needsPatch = true;
          newBlock._key = generateKey();
        }
        // Check sub-arrays like stats or products
        if (newBlock.stats && Array.isArray(newBlock.stats)) {
          newBlock.stats = newBlock.stats.map(stat => {
            if (!stat._key) {
              needsPatch = true;
              return { ...stat, _key: generateKey() }
            }
            return stat;
          })
        }
        if (newBlock.products && Array.isArray(newBlock.products)) {
          newBlock.products = newBlock.products.map(prod => {
            if (!prod._key) {
              needsPatch = true;
              return { ...prod, _key: generateKey() }
            }
            return prod;
          })
        }
        return newBlock;
      });

      if (needsPatch) {
        console.log(`Patching homePage ${doc._id} to add _keys...`);
        await client.patch(doc._id).set({ pageBuilder: patchedPageBuilder }).commit();
        console.log('Successfully patched!');
      } else {
        console.log(`homePage ${doc._id} already has _keys.`);
      }
    }
  }
}

fixKeys().catch(console.error);
