import Head from 'next/head'
import React from 'react'
import Service from '../components/home/service'
import MainLayout from '../components/layout/main-layout'
import PageThumbnail from '../components/UI/page-thumbnail'

const ServicesPage = () => {
  return (
    <MainLayout>
      <Head>
        <title>Mai Organizasyon - Hizmetlerimiz</title>

        <meta
          name="description"
          content="Mai Organizasyon olarak, siz değerli müşterilerimizin her türlü organizasyon ihtiyacını karşılamak için çalışıyoruz. Sizlerin mutlu olması bizim için en büyük ödül."
        />
      </Head>

      <PageThumbnail title="Hizmetlerimiz" />
      <Service showMore={false} />
    </MainLayout>
  )
}

export default ServicesPage
