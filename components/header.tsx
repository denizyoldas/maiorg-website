'use client'

import Link from 'next/link'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import { useState } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'

const MENU = [
  { label: 'Anasayfa', href: '#' },
  { label: 'Hakkımızda', href: '#about' },
  { label: 'Hizmetlerimiz', href: '#services' },
  { label: 'Galeri', href: '#gallery' },
  { label: 'İletişim', href: '#contact' }
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', v => setScrolled(v > 60))

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`fixed top-0 z-50 w-full transition-all duration-500 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm py-3'
            : 'bg-transparent py-6'
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 sm:px-12 lg:px-20">
          <Link href="/">
            <motion.div whileHover={{ scale: 1.02 }} className="cursor-pointer flex flex-col leading-none">
              <span className="font-script text-2xl text-primary leading-none">Mai</span>
              <span className={`text-[10px] font-semibold tracking-[0.3em] uppercase transition-colors duration-300 ${scrolled ? 'text-warm-dark' : 'text-warm-dark/80'}`}>
                Organizasyon
              </span>
            </motion.div>
          </Link>

          <ul className="hidden gap-8 sm:flex">
            {MENU.map(({ label, href }) => (
              <li key={label}>
                <Link
                  href={href}
                  className="relative text-sm font-medium text-warm-dark transition-colors hover:text-primary group"
                >
                  {label}
                  <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-primary transition-all duration-300 group-hover:w-full" />
                </Link>
              </li>
            ))}
          </ul>

          <a
            href="tel:+905343489348"
            className="hidden sm:flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-5 py-2 text-xs font-semibold tracking-wide text-primary transition-all duration-300 hover:bg-primary hover:text-white hover:border-primary"
          >
            Bize Ulaşın
          </a>

          <button
            className="sm:hidden text-warm-dark p-1"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menü aç/kapat"
          >
            {mobileOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile menu */}
      <motion.div
        initial={false}
        animate={mobileOpen ? { opacity: 1, y: 0, pointerEvents: 'auto' as const } : { opacity: 0, y: -12, pointerEvents: 'none' as const }}
        transition={{ duration: 0.25 }}
        className="fixed top-0 left-0 right-0 z-40 bg-white/98 backdrop-blur-md pt-20 pb-8 px-8 shadow-lg sm:hidden"
      >
        <ul className="flex flex-col gap-5">
          {MENU.map(({ label, href }) => (
            <li key={label}>
              <Link href={href} className="text-lg font-serif text-warm-dark hover:text-primary transition-colors" onClick={() => setMobileOpen(false)}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
        <a href="tel:+905343489348" className="mt-6 btn-primary w-full justify-center" onClick={() => setMobileOpen(false)}>
          Bize Ulaşın
        </a>
      </motion.div>
    </>
  )
}
