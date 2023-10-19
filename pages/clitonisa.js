import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Test from '../components/Test';
import Nav from 'react-bootstrap/Nav';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.scss';
import Footer from '../components/Footer';
import HeaderClito from '../components/HeaderClito';
import Clito1 from '../public/Clitonisa/clito1.png';
import Armario from '../public/Clitonisa/armario.png';
import CajeroAmor from '../public/Clitonisa/cajero_amor.png';
import CajeroAutocobro from '../public/Clitonisa/cajero_autocobro.png';
import CajeroFila from '../public/Clitonisa/cajero_flla.png';
import GymJagger from '../public/Clitonisa/gym_jagger.png';
import GymRosa from '../public/Clitonisa/gym_rosa.png';
import PizzaGuy from '../public/Clitonisa/pizza_guy.png';
import Profecia from '../public/Clitonisa/profecia.png';
import Satys from '../public/Clitonisa/satys.png';
import Vacaciones from '../public/Clitonisa/vacaciones.png';
import CieloBg from '../public/Clitonisa/cielo.png';
// import DropsBg from '../public/Clitonisa/drops.png';
import FadingBg from '../public/Clitonisa/fadding.png';
import PizzaBg from '../public/Clitonisa/pizza.png';
// import NeonBg from '../public/Clitonisa/neon.png';

const ClitonisaPage = () => {
  return (
    <div className={utilStyles.clitoBgRosa}>
      <Head>
        <title>{siteTitle} — La Clitonisa</title>
        <link rel='icon' href='/p_logo.ico' />
      </Head>
      <HeaderClito />
      <section
        className={`min-vh-100 w-100 ps-2 mx-auto`}
        id='clitonisa_project'
        alt='Explanation of the project'
      >
        <div className={`container pt-2 ${utilStyles.textCenter}`}>
          <h2 className={`${utilStyles.clitoTitle1}`}>La Clitonisa</h2>

          <Nav.Link href='#clitonisa_illustrations'>
            <div className='d-flex'>
              <h4
                className={`${utilStyles.clitoText} ${utilStyles.clitoLink} ${utilStyles.underlined}`}
              >
                Scroll to Pictures{' '}
              </h4>{' '}
              <p
                className={`${utilStyles.arrowDown} d-flex justify-text-end`}
              ></p>
            </div>
            <br></br>
          </Nav.Link>
        </div>

        <div className='container ps-0'>
          {/* First Row */}
          <div className='row'>
            <div className='col-md-12 col-lg-6 ps-4'>
              <h3 className={`${utilStyles.clitoTitle2}`}> Project Overview</h3>
              <p className={`${utilStyles.clitoText}`}>
                I collaborated with Sandra, the author of the project, to bring
                her comedic Instagram page idea, 'La Clitonisa,' to life.
              </p>
              <br></br>
              <h3 className={`${utilStyles.clitoTitle2}`}>
                Branding and Visual Identity
              </h3>
              <p className={`${utilStyles.clitoText}`}>
                I played a pivotal role in establishing the visual identity of
                'La Clitonisa.' This included creating a distinct color palette
                and selecting suitable fonts to ensure brand consistency.
              </p>
              <br></br>
              <h3 className={`${utilStyles.clitoTitle2}`}>
                Character Refinement and Coloring
              </h3>
              <p className={`${utilStyles.clitoText}`}>
                I was responsible for designing the main character, 'La
                Clitonisa', after Sandra's sketches, ensuring her appearance
                matched the comedic and relatable tone of the content.
                Additionally, I created the faces, bodies, and distinctive
                features for other characters featured in the posts.
              </p>
              <br></br>
            </div>
            <div className='col-md-12 col-lg-6'>
              <Image
                src={CieloBg}
                alt='Cielo Background'
                width={800}
                height={600}
                className={`${utilStyles.designsPic} ${utilStyles.fullHeightPic} py-md-4`}
              />
            </div>
          </div>
          {/* Second Row */}
          <div className='row'>
            <div className='col-md-12 col-lg-6'>
              <div className={utilStyles.fullHeightPic}>
                <Image
                  src={PizzaBg}
                  alt='Pizza Background'
                  width={800}
                  height={600}
                  className={`${utilStyles.designsPic} ${utilStyles.fullHeightPic} pb-md-4`}
                />
              </div>
            </div>
            <div className='col-md-12 col-lg-6'>
              <h3 className={`${utilStyles.clitoTitle2}`}>
                Illustration and Artwork
              </h3>
              <p className={`${utilStyles.clitoText}`}>
                Using Procreate, I transformed Sandra's sketches and concepts
                into polished, professional illustrations. This involved
                meticulous attention to detail and a keen understanding of the
                desired humorous aesthetic.
              </p>
              <br></br>
              <h3 className={`${utilStyles.clitoTitle2}`}>Content Creation</h3>
              <p className={`${utilStyles.clitoText}`}>
                I translated Sandra's ideas and explanations into visually
                engaging vignettes, effectively bridging the gap between
                real-world experiences and her dating life, all while infusing
                humor into each post.
              </p>
              <h3 className={`${utilStyles.clitoTitle2}`}>
                Adaptation and Creativity
              </h3>
              <p className={`${utilStyles.clitoText}`}>
                Throughout the project, I demonstrated flexibility by making
                adjustments, fine-tuning details, and occasionally suggesting
                changes to enhance the overall quality of the content.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id='clitonisa_illustrations pt-5'>
        <div className='container text-center pt-5'>
          <h3 className={`${utilStyles.clitoTitle2} pt-4`}>Illustrations</h3>
        </div>

        <div className='container'>
          <div className='row'>
            {/* First Row */}
            <div className='container px-5 py-3 d-flex align-center justify-center'>
              <Image
                src={Clito1}
                alt='Clitonisa pitonisa'
                className={`${utilStyles.designsPic}`}
              />
            </div>{' '}
          </div>

          {/* Second Row */}
          <div className='row'>
            {/* Next Row - Two Images */}
            <div className='col-md-12 col-lg-6'>
              <Image
                src={Armario}
                alt='Clitonisa y un armario de exes'
                className={`${utilStyles.designsPic}`}
              />
            </div>
            <div className='col-md-12 col-lg-6'>
              <Image
                src={Profecia}
                alt='Guardándose una blusa'
                className={`${utilStyles.designsPic}`}
              />
            </div>
          </div>
          {/* Third Row */}

          <div className='row px-2 py-2'>
            {/* Next Row - Three Images */}
            <div className='col-md-12 col-lg-4'>
              <Image
                src={CajeroAmor}
                alt='Clitonisa con un cajero amoroso'
                width={800}
                height={600}
                className={`${utilStyles.designsPic}`}
              />
            </div>
            <div className='col-md-12 col-lg-4'>
              <Image
                src={CajeroFila}
                alt='Clitonisa con un cajero Antipático'
                width={800}
                height={600}
                className={`${utilStyles.designsPic}`}
              />
            </div>
            <div className='col-md-12 col-lg-4'>
              <Image
                src={CajeroAutocobro}
                alt='Clitonisa en un cajero autocobro'
                width={800}
                height={600}
                className={`${utilStyles.designsPic}`}
              />
            </div>{' '}
          </div>

          <div className='container'>
            <div className='row'>
              {/* Next Row - Three Images */}
              <div className='col-md-12 col-lg-4'>
                <Image
                  src={PizzaGuy}
                  alt='Picture of a guy as a pizza slice'
                  width={800}
                  height={600}
                  className={`${utilStyles.designsPic}`}
                />
              </div>
              <div className='col-md-12 col-lg-4'>
                <Image
                  src={Satys}
                  alt='Clitonisa riding to heaven'
                  width={800}
                  height={600}
                  className={`${utilStyles.designsPic}`}
                />
              </div>
              <div className='col-md-12 col-lg-4'>
                <Image
                  src={Vacaciones}
                  alt='Clitonisa with an empty suicase'
                  width={800}
                  height={600}
                  className={`${utilStyles.designsPic}`}
                />
              </div>
            </div>
          </div>

          <div className='container'>
            <div className='row'>
              {/* Next Row - Two Images */}
              <div className='col-md-12 col-lg-6'>
                <Image
                  src={GymRosa}
                  alt='Clitonisa con pesas rosas de 1kg'
                  width={800}
                  height={600}
                  className={`${utilStyles.designsPic}`}
                />
              </div>
              <div className='col-md-12 col-lg-6'>
                <Image
                  src={GymJagger}
                  alt='Clitonisa como amazona y levantando pesas pesadas'
                  width={800}
                  height={600}
                  className={`${utilStyles.designsPic}`}
                />
              </div>
            </div>
          </div>
        </div>
        <Test />
      </section>
      <Footer />
      {/* Add more image sections for the rest of the pictures */}
    </div>
  );
};

ClitonisaPage.getInitialProps = () => {
  return { customStyles: true };
};

export default ClitonisaPage;
