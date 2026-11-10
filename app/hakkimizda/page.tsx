import type { Metadata } from 'next'
import Image from 'next/image'
import { CtaBand } from '@/components/cta-band'
import { JsonLd } from '@/components/json-ld'
import { PageHero } from '@/components/page-hero'
import { img } from '@/lib/images'
import { breadcrumb } from '@/lib/schema'
import { site, steps } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Hakkımızda — Tuzla’nın Organizasyon Evi',
  description: 'Mai Organizasyon; Tuzla merkezli, İstanbul Anadolu Yakası’nda düğün, nişan ve özel gün organizasyonu yapan, hayalleri gerçeğe dönüştüren bir ekip.',
  alternates: { canonical: '/hakkimizda' }
}

const crumbs = [{ href: '/', label: 'Anasayfa' }, { href: '/hakkimizda', label: 'Hakkımızda' }]

const values = [
  { t: 'Dinlemek', s: 'Her organizasyon bir sohbetle başlar. Önce sizi, hikâyenizi ve önceliklerinizi anlarız.' },
  { t: 'Özen', s: 'Bir peçetenin katlanışından ışığın tonuna kadar, detaylar bizim için asla küçük değildir.' },
  { t: 'Güven', s: 'Söz verdiğimiz saatte, söz verdiğimiz bütçeyle, söz verdiğimiz kalitede teslim ederiz.' }
]

export default function About() {
  return (
    <>
      <PageHero crumbs={crumbs} eyebrow="Hakkımızda" title={<>Anlarınızı <em className="text-gold-deep">tasarlıyoruz.</em></>} intro={`${site.slogan}. Mai Organizasyon, hayatınızın en önemli günlerinde yanınızda olmak ve o anları kusursuz şekilde doldurmak için kuruldu.`} />

      <section className="container-x grid gap-12 pb-24 sm:pb-32 lg:grid-cols-12">
        <div className="unveil relative aspect-[3/4] overflow-hidden rounded-t-full lg:col-span-5">
          <Image src={img.ciftTepe} alt="Gün batımında gelin ve damat" priority fill sizes="(min-width:1024px) 40vw, 100vw" placeholder="blur" className="object-cover" />
        </div>
        <div className="space-y-6 text-lg leading-relaxed text-muted lg:col-span-6 lg:col-start-7 lg:pt-16">
          <h2 className="display reveal text-4xl text-ink sm:text-5xl">Tuzla’dan, sevdiklerinizle paylaşacağınız günlere.</h2>
          <p className="reveal">Merkezimiz Tuzla Postane’de. Pendik’ten Kadıköy’e Anadolu Yakası’nın salonlarını, bahçelerini ve sahil mekânlarını yakından tanıyoruz; bu sayede hangi konseptin hangi mekânda en iyi sonucu vereceğini biliyoruz.</p>
          <p className="reveal">Düğünler, nişanlar, kına geceleri, sünnet düğünleri, baby shower ve doğum günleri; kurumsal davetler ve lansmanlar. Her birinde aynı ilkeyle çalışıyoruz: tüm sorumluluğu biz alalım, siz yalnızca anın tadını çıkarın.</p>
        </div>
      </section>

      <section className="bg-sand py-24 sm:py-32">
        <div className="container-x grid gap-12 sm:grid-cols-3">
          {values.map(v => (
            <div key={v.t} className="reveal border-t border-gold pt-6">
              <h3 className="font-serif text-4xl">{v.t}</h3>
              <p className="mt-4 leading-relaxed text-muted">{v.s}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-x py-24 sm:py-32">
        <p className="eyebrow">Süreç</p>
        <h2 className="display mt-6 text-5xl sm:text-6xl">Birlikte nasıl çalışırız?</h2>
        <ol className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <li key={s.title} className="reveal">
              <span className="font-serif text-6xl text-gold">{i + 1}</span>
              <h3 className="mt-3 font-serif text-3xl">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{s.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <CtaBand />
      <JsonLd data={breadcrumb(crumbs)} />
    </>
  )
}
