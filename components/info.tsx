import React from 'react'
import { meta } from '../site.config'
import {
  FaFacebookF,
  FaInstagram,
  FaMapMarkerAlt,
  FaTwitter,
  FaYoutube
} from 'react-icons/fa'
import { AiFillPhone } from 'react-icons/ai'
import { BsFillEnvelopeFill } from 'react-icons/bs'

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
                  <a href="#">
                    {/* <i className="fa fa-map-marker" aria-hidden="true"></i> */}
                    <FaMapMarkerAlt />
                    {/* <span>{meta.contact.address}</span> */}
                    <p>{meta.contact.address}</p>
                  </a>
                  <a href={`tel:${meta.contact.phone}`}>
                    {/* <i className="fa fa-phone" aria-hidden="true"></i> */}
                    <AiFillPhone />
                    {/* <span>{meta.contact.phone}</span> */}
                    <p>{meta.contact.phone}</p>
                  </a>
                  <a href={`mailto:${meta.contact.email}`}>
                    {/* <i className="fa fa-envelope" aria-hidden="true"></i> */}
                    <BsFillEnvelopeFill />
                    {/* <span>{meta.contact.email}</span> */}
                    <p>{meta.contact.email}</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="info_social_container">
              <h5>Bizi Takip Edin</h5>
              <div className="info_social">
                <a
                  href={'https://facebook.com/' + meta.social.facebook}
                  rel="nofollow"
                >
                  <FaFacebookF />
                </a>
                <a
                  href={'https://twitter.com/' + meta.social.twitter}
                  rel="nofollow"
                >
                  <FaTwitter />
                </a>
                <a
                  href={'https://instagram.com/' + meta.social.instagram}
                  rel="nofollow"
                >
                  <FaInstagram />
                </a>
                {/* <a href="">
                  <i className="fa fa-vimeo" aria-hidden="true"></i>
                </a>
                <a href="">
                  <i className="fa fa-linkedin" aria-hidden="true"></i>
                </a> */}
                <a
                  href={'https://youtube.com/' + meta.social.youtube}
                  rel="nofollow"
                >
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
