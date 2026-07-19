import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="icon" type="image/png" href="/images/favicon-white.png" />
        <link rel="apple-touch-icon" href="/images/logo.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
