import Head from 'next/head'
import React from 'react'
import MainLayout from '../components/layout/main-layout'

const AboutPage = () => {
  return (
    <MainLayout>
      <Head>
        <title>Mai Organizasyon - Hakkımızda</title>

        <meta
          name="description"
          content="Mai Organizasyon olarak, siz değerli müşterilerimizin her türlü organizasyon ihtiyacını karşılamak için çalışıyoruz. Sizlerin mutlu olması bizim için en büyük ödül."
        />
      </Head>
      Devam
    </MainLayout>
  )
}

export default AboutPage
