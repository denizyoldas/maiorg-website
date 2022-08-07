import React from 'react'
import { Carousel } from 'react-bootstrap'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import shortid from 'shortid'

const slides = [
  {
    id: shortid.generate(),
    title: 'Sizin için <br /> en uygun hizmet',
    description:
      'Explicabo esse amet tempora quibusdam laudantium, laborum eaque magnam fugiat hic? Esse dicta aliquid error repudiandae earum suscipit fugiat molestias, veniam, vel architecto veritatis delectus repellat modi impedit sequi.',
    button: 'Hizmetlermiz',
    buttonLink: '#services'
  },
  {
    id: shortid.generate(),
    title: 'detaylı bilgi için <br /> İletişime geçebilirsiniz',
    description:
      'Explicabo esse amet tempora quibusdam laudantium, laborum eaque magnam fugiat hic? Esse dicta aliquid error repudiandae earum suscipit fugiat molestias, veniam, vel architecto veritatis delectus repellat modi impedit sequi.',
    button: 'İletişim',
    buttonLink: '#contact'
  }
]

function Slider() {
  return (
    <section className="slider_section">
      <Carousel controls={true} indicators={false} interval={2000}>
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
      {/* <div className="carousel_btn-box">
        <a className="carousel-control-prev" role="button" data-slide="prev">
          <AiOutlineArrowLeft />
        </a>
        <a className="carousel-control-next" role="button" data-slide="next">
          <AiOutlineArrowRight />
        </a>
      </div> */}
    </section>
  )
}

export default Slider
