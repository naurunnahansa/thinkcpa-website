import type { CollectionConfig } from 'payload'

export const PricingPlans: CollectionConfig = {
  slug: 'pricing-plans',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'price', 'featured', 'order'],
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'price',
      type: 'text',
      required: true,
      admin: {
        description: 'e.g., "$49" or "$0"',
      },
    },
    {
      name: 'period',
      type: 'text',
      admin: {
        description: 'e.g., "/month", "forever", "one-time"',
      },
    },
    {
      name: 'description',
      type: 'text',
    },
    {
      name: 'features',
      type: 'array',
      fields: [
        {
          name: 'feature',
          type: 'text',
        },
      ],
    },
    {
      name: 'ctaText',
      type: 'text',
      label: 'CTA Button Text',
    },
    {
      name: 'ctaUrl',
      type: 'text',
      label: 'CTA URL',
    },
    {
      name: 'featured',
      type: 'checkbox',
      label: 'Featured Plan',
      defaultValue: false,
    },
    {
      name: 'order',
      type: 'number',
      defaultValue: 0,
    },
  ],
}
