import React from 'react'
import { BsImage } from 'react-icons/bs'
import shortid from 'shortid'

const LIST = [
  {
    id: shortid.generate(),
    title: 'Title 1',
    image: 'images/g1.jpg'
  },
  {
    id: shortid.generate(),
    title: 'Title 2',
    image: 'images/g2.jpg'
  },
  {
    id: shortid.generate(),
    title: 'Title 3',
    image: 'images/g3.jpg'
  },
  {
    id: shortid.generate(),
    title: 'Title 4',
    image: 'images/g4.jpg'
  }
]

function Gallery() {
  return (
    <section className="gallery_section layout_padding" id="gallery">
      <div className="container">
        <div className="heading_container heading_center">
          <h2>Galerimiz</h2>
          <p>En güzel anlarınız bizimle birlikte sonsuza kadar saklanır.</p>
        </div>
        <div className="row">
          {LIST.map(item => (
            <div className="col-sm-6 col-md-4 col-lg-3 mx-auto" key={item.id}>
              <div className="box ">
                <img src={item.image} alt="good image" />
                <div className="btn-box">
                  <a href={item.image} data-toggle="lightbox" className="btn-1">
                    <BsImage />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="see_btn">
          <a href="">Daha Fazla</a>
        </div>
      </div>
    </section>
  )
}

export default Gallery
