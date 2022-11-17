import Head from 'next/head'
import MainLayout from '../components/layout/main-layout'
import PageThumbnail from '../components/UI/page-thumbnail'
import ContactForm from '../components/home/contact'
import Info from '../components/home/info'
import Title from '../components/UI/title'
import { meta } from '../site.config'
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'

const Contact = () => {
  return (
    <MainLayout>
      <Head>
        <title>Mai Organizasyon - İletişim</title>

        <meta
          name="description"
          content="Mai Organizasyon olarak, siz değerli müşterilerimizin her türlü organizasyon ihtiyacını karşılamak için çalışıyoruz. Sizlerin mutlu olması bizim için en büyük ödül."
        />
      </Head>

      <PageThumbnail title="İletişim" />
      <Info />
      <ContactForm />

      <section className="py-12 px-24">
        <Title title="Sosyal Medya" subtitle="Bizi takip edin" />
        <div className="w-1/4 grid grid-cols-4 gap-4 pt-12">
          <a
            href={'https://facebook.com/' + meta.social.facebook}
            rel="nofollow"
            className="centered flex-col hover:text-blue-500"
          >
            <FaFacebookF color="black" size={22} />
            Facebook
          </a>
          <a
            href={'https://twitter.com/' + meta.social.twitter}
            rel="nofollow"
            className="centered flex-col hover:text-blue-500"
          >
            <FaTwitter color="black" size={24} />
            Twitter
          </a>
          <a
            href={'https://instagram.com/' + meta.social.instagram}
            rel="nofollow"
            className="centered flex-col hover:text-rose-400"
          >
            <FaInstagram color="black" size={24} />
            Instagram
          </a>
          <a
            href={'https://youtube.com/' + meta.social.youtube}
            rel="nofollow"
            className="centered flex-col hover:text-red-500"
          >
            <FaYoutube color="black" size={24} />
            Youtube
          </a>
        </div>
      </section>
    </MainLayout>
  )
}

export default Contact
