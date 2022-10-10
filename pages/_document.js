import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='eng'>
      <Head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
        <link
          href='https://fonts.googleapis.com/css2?family=Forum&family=Italiana&display=swap'
          rel='stylesheet'
        />
        <meta charset='utf-8' />
      </Head>
      <body className='bg-main'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
