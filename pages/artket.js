import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.scss';
import UnderConstruction from '/components/UnderConstruction.jsx';

import Blobs from '../components/Blobs';
import Test from '../components/Test';
import Footer from '../components/Footer';
import Header from '../components/Header';

const artket = () => {
  return (
    <div>
      <Head>
        <title>{siteTitle} Artket — Art Community App</title>
        <link rel='icon' href='/p_logo.ico' />
      </Head>
      <Header />
      <Blobs />
     <UnderConstruction />
      <Footer />
    </div>
  );
};

export default artket;
