import Head from 'next/head';
import Image from 'next/image';

import { BsChevronDown } from 'react-icons/bs';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.scss';
import BrightMoon from '../public/images/BrightMoon.svg';
import ProfilePic from '../public/images/profile.jpeg';
import Test from '../components/Test';
import 'animate.css';
import SMIcons from '../components/SMIcons';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
        <link rel='icon' href='/p_logo.ico' />
      </Head>

      <div className={` mt-5 ${utilStyles.allPages}`}>
        <section
          className={`min-vh-100 mt-5 ${utilStyles.page}`}
          alt='landing page'
          id='landing'
        >
          <div className='justify-content-center align-items-center'>
            <div className='row'>
              <div className='col-md-6'></div>
              <div className='col-md-6'>
                <div className=' pe-5'>
                  {' '}
                  <h3
                    className={` ${utilStyles.headingXl} text-end pe-5`}
                    id='uxWord'
                    alt='ux'
                  >
                    UX
                  </h3>
                </div>{' '}
              </div>
            </div>
            <div className='row g-0'>
              <div className='col-md-6 '>
                {' '}
                <div className=''>
                  <h1
                    className={`me-5 text-end ${utilStyles.heading3Xl} ${utilStyles}`}
                  >
                    Visual
                  </h1>
                  <hr className={utilStyles.underlineVD}></hr>
                </div>
              </div>
              <div className='col-md-6 border-start border-primary'>
                <h1 className={` ${utilStyles.heading3Xl}`}>Designer</h1>
              </div>
            </div>
            <div className='row g-0'>
              <div className='col-md-6'></div>
              <div
                className={`col-md-6 border-start border-primary text-end text-wrap ${utilStyles.headingXL}`}
              >
                <p
                  className={`mt-5 animate__animated animate__fadeInDown animate__delay-1s ${utilStyles.verticalText}`}
                >
                  find out more
                </p>{' '}
                <div>
                  <BsChevronDown className={utilStyles.arrowDown} />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className={`min-vh-100 mt-5 ${utilStyles.page}`}
          alt='home page'
          id='home'
        >
          <div className='row g-0' id='presentationGrid'>
            <div className='col-sm-6 d-flex justify-content-center'>
              <button
                className={`align-items-center justify-content-center rounded-circle ${utilStyles.bigMoon} animate__animated animate__flash `}
              >
                {/* not convinced */}
                <BrightMoon
                  width='inherit'
                  height='inherit'
                  viewBox={'0 0 120 120'}
                ></BrightMoon>
              </button>
            </div>
            <div className='col-sm-6'>
              <div className='row-3'>
                <h2
                  className={`ms-4 pb-3 border-bottom border-primary text-md-wrap animate__animated animate__fadeInDown animate__delay-1s ${utilStyles.heading2Xl}`}
                >
                  Hi, this is Paula
                </h2>
              </div>
              <div className={`row-3 px-4 text-wrap ${utilStyles.headingXL}`}>
                <p className='description pb-5 mb-5'>I do this and that.</p>
              </div>
              <div className={`row-6 text-wrap ${utilStyles.headingXL}`}>
                <p
                  className={`text-end border-start border-primary h-50 animate__animated animate__fadeInDown animate__delay-1s ${utilStyles.verticalText}`}
                >
                  find out more
                </p>
                <div>
                  <BsChevronDown className={utilStyles.secondArrowDown} />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className={`min-vh-100 ${utilStyles.page}`}
          id='about'
          alt='about page'
        >
          <div className='container-fluid'>
            <div
              className='row mt-5 pt-5 border-bottom border-primary'
              id='upper'
            >
              <div className='col-sm-5 border-end  border-primary' id='imPaula'>
                <h3 className={`text-end text-wrap ${utilStyles.headingXl}`}>
                  Hi, I am Paula
                </h3>
              </div>
              <div className='col-sm-7' id='paulaDescription'>
                <h4 className={`d-flex ${utilStyles.headingLg}`}>
                  Social butterfly with daily metamorphoses
                </h4>
              </div>
            </div>

            <div className='row border-bottom border-primary' id='mid'>
              <div
                className='col-sm-5 border-end  border-primary'
                id='photoAndLife'
              >
                <div className='profilePic py-4 pe-3 float-end'>
                  <Image
                    className='img-fluid'
                    src={ProfilePic}
                    alt='profile picture'
                  />
                </div>
                <div className='col-sm-7' id='bornAndPlaces'>
                  <div className='row'>
                    <div
                      className='col-sm-11 border-left border-primary'
                      id='born'
                    >
                      <h4
                        className={`text-end text-wrap ${utilStyles.headingLg}`}
                      >
                        Born in Barcelona, lived in
                      </h4>
                    </div>
                    <div
                      className={`col-sm-1 ${utilStyles.textDescriptions}`}
                      id='places'
                    >
                      <ul className='border-start border-primary'>
                        <li>California</li>
                        <li>Italy</li>
                        <li>Canarias</li>
                        <li>Norway</li>
                        <li>Greece</li>
                        <li>UK</li>
                        <li>Indonesia</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-sm-7 border-primary py-4 ps-4' id='statement'>
                <h5 className={`d-flex ${utilStyles.headingMd}`}>
                  Statement Lorem Ipsum
                </h5>
                <h5 className={`d-flex ${utilStyles.headingMd}`}>
                  Lorem Ipsum Hire me
                </h5>
              </div>
            </div>
            <div className='row'>
              <div className='col-sm-7' id='bornLife'>
                {' '}
              </div>
            </div>

            <div className='row' id='bottom'>
              <div
                className='col-sm-5 border-primary border-end pt-4'
                id='info'
              >
                <h4 className={`${utilStyles.headingLg}`}>
                  Check out my{' '}
                  <a
                    className={`fw-bold text-decoration-none ${utilStyles.headingLg}`}
                    href='/Romero-de-Blas_Paula-cv.pdf'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    resume
                  </a>{' '}
                </h4>
                <h4 className={`${utilStyles.headingLg}`}>
                  Contact{' '}
                  <a
                    className={`fw-bold text-decoration-none ${utilStyles.headingLg}`}
                    href='#findme'
                    alt='link to contact-me page'
                    color='primary'
                  >
                    me
                  </a>{' '}
                </h4>
              </div>

              <div className='d-flex flex-column justify-content-center col-sm-2 pt-4'>
                <h4 className={`text-end text-wrap ${utilStyles.headingLg}`}>
                  IT Skills
                </h4>
              </div>
              <div className={`col-sm-2 pt-5 ${utilStyles.textDescriptions}`}>
                <ul className='justify-content-center border-start border-primary'>
                  {' '}
                  <li>Figma</li>
                  <li>Procreate</li>
                  <li>Notion</li>
                </ul>
              </div>
              <div
                className={`d-flex flex-column  col-sm-2 pt-3 ${utilStyles.textDescriptions}`}
              >
                <ul className='pt-4'>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                  <li>React</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section
          className={`min-vh-100 pt-5 ${utilStyles.page}`}
          id='findme'
          alt='find me contact page'
        >
          <div className='container mx-lg-5 mx-md-4 grid'>
            <div className='row'>
              <div className='col-sm-4 border-bottom border-primary'>
                <p className={utilStyles.headingXl}></p>
              </div>
              <div className={`col-sm-2 border-bottom border-primary`}>
                <p className={utilStyles.headingXl}></p>
              </div>
              <div
                className={`col-sm-6  border-primary border-bottom border-end text-end`}
              >
                <h3 className={`me-5 ${utilStyles.headingXl}`}>Contact me</h3>
              </div>
            </div>
            <div className='row'>
              <div className='col-sm-4 border-bottom border-end border-primary text-end'>
                <div className='vh-40 border-bottom boder-primary'>
                  <p className={`${utilStyles.headingLg}`}>
                    Paula Romero de Blas
                  </p>
                  <p className={` ${utilStyles.headingMd}`}>/pawla/</p>
                  <p className={` ${utilStyles.textDescriptions}`}>
                    Paula Romero de Blas
                  </p>
                </div>
              </div>
              <div
                className={`col-sm-2 border-bottom border-end border-primary`}
              >
                <div className='min-vh-60 border-bottom boder-primary'>
                  <p
                    className={`align-self-center justify-self-center ${utilStyles.textDescriptions}`}
                  >
                    hi@paulardb.design
                  </p>
                </div>
                <SMIcons />
              </div>
              <div className='col-sm-6 ps-0 pe-5 pb-0 border-end border-bottom border-primary d-flex'>
                <Image
                  className='img-fluid'
                  src={ProfilePic}
                  alt='profile picture'
                />
              </div>
            </div>
            <Test />
          </div>
        </section>
      </div>
    </Layout>
  );
}
