'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef } from 'react'
import { nav, waLink } from '@/lib/site'
import logo from '@/public/images/logo.webp'

export function Header() {
  const path = usePathname()
  const menu = useRef<HTMLDetailsElement>(null)
  useEffect(() => {
    if (menu.current) menu.current.open = false
  }, [path])
  const active = (href: string) => (href === '/' ? path === '/' : path.startsWith(href))

  return (
    <header className="sticky top-0 z-50 border-b border-line/60 bg-ivory/85 backdrop-blur-md">
      <div className="container-x flex h-18 items-center justify-between gap-6">
        <Link href="/" aria-label="Mai Organizasyon anasayfa" className="shrink-0">
          <Image src={logo} alt="Mai Organizasyon" priority className="h-14 w-auto sm:h-16" />
        </Link>

        <nav aria-label="Ana menü" className="hidden items-center gap-8 md:flex">
          {nav.map(n => (
            <Link key={n.href} href={n.href} aria-current={active(n.href) ? 'page' : undefined} className="relative text-sm tracking-wide text-muted transition hover:text-ink aria-[current=page]:text-ink aria-[current=page]:after:absolute aria-[current=page]:after:inset-x-0 aria-[current=page]:after:-bottom-1.5 aria-[current=page]:after:h-px aria-[current=page]:after:bg-gold">
              {n.label}
            </Link>
          ))}
        </nav>

        <a href={waLink('Merhaba, organizasyon için teklif almak istiyorum.')} target="_blank" rel="noopener" className="btn-dark hidden py-2.5! md:inline-flex">
          Teklif Al
        </a>

        <details ref={menu} className="group md:hidden">
          <summary className="grid size-11 cursor-pointer list-none place-items-center" aria-label="Menüyü aç">
            <span className="relative block h-3 w-6 before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-ink before:transition after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-ink after:transition group-open:before:top-1.5 group-open:before:rotate-45 group-open:after:bottom-1.5 group-open:after:-rotate-45" />
          </summary>
          <nav aria-label="Mobil menü" className="fixed inset-x-0 top-18 h-[calc(100dvh-4.5rem)] bg-ivory px-4 pt-8">
            <ul className="flex flex-col">
              {nav.map(n => (
                <li key={n.href} className="border-b border-line">
                  <Link href={n.href} aria-current={active(n.href) ? 'page' : undefined} className="block py-5 font-serif text-4xl aria-[current=page]:text-gold-deep">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
            <a href={waLink('Merhaba, organizasyon için teklif almak istiyorum.')} target="_blank" rel="noopener" className="btn-dark mt-8 w-full">
              WhatsApp’tan Teklif Al
            </a>
          </nav>
        </details>
      </div>
    </header>
  )
}
