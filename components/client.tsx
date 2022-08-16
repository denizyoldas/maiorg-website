import React from 'react'
import shortid from 'shortid'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import cx from 'classnames'

const testimonials = [
  {
    id: shortid.generate(),
    name: 'Emre & Selin',
    quote: `Herhangi bir belanın affını takip etmeye asla daha az
    eğilimli olmamalıdır. bazılarına göre, borçlarının
    şehvetinden dolayı zevk tarafından bozulanları sevindirir.
    en zahmetli görevleri reddetmeyi seçmek, bir acı acıdan
    kurtulmak ya da bir şeyi inkar etmek. Bazıları,
    ihtiyaçlar.`,
    avatar: 'https://denizaksu.dev/images/avatar.jpg'
  },
  {
    id: shortid.generate(),
    name: 'Emre & Selin',
    quote: `Herhangi bir belanın affını takip etmeye asla daha az
    eğilimli olmamalıdır. bazılarına göre, borçlarının
    şehvetinden dolayı zevk tarafından bozulanları sevindirir.
    en zahmetli görevleri reddetmeyi seçmek, bir acı acıdan
    kurtulmak ya da bir şeyi inkar etmek. Bazıları,
    ihtiyaçlar.`,
    avatar: 'https://denizaksu.dev/images/avatar.jpg'
  },
  {
    id: shortid.generate(),
    name: 'Emre & Selin',
    quote: `Herhangi bir belanın affını takip etmeye asla daha az
    eğilimli olmamalıdır. bazılarına göre, borçlarının
    şehvetinden dolayı zevk tarafından bozulanları sevindirir.
    en zahmetli görevleri reddetmeyi seçmek, bir acı acıdan
    kurtulmak ya da bir şeyi inkar etmek. Bazıları,
    ihtiyaçlar.`,
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
        <Swiper slidesPerView={1} onSlideChange={slideChangeHandler}>
          {testimonials.map((item, index) => (
            <SwiperSlide key={item.id}>
              <div className="client_box">
                <div className="img-box">
                  <img src="images/client.jpg" alt="" />
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
            data-target="#carouselExample2Indicators"
            data-slide-to="0"
            className={cx({ active: index === activeIndex })}
            key={item}
          ></li>
        ))}
      </ol>
    </section>
  )
}

export default Client
