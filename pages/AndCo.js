import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import UnderConstruction from '../components/UnderConstruction';
import Footer from '../components/Footer';

const andCo = () => {
  return (<>
    <Layout andCo>
      <Head>
        <title>{siteTitle}</title>
        <link rel='icon' href='/p_logo.ico' />
      </Head>
      <UnderConstruction />

      <Footer />
    </Layout></>
  );
};

export default andCo;
