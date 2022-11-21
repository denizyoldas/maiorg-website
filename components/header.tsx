import Link from 'next/link'
import { useRouter } from 'next/router'
import cx from 'classnames'

const MENU = {
  Anasayfa: '/',
  Hakkımızda: '/about',
  Hizmetlerimiz: '/services',
  Galeri: '/gallery',
  Blog: '/blog',
  İletişim: '/contact'
}

function Header() {
  const { pathname } = useRouter()

  return (
    <header className="top-0 z-50 w-full bg-white bg-opacity-20 p-10 shadow-sm backdrop-blur-md">
      <nav className="relative flex items-center justify-center sm:justify-between">
        <a href="#">
          <h1 className="text-2xl font-bold text-rose-600">Mai Organizasyon</h1>
        </a>
        <ul className="hidden gap-4 sm:flex">
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
      </nav>
    </header>
  )
}

export default Header
