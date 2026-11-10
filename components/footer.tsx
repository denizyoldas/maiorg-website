import Link from 'next/link'
import { fullAddress, nav, site } from '@/lib/site'
import { services } from '@/lib/services'
import { InstagramIcon } from './icons'

export function Footer() {
  return (
    <footer className="bg-sand">
      <div className="container-x grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <p className="font-script text-5xl">Mai Organizasyon</p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
            Tuzla merkezli düğün, nişan ve özel gün organizasyonu. {site.slogan}.
          </p>
          <a href={site.instagram} target="_blank" rel="noopener" className="mt-6 inline-flex items-center gap-2 text-sm hover:text-gold-deep">
            <InstagramIcon /> @maiorganizasyon_
          </a>
        </div>
        <div className="lg:col-span-2">
          <p className="eyebrow">Menü</p>
          <ul className="mt-5 space-y-2.5 text-sm">
            {nav.map(n => <li key={n.href}><Link href={n.href} className="text-muted hover:text-ink">{n.label}</Link></li>)}
          </ul>
        </div>
        <div className="lg:col-span-3">
          <p className="eyebrow">Hizmetler</p>
          <ul className="mt-5 space-y-2.5 text-sm">
            {services.map(s => <li key={s.slug}><Link href={`/hizmetler/${s.slug}`} className="text-muted hover:text-ink">{s.title}</Link></li>)}
          </ul>
        </div>
        <address className="not-italic lg:col-span-3">
          <p className="eyebrow">İletişim</p>
          <ul className="mt-5 space-y-2.5 text-sm text-muted">
            <li>{fullAddress}</li>
            <li><a href={site.phoneHref} className="hover:text-ink">{site.phone}</a></li>
            <li><a href={`mailto:${site.email}`} className="hover:text-ink">{site.email}</a></li>
          </ul>
        </address>
      </div>
      <div className="border-t border-line">
        <div className="container-x flex flex-col gap-2 py-6 text-xs text-muted sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} Mai Organizasyon. Tüm hakları saklıdır.</p>
          <p>Tasarım & geliştirme <a href="https://denizaksu.dev" target="_blank" rel="noopener" className="hover:text-ink">Deniz Aksu</a></p>
        </div>
      </div>
    </footer>
  )
}
