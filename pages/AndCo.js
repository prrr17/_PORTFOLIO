// import Link from 'next/link';
import Nav from 'react-bootstrap/Nav';
import Image from 'next/image';
import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import ClitoAvatar from '../public/Clitonisa/clito1.png';
import Blobs from '../components/Blobs';
import IGClito from '../components/IGClito';
import IGPaula from '../components/IGPaula';
import Test from '../components/Test';
import Footer from '../components/Footer';
import utilStyles from '../styles/utils.module.scss';

const andCo = () => {
  return (
    <Layout andCo>
      <Head>
        <title>{siteTitle}</title>
        <link rel='icon' href='/p_logo.ico' />
      </Head>
      <div className='container mt-2'>
        <section
          className={`min-vh-100 w-100 ps-2 mx-auto`}
          id='&co'
          alt='Other works'
        >
          <Blobs />
          <div className='container d-flex align-center'>
            {' '}
            <h2 className={`pe-5 text-end ${utilStyles.heading2Xl}`}>
              Other Works{' '}
            </h2>
          </div>
          <div className='container mt-2 mx-lg-5 mx-md-4'>
            <div className={`row border-end text-end`}>
              <h3 className={`pe-5 text-end ${utilStyles.headingXl}`}>
                Visual Artistry and Illustration{' '}
              </h3>
            </div>
            <div className='row'>
              {' '}
              {/* row that contains 2 tables */}
              <div className='col-xs-12 col-md-7 border-end'>
                {/*COL 1 for the email*/}
                <div className='row'>
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
                        Character Design and Humorous Visual Storytelling
                      </h5>
                    </div>
                  </div>
                  <div className='col-xs-12 col-sm-7 col-lg-5 border-top py-5 align-center'>
                    {' '}
                    <div className='row pb-4'>
                      <div className='col-6 pt-4'>
                        <h5 className='align-center'>Paula's</h5>
                      </div>
                      <div className='col-6 pb-4 '>
                        <IGClito />{' '}
                      </div>
                    </div>
                    <div className='row pt-4'>
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
                <div className='row border-top'>
                  <p className={`pt-4 ${utilStyles.textDescriptions}`}>
                    La Clitonisa, where humor meets dating tales! In this
                    project, I contributed my artistic flair to bring ‘La
                    Clitonisa’ to life. From character design to turning
                    everyday dating anecdotes into comedic visuals, I infused a
                    touch of fun and relatability into each post.{' '}
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
      </div>
      <Footer />
    </Layout>
  );
};

export default andCo;
