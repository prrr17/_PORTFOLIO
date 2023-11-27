import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Nav from 'react-bootstrap/Nav';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.scss';
import Blobs from '../components/Blobs';
import Clito1 from '../public/Clitonisa/clito1.png';
import Footer from '../components/Footer';
import Test from '../components/Test';
import DesignsHeader from '../components/DesignsHeader';

const illustration = () => {
  return (
    <div>
      {' '}
      <DesignsHeader />
      <section
        className='mt-2 pt-2 me-md-5 pb-3'
        id='illustrationsPage'
        alt='illustrations page'
      >
        <Blobs />
        <div className='row border-bottom text-end' id='EcoOceansRow'>
          <div className='col-sm-6 border-end ps-5' id='ClitonisaCel'>
            <div className='container mt-5'>
              <Nav.Link href='/clitonisa'>
                <h2 className={`fw-bold ${utilStyles.underlined}`}>
                  La Clitonisa
                </h2>
                <br></br>
              </Nav.Link>
              <Nav.Link href='/clitonisa'>
                <h4>
                  Illustration and Digitalization of the comedic Instagram page,
                  'La Clitonisa'.
                </h4>
              </Nav.Link>
            </div>
          </div>
          <div
            className='col-sm-6 pe-5 d-flex justify-center'
            id='clitoLinkText'
          >
            <div className={` ${utilStyles.designsPicBox} py-4 pe-3`}>
              <Nav.Link
                href='/clitonisa'
                className=''
                alt='link to La Clitonisa project'
              >
                <Image
                  className={`${utilStyles.designsPic} ms-0`}
                  src={Clito1}
                  alt='La Clitonisa project picture'
                />
              </Nav.Link>
            </div>
          </div>
        </div>
        <Test />
      </section>
      <Footer />
    </div>
  );
};

export default illustration;
