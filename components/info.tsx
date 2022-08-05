import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'

function Info() {
  return (
    <section className="info_section ">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="info_contact_container ">
              <h5>İletişim için</h5>
              <div className="info_contact">
                <div className="contact_link_box">
                  <a href="">
                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                    <span>Adres</span>
                  </a>
                  <a href="">
                    <i className="fa fa-phone" aria-hidden="true"></i>
                    <span>Telefon</span>
                  </a>
                  <a href="">
                    <i className="fa fa-envelope" aria-hidden="true"></i>
                    <span>mai@organizasyon.com</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="info_social_container">
              <h5>Follow Us</h5>
              <div className="info_social">
                <a href="">
                  <FaFacebookF />
                </a>
                <a href="">
                  <FaTwitter />
                </a>
                <a href="">
                  <FaInstagram />
                </a>
                {/* <a href="">
                  <i className="fa fa-vimeo" aria-hidden="true"></i>
                </a>
                <a href="">
                  <i className="fa fa-linkedin" aria-hidden="true"></i>
                </a> */}
                <a href="">
                  <FaYoutube />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Info
