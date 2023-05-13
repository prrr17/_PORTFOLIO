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
import FavIdea from '../public/Artbar/favIdea.png';
import ArtketThumbnail from '/public/Artket/thumbnails/Thumbnail2.png';
import SandrineLanding from '/public/Sandrine/sandrineLanding.png';
import RandomizeSS from '../public/RandomizeSS.jpg';
import GoBack from '../components/GoBack';

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
          <div className='row border-bottom text-end' id='ArtketRow'>
            <div className='col-sm-6 border-end' id='ArtketTitlesCel'>
              <div className='container mt-5 '>
                <Nav.Link href='/artket'>
                  <h2 className={`fw-bold ${utilStyles.underlined}`}>Artket</h2>
                  <br></br>
                </Nav.Link>
                <Nav.Link href='/artket'>
                  <h4>
                    An art community app to connect artists, collectors,
                    galleries and anyone curious about art
                  </h4>
                </Nav.Link>
              </div>
            </div>
            <div className='col-sm-6 d-flex justify-center' id='ArtketLinkText'>
              <div
                className={` ${utilStyles.designsPicBox} py-4 pe-3 float-end`}
              >
                <Nav.Link
                  href='/artket'
                  className=''
                  alt='link to the Artket project'
                >
                  <Image
                    className={`${utilStyles.designsPic} ms-0`}
                    src={ArtketThumbnail}
                    alt='Artket project picture'
                  />
                </Nav.Link>
              </div>
            </div>
          </div>
          <div className='row border-bottom' id='SandrineRow'>
            <div className='col-sm-6 border-end' id='SandrineTitlesCel'>
              <div className='container mt-5 '>
                <Nav.Link href='/sandrine'>
                  <h2 className={`fw-bold ${utilStyles.underlined}`}>Sandrine Molinas' Portfolio</h2>
                  <br></br>
                </Nav.Link>
                <Nav.Link href='/sandrine'>
                  <h4>
                    A Barcelonian artist creating her online presence and showcasing her art
                  </h4>
                </Nav.Link>
              </div>
            </div>
            <div className='col-sm-6 d-flex justify-center' id='SandrineLinkText'>
              <div
                className={` ${utilStyles.designsPicBox} py-4 pe-3 float-end`}
              >
                <Nav.Link
                  href='/sandrine'
                  className=''
                  alt='link to the Sandrine Portfolio project'
                >
                  <Image
                    className={`${utilStyles.designsPic} ms-0`}
                    src={SandrineLanding}
                    alt='Sandrine project picture'
                  />
                </Nav.Link>
              </div>
            </div>
          </div>F
          <div className='row border-bottom' id='ArtbarRow'>
            <div className='col-sm-6 border-end' id='ArtbaPicCel'>
              <div
                className={` ${utilStyles.designsPicBox} py-4 pe-3 float-end`}
              >
                <Nav.Link
                  href='/artbar'
                  className=''
                  alt='link to the Artbar project'
                >
                  <Image
                    className={`${utilStyles.designsPic} ms-0`}
                    src={FavIdea}
                    alt='Artbar project picture'
                  />
                </Nav.Link>
              </div>
            </div>
            <div className='col-sm-6 d-flex justify-center' id='ArtbarLinkText'>
              <div className='container mt-5 '>
                <Nav.Link href='/artbar'>
                  <h2 className={`fw-bold ${utilStyles.underlined}`}>ARTBAR</h2>
                  <br></br>
                </Nav.Link>
                <Nav.Link href='/artbar'>
                  <h4>A Database of Barcelona Artisans from 1814 to 1860</h4>
                </Nav.Link>
              </div>
            </div>
          </div>
          <div className='row border-bottom' id='PortfolioRow'>
            <div className='col-sm-6 border-end' id='FigmaSS'>
              <div
                className={` ${utilStyles.designsPicBox} py-4 pe-3 float-end`}
              >
                <Nav.Link
                  href='/portfoliodesign'
                  className=''
                  alt='link to the portfolio story'
                >
                  <Image
                    className={`${utilStyles.designsPic} ms-0`}
                    src={FigmaSS}
                    alt='portfolio concept picture'
                  />
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
                <Nav.Link href='/portfoliodesign'>
                  <h4> Check out how I created it</h4>
                </Nav.Link>
              </div>
            </div>
          </div>
          <div className='row border-bottom' id='RandomRow'>
            <div className='col-sm-6 border-end text-end' id='RandomizeText'>
              <div className='container mt-5'>
                <h2> Project for the Front-End course</h2>{' '}
                <h2>
                  {' '}
                  <Link
                    href='https://prrr17.github.io/randomize-your-trip/'
                    className={`fw-bold ${utilStyles.underlined}`}
                    target='_blank'
                    rel='noopener noreferrer'
                    alt='link to the project repository'
                  >
                    {'\n'}
                    Randomize your trip app
                  </Link>{' '}
                </h2>
                <br></br>
                <h4>
                  Check out the code at my{' '}
                  <Link
                    href='https://github.com/prrr17/randomize-your-trip'
                    className={`fw-bold ${utilStyles.underlined}`}
                    target='_blank'
                    rel='noopener noreferrer'
                    alt='link to the project repository'
                  >
                    GitHub repository.
                  </Link>
                </h4>
                <p className='pt-4'>
                  * This was a fun project, it is unfinished, hence ready to
                  keep improving when I feel ready. Stay tuned :){' '}
                </p>
              </div>
            </div>
            <div className='col-sm-6 border-end' id='FigmaSS'>
              <div
                className={` ${utilStyles.designsPicBox} py-4 pe-3 float-end`}
              >
                <button>
                  <Link
                    href='https://prrr17.github.io/randomize-your-trip/'
                    className=''
                    alt='link to to the project'
                    rel='noopener noreferrer'
                    target='_blank'
                  >
                    <Image
                      className={`${utilStyles.designsPic} ms-0`}
                      src={RandomizeSS}
                      alt='randomize your trip picture'
                    />
                  </Link>
                </button>
              </div>
            </div>
          </div>
          <div className='row pt-5 mt-5'>
            <GoBack />
          </div>
          <Test />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default designs;
