import { meta } from '../../site.config'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { AiFillPhone } from 'react-icons/ai'
import { BsFillEnvelopeFill } from 'react-icons/bs'

function Info() {
  return (
    <section id="info" className="pt-12 sm:pt-24 sm:px-24">
      <div className="grid grid-cols-1 sm:grid-cols-3 text-center sm:text-left">
        <div className="centered flex-col">
          <h3 className="flex items-center gap-2 text-2xl font-bold mb-4">
            <FaMapMarkerAlt />
            Adres
          </h3>
          <p>{meta.contact.address}</p>
        </div>
        <div className="centered flex-col">
          <h3 className="flex items-center gap-2 text-2xl font-bold mb-4">
            <AiFillPhone /> Telefon
          </h3>
          <a href={`tel:${meta.contact.phone}`}>
            <p>{meta.contact.phone}</p>
          </a>
        </div>
        <div className="centered flex-col">
          <h3 className="flex items-center gap-2 text-2xl font-bold mb-4">
            <BsFillEnvelopeFill />
            Mail
          </h3>
          <a href={`mailto:${meta.contact.email}`}>
            <p>{meta.contact.email}</p>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Info
