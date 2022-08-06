import React from 'react'

function Header() {
  return (
    <header className="header_section">
      <div className="container">
        <nav className="navbar navbar-expand-lg custom_nav-container ">
          <a className="navbar-brand" href="index.html">
            {/* <span>Mai Organizasyon</span> */}
            <img src="images/logo.png" style={{ width: '200px' }} alt="" />
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className=""></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="#slider">
                  Anasayfa
                </a>
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
