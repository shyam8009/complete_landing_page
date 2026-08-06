import { defineField, defineType } from 'sanity'
import { definePageType } from '@q42/sanity-plugin-page-tree'
import { pageTreeConfig } from '../pageTreeConfig'

const _homePage = defineType({
  name: 'homePage',
  title: 'Root Folder (Home)',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
  ],
})

export const homePage = definePageType(_homePage, pageTreeConfig, {
  isRoot: true,
})
