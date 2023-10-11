'use client'

import { ToastContainer, toast } from 'react-toastify'
import { meta } from '../../site.config'
import Input from '../UI/input'

function Contact() {
  const submitHandler = (event: any) => {
    event.preventDefault()

    const payload = {
      name: event.target.name.value,
      phone: event.target.phone.value,
      email: event.target.email.value,
      message: event.target.message.value
    }

    toast.success(
      'Başarılı bir şekilde gönderildi. En kısa süre içerisinde size geri dönüş yapılacaktır.'
    )
  }

  return (
    <section id="contact" className="py-12 px-8 sm:p-24">
      <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-10">
        <div>
          <form
            action=""
            onSubmit={submitHandler}
            className="grid grid-cols-1 gap-4"
          >
            <Input type="text" placeholder="Ad Soyad" name="name" />
            <Input type="text" placeholder="Telefon" name="phone" />
            <Input type="email" placeholder="Email" name="email" />
            <Input type="textarea" placeholder="Mesajınız" name="message" />
            <div className="link text-center">
              <button type="submit">Gönder</button>
            </div>
          </form>
        </div>
        <div className="map">
          <iframe
            src={meta.gmap}
            width="600"
            height="450"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <ToastContainer />
    </section>
  )
}

export default Contact
