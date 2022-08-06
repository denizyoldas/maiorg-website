import React from 'react'
import shortid from 'shortid'

const testimonials = [
  {
    name: shortid.generate(),
    quote: 'I am a full-stack developer and I love to create things.',
    avatar: 'https://denizaksu.dev/images/avatar.jpg'
  },
  {
    name: shortid.generate(),
    quote: 'I am a full-stack developer and I love to create things.',
    avatar: 'https://denizaksu.dev/images/avatar.jpg'
  },
  {
    name: shortid.generate(),
    quote: 'I am a full-stack developer and I love to create things.',
    avatar: 'https://denizaksu.dev/images/avatar.jpg'
  }
]

// testimonials count array
const count = Array.from({ length: testimonials.length }, (_, i) => i)

function Client() {
  return (
    <section className="client_section layout_padding-bottom">
      <div className="container">
        <div className="heading_container heading_center">
          <h2>Referanslarımız</h2>
        </div>
        <div
          id="carouselExample2Indicators"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            {testimonials.map((item, index) => (
              <div className="carousel-item active" key={item.name}>
                <div className="client_box">
                  <div className="img-box">
                    <img src="images/client.jpg" alt="" />
                  </div>
                  <div className="detail-box">
                    <h5>Emre & Selin</h5>
                    <p>
                      Herhangi bir belanın affını takip etmeye asla daha az
                      eğilimli olmamalıdır. bazılarına göre, borçlarının
                      şehvetinden dolayı zevk tarafından bozulanları sevindirir.
                      en zahmetli görevleri reddetmeyi seçmek, bir acı acıdan
                      kurtulmak ya da bir şeyi inkar etmek. Bazıları,
                      ihtiyaçlar.
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <ol className="carousel-indicators">
            {count.map((item, index) => (
              <li
                data-target="#carouselExample2Indicators"
                data-slide-to="0"
                className="active"
                key={item}
              ></li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}

export default Client
