import { createClient } from '@sanity/client';
const client = createClient({ projectId: 'wtvw97ue', dataset: 'production', useCdn: false, apiVersion: '2023-05-03' });
client.fetch('*[_type == "homePage"]').then(res => console.log(JSON.stringify(res, null, 2)));
