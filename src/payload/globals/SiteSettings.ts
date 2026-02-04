import type { GlobalConfig } from 'payload'

export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  fields: [
    {
      name: 'title',
      type: 'text',
      defaultValue: 'Think CPA',
    },
    {
      name: 'description',
      type: 'textarea',
    },
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'appUrl',
      type: 'text',
      label: 'App URL',
      admin: {
        description: 'URL for sign-in/sign-up redirects (e.g., https://platform.thinkcpa.us)',
      },
    },
    {
      name: 'promoBanner',
      type: 'text',
      label: 'Promo Banner Text',
    },
    {
      name: 'footerTagline',
      type: 'text',
    },
  ],
}
