import { createClient } from '@sanity/client';

const client = createClient({
  projectId: '2647w6f9', // need to verify this
  dataset: 'production',
  useCdn: false,
  apiVersion: '2023-01-01',
  token: process.env.SANITY_TOKEN || '' // Will need a token or we can just use the CLI
});
