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
import iPadContribute from '/public/EcoOceanHub/iPad_contribute_R.png';
import iPadHome from '/public/EcoOceanHub/iPad_Home_front.png';
import iPadMenu from '/public/EcoOceanHub/iPad_Menu_R.png';
import iPadNotifications from '/public/EcoOceanHub/iPad_Notifications_front.png';
import iPhoneContribute from '/public/EcoOceanHub/iPhone_Contribute_R.png';
import iPhoneCreate from '/public/EcoOceanHub/iPhone_CreateScreens_D.png';
import iPhoneHome from '/public/EcoOceanHub/iPhone_Home_front.png';
import iPhoneMenu from '/public/EcoOceanHub/iPhone_Menu_front.png';
import iPhoneSettings from '/public/EcoOceanHub/iPhone_Settings_front.png';
import iPhoneMarineL from '/public/EcoOceanHub/iPhone_Marine_L.png';
import iPhoneMarineR from '/public/EcoOceanHub/iPhone_Marine_R.png';
import iPhoneMonthly from '/public/EcoOceanHub/iPhone_Monthly_front.png';
import iPhoneProfile from '/public/EcoOceanHub/iPhone_Profile_front.png';
import iPhoneProfileB from '/public/EcoOceanHub/iPhone_ProfileBottom_L.png';
import iPhoneSubmitted from '/public/EcoOceanHub/iPhone_submitted_front.png';
import MacbookL from '/public/EcoOceanHub/MacBook_L.png';
import EcoNavbar from '/public/EcoOceanHub/navbar.png';
import StickerSheet from '/public/EcoOceanHub/stickersheet.png';
import Contrast1 from '/public/EcoOceanHub/contrast.png';
import Contrast2 from '/public/EcoOceanHub/contrast2.png';
import Verified from '/public/EcoOceanHub/verified.png';

const ecoOceansHub = () => {
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
        id='ecoOceansHubPage'
        alt='Eco Oceans Hub Project Page'
      >
        <div className='container-fluid'>
          <div className='row border-bottom mt-1 pt-2' id='firstrow'>
            <div className='col-sm-6 border-end' id='cel1.1'>
              <h2
                className={`text-end text-wrap py-4 ${utilStyles.heading2Xl}`}
              >
                Eco Oceans Hub
              </h2>
            </div>
            <div className='col-sm-6 align-items-end d-flex pb-3' id='cel1.2'>
              <h3 className={utilStyles.headingXl}>
                {' '}
                Diving into Ocean Awareness{' '}
              </h3>
            </div>
          </div>
          <div className='row border-bottom' id='secondrow'>
            <div className='col-sm-6 border-end' id='cel2.1'>
              <div className='row'>
                <div
                  className={`py-4 px-3 float-end ${utilStyles.designsPicBox}`}
                >
                  <Image
                    className={`ms-0 ${utilStyles.designsPicSmaller}`}
                    src={iPhoneHome}
                    alt='portfolio concept picture'
                  />
                </div>
              </div>
              <div className='row'>
                <div
                  className={`py-4 px-3 float-end ${utilStyles.designsPicBox}`}
                >
                  {' '}
                  <Image
                    className={`ms-0 p-0 ${utilStyles.designsPicSmaller}`}
                    src={iPhoneMonthly}
                    alt='iPhone, Monthly Cause page'
                  />
                </div>
              </div>
              <div className='row'>
                <div
                  className={`py-4 px-3 float-end ${utilStyles.designsPicBox}`}
                >
                  {' '}
                  <Image
                    className={`ms-0 p-0 ${utilStyles.mockupPic}`}
                    src={iPhoneCreate}
                    alt='iPhone, Create page'
                  />
                </div>
              </div>
            </div>
            <div className='col-sm-6' id='cel2.2'>
              <div className='row d-flex align-items-center'>
                <div className='container my-5'>
                  <h4 className={utilStyles.headingLg}>
                    {' '}
                    Summary of the Project
                  </h4>
                  <p>
                    {' '}
                    Our project, tentatively named Eco Oceans Hub, emerged from
                    the need to create a platform that not only educates but
                    actively engages individuals and organizations in marine
                    conservation efforts. The overarching goal was to develop a
                    user-centric application that fosters knowledge sharing,
                    encourages participation, and contributes to the global
                    initiative of preserving our oceans.
                  </p>
                  <p>
                    This endeavor stemmed from recognizing the critical role
                    that technology can play in mobilizing communities and
                    creating awareness around marine conservation. By leveraging
                    innovative design principles and user experience strategies,
                    our aim was to build a platform that transcends typical
                    educational apps and becomes a dynamic hub for marine
                    enthusiasts, scientists, and conservationists.
                  </p>{' '}
                  <p>
                    The project unfolded in multiple phases, each meticulously
                    designed to align with the overarching goal. From initial
                    ideation to user testing and iterative improvements, we
                    navigated through challenges and embraced opportunities,
                    ensuring the final product reflects a harmonious balance of
                    functionality and user delight. This case study delves into
                    the intricacies of this design journey, presenting insights,
                    challenges, and the collaborative efforts that shaped Eco
                    Oceans Hub.
                  </p>
                  {/* this goes somewhere else */}
                  <p>
                    If you are eager to explore the phone prototype, you can do
                    so by visiting this{' '}
                    <Link
                      href='https://www.figma.com/proto/e5gVeg0MTbrVkAhRZYHCiH/Project-3?page-id=0%3A1&type=design&node-id=476-5670&viewport=275%2C440%2C0.05&t=N9k4ces0zO5cjUeb-1&scaling=scale-down&starting-point-node-id=476%3A5670&mode=design'
                      className={`fw-bold ${utilStyles.underlined}`}
                      target='_blank'
                      rel='noopener noreferrer'
                      alt='link to the phone prototype on Figma of Eco Ocenas Hub'
                    >
                      link.
                    </Link>{' '}
                    For the tablet prototype{' '}
                    <Link
                      href='https://www.figma.com/proto/e5gVeg0MTbrVkAhRZYHCiH/Project-3?page-id=353%3A8050&type=design&node-id=361-10220&viewport=6576%2C3253%2C0.68&t=lTPC17LluHbrfaPl-1&scaling=scale-down&starting-point-node-id=361%3A10220&mode=design'
                      className={`fw-bold ${utilStyles.underlined}`}
                      target='_blank'
                      rel='noopener noreferrer'
                      alt='link to the tablet prototype on Figma of Eco Ocenas Hub'
                    >
                      click here;
                    </Link>{' '}
                    and for the Laptop version,{' '}
                    <Link
                      href='https://www.figma.com/proto/e5gVeg0MTbrVkAhRZYHCiH/Project-3?page-id=385%3A10579&type=design&node-id=385-15255&viewport=-1749%2C261%2C0.6&t=5aye8SgImFaVGKzx-1&scaling=scale-down&starting-point-node-id=385%3A15255&mode=design'
                      className={`fw-bold ${utilStyles.underlined}`}
                      target='_blank'
                      rel='noopener noreferrer'
                      alt='link to the laptop Prototype on Figma of Eco Ocenas Hub'
                    >
                      here;
                    </Link>
                    . Please note that this prototype was created using Figma,
                    and while it showcases the main screens and user flow, as
                    well as some extra ones to make it more playful, not all
                    screens have been designed.{' '}
                  </p>{' '}
                  <p>
                    When interacting with the prototype (by clicking anywhere on
                    the screen), you will notice certain elements turning
                    blue—these represent active options on each page. Enjoy
                    exploring the app prototype!{' '}
                  </p>{' '}
                  <p>
                    {' '}
                    If you have any questions and/or would like to connect, feel
                    free to reach out to me at{' '}
                    <Link
                      href='mailto:                      hi@paulardb.design'
                      className={`fw-bold ${utilStyles.underlined}`}
                      rel='noopener noreferrer'
                      target='_blank'
                      alt='open email provider to email hi@paulardb.design'
                    >
                      hi@paulardb.design
                    </Link>
                    .
                  </p>{' '}
                  {/* HASTA AQUÍ this goes somewhere else */}
                </div>
              </div>
            </div>
          </div>
          <div className='row d-flex align-items-center border-bottom'>
            <div className='col-sm-6 text-end border-end' id='cel2.2'>
              <div className='container my-5'>
                <h5 className={utilStyles.headingMd}>
                  Mobile-First Design Philosophy
                </h5>
                <p>
                  {' '}
                  The design process began with a mobile-first approach,
                  recognizing the prevalence of mobile devices in accessing
                  digital content, especially among the “next billion users.”
                  This approach allowed us to create a foundation that
                  prioritizes a seamless and intuitive experience on smaller
                  screens while ensuring adaptability to larger screens such as
                  iPad Pro 11” and MacBook Pro 16”. This strategic decision
                  aligns with the goal of making Eco Oceans Hub accessible to a
                  diverse and global audience, fostering inclusivity in marine
                  conservation efforts.
                </p>
              </div>
            </div>
            <div className='col-sm-6 border-end'>
              <div className='container my-5'>
                <h4 className={utilStyles.headingLg}> Goal Statement</h4>
                <p>
                  Eco Oceans Hub unites scientists, communities, and
                  organizations for ocean preservation. It enables seamless
                  sharing of research, collaborative events, and empowers
                  individuals for positive environmental action.
                </p>
              </div>
            </div>
          </div>
          <div className='row border-end border-bottom'>
            <div className='col-lg-6'>
              <div
                className={`py-4 px-3 float-end ${utilStyles.designsPicBox}`}
              >
                <Image
                  className={`ms-0 ${utilStyles.designsPic}`}
                  src={iPadHome}
                  alt='iPad, Home screen'
                />
              </div>
              <div
                className={`py-4 px-3 float-end ${utilStyles.designsPicBox}`}
              >
                <Image
                  className={`ms-0 ${utilStyles.designsPic}`}
                  src={iPadNotifications}
                  alt='iPad, Notifications screen'
                />
              </div>
              <div
                className={`py-4 px-3 float-end ${utilStyles.designsPicBox}`}
              >
                <Image
                  className={`ms-0 ${utilStyles.designsPic}`}
                  src={iPadMenu}
                  alt='iPad, Menu screen'
                />
              </div>
              <div
                className={`py-4 px-3 float-end ${utilStyles.designsPicBox}`}
              >
                <Image
                  className={`ms-0 ${utilStyles.designsPic}`}
                  src={MacbookL}
                  alt='Macbook, Create an Event screen'
                />
              </div>
            </div>
            <div className='col-lg-6'>
              <div className='container my-5'>
                <h4 className={utilStyles.headingLg}>
                  Design Process Overview
                </h4>
                <p>
                  For the design journey of Eco Oceans Hub began by empathizing
                  with the diverse needs of both scientists and community
                  advocates. During the Five Phases of the Design process, the
                  user was kept in the center of all decisions.
                </p>
                <h5 className={utilStyles.headingMd}>EMPATHIZE</h5>
                <p>
                  Conducted extensive research and interacted with potential
                  users to comprehend their unique challenges and aspirations,
                  resulting in the creation of detailed personas and user
                  journey maps.
                </p>{' '}
                <h5 className={utilStyles.headingMd}>DEFINE</h5>
                <p>
                  Translated research findings into clear problem statements,
                  ensuring a human-centered approach that focused on specific
                  user needs. Identified key pain points and opportunities for
                  meaningful interventions.
                </p>{' '}
                <h5 className={utilStyles.headingMd}>IDEATE</h5>
                <p>
                  Participated in brainstorming sessions and utilized methods
                  like crazy eight exercises to generate diverse design
                  possibilities. Conducted competitive audits to draw insights
                  from industry peers.
                </p>
                <h5 className={utilStyles.headingMd}>PROTOTYPE</h5>
                <p>
                  Transformed conceptual ideas into tangible prototypes,
                  refining iteratively based on feedback from users and two UX
                  designers. Employed low-fidelity prototypes initially,
                  followed by user testing, and progressed to high-fidelity
                  prototypes.
                </p>
                <h5 className={utilStyles.headingMd}>TEST & ITERATE</h5>
                <p>
                  Conducted usability studies with scientists and community
                  members, actively incorporating feedback for continuous
                  improvement. Embraced a commitment to learning from each
                  iteration, fostering an environment where every stage
                  contributes to a more user-centric and impactful platform.
                </p>
              </div>
            </div>
          </div>
          <div
            className='row d-flex align-items-center py-2 border-bottom'
            id='thirdrow'
          >
            <div className='col-sm-8 text-end border-end' id='cel3.1'>
              <div className='row text-end py-4 px-3 float-end'>
                {' '}
                <h4 className={utilStyles.headingLg}>
                  {' '}
                  Design Decisions and User Experience Considerations
                </h4>
                <p>
                  In crafting the design decisions for Eco Oceans Hub, several
                  key considerations were taken into account to ensure a
                  seamless and user-friendly experience. It was a mobile-first
                  approach, then iPad and desktop were adapted afterwards.
                </p>
              </div>
              <div className='row text-end py-4 px-3 float-end'>
                {' '}
                <h5 className={utilStyles.headingMd}>Intuitive Navigation</h5>
                <p>
                  Prioritized a clear and intuitive navigation structure,
                  featuring a hamburger menu and prominently placing the
                  "Contribute" feature at the top. This design allows users to
                  effortlessly explore the platform's diverse features,
                  emphasizing a mobile-first approach for users on various
                  devices.
                </p>
              </div>
              <div className='row text-end py-4 px-3 float-end'>
                {' '}
                <h5 className={utilStyles.headingMd}>Inclusive Design</h5>
                <p>
                  Ensured inclusivity by designing features accessible to users
                  with diverse abilities and perspectives. Prioritizing
                  readability, clarity (including color contrast and font
                  choice), and strict adherence to accessibility standards.
                </p>
              </div>
              <div className='row text-end py-4 px-3 float-end'>
                {' '}
                <h5 className={utilStyles.headingMd}>User-Centric Features</h5>
                <p>
                  Integrated features tailored to the needs of both scientists
                  and community members, fostering collaboration and knowledge
                  sharing. The implementation of "Scientist Mode" allows
                  verified scientists to contribute research data.
                </p>
                <div className='row text-end py-4 px-3 float-end'>
                  <h5 className={utilStyles.headingMd}>
                    {' '}
                    Engagement & Gamification
                  </h5>
                  <p>
                    Balanced the integration of gamification elements to enhance
                    user engagement while maintaining a professional and
                    credible tone. The potential impact on the platform's
                    overall credibility.
                  </p>
                </div>
                <div className='row text-end py-4 px-3 float-end'>
                  <h5 className={utilStyles.headingMd}>Visual Design</h5>
                  <p>
                    Adopted a clean and visually appealing design language with
                    a color scheme reflecting the marine theme, maintaining
                    readability. The gradient, reminiscent of ocean colors, and
                    the use of iconography enhance navigation and provide a
                    cohesive visual identity. Typography choices include the
                    classic yet contemporary Fraunces for main titles, inspired
                    by timeless fonts in scientific literature, and the rounded,
                    readable Poppins for the rest of the content.
                  </p>
                </div>
              </div>
              <div className='row text-end py-4 px-3 float-end'>
                {' '}
                <h5 className={utilStyles.headingMd}>
                  Personalized User Profiles
                </h5>
                <p>
                  Developed user profiles with public and private sections,
                  allowing users to showcase their contributions, affiliations,
                  and impact. Striking a balance between transparency and
                  individual user privacy.
                </p>
                <div className='row text-end py-4 px-3 float-end'>
                  {' '}
                  <p>
                    These design decisions were guided by a commitment to
                    creating a platform that not only meets functional
                    requirements but also delivers a visually appealing,
                    engaging and meaningful experience for users.
                  </p>
                </div>
              </div>
            </div>

            <div className='col-sm-4' id='cel3.2'>
              <div className='row pb-4'>
                <div className='col-sm-6'>
                  <div className={`${utilStyles.profilePicBox} pt-2 float-end`}>
                    {' '}
                    <Image
                      className={`ms-0 p-0 ${utilStyles.designsPic}`}
                      src={iPhoneMenu}
                      alt='iPhone, Menu Picture'
                    />
                  </div>
                </div>
                <div className='col-sm-6'>
                  <div className={`${utilStyles.profilePicBox} pt-2 float-end`}>
                    {' '}
                    <Image
                      className={`ms-0 p-0 ${utilStyles.designsPic}`}
                      src={EcoNavbar}
                      alt='iPhone, Menu Picture'
                    />
                  </div>
                </div>
              </div>
              <div className='row mb-4'>
                <div className='col-md-6'>
                  <div className={`${utilStyles.profilePicBox} float-end`}>
                    {' '}
                    <Image
                      className={`ms-0 p-0 ${utilStyles.designsPic}`}
                      src={Contrast1}
                      alt='WCAG contrast picture'
                    />
                  </div>
                </div>{' '}
                <div className='col-md-6'>
                  <div className={`${utilStyles.profilePicBox} float-end`}>
                    {' '}
                    <Image
                      className={`ms-0 p-0 ${utilStyles.designsPic}`}
                      src={Contrast2}
                      alt='WCAG contrast picture'
                    />
                  </div>
                </div>
              </div>
              <div className='row mb-4'>
                <div
                  className={`py-4 px-3 float-end ${utilStyles.designsPicBox}`}
                >
                  {' '}
                  <Image
                    className={`ms-0 p-0 ${utilStyles.designsPic}`}
                    src={StickerSheet}
                    alt='stickersheet'
                  />
                </div>
              </div>
              <div className='row mb-4'>
                <div
                  className={`py-4 px-3 float-end ${utilStyles.designsPicBox}`}
                >
                  {' '}
                  <Image
                    className={`ms-0 p-0 ${utilStyles.designsPicFitTall}`}
                    src={Verified}
                    alt='verified scientist icons'
                  />
                </div>
              </div>
              <div className='row'>
                <div
                  className={`py-4 px-3 float-end ${utilStyles.designsPicBox}`}
                >
                  <Image
                    className={`ms-0 ${utilStyles.mockupPic}`}
                    src={iPhoneProfile}
                    alt='iPhone, Profle screen'
                  />{' '}
                </div>
              </div>
            </div>
          </div>
          <div
            className='row py-2 d-flex align-items-center border-end border-start'
            id='forthrow'
          >
            <div className='row border-bottom'>
              <div className='col-sm-6 border-end' id='cel4.1'>
                <div className='row'>
                  <div className='col-sm-6'>
                    <div
                      className={`py-4 float-end ${utilStyles.designsPicBox}`}
                    >
                      <Image
                        className={`ms-0 ${utilStyles.mockupPic}`}
                        src={iPhoneMarineL}
                        alt='iPhone, Resources screen'
                      />
                    </div>
                  </div>
                  <div className='col-sm-6'>
                    <div
                      className={`py-4 px-3 float-end ${utilStyles.designsPicBox}`}
                    >
                      <Image
                        className={`ms-0 ${utilStyles.mockupPic}`}
                        src={iPhoneMarineR}
                        alt='iPhone, Resources screen'
                      />
                    </div>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-sm-6'>
                    <div
                      className={`py-4 float-end ${utilStyles.designsPicBox}`}
                    >
                      <Image
                        className={`ms-0 ${utilStyles.mockupPic}`}
                        src={iPhoneProfileB}
                        alt='iPhone, bottom of the Profile screen'
                      />
                    </div>
                  </div>
                  <div className='col-sm-6'>
                    <div
                      className={`py-4 px-3 float-end ${utilStyles.designsPicBox}`}
                    >
                      <Image
                        className={`ms-0 ${utilStyles.mockupPic}`}
                        src={iPhoneContribute}
                        alt='iPhone, Contribute screen'
                      />
                    </div>
                  </div>
                </div>
                <div className='row'>
                  <div
                    className={`py-4 pe-3 float-end ${utilStyles.designsPicBox}`}
                  >
                    {' '}
                    <Image
                      className={`ms-0 p-0 ${utilStyles.designsPicSmaller}`}
                      src={iPhoneSubmitted}
                      alt='iPhone, Submitted event  pop-up'
                    />
                  </div>
                </div>
                <div className={`${utilStyles.designsPicBox} my-2 mx-0`}>
                  <Image
                    className={`${utilStyles.designsPicSmaller}`}
                    src={iPhoneSettings}
                    alt='iPhone Settings Screen'
                  />
                </div>
                <div className={`${utilStyles.designsPicBox} py-4`}>
                  <Image
                    className={`${utilStyles.designsPic}`}
                    src={iPadContribute}
                    alt='whatever'
                  />
                </div>
              </div>
              <div className='col-sm-6' id='cel4.2'>
                <div className='row py-2'>
                  <div className='container my-5'>
                    <h4 className={utilStyles.headingLg}>
                      Challenges & Solutions
                    </h4>{' '}
                    <h5 className={utilStyles.headingMd}>
                      Balancing Gamification Elements
                    </h5>
                    <h6 className={utilStyles.headingSm}>CHALLENGE:</h6>{' '}
                    <p className='pb-2'>
                      Integrating gamification for user engagement without
                      compromising the professional and credible tone required
                      for a platform catering to scientists.
                    </p>
                    <h6 className={utilStyles.headingSm}>INSIGHT:</h6>
                    <p className='pb-2'>
                      Striking the right balance between engagement and
                      maintaining the platform's credibility was a delicate
                      challenge.
                    </p>
                    <h6 className={utilStyles.headingSm}>
                      SOLUTION — Strategic Gamification:
                    </h6>
                    <p className='pb-4'>
                      Adopted a strategic approach to gamification, carefully
                      selecting elements that enhance user engagement while
                      aligning with the scientific ethos. Elements like icons
                      and achievements were introduced judiciously.
                    </p>
                    <h5 className={utilStyles.headingMd}>
                      Ensuring Inclusivity in Design{' '}
                    </h5>
                    <h6 className={utilStyles.headingSm}>CHALLENGE:</h6>{' '}
                    <p className='pb-2'>
                      Creating features accessible to users with diverse
                      abilities and perspectives
                    </p>
                    <h6 className={utilStyles.headingSm}>INSIGHT:</h6>
                    <p className='pb-2'>
                      Prioritizing readability, clarity, and adherence to
                      accessibility standards required thoughtful design
                      decisions.
                    </p>
                    <h6 className={utilStyles.headingSm}>
                      SOLUTION — Inclusive Design Principles:
                    </h6>{' '}
                    <p className='pb-4'>
                      Enforced inclusive design principles, ensuring features
                      were accessible to users with diverse abilities. This
                      involved meticulous attention to color contrast, font
                      choices, and overall readability.
                    </p>
                    <h5 className={utilStyles.headingMd}>
                      Maintaining a Professional Tone
                    </h5>
                    <h6 className={utilStyles.headingSm}>CHALLENGE:</h6>{' '}
                    <p className='pb-2'>
                      Embedding gamified elements while ensuring the platform
                      retains a serious and professional tone, crucial for
                      scientific collaboration.
                    </p>
                    <h6 className={utilStyles.headingSm}>INSIGHT:</h6>
                    <p className='pb-2'>
                      Navigating the fine line between engagement and
                      maintaining a credible atmosphere required iterative
                      adjustments.
                    </p>
                    <h6 className={utilStyles.headingSm}>
                      SOLUTION — Cohesive Visual Identity:
                    </h6>{' '}
                    <p className='pb-4'>
                      Maintained a cohesive visual identity by incorporating a
                      clean and visually appealing design language. The color
                      scheme, inspired by marine themes, struck a balance
                      between aesthetics and functionality.
                    </p>
                    <p>
                      By addressing these challenges head-on, the design process
                      not only overcomes obstacles but thrives on them. This is
                      a commitment to problem-solving, adaptability, and an
                      ongoing pursuit of the best user experience for both
                      scientists and community members. The solutions
                      implemented showcase a thoughtful consideration of the
                      platform's unique requirements and user expectations.
                    </p>
                  </div>
                </div>{' '}
              </div>
            </div>
          </div>
          <div className='row border-bottom py-2'>
            <div className='container px-md-5 px-2 mx-5 pb-4'>
              <div className='container px-md-5 px-0 mx-5'>
                {' '}
                <h4 className={utilStyles.headingLg}>
                  Potential Impact & Results
                </h4>{' '}
                <p>
                  While Eco Oceans Hub is a conceptual project that has not been
                  developed or launched yet, its potential impact lies in
                  fostering collaboration between marine scientists and
                  interested communities. The platform aims to create a space
                  where valuable scientific research can be shared with the
                  wider community, promoting awareness and engagement in marine
                  conservation efforts. Additionally, it serves as a means to
                  organize scientifically-based campaigns and connect with
                  potential organizations or individuals, fostering a collective
                  effort in conservation. Although specific metrics and results
                  are not available due to the project's current status, the
                  envisioned impact is centered on the positive outcomes that
                  could arise from a platform encouraging knowledge exchange and
                  environmental activism.
                </p>
              </div>
            </div>
          </div>
          <div className='row border-bottom py-2'>

            <div className='container px-md-5 px-2 mx-5 pb-4'>
              <div className='container px-md-5 px-0 mx-5'>
                {' '}
                <h4 className={utilStyles.headingLg}>Key Learnings</h4>{' '}
                <p>
                  Throughout the design process, key learnings emerged,
                  emphasizing the importance of user-centricity, inclusivity,
                  and continuous improvement. The iterative nature of the design
                  process allowed for adjustments based on user feedback,
                  reinforcing the significance of usability studies and
                  engagement with potential users. The balance between more
                  visually captivating elements and maintaining a professional
                  tone was a valuable lesson in creating a credible and engaging
                  platform. The process also underscored the significance of
                  creating a seamless experience for both scientists and
                  community members, acknowledging the diverse needs of these
                  user groups.
                </p>
              </div>
            </div>
          </div>
          <div className='row border-bottom py-2'>

            <div className='container px-md-5 px-2 mx-5'>
              <div className='container px-md-5 px-0 mx-5'>
                <h4 className={utilStyles.headingLg}>Next Steps</h4>{' '}
                <p className='pb-4'>
                  As a conceptual project, Eco Oceans Hub is poised for further
                  development and refinement. The following steps outline the
                  potential evolution of the platform:
                </p>
                <h5 className={utilStyles.headingMd}>
                  User Research Iterations{' '}
                </h5>
                <p className='pb-4'>
                  Continued user research iterations will refine the user
                  experience based on real-world feedback, ensuring that the
                  platform adapts to user needs and expectations.
                </p>
                <h5 className={utilStyles.headingMd}>
                  Development of Data Privacy Features:
                </h5>
                <p className='pb-4'>
                  The incorporation of robust data privacy features will be
                  prioritized in the development phase, ensuring that user
                  information is handled securely and ethically.
                </p>
                <h5 className={utilStyles.headingMd}>
                  Integration of Additional Features
                </h5>
                <p className='pb-4'>
                  Exploring the integration of features such as discussion
                  forums, live streaming for marine events, and a peer-review
                  system for scientific contributions, will enhance the
                  platform's functionality and engagement.
                </p>
                <h5 className={utilStyles.headingMd}>
                  Partnerships and Collaborations
                </h5>
                <p className='pb-4'>
                  Building partnerships with marine research institutions,
                  environmental organizations, and educators will contribute to
                  the platform's credibility and expand its reach.
                </p>
                <h5 className={utilStyles.headingMd}>
                  Accessibility Enhancements
                </h5>
                <p className='pb-4'>
                  Continued efforts will focus on enhancing accessibility,
                  making Eco Oceans Hub inclusive for users with diverse
                  abilities and ensuring adherence to global accessibility
                  standards.
                </p>
                <h5 className={utilStyles.headingMd}>Public Beta Testing</h5>
                <p className='pb-4'>
                  Before the official launch, conducting a public beta test will
                  allow a broader audience to interact with the platform,
                  providing valuable insights and identifying any potential
                  issues.
                </p>
                <p className='pb-4'>
                  These steps reflect a commitment to continuous improvement,
                  user-centered design, and the realization of Eco Oceans Hub as
                  a valuable resource for marine scientists and enthusiasts
                  alike.
                </p>
              </div>
            </div>
          </div>{' '}
          <div className='row d-flex justify-content-center border-bottom'>
            <div className='container px-md-5 px-2 py-4 mx-5'>
              <div className='container px-md-5 px-0 mx-5 text-center'>
                {' '}
                <h4 className={utilStyles.headingLg}> Conclusion</h4>
                <p>
                  Eco Oceans Hub represents a vision for a collaborative
                  platform bridging the gap between marine scientists and
                  communities. While the project is currently in its conceptual
                  stage, the design decisions, considerations, and insights
                  gained during the process lay a foundation for a user-centric
                  and impactful platform. The journey from empathizing with
                  potential users to defining problems, ideating solutions,
                  iterating and re-iterating, and prototyping reflects a
                  commitment to creating a meaningful and engaging experience in
                  the realm of marine conservation.
                </p>
              </div>
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

export default ecoOceansHub;
