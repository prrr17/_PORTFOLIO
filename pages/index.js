import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import IgOn from '../public/IgOn.svg';
import IgOff from '../public/IgOff.svg';
import BeOn from '../public/BeOn.svg';
import BeOff from '../public/BeOff.svg';
import InOn from '../public/inOn.svg';
import InOff from '../public/inOff.svg';
import GhOn from '../public/GhOn.svg';
import GhOff from '../public/GhOff.svg';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import BrightMoon from '../public/images/BrightMoon.svg';
import ProfilePic from '../public/images/profile.jpeg';
import Test from '../components/Test';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
        <link rel='icon' href='/p_logo.ico' />
      </Head>

      <div className={` mt-5 ${utilStyles.allPages}`}>
        <section className='page min-vh-100' alt='landing page' id='landing'>
          <div className='justify-content-center align-items-center'>
            <div className='row'>
              <div className='col'></div>
              <div className='col'>
                <div className={` ${utilStyles.underLine}`}>
                  {' '}
                  <h3
                    className={` ${utilStyles.headingXl}`}
                    id='uxWord'
                    alt='ux'
                  >
                    UX
                  </h3>
                </div>{' '}
              </div>
            </div>
            <div className='row'>
              <div className='col'>
                {' '}
                <div className={`text-end ${utilStyles.biggestTitle} `}>
                  <h1 className={`me-5 ${utilStyles.heading3Xl} ${utilStyles}`}>
                    Visual
                  </h1>
                </div>
              </div>
              <div className='col border-start border-primary'>
                <h1
                  className={`ms-n2 ${utilStyles.heading3Xl} ${utilStyles.underLine}`}
                >
                  Designer
                </h1>
              </div>
            </div>
            <div className='row'>
              <div className='col border-end border-primary'></div>
              <div
                className={`col text-end text-wrap ${utilStyles.headingXL}`}
              >
                <p className={` ${utilStyles.verticalText}`}>find out more</p>{' '}
              </div>
            </div>
          </div>
        </section>
        <section className='page min-vh-100' alt='home page' id='home'>
          <div className='row' id='presentationGrid'>
            <div className='col-sm-6 justify-content-center'>
              <button className={`d-flex ${utilStyles.bigMoon}`}>
                {/* not convinced */}
                <BrightMoon width='inherit' height='10rem'></BrightMoon>
              </button>
            </div>
            <div className='col-sm-6 border  border-primary'>
              <div className='row-3'>
                <h2
                  className={`px-4 border-bottom border-primary text-md-wrap ${utilStyles.heading2Xl}`}
                >
                  Hi, this is Paula
                </h2>
              </div>
              <div className={`row-3 px-4 text-wrap ${utilStyles.headingXL}`}>
                <p className='description pb-5 mb-5'>I do this and that.</p>
              </div>
              <div className={`row-6 text-wrap ${utilStyles.headingXL}`}>
                <p
                  className={`text-end border-start border-primary h-50 ${utilStyles.verticalText}`}
                >
                  find out more
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className='page min-vh-100' id='about' alt='about page'>
          <div
            className='row mt-5 pt-5 border-bottom border-primary'
            id='upper'
          >
            <div className='col-sm-5' id='imPaula'>
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

          <div className='row py-4 border-bottom border-primary' id='mid'>
            <div className='col-sm-5' id='photoAndLife'>
              <div className='profilePic pb-4 float-end'>
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
            <div className='col-sm-7 border-primary' id='statement'>
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

          <div className='row pt-4' id='bottom'>
            <div className='col-sm-5' id='info'>
              <h4 className={`${utilStyles.headingLg}`}>
                Check out my{' '}
                <a
                  className='fw-bold text-decoration-none'
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
                  className='fw-bold text-decoration-none'
                  href='#findme'
                  alt='link to contact-me page'
                  color='primary'
                >
                  me
                </a>{' '}
              </h4>
            </div>

            <div className='d-flex flex-column justify-content-center col-sm-2'>
              <h4 className={`text-end text-wrap ${utilStyles.headingLg}`}>
                IT Skills
              </h4>
            </div>
            <div className={`col-sm-2 ${utilStyles.textDescriptions}`}>
              <ul className='border-start border-primary'>
                {' '}
                <li>Figma</li>
                <li>Procreate</li>
                <li>Notion</li>
              </ul>
            </div>
            <div
              className={`d-flex flex-column justify-content-center col-sm-2 ${utilStyles.textDescriptions}`}
            >
              <ul className=''>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
              </ul>
            </div>
          </div>
        </section>

        <section className='page' id='findme' alt='find me contact page'>
          <div className='grid border border-primary mx-100'>
            <div className='row'>
              <div className='col-sm-3'>.</div>
              <div className='col-sm-2'>!</div>
              <div className={`col-sm-6 text-end ${utilStyles.headingXl}`}>
                Contact me
              </div>
              <div className='col-sm-1'>!</div>
            </div>
            <div className='row'>
              <div className='col-sm-3 text-end'>
                <p className={`${utilStyles.headingLg}`}>
                  Paula Romero de Blas
                </p>
                <p className={` ${utilStyles.headingMd}`}>/pawla/</p>
                <p className={` ${utilStyles.textDescriptions}`}>
                  Paula Romero de Blas
                </p>
              </div>
              <div
                className={`col-sm-2 text-center ${utilStyles.textDescriptions}`}
              >
                hi@paulardb.design
              </div>
              <div className='col-sm-3'></div>
              <div className='row'>
                <div className='col-sm-3'></div>
                <div className='col-sm-2 text-end'>
                  <ul className='socialMedia-list'>
                    <div className={utilStyles.iconContainer}>
                      <Link
                        className='socialMediaLinks py-2'
                        href='https://www.instagram.com/inpaulasmind/'
                      >
                        <a target='_blank' alt='Instagram link @inpaulasmind'>
                          <IgOn className={utilStyles.icon}></IgOn>
                          <IgOff className={utilStyles.icon}></IgOff>
                        </a>
                      </Link>
                    </div>
                    <div className={utilStyles.iconContainer}>
                      <Link
                        className='socialMediaLinks py-2'
                        href='https://github.com/prrr17/'
                      >
                        <a target='_blank' alt='GitHub link @prrr17'>
                          <GhOn className={utilStyles.icon}></GhOn>
                          <GhOff className={utilStyles.icon}></GhOff>
                        </a>
                      </Link>
                    </div>
                    <div className={utilStyles.iconContainer}>
                      <Link
                        className='socialMediaLinks py-2'
                        href='https://www.linkedin.com/in/paula-romero-de-blas/'
                      >
                        <a
                          className={utilStyles.iconContainerLink}
                          target='_blank'
                          alt='LinkedIn link @paula-romero-de-blas'
                        >
                          <InOn className={utilStyles.icon}></InOn>
                          <InOff className={utilStyles.icon}></InOff>
                        </a>
                      </Link>
                    </div>
                    <div className={utilStyles.iconContainer}>
                      <Link
                        className='socialMediaLinks'
                        href='https://www.behance.net/paulardb'
                        target='_blank'
                      >
                        <a alt='Behance @paulardb'>
                          <BeOn className={utilStyles.icon}></BeOn>
                          <BeOff className={utilStyles.icon}></BeOff>
                        </a>
                      </Link>
                    </div>
                  </ul>
                </div>
                <div className='col-sm-3'></div>
                <Test></Test>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
