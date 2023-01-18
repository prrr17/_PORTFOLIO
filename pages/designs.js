import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Nav from 'react-bootstrap/Nav';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.scss';
import Blobs from '../components/Blobs';
import Test from '../components/Test';
import Footer from '../components/Footer';
import Header from '../components/Header';
import FigmaSS from '../public/Figma_Screenshot.jpeg';
import RandomizeSS from '../public/RandomizeSS.jpg';
import GoBack from '../components/GoBack';
import UnderConstruction from '../components/UnderConstruction';

const designs = () => {
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
            <div className='col-sm-6 border-bottom' id='paulaDescription'>
              <h4></h4>
            </div>
          </div>

          <div className='row border-bottom' id='secondRow'>
            <div className='col-sm-6 border-end' id='FigmaSS'>
              <div
                className={` ${utilStyles.profilePicBox} py-4 pe-3 float-end`}
              >
                <Nav.Link href='/portfoliodesign'>
                  {' '}
                  <a className='' alt='link to the portfolio story'>
                    <Image
                      className={`${utilStyles.profilePic} ms-0`}
                      src={FigmaSS}
                      alt='portfolio concept picture'
                    />
                  </a>
                </Nav.Link>
              </div>
            </div>
            <div
              className='col-sm-6 d-flex justify-center'
              id='PortfolioLinkText'
            >
              <div className='container mt-5 '>
                <Nav.Link href='/portfoliodesign'>
                  <h2 className={`fw-bold ${utilStyles.underlined}`}>
                    This very Portfolio
                  </h2>
                  <br></br>
                </Nav.Link>
                <h4> See how I created it</h4>
              </div>
            </div>
          </div>
          <div className='row border-bottom' id='mid'>
            <div className='col-sm-6 border-end text-end' id='RandomizeText'>
              <div className='container mt-5'>
                <h2>Project for the Front-End course </h2>
                <h2>Randomize your trip app </h2>
                <br></br>
                <h4>
                  Check out the code at my{' '}
                  <Link href='https://github.com/prrr17/randomize-your-trip'>
                    <a
                      className={`fw-bold ${utilStyles.underlined}`}
                      target='_blank'
                      rel='noopener noreferrer'
                      alt='link to the project repository'
                    >
                      GitHub repository.
                    </a>
                  </Link>
                </h4>
              </div>
            </div>
            <div className='col-sm-6 border-end' id='FigmaSS'>
              <div
                className={` ${utilStyles.profilePicBox} py-4 pe-3 float-end`}
              >
                <button className='' onClick={()=>alert('Oops, not yet —Working on it!')}>
                  {' '}
                  <a className='' alt='link to to the project'>
                    <Image
                      className={`${utilStyles.profilePic} ms-0`}
                      src={RandomizeSS}
                      alt='randomize your trip picture'
                    />
                  </a>
                </button>
              </div>
            </div>
          </div>
          <div className='row pt-5 mt-5'>
            <GoBack />
            <UnderConstruction />
          </div>
          <Test />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default designs;
