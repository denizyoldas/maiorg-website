import { Metadata } from 'next'
import MainLayout from '../components/layout/main-layout'
import Hero from '../components/about/hero'
import AboutUs from '../components/home/about-us'
import Service from '../components/home/service'
import Client from '../components/home/client'
import Gallery from '../components/home/gallery'
import shortid from 'shortid'
import Team from '../components/about/team'
import Info from '../components/home/info'
import ContactForm from '../components/home/contact'

export const metadata: Metadata = {
  title: 'Mai Organizasyon | Hayallerinize dokunun',
  description:
    "Mai Organizasyon İstanbul'un Tuzla ilçesinde düğün, nişan, doğum günü, baby show, kurumsal organizasyonlarınız için hizmet vermektedir."
}

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

const TEAM = [
  {
    name: 'Tuğçe Çakır',
    position: 'Nedime',
    image: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
    description:
      'Uzun sürelere yayılan bir organizasyon için, her şeyin en iyi şekilde olması için çalışıyoruz.'
  },
  {
    name: 'Merve Çakır',
    position: 'Nedime',
    image: 'https://i.pravatar.cc/150?u=a042581f4e29026704f',
    description:
      'Uzun sürelere yayılan bir organizasyon için, her şeyin en iyi şekilde olması için çalışıyoruz.'
  },
  {
    name: 'Aslı Balcı',
    position: 'Nedime',
    image: 'https://i.pravatar.cc/150?u=a042581f4e29026704x',
    description:
      'Uzun sürelere yayılan bir organizasyon için, her şeyin en iyi şekilde olması için çalışıyoruz.'
  },
  {
    name: 'Ahmet Hamdi',
    position: 'Kameraman',
    image: 'https://i.pravatar.cc/150?u=a042581f4e29026704a',
    description:
      'Uzun sürelere yayılan bir organizasyon için, her şeyin en iyi şekilde olması için çalışıyoruz.'
  }
]

export default function Page() {
  return (
    <MainLayout>
      <Hero />
      <AboutUs />
      <Service />
      <Gallery list={LIST} />
      <Client />
      <Team list={TEAM} />
      <Info />
      <ContactForm />
    </MainLayout>
  )
}
