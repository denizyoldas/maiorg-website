import { meta } from '../site.config'
import { FaInstagram, FaFacebookF, FaYoutube } from 'react-icons/fa'
import Link from 'next/link'

const NAV = [
  { label: 'Anasayfa', href: '#' },
  { label: 'Hakkımızda', href: '#about' },
  { label: 'Hizmetlerimiz', href: '#services' },
  { label: 'Galeri', href: '#gallery' },
  { label: 'İletişim', href: '#contact' }
]

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-footer text-white relative overflow-hidden">
      {/* Subtle gradient overlays */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full bg-primary/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] rounded-full bg-gold/5 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-8 sm:px-12 lg:px-20">
        {/* Top */}
        <div className="py-16 grid grid-cols-1 sm:grid-cols-3 gap-12 border-b border-white/8">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <span className="font-script text-3xl text-primary leading-none block">Mai</span>
              <span className="text-[10px] font-semibold tracking-[0.3em] uppercase text-white/40">Organizasyon</span>
            </div>
            <p className="text-sm text-white/45 leading-relaxed font-sans max-w-xs">
              Hayatınızın en özel anlarını sizinle birlikte planlamak ve yaşatmak için buradayız.
            </p>
            {/* Social */}
            <div className="flex gap-3 mt-6">
              {[
                { Icon: FaInstagram, href: `https://instagram.com/${meta.social.instagram}`, label: 'Instagram' },
                { Icon: FaFacebookF, href: `https://facebook.com/${meta.social.facebook}`, label: 'Facebook' },
                { Icon: FaYoutube, href: `https://youtube.com/${meta.social.youtube}`, label: 'YouTube' }
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="nofollow noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:border-primary hover:text-primary hover:bg-primary/10 transition-all duration-300"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-[10px] font-semibold tracking-[0.3em] uppercase text-white/30 mb-5 font-sans">Sayfalar</h3>
            <ul className="space-y-3">
              {NAV.map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className="text-sm text-white/50 hover:text-white transition-colors font-sans">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[10px] font-semibold tracking-[0.3em] uppercase text-white/30 mb-5 font-sans">İletişim</h3>
            <ul className="space-y-3">
              <li><a href={`tel:${meta.contact.phone}`} className="text-sm text-white/50 hover:text-white transition-colors font-sans">{meta.contact.phone}</a></li>
              <li><a href={`mailto:${meta.contact.email}`} className="text-sm text-white/50 hover:text-white transition-colors font-sans">{meta.contact.email}</a></li>
              <li className="text-sm text-white/35 leading-relaxed font-sans">{meta.contact.address}</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="py-7 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30 font-sans">
            &copy; {year} Mai Organizasyon. Tüm hakları saklıdır. —{' '}
            <a href="https://denizaksu.dev/" className="hover:text-white/60 transition-colors underline underline-offset-2">
              Deniz Aksu
            </a>
          </p>
          <div className="flex items-center gap-1.5 text-gold/60">
            <span className="text-xs font-sans tracking-wider">Made with</span>
            <span className="text-gold text-sm">✦</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
