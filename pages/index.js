import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.scss';
import ProfilePic from '../public/images/profile.jpeg';
import Avatar from '../public/images/Avatar1.png';
import Test from '../components/Test';
import 'animate.css';
import SMIcons from '../components/SMIcons';
import Blobs from '../components/Blobs';
import Footer from '../components/Footer';
import BigMoonSwitch from '../components/BigMoonSwitch';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
        <link rel='icon' href='/p_logo.ico' />
      </Head>

      <div className={`mt-5 w-100 ${utilStyles.allPages}`}>
        <div className='background'>
          {' '}
          <Blobs />
        </div>

        <section
          className={`mx-auto mt-3 ${utilStyles.scrollingPage}`}
          alt='landing page'
          id='landing'
        >
          <div className='row'>
            <div className='col'>
              <div className={`text-center text-lg-end ${utilStyles.uxBox}`}>
                {' '}
                <h2
                  className={`${utilStyles.headingXl} ${utilStyles.uxWord}`}
                  alt='ux'
                >
                  UX
                </h2>
              </div>{' '}
            </div>
          </div>
          <div className='mx-0 row g-0'>
            <div className='col-lg-6 col-12 pr-3'>
              {' '}
              <h1
                className={`text-lg-end ${utilStyles.heading4Xl} ${utilStyles.visualText}`}
              >
                <span className={`ms-0 ps-0 ${utilStyles.underV}`}>
                  Visual&nbsp;
                </span>
              </h1>
            </div>
            <div className='col-lg-6 col-12'>
              <div
                className={`${utilStyles.arrowDown} ${utilStyles.lineVertical}`}
              ></div>
              <div>
                {' '}
                <h1
                  className={`${utilStyles.heading4Xl} ${utilStyles.designerText}`}
                >
                  <span className={`text-nowrap ${utilStyles.underD}`}>
                    Desi
                  </span>
                  gner
                </h1>
              </div>
            </div>
          </div>
          <div className='row pb-4'>
            <div className={utilStyles.findOutBox}>
              <Link href='#home'>
                <p
                  className={`animate__animated animate__fadeInDown animate__delay-1.5s ${utilStyles.verticalText}`}
                >
                  find out more
                </p>{' '}
              </Link>
            </div>
          </div>
        </section>

        <section
          className={`mb-4 pb-3 ${utilStyles.scrollingPage}`}
          alt='home page'
          id='home'
        >
          <Blobs />
          <div className='mt-md-4 pt-md-5 row g-0' id='presentationGrid'>
            <div className='col-sm-6 d-flex mx-auto position-relative'>
              <button
                className={`align-items-center mx-auto
               rounded-circle ${utilStyles.bigMoon} animate__animated animate__flash`}
              >
                {/* not convinced */}
                <BigMoonSwitch
                  width='inherit'
                  height='inherit'
                  // objectFit='contain'
                ></BigMoonSwitch>
              </button>
            </div>
            <div className='col-sm-6'>
              <div className='row ms-md-4 border-bottom mx-2'>
                <h3
                  className={`text-md-wrap animate__animated animate__fadeInDown animate__delay-1s ${utilStyles.headingXl}`}
                >
                  Hi, this is Paula
                </h3>
              </div>
              <div className={`row px-4 pt-4  text-wrap`}>
                <h5 className={`pb-5 mb-5 ms-2 ${utilStyles.headingMd}`}>
                  <span>Do you like what you see? </span>
                  <span>
                    I have designed and coded this portfolio website from
                    scratch{' '}
                  </span>
                </h5>
              </div>

              <div className={`row text-wrap ${utilStyles.headingXL}`}>
                <div className='col-md-1 d-flex g-0'>
                  <div
                    className={`ms-5 ${utilStyles.arrowDown} ${utilStyles.lineVertical2}`}
                  ></div>
                </div>
                <div className='col-md-11 g-0'>
                  <div className={utilStyles.findOutBox2}>
                    <Link href='#about'>
                      <p
                        className={`text-end h-50 animate__animated animate__fadeInDown animate__delay-1s ${utilStyles.verticalText} ${utilStyles.verticalText2}`}
                      >
                        find out more
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className={`me-md-5 pb-3 ${utilStyles.scrollingPage}`}
          id='about'
          alt='about page'
        >
          <Blobs />
          <div className='container-fluid'>
            <div className='row mt-1 pt-2' id='upper'>
              <div className='col-sm-5 border-bottom border-end ' id='imPaula'>
                <h3 className={`text-end text-wrap ${utilStyles.headingXl}`}>
                  Hi, I am Paula
                </h3>
              </div>
              <div className='col-sm-7 border-bottom' id='paulaDescription'>
                <h4 className={`d-flex pt-4 ${utilStyles.headingLg}`}>
                  Social butterfly with daily metamorphoses
                </h4>
              </div>
            </div>

            <div className='row border-bottom' id='mid'>
              <div className='col-sm-5 border-end  ' id='photoAndLife'>
                <div
                  className={`${utilStyles.designsPicBox} py-4 pe-3 float-end`}
                >
                  <Image
                    className={`${utilStyles.designsPic} ms-0`}
                    src={ProfilePic}
                    alt='profile picture'
                  />
                </div>
                <div className='col-sm-7' id='bornAndPlaces'>
                  <div className='row'>
                    <div className='col-sm-11 border-left' id='born'>
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
                      <ul className='border-start'>
                        <li>California</li>
                        <li>Italy</li>
                        <li>Canarias</li>
                        <li>Norway</li>
                        <li>Greece</li>
                        <li>UK</li>
                        <li>Indonesia</li>
                        <li>Thailand</li>
                        <li>Japan</li>
                      </ul>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col-sm-11 d-block border-left' id='born'>
                      <h5
                        className={`text-end text-wrap mx-sm-auto ${utilStyles.headingMd}`}
                      >
                        Currently in
                      </h5>
                    </div>
                    <div
                      className={`col-sm-1 ${utilStyles.textDescriptions}`}
                      id='places'
                    >
                      <ul className='border-start'>
                        <li>
                          <Link
                            href='https://maps.app.goo.gl/UpSzsqjrfH65VFUX7'
                            alt='open Google Maps with location'
                            rel='noopener noreferrer'
                            target='_blank'
                          >
                            Gran Canaria
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`col-sm-7 py-4 ps-4`} id='statement'>
                <div className={utilStyles.textDescriptions}>
                  <p>Hey there,</p>
                  <p>
                    I'm Paula, and it's great to have you here! I'm a curious
                    cat with a passion for visual design, a love the for sea,
                    who happens to have a background in marine sciences and
                    oceanography.{' '}
                  </p>
                  <p>
                    But I need to say, my heart beats for art, fashion, and all
                    things design. That's why I've taken it upon myself to dive
                    deep into the world of coding and (UX) design,
                  </p>
                  <p>
                    As a people person, I always put humans first in my design
                    work. I believe that technology should be accessible and
                    easy to use for everyone, and it is possible to do so
                    without sacrificing aesthetics. That's why I've taken it
                    upon myself to learn everything I can about coding, (UX)
                    design, and more (check out my{' '}
                    <Link
                      href='cv_Paula-rdb.pdf'
                      className={`fw-bold ${utilStyles.textDescriptions}`}
                      target='_blank'
                      rel='noopener noreferrer'
                      alt='link to my cv/resume as a pdf'
                    >
                      CV here
                    </Link>{' '}
                    :) !), so I can create beautiful designs that bring people
                    and tech closer together, because I believe the best designs
                    are those that make us go "Wow!" (and improve our lives at
                    the same time).{' '}
                  </p>{' '}
                  <p>
                    When I'm not busy designing, you can find me hanging out
                    with my closest peeps, enjoying a beer or coffee at a
                    terrace, exploring new cities and nature, learning new
                    things, devouring all kinds of reading materials, cooking up
                    healthy and yummy meals, practicing yoga, and/or (hopefully)
                    getting my ocean fix.
                  </p>{' '}
                  <p className='text-center'>•</p>
                  <p>
                    Let's{' '}
                    <Link
                      href='#findme'
                      className={`fw-bold ${utilStyles.textDescriptions}`}
                      rel='noopener noreferrer'
                      alt='link to my contact page'
                    >
                      collaborate{' '}
                    </Link>{' '}
                    and create designs that will make the world a more
                    beautiful, functional, and fun place to be 🌻.
                  </p>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-sm-7' id='bornLife'>
                {' '}
              </div>
            </div>

            <div className='row' id='bottom'>
              <div className='col-sm-5 border-end pt-4' id='info'>
                <h5 className={`${utilStyles.headingMd}`}>
                  {' '}
                  <Link
                    href='cv_Paula-rdb.pdf'
                    target='_blank'
                    rel='noopener noreferrer'
                    alt='link to my cv/resume as a pdf'
                  >
                    {' '}
                    Check out my{' '}
                    <span className={`fw-bold ${utilStyles.underlined}`}>
                      resume
                    </span>{' '}
                  </Link>
                </h5>
                <h5 className={`${utilStyles.headingMd}`}>
                  <Link href='#findme' alt='link to contact-me page'>
                    Let's{' '}
                    <span className={`fw-bold ${utilStyles.underlined}`}>
                      connect
                    </span>
                  </Link>
                </h5>
              </div>
              <div className='d-flex flex-column justify-content-center col-sm-2 pt-4'>
                <h5 className={`text-end text-wrap ${utilStyles.headingMd}`}>
                  IT Skills
                </h5>
              </div>
              <div className={`col-sm-2 pt-5 ${utilStyles.textDescriptions}`}>
                <ul className='justify-content-center border-start'>
                  {' '}
                  <li>Figma</li>
                  <li>Procreate</li>
                  <li>Notion</li>
                </ul>
              </div>
              <div
                className={`d-flex flex-column col-sm-2 pt-3 ${utilStyles.textDescriptions}`}
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
          className={`min-vh-100 w-100 pt-5 ps-2 mx-auto ${utilStyles.scrollingPage}`}
          id='findme'
          alt='find me contact page'
        >
          <Blobs />
          <div className='container pt-4 mx-lg-5 mx-md-4'>
            <div className={`row border-end text-end`}>
              <h3 className={`pe-5 text-end ${utilStyles.headingXl}`}>
                Contact me
              </h3>
            </div>
            <div className='row'>
              {' '}
              {/* row that contains 2 tables */}
              <div className='col-xs-12 col-md-7'>
                {/*COL 1 for the email*/}
                <div className='row'>
                  {' '}
                  {/* row that has name and hi*/}
                  <div className='col-xs-12 col-sm-5 col-lg-7 border-top border-end text-end py-3'>
                    {/*1 COL for the name*/}
                    <div className=''>
                      <h4 className={`${utilStyles.headingLg}`}>
                        Paula Romero de Blas
                      </h4>
                      <h5 className={`${utilStyles.headingMd}`}>/pawla/</h5>
                      <p className={` ${utilStyles.textDescriptions}`}>
                        she/her/hers
                      </p>
                    </div>
                  </div>
                  <div className='col-xs-12 col-sm-7 col-lg-5 border-top border-end d-flex justify-content-center align-items-center py-5'>
                    {' '}
                    {/*COL for the email*/}
                    <p
                      className={`align-self-center mb-0 ${utilStyles.textDescriptions} ${utilStyles.mail}`}
                    >
                      <Link
                        href='mailto:                      hi@paulardb.design'
                        rel='noopener noreferrer'
                        target='_blank'
                        alt='open email provider to email'
                      >
                        hi@paulardb.design
                      </Link>
                    </p>
                  </div>
                </div>
                <div className='row border-top '>
                  {/*row with nothing and SM*/}
                  <div className={`col-lg-7 col-sm-5 border-end`}></div>
                  <div
                    className={`col-lg-5 col-sm-7 border-end text-end text-align-center`}
                  >
                    {' '}
                    <SMIcons />
                  </div>
                </div>
              </div>
              <div className='border-top col-xs-12 col-md-5 ps-0 pe-5 pb-0 border-end border-bottom d-flex'>
                <div className={utilStyles.designsPicBox}>
                  <Image
                    className={`${utilStyles.designsPic} ms-0`}
                    src={Avatar}
                    alt='profile picture'
                  />
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
}
