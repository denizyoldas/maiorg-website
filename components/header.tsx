import Link from 'next/link'
import { useState } from 'react'

const MENU = {
  Anasayfa: '/',
  Hakkımızda: '/about',
  Hizmetlerimiz: '/services',
  Galeri: '/gallery',
  İletişim: '/contact'
}

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="w-full backdrop-blur-md shadow-sm bg-white bg-opacity-20 top-0 z-50 p-10">
      <nav className="flex items-center justify-center sm:justify-between">
        <a href="#">
          <h1 className="text-2xl font-bold text-rose-600">Mai Organizasyon</h1>
        </a>
        <ul className="gap-4 hidden sm:flex">
          {Object.entries(MENU).map(([title, href]) => (
            <li key={title} className="hover:underline">
              <Link href={href}>{title}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header

{
  /* <button
            className="navbar-toggler"
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className=""></span>
          </button> */
}
