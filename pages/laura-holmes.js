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
import Pic from '/public/images/Avatar.jpg';
import LandingPage from '/public/LauraHolmes/mainPicture.png';
import AboutPage from '/public/LauraHolmes/aboutPicture.png';
import SkillsPicture from '/public/LauraHolmes/skillsPicture.png';
import ContactPage from '/public/LauraHolmes/contactPicture.png';
import DancingGif from '/public/LauraHolmes/dancing.gif';
import DesigningPicture from '/public/LauraHolmes/designingPicture.png';
import Inspo from '/public/LauraHolmes/inspiration.png';
import PortfolioPicture from '/public/LauraHolmes/seePortfolioPicture.png';
import OtherBrandingPicture from '/public/LauraHolmes/otherBrandingPicture.png';
import FigmaPicture from '/public/LauraHolmes/figmaPicture.png';

const design_template = () => {
  return (
    <div>
      <Head>
        <title>{siteTitle} Laura Holmes's Portfolio </title>
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
                Laura Holmes's Creative Portfolio Website{' '}
              </h2>
            </div>
            <div className='col-sm-6 align-items-end d-flex pb-3' id='cel1.2'>
              <h3 className={utilStyles.headingXl}>
                {' '}
                Creative Director & Stylist{' '}
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
                  src={LandingPage}
                  alt='landing page screenshot'
                />
              </div>

              <div
                className={`py-4 pe-3 float-end ${utilStyles.designsPicBox}`}
              >
                <Image
                  className={`ms-0 ${utilStyles.designsPic}`}
                  src={Inspo}
                  alt='Inspiration from her 2023 branding portfolio'
                />
              </div>
              <div
                className={`py-4 pe-3 float-end ${utilStyles.designsPicBox}`}
              >
                <Image
                  className={`ms-0 ${utilStyles.designsPic}`}
                  src={FigmaPicture}
                  alt='Figma screen from the mockups'
                />
              </div>
              <div
                className={`py-4 pe-3 float-end ${utilStyles.designsPicBox}`}
              >
                <Image
                  className={`ms-0 ${utilStyles.designsPic}`}
                  src={OtherBrandingPicture}
                  alt='trying out different branding, main page screenshot'
                />{' '}
              </div>
              <p>
                Trying out another palette provided by Laura Holmes, different
                branding.{' '}
              </p>
            </div>
            <div className='col' id='cel2.2'>
              <div className='row d-flex align-items-center border-bottom'>
                <div className='container my-5'>
                  <h4 className={utilStyles.headingLg}>1. Project Overview</h4>{' '}
                  <p>
                    <b>Project</b>: Laura Holmes Creative Portfolio Website{' '}
                  </p>
                  <p>
                    <b>Client</b>: Laura Holmes, Fashion Communications Graduate
                  </p>
                  <p>
                    <b>Project Date</b>: August 2024
                  </p>
                  <p>
                    <b>Role</b>: UX/UI Designer, Web Developer
                  </p>
                </div>
              </div>
              <div className='row d-flex align-items-center border-bottom'>
                <div className='col-sm-9'>
                  <div className='container my-5'>
                    <h5 className={utilStyles.headingMd}>Description</h5>{' '}
                    <p>
                      Laura Holmes is a graduate of Fashion Communication at
                      Conde Nast University in London. The Laura Holmes Personal
                      Portfolio Website was created to serve as a dynamic
                      digital platform for Laura to present her creative
                      portfolio. The site highlights her past projects, career
                      goals, and personal achievements in a visually appealing
                      and user-friendly format. It features a minimalistic
                      design with strategic pops of color that draw attention to
                      the visual content, ensuring that her work stands out. The
                      project required adapting to evolving content needs,
                      integrating multimedia elements, and maintaining a
                      cohesive design that aligns with Laura's branding and
                      industry standards. The end result is a polished,
                      professional website that effectively communicates Laura's
                      expertise and vision to her target audience.
                    </p>
                  </div>
                </div>
                <div className='col-sm-3 d-flex align-items-center'>
                  <div className={`py-4 ${utilStyles.designsPicBox}`}>
                    <Image
                      className={`${utilStyles.designsPic}`}
                      src={DancingGif}
                      alt='dancing Marquess Gif'
                    />
                  </div>
                </div>
              </div>
              <div className='row d-flex align-items-center border-bottom'>
                <div className='container my-5'>
                  <h4 className={utilStyles.headingLg}>2. Problem Statement</h4>
                  <p>
                    {' '}
                    Laura needed a portfolio website that effectively showcased
                    her fashion projects, personal brand, and career
                    aspirations, followiung the guidelines and meeting the
                    requirements of her course assignment. The site had to
                    reflect her creative direction, be easy to navigate, and
                    allow future updates.
                  </p>
                  <p>
                    <b>Objective</b>: The objective was to create a visually
                    striking, user-friendly portfolio that highlights her work
                    while aligning with her personal branding and industry
                    standards, while meeting the requirements of her course
                    assignment.
                  </p>
                </div>
              </div>
              <div className='row'>
                <div className='container my-5'>
                  <h4 className={utilStyles.headingLg}>
                    3. Research & Discovery
                  </h4>
                  <p>
                    {' '}
                    <b>Understanding the Client</b>: The design was guided by
                    Laura's branding guidelines and target audience, which
                    includes potential employers and collaborators in the
                    fashion industry. My goal was to ensure that the website
                    reflected her artistic vision while also being functional
                    and accessible to those viewing her portfolio.
                  </p>
                </div>
                <div className='container my-5'>
                  <h4 className={utilStyles.headingLg}>4. Design Process</h4>
                  <p>
                    {' '}
                    <b>Moodboard & Style Guide</b>: Based on the provided media
                    and branding guidelines, I crafted a look that would best
                    showcase Laura's talents as a creative director and stylist.
                    The palette was kept minimalistic with a splash of bright
                    orange as an accent, ensuring that the imagery took center
                    stage and conveyed her artistic vision. Minimalistic colors
                    with an explosion of orange and bold yet elegant lines and
                    fonts are the main visual components of her branding.
                  </p>
                  <p>
                    <b>Mockups & Prototypes</b>: Using the moodboard and style
                    guide, I created mockups and prototypes in Figma. These were
                    shared with Laura for initial feedback, allowing us to
                    refine the visual aspects before moving into full
                    development.
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
                <h4 className={utilStyles.headingLg}>
                  5. Development & Implementation
                </h4>
                <p>
                  <b>Tools & Technologies</b>: The mockups and prototypes were
                  made using Figma and then re-done in Wix. Although the layout
                  had to be adjusted due to additional content being provided
                  after the first submission, I made sure that the website
                  remained cohesive and aligned with Laura's brand identity.
                </p>
                <p>
                  <b>Building the Site</b>: The development process involved
                  setting up the site framework on Wix, implementing Laura's
                  content, and making necessary customizations to enhance
                  functionality. This included image galleries and PDFs
                  tranbsformed into image galleries to display her portfolio
                  pieces effectively.
                </p>
              </div>
            </div>

            <div className='col' id='cel3.2'>
              <div className={`${utilStyles.profilePicBox} float-end`}>
                <Image
                  className={`ms-0 p-0 ${utilStyles.designsPic}`}
                  src={DesigningPicture}
                  alt='Wix screenshot'
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
                <div
                  className={`py-4 pe-3 float-end ${utilStyles.designsPicBox}`}
                >
                  <Image
                    className={`ms-0 ${utilStyles.designsPic}`}
                    src={AboutPage}
                    alt='about page screenshot'
                  />
                </div>
              </div>
            </div>
            <div className='col-sm-6' id='cel4.2'>
              <div className='row border-bottom'>
                <div className='container my-5'>
                  <h4 className={utilStyles.headingLg}>6. Final Design</h4>
                  <p>
                    Check her website{' '}
                    <Link
                      href='https://www.lauraholmes.uk'
                      className={`fw-bold ${utilStyles.underlined}`}
                      target='_blank'
                      rel='noopener noreferrer'
                      alt='link to the portfolio of Laura Holmes'
                    >
                      here.
                    </Link>
                    — password: PPP
                  </p>
                </div>
              </div>
              <div className='row'>
                <div className='container my-5'>
                  <h4 className={utilStyles.headingLg}>
                    7. Challenges & Solutions
                  </h4>
                  <p>Loren Ipsum</p>
                  <p>
                    <b>Project Scope Changes</b>: One of the key challenges was
                    adapting the website to accommodate additional content after
                    the design and layout had been finalized. This required
                    reworking the initial design and ensuring that the new
                    content was integrated seamlessly. I also addressed Laura's
                    request to include flick-through PDFs rather than simple
                    links, by exploring alternative solutions to ensure ease of
                    viewing.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='row d-flex justify-content-center border-bottom'>
            <div className='container my-2 pt-2'>
              {' '}
              <h3 className='text-center'>8. Outcome & Reflections</h3>
            </div>
            <p>
              <b>Client Satisfaction</b>: Laura expressed her satisfaction with
              the final product, appreciating the website's aesthetic alignment
              with her brand and its functionality. Despite the challenges of
              adding content late in the process, she was pleased with how
              smoothly the changes were integrated and how the website
              effectively showcases her work.
            </p>

            <p>
              <b>Reflections</b>: Through this project, I learned the importance
              of clear communication and setting boundaries regarding project
              scope. I also realized the need for securing all content before
              finalizing the layout to avoid last-minute changes. This
              experience has reinforced my ability to manage client expectations
              and adapt to changing project requirements.
            </p>
            <div className={`${utilStyles.designsPicBox} my-2 mx-0`}>
              <Image
                className={`ms-0 ${utilStyles.designsPic}`}
                src={LandingPage}
                alt='landing page screenshot'
              />
            </div>
            <div className={`${utilStyles.designsPicBox} my-2 mx-0`}>
              <Image
                className={`ms-0 ${utilStyles.designsPic}`}
                src={AboutPage}
                alt='about page screenshot'
              />
            </div>
            <div className={`${utilStyles.designsPicBox} my-2 mx-0`}>
              <Image
                className={`ms-0 ${utilStyles.designsPic}`}
                src={SkillsPicture}
                alt='skills section page screenshot'
              />
            </div>
            <div className={`${utilStyles.designsPicBox} my-2 mx-0`}>
              <Image
                className={`ms-0 ${utilStyles.designsPic}`}
                src={PortfolioPicture}
                alt='skills section page screenshot'
              />
            </div>
            <div className={`${utilStyles.designsPicBox} my-2 mx-0`}>
              <Image
                className={`ms-0 ${utilStyles.designsPic}`}
                src={ContactPage}
                alt='contact page screenshot'
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
