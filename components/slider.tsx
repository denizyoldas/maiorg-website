import React from 'react'
import { Carousel } from 'react-bootstrap'
import shortid from 'shortid'

const slides = [
  {
    id: shortid.generate(),
    title: 'Sizin için <br /> en uygun hizmet',
    description:
      'Fiyat ve kaliteyi en iyi şekilde göstermek için, sizin için en uygun hizmet',
    button: 'Hizmetlermiz',
    buttonLink: '#services'
  },
  {
    id: shortid.generate(),
    title: 'Düğün hizmetleri',
    description: `Düğünlerinizi yapacağınız yerlerin belirlenmesinin ardından
    sizlere istekleriniz doğrultusunda paket içeriklerini baz
    alarak süsleme ve DJ hizmetleri ile birlikte düğün planınızı
    hazırlıyoruz.`,
    button: 'İletişim',
    buttonLink: '#contact'
  }
]

function Slider() {
  return (
    <section className="slider_section">
      <Carousel controls={true} indicators={false} interval={3000}>
        {slides.map((item, index) => (
          <Carousel.Item key={item.id}>
            <div className="container ">
              <div className="row">
                <div className="col-lg-8 col-xl-6 mx-auto ">
                  <div className="detail-box">
                    <h1 dangerouslySetInnerHTML={{ __html: item.title }}></h1>
                    <p>{item.description}</p>
                    <div className="btn-box">
                      <a href={item.buttonLink} className="btn1">
                        {item.button}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  )
}

export default Slider
