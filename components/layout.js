import Head from 'next/head';
// import { AnimatePresence } from 'framer-motion'
import { useEffect } from 'react';
import styles from './layout.module.scss';
import utilStyles from '../styles/utils.module.scss';
import Link from 'next/link';
import Header from './Header';

const name = "Paula's Portfolio";
export const siteTitle = "Paula's Portfolio";

export default function Layout({ children, home }) {
  return (
    <div className=''>
      <div className={styles.container}>
        <Head>
          <link rel='icon' href='/public/p_logo.ico' />
          <meta name='description' content='Portfolio' />
          <meta
            name='viewport'
            content='width=device-width, initial-scale=1.0'
          />
          <meta
            property='og:image'
            content={`/nextjs-blog/public/p_logo.ico`}
          />
          <meta name='og:title' content={siteTitle} />
          <meta name='twitter:card' content='summary_large_image' />
          <meta property='og:url' content='https://www.paulardb.design/' />
          <meta property='og:type' content='website' />
          <meta property='og:description' content='Check out my Portfolio' />
        </Head>
        <Header />

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
