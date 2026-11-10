import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CtaBand } from '@/components/cta-band'
import { Faq } from '@/components/faq'
import { ArrowIcon, WhatsAppIcon } from '@/components/icons'
import { JsonLd } from '@/components/json-ld'
import { gallery, img } from '@/lib/images'
import { faqPage } from '@/lib/schema'
import { services } from '@/lib/services'
import { faqs, steps, testimonials, waLink } from '@/lib/site'

export const metadata: Metadata = { alternates: { canonical: '/' } }

const d = (ms: number) => ({ '--d': `${ms}ms` }) as React.CSSProperties
const events = ['Düğün', 'Nişan', 'Kına Gecesi', 'Sünnet', 'Baby Shower', 'Doğum Günü', 'Kurumsal Davet', 'Sahil Nikahı']

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="container-x grid items-center gap-12 pt-8 pb-16 sm:pt-12 lg:min-h-[calc(100dvh-4.5rem)] lg:grid-cols-12 lg:gap-8 lg:pb-12">
        <div className="lg:col-span-6 lg:pr-6">
          <h1>
            <span className="eyebrow rise">Tuzla · Düğün & Organizasyon</span>{' '}
            <span className="display rise mt-8 block text-[clamp(3.5rem,11vw,8.5rem)]" style={d(120)}>
              En güzel <em className="text-gold-deep">anlarınız,</em>
              <br /> kusursuz.
            </span>
          </h1>
          <p className="rise mt-8 max-w-md text-lg leading-relaxed text-muted" style={d(260)}>
            Düğün, nişan, kına ve tüm özel günleriniz için planlama, dekor, fotoğraf, müzik ve ikramı tek elden yönetiyoruz. Siz yalnızca anın tadını çıkarın.
          </p>
          <div className="rise mt-10 flex flex-wrap gap-3" style={d(380)}>
            <a href={waLink('Merhaba, organizasyon için teklif almak istiyorum.')} target="_blank" rel="noopener" className="btn-dark">
              <WhatsAppIcon /> Ücretsiz teklif alın
            </a>
            <Link href="/hizmetler" className="btn-line">
              Hizmetleri keşfedin <ArrowIcon />
            </Link>
          </div>
        </div>

        <div className="relative lg:col-span-6">
          <div className="unveil relative ml-auto aspect-[4/5] w-[85%] overflow-hidden rounded-t-full" style={d(200)}>
            <Image src={img.yatNikah} alt="Tuzla’da deniz kenarında kurulmuş nikah takı" priority fill sizes="(min-width:1024px) 42vw, 85vw" placeholder="blur" className="object-cover" />
          </div>
          <div className="unveil absolute bottom-[-6%] left-0 aspect-[3/4] w-[38%] overflow-hidden rounded-sm border-[6px] border-ivory shadow-xl" style={d(400)}>
            <Image src={img.beyazTak} alt="Beyaz çiçekli düğün takı" fill sizes="(min-width:1024px) 18vw, 38vw" placeholder="blur" className="object-cover" />
          </div>
          <p className="rise absolute top-6 left-0 font-script text-4xl text-gold-deep sm:text-5xl" style={d(500)}>
            Mai
          </p>
        </div>
      </section>

      {/* Marquee */}
      <div className="overflow-hidden border-y border-line bg-sand py-5" aria-hidden>
        <div className="marquee flex w-max gap-10 font-serif text-2xl whitespace-nowrap italic sm:text-3xl">
          {[...events, ...events].map((e, i) => (
            <span key={i} className="flex items-center gap-10">
              {e} <span className="text-base text-gold not-italic">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* About */}
      <section className="container-x grid gap-12 py-24 sm:py-32 lg:grid-cols-12">
        <div className="reveal relative aspect-[4/5] overflow-hidden lg:col-span-5">
          <Image src={img.ciftGulus} alt="Düğün töreninde gülümseyen gelin ve damat" fill sizes="(min-width:1024px) 40vw, 100vw" placeholder="blur" className="object-cover" />
        </div>
        <div className="flex flex-col justify-center lg:col-span-6 lg:col-start-7">
          <p className="eyebrow reveal">Biz kimiz</p>
          <h2 className="display reveal mt-6 text-4xl sm:text-6xl">
            Hayatınızın önemli anlarında, <em className="text-gold-deep">yanınızdayız.</em>
          </h2>
          <p className="reveal mt-8 text-lg leading-relaxed text-muted">
            Mai Organizasyon, Tuzla’dan tüm İstanbul Anadolu Yakası’na uzanan bir ekiple; hayallerinizi dinleyen, onları ölçülü bir zarafetle gerçeğe dönüştüren bir organizasyon evi. Mekân seçiminden son dansa kadar her detay tek bir ekibin sorumluluğunda.
          </p>
          <ul className="reveal mt-10 grid gap-6 border-t border-line pt-8 sm:grid-cols-3">
            {[
              ['Tek elden', 'Dekor, müzik, çekim ve ikram tek bir planda'],
              ['Size özel', 'Hazır şablon değil, sizin hikâyeniz'],
              ['Yerel ekip', 'Tuzla ve çevresinde mekân tecrübesi']
            ].map(([t, s]) => (
              <li key={t}>
                <p className="font-serif text-2xl">{t}</p>
                <p className="mt-1 text-sm text-muted">{s}</p>
              </li>
            ))}
          </ul>
          <Link href="/hakkimizda" className="reveal mt-10 inline-flex items-center gap-2 self-start border-b border-ink pb-1 text-sm">
            Hikâyemizi okuyun <ArrowIcon />
          </Link>
        </div>
      </section>

      {/* Services */}
      <section className="bg-sand py-24 sm:py-32">
        <div className="container-x">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="eyebrow reveal">Hizmetlerimiz</p>
              <h2 className="display reveal mt-6 text-5xl sm:text-7xl">
                Her kutlamaya <em className="text-gold-deep">özel.</em>
              </h2>
            </div>
            <Link href="/hizmetler" className="reveal inline-flex items-center gap-2 self-start border-b border-ink pb-1 text-sm sm:self-auto">
              Tüm hizmetler <ArrowIcon />
            </Link>
          </div>
          <ol className="mt-16 border-t border-ink/15">
            {services.map((s, i) => (
              <li key={s.slug} className="reveal border-b border-ink/15">
                <Link href={`/hizmetler/${s.slug}`} className="group grid grid-cols-[3rem_1fr_auto] items-center gap-4 py-7 sm:grid-cols-[5rem_1fr_1fr_auto] sm:gap-8">
                  <span className="font-serif text-lg text-gold-deep">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="font-serif text-3xl transition group-hover:translate-x-2 group-hover:text-gold-deep sm:text-4xl">{s.title}</h3>
                  <p className="hidden text-sm leading-relaxed text-muted sm:block">{s.short}</p>
                  <span className="grid size-11 place-items-center rounded-full border border-ink/20 transition group-hover:border-ink group-hover:bg-ink group-hover:text-ivory">
                    <ArrowIcon />
                  </span>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Gallery strip */}
      <section className="py-24 sm:py-32">
        <div className="container-x flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow reveal">Galeri</p>
            <h2 className="display reveal mt-6 text-5xl sm:text-7xl">
              Gerçekleşen <em className="text-gold-deep">hayaller.</em>
            </h2>
          </div>
          <Link href="/galeri" className="reveal inline-flex items-center gap-2 self-start border-b border-ink pb-1 text-sm sm:self-auto">
            Galeriyi görün <ArrowIcon />
          </Link>
        </div>
        <ul className="mt-14 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-px-4 px-4 pb-4 [--g:max(3rem,calc((100vw-80rem)/2+3rem))] [scrollbar-width:thin] sm:scroll-px-8 sm:gap-6 sm:px-8 lg:scroll-px-(--g) lg:px-(--g)">
          {gallery.slice(0, 8).map((p, i) => (
            <li key={p.src.src} className={`relative shrink-0 snap-start overflow-hidden ${i % 2 ? 'mt-12 aspect-[3/4] w-64 sm:w-72' : 'aspect-[4/5] w-72 sm:w-96'}`}>
              <Image src={p.src} alt={p.alt} fill sizes="(min-width:640px) 24rem, 18rem" placeholder="blur" className="object-cover transition duration-700 hover:scale-105" />
            </li>
          ))}
        </ul>
      </section>

      {/* Process */}
      <section className="bg-ink py-24 text-ivory sm:py-32">
        <div className="container-x">
          <p className="eyebrow reveal text-champagne!">Nasıl çalışıyoruz</p>
          <h2 className="display reveal mt-6 max-w-3xl text-5xl sm:text-7xl">Dört adımda, stressiz bir kutlama.</h2>
          <ol className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <li key={s.title} className="reveal border-t border-ivory/20 pt-6">
                <span className="font-serif text-6xl text-gold">{i + 1}</span>
                <h3 className="mt-4 font-serif text-3xl">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ivory/70">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 sm:py-32">
        <div className="container-x">
          <p className="eyebrow reveal">Mutlu çiftler & aileler</p>
          <h2 className="display reveal mt-6 text-5xl sm:text-7xl">Onların sözleriyle.</h2>
        </div>
        <ul className="container-x mt-14 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 lg:grid lg:grid-cols-3 lg:overflow-visible">
          {testimonials.map(t => (
            <li key={t.name} className="reveal w-[85%] shrink-0 snap-start border-t border-gold pt-8 sm:w-[60%] lg:w-auto">
              <figure>
                <blockquote className="font-serif text-2xl leading-snug italic sm:text-3xl">“{t.quote}”</blockquote>
                <figcaption className="mt-8 flex items-center gap-4">
                  <span className="grid size-12 place-items-center rounded-full bg-champagne font-serif text-lg">{t.name[0]}</span>
                  <span>
                    <span className="block font-medium">{t.name}</span>
                    <span className="text-sm text-muted">{t.event}</span>
                  </span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </section>

      {/* FAQ */}
      <section className="container-x grid gap-12 pb-24 sm:pb-32 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <p className="eyebrow reveal">Sık sorulanlar</p>
          <h2 className="display reveal mt-6 text-5xl">Merak ettikleriniz.</h2>
        </div>
        <div className="lg:col-span-8">
          <Faq items={faqs} />
        </div>
      </section>

      <CtaBand />
      <JsonLd data={faqPage(faqs)} />
    </>
  )
}
