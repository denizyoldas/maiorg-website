import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import shortid from 'shortid'
import AboutUs from '../components/about-us'
import Client from '../components/client'
import Contact from '../components/contact'
import Footer from '../components/footer'
import Gallery from '../components/gallery'
import GoToTop from '../components/go-to-top'
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
          content="Mai Organizasyon olarak hayatınızın her anında yanınızda olmak
          ve bu anları mükemmel bir şekilde doldurmak bizim en büyük
          ilkemizidir. Sizin hayallerinizi gerçeğe dönüştürmek için her
          imkanı ve fırsatı değerlendirerek olanakları sonsuza indirgemeyi
          hedefliyoruz."
        />
        <meta name="author" content="Deniz Aksu" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="publisher" content="Mai Organizasyon" />
        <link rel="icon" href="/favicon.ico" />

        {/* Twitter Card */}

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@mai_organizasyon" />
        <meta name="twitter:title" content="Mai Organizasyon" />
        <meta
          name="twitter:description"
          content="Mai Organizasyon gecemizi aydınlattı."
        />
        {/* <meta
          name="twitter:image"
          content="https://html.sammy-codes.com/images/large-profile.jpg"
        /> */}

        {/* Facebook Open Graph */}
        <meta property="og:title" content="Mai Organizasyon" />
        <meta
          property="og:description"
          content="Mai Organizasyon gecemizi aydınlattı."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://maiorganizasyon.com" />
        {/* <meta property="og:image" content="/images/large-profile.jpg" /> */}
      </Head>
      <div className="hero_area">
        <div className="hero_bg_box">
          {/* <img src="images/hero-bg.jpg" /> */}
          <Image
            src="/images/hero-bg.webp"
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

      <GoToTop />
      {meta.whatsappShow && <WhatsappButton />}
    </>
  )
}

export default Home
