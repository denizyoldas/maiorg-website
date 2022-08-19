import React from 'react'
import shortid from 'shortid'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import cx from 'classnames'
import { Navigation } from 'swiper'

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

// testimonials count array
const count = Array.from({ length: testimonials.length }, (_, i) => i)

function Client() {
  const [activeIndex, setActiveIndex] = React.useState(0)

  const slideChangeHandler = (swiper: any) => {
    setActiveIndex(swiper.activeIndex)
  }

  return (
    <section className="client_section layout_padding-bottom">
      <div className="container">
        <div className="heading_container heading_center">
          <h2>Referanslarımız</h2>
        </div>
        <Swiper
          slidesPerView={1}
          onSlideChange={slideChangeHandler}
          navigation
          modules={[Navigation]}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={item.id}>
              <div className="client_box">
                <div className="img-box">
                  <img src="images/client.jpg" alt="evli çift" />
                </div>
                <div className="detail-box">
                  <h5>{item.name}</h5>
                  <p>{item.quote}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <ol className="carousel-indicators">
        {count.map((item, index) => (
          <li
            style={{ marginRight: 5 }}
            className={cx({ active: index === activeIndex })}
            key={item}
          ></li>
        ))}
      </ol>
    </section>
  )
}

export default Client
