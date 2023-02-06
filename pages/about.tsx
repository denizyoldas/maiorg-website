import { NextPage } from 'next'
import Head from 'next/head'
import Team from '../components/about/team'
import AboutUs from '../components/home/about-us'
import MainLayout from '../components/layout/main-layout'
import PageThumbnail from '../components/UI/page-thumbnail'

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

const AboutPage: NextPage<{ team: any[] }> = ({ team }) => {
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
      <Team list={team} />
    </MainLayout>
  )
}

export function getStaticProps() {
  return {
    props: {
      team: TEAM
    }
  }
}

export default AboutPage
