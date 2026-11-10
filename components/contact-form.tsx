'use client'

import { services } from '@/lib/services'
import { waLink } from '@/lib/site'

const field = 'w-full border-0 border-b border-ink/20 bg-transparent px-0 py-3 outline-none transition placeholder:text-muted/60 focus:border-ink'

export function ContactForm() {
  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const f = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>
    const date = f.date ? new Date(f.date).toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' }) : 'Belirlenmedi'
    const text = [
      'Merhaba, web siteniz üzerinden ulaşıyorum.',
      `Ad Soyad: ${f.name}`,
      `Telefon: ${f.phone}`,
      `Etkinlik: ${f.event}`,
      `Tarih: ${date}`,
      f.guests && `Kişi sayısı: ${f.guests}`,
      f.message && `Not: ${f.message}`
    ].filter(Boolean).join('\n')
    window.open(waLink(text), '_blank', 'noopener')
  }

  return (
    <form onSubmit={submit} className="grid gap-8 sm:grid-cols-2">
      <label className="block">
        <span className="eyebrow">Ad Soyad</span>
        <input name="name" required autoComplete="name" className={field} placeholder="Adınız" />
      </label>
      <label className="block">
        <span className="eyebrow">Telefon</span>
        <input name="phone" type="tel" required autoComplete="tel" className={field} placeholder="05xx xxx xx xx" />
      </label>
      <label className="block">
        <span className="eyebrow">Etkinlik türü</span>
        <select name="event" required className={field} defaultValue="">
          <option value="" disabled>Seçiniz</option>
          {services.map(s => <option key={s.slug}>{s.title}</option>)}
          <option>Diğer</option>
        </select>
      </label>
      <label className="block">
        <span className="eyebrow">Tarih</span>
        <input name="date" type="date" className={field} />
      </label>
      <label className="block sm:col-span-2">
        <span className="eyebrow">Tahmini kişi sayısı</span>
        <input name="guests" type="number" min={1} inputMode="numeric" className={field} placeholder="ör. 150" />
      </label>
      <label className="block sm:col-span-2">
        <span className="eyebrow">Mesajınız</span>
        <textarea name="message" rows={4} className={`${field} resize-none`} placeholder="Hayalinizdeki organizasyonu kısaca anlatın" />
      </label>
      <div className="sm:col-span-2">
        <button type="submit" className="btn-dark">WhatsApp ile gönder</button>
        <p className="mt-3 text-xs text-muted">Gönder’e bastığınızda bilgileriniz hazır bir WhatsApp mesajı olarak açılır.</p>
      </div>
    </form>
  )
}
