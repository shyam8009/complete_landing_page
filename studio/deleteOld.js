const { createClient } = require('@sanity/client');

const client = createClient({
  projectId: 'wtvw97ue',
  dataset: 'production',
  useCdn: false,
  token: process.env.SANITY_AUTH_TOKEN || '', // Wait, this needs a token!
  apiVersion: '2023-05-03',
});

async function deleteAll() {
  console.log('Fetching documents to delete...');
  // Since we don't have the token reliably in this script, let's just use the CLI instead!
}

deleteAll().catch(console.error);
