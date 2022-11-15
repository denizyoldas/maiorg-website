import type { NextPage } from 'next'
import Head from 'next/head'
import shortid from 'shortid'
import AboutUs from '../components/home/about-us'
import Client from '../components/home/client'
import Gallery from '../components/home/gallery'
import Hero from '../components/home/hero'
import MainLayout from '../components/layout/main-layout'
import Service from '../components/home/service'

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

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Mai Organizasyon | Hayallerinize dokunun</title>
        <meta
          name="description"
          content="Mai Organizasyon olarak hayatınızın her anında yanınızda olmak
          ve bu anları mükemmel bir şekilde doldurmak bizim en büyük
          ilkemizidir. Sizin hayallerinizi gerçeğe dönüştürmek için her
          imkanı ve fırsatı değerlendirerek olanakları sonsuza indirgemeyi
          hedefliyoruz."
        />
      </Head>

      <MainLayout>
        <Hero />
        <AboutUs />
        <Service />
        <Gallery list={LIST} />
        {/* <Contact /> */}
        <Client />
        {/* <Info /> */}
      </MainLayout>
    </>
  )
}

export default Home
