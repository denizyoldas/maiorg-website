import { NextPage } from 'next'
import React from 'react'
import shortid from 'shortid'
import Gallery from '../components/home/gallery'
import Header from '../components/header'
import Image from 'next/image'
import Head from 'next/head'
import MainLayout from '../components/layout/main-layout'

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
    <MainLayout>
      <Head>
        <title>Mai Organizasyon | Resimlerimiz</title>
        <meta
          name="description"
          content="Mai Organizasyon resim galerisinden istediğiniz organizasyonlar için seçimler yapabilirsiniz."
        />
      </Head>
      <Gallery
        list={LIST}
        style={{ backgroundColor: '#fff !important' }}
        isMore={false}
      />
    </MainLayout>
  )
}

export default GalleryPage
