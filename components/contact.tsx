import React from 'react'
import { meta } from '../site.config'

function Contact() {
  return (
    <section id="contact" className="contact_section layout_padding">
      <div className="container">
        <div className="heading_container">
          <h2>İletişim</h2>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="form_container contact-form">
              <form action="">
                <div>
                  <input type="text" placeholder="Ad Soyad" />
                </div>
                <div>
                  <input type="text" placeholder="Telefon" />
                </div>
                <div>
                  <input type="email" placeholder="Email" />
                </div>
                <div>
                  <input
                    type="text"
                    className="message-box"
                    placeholder="Mesajınız"
                  />
                </div>
                <div className="btn_box">
                  <button type="button">Gönder</button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-md-6">
            <div className="map_container">
              <div className="map">
                {/* <div id="googleMap"></div> */}
                <iframe
                  src={meta.gmap}
                  width="600"
                  height="450"
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
