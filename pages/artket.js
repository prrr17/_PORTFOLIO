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
import ArtketThumbnail2 from '../public/Artket/thumbnails/Thumbnail2.png';
import Sticker from '../public/Artket/Sticker_sheet.png';
import ArtketHome from '../public/Artket/Home.png';
import ArtketMenu from '../public/Artket/Menu.png';
import ArtketBid from '../public/Artket/Bid.png';
import ArtketProfile from '../public/Artket/profile.png';
import ArtketChat from '../public/Artket/Chat.png';
import ArtketLogin from '../public/Artket/Login.png';
import ArtketArtists from '../public/Artket/Artists.png';
import ArtketArtAll from '../public/Artket/Art_All.png';
import ArtketArtTrends from '../public/Artket/Trends.png';
import ArtketSummary from '../public/Artket/Summary.png';
import ArtketArtistAB from '../public/Artket/artist_A-B.png';
import ArtketBidAB from '../public/Artket/bidding_A-B.png';
import ArtketSettings from '../public/Artket/MenuSettings.png';
import GoogleUX from '../public/Artket/GoogleUX.png';

const artket = () => {
  return (
    <div>
      <Head>
        <title>{siteTitle} Artket — Art Community App</title>
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
                Artket
              </h2>
            </div>
            <div className='col-sm-6 align-items-end d-flex pb-3' id='cel1.2'>
              <h3 className={utilStyles.headingLg}>
                {' '}
                Art Community App — Your modern art marketplace
              </h3>
            </div>
          </div>
          <div className='row border-bottom' id='secondrow'>
            <div className='col-sm-6 border-end' id='cel2.1'>
              <div
                className='row border-bottom py-3 align-end'
                id='secondrowtop'
              >
                {' '}
                <h4
                  className={`pt-2 d-flex justify-content-end ${utilStyles.headingMd}`}
                >
                  {' '}
                  Portfolio Project UX Design course by Google{' '}
                </h4>
              </div>
              <div className='row border-bottom' id='secondrowmiddle'>
                <div
                  className={`py-4 pe-3 float-end ${utilStyles.designsPicBox}`}
                  id='cel2.1.2'
                >
                  <Image
                    className={`ms-0 ${utilStyles.designsPic}`}
                    src={ArtketThumbnail2}
                    alt='portfolio concept picture'
                  />
                </div>{' '}
              </div>
              <div className='row d-flex align-center' id='secondrowbottom'>
                <div className='col-xl-6' id='cel2.1.3.1'>
                  <div
                    className={`py-4 pe-3 float-end ${utilStyles.designsPicBox}`}
                  >
                    <Image
                      className={`ms-0 ${utilStyles.designsPic}`}
                      src={ArtketHome}
                      alt='portfolio concept picture'
                    />
                  </div>
                </div>
                <div className='col-xl-6' id='cel2.1.3.2'>
                  <div
                    className={`py-4 pe-3 float-end ${utilStyles.designsPicBox}`}
                  >
                    <Image
                      className={`ms-0 ${utilStyles.designsPic}`}
                      src={ArtketMenu}
                      alt='portfolio concept picture'
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className='col' id='cel2.2'>
              <div
                className='row d-flex align-items-center border-bottom'
                id='cel2.2.1'
              >
                <div className='container my-5'>
                  <h4 className={utilStyles.headingMd}>Summary</h4>
                  <p>
                    Welcome to <strong>Artket</strong>, your modern art market
                    and community. In the following paragraphs, I will take you
                    on a journey through the step-by-step process I followed to
                    create
                    <strong>Artket</strong>, starting from the empathize phase
                    and concluding with the final touches.
                  </p>{' '}
                  <p>
                    For a comprehensive case study, you can access the{' '}
                    <Link
                      href='GoogleUXDesignCertificate-Case_study_Artket.pdf'
                      className={`fw-bold ${utilStyles.underlined}`}
                      target='_blank'
                      rel='noopener noreferrer'
                      alt='Artket Case Study PDF'
                    >
                      complete PDF version here
                    </Link>{' '}
                    . If you're eager to explore the prototype, you can do so by
                    visiting this{' '}
                    <Link
                      href='https://www.figma.com/proto/MkwIIofd9l10kT10dVXprA/Artket?page-id=234%3A5408&type=design&node-id=322-8440&viewport=-1050%2C102%2C0.4&scaling=scale-down&starting-point-node-id=322%3A8401'
                      className={`fw-bold ${utilStyles.underlined}`}
                      target='_blank'
                      rel='noopener noreferrer'
                      alt='link to the Prototype on Figma of Artket'
                    >
                      link.
                      {'\n'}
                    </Link>{' '}
                    . Please note that this prototype was created using Figma,
                    and while it showcases the main screens and user flow, as
                    well as some extra ones to make it more playful, not all
                    screens have been designed.{' '}
                  </p>{' '}
                  <p>
                    When interacting with the prototype (by clicking anywhere on
                    the screen), you'll notice certain elements turning
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
                  </p>
                </div>
              </div>
              <div
                className='row d-flex align-items-center border-bottom'
                id='cel2.2.2'
              >
                {' '}
                <div className='container my-5'>
                  <h4 className={utilStyles.headingMd}>Introduction</h4>
                  <p>
                    {' '}
                    As part of my{' '}
                    <Link
                      href='https://www.coursera.org/professional-certificates/google-ux-design?utm_source=gg&utm_medium=sem&utm_campaign=B2C_APAC__branded_FTCOF__arte-agency-set1&utm_content=B2C&campaignid=19731260869&adgroupid=141562115010&device=c&keyword=course%20to%20learn&matchtype=b&network=g&devicemodel=&adpostion=&creativeid=649154928958&hide_mobile_promo'
                      className={`fw-bold ${utilStyles.underlined}`}
                      target='_blank'
                      rel='noopener noreferrer'
                      alt='link to UX Design course by Google in Coursera'
                    >
                      UX Design Professional Certificate by Google
                    </Link>{' '}
                    , I had the opportunity to work on a really engaging project
                    that involved designing an app, initially focused on an art
                    bidding for an art gallery. However, as I progressed through
                    the ideation phase and conducted user and market research,
                    the project took a significant turn. The project evolved
                    into an art community app, aiming to create a platform where
                    users can easily sell, buy, and bid on art while fostering
                    connections and communication among artists, galleries, and
                    collectors.
                  </p>{' '}
                  <h5 className={utilStyles.headingSm}>GOAL STATEMENT</h5>
                  <p>
                    Our primary objective is to develop an art app that offers a
                    user-friendly experience, enabling users to appreciate and
                    engage with art, facilitate transactions, and build
                    meaningful connections within the art community. By bringing
                    artists, experts, and buyers closer together and providing
                    comprehensive information about artworks and emerging
                    trends, our app seeks to enhance the way art is perceived,
                    interpreted, and exchanged. Success will be measured by the
                    number of transactions and connections made within the app.
                  </p>
                </div>
              </div>
              <div
                className='row my-4 pt-2 d-flex align-items-center'
                id='cel2.2.3'
              >
                <h5 className={utilStyles.headingSm}>
                  GOOGLE UX DESIGN CERTIFICATES
                </h5>
                <p>
                  Here you can find a{' '}
                  <Link
                    href='Coursera_certificates.pdf'
                    className={`fw-bold ${utilStyles.underlined}`}
                    target='_blank'
                    rel='noopener noreferrer'
                    alt='link to my Coursera Certificates as a pdf'
                  >
                    PDF of my Google Courses Certificates.
                  </Link>{' '}
                </p>
              </div>
            </div>
          </div>
          <div
            className='row d-flex align-items-center border-bottom'
            id='thirdrow'
          >
            <div className='col-sm-6 border-end' id='cel3.1'>
              <div className='row' id='cel3.1.1'>
                <div className={`${utilStyles.designsPicBox} py-4`}>
                  <Image
                    className={`${utilStyles.designsPicSmaller}`}
                    src={ArtketProfile}
                    alt='whatever'
                  />
                </div>
              </div>
              <div className='text-end py-4 pe-3 float-end' id='cel3.1.2'>
                <h4 className={utilStyles.headingMd}>
                  Design Process Overview
                </h4>
                <p>
                  Throughout the development of Artket, I followed a structured
                  design process given by Google's courses that allowed me to
                  create a user-centered and effective art community app. The
                  process consisted of several key steps, each contributing to
                  the overall potential success of the project.
                </p>
                <h5 className={utilStyles.headingSm}>EMPATHIZE</h5>
                <p>
                  The first phase. We need to start by understanding the target
                  users. I started by conducting extensive user research to
                  understand the needs, behaviors, and motivations of art
                  enthusiasts, artists, galleries, and collectors. This helped
                  me gain valuable insights into their pain points and
                  expectations within the art community.
                </p>{' '}
                <h5 className={utilStyles.headingSm}>DEFINE</h5>
                <p>
                  Building upon the research findings, clear problem statements
                  and user stories were defined, which then guided the design
                  process. By focusing on the users' needs and aspirations, I
                  established specific goals and deliverables to ensure the app
                  would address their requirements effectively.
                </p>{' '}
                <h5 className={utilStyles.headingSm}>IDEATE</h5>
                <p>
                  {' '}
                  During this phase, it is important to explore a wide range of
                  ideas and concepts to create an engaging and innovative art
                  community app that meet our goals. Through brainstorming
                  sessions and techniques like "crazy eights" and "how might
                  we," diverse design possibilities were imagined, followed by
                  evaluating their feasibility, desirability, and viability in
                  order to start discarding.{' '}
                </p>
                <h5 className={utilStyles.headingSm}>PROTOTYPE</h5>
                <p>
                  I created low-fidelity prototypes based on the findings from
                  the previous steps and conducted user testing to gather
                  feedback and refine the design. It was an iterative process
                  that allowed to validate design decisions and make necessary
                  adjustments based on user insights.{' '}
                </p>
                <h5 className={utilStyles.headingSm}>TEST</h5>
                <p>
                  I conducted usability studies to evaluate the usability and
                  user experience of the app. By observing and analyzing user
                  interactions, I identified areas for improvement and made
                  iterative design changes to enhance the overall user
                  experience.{' '}
                </p>
                <h5 className={utilStyles.headingSm}>ITERATE</h5>
                <p>
                  With each iteration, I refined the design based on user
                  feedback, addressing pain points and incorporating valuable
                  insights. This iterative approach ensured that the app evolved
                  to meet user expectations and provided an optimal user
                  journey.
                </p>{' '}
              </div>

              <div className='col border-bottom' id='cel3.2'>
                <div className={`${utilStyles.profilePicBox} float-end py-4`}>
                  <Image
                    className={`ms-0 p-0 ${utilStyles.mockupPic}`}
                    src={ArtketBid}
                    alt='whatever'
                  />
                </div>
              </div>
            </div>
            <div className='col-sm-6 border-end'>
              <div className='row'>
                <div className={`${utilStyles.designsPicBox} mh-50 py-4`}>
                  <Image
                    className={`${utilStyles.mockupPic}`}
                    src={ArtketLogin}
                    alt='screen displaying all art'
                  />
                </div>
              </div>
              <div className='row'>
                <div className={`${utilStyles.designsPicBox} mh-50 py-4`}>
                  <Image
                    className={`${utilStyles.mockupPic}`}
                    src={ArtketArtists}
                    alt='screen displaying all art'
                  />
                </div>
              </div>
              <div className='row'>
                <div className={`${utilStyles.designsPicBox} py-4`}>
                  <Image
                    className={`${utilStyles.mockupPic}`}
                    src={ArtketSummary}
                    alt='screen displaying all art'
                  />
                </div>
              </div>
              <div className='row'>
                <div className={`${utilStyles.designsPicBox} py-4`}>
                  <Image
                    className={`${utilStyles.mockupPic}`}
                    src={ArtketChat}
                    alt='whatever'
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            className='row d-flex align-items-center border-bottom border-end border-start'
            id='forthrow'
          >
            <div className='col-sm-6 border-end' id='cel4.1'>
              <div className='row' id='cel4.1.1'>
                <div
                  className={`py-4 pe-3 float-end ${utilStyles.designsPicBox}`}
                >
                  <div className={`${utilStyles.designsPicBox} py-4`}>
                    <Image
                      className={`${utilStyles.designsPic}`}
                      src={Sticker}
                      alt='screen displaying the main design components'
                    />
                  </div>
                </div>
              </div>{' '}
              <div className='row' id='cel4.1.2'>
                <div
                  className={`py-4 pe-3 float-end ${utilStyles.designsPicBox}`}
                >
                  <div className={`${utilStyles.designsPicBox} py-4`}>
                    <Image
                      className={`${utilStyles.designsPic}`}
                      src={ArtketBidAB}
                      alt=''
                    />
                  </div>
                </div>
              </div>{' '}
              <div className='row' id='cel4.1.3'>
                <div
                  className={`py-4 pe-3 float-end ${utilStyles.designsPicBox}`}
                >
                  <div className={`${utilStyles.designsPicBox} py-4`}>
                    <Image
                      className={`${utilStyles.designsPic}`}
                      src={ArtketArtistAB}
                      alt='screen displaying all art'
                    />
                  </div>
                </div>
                <p>
                  Screenshots exploring different UIs. To see the final one
                  check the prototype{' '}
                  <Link
                    href='https://www.figma.com/proto/MkwIIofd9l10kT10dVXprA/Artket?page-id=234%3A5408&type=design&node-id=322-8440&viewport=-1050%2C102%2C0.4&scaling=scale-down&starting-point-node-id=322%3A8401'
                    className={`fw-bold ${utilStyles.underlined}`}
                    target='_blank'
                    rel='noopener noreferrer'
                    alt='link to the Prototype on Figma of Artket'
                  >
                    here
                    {'\n'}
                  </Link>{' '}
                  .
                </p>
              </div>
            </div>
            <div className='col-sm-6' id='cel4.2'>
              <div className='row border-bottom'>
                <div className={`container my-5 ${utilStyles.paragraph}`}>
                  <h4 className={utilStyles.headingMd}>
                    Design Decisions and User Experience Considerations
                  </h4>
                  <p>
                    During the design process of Artket, I made several key
                    design decisions that were influenced by user experience
                    considerations. Here are the design decisions and user
                    experience considerations I incorporated into the app:{' '}
                  </p>
                  <h5 className={utilStyles.headingSm}>
                    PLAYFUL YET MINIMALISTIC VISUAL DESIGN
                  </h5>
                  <p>
                    To create a visually engaging app that highlights the
                    artwork, I opted for a minimalistic design approach with a
                    playful touch. The color scheme featured toned-down black
                    and white, allowing the art to take center stage. In
                    addition, I incorporated a vibrant orange and fuchsia
                    branding logo, resembling a brush stroke, to add a
                    distinctive artistic element.
                  </p>
                  <h5 className={utilStyles.headingSm}>TYPOGRAPHY AND FONTS</h5>
                  <p>
                    I carefully selected fonts to complement the overall
                    aesthetic and enhance readability. Arsenica Trial was chosen
                    for main titles, providing a trendy and eye-catching look,
                    while Montserrat was used for other text, offering a round,
                    elegant, and modern feel. I utilized small caps for buttons
                    and labels, creating a consistent visual hierarchy.{' '}
                  </p>
                  <h5 className={utilStyles.headingSm}>
                    INTUITIVE NAVIGATION AND FAMILIAR UI PATTERNS
                  </h5>
                  <p>
                    To ensure ease of use, I implemented familiar mobile UI
                    patterns and icons that users are already accustomed to. I
                    made slight modifications to these icons to infuse them with
                    artistic elements. The floating icon on the bottom right
                    provided quick access to essential features such as search
                    and chat, improving navigation efficiency.
                  </p>
                  <h5 className={utilStyles.headingSm}>
                    CATEGORIZATION AND PERSONALIZATION
                  </h5>
                  <p>
                    To facilitate the browsing and discovery of art, I
                    incorporated a comprehensive categorization system. Users
                    could explore different categories such as Art, Artists, and
                    Galleries, with subcategories like Trendy, Auction, and For
                    You, tailoring their search results to their preferences.
                    Personalization was also emphasized, allowing users to
                    define their interests in their profiles and connect with
                    others who share similar artistic tastes.
                  </p>
                  <h5 className={utilStyles.headingSm}>MENU AND SETTINGS</h5>
                  <p>
                    The app's menu structure was designed to provide easy access
                    to key features and options. The menu included sections such
                    as Home, Profile, Chats, Connections, Browse By, Settings,
                    Your Purchases, Help and Support, and Search. Within the
                    settings section, users could customize language, currency,
                    payment settings, and adjust accessibility options like
                    contrast, screen reader support, and font size.
                  </p>{' '}
                  <p>
                    These design decisions were driven by a focus on creating a
                    visually appealing, intuitive, and personalized user
                    experience. By carefully considering these aspects, Artket
                    aimed to be a user-friendly and engaging platform for art
                    enthusiasts.
                  </p>
                </div>
              </div>
              <div className='row' id='cel4.2.1'>
                <div className='container my-5'>
                  <h4 className={utilStyles.headingMd}> Iterative Process</h4>
                  <p>
                    In the iterative process, I incorporated user feedback
                    through usability studies to enhance the user experience of
                    Artket. The findings from the low-fidelity prototype phase
                    highlighted several key areas for improvement. Firstly,
                    users expressed difficulty in locating connections and found
                    the acceptance/rejection process lengthy. To address this, I
                    streamlined the process and rephrased the instructions for
                    better clarity. Furthermore, users desired more options for
                    filtering and sorting art, as well as a quick way to
                    identify direct purchase items versus bids. I addressed this
                    by adding clear information and filtering options on the art
                    pages. The usability study also revealed challenges with the
                    payment process, leading to confusion and abandonment of
                    purchases. To simplify the payment flow, I redesigned the
                    screens and introduced a dedicated payment settings section.
                    Moreover, participants faced navigation and scrolling
                    issues, causing frustration. To enhance the user experience,
                    I included an arrow down indicator for scrolling and
                    improved the clarity of buttons throughout the app. In the
                    high-fidelity prototype phase, further usability study
                    insights refined the display of bids on the main screen,
                    allowing users to easily identify time left for each bid. I
                    also made adjustments to the wording of categories for
                    better comprehension. Users appreciated having multiple ways
                    to reach the same screen, such as connection requests, as it
                    provided convenience and flexibility. The new payment flow
                    was found to be intuitive and distraction-free.
                    Additionally, icons played a vital role in aiding users'
                    understanding of terms and actions within the app. Overall,
                    the iterative process led to significant improvements in
                    Artket's user experience, addressing challenges and
                    incorporating user preferences. To delve deeper into these
                    design iterations and usability study insights, I invite you
                    to explore the comprehensive case study PDF.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className='row d-flex align-items-center border-bottom border-end border-start'
            id='sixth'
          >
            <div className='col-sm-6 border-end ' id='cel6.1'>
              <div className='row'>
                <div className={`${utilStyles.designsPicBox} py-4`}>
                  <Image
                    className={`${utilStyles.designsPicFitTall}`}
                    src={ArtketSettings}
                    alt='Settings screen'
                  />
                </div>
              </div>
            </div>
            <div className='col-sm-6' id='cel6.2'>
              <h4 className={utilStyles.headingMd}>Challenges</h4>
              <p>
                Limited participant recruitment for usability studies. Designing
                a complex app with a large number of screens. Limited quality
                and trustworthiness of peer feedback in an online course.
                Ensuring a seamless and intuitive payment process. Addressing
                data security and privacy concerns.
              </p>{' '}
              <h5 className={utilStyles.headingSm}>Solutions</h5>{' '}
              <p>
                Overcoming participant recruitment limitations: Leveraging
                personal networks, online communities, and social media
                platforms to expand the pool of potential participants. Offering
                incentives or rewards to encourage participation. Implementing
                unmoderated usability studies for increased flexibility.
              </p>{' '}
              <p>
                Managing the complexity of the app: Conducting thorough
                information architecture and user flow analysis to create a
                logical structure for the app. Prioritizing key features and
                functionality to streamline the user experience. Iteratively
                refining and simplifying the design through user feedback and
                testing.{' '}
              </p>{' '}
              <p>
                Getting feedback: In an online course, peer feedback quality can
                be inconsistent. To overcome this challenge, I adopted a growth
                mindset and actively sought feedback from diverse sources beyond
                my peers.
              </p>
              <p>
                Streamlining the payment process: Implementing a straightforward
                and intuitive payment flow with clear instructions and minimal
                steps. Integrating popular payment gateways, such as Apple Pay,
                to provide convenient and secure payment options. Testing the
                payment process with real users to identify and address any
                usability issues or confusion.
              </p>{' '}
              <p>
                Addressing data security and privacy concerns: These are future
                steps to take, as the app furthers into the development phases.
                Recognizing the importance of data security and privacy as an
                integral part of app development. Collaborating with experts or
                seeking external consultation to ensure compliance with data
                protection regulations and best practices. Conducting regular
                security audits to identify vulnerabilities and strengthen the
                app's security measures. While the course may not explicitly
                cover data security and privacy, it is crucial to acknowledge
                its significance and emphasize that it should be a key
                consideration during the development phase to safeguard user
                data and maintain user trust.
              </p>
            </div>
          </div>{' '}
          <div className='row border-bottom'>
            <div className='col-sm-6' id='7.1'>
              <div
                className={`text-end py-4 pe-3 float-end ${utilStyles.paragraph}`}
              >
                <h4 className={utilStyles.headingMd}>
                  Potential Impact and Results
                </h4>
                <p>
                  The Artket app, although currently in the prototype stage,
                  received positive feedback and generated excitement among
                  early testers, including a talented artist and an artist
                  manager who expressed great interest in its potential; as the
                  app's concept and features garnered enthusiasm from
                  individuals in the art community. While the app has yet to be
                  fully developed and launched, this early enthusiasm and
                  validation highlights its potential impact in the art market.
                  The prototype's intuitive user experience, visually appealing
                  design, and innovative community-oriented features seemed to
                  demonstrate the ability to meet the needs and desires of art
                  enthusiasts and professionals alike. I am excited to think
                  that the positive feedback received during the prototype phase
                  indicates the app's potential to make a meaningful impact on
                  the art community by providing a platform for buying, selling,
                  bidding, and networking with like-minded individuals. Moving
                  forward, further iterations and development of the Artket app
                  will focus on addressing challenges, refining the user
                  experience, and ensuring the highest level of data security
                  and privacy. With continued dedication and attention to
                  detail, Artket has the potential to become a valuable tool and
                  community hub for art lovers worldwide.
                </p>
              </div>
            </div>
            <div className='col-sm-6 border-end' id='cel7.2'>
              <div className='row'>
                <div className='col-lg-6' id='cel7.2.1'>
                  <div className={`${utilStyles.designsPicBox} py-4`}>
                    <Image
                      className={`${utilStyles.designsPicFitTall}`}
                      src={ArtketArtAll}
                      alt='screen of all art displayed, no filters applied'
                    />
                  </div>
                </div>
                <div className='col-lg-6' id='cel7.2.2'>
                  <div className={`${utilStyles.designsPicBox} py-4`}>
                    <Image
                      className={`${utilStyles.designsPicFitTall}`}
                      src={ArtketArtTrends}
                      alt='screen of trendy art displayed'
                    />
                  </div>
                </div>
              </div>
            </div>{' '}
          </div>
          <div className='justify-content-center border-bottom' id='final'>
            <div className='container my-2 pt-2'>
              {' '}
              <h3 className='text-center'>Course Journey</h3>
            </div>
            <div className={`${utilStyles.designsPicBox} my-4 mx-0`}>
              <Image
                className={`${utilStyles.mockupPic}`}
                src={ArtketThumbnail2}
                alt='whatever'
              />
            </div>
            <div
              className='container-md my-2'
              // style={{
              //   width: '100%',
              //   '@media (max-width: 768px)': { width: '40%' },
              // }}
            >
              <p>
                During the UX design program, I followed a structured process
                consisting of four courses that guided me in designing an app
                from a UX designer's perspective. The initial stages (Course 2)
                focused on understanding our target users through extensive
                research, prioritizing user-centric design. By gaining insights
                into user experiences and acknowledging potential biases, I
                collaborated with diverse groups to ensure a well-rounded
                understanding.
              </p>
              <p>
                Moving forward, the Define phase involved distilling our
                findings into actionable insights. We created personas, user
                stories, and journey maps to visualize interactions and identify
                areas for improvement. Accessibility considerations were
                integrated throughout the process.
              </p>
              <p>
                In the Ideate phase, we generated practical design solutions by
                formulating problem statements and proposing creative yet
                feasible ideas. Value propositions highlighted the unique
                reasons for users to engage with the app. Throughout this
                process, I gained a deep understanding of our users, identified
                pain points, and developed effective design solutions centered
                around their needs. This journey enhanced my UX design skills
                while embracing empathy, problem-solving, and human-centered
                design.
              </p>
              <p>
                During Course 3, I learned to create low-fidelity prototypes
                using Figma. User research guided the app's journey and refined
                its interactions. Inclusive design principles ensured
                accessibility for all users.
              </p>
              <p>
                Course 4 focused on user research and usability studies.
                Unmoderated usability studies provided valuable insights, which
                were incorporated into the high-fidelity design phase. The
                feedback shaped the direction of the design, resulting in a more
                user-centered and intuitive app.
              </p>
              <p>
                In Course 5, design principles were the focus and we applied
                them in creating high-fidelity prototypes. The course emphasized
                effective communication through typography, color theory,
                layout, and iconography. Feedback sessions and usability studies
                helped refine the designs and enhance the user experience.
              </p>
              <p>
                These courses provided me with a comprehensive understanding of
                UX design, allowing me to create an engaging and visually
                appealing app. I have documented my learnings and project
                details in the case study PDF, available{' '}
                <Link
                  href='GoogleUXDesignCertificate-Case_study_Artket.pdf'
                  className={`fw-bold ${utilStyles.underlined}`}
                  target='_blank'
                  rel='noopener noreferrer'
                  alt='Artket Case Study PDF'
                >
                  here
                </Link>{' '}
                .
              </p>
            </div>
            <div className={`${utilStyles.designsPicBox} mt-2 mb-1 mx-0`}>
              <Image
                className={`${utilStyles.mockupPic}`}
                src={GoogleUX}
                alt='whatever'
              />
            </div>
            <div className='container text-center mb-2 mx-0'>
              <p>
                The design thinking framework, Google's UX Design Certificate
              </p>
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

export default artket;
