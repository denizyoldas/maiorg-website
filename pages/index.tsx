import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import shortid from 'shortid'
import AboutUs from '../components/about-us'
import Client from '../components/client'
import Contact from '../components/contact'
import Footer from '../components/footer'
import Gallery from '../components/gallery'
import Header from '../components/header'
import Info from '../components/info'
import Service from '../components/service'
import Slider from '../components/slider'
import WhatsappButton from '../components/whatsapp'
import { meta } from '../site.config'

const LIST = [
  {
    id: shortid.generate(),
    title: 'Title 1',
    image: 'images/g1.jpg',
    alt: 'Düğün organizasyonu'
  },
  {
    id: shortid.generate(),
    title: 'Title 2',
    image: 'images/g2.jpg',
    alt: 'Baby Show organizasyonu'
  },
  {
    id: shortid.generate(),
    title: 'Title 3',
    image: 'images/g3.jpg',
    alt: 'Doğum günü organizasyonu'
  },
  {
    id: shortid.generate(),
    title: 'Title 4',
    image: 'images/g4.jpg',
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
          content="Mai organizasyon gecenizi aydınlatmak için burada"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="hero_area">
        <div className="hero_bg_box">
          {/* <img src="images/hero-bg.jpg" /> */}
          <Image
            src="/images/hero-bg.jpg"
            alt="evli çift fotografı"
            layout="fill"
          />
        </div>
        <Header />
        <Slider />
      </div>

      <AboutUs />
      <Service />
      <Gallery list={LIST} isMore />
      <Contact />
      <Client />
      <Info />
      <Footer />

      {meta.whatsappShow && <WhatsappButton />}
    </>
  )
}

export default Home
