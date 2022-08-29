import Link from 'next/link'
import { useState } from 'react'
import cx from 'classnames'

interface Props {
  style?: object
}

function Header({ style }: Props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="header_section" style={style}>
      <div className="container">
        <nav className="navbar navbar-expand-lg custom_nav-container ">
          <a className="navbar-brand" href="index.html">
            <span>Mai Organizasyon</span>
            {/* <img src="images/logo.webp" style={{ width: '200px' }} alt="" /> */}
          </a>

          <button
            className="navbar-toggler"
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className=""></span>
          </button>

          <div
            className={cx('collapse navbar-collapse', { show: isMenuOpen })}
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link className="nav-link" href="/">
                  <a className="nav-link">Anasayfa</a>
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  Hakkımızda
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#service">
                  Hizmetlerimiz
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#gallery">
                  Galeri
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  İletişim
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header
