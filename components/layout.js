import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Navbar from './navbar';
import Footer from './footer';

const name = "Paula's Portfolio";
export const siteTitle = "Paula's Portfolio";

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel='icon' href='/public/p_logo.ico' />
        <meta
          name='description'
          content='Learn how to build a personal website using Next.js'
        />
        <meta
          property='og:image'
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name='og:title' content={siteTitle} />
        <meta name='twitter:card' /*no sé*/ content='summary_large_image' />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <Navbar />
            <Image
              priority
              src='/images/profile.jpeg'
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt='profile picture'
            />
            <h1 className={utilStyles.heading3Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href='/'>
              <a>
                <Image
                  priority
                  src='/images/profile.jpeg'
                  className={utilStyles.borderCircle}
                  height={108}
                  width={108}
                  alt='profile picture'
                />
              </a>
            </Link>
            <h2 className={utilStyles.headingXL}>
              <Link href='/'>
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
            <h3 className={utilStyles.headingLg}>
              <Link href='/'>
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h3>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href='/'>
            <a>← Back to home</a>
          </Link>
        </div>
      )}
      <Footer />
    </div>
  );
}
