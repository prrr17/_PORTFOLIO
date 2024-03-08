import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Test from '../components/Test';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.scss';
import GoBack from '../components/GoBack';
import Footer from '../components/Footer';
import HeaderClito from '../components/HeaderClito';
import Clito1 from '../public/Clitonisa/clito1.png';
import Armario from '../public/Clitonisa/armario.png';
import CajeroAmor from '../public/Clitonisa/cajeroAmor.png';
import CajeroAutocobro from '../public/Clitonisa/cajero_autocobro.png';
import CajeroFila from '../public/Clitonisa/cajero_flla.png';
import GymJagger from '../public/Clitonisa/gym_jagger.png';
import GymRosa from '../public/Clitonisa/gym_rosa.png';
import PizzaGuy from '../public/Clitonisa/pizzaGuy.png';
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
          <div className='row'>
            <div className='col-1 pe-0'>
              <div className='d-flex pt-5 mb-0'>
                <GoBack />
              </div>
            </div>
            <div className='col-11 ps-0'>
              <h2 className={`${utilStyles.clitoTitle1}`}>La Clitonisa</h2>
            </div>
          </div>
          <Link href='#clitonisaIllustrations'>
            <div className='d-flex'>
              <h4
                className={`ps-3 ${utilStyles.clitoText} ${utilStyles.clitoLink} ${utilStyles.underlined}`}
              >
                {' '}
                Scroll to Pictures{' '}
              </h4>{' '}
              <p
                className={`${utilStyles.arrowDown}  d-flex justify-text-end`}
              ></p>
            </div>
            <br></br>
          </Link>
        </div>

        <div className='container px-0 px-md-4'>
          {/* First Row */}
          <div className='row'>
            <div
              className={`${utilStyles.clitoBgText} col-md-12 col-lg-6 d-grid justify-content-center align-items-center px-5 pt-3 mb-3`}
            >
              {' '}
              <div>
                <h3 className={`${utilStyles.clitoTitle2}`}>
                  {' '}
                  Project Overview
                </h3>
                <p className={`${utilStyles.clitoText}`}>
                  I collaborated with Sandra, the author of the project, to
                  bring her comedic Instagram page idea, 'La Clitonisa', to
                  life.
                </p>
              </div>
              <div>
                <h3 className={`${utilStyles.clitoTitle2}`}>
                  Branding and Visual Identity
                </h3>
                <p className={`${utilStyles.clitoText}`}>
                  I played a pivotal role in establishing the visual identity of
                  'La Clitonisa.' This included creating a distinct color
                  palette and selecting suitable fonts to ensure brand
                  consistency.
                </p>
              </div>
              <div>
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
              </div>
            </div>
            <div className='col-md-12 col-lg-6'>
              <Image
                src={CieloBg}
                alt='Cielo Background'
                width={800}
                height={600}
                className={`${utilStyles.designsPic} ${utilStyles.fullHeightPic} pb-md-3`}
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
                  className={`${utilStyles.designsPic} ${utilStyles.fullHeightPic} pb-md-3`}
                />
              </div>
            </div>
            <div
              className={`${utilStyles.clitoBgText} col-md-12 col-lg-6 d-grid justify-content-center align-items-center px-5 py-3 mb-3`}
            >
              <div>
                <h3 className={`${utilStyles.clitoTitle2}`}>
                  Illustration and Artwork
                </h3>
                <p className={`${utilStyles.clitoText}`}>
                  Using Procreate, I transformed Sandra's sketches and concepts
                  into polished, professional illustrations. This involved
                  meticulous attention to detail and a keen understanding of the
                  desired humorous aesthetic.
                </p>
              </div>
              <div>
                <h3 className={`${utilStyles.clitoTitle2}`}>
                  Content Creation
                </h3>
                <p className={`${utilStyles.clitoText}`}>
                  I translated Sandra's ideas and explanations into visually
                  engaging vignettes, effectively bridging the gap between
                  real-world experiences and her dating life, all while infusing
                  humor into each post.
                </p>
              </div>
              <div>
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
        </div>
      </section>

      <section className='pt-5' id='clitonisaIllustrations'>
        <div className='px-0 mx-5 text-center pt-5'>
          <h3
            className={`${utilStyles.clitoTitle2} ${utilStyles.clitoBgText} pt-4`}
          >
            Illustrations
          </h3>
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

          <div className='row py-2'>
            {/* Next Row - Three Images */}
            <div className='col-md-12 col-lg-4'>
              <Image
                src={CajeroAmor}
                alt='Clitonisa con un cajero amoroso'
                className={`${utilStyles.designsPic}`}
              />
            </div>
            <div className='col-md-12 col-lg-4'>
              <Image
                src={CajeroFila}
                alt='Clitonisa con un cajero Antipático'
                className={`${utilStyles.designsPic}`}
              />
            </div>
            <div className='col-md-12 col-lg-4'>
              <Image
                src={CajeroAutocobro}
                alt='Clitonisa en un cajero autocobro'
                className={`${utilStyles.designsPic}`}
              />
            </div>{' '}
          </div>

          <div className=''>
            <div className='row px-0'>
              {/* Next Row - Three Images */}
              <div className='col-md-12 col-lg-4'>
                <Image
                  src={PizzaGuy}
                  alt='Chico como porción de pizza y Clitonisa volando hacia él'
                  className={`${utilStyles.designsPic}`}
                />
              </div>
              <div className='col-md-12 col-lg-4'>
                <Image
                  src={Satys}
                  alt='Clitonisa montando hacia el cielo'
                  className={`${utilStyles.designsPic}`}
                />
              </div>
              <div className='col-md-12 col-lg-4'>
                <Image
                  src={Vacaciones}
                  alt='Clitonisa con malete vacía de ropa en habitación de hotel y amiga como Doraemon'
                  className={`${utilStyles.designsPic}`}
                />
              </div>
            </div>
          </div>

          <div className=''>
            <div className='row py-2'>
              {/* Next Row - Two Images */}
              <div className='col-md-12 col-lg-6'>
                <Image
                  src={GymRosa}
                  alt='Clitonisa con pesas rosas de 1kg'
                  className={`${utilStyles.designsPic}`}
                />
              </div>
              <div className='col-md-12 col-lg-6'>
                <Image
                  src={GymJagger}
                  alt='Clitonisa como amazona y levantando pesas pesadas'
                  className={`${utilStyles.designsPic}`}
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

ClitonisaPage.getInitialProps = () => {
  return { customStyles: true };
};

export default ClitonisaPage;
