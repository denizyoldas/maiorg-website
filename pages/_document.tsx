import NextDocument, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext
} from 'next/document'
import { meta } from '../site.config'

export default class MyDocument extends NextDocument {
  static getInitialProps(ctx: DocumentContext) {
    return NextDocument.getInitialProps(ctx)
  }

  render() {
    return (
      <Html lang="tr">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Albert+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
            rel="stylesheet"
          />

          <meta content="#ffffff" name="theme-color" />
          <meta content="#ffffff" name="msapplication-TileColor" />
          <link rel="icon" href="/logo.ico" />

          {/* ga */}
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

          <script async src="https://cdn.splitbee.io/sb.js"></script>
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
