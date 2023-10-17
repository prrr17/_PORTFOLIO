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
import GreenUpThumbnail from '/public/GreenUp/Thumbnail.png';
import Sticker from '../public/GreenUp/Stickersheet.png';
import GreenUpIcons from '../public/GreenUp/Iconssheet.png'; 
import GreenUpDashboard from '../public/GreenUp/iPad_dashboard.png';
import GreenUpProfile from '../public/GreenUp/iPad_profile.png';
import GreenUpHabitsYear from '../public/GreenUp/iPad_habitsyear.png';
import GreenUpHabitsMonth from '../public/GreenUp/iPad_habitsmonth.png';
import GreenUpHabitsSelections from '../public/GreenUp/iPad_habitsselection.png';
import GreenUpPhoneResources from '../public/GreenUp/iPad_resources.png';
import GreenUpPhoneDashboard from '../public/GreenUp/iPhone_dashboard.png';
import GreenUpMarketplace from '../public/GreenUp/iPad_marketplace.png';
import GreenUpPersona1 from '../public/GreenUp/persona1.png';
import GreenUpPersona2 from '../public/GreenUp/persona2.png';
import SiteMap from '../public/GreenUp/Site_map.png';
import GreenUpFeatures from '../public/GreenUp/features.png';
import IpadPrototype from '../public/GreenUp/ipad_prototype-Large.png';
import GreenUpAims from '../public/GreenUp/aims.png';
import GreenUpNotifications from '../public/GreenUp/iPad_notifications.png';
import GreenUpPhoneGoalsBA from '../public/GreenUp/iPad_goals_ba.png';
import GreenUpPhonePassword from '../public/GreenUp/iPhone_password.png';
import GreenUpPhoneWelcome from '../public/GreenUp/iphone_welcome.png';
import Events from '../public/GreenUp/events2.png';


const GreenUp = () => {
  return (
    <div>
      <Head>
        <title>
          {siteTitle} GreenUp — Empowering Sustainability Through Practical
          Tips, Resources, and Community
        </title>
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
                GreenUp
              </h2>
              <h2 className='text-end text-wrap py-4'>
                — The Sustainable Living Platform
              </h2>
            </div>
            <div className='col-sm-6 align-items-end d-flex pb-3' id='cel1.2'>
              <h3 className={utilStyles.headingLg}>
                {' '}
                Empowering Sustainability Through Practical Tips, Resources, and
                Community
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
                    src={GreenUpThumbnail}
                    alt='portfolio concept picture'
                  />
                </div>{' '}
              </div>
              <div className='row d-flex align-center' id='secondrowbottom'>
                <div className='row-xl-6' id='cel2.1.3.1'>
                  <div
                    className={`py-4 pe-3 float-end ${utilStyles.designsPicBox}`}
                  >
                    <Image
                      className={`ms-0 ${utilStyles.designsPic}`}
                      src={GreenUpProfile}
                      alt='profile screen on iPad 11"'
                    />
                  </div>
                </div>
                <div className='row-xl-6' id='cel2.1.3.2'>
                  <div
                    className={`py-4 pe-3 float-end ${utilStyles.designsPicBox}`}
                  >
                    <Image
                      className={`ms-0 ${utilStyles.designsPic}`}
                      src={GreenUpDashboard}
                      alt='dashboard screen on iPad 11"'
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
                    Welcome to <strong>GreenUp</strong>, your modern art market
                    and community. In the following paragraphs, I will take you
                    on a journey through the step-by-step process I followed to
                    create
                    <strong>GreenUp</strong>, starting from the empathize phase
                    and concluding with the final touches.
                  </p>{' '}
                  <p>
                    For a comprehensive case study, you can access the{' '}
                    <Link
                      href='GoogleUXDesignCertificate-Case_study_GreenUp.pdf'
                      className={`fw-bold ${utilStyles.underlined}`}
                      target='_blank'
                      rel='noopener noreferrer'
                      alt='GreenUp Case Study PDF'
                    >
                      complete PDF version here
                    </Link>{' '}
                    . If you're eager to explore the prototype, you can do so by
                    visiting this{' '}
                    <Link
                      href='https://www.figma.com/proto/dqqi4gsTKtT4cSB7Tygglr/Sustainable-living?page-id=473%3A19787&type=design&node-id=473-20262&viewport=561%2C321%2C0.05&t=CCGAfK0VckOgaqtO-1&scaling=scale-down&starting-point-node-id=473%3A20262&mode=design'
                      className={`fw-bold ${utilStyles.underlined}`}
                      target='_blank'
                      rel='noopener noreferrer'
                      alt='link to the Prototype on Figma of GreenUp'
                    >
                      link for the phone version,
                      {'\n'}
                    </Link>{' '}
                    and {'\n'}
                    <Link
                      href='https://www.figma.com/proto/dqqi4gsTKtT4cSB7Tygglr/Sustainable-living?page-id=391%3A3614&type=design&node-id=391-5150&viewport=593%2C352%2C0.05&t=OY9INKcXKHpi31as-1&scaling=scale-down&starting-point-node-id=391%3A5150&mode=design.'
                      className={`fw-bold ${utilStyles.underlined}`}
                      target='_blank'
                      rel='noopener noreferrer'
                      alt='link to the i Pad Prototype on Figma of GreenUp'
                    >
                      for the tablet version
                      {'\n'}
                    </Link>
                    . Please note that these prototypes were created using
                    Figma, and while they showcase the main screens and user
                    flow, as well as some extra ones to make it more playful,
                    not all screens have been designed.{' '}
                  </p>{' '}
                  <p>
                    When interacting with the prototypes (by clicking anywhere
                    on the screen), you will notice certain elements turning
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
                    , I had the chance to work on an exciting project that
                    initially began as an idea for a sustainability app.
                    However, as I advanced through the ideation phase and
                    conducted user and market research, the project transformed
                    significantly. It evolved into a comprehensive
                    sustainability platform, encompassing practical tips,
                    resources, events, and a vibrant community of eco-conscious
                    individuals, united to support and amplify sustainability
                    efforts.
                  </p>{' '}
                  <h5 className={utilStyles.headingSm}>GOAL STATEMENT</h5>
                  <p>
                    Our primary objective is to develop a responsive platform
                    that serves as a comprehensive and engaging platform for
                    promoting sustainable living practices. Our goal is to
                    provide users with accessible resources, practical tools,
                    and a thriving community that supports the adoption of
                    eco-friendly habits and values, all within a gamified
                    environment. By connecting individuals, experts, and
                    advocates in the sustainability space and offering a wealth
                    of information on diverse eco-friendly practices, our app
                    aims to transform the way people approach and live
                    sustainably while keeping accessibility in mind. Success
                    will be gauged by the number of users adopting sustainable
                    habits, actively participating in the platform's gamified
                    elements, and contributing to the vibrant sustainability
                    community.
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
                    src={Events}
                    alt='events image'
                  />
                </div>
              </div>
              <div
                className='row border-top text-end py-4 pe-3 float-end'
                id='cel3.1.2'
              >
                <h4 className={utilStyles.headingMd}>
                  Design Process Overview
                </h4>
                <p>
                  Throughout the development of GreenUp, I followed a structured
                  design process given by Google's courses that allowed me to
                  create a user-centered and effective eco-concious platform.
                  The process consisted of several key steps, each contributing
                  to the overall potential success of the project.
                </p>
                <h5 className={utilStyles.headingSm}>EMPATHIZE</h5>
                <p>
                  The first phase. We need to start by understanding the target
                  users. I started by conducting extensive user research to
                  understand the needs, behaviors, and motivations of people who
                  would like to be more environmentally aware and have a better
                  impact in the world. This helped me gain valuable insights
                  into their pain points and expectations within the
                  eco-concious community.
                </p>{' '}
                <h5 className={utilStyles.headingSm}>DEFINE</h5>
                <p>
                  Building upon the research findings, clear problem statements
                  and user stories were defined, which then guided the design
                  process. By focusing on the users' needs and aspirations, I
                  established specific goals and deliverables to ensure the
                  platform would address their requirements effectively.
                </p>{' '}
                <h5 className={utilStyles.headingSm}>IDEATE</h5>
                <p>
                  {' '}
                  During this phase, it is important to explore a wide range of
                  ideas and concepts to create an engaging and innovative
                  platform that meet our goals. Through brainstorming sessions
                  and techniques like "crazy eights" and "how might we," diverse
                  design possibilities were imagined, followed by evaluating
                  their feasibility, desirability, and viability in order to
                  start discarding.{' '}
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
                  In the testing phase, usability studies were conducted to
                  assess user interactions and identify areas for improvement.
                  Participants were recruited to represent the platform's
                  potential user base. By observing and analyzing user
                  interactions, during unmoderated usability studies, I
                  identified areas for improvement and made iterative design
                  changes to enhance the overall user experience —always keeping
                  the objectives and porblem satatement in mind.{' '}
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
                <div className={`${utilStyles.profilePicBox}  py-4`}>
                  <Image
                    className={`float-end ms-0 p-0 ${utilStyles.mockupPic}`}
                    src={IpadPrototype}
                    alt='iPad Prototype screen'
                  />
                </div>
              </div>
            </div>
            <div className='col-sm-6 border-end'>
              <div className='row'>
                <div className={`${utilStyles.designsPicBox} float-end pt-4`}>
                  <Image
                    className={`${utilStyles.mockupPic}`}
                    src={SiteMap}
                    alt='site map diagram'
                  />
                </div>
              </div>

              <div className='row'>
                <div className={`col ${utilStyles.designsPicBox} py-2`}>
                  <Image
                    className={`${utilStyles.mockupPic}`}
                    src={GreenUpPersona1}
                    alt='persona 1'
                  />
                </div>{' '}
                <div className={`col ${utilStyles.designsPicBox} py-2`}>
                  <Image
                    className={`${utilStyles.mockupPic}`}
                    src={GreenUpPersona2}
                    alt='persona 2'
                  />
                </div>
              </div>
              <div className='row'>
                <div className={`${utilStyles.designsPicBox}`}>
                  <Image
                    className={`${utilStyles.mockupPic}`}
                    src={GreenUpAims}
                    alt='aims of the platform'
                  />
                </div>                
              </div>
              <div className='row'>
                <div className={`${utilStyles.designsPicBox} pb-4`}>
                  <Image
                    className={`${utilStyles.mockupPic}`}
                    src={GreenUpFeatures}
                    alt='features and future features of the platform'
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
                  className={`pt-4 pe-3 float-end ${utilStyles.designsPicBox}`}
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
                  className={`pb-4 pe-3 float-end ${utilStyles.designsPicBox}`}
                >
                  <div className={`${utilStyles.designsPicBox} py-4`}>
                    <Image
                      className={`${utilStyles.designsPic}`}
                      src={GreenUpIcons}
                      alt='display of some icon components'
                    />
                  </div>
                </div>
              </div>{' '}
              <div className='row' id='cel4.1.3'>
                <div
                  className={`col py-4 pe-3 float-end ${utilStyles.designsPicBox}`}
                >
                  <div className={`${utilStyles.designsPicBox} py-4`}>
                    <Image
                      className={`${utilStyles.designsPic}`}
                      src={GreenUpHabitsYear}
                      alt=''
                    />
                  </div>
                </div>
                <div
                  className={`col py-4 pe-3 float-end ${utilStyles.designsPicBox}`}
                >
                  <div className={`${utilStyles.designsPicBox} py-4`}>
                    <Image
                      className={`${utilStyles.designsPic}`}
                      src={GreenUpHabitsMonth}
                      alt=''
                    />
                  </div>
                </div>
              </div>{' '}
              <div className='row' id='cel4.1.3'>
                <div
                  className={`col py-4 pe-3 float-end ${utilStyles.designsPicBox}`}
                >
                  <div className={`${utilStyles.designsPicBox} py-4`}>
                    <Image
                      className={`${utilStyles.designsPic}`}
                      src={GreenUpMarketplace}
                      alt='marketplace screen with the lateral bar open'
                    />
                  </div>
                </div>
                <div
                  className={`col py-4 pe-3 float-end ${utilStyles.designsPicBox}`}
                >
                  <div className={`${utilStyles.designsPicBox} py-4`}>
                    <Image
                      className={`${utilStyles.designsPic}`}
                      src={GreenUpNotifications}
                      alt='resources page with the notification pop-up open'
                    />
                  </div>
                </div>
              </div>{' '}
              <div className='row' id='cel4.1.4'>
                <div
                  className={`py-4 pe-3 float-end ${utilStyles.designsPicBox}`}
                >
                  <div className={`${utilStyles.designsPicBox} py-4`}>
                    <Image
                      className={`${utilStyles.designsPic}`}
                      src={GreenUpPhoneGoalsBA}
                      alt='two screen displaying the goal screen before and after usability study'
                    />
                  </div>
                </div>
                <p>
                  Screenshots exploring different prototypes. After the
                  usability study a new column was added there is a section
                  encouraging to keep going by giving statistics of how user’s
                  actions have help the environment To see the final one check
                  the prototype{' '}
                  <Link
                    href='https://www.figma.com/proto/dqqi4gsTKtT4cSB7Tygglr/Sustainable-living?page-id=473%3A19787&type=design&node-id=473-20262&viewport=561%2C321%2C0.05&t=CCGAfK0VckOgaqtO-1&scaling=scale-down&starting-point-node-id=473%3A20262&mode=design'
                    className={`fw-bold ${utilStyles.underlined}`}
                    target='_blank'
                    rel='noopener noreferrer'
                    alt='link to the Prototype on Figma of GreenUp'
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
                    During the design process of GreenUp, I made several key
                    design decisions that were influenced by user experience
                    considerations. Here are the design decisions and user
                    experience considerations I incorporated into the app:{' '}
                  </p>
                  <h5 className={utilStyles.headingSm}>
                    DESIGN AESTHETICS AND GAMIFICATION
                  </h5>
                  <p>
                    In crafting the GreenUp app, I placed a strong emphasis on
                    aesthetics and gamification to create an engaging and
                    enjoyable user experience. The app's visual style is
                    characterized by playful and friendly aesthetics, featuring
                    a palette of vibrant blue and green, and pastel colors that
                    inspire a welcoming and lively atmosphere. Gamification
                    elements are integrated to encourage user engagement, with
                    users earning badges for their eco-friendly actions and
                    achievements. I myself draw the badges and icons in
                    Procreate to convey a coherent visual experience.
                  </p>
                  <h5 className={utilStyles.headingSm}>TYPOGRAPHY AND FONTS</h5>
                  <p>
                    In crafting the visual identity of the GreenUp app,
                    typography plays a crucial role. I have carefully selected
                    fonts that reflect the app's personality and user-friendly
                    approach. The primary typeface, 'Nighty DEMO,' draws
                    inspiration from the 70s, exuding groovy and retro vibes
                    reminiscent of the era's early climate awareness efforts.
                    Designed by Jamaludin Ahmad Sahestya Dharma of Dharmas
                    Studio, this font adds a touch of nostalgia and warmth to
                    the app's aesthetics. For a contrasting and highly readable
                    text, we've incorporated 'Outfit,' a geometric and round
                    sans-serif font. Its clean and simplistic design ensures
                    that users can easily engage with the app's content.
                    'Outfit' not only promotes readability but also creates a
                    friendly and approachable atmosphere. Both fonts work in
                    harmony to provide a visually pleasing and user-centric
                    typographic experience.{' '}
                  </p>
                  <h5 className={utilStyles.headingSm}>
                    EFFICIENT NAVIGATION AND USERS INTERFACE
                  </h5>
                  <p>
                    To ensure seamless navigation, the app incorporates a
                    lateral bar for users on larger screens, and a simple
                    hamburger menu that provides full-screen access on smaller
                    screens. This navigation bar offers quick access to
                    essential sections, including the dashboard, user profile,
                    and settings. Notably, the Marketplace is accessible solely
                    via the sidebar menu, reflecting our intention to maintain
                    its secondary role and prevent the app from becoming
                    primarily an e-commerce platform. User profiles remain
                    conveniently accessible from any screen, ensuring a fluid
                    and user-friendly experience. To enhance usability, a
                    floating dashboard button is positioned at the bottom-center
                    of the interface. Furthermore, users have multiple access
                    points to key screens, such as 'Goals,' 'Habits,'
                    'Community,' and 'Rewards,' through both the dashboard and
                    the user profile, providing added convenience and efficient
                    navigation.
                  </p>
                  <h5 className={utilStyles.headingSm}>
                    FOCUSING ON SUSTAINABILITY FEATURES
                  </h5>
                  <p>
                    The GreenUp app places a central emphasis on empowering
                    users with a comprehensive set of sustainability features.
                    Users enjoy easy access to a wealth of sustainability tips,
                    both personalized and general, enabling them to make
                    eco-friendly choices. The app supports users in tracking
                    their sustainability goals, selecting sustainable habits,
                    and monitoring their progress. It includes a valuable carbon
                    footprint calculator to help users understand their
                    environmental impact. The platform offers online workshops,
                    fostering active engagement within a like-minded community
                    committed to sustainable living. Notably, the app encourages
                    users to create and participate in eco-friendly events,
                    fostering meaningful connections and shared experiences.
                    Users can also explore a diverse range of eco-friendly
                    recipes, further enhancing their sustainable living journey.
                    The GreenUp app is thoughtfully designed to make
                    eco-friendly practices enjoyable and accessible, and our
                    commitment to ongoing improvement means that more features
                    are planned for future updates.
                  </p>
                  <h5 className={utilStyles.headingSm}>USERS NOTIFICATIONS</h5>
                  <p>
                    To keep users informed and engaged, the app includes a
                    notifications button, situated at the bottom-left of each
                    screen (except for the marketplace section). These
                    notifications serve as a valuable communication tool,
                    providing updates on user achievements, event participation,
                    and other pertinent information.
                  </p>{' '}
                  <p>
                    These design considerations and features collectively
                    contribute to a vibrant, enjoyable, and user-centric
                    experience within the GreenUp app.
                  </p>
                </div>
              </div>
              <div className='row' id='cel4.2.1'>
                <div className='container my-5'>
                  <h4 className={utilStyles.headingMd}> Iterative Process</h4>
                  <p>
                    In the iterative design process, I placed a strong focus on
                    incorporating user feedback gathered from usability studies
                    to continually enhance the user experience of the GreenUp
                    app. The findings obtained during the low-fidelity prototype
                    phase revealed several key areas for improvement. Most
                    notably, users expressed confusion about the absence of a
                    notifications feature in the app. To address this, a
                    floating notification button was strategically introduced at
                    the bottom-right corner of each screen, ensuring easy access
                    to updates and alerts. Additionally, consistent navigation
                    was emphasized by placing a back arrow in the same location
                    on every screen, facilitating seamless user movement within
                    the app.
                  </p>
                  <p>
                    Subsequent usability studies conducted during the
                    high-fidelity prototype phase provided valuable insights for
                    refining the gamification aspect of the app. A new column,
                    'You saved,' was introduced within the 'goals' screen,
                    giving users a tangible sense of their accomplishments by
                    quantifying the number of items saved through their
                    sustainability efforts. In response to user feedback, I
                    enhanced the overall user experience by incorporating visual
                    indicators, such as left arrows for scrolling and improved
                    button clarity. To enhance the user experience, I introduced
                    an arrow-left indicator for scrolling and improved the
                    clarity of buttons throughout the app. Additionally, I added
                    an arrow-right indicator after the text on buttons to
                    signify the change of the screen upon clicking. These design
                    refinements aimed to provide users with a more intuitive and
                    user-friendly interface.
                  </p>
                  <p>
                    Users' appreciation for multiple access points to key
                    screens, including the community, goals, and habits
                    sections, highlighted the significance of convenience and
                    flexibility in their journey toward sustainable living. The
                    iterative design process played a pivotal role in making
                    substantial enhancements to GreenUp's user experience,
                    effectively addressing challenges and integrating user
                    preferences. For a more in-depth exploration of these design
                    iterations and insights gained from usability studies, I
                    encourage you to delve into the comprehensive case study{' '}
                    <Link
                      href='GoogleUXDesignCertificate-Case_study_GreenUp.pdf'
                      className={`fw-bold ${utilStyles.underlined}`}
                      target='_blank'
                      rel='noopener noreferrer'
                      alt='GreenUp Case Study PDF'
                    >
                      PDF
                      {'\n'}
                    </Link>{' '}
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
                <div className='col'>
                  <div className={`${utilStyles.designsPicBox} py-4`}>
                    <Image
                      className={`${utilStyles.designsPicFitTall}`}
                      src={GreenUpPhonePassword}
                      alt='Forgot your password screen'
                    />
                  </div>
                </div>
                <div className='col'>
                  <div className={`${utilStyles.designsPicBox} py-4`}>
                    <Image
                      className={`${utilStyles.designsPicFitTall}`}
                      src={GreenUpPhoneWelcome}
                      alt='Wlcome screen'
                    />
                  </div>
                </div>
              </div>
              <div className='row'>
                <div className={`${utilStyles.designsPicBox} py-4`}>
                  <Image
                    className={`${utilStyles.designsPicFitTall}`}
                    src={GreenUpPhoneDashboard}
                    alt='Dashboard screen'
                  />
                </div>
              </div>
            </div>
            <div className='col-sm-6' id='cel6.2'>
              <h4 className={utilStyles.headingMd}>Challenges</h4>
              <p>
                User Engagement: One of the main challenges was to ensure active
                user engagement with sustainability practices and resources.
                Encouraging users to adopt eco-friendly habits and participate
                in the community presented a significant challenge.{' '}
              </p>
              <p>
                Complexity and Size: Designing a comprehensive platform with a
                hierarchical structure, multiple features, and numerous screens
                required effective management of complexity and ensuring that
                users could easily navigate the app.{' '}
              </p>
              <p>
                Balancing Marketplace: Striking a balance between offering a
                marketplace for eco-friendly products and maintaining the
                primary focus on sustainability tips, tracking, and community
                engagement presented a challenge.
              </p>
              <p>
                Accessibility: Ensuring that the app is accessible to users with
                diverse abilities and needs was an essential challenge.
              </p>
              <p>Limited participant recruitment for usability studies.</p>{' '}
              <p>
                Limited quality and trustworthiness of peer feedback in an
                online course.
              </p>{' '}
              <h5 className={utilStyles.headingSm}>Solutions</h5>{' '}
              <p>
                User Engagement: To address the challenge of user engagement, we
                integrated gamification elements, such as badges and
                achievements, to incentivize and reward users for their
                eco-friendly actions. The introduction of notifications and
                feedback mechanisms helps users track their progress and stay
                motivated.
              </p>{' '}
              <p>
                Complexity and Size: Managing the complexity and size of the app
                was achieved through meticulous information architecture and
                user flow analysis. Prioritization of key features and iterative
                design refinement, guided by user feedback, significantly
                streamlined the user experience. Additionally, it's important to
                note that not all screens have been fully designed at this
                stage. Due to project constraints, we focused on creating the
                most relevant screens for the initial version of the platform.{' '}
              </p>{' '}
              <p>
                Balancing Marketplace: To maintain the app's primary focus on
                sustainability, we limited access to the marketplace through the
                sidebar menu. The emphasis was placed on providing users with
                the best sustainability tips, tracking their goals and habits,
                and facilitating community engagement. Future app updates will
                continue to enhance these core features.
              </p>
              <p>
                Accessibility: The app was designed with accessibility in mind.
                Various ways to reach the same screen, such as community, goals,
                and habits, were incorporated to provide convenience and
                flexibility for users with diverse abilities.
              </p>{' '}
              <p>
                Overcoming participant recruitment limitations: Leveraging
                personal networks, online communities, and social media
                platforms to expand the pool of potential participants. Offering
                incentives or rewards to encourage participation. Implementing
                unmoderated usability studies for increased flexibility.
              </p>{' '}
              <p>
                Getting feedback: In an online course, peer feedback quality can
                be inconsistent. To overcome this challenge, I adopted a growth
                mindset and actively sought feedback from diverse sources beyond
                my peers.
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
                  The GreenUp app, even in its prototype stage, has the
                  potential to make a significant impact on sustainability
                  efforts. Early feedback and user enthusiasm demonstrate the
                  app's ability to engage and empower users to adopt
                  eco-friendly practices. The inclusion of gamification
                  elements, a user-friendly interface, and accessibility
                  features enhances the user experience. As the app continues to
                  evolve and address challenges, it aims to become a valuable
                  tool and community for individuals committed to sustainable
                  living. The potential impact includes motivating users to
                  reduce their carbon footprint, adopt eco-friendly habits, and
                  actively engage with a supportive community of like-minded
                  individuals. The positive feedback received during the
                  prototype phase indicates the app's potential to promote
                  sustainability and make a meaningful impact in the realm of
                  eco-conscious living.
                </p>
              </div>
            </div>
            <div className='col-sm-6 border-end' id='cel7.2'>
              <div className='row'>
                <div className='col-lg-6' id='cel7.2.1'>
                  <div className={`${utilStyles.designsPicBox} py-4`}>
                    <Image
                      className={`${utilStyles.designsPicFitTall}`}
                      src={GreenUpHabitsSelections}
                      alt='screen of habit selection'
                    />
                  </div>
                </div>
                <div className='col-lg-6' id='cel7.2.2'>
                  <div className={`${utilStyles.designsPicBox} py-4`}>
                    <Image
                      className={`${utilStyles.designsPicFitTall}`}
                      src={GreenUpPhoneResources}
                      alt='iPhone screen of resources'
                    />
                  </div>
                </div>
              </div>
            </div>{' '}
          </div>
          <div className='justify-content-center border-bottom' id='final'>
            <div className={`${utilStyles.designsPicBox} my-4 mx-0`}>
              <Image
                className={`${utilStyles.mockupPic}`}
                src={GreenUpThumbnail}
                alt='GreenUp presentation screen'
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

export default GreenUp;
