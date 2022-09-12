import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import ReactModal from 'react-modal'
import GalleryItem from './gallery-item'
import disableScroll from 'disable-scroll'

interface Props {
  list: any[]
  isMore: boolean
}

function Gallery({ list, isMore }: Props) {
  const [selectedId, setSelectedId] = useState(null)
  const [item, setItem] = useState<{ image: string; alt: string }>()

  useEffect(() => {
    if (selectedId) {
      disableScroll.on()
    } else {
      disableScroll.off()
    }
  }, [selectedId])

  return (
    <section
      className="gallery_section layout_padding position-relative"
      id="gallery"
    >
      <div className="container">
        <div className="heading_container heading_center">
          <h2>Galerimiz</h2>
          <p>En güzel anlarınız bizimle birlikte sonsuza kadar saklanır.</p>
        </div>
        <div className="row">
          {list.map(item => (
            <motion.div
              key={item.id}
              layoutId={item.id}
              onClick={() => {
                setSelectedId(item.id)
                setItem(item)
              }}
            >
              <GalleryItem image={item.image} alt={item.alt} />
            </motion.div>
          ))}
        </div>
        {isMore && (
          <div className="see_btn">
            <Link href="gallery">Daha Fazla</Link>
          </div>
        )}
      </div>
      <AnimatePresence>
        {selectedId && item && (
          <div
            className="bg-dark bg-opacity-75 w-100 h-100 position-absolute top-50 start-50 translate-middle"
            onClick={() => {
              setSelectedId(null)
            }}
          >
            <GalleryItem image={item.image} alt={item.alt} type="modal" />
          </div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Gallery
