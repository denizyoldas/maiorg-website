import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import GalleryItem from './gallery-item'
import disableScroll from 'disable-scroll'
import styled from 'styled-components'

interface Props {
  list: any[]
  isMore: boolean
  style?: React.CSSProperties
}

const CardBody = styled.div`
  top: 0;
  left: 0;
  right: 0;
  position: fixed;
  z-index: 1;
  overflow: hidden;
  padding: 20px 0;
  width: 100%;
`

function Gallery({ list, isMore, style }: Props) {
  const [selectedId, setSelectedId] = useState(null)
  const [item, setItem] = useState<{ image: string; alt: string }>()

  useEffect(() => {
    if (selectedId) {
      // disableScroll.on()
    } else {
      disableScroll.off()
    }
  }, [selectedId])

  return (
    <section
      className="gallery_section layout_padding position-relative"
      id="gallery"
      style={style}
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
              className="col-sm-6 col-md-4 col-lg-3 mx-auto"
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
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.15 } }}
              transition={{ duration: 0.2, delay: 0.15 }}
              style={{
                pointerEvents: 'auto',
                zIndex: 1,
                willChange: 'opacity'
              }}
              className="bg-dark bg-opacity-75 w-100 h-100 position-fixed top-50 start-50 translate-middle"
              onClick={() => {
                setSelectedId(null)
              }}
            ></motion.div>
            <CardBody
              onClick={() => {
                setSelectedId(null)
              }}
            >
              <motion.div
                layoutId={selectedId}
                style={{ width: '400px', margin: '0 auto' }}
              >
                <GalleryItem image={item.image} alt={item.alt} type="modal" />
              </motion.div>
            </CardBody>
          </>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Gallery
