// import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'
import 'react-toastify/dist/ReactToastify.css'
import 'swiper/css'
import 'swiper/css/navigation'
import { AnimateSharedLayout } from 'framer-motion'

import type { AppProps } from 'next/app'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="author" content="Deniz Aksu" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="publisher" content="Mai Organizasyon" />

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

        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
