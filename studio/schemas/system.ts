import { defineField, defineType } from 'sanity'
import { definePageType } from '@q42/sanity-plugin-page-tree'
import { pageTreeConfig } from '../pageTreeConfig'

const _system = defineType({
  name: 'system',
  title: 'System (Level 2)',
  type: 'document',
  groups: [
    { name: 'detail', title: 'Detail', default: true },
    { name: 'seo', title: 'SEO' },
    { name: 'navigation', title: 'Navigation' },
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      group: 'detail',
      validation: (Rule) => Rule.required(),
      description: 'e.g., "Anti Drone Systems", "Quantum Sensing"',
    }),
    defineField({
      name: 'heroEyebrow',
      title: 'Hero Eyebrow',
      type: 'string',
      group: 'detail',
    }),
    defineField({
      name: 'heroH1',
      title: 'Hero H1',
      type: 'string',
      group: 'detail',
    }),
    defineField({
      name: 'heroSubheadline',
      title: 'Hero Subheadline',
      type: 'text',
      group: 'detail',
    }),
    defineField({
      name: 'heroIntro',
      title: 'Hero Intro Text',
      type: 'text',
      group: 'detail',
    }),
    defineField({
      name: 'heroCtaText',
      title: 'Hero CTA Text',
      type: 'string',
      group: 'detail',
    }),
    defineField({
      name: 'heroBgImage',
      title: 'Hero Background Image (String)',
      type: 'string',
      group: 'detail',
    }),
    defineField({
      name: 'ecosystemHeaderTitle',
      title: 'Ecosystem Header Title',
      type: 'string',
      group: 'detail',
    }),
    defineField({
      name: 'ecosystemIntroTag',
      title: 'Ecosystem Intro Tag',
      type: 'string',
      group: 'detail',
    }),
    defineField({
      name: 'ecosystemIntroH2',
      title: 'Ecosystem Intro H2',
      type: 'string',
      group: 'detail',
    }),
    defineField({
      name: 'ecosystemIntroDesc',
      title: 'Ecosystem Intro Description',
      type: 'text',
      group: 'detail',
    }),
    defineField({
      name: 'ctaHeadline',
      title: 'CTA Headline',
      type: 'string',
      group: 'detail',
    }),
    defineField({
      name: 'metaTitle',
      title: 'Meta Title',
      type: 'string',
      group: 'seo',
    }),
    defineField({
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'text',
      group: 'seo',
    }),
    defineField({
      name: 'order',
      title: 'Order',
      type: 'number',
      group: 'navigation',
    }),
    defineField({
      name: 'showInMegaMenu',
      title: 'Show In Mega Menu',
      type: 'boolean',
      group: 'navigation',
      initialValue: true,
    }),
  ],
})

export const system = definePageType(_system, pageTreeConfig, {
  fieldsGroupName: 'detail',
})
