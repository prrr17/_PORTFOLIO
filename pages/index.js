import Head from 'next/head';
import Image from 'next/image';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import BrightMoon from '../public/images/BrightMoon.svg';
import ProfilePic from '../public/images/profile.jpeg';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
        <link rel='icon' href='/p_logo.ico' />
      </Head>

      <div className='allPages'>
        <section className='page home'>
          <div className=''>
            {' '}
            <h3
              className={`d-flex ${utilStyles.headingXl}`}
              id='uxWord'
              alt='ux'
            >
              UX
            </h3>
          </div>{' '}
          <div className='biggestTitle'>
            <h1 className={`d-flex text-wrap ${utilStyles.heading3Xl}`}>
              Visual Designer
            </h1>
          </div>
        </section>
        <section className='page presentation' alt='landing page'>
          <div className='row' id='presentationGrid'>
            <div className='col-6'>
              <div className='bigMoon img-fluid max-width: 100%; height: auto;'>
                <BrightMoon></BrightMoon>
              </div>
            </div>
            <div className='col-6'>
            <div className='row-3'>
              <h2
                className={`px-4 text-end text-wrap ${utilStyles.heading2Xl}`}
              >
                Hi, This is Paula
              </h2>
              </div>
              <div
                className={`row-3 px-4 text-end text-wrap ${utilStyles.headingXL}`}
              >
                <p className='description'>I do this and that.</p>
                </div>
                <div
                className={`row-6 px-4 text-end text-wrap ${utilStyles.headingXL}`}
              >
                <p className='verticalText'>find out more</p>
                </div>
            </div>
          </div>
        </section>

        <section className='page about' alt='about page'></section>
        <div className='row border-bottom border-primary' id='upper'>
          <div className='col-5' id='imPaula'>
            <h3 className={`text-end text-wrap ${utilStyles.headingXl}`}>
              Hi, I am Paula
            </h3>
          </div>
          <div className='col-7' id='paulaDescription'>
            <h4 className={`d-flex ${utilStyles.headingLg}`}>
              Social butterfly with daily metamorphoses
            </h4>
          </div>
        </div>

        <div className='row py-4 border-bottom border-primary' id='mid'>
          <div className='col-5' id='photoAndLife'>
            <div className='profilePic pb-4 float-end'>
              <Image className='img-fluid max-width: 100% height: auto;' src={ProfilePic} alt='profile picture' />
            </div>
            <div className='col-7' id='bornAndPlaces'>
              <div className='row'>
                <div className='col-10 border-left border-primary' id='born'>
                  <h4 className={`text-end text-wrap ${utilStyles.headingLg}`}>
                    Born in Barcelona, lived in
                  </h4>
                </div>
                <div
                  className={`col-2 ${utilStyles.textDescriptions}`}
                  id='places'
                >
                  <ul>
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
          <div className='col-7 border-primary' id='statement'>
            <h5 className={`d-flex ${utilStyles.headingMd}`}>
              Statement Lorem Ipsum
            </h5>
            <h5 className={`d-flex ${utilStyles.headingMd}`}>
              Lorem Ipsum Hire me
            </h5>
          </div>
        </div>
        <div className='row'>
          <div className='col-7' id='bornLife'>
            {' '}
          </div>
        </div>

        <div className='row pt-4' id='bottom'>
          <div className='col-5' id='info'>
            <h4 className={`d-flex ${utilStyles.headingLg}`}>
              Check out my&nbsp;{' '} 
              <a href='' target='_blank'>
                resume
              </a>{' '}
            </h4>
            <h4 className={`d-flex ${utilStyles.headingLg}`}>
              Contact&nbsp;<a href='#contact'>me</a>{' '}
            </h4>
          </div>

          <div className='col-2'>
            <h4 className={`d-flex text-end text-wrap ${utilStyles.headingLg}`}>
              IT Skills
            </h4>
          </div>
          <div className={`col-2 ${utilStyles.textDescriptions}`}>
            <ul>
              <li>Figma</li>
              <li>Procreate</li>
              <li>Notion</li>
            </ul>
          </div>
          <div className={`col-2 ${utilStyles.textDescriptions}`}>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React</li>
            </ul>
          </div>
        </div>
      </div>

      <section className='page findme' alt='contact page'></section>
    </Layout>
  );
}
