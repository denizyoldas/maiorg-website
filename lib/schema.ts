import { fullAddress, site } from './site'

export const businessId = `${site.url}/#business`

export const business = {
  '@context': 'https://schema.org',
  '@type': ['EventPlanner', 'LocalBusiness'],
  '@id': businessId,
  name: site.name,
  slogan: site.slogan,
  description: site.description,
  url: site.url,
  logo: `${site.url}/images/logo.webp`,
  image: `${site.url}/opengraph-image.jpg`,
  telephone: site.phone.replace(/\s/g, ''),
  email: site.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: site.address.street,
    addressLocality: site.address.district,
    addressRegion: site.address.city,
    postalCode: site.address.postalCode,
    addressCountry: site.address.country
  },
  geo: { '@type': 'GeoCoordinates', latitude: site.geo.lat, longitude: site.geo.lng },
  hasMap: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${site.name} ${fullAddress}`)}`,
  areaServed: site.areaServed.map(name => ({ '@type': 'City', name })),
  sameAs: [site.instagram]
}

export const breadcrumb = (items: { href: string; label: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((c, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: c.label,
    item: `${site.url}${c.href === '/' ? '' : c.href}`
  }))
})

export const faqPage = (items: { q: string; a: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: items.map(f => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a }
  }))
})
