import Link from 'next/link'
import React from 'react'
import ReactModal from 'react-modal'
import GaleryItem from './gallery-item'

interface Props {
  list: any[]
  isMore: boolean
}

function Gallery({ list, isMore }: Props) {
  return (
    <section className="gallery_section layout_padding" id="gallery">
      <div className="container">
        <div className="heading_container heading_center">
          <h2>Galerimiz</h2>
          <p>En güzel anlarınız bizimle birlikte sonsuza kadar saklanır.</p>
        </div>
        <div className="row">
          {list.map(item => (
            <GaleryItem key={item.id} image={item.image} alt={item.alt} />
          ))}
        </div>
        {isMore && (
          <div className="see_btn">
            <Link href="gallery">Daha Fazla</Link>
          </div>
        )}
      </div>
    </section>
  )
}

export default Gallery
