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
import ArtbarMain from '../public/Artbar/artbarmain.png';
import ArtbarMainRed from '../public/Artbar/artbarmain-red.png';
import CreditsPage from '../public/Artbar/CreditsPage.png';
import Menu1 from '../public/Artbar/menupage.png';
import MenuRed from '../public/Artbar/menupage-red.png';
import FavIdea from '../public/Artbar/favIdea.png';
import Menus from '../public/Artbar/menus.png';
import Midjourney from '../public/Artbar/midjourney.png';
import Grabado1 from '../public/Artbar/Grabado1.png';
import Grabado6 from '../public/Artbar/Grabado6.png';
import OtherVersions from '../public/Artbar/otherVersions.png';
import OriginalIdea from '../public/Artbar/originalIdea.png';
// import PagesFirst from '../public/Artbar/pagesFirst.png';
import TestingFonts from '../public/Artbar/testingFonts.png';
// import contactPage from '../public/Artbar/contactpage.png';

const artbar = () => {
  return (
    <div>
      <Head>
        <title>{siteTitle} — ARTBAR Project</title>
        <link rel='icon' href='/p_logo.ico' />
      </Head>
      <Header />
      <Blobs />
      <section
        className='mt-2 pt-2 me-md-5 pb-3'
        id='artbarprject'
        alt='portfolio project page'
      >
        <div className='container-fluid'>
          <div className='row border-bottom mt-1 pt-2' id='firstrow'>
            <div className='col-sm-6 border-end' id='cel1_1'>
              <h2
                className={`text-end text-wrap py-4 ${utilStyles.heading2Xl}`}
              >
                {' '}
                ARTBAR{' '}
              </h2>
            </div>
            <div className='col-sm-6 align-items-end' id='cel1.2'>
              <h3 className={utilStyles.headingXl}>
                A Database of Barcelona Artisans from 1814 to 1860
              </h3>
            </div>
          </div>
          <div className='row border-bottom' id='secondrow'>
            <div className='col-sm-6 border-end pe-0 me-0' id='cel2_1'>
              <div className='container my-5'>
                <div className='row'>
                  <Image
                    className={`me-0 ${utilStyles.designsPic}`}
                    src={ArtbarMain}
                    alt='landing page picture'
                  />
                </div>
                <div className='row'>
                  <p>Landing page</p>
                </div>
                <div className='row'>
                  <Image
                    className={`ms-0 ${utilStyles.designsPic}`}
                    src={ArtbarMainRed}
                    alt='landing page picture hovering the title'
                  />
                </div>
                <div className='row pt-4 border-bottom'>
                  {' '}
                  <p className='pe-0'>Landing page — Title on hover</p>{' '}
                </div>{' '}
                <div className='container my-5'>
                  <div className='row'>
                    <div
                      className={`align-items-center ${utilStyles.designsPicBox}`}
                    >
                      {' '}
                      <Image
                        className={`ms-0 px-5 py-4 ${utilStyles.designsPic}`}
                        src={CreditsPage}
                        alt='credits page picture'
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col' id='cel2_2'>
              <div className='row d-flex align-items-center border-bottom'>
                <div className='container my-5'>
                  <h4 className={utilStyles.headingLg}>Overview</h4>
                  <p>
                    Artbar is a web-based database of artisans who worked in
                    Barcelona between 1814 and 1860. The client approached us
                    with the idea of creating a database that would preserve the
                    history of these artisans and their contributions to the
                    city's culture and economy.
                  </p>
                  <p>
                    The project was a collaboration between myself, who led the
                    design process, and{' '}
                    <Link
                      href='https://www.nubeame.com/'
                      className={`fw-bold ${utilStyles.underlined}`}
                      target='_blank'
                      rel='noopener noreferrer'
                      alt='Link to the website of Nubeame'
                    >
                      {' '}
                      Nubeame
                    </Link>
                    , the company responsible for creating the database and
                    back-end of the webpage. Our goal was to create a platform
                    that would make it easy make it easy for people and,
                    specially, researchers, to access information about these
                    artisans and gain a greater appreciation for their work and
                    the context in which they lived. In this case study, we will
                    discuss the background of the project, the design process,
                    the technologies we used, features of the page, the
                    potential impact, and conclusions.
                  </p>
                </div>
              </div>
              <div className='row d-flex align-items-center border-bottom'>
                <div className='container my-5'>
                  <h4 className={utilStyles.headingLg}>Background</h4>
                  <p>
                    The Artbar webpage was created as part of the Research Group
                    "
                    <Link
                      href='http://www.ub.edu/tig/'
                      className={`fw-bold ${utilStyles.underlined}`}
                      target='_blank'
                      rel='noopener noreferrer'
                      alt='link to the Research Group'
                    >
                      Treballs, Institucions i Gènere de la Universitat de
                      Barcelona
                    </Link>
                    " of The University of Barcelona, and is sponsored by{' '}
                    <Link
                      href='https://www.ciencia.gob.es/en/'
                      className={`fw-bold ${utilStyles.underlined}`}
                      target='_blank'
                      rel='noopener noreferrer'
                      alt='link to The Ministry on Science and Innovation of the Spanish Government'
                    >
                      The Ministry on Science and Innovation of the Spanish
                      Government{' '}
                    </Link>{' '}
                    and{' '}
                    <Link
                      href='https://web.ub.edu/en/web/ub/'
                      className={`fw-bold ${utilStyles.underlined}`}
                      target='_blank'
                      rel='noopener noreferrer'
                      alt='link to The University of Barcelona'
                    >
                      The University of Barcelona
                    </Link>{' '}
                    itself. The project aims to preserve the cultural heritage
                    of Barcelona's artisans and make it available to a wider
                    audience. By creating a database of artisans and their work,
                    the project hopes to bring the history of Barcelona's
                    artisans accessible to researchers and other interested
                    individuals in general.
                  </p>
                </div>
              </div>
              <div className='row d-flex align-items-center'>
                    <div className='container my-5'>
                      {' '}
                      <h4 className={utilStyles.headingLg}>Role</h4>
                      <p>Designer and Front-end developer</p>{' '}
                    </div>
                  </div>
            </div>
          </div>
          <div className='row border-bottom' id='thirdrow'>
            <div className='col-sm-6 border-end' id='cel3_1'>
              <div className='row d-flex align-items-center ms-3  border-bottom'>
                <div className='container text-end my-5 py-4 pe-3 float-end'>
                  <h4 className={utilStyles.headingLg}>
                    Design and Development Process
                  </h4>
                  <p>
                    At the outset of the project, I drew inspiration from the
                    rich cultural and historical legacy of Barcelona's artisans
                    during the 1814 to 1860 time period. In order to create a
                    design that was both visually compelling and intuitive to
                    use, I carefully selected a color palette that featured a
                    minimalist combination of black, white, and a dark red (Barn
                    Red) for emphasis. To maintain the traditional aesthetic of
                    the city, I opted for a font pairing that included Garamond,
                    a classic serif font from the era, and Open Sans, a
                    contemporary sans-serif font. While I had a preferred design
                    idea, I recognized the importance of incorporating the
                    client's preferences into the final design. Through
                    collaboration and iteration, we arrived at a design that
                    balances modern usability with traditional design elements.
                    The design featured a landing page, project explanation
                    page, credits page, methodology page, contact form, and
                    access to the database. The website features a landing page,
                    project explanation page, credits page, methodology page,
                    contact form, and access to the database.
                  </p>
                </div>
              </div>
              <div className='row d-flex align-items-center ms-3 border-bottom'>
                <div className='container text-end my-5 py-4 pe-3 float-end'>
                  <p>
                    To showcase my design process, I have included images of the
                    alternate mockup ideas I explored in the early stages of the
                    project, along with annotations to explain my thought
                    process and design choices. These mockup ideas demonstrate
                    my creative approach to problem-solving and my ability to
                    consider multiple design options before arriving at a final
                    solution.
                  </p>
                </div>
              </div>
              <div className='row d-flex align-items-center ms-3'>
                <div className='container text-end my-5 py-4 pe-3 float-end'>
                  <p>
                    For the development process, I used HTML, CSS, and a small
                    amount of JavaScript. I faced common challenges during
                    development, including issues with cross-browser
                    compatibility and responsive design. However, I was able to
                    overcome these challenges through careful testing.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-sm-6' id='cel3_2'>
              {' '}
              <div className='row d-flex align-items-center'>
                <div className='container text-end mt-5 pe-5 float-end'>
                  <p>
                    Choosing and pairing fonts, creating the logo, and the
                    identity background.
                  </p>
                </div>
                <div className='row border-button'>
                  <div
                    className={`text-end mb-5 pe-3 float-end ${utilStyles.designsPicBox}`}
                  >
                    <Image
                      className={`ms-0 ${utilStyles.designsPic}`}
                      src={TestingFonts}
                      alt='Mockups picture'
                    />
                  </div>
                </div>
                <div className='row d-flex align-items-center ms-3'>
                  <div className='col-lg-7'>
                    <div className='container text-end my-5 py-4 pe-3 float-end'>
                      <p>
                        Here, displayed a few images of the topic, used for
                        inspiration, generated by{' '}
                        <Link
                          href='https://www.midjourney.com/home/'
                          className={`fw-bold ${utilStyles.underlined}`}
                          target='_blank'
                          rel='noopener noreferrer'
                          alt='link to the portfolio repository'
                        >
                          {' '}
                          Midjourney
                        </Link>
                        .{' '}
                      </p>
                      <p>
                        In the end we went for some original engraved imagerie
                        from{' '}
                        <i>
                          The Encyclopédie ou Dictionnaire raisonné des
                          sciences, des arts et des métiers, par une Société de
                          Gens de lettres{' '}
                        </i>{' '}
                        (1756-60).
                      </p>
                    </div>
                  </div>
                  <div className='col-lg-3 gx-0'>
                    <div className={`container my-2`}>
                      <Image
                        className={`ms-0 ${utilStyles.smallerPics}`}
                        src={Midjourney}
                        alt='Midjourney picture'
                      />
                    </div>
                  </div>
                  <div className='col-lg-2 gx-0'>
                    <div className={`my-2`}>
                      <Image
                        className={`ms-0 ${utilStyles.smallerPics}`}
                        src={Grabado1}
                        alt='Engraved picture'
                      />
                      <Image
                        className={`ms-0 ${utilStyles.smallerPics}`}
                        src={Grabado6}
                        alt='Engraved picture'
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className='row d-flex align-items-center border-bottom'
            id='fourthrow'
          >
            <div className='col-sm-6 border-end' id='cel4.1'>
              <div className='text-end py-4 pe-3 float-end'>
                <h4 className={utilStyles.headingLg}>Webpage Features</h4>
                <p>
                  The Artbar webpage features a landing page; a project
                  explanation page that provides users with detailed information
                  about the project and its purpose, as well as the information
                  found in the database itself. The methodology page outlines
                  the research and data collection process and sources, while
                  the credits page recognizes the contributions of the various
                  individuals and organizations involved in the project.
                  Finally, users can access the database by selecting specific
                  artisan categories or by searching for individual artisans.
                  There is also a contact page form for any suggestions and/or
                  inquiries.
                </p>{' '}
              </div>
            </div>

            <div className='col' id='cel4.2'>
              <div className='container my-5'>
                <h4 className={utilStyles.headingLg}>Impact</h4>
                <p>
                  The Artbar webpage has the potential to bring the history of
                  Barcelona's artisans closer to people and specialistsby making
                  it more accessible and understandable. Through the detailed
                  information provided on the project explanation and
                  methodology pages, users can gain a greater appreciation for
                  the artisans' work and the context in which they lived. The
                  webpage's user-friendly design and intuitive search
                  capabilities are designed to make it easy for people to
                  explore the database and learn more about the artisans who
                  lived and worked in Barcelona between 1814 and 1860.
                </p>
                <p>
                  Additionally, it's worth noting that the Artbar project was
                  carried out by the Research Group "
                  <Link
                    href='http://www.ub.edu/tig/'
                    className={`fw-bold ${utilStyles.underlined}`}
                    target='_blank'
                    rel='noopener noreferrer'
                    alt='link to the Research Group'
                  >
                    Treballs, Institucions i Gènere de la Universitat de
                    Barcelona
                  </Link>
                  ", and is sponsored by{' '}
                  <Link
                    href='https://www.ciencia.gob.es/en/'
                    className={`fw-bold ${utilStyles.underlined}`}
                    target='_blank'
                    rel='noopener noreferrer'
                    alt='link to The Ministry on Science and Innovation of the Spanish Government'
                  >
                    The Ministry on Science and Innovation of the Spanish
                    Government{' '}
                  </Link>{' '}
                  and{' '}
                  <Link
                    href='https://web.ub.edu/en/web/ub/'
                    className={`fw-bold ${utilStyles.underlined}`}
                    target='_blank'
                    rel='noopener noreferrer'
                    alt='link to The University of Barcelona'
                  >
                    The University of Barcelona
                  </Link>{' '}
                  . The project represents a collaborative effort among multiple
                  organizations to preserve the cultural heritage of Barcelona's
                  artisans and make it available to a wider audience. The Artbar
                  webpage is a testament to the value of interdisciplinary
                  collaboration and the importance of preserving history for
                  future generations.
                </p>
              </div>
            </div>
          </div>
          <div
            className='row d-flex align-items-center border-bottom'
            id='fourthrow'
          >
            <div className='col-sm-6 border-end' id='cel5.1'>
              <div className='text-end py-4 pe-3 float-end'>
                <h4 className={utilStyles.headingLg}>Conclusion</h4>
                <p>
                  Through the Artbar webpage, our aim is to create a space where
                  people can learn about and appreciate the work of Barcelona's
                  artisans from the 19th century. By collaborating with multiple
                  organizations, we believe we can bring history closer to
                  people and inspire a greater appreciation for the cultural
                  heritage of the city.
                </p>
              </div>
            </div>

            <div className='col' id='cel5.2'>
              <div className='container my-5'>
                <h4 className={utilStyles.headingLg}>Access and Interaction</h4>
                <p>
                  To view the website and its functionality, a temporary
                  deployment has been set up on Vercel and can be accessed{' '}
                  <Link
                    href='https://artbar-prrr17.vercel.app/index.html'
                    className={`fw-bold ${utilStyles.underlined}`}
                    target='_blank'
                    rel='noopener noreferrer'
                    alt='link to the portfolio repository'
                  >
                    {' '}
                    here
                  </Link>
                  . Additionally, the website's code is available for review on
                  GitHub
                  <Link
                    href='https://github.com/prrr17/Artbar'
                    className={`fw-bold ${utilStyles.underlined}`}
                    target='_blank'
                    rel='noopener noreferrer'
                    alt='link to the portfolio repository'
                  >
                    {' '}
                    here
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
          <div className='lastFewRows mb-4'>
            <div className='row d-flex justify-content-center'>
              <div className='container my-2 pt-2'>
                {' '}
                <h3 className='text-center'>Figma First Mockups</h3>
              </div>{' '}
            </div>
            <div className='row'>
              <p>Here is the original idea and some discarded mockups</p>
            </div>
            <div className='row d-flex justify-content-center'>
              {' '}
              <div className='col-sm-6'>
                <Image
                  className={`${utilStyles.reducedPic} me-0`}
                  src={OriginalIdea}
                  alt='original idea pages'
                />{' '}
              </div>
              <div className='col-sm-6 my-2'>
                <Image
                  className={`${utilStyles.reducedPic} ms-0`}
                  src={OtherVersions}
                  alt='other versions pictures'
                />
              </div>
            </div>
            <div className='row d-flex justify-content-center'>
              <div className='col-sm-6 my-2'>
                <p>This one was the one I intended to move forward with</p>
                <Image
                  className={`${utilStyles.reducedPic} me-0`}
                  src={FavIdea}
                  alt='original idea pages'
                />{' '}
              </div>
              <div className='col-sm-6 my-2'>
                <p>
                  These were the different menu options for the different
                  hamburger menu positions.
                </p>
                <Image
                  className={`${utilStyles.artbarMenusPic} ms-0`}
                  src={Menus}
                  alt='original idea pages'
                />{' '}
              </div>
            </div>
            <div className='row d-flex justify-content-center'>
              <div className='col-sm-6 my-2'>
                <Image
                  className={`${utilStyles.reducedPic} me-0`}
                  src={Menu1}
                  alt='original idea pages'
                />
              </div>
              <div className='col-sm-6 my-2'>
                <Image
                  className={`${utilStyles.reducedPic} ms-0`}
                  src={MenuRed}
                  alt='original idea pages'
                />
              </div>
            </div>
          </div>
        </div>
        <Test />
      </section>
      <Footer />
    </div>
  );
};

export default artbar;
