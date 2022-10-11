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

      <div className='bg-main'>
        <section className='home'>
          <div className={utilStyles.headingXl}> </div>{' '}
          <div className='smallerTitle'>
            <h3 className='uxWord' alt='ux'>
              UX
            </h3>
          </div>
          <div className='bigestTitle' alt='Visual Designer'>
            <h1 className={utilStyles.heading3Xl}>Visual Designer</h1>
          </div>
        </section>
        <section className='presentation' alt='landing page'>
        <div className= 'bigMoon'>
          {/* <img src='../public/images/BrightMoon.svg'/> */}
          <BrightMoon></BrightMoon>
        </div>
          <h2 className='heading2Xl'>Hi, This is Paula</h2>
          <p className='description'>I do this and that.</p>
          <p className='vertical'> find out more</p>
        </section>
        <section className='about' alt='about page'></section>
        <div className ='upper'>
        <div className ='imPaula'><h3>Hi, I am Paula</h3></div>
        <div className ='paulaDescription'><h4>Social butterfly with daily metamorphoses</h4></div>
        </div>
        <div className ='mid'>
        <div className= 'pic'>
          <Image src={ProfilePic} alt='profile picture'/>
        </div>
          
        </div>

        <div className ='bottom'>
          <div className =''>
            <p>Check out my <a href= '' target='_blank'>resume</a> </p>
          </div>
        </div>
        <section className='findme' alt='contact page'></section>
      </div>
    </Layout>
  );
}
