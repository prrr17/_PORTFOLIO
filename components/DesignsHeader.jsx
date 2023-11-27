import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Nav from 'react-bootstrap/Nav';
import { useRouter } from 'next/router';
import Layout, { siteTitle } from '../components/layout';
import Blobs from '../components/Blobs';
import Test from '../components/Test';
import Footer from '../components/Footer';
import Header from '../components/Header';
import utilStyles from '../styles/utils.module.scss';


function DesignsHeader() {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>{siteTitle} — Designs</title>
        <link rel='icon' href='/p_logo.ico' />
      </Head>
      <Header />
      <Blobs />
      <section
        className='mt-2 pt-2 me-md-5 pb-3'
        id='designs'
        alt='designs page'
      >
        <div className='container-fluid'>
          <div className='row mt-1 pt-2' id='upper'>
            <div
              className='col-sm-6 border-bottom border-end'
              id='DesignsTitle'
            >
              <h2
                className={`text-end text-wrap pb-5 ${utilStyles.heading2Xl}`}
              >
                Designs
              </h2>
            </div>
            <div className='col-sm-6 border-bottom'>
              <h4></h4>
            </div>
          </div>
          <div className='row mt-1 ms-4 pt-2' id='chosing'>
            <div
              className={`col-sm-6 text-end border-bottom ${
                router.pathname === '/designs' ? utilStyles.activeTab : ''
              }`}
              id='UXDev'
            >
              <Nav.Link
                href='/designs'
                className=''
                alt='link to the UX/Dev project'
              >
                <h5
                  className={`text-wrap fw-bold me-3  ${utilStyles.underlined} ${utilStyles.headingMd} ${utilStyles.textEnd}`}
                >
                  UX/Dev
                </h5>
              </Nav.Link>
            </div>
            
            <div
              className={`col-sm-6 border-bottom pb-5 ${
                router.pathname === '/illustration' ? utilStyles.activeTab : ''
              }`}
              id='IllustrationChoice'
            >
              <Nav.Link
                href='/illustration'
                className=''
                alt='link to the Illustration project'
              >
                <h5
                  className={`text-start text-wrap fw-bold ${utilStyles.underlined} ${utilStyles.headingMd}`}
                >
                  Illustration
                </h5>
              </Nav.Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default DesignsHeader;
