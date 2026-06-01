'use client'

import { AnimatePresence, motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import Link from 'next/link'
import React, { useRef, useState } from 'react'
import GalleryItem from './gallery-item'
import { FiX, FiMaximize2 } from 'react-icons/fi'
import cx from 'classnames'

interface Props {
  list: any[]
  isMore?: boolean
}

export default function Gallery({ list, isMore = true }: Props) {
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [selectedItem, setSelectedItem] = useState<{ image: string; alt: string } | null>(null)

  const ref = useRef<HTMLDivElement>(null)
  const prefersReducedMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const bgY = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? ['0%', '0%'] : ['-6%', '6%'])

  const openItem = (item: any) => {
    setSelectedId(item.id)
    setSelectedItem(item)
    document.body.style.overflow = 'hidden'
  }
  const closeItem = () => {
    setSelectedId(null)
    setSelectedItem(null)
    document.body.style.overflow = ''
  }

  return (
    <section
      ref={ref}
      className={cx('relative py-28 sm:py-36 overflow-hidden', isMore ? 'bg-warm-dark' : 'bg-white')}
      id="gallery"
    >
      {/* Parallax background texture */}
      {isMore && (
        <motion.div style={{ y: bgY }} className="absolute inset-0 pointer-events-none will-change-transform">
          <div className="absolute inset-0 bg-gradient-to-br from-warm-dark via-[#2a0820] to-warm-dark" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/8 blur-3xl" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-gold/5 blur-3xl" />
        </motion.div>
      )}

      <div className="relative max-w-7xl mx-auto px-8 sm:px-12 lg:px-20">
        {isMore && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8 }}
            className="text-center mb-14"
          >
            <div className="eyebrow justify-center">
              <span className="h-px w-10 bg-gold" />
              <span className="text-gold text-xs font-semibold tracking-[0.25em] uppercase font-sans">Galerimiz</span>
              <span className="h-px w-10 bg-gold" />
            </div>
            <h2 className="section-heading text-white">
              <span className="font-script text-secondary" style={{ fontSize: '1.15em' }}>Güzel</span>{' '}
              Anlar
            </h2>
            <p className="mt-4 text-white/50 max-w-md mx-auto text-sm leading-relaxed font-sans">
              En güzel anlarınız bizimle birlikte sonsuza kadar saklanır.
            </p>
          </motion.div>
        )}

        <motion.div
          variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.07 } } }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4"
        >
          {list.map(item => (
            <motion.div
              key={item.id}
              layoutId={item.id}
              variants={{ hidden: { opacity: 0, scale: 0.94 }, show: { opacity: 1, scale: 1, transition: { duration: 0.45 } } }}
              whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
              onClick={() => openItem(item)}
              className="relative cursor-pointer overflow-hidden rounded-xl aspect-square group"
            >
              <GalleryItem image={item.image} alt={item.alt} />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <FiMaximize2 className="text-white" size={22} />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {isMore && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-center mt-12"
          >
            <Link href="/gallery" className="btn-outline-white">
              Tüm Galeriyi Gör
            </Link>
          </motion.div>
        )}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedId && selectedItem && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm"
              onClick={closeItem}
            />
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={closeItem}>
              <motion.div
                layoutId={selectedId}
                className="relative max-w-2xl w-full"
                onClick={e => e.stopPropagation()}
              >
                <button onClick={closeItem} className="absolute -top-12 right-0 text-white/70 hover:text-white transition-colors">
                  <FiX size={28} />
                </button>
                <div className="overflow-hidden rounded-2xl shadow-2xl ring-1 ring-white/10">
                  <GalleryItem image={selectedItem.image} alt={selectedItem.alt} type="modal" />
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </section>
  )
}
