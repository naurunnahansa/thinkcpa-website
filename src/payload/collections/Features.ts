import type { CollectionConfig } from 'payload'

export const Features: CollectionConfig = {
  slug: 'features',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'subtitle', 'order'],
  },
  fields: [
    {
      name: 'icon',
      type: 'select',
      options: [
        { label: 'Brain', value: 'Brain' },
        { label: 'Target', value: 'Target' },
        { label: 'Message Circle', value: 'MessageCircle' },
        { label: 'Bar Chart', value: 'BarChart3' },
        { label: 'Zap', value: 'Zap' },
        { label: 'Shield', value: 'Shield' },
        { label: 'Clock', value: 'Clock' },
        { label: 'Users', value: 'Users' },
      ],
    },
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'subtitle',
      type: 'text',
    },
    {
      name: 'description',
      type: 'textarea',
    },
    {
      name: 'colorScheme',
      type: 'select',
      defaultValue: 'secondary',
      options: [
        { label: 'Secondary (Blush)', value: 'secondary' },
        { label: 'Accent (Gold)', value: 'accent' },
      ],
    },
    {
      name: 'order',
      type: 'number',
      defaultValue: 0,
      admin: {
        description: 'Display order (lower numbers first)',
      },
    },
  ],
}
