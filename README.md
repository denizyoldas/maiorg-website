# Mai Organizasyon

Tuzla merkezli düğün ve özel gün organizasyon firması Mai Organizasyon'un web sitesi — https://www.maiorganizasyon.com

Next.js 16 (App Router, tamamen statik) · React 19 · Tailwind CSS 4

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # standalone çıktı (Dockerfile ile çalışır)
npm run lint
```

## İçerik nerede?

| Dosya | İçerik |
| --- | --- |
| `lib/site.ts` | İletişim bilgileri, menü, yorumlar, süreç adımları, SSS |
| `lib/services.ts` | Hizmetler (her biri `/hizmetler/<slug>` sayfası olur) |
| `lib/images.ts` | Galeri fotoğrafları ve alt metinleri |
| `lib/schema.ts` | JSON-LD (EventPlanner, Breadcrumb, FAQ) |

Yeni hizmet eklemek için `lib/services.ts`'e bir kayıt ekleyin; sayfa, sitemap, footer linki ve iletişim formu seçeneği otomatik oluşur.

## SEO

- Sayfa başına title/description/canonical/OpenGraph
- `sitemap.xml`, `robots.txt`, `manifest.webmanifest`, OG görseli (`app/opengraph-image.jpg`)
- Structured data: LocalBusiness/EventPlanner, Service, BreadcrumbList, FAQPage, ImageGallery
- `next/image` (AVIF/WebP, blur placeholder), `next/font` (self-hosted, latin-ext)
- Google Analytics yalnızca production'da (`@next/third-parties`)

İletişim formu sunucuya veri göndermez; bilgileri hazır bir WhatsApp mesajı olarak açar.
