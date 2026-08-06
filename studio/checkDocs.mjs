import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'wtvw97ue',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2023-05-03'
});

async function checkDocs() {
  try {
    const allDocs = await client.fetch(`*[_type == "homePage"]`);
    console.log("All homePage docs found: ", allDocs.length);
    for (const doc of allDocs) {
      console.log("---");
      console.log("ID:", doc._id);
      const visionBlock = doc.pageBuilder?.find(b => b._type === 'blockVision');
      console.log("Vision text:", visionBlock ? visionBlock.text : "None");
    }
    const drafts = await client.fetch(`*[_id in path("drafts.**") && _type == "homePage"]`);
    console.log(`Draft documents: ${drafts.length}`);
  } catch (err) {
    console.error(err);
  }
}

checkDocs();
