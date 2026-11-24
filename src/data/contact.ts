const addressQuery =
  '655A/3/040, Kursi Rd, Adil Nagar, Lucknow, Uttar Pradesh 226022'

export const contactDetails = {
  company: 'Shri Shri Enterprises',
  addressLines: [
    '655A/3/040, Kursi Rd,',
    'Adil Nagar, Lucknow,',
    'Uttar Pradesh 226022',
  ],
  phone: {
    display: '082990 14434',
    href: 'tel:+918299014434',
  },
  mapsUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(addressQuery)}`,
  directionsUrl: `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(addressQuery)}`,
  socials: [
    {
      id: 'instagram',
      label: 'Instagram',
      href: 'https://www.instagram.com/shrishribasmatirice/',
    },
    {
      id: 'facebook',
      label: 'Facebook',
      href: 'https://www.facebook.com/share/1K4UhBMHK6/',
    },
  ],
} as const
