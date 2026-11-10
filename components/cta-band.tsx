import { site, waLink } from '@/lib/site'
import { PhoneIcon, WhatsAppIcon } from './icons'

export function CtaBand({ title = 'Hayalinizdeki günü birlikte planlayalım.' }: { title?: string }) {
  return (
    <section className="bg-ink text-ivory">
      <div className="container-x flex flex-col gap-10 py-20 sm:py-28 lg:flex-row lg:items-end lg:justify-between">
        <div className="reveal max-w-2xl">
          <p className="eyebrow text-champagne!">Teklif alın</p>
          <h2 className="display mt-6 text-5xl sm:text-6xl lg:text-7xl">{title}</h2>
        </div>
        <div className="reveal flex flex-col gap-3 sm:flex-row">
          <a href={waLink('Merhaba, organizasyon için teklif almak istiyorum.')} target="_blank" rel="noopener" className="btn bg-ivory text-ink hover:bg-champagne">
            <WhatsAppIcon /> WhatsApp’tan yazın
          </a>
          <a href={site.phoneHref} className="btn border border-ivory/30 hover:border-ivory">
            <PhoneIcon /> {site.phone}
          </a>
        </div>
      </div>
    </section>
  )
}
