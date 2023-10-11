import Link from 'next/link'

const MENU = {
  Anasayfa: '#',
  Hakkımızda: '#about',
  Hizmetlerimiz: '#services',
  Galeri: '#gallery',
  referanslar: '#references',
  İletişim: '#contact'
}

function Header() {
  // const { pathname } = useRouter()

  return (
    <header className="absolute top-0 z-50 w-full p-10 backdrop-blur">
      <nav className="relative flex items-center justify-center sm:justify-between">
        <Link href="/">
          <h1 className="text-2xl font-bold text-rose-600">Mai Organizasyon</h1>
        </Link>
        <ul className="hidden gap-4 sm:flex">
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
