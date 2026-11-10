# Mai Organizasyon — Proje Özeti

Tuzla / İstanbul Anadolu Yakası'nda düğün, nişan, kına, sünnet, baby shower ve kurumsal organizasyon yapan Mai Organizasyon'un tanıtım sitesi.

## Sayfalar

- `/` — hero, hizmet listesi, galeri şeridi, süreç, yorumlar, SSS, CTA
- `/hizmetler` ve `/hizmetler/[slug]` — 9 hizmet sayfası (SSG), her biri kendi SSS ve schema'sıyla
- `/galeri` — kategori filtreli galeri + `<dialog>` lightbox
- `/hakkimizda`, `/iletisim` (WhatsApp formu + harita)
- Eski `/services` ve `/gallery` linkleri 301 ile yeni adreslere yönlenir

## Tasarım

Editoryal lüks: fildişi/şampanya/altın palet (`app/globals.css` içinde `@theme`), Cormorant Garamond başlıklar, Albert Sans metin, Great Vibes vurgu. Animasyonlar saf CSS (giriş + scroll-driven reveal), `prefers-reduced-motion`'a saygılı.

## Bağımlılıklar

Yalnızca `next`, `react`, `react-dom`, `@next/third-parties`. Client JS: header mobil menü, galeri, iletişim formu.

## Notlar

- Galerideki `g1–g5`, `a1`, `a2`, `client`, `thumbnail` görselleri eski siteden gelen stok fotoğraflar; `public/images/gallery/` altındakiler Mai'nin kendi çalışmaları.
