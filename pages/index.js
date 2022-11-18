import Head from 'next/head';
import Image from 'next/image';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.scss';
import BrightMoon from '../public/images/BrightMoon.svg';
import ProfilePic from '../public/images/profile.jpeg';
import Test from '../components/Test';
import 'animate.css';
import SMIcons from '../components/SMIcons';
import Blobs from '../components/Blobs';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
        <link rel='icon' href='/p_logo.ico' />
      </Head>

      <div className={`mt-5 ${utilStyles.allPages}`}>
        <div className='background'>
          {' '}
          <Blobs />
        </div>

        <section
          className={`mx-auto mt-5 ${utilStyles.page}`}
          alt='landing page'
          id='landing'
        >
          <div className='row'>
            <div className='col-md-6'>
              <h3 className={`${utilStyles.headingXl} text-end pe-5`}></h3>
            </div>
            <div className='col-md-6'>
              <div className={`${utilStyles.uxBox}`}>
                {' '}
                <h3
                  className={`${utilStyles.headingXl} text-md-end me-5`}
                  id='uxWord'
                  alt='ux'
                >
                  UX
                </h3>
              </div>{' '}
            </div>
          </div>
          <div className='row g-0'>
            <div className='col-md-6 col-sm-12'>
              {' '}
              <h1
                className={`ps-1 text-md-end ${utilStyles.heading3Xl} ${utilStyles}`}
              >
                Visual
              </h1>
              <hr className={`mx-auto ${utilStyles.underlineVD}`}></hr>
            </div>
            <div className='col-md-6 col-sm-12'>
              <div
                class={`${utilStyles.arrowDown} ${utilStyles.lineVertical}`}
              ></div>
              <div>
                {' '}
                <h1 className={`pt-n5 ms-3 ${utilStyles.heading3Xl}`}>
                  Designer
                </h1>
              </div>
            </div>
          </div>
          <div className='row pb-4'>
            <div className={utilStyles.findOutBox}>
              <p
                className={`mt-n5 animate__animated animate__fadeInDown animate__delay-1.5s ${utilStyles.verticalText}`}
              >
                find out more
              </p>{' '}
            </div>
          </div>
        </section>

        <section
          className={`mt-1 ${utilStyles.page}`}
          alt='home page'
          id='home'
        >
          <div className='row g-0' id='presentationGrid'>
            <div className='col-sm-6 d-flex mx-auto position-relative'>
              <button
                className={`align-items-center mx-auto rounded-circle ${utilStyles.bigMoon} animate__animated animate__flash`}
              >
                {/* not convinced */}
                <BrightMoon
                  width='inherit'
                  height='inherit'
                  viewBox={'0 0 150 150'}
                ></BrightMoon>
              </button>
            </div>
            <div className='col-sm-6'>
              <div className='row ms-4 border-bottom border-primary mx-2'>
                <h3
                  className={`text-md-wrap animate__animated animate__fadeInDown animate__delay-1s ${utilStyles.headingXl}`}
                >
                  Hi, this is Paula
                </h3>
              </div>
              <div
                className={`row px-4 pt-4 text-wrap ${utilStyles.headingXL}`}
              >
                <h4 className='description ms-3 pb-5 mb-5'>
                  I do this and that.
                </h4>
              </div>

              <div className={`row text-wrap ${utilStyles.headingXL}`}>
                <div className='col-md-1 d-flex g-0'>
                  <div
                    class={`ms-5 ${utilStyles.arrowDown} ${utilStyles.lineVertical2}`}
                  ></div>
                </div>
                <div className='col-md-11 g-0'>
                  <div className={utilStyles.findOutBox2}>
                    <p
                      className={`text-end h-50 animate__animated animate__fadeInDown animate__delay-1s ${utilStyles.verticalText}`}
                    >
                      find out more
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className={`me-md-5 ${utilStyles.page}`}
          id='about'
          alt='about page'
        >
          <div className='container-fluid'>
            <div className='row mt-5 pt-5' id='upper'>
              <div
                className='col-sm-5 border-bottom border-end border-primary'
                id='imPaula'
              >
                <h3 className={`text-end text-wrap ${utilStyles.headingXl}`}>
                  Hi, I am Paula
                </h3>
              </div>
              <div
                className='col-sm-7 border-bottom border-primary'
                id='paulaDescription'
              >
                <h4 className={`d-flex pt-4 ${utilStyles.headingLg}`}>
                  Social butterfly with daily metamorphoses
                </h4>
              </div>
            </div>

            <div className='row border-bottom border-primary' id='mid'>
              <div
                className='col-sm-5 border-end  border-primary'
                id='photoAndLife'
              >
                <div
                  className={` ${utilStyles.profilePicBox} py-4 pe-3 float-end`}
                >
                  <Image
                    className={` ${utilStyles.profilePic} ms-0`}
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
                      <h5
                        className={`text-end text-wrap ${utilStyles.headingMd}`}
                      >
                        Born in Barcelona, lived in
                      </h5>
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
                  <div className='row'>
                    <div
                      className='col-sm-11 d-block border-left border-primary'
                      id='born'
                    >
                      <h5
                        className={` text-end text-wrap mx-sm-auto ${utilStyles.headingMd}`}
                      >
                        Currently in
                      </h5>
                    </div>
                    <div
                      className={`col-sm-1 ${utilStyles.textDescriptions}`}
                      id='places'
                    >
                      <ul className='border-start border-primary'>
                        <li>Thailand</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-sm-7 border-primary py-4 ps-4' id='statement'>
                <p className={`d-flex ${utilStyles.textDescriptions}`}>Hey there,</p>
                <p className={`d-flex ${utilStyles.textDescriptions}`}>
                  Happy to see you here :){' '}
                </p>
                <p className={`d-flex ${utilStyles.textDescriptions}`}>
                  My name is Paula and, at uni, I studied sciences (of the sea)
                  and then English. Somewhat later on, I realized that I was
                  missing some creative expression to fill my days. Since I was
                  little, I connected with myself by drawing and creating
                  fictitious scenarios, both on paper and on other virtual
                  canvases —you know, classic city-kid afternoon activity—;
                  leading to eventually falling for art, design and fashion
                  —which have always stimulated me ever since. In these last few
                  years, I found myself amongst people who are professionally
                  involved in web/app development and design related tasks,
                  which inspired and motivated me a to make a career change,
                  pivoting towards these fields.
                </p>
                <p className={`d-flex ${utilStyles.textDescriptions}`}>
                  On a more personal side, I am quite Aristotelian in looking
                  for the "Golden Mean" in life —you can't spend the day in
                  front of a screen (can you?), so my other usual activities
                  often involve socializing with close people enjoying a
                  beer/coffee and a conversation, walking through cities and
                  nature, learning something new, reading (almost) everything
                  that falls into my hands, eat and cook yummy healthy food, the
                  sea, yoga, and exercising.{' '}
                </p>
                <p className={`d-flex ${utilStyles.textDescriptions}`}>
                  Let's create something meaningful (and beautiful) together 🌻
                </p>
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
                <h5 className={`${utilStyles.headingMd}`}>
                  Check out my{' '}
                  <a
                    className={`fw-bold text-decoration-none ${utilStyles.headingMd}`}
                    href='/Romero-de-Blas_Paula-cv.pdf'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    resume
                  </a>{' '}
                </h5>
                <h5 className={`${utilStyles.headingMd}`}>
                  Contact{' '}
                  <a
                    className={`fw-bold text-decoration-none ${utilStyles.headingMd}`}
                    href='#findme'
                    alt='link to contact-me page'
                    color='primary'
                  >
                    me
                  </a>{' '}
                </h5>
              </div>

              <div className='d-flex flex-column justify-content-center col-sm-2 pt-4'>
                <h5 className={`text-end text-wrap ${utilStyles.headingMd}`}>
                  IT Skills
                </h5>
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
          className={`max-vh-100 pt-5 mt-5 ps-5 ms-2  ${utilStyles.page}`}
          id='findme'
          alt='find me contact page'
        >
          <div className='container pt-5 mt-5 mx-lg-5 mx-md-4'>
            <div className='row'>
              <div className='col-sm-4'>
                <p className={utilStyles.headingXl}></p>
              </div>
              <div className={`col-sm-2`}>
                <p className={utilStyles.headingXl}></p>
              </div>
              <div className={`col-sm-6  border-primary border-end text-end`}>
                <h3 className={`me-5 ${utilStyles.headingXl}`}>Contact me</h3>
              </div>
            </div>
            <div className='row'>
              {' '}
              {/* row that contains 2 tables */}
              <div className='col-xs-12 col-md-6'>
                {/*COL 1 for the email*/}
                <div className='row '>
                  {' '}
                  {/* row that has name and hi*/}
                  <div className='col-xs-12 col-sm-6 border-top border-end border-primary text-end py-3'>
                    {/*1 COL for the name*/}
                    <div className=''>
                      <p className={`${utilStyles.headingLg}`}>
                        Paula Romero de Blas
                      </p>
                      <p className={` ${utilStyles.headingMd}`}>/pawla/</p>
                      <p className={` ${utilStyles.textDescriptions}`}>
                        she/her/hers
                      </p>
                    </div>
                  </div>
                  <div className='col-xs-12 col-sm-6 border-top border-end border-primary d-flex justify-content-center align-items-center py-5'>
                    {' '}
                    {/*COL for the email*/}
                    <p
                      className={`align-self-center mb-0 ${utilStyles.textDescriptions} ${utilStyles.mail}`}
                    >
                      hi@paulardb.design
                    </p>
                  </div>
                </div>
                <div className='row border-top border-primary'>
                  {/*row with nothing and SM*/}
                  <div className={`col-sm-6 border-end border-primary`}></div>
                  <div
                    className={`col-sm-6 border-end border-primary text-end text-align-center`}
                  >
                    {' '}
                    <SMIcons />
                  </div>
                </div>
              </div>
              <div className='border-top border-primary-xs col-xs-12 col-md-6 ps-0 pe-5 pb-0 border-end border-bottom border-primary d-flex'>
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
