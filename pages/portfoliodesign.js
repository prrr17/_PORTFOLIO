import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.scss';
import Blobs from '../components/Blobs';
import Test from '../components/Test';
import Footer from '../components/Footer';
import Header from '../components/Header';
import PFConcept from '../public/portfolio_concept.jpeg';
import SwitchesSample from '../public/SwitchesSample.jpg';
import PastExample from '../public/PastExample.jpeg';
import Home_MU from '../public/Home_MU.jpeg';
import HOME_MockUp from '../public/HOME_MockUp.jpg';

const portfoliodesign = () => {
  return (
    <div>
      <Head>
        <title>{siteTitle} — Portfolio Design Process</title>
        <link rel='icon' href='/p_logo.ico' />
      </Head>
      <Header />
      <Blobs />
      <section
        className='mt-2 pt-2 me-md-5 pb-3'
        id='portfolioConcept'
        alt='portfolio design page'
      >
        <div className='container-fluid'>
          <div className='row border-bottom mt-1 pt-2' id='firstrow'>
            <div className='col-sm-6 border-end' id='cel1.1'>
              <h2
                className={`text-end text-wrap py-4 ${utilStyles.heading2Xl}`}
              >
                Portfolio
              </h2>
            </div>
            <div className='col-sm-6' id='cel1.2'>
              <h4 className={utilStyles.headingLg}>
                {' '}
                This is my portfolio-conceptualization process
              </h4>
            </div>
          </div>
          <div className='row border-bottom' id='secondrow'>
            <div className='col-sm-6 border-end' id='cel2.1'>
              <div className='py-4 pe-3 float-end'>
                <Image
                  className={`ms-0`}
                  src={PFConcept}
                  alt='portfolio concept picture'
                />
              </div>
            </div>
            <div className='col' id='cel2.2'>
              <div className='row d-flex align-items-center border-bottom'>
                <div className='container my-5'>
                  <p>
                    {' '}
                    Firstly, there is a brainstorm, see what kind of colors,
                    hues, fonts, shapes, match my personality and what I want to
                    convey.
                  </p>
                  <p>
                    Online tools to create palettes based in a couple of colors
                    work wonders. When I am convinced with the offer, I like to
                    tweak a few colors and see if it still fits. In this
                    especific case, I decided to keep it more minimalist. I
                    didn't use all the hues given—at least for now—as the page
                    is expected to collect a few pictures and drawings, it would
                    feel visually cluttered.
                  </p>
                  <p>
                    My brand is my signature, so why not literally? As you can
                    see, my scribbled name is a constant across the pages (and
                    it redirects you "home"!)
                  </p>
                  <p>
                    {' '}
                    Choosing the fonts is one of my favorite parts, as a font
                    can say so much more than the word that depicts. Italiana is
                    a sans-serif elegant and sophisticated without being classic
                    or old-school. Abhaya Libre is a rounder serif counterpart,
                    based on the Sinhalese alphabet, for a readeable softer
                    experience. Would you agree?
                  </p>
                </div>
              </div>
              <div className='row d-flex align-items-center border-bottom'>
                <div className='col-sm-9'>
                  <div className='container my-5'>
                    <p>
                      {' '}
                      As I think of functionalities and features I want for the
                      page, I create new ideas and add them to the page. A few
                      ideas came up for the light-dark switch, and after asking
                      around for opinion in understability, concluding the most
                      compact and clear is the one that you can actually switch
                      :)
                    </p>
                  </div>
                </div>
                <div className='col-sm-3 d-flex align-items-center'>
                  <div className='container'>
                    <Image
                      className={utilStyles.SwitchesSample}
                      src={SwitchesSample}
                      alt='portfolio concept picture'
                    />
                  </div>
                </div>
              </div>
              <div className='row d-flex align-items-center border-bottom'>
                <div className='container my-5'>
                  <p>
                    {' '}
                    For the moons design, I used the classic waxing and waning
                    crescent moon emojis, the Twitter ones, and slightly modify
                    them to the appropiate color scheme—as well as adding some
                    haloes.
                  </p>
                </div>
              </div>
              <div className='row'>
                <div className='container my-5'>
                  <p>
                    {' '}
                    I am not a selfie-kind-of-person, so finding a picture of
                    myself looking cool-and-kind was not that easy. Did I
                    succeed?
                  </p>
                  <p>
                    {' '}
                    Oh, and in the end I decided the warm colors are more
                    fitting than the black and white version of the same. Also,
                    drawing is fun, so why not adding a playful Procreate-made
                    version of myself to the mix.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className='row d-flex align-items-center border-bottom'
            id='thirdrow'
          >
            <div className='col-sm-6 border-end' id='cel3.1'>
              <div className='text-end py-4 pe-3 float-end'>
                <p>
                  I started creating the holistic concept by the homepage look,
                  using Figma. At first it was going to be based on round shapes
                  and arches, but if found cleaner and easier to follow the use
                  of straigh lines as a theme.
                </p>
              </div>
            </div>

            <div className='col' id='cel3.2'>
              <div className={`${utilStyles.profilePicBox} float-end`}>
                <Image
                  className={`ms-0 p-0`}
                  src={PastExample}
                  alt='portfolio discarded concept picture'
                />
              </div>
            </div>
          </div>
          <div
            className='row d-flex align-items-center border-bottom border-end border-start'
            id='forthrow'
          >
            <div className='col-sm-6' id='cel4.1'>
              <div className='py-4'>
                <Image
                  className={`${utilStyles.profilePic} ms-0 p-0`}
                  src={Home_MU}
                  alt='portfolio concept home picture'
                />
              </div>
            </div>
            <div className='col-sm-6' id='cel4.2'>
              <div className='row border-bottom'>
                <div className='container my-5'>
                  <p>
                    This here is the Figma home frame, which is coded to a high similarity. The whole concept was desktop-first, and the responsibility was implemented when coding.
                  </p>
                </div>
              </div>
              <div className='row border-bottom'>
                <div className='container my-5'>
                  <p>
                    Finally, for the code, I used Next.js, and some Sass. You
                    can check it out directly at my{' '}
                    <Link href='https://github.com/prrr17/_PORTFOLIO'>
                      <a
                        className={`fw-bold ${utilStyles.underlined}`}
                        target='_blank'
                        rel='noopener noreferrer'
                        alt='link to the portfolio repository'
                      >
                        GitHub repository.
                      </a>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='row d-flex justify-content-center border-bottom'>
            <div className='container my-2 pt-2'>
              {' '}
              <h3 className='text-center'>Figma (semi)Final Mock-ups</h3>
            </div>
            <div className={`${utilStyles.reducedPic} container my-2`}>
              <Image
                className=''
                src={HOME_MockUp}
                alt='portfolio concept picture'
              />
            </div>
          </div>
        </div>
        <Test />
      </section>
      <Footer />
    </div>
  );
};

export default portfoliodesign;
