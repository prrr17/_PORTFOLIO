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

const artket = () => {
  return (
    <div>
      <Head>
        <title>{siteTitle} Artket — Art Community App</title>
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
            <div className='col-sm-6 align-items-end' id='cel1.2'>
              <h4 className={utilStyles.headingLg}>
                {' '}
                This is my portfolio conceptualization process
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
                    First, I brainstorm to determine what colors, hues, fonts,
                    and shapes best match my personality and convey the message
                    I want to send. Online tools that generate palettes based on
                    a couple of colors work wonders for this. Once I have a
                    selection that I like, I tweak a few colors and see if they
                    still fit. For this specific website, I decided to keep it
                    more minimalist and didn't use all of the hues provided
                    since the page is expected to showcase a few pictures and
                    drawings, and too many colors would make it look visually
                    cluttered.
                  </p>
                  <p>
                    My signature is my brand, so why not use it literally? As
                    you can see, my scribbled name is a constant feature across
                    the pages, and it redirects you back to the home page.
                  </p>
                  <p>
                    {' '}
                    Choosing fonts is one of my favorite parts of the design
                    process, as a font can convey so much more than the word it
                    represents. I chose Italiana, a sans-serif font that is
                    elegant and sophisticated without being classic or
                    old-fashioned. For a readable and softer experience, I chose
                    Abhaya Libre, a rounder serif counterpart based on the
                    Sinhalese alphabet. Do you agree that they complement each
                    other well?
                  </p>
                </div>
              </div>
              <div className='row d-flex align-items-center border-bottom'>
                <div className='col-sm-9'>
                  <div className='container my-5'>
                    <p>
                      {' '}
                      As I think of the functionalities and features I want for
                      the website, I generate new ideas and add them to the
                      page. Several ideas were suggested for the light-dark
                      switch, and after gathering opinions and feedback to
                      ensure clarity and ease of use, we concluded that the most
                      compact and clear option was the one that you can actually
                      switch :) :)
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
                    To create the moon design, I used the classic waxing and
                    waning crescent moon emojis from Twitter and slightly
                    modified them to match the appropriate color scheme, as well
                    as adding some haloes.
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
                    In the end, I decided that warm colors are more fitting than
                    the black and white version of the same. Plus, drawing is
                    fun, so I added a playful Procreate-made version of myself
                    to the mix.
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
                  I began creating the holistic concept of the website by
                  designing the homepage using Figma. At first, I planned to
                  base it on round shapes and arches to convey a more organic,
                  flowing feel. However, upon further consideration, I found
                  that using straight lines as a theme resulted in a cleaner and
                  more streamlined design that was easier to navigate and
                  understand.
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
                    Here is the Figma home frame, which is coded to a high
                    degree of similarity. The whole concept was desktop-first,
                    and I implemented the responsive design when coding.
                  </p>
                </div>
              </div>
              <div className='row border-bottom'>
                <div className='container my-5'>
                  <p>
                    Finally, for the code, I used Next.js, and some Sass. You
                    can check it out directly on my{' '}
                    <Link
                      href='https://github.com/prrr17/_PORTFOLIO'
                      className={`fw-bold ${utilStyles.underlined}`}
                      target='_blank'
                      rel='noopener noreferrer'
                      alt='link to the portfolio repository'
                    >
                      GitHub repository.
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

export default artket;
