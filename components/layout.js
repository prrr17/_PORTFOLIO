import Head from 'next/head';
// import { AnimatePresence } from 'framer-motion'
import styles from './layout.module.scss';
import utilStyles from '../styles/utils.module.scss';
import Link from 'next/link';
import Header from './Header';


const name = "Paula's Portfolio";
export const siteTitle = "Paula's Portfolio";

export default function Layout({ children, home }) {
  return (
    <div className='bg-secondary'>
      <div className={styles.container}>
        <Head>
          <link rel='icon' href='/public/p_logo.ico' />
          <meta name='description' content='Portfolio ' />
          <meta
            property='og:image'
            content={`https://og-image.vercel.app/${encodeURI(
              siteTitle
            )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
          />
          <meta name='og:title' content={siteTitle} />
          <meta name='twitter:card' /*en el futuro*/ content='summary_large_image' />
        </Head>        
       <Header/> 
       {/* <AnimatePresence
                exitBeforeEnter
                initial={false}
                onExitComplete={() => window.scrollTo(0, 0)}
            >
                <Component {...pageProps} canonical={url} key={url} />
            </AnimatePresence>  
             */}
        <main>{children}</main>
        {!home && (
          <div className={styles.backToHome}>
            <Link href='/'>
              <a>← Back to home</a>
            </Link>
            <h2 className={utilStyles.heading2XL}>
                <Link href='/'>
                  <a className={utilStyles.colorInherit}>{name}</a>
                </Link>
              </h2>
              <h3 className={utilStyles.headingLg}>
                <Link href='/'>
                  <a className={utilStyles.colorInherit}>{name}</a>
                </Link>
              </h3>
          </div>
        )}
      </div>
    </div>
  );
}
