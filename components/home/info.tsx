import { meta } from '../../site.config'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { AiFillPhone } from 'react-icons/ai'
import { BsFillEnvelopeFill } from 'react-icons/bs'

function Info() {
  return (
    <section className="info_section ">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="info_contact_container ">
              <h5>İletişim için</h5>
              <div className="info_contact">
                <div className="contact_link_box">
                  <a href="#">
                    <FaMapMarkerAlt />
                    <p>{meta.contact.address}</p>
                  </a>
                  <a href={`tel:${meta.contact.phone}`}>
                    <AiFillPhone />
                    <p>{meta.contact.phone}</p>
                  </a>
                  <a href={`mailto:${meta.contact.email}`}>
                    <BsFillEnvelopeFill />
                    <p>{meta.contact.email}</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Info
