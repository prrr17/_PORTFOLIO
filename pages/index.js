import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
        <link rel="icon" href="/p_logo.ico" />
      </Head>
      <body>
      {/* <div className={styles.grid}>
        <section className={utilStyles.headingMd}> */}
        <section>
          <p>[Your Self Introduction]</p>

          <p>
           find out more
          </p>
          </section>
        {/* </section>
      </div> */}
      </body>
    </Layout>
  );
}
