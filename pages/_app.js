import Head from 'next/head'
import '@fontsource/italiana';
import '@fontsource/abhaya-libre/400.css';
import '../styles/global.scss';
import '../styles/bootstrap-config.scss';
import 'animate.css';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0'
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
