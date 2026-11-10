import type { Metadata, Viewport } from 'next'
import { Albert_Sans, Cormorant_Garamond, Great_Vibes } from 'next/font/google'
import { GoogleAnalytics } from '@next/third-parties/google'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { WhatsAppFab } from '@/components/whatsapp-fab'
import { JsonLd } from '@/components/json-ld'
import { business } from '@/lib/schema'
import { site } from '@/lib/site'
import './globals.css'

const serif = Cormorant_Garamond({ subsets: ['latin', 'latin-ext'], weight: ['300', '400', '500'], style: ['normal', 'italic'], variable: '--font-cormorant' })
const sans = Albert_Sans({ subsets: ['latin', 'latin-ext'], variable: '--font-albert' })
const script = Great_Vibes({ subsets: ['latin', 'latin-ext'], weight: '400', variable: '--font-vibes' })

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: 'Mai Organizasyon | Tuzla Düğün, Nişan ve Özel Gün Organizasyonu',
    template: '%s | Mai Organizasyon'
  },
  description: site.description,
  applicationName: site.name,
  keywords: ['Tuzla düğün organizasyonu', 'nişan organizasyonu', 'kına gecesi organizasyonu', 'sünnet organizasyonu', 'baby shower', 'düğün süsleme', 'İstanbul Anadolu Yakası organizasyon'],
  openGraph: { type: 'website', locale: 'tr_TR', siteName: site.name },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true, googleBot: { 'max-image-preview': 'large' } },
  formatDetection: { telephone: false }
}

export const viewport: Viewport = { themeColor: '#faf7f2' }

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" className={`${serif.variable} ${sans.variable} ${script.variable}`}>
      <body>
        <a href="#icerik" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[60] focus:bg-ink focus:px-4 focus:py-2 focus:text-ivory">
          İçeriğe geç
        </a>
        <Header />
        <main id="icerik">{children}</main>
        <Footer />
        <WhatsAppFab />
        <JsonLd data={business} />
      </body>
      {process.env.NODE_ENV === 'production' && <GoogleAnalytics gaId={site.ga} />}
    </html>
  )
}
