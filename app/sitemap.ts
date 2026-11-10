import type { MetadataRoute } from 'next'
import { services } from '@/lib/services'
import { site } from '@/lib/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ['', '/hizmetler', '/galeri', '/hakkimizda', '/iletisim']
  return [
    ...pages.map(p => ({ url: `${site.url}${p}`, changeFrequency: 'monthly' as const, priority: p ? 0.8 : 1 })),
    ...services.map(s => ({ url: `${site.url}/hizmetler/${s.slug}`, changeFrequency: 'monthly' as const, priority: 0.7, images: [`${site.url}${s.image.src}`] }))
  ]
}
