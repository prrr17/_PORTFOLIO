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
import Pic from '/public/images/Avatar.jpg'

const design_template = () => {
  return (
    <div>
      <Head>
        <title>{siteTitle} Design Template </title>
        <link rel='icon' href='/p_logo.ico' />
      </Head>
      <Header />
      <Blobs />
      <section
        className='mt-2 pt-2 me-md-5 pb-3'
        id='designTemplate'
        alt='template for designs pages'
      >
        <div className='container-fluid'>
          <div className='row border-bottom mt-1 pt-2' id='firstrow'>
            <div className='col-sm-6 border-end' id='cel1.1'>
              <h2
                className={`text-end text-wrap py-4 ${utilStyles.heading2Xl}`}
              >
                Design Template
              </h2>
            </div>
            <div className='col-sm-6 align-items-end d-flex pb-3' id='cel1.2'>
              <h3 className={utilStyles.headingXl}>
                {' '}
                This is the Grid for the Design Pages I use
              </h3>
            </div>
          </div>
          <div className='row border-bottom' id='secondrow'>
            <div className='col-sm-6 border-end' id='cel2.1'>
              <div
                className={`py-4 pe-3 float-end ${utilStyles.designsPicBox}`}
              >
                <Image
                  className={`ms-0 ${utilStyles.designsPic}`}
                  src={Pic}
                  alt='portfolio concept picture'
                />
              </div>
            </div>
            <div className='col' id='cel2.2'>
              <div className='row d-flex align-items-center border-bottom'>
                <div className='container my-5'>
                  <p> Loren Ipsum</p>
                  <p>Loren Ipsum</p>
                </div>
              </div>
              <div className='row d-flex align-items-center border-bottom'>
                <div className='col-sm-9'>
                  <div className='container my-5'>
                    <p> Loren Ipsum</p>
                  </div>
                </div>
                <div className='col-sm-3 d-flex align-items-center'>
                  <div className={`py-4 ${utilStyles.designsPicBox}`}>
                    <Image
                      className={`${utilStyles.designsPic}`}
                      src={Pic}
                      alt='whatever'
                    />
                  </div>
                </div>
              </div>
              <div className='row d-flex align-items-center border-bottom'>
                <div className='container my-5'>
                  <p> Loren Ipsum</p>
                </div>
              </div>
              <div className='row'>
                <div className='container my-5'>
                <h4 className={utilStyles.headingLg}>
                   Title of the section
                  </h4>
                  <p> Loren Ipsum</p>
                  <p> Loren Ipsum</p>
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
              <h4 className={utilStyles.headingLg}>
                   Title of the section
                  </h4>
                <p>Loren Ipsum</p>
              </div>
            </div>

            <div className='col' id='cel3.2'>
              <div className={`${utilStyles.profilePicBox} float-end`}>
                <Image
                  className={`ms-0 p-0 ${utilStyles.designsPic}`}
                  src={Pic}
                  alt='whatever'
                />
              </div>
            </div>
          </div>
          <div
            className='row d-flex align-items-center border-bottom border-end border-start'
            id='forthrow'
          >
            <div className='col-sm-6 border-end ' id='cel4.1'>
              <div className={`${utilStyles.designsPicBox} py-4`}>
                <Image
                  className={`${utilStyles.designsPic}`}
                  src={Pic}
                  alt='whatever'
                />
              </div>
            </div>
            <div className='col-sm-6' id='cel4.2'>
              <div className='row border-bottom'>
                <div className='container my-5'>
                  <p>
                    Loren Ipsum
                  </p>
                </div>
              </div>
              <div className='row'>
                <div className='container my-5'>
                  <p>
                    Loren Ipsum{' '}
                    <Link
                      href='https://github.com/prrr17/_PORTFOLIO'
                      className={`fw-bold ${utilStyles.underlined}`}
                      target='_blank'
                      rel='noopener noreferrer'
                      alt='link to whatever'
                    >
                     Loren Ipsum.
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='row d-flex justify-content-center border-bottom'>
            <div className='container my-2 pt-2'>
              {' '}
              <h3 className='text-center'>Title of Final</h3>
            </div>
            <div className={`${utilStyles.designsPicBox} my-2 mx-0`}>
              <Image
                className={`${utilStyles.mockupPic}`}
                src={Pic}
                alt='whatever'
              />
            </div>
          </div>
          {/* -------- */}
        </div>
        <Test />
      </section>
      <Footer />
    </div>
  );
};

export default design_template;
