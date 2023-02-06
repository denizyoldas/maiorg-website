import { NextPage } from 'next'
import shortid from 'shortid'
import Gallery from '../components/home/gallery'
import Head from 'next/head'
import MainLayout from '../components/layout/main-layout'
import PageThumbnail from '../components/UI/page-thumbnail'

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
  },
  {
    id: shortid.generate(),
    title: 'Title 5',
    image: 'images/g5.jpg',
    alt: 'Nişan organizasyonu'
  },
  {
    id: shortid.generate(),
    title: 'Title 5',
    image: 'images/a1.webp',
    alt: 'Nişan organizasyonu'
  },
  {
    id: shortid.generate(),
    title: 'Title 5',
    image: 'images/a2.jpg',
    alt: 'Nişan organizasyonu'
  }
]

const GalleryPage: NextPage<{ galleryList: any[] }> = ({ galleryList }) => {
  return (
    <MainLayout>
      <Head>
        <title>Mai Organizasyon | Resimlerimiz</title>
        <meta
          name="description"
          content="Mai Organizasyon resim galerisinden istediğiniz organizasyonlar için seçimler yapabilirsiniz."
        />
      </Head>
      <PageThumbnail title="Resimlerimiz" />
      <Gallery
        list={galleryList}
        style={{ backgroundColor: '#fff !important' }}
        isMore={false}
      />
    </MainLayout>
  )
}

export function getStaticProps() {
  return {
    props: {
      galleryList: LIST
    }
  }
}

export default GalleryPage
