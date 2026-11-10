import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { CtaBand } from '@/components/cta-band'
import { Faq } from '@/components/faq'
import { ArrowIcon, WhatsAppIcon } from '@/components/icons'
import { JsonLd } from '@/components/json-ld'
import { PageHero } from '@/components/page-hero'
import { breadcrumb, businessId, faqPage } from '@/lib/schema'
import { getService, services } from '@/lib/services'
import { site, waLink } from '@/lib/site'

type Props = { params: Promise<{ slug: string }> }

export const dynamicParams = false
export const generateStaticParams = () => services.map(s => ({ slug: s.slug }))

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const s = getService((await params).slug)
  if (!s) return {}
  const url = `/hizmetler/${s.slug}`
  return {
    title: `${s.seoTitle} — Tuzla, İstanbul`,
    description: s.short + ' Tuzla ve İstanbul Anadolu Yakası’nda Mai Organizasyon güvencesiyle.',
    alternates: { canonical: url },
    openGraph: { url, images: [{ url: s.image.src, width: s.image.width, height: s.image.height, alt: s.alt }] }
  }
}

export default async function ServicePage({ params }: Props) {
  const s = getService((await params).slug)
  if (!s) notFound()
  const crumbs = [
    { href: '/', label: 'Anasayfa' },
    { href: '/hizmetler', label: 'Hizmetler' },
    { href: `/hizmetler/${s.slug}`, label: s.title }
  ]
  const others = services.filter(o => o.slug !== s.slug).slice(0, 3)

  return (
    <>
      <PageHero crumbs={crumbs} eyebrow="Hizmet" title={s.title} intro={s.short} />

      <section className="container-x grid gap-12 pb-24 sm:pb-32 lg:grid-cols-12">
        <div className="unveil relative aspect-[4/5] overflow-hidden rounded-t-full lg:col-span-5">
          <Image src={s.image} alt={s.alt} priority fill sizes="(min-width:1024px) 40vw, 100vw" placeholder="blur" className="object-cover" />
        </div>
        <div className="lg:col-span-6 lg:col-start-7">
          <h2 className="display reveal text-4xl sm:text-5xl">
            {s.seoTitle}, <em className="text-gold-deep">Tuzla & Anadolu Yakası</em>
          </h2>
          <p className="reveal mt-8 text-lg leading-relaxed text-muted">{s.intro}</p>
          <h3 className="eyebrow reveal mt-12">Neler dahil</h3>
          <ul className="reveal mt-6 grid gap-x-8 sm:grid-cols-2">
            {s.includes.map(x => (
              <li key={x} className="flex gap-3 border-b border-line py-3.5">
                <span className="text-gold">✦</span> {x}
              </li>
            ))}
          </ul>
          <a href={waLink(`Merhaba, ${s.title} hakkında bilgi ve fiyat almak istiyorum.`)} target="_blank" rel="noopener" className="btn-dark reveal mt-10">
            <WhatsAppIcon /> Bu hizmet için teklif alın
          </a>
        </div>
      </section>

      <section className="container-x grid gap-12 pb-24 sm:pb-32 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <p className="eyebrow">Sık sorulanlar</p>
          <h2 className="display mt-6 text-5xl">{s.title} hakkında</h2>
        </div>
        <div className="lg:col-span-8">
          <Faq items={s.faq} />
        </div>
      </section>

      <section className="bg-sand py-24">
        <div className="container-x">
          <h2 className="display text-4xl sm:text-5xl">Diğer hizmetlerimiz</h2>
          <ul className="mt-10 grid gap-8 sm:grid-cols-3">
            {others.map(o => (
              <li key={o.slug}>
                <Link href={`/hizmetler/${o.slug}`} className="group block">
                  <div className="relative aspect-[3/2] overflow-hidden">
                    <Image src={o.image} alt={o.alt} fill sizes="(min-width:640px) 30vw, 100vw" placeholder="blur" className="object-cover transition duration-700 group-hover:scale-105" />
                  </div>
                  <p className="mt-4 flex items-center justify-between font-serif text-2xl">
                    {o.title} <ArrowIcon />
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand title={`${s.title} için tarihinizi ayıralım.`} />

      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: s.seoTitle,
          serviceType: s.title,
          description: s.intro,
          url: `${site.url}/hizmetler/${s.slug}`,
          image: `${site.url}${s.image.src}`,
          provider: { '@id': businessId },
          areaServed: site.areaServed.map(name => ({ '@type': 'City', name }))
        }}
      />
      <JsonLd data={breadcrumb(crumbs)} />
      <JsonLd data={faqPage(s.faq)} />
    </>
  )
}
