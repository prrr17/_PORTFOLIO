import { Html, Head, Main, NextScript } from 'next/document';


export default function Document() {
  return (
    <Html lang='eng'>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin />
        <link
          href='https://fonts.googleapis.com/css2?family=Forum&family=Italiana&display=swap'
          rel='stylesheet'
        />
        <meta charSet='utf-8' />
      </Head>
      <body
        className='bg-secondary'
    
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
