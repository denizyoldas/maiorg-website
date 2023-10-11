'use client'

import shortid from 'shortid'
import { Swiper, SwiperSlide } from 'swiper/react'
import Title from '../UI/title'
import { Autoplay } from 'swiper'

const testimonials = [
  {
    id: shortid.generate(),
    name: 'Emre & Selin',
    quote: `Her anımızda yanımızda olan Mai Organizasyona çok teşekkür ederiz.
    Bütün isteklermizi eksiksik şekilde yerine getirmek için ellerinden gelen çabayı gösterdiler.
    Bütün çalışmalarımızın başarılı olmasını diliyoruz.`,
    avatar: 'https://denizaksu.dev/images/avatar.jpg'
  },
  {
    id: shortid.generate(),
    name: 'Mustafa & Gülşen',
    quote: `
    Düğünümüzde yanımızda olan Mai Organizasyona çok teşekkür ederiz.
    `,
    avatar: 'https://denizaksu.dev/images/avatar.jpg'
  },
  {
    id: shortid.generate(),
    name: 'Tunç',
    quote: `Oğlumuzun sünnetiyle birlikte, tanıştığımız Mai organizasyon'a çok teşekkür ederiz.
    İstediğimiz herşeyi eksiksik yerine getirdiler. Başarılarınızı diliyoruz.`,
    avatar: 'https://denizaksu.dev/images/avatar.jpg'
  }
]

function Client() {
  return (
    <section className="mx-auto px-8 py-24 sm:p-24">
      <Title title="Müşteriler ne diyor?" type="center" />
      <div className="pt-10">
        <Swiper
          slidesPerView="auto"
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 30
            },
            640: {
              slidesPerView: 3,
              spaceBetween: 10
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20
            }
          }}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false
          }}
          centeredSlides={true}
          modules={[Autoplay]}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={item.id} className="h-full">
              <div className="min-h-36 relative flex w-full flex-col items-center gap-4 rounded-lg border-2 px-4 py-6 text-center">
                <h5>{item.name}</h5>
                <p>{item.quote}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default Client
