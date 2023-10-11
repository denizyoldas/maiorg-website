'use client'

import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import GalleryItem from './gallery-item'
import disableScroll from 'disable-scroll'
import styled from 'styled-components'
import Title from '../UI/title'
import cx from 'classnames'

interface Props {
  list: any[]
  style?: React.CSSProperties
  isMore?: boolean
}

const CardBody = styled.div`
  top: 0;
  left: 0;
  right: 0;
  position: fixed;
  z-index: 60;
  overflow: hidden;
  padding: 20px 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`

function Gallery({ list, isMore = true }: Props) {
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
      className={cx(
        'flex flex-col items-center py-12 px-10 sm:px-28',
        isMore && 'bg-gradient-to-r from-rose-600 to-rose-700 '
      )}
      id="gallery"
    >
      {isMore && (
        <Title
          title="Galerimiz"
          subtitle="En güzel anlarınız bizimle birlikte sonsuza kadar saklanır."
          type="center"
          className={cx(isMore && 'text-white')}
        />
      )}
      <div className="mx-auto grid grid-cols-1 gap-6 py-10 sm:grid-cols-4">
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
        <div className="link-white text-center sm:text-left">
          <Link href="gallery">Daha Fazla</Link>
        </div>
      )}
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
                willChange: 'opacity',
                backgroundColor: 'rgba(0,0,0,0.5)',
                position: 'fixed',
                top: 0,
                left: 0,
                height: '100vh'
              }}
              // className="bg-dark bg-opacity-75 w-100 h-100 position-fixed top-50 start-50 translate-middle"
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
