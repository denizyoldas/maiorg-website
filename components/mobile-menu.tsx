import { use, useEffect, useState } from 'react'
import cx from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'

const MENU = {
  Anasayfa: '/',
  Hakkımızda: '/about',
  Hizmetlerimiz: '/services',
  Galeri: '/gallery',
  Blog: '/blog',
  İletişim: '/contact'
}

const MobileMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { pathname } = useRouter()

  useEffect(() => {
    console.log('pathname', pathname)
  }, [pathname])

  return (
    <>
      <button
        className="absolute top-11 right-10 z-[51] sm:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
          />
        </svg>
      </button>
      <ul
        className={cx(
          'absolute top-0 left-0 z-50 flex h-screen w-full transform flex-col items-center justify-center gap-4 bg-white bg-opacity-90 text-2xl font-bold transition duration-300 ease-in-out',
          isMenuOpen ? 'translate-y-0' : '-translate-y-full'
        )}
      >
        {Object.entries(MENU).map(([title, href]) => (
          <li
            key={title}
            className={cx(
              'hover:underline',
              pathname === href && 'text-rose-600'
            )}
          >
            <Link href={href}>{title}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export default MobileMenu
