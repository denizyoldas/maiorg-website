import { Metadata } from 'next'
import MainLayout from '../components/layout/main-layout'
import Hero from '../components/about/hero'
import AboutUs from '../components/home/about-us'
import Service from '../components/home/service'
import Client from '../components/home/client'

export const metadata: Metadata = {
  title: 'My Page Title'
}

export default function Page() {
  return (
    <MainLayout>
      <Hero />
      <AboutUs />
      <Service />
      {/* <Gallery list={LIST} /> */}
      <Client />
    </MainLayout>
  )
}
