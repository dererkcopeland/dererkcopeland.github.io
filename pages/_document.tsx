import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="theme-color" content="#CBACF9" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="purple-translucent" />
        <meta name="msapplication-navbutton-color" content="#CBACF9" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}