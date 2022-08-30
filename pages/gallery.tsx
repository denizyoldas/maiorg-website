import { NextPage } from 'next'
import React from 'react'
import shortid from 'shortid'
import Gallery from '../components/gallery'
import Header from '../components/header'
import Image from 'next/image'

const LIST = [
  {
    id: shortid.generate(),
    title: 'Title 1',
    image: 'images/g1.webp',
    alt: 'Düğün organizasyonu'
  },
  {
    id: shortid.generate(),
    title: 'Title 2',
    image: 'images/g2.webp',
    alt: 'Baby Show organizasyonu'
  },
  {
    id: shortid.generate(),
    title: 'Title 3',
    image: 'images/g3.webp',
    alt: 'Doğum günü organizasyonu'
  },
  {
    id: shortid.generate(),
    title: 'Title 4',
    image: 'images/g4.webp',
    alt: 'Nişan organizasyonu'
  }
]

const GalleryPage: NextPage = () => {
  return (
    <>
      <Header style={{ backgroundColor: '#002c3e' }} />
      <Gallery list={LIST} isMore={false} />
    </>
  )
}

export default GalleryPage
