import type { Metadata } from 'next'
import { ContactForm } from '@/components/contact-form'
import { InstagramIcon, MailIcon, PhoneIcon, PinIcon, WhatsAppIcon } from '@/components/icons'
import { JsonLd } from '@/components/json-ld'
import { PageHero } from '@/components/page-hero'
import { breadcrumb } from '@/lib/schema'
import { fullAddress, site, waLink } from '@/lib/site'

export const metadata: Metadata = {
  title: 'İletişim — Tuzla Organizasyon Firması',
  description: `Mai Organizasyon ile iletişime geçin: ${fullAddress}. Telefon ${site.phone}. Düğün, nişan ve özel gün organizasyonunuz için ücretsiz teklif alın.`,
  alternates: { canonical: '/iletisim' }
}

const crumbs = [{ href: '/', label: 'Anasayfa' }, { href: '/iletisim', label: 'İletişim' }]

export default function Contact() {
  const items = [
    { icon: WhatsAppIcon, label: 'WhatsApp', value: site.phone, href: waLink('Merhaba, bilgi almak istiyorum.') },
    { icon: PhoneIcon, label: 'Telefon', value: site.phone, href: site.phoneHref },
    { icon: MailIcon, label: 'E-posta', value: site.email, href: `mailto:${site.email}` },
    { icon: InstagramIcon, label: 'Instagram', value: '@maiorganizasyon_', href: site.instagram },
    { icon: PinIcon, label: 'Adres', value: fullAddress, href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('Mai Organizasyon Tuzla')}` }
  ]
  return (
    <>
      <PageHero crumbs={crumbs} eyebrow="İletişim" title={<>Hikâyenizi <em className="text-gold-deep">anlatın.</em></>} intro="Tarihinizi, kişi sayısını ve hayalinizdeki konsepti paylaşın; size özel teklifimizi kısa sürede iletelim." />
      <section className="container-x grid gap-16 pb-24 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <ContactForm />
        </div>
        <address className="not-italic lg:col-span-4 lg:col-start-9">
          <ul className="divide-y divide-line border-y border-line">
            {items.map(({ icon: Icon, label, value, href }) => (
              <li key={label}>
                <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener" className="group flex items-start gap-4 py-5">
                  <Icon className="mt-0.5 size-5 shrink-0 text-gold-deep" />
                  <span>
                    <span className="block text-xs tracking-widest text-muted uppercase">{label}</span>
                    <span className="mt-1 block group-hover:text-gold-deep">{value}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </address>
      </section>
      <section aria-label="Harita" className="h-[28rem] w-full bg-sand">
        <iframe src={site.gmap} title="Mai Organizasyon konumu — Tuzla, İstanbul" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="size-full grayscale-[60%]" />
      </section>
      <JsonLd data={breadcrumb(crumbs)} />
    </>
  )
}
