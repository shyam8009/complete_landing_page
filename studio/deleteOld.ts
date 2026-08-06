import { getCliClient } from 'sanity/cli'

const client = getCliClient()

async function deleteAll() {
  console.log('Fetching documents to delete...')
  const docs = await client.fetch('*[_type in ["contentNode", "homePage", "domain", "system", "product"]]')
  console.log(`Found ${docs.length} documents. Removing references first...`)
  
  if (docs.length === 0) {
    console.log('No documents to delete.')
    return
  }
  
  const patchTx = client.transaction()
  docs.forEach(d => patchTx.patch(d._id, {unset: ['parent']}))
  await patchTx.commit()
  
  console.log('References removed. Deleting documents...')
  const delTx = client.transaction()
  docs.forEach(d => delTx.delete(d._id))
  await delTx.commit()
  
  console.log('Done deleting.')
}

deleteAll().catch(console.error)
