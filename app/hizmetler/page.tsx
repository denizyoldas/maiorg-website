import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CtaBand } from '@/components/cta-band'
import { ArrowIcon } from '@/components/icons'
import { JsonLd } from '@/components/json-ld'
import { PageHero } from '@/components/page-hero'
import { breadcrumb } from '@/lib/schema'
import { services } from '@/lib/services'

export const metadata: Metadata = {
  title: 'Hizmetlerimiz — Düğün, Nişan, Kına ve Özel Gün Organizasyonu',
  description: 'Tuzla ve İstanbul Anadolu Yakası’nda düğün organizasyonu, süsleme ve dekor, nişan, kına, sünnet, baby shower, fotoğraf, DJ ve yemek hizmetleri.',
  alternates: { canonical: '/hizmetler' }
}

const crumbs = [{ href: '/', label: 'Anasayfa' }, { href: '/hizmetler', label: 'Hizmetler' }]

export default function Services() {
  return (
    <>
      <PageHero
        crumbs={crumbs}
        eyebrow="Hizmetlerimiz"
        title={<>Her kutlama için <em className="text-gold-deep">tek adres.</em></>}
        intro="Planlamadan dekora, fotoğraftan müziğe; ister tek bir hizmet, ister anahtar teslim bir organizasyon. Size uygun olanı birlikte seçelim."
      />
      <section className="container-x grid gap-x-8 gap-y-16 pb-24 sm:grid-cols-2 sm:pb-32 lg:grid-cols-3">
        {services.map((s, i) => (
          <Link key={s.slug} href={`/hizmetler/${s.slug}`} className={`group reveal ${i % 3 === 1 ? 'lg:mt-16' : ''}`}>
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image src={s.image} alt={s.alt} fill sizes="(min-width:1024px) 30vw, (min-width:640px) 45vw, 100vw" placeholder="blur" className="object-cover transition duration-700 group-hover:scale-105" />
              <span className="absolute top-4 left-4 font-serif text-lg text-ivory drop-shadow">{String(i + 1).padStart(2, '0')}</span>
            </div>
            <h2 className="mt-6 flex items-center justify-between gap-4 font-serif text-3xl">
              {s.title} <ArrowIcon className="size-5 transition group-hover:translate-x-1" />
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">{s.short}</p>
          </Link>
        ))}
      </section>
      <CtaBand />
      <JsonLd data={breadcrumb(crumbs)} />
    </>
  )
}
