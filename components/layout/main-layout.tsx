import React from 'react'
import Footer from '../footer'
import GoToTop from '../go-to-top'
import WhatsappButton from '../whatsapp'
import { meta } from '../../site.config'
import Header from '../header'

interface Props {
  children: React.ReactNode
}

const MainLayout = ({ children }: Props) => {
  return (
    <main>
      <Header />

      {children}

      <Footer />
      <GoToTop />
      {meta.whatsappShow && <WhatsappButton />}
    </main>
  )
}

export default MainLayout
