import Head from 'next/head'
import Team from '../components/about/team'
import AboutUs from '../components/home/about-us'
import MainLayout from '../components/layout/main-layout'
import PageThumbnail from '../components/UI/page-thumbnail'

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

      <PageThumbnail title="Hakkımızda" />
      <AboutUs ShowIsMore={false} />
      <Team />
    </MainLayout>
  )
}

export default AboutPage
