import './globals.css'
import 'react-toastify/dist/ReactToastify.css'
import 'swiper/css'
import 'swiper/css/navigation'
import { meta } from '../site.config'

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Albert+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />

        <meta content="#ffffff" name="theme-color" />
        <meta content="#ffffff" name="msapplication-TileColor" />
        <link rel="icon" href="/logo.ico" />

        {meta.ga && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${meta.ga}`}
            />
            <script
              type="text/javascript"
              dangerouslySetInnerHTML={{
                __html: `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', '${meta.ga}');`
              }}
            />
          </>
        )}

        {/* <script async src="https://cdn.splitbee.io/sb.js"></script> */}
      </head>
      <body>{children}</body>
    </html>
  )
}
