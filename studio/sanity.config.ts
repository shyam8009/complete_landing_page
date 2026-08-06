import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {media} from 'sanity-plugin-media'
import {schemaTypes} from './schemas'
import {deskStructure} from './structure'
import {UmbracoLayout} from './components/UmbracoLayout'
import {CustomNavbar} from './components/CustomNavbar'

export default defineConfig({
  name: 'default',
  title: 'Sovereign Dynamics CMS',

  projectId: 'wtvw97ue',
  dataset: 'production',

  // Inject our custom Umbraco layout which provides the left sidebar
  studio: {
    components: {
      layout: UmbracoLayout,
      navbar: CustomNavbar,
    },
  },

  document: {
    // Ensure the page tree configuration uses 'title' for the display label
    // @ts-ignore - Explicit fix requested for the page tree plugin label rendering
    titleField: 'title',
  },

  plugins: [
    // 1. Content (Default Desk) - Accessible at '/'
    deskTool({
      name: 'content',
      title: 'Content',
      structure: deskStructure,
    }),

    // 2. Media Library - Accessible at '/media'
    media(),

    // 3. Vision (GROQ) - Accessible at '/vision'
    visionTool({
      name: 'vision',
      title: 'Vision',
    }),
  ],

  schema: {
    types: schemaTypes,
  },
})
