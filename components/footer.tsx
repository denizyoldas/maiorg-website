import React from 'react'

function Footer() {
  return (
    <section className="footer_section">
      <div className="container">
        <p>
          &copy; <span id="displayYear"></span> All Rights Reserved By{' '}
          <a href="https://denizaksu.dev/">Deniz Aksu</a>
        </p>
      </div>
    </section>
  )
}

export default Footer
