import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Nav from 'react-bootstrap/Nav';
import utilStyles from '../styles/utils.module.scss';
import Blobs from '../components/Blobs';
import ClitoAvatar from '../public/Clitonisa/clito1.png';
import IGClito from '../components/IGClito';
import IGPaula from '../components/IGPaula';
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

        <div className='container mt-2 mx-lg-5 mx-md-4'>
          <div className={`row  mx-5 border-end text-end`}>
            <h3 className={`pe-5 text-end ${utilStyles.headingXl}`}>
              Visual Artistry and Illustration{' '}
            </h3>
          </div>
          <div className='row mx-5'>
            {' '}
            {/* row that contains 2 tables */}
            <div className='col-xs-12 col-md-7 border-end'>
              {/*COL 1 for the email*/}
              <div className='row px-md-5'>
                {' '}
                <div className='col-xs-12 col-sm-5 col-lg-7 border-top border-end text-end py-3 px-3 d-flex flex-column justify-content-between'>
                  <div>
                    <Nav.Link
                      href='/clitonisa'
                      className=''
                      alt='link to "La Clitonisa" project'
                    >
                      <h3
                        className={`${utilStyles.headingLg} ${utilStyles.underlined}`}
                      >
                        La Clitonisa
                      </h3>
                    </Nav.Link>
                  </div>
                  <div className='mt-auto'>
                    <h5 className={`${utilStyles.headingMd}`}>
                      Character Design & Humorous Visual Storytelling
                    </h5>
                  </div>
                </div>
                <div className='col-xs-12 col-sm-7 col-lg-5 border-top py-5 align-center'>
                  {' '}
                  <div className='row px-md-2 pb-4'>
                    <div className='col-6 pt-4'>
                      <h5 className='align-center'>Paula's</h5>
                    </div>
                    <div className='col-6 pb-4 '>
                      <IGClito />{' '}
                    </div>
                  </div>
                  <div className='row px-md-2 pt-4'>
                    <div className='col-6 align-center'>
                      {' '}
                      <h5>The Project's</h5>
                    </div>
                    <div className='col-6'>
                      <IGPaula />
                    </div>
                  </div>{' '}
                  <div className='col pt-0'></div>
                </div>
              </div>
              <div
                className={`row text-end border-top pt-4  ${utilStyles.textDescriptions}`}
              >
                <p className='px-2 px-md-5'>
                  La Clitonisa, where humor meets dating stories! In this
                  project, I contributed my artistic flair to bring ‘La
                  Clitonisa’ to life.{' '}
                </p>
                <p className='px-2 px-md-5'>
                  From character design to turning everyday dating anecdotes
                  into comedic visuals, I infused a touch of fun and
                  relatability into each post.{' '}
                </p>{' '}
                <div className={`col-lg-7 col-sm-5 border-end`}></div>
                <div
                  className={`col-lg-5 col-sm-7 border-end text-end text-align-center`}
                >
                  {' '}
                </div>
              </div>
            </div>
            <div className='border-top col-xs-12 col-md-5 ps-0 pe-xl-5 pe-lg-3 pb-0 border-end border-bottom d-flex'>
              <div className={utilStyles.designsPicBox}>
                <Nav.Link
                  href='/clitonisa'
                  className=''
                  alt='link to "La Clitonisa" project'
                >
                  <Image
                    className={`${utilStyles.designsPic} ms-0`}
                    src={ClitoAvatar}
                    alt='La Clitonisa picture'
                  />
                </Nav.Link>
              </div>
            </div>
          </div>
          <Test />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default illustration;
