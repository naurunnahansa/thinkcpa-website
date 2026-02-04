import type { CollectionConfig } from 'payload'

export const Hero: CollectionConfig = {
  slug: 'hero',
  admin: {
    useAsTitle: 'headline',
  },
  fields: [
    {
      name: 'kicker',
      type: 'text',
      label: 'Kicker Text',
      admin: {
        description: 'Small text above the headline (e.g., "AI-Powered CPA Exam Prep")',
      },
    },
    {
      name: 'headline',
      type: 'text',
      required: true,
      label: 'Headline',
    },
    {
      name: 'headlineAccent',
      type: 'text',
      label: 'Headline Accent',
      admin: {
        description: 'Accented part of headline (e.g., "First try.")',
      },
    },
    {
      name: 'subheadline',
      type: 'textarea',
    },
    {
      name: 'stats',
      type: 'text',
      label: 'Stats Line',
      admin: {
        description: 'e.g., "89% pass rate · No credit card required · Cancel anytime"',
      },
    },
    {
      name: 'ctaText',
      type: 'text',
      label: 'CTA Button Text',
      defaultValue: 'Get started',
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'imageCaption',
      type: 'text',
    },
  ],
}
