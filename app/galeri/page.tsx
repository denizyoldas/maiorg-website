import type { Metadata } from 'next'
import { CtaBand } from '@/components/cta-band'
import { Gallery } from '@/components/gallery'
import { JsonLd } from '@/components/json-ld'
import { PageHero } from '@/components/page-hero'
import { gallery } from '@/lib/images'
import { breadcrumb } from '@/lib/schema'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Galeri — Düğün, Nişan ve Kına Organizasyon Fotoğrafları',
  description: 'Mai Organizasyon’un Tuzla ve İstanbul’da gerçekleştirdiği düğün, nişan, kına, sünnet ve baby shower organizasyonlarından dekor ve kutlama fotoğrafları.',
  alternates: { canonical: '/galeri' }
}

const crumbs = [{ href: '/', label: 'Anasayfa' }, { href: '/galeri', label: 'Galeri' }]

export default function GalleryPage() {
  return (
    <>
      <PageHero crumbs={crumbs} eyebrow="Galeri" title={<>Gerçekleşen <em className="text-gold-deep">hayaller.</em></>} intro="Kurduğumuz taklardan, süslediğimiz masalardan ve kutladığımız anlardan bir seçki." />
      <Gallery photos={gallery} />
      <CtaBand />
      <JsonLd data={breadcrumb(crumbs)} />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'ImageGallery',
          name: 'Mai Organizasyon Galeri',
          url: `${site.url}/galeri`,
          image: gallery.map(p => ({ '@type': 'ImageObject', contentUrl: `${site.url}${p.src.src}`, description: p.alt }))
        }}
      />
    </>
  )
}
