import Link from 'next/link'
import React from 'react'
import { BsImage } from 'react-icons/bs'
import ReactModal from 'react-modal'

interface Props {
  list: any[]
  isMore: boolean
}

function Gallery({ list, isMore }: Props) {
  return (
    <>
      {/* <ReactModal isOpen>hava kapali ama akalim</ReactModal> */}
      <section className="gallery_section layout_padding" id="gallery">
        <div className="container">
          <div className="heading_container heading_center">
            <h2>Galerimiz</h2>
            <p>En güzel anlarınız bizimle birlikte sonsuza kadar saklanır.</p>
          </div>
          <div className="row">
            {list.map(item => (
              <div className="col-sm-6 col-md-4 col-lg-3 mx-auto" key={item.id}>
                <div className="box ">
                  <img src={item.image} alt="good image" />
                  <div className="btn-box">
                    <a
                      href={item.image}
                      data-toggle="lightbox"
                      className="btn-1"
                    >
                      <BsImage />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {isMore && (
            <div className="see_btn">
              <Link href="gallery">Daha Fazla</Link>
            </div>
          )}
        </div>
      </section>
    </>
  )
}

export default Gallery
